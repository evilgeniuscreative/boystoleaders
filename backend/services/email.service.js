// services/email.service.js
const nodemailer = require('nodemailer');
const { EmailLog, Newsletter } = require('../models');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Configure email transport
const getTransporter = () => {
  if (process.env.NODE_ENV === 'production') {
    // Use a production-ready email service
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  } else {
    // For development, use a test account or a service like Mailtrap
    return nodemailer.createTransport({
      host: process.env.DEV_EMAIL_HOST || 'smtp.mailtrap.io',
      port: process.env.DEV_EMAIL_PORT || 2525,
      auth: {
        user: process.env.DEV_EMAIL_USER,
        pass: process.env.DEV_EMAIL_PASS
      }
    });
  }
};

// Load and compile email templates
const loadTemplate = (templateName) => {
  try {
    const templatePath = path.join(__dirname, '../templates/emails', `${templateName}.hbs`);
    const templateSource = fs.readFileSync(templatePath, 'utf8');
    return Handlebars.compile(templateSource);
  } catch (error) {
    console.error(`Error loading template ${templateName}:`, error);
    // Fallback to a simple template if the file doesn't exist
    return Handlebars.compile('<h1>{{title}}</h1><p>{{content}}</p>');
  }
};

/**
 * Send an individual email
 * @param {Object} options - Email options
 * @returns {Object} Sending result
 */
exports.sendEmail = async (options) => {
  try {
    const { recipient, subject, template, data, attachments = [] } = options;
    
    // Generate tracking ID
    const trackingId = new mongoose.Types.ObjectId();
    
    // Prepare template
    const emailTemplate = loadTemplate(template);
    const htmlContent = emailTemplate({
      ...data,
      trackingId: trackingId.toString(),
      unsubscribeUrl: `${process.env.API_URL}/api/email/unsubscribe?token=${data.unsubscribeToken}&email=${recipient}`
    });
    
    // Prepare email
    const mailOptions = {
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: recipient,
      subject: subject,
      html: htmlContent,
      attachments: [
        ...attachments,
        // Add tracking pixel
        {
          filename: 'tracking.png',
          path: `${process.env.API_URL}/api/email/track?id=${trackingId}`,
          cid: 'tracking'
        }
      ]
    };
    
    // Send email
    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);
    
    // Log email send
    if (options.track !== false) {
      await EmailLog.create({
        recipientEmail: recipient,
        trackingId,
        status: 'sent',
        newsletterId: options.newsletterId,
        recipientId: options.userId,
        sentAt: new Date()
      });
    }
    
    return {
      success: true,
      messageId: info.messageId,
      trackingId
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Log failure if tracking is enabled
    if (options.track !== false && options.recipient) {
      await EmailLog.create({
        recipientEmail: options.recipient,
        trackingId: new mongoose.Types.ObjectId(),
        status: 'failed',
        newsletterId: options.newsletterId,
        recipientId: options.userId,
        error: error.message,
        sentAt: new Date()
      });
    }
    
    throw error;
  }
};

/**
 * Send a newsletter to multiple recipients
 * @param {string} newsletterId - ID of the newsletter to send
 * @param {Array} recipients - List of recipients with email and personalization data
 * @returns {Object} Sending results
 */
exports.sendNewsletter = async (newsletterId, recipients) => {
  try {
    // Get newsletter data
    const newsletter = await Newsletter.findById(newsletterId);
    if (!newsletter) {
      throw new Error('Newsletter not found');
    }
    
    // Track results
    const results = {
      totalRecipients: recipients.length,
      sentCount: 0,
      failedCount: 0,
      failures: []
    };
    
    // Send to each recipient
    for (const recipient of recipients) {
      try {
        await exports.sendEmail({
          recipient: recipient.email,
          subject: newsletter.subject,
          template: 'newsletter',
          data: {
            ...newsletter.toObject(),
            firstName: recipient.firstName || 'Member',
            unsubscribeToken: recipient.unsubscribeToken || 'token'
          },
          newsletterId: newsletter._id,
          userId: recipient._id,
          track: true
        });
        
        results.sentCount++;
      } catch (error) {
        results.failedCount++;
        results.failures.push({
          email: recipient.email,
          error: error.message
        });
      }
    }
    
    // Update newsletter stats
    await Newsletter.findByIdAndUpdate(newsletterId, {
      $set: {
        status: 'sent',
        sentAt: new Date(),
        'stats.totalRecipients': results.totalRecipients,
        'stats.sentCount': results.sentCount,
        'stats.failedCount': results.failedCount
      }
    });
    
    return results;
  } catch (error) {
    console.error('Error sending newsletter:', error);
    throw error;
  }
};

/**
 * Track email opens
 * @param {string} trackingId - ID for tracking this email
 * @returns {boolean} Success status
 */
exports.trackEmailOpen = async (trackingId) => {
  try {
    const result = await EmailLog.findOneAndUpdate(
      { trackingId },
      { 
        $set: { opened: true, openedAt: new Date() },
        $inc: { openCount: 1 }
      }
    );
    
    if (result && result.newsletterId) {
      // Update newsletter open stats
      await Newsletter.findByIdAndUpdate(
        result.newsletterId,
        { $inc: { 'stats.openCount': 1 } }
      );
    }
    
    return true;
  } catch (error) {
    console.error('Error tracking email open:', error);
    return false;
  }
};

/**
 * Track email link clicks
 * @param {string} trackingId - ID for tracking this email
 * @param {string} url - Clicked URL
 * @returns {boolean} Success status
 */
exports.trackEmailClick = async (trackingId, url) => {
  try {
    const emailLog = await EmailLog.findOne({ trackingId });
    
    if (!emailLog) {
      return false;
    }
    
    // Check if this link has been clicked before
    const existingLinkIndex = emailLog.links ? 
      emailLog.links.findIndex(link => link.url === url) : -1;
    
    if (existingLinkIndex >= 0) {
      // Update existing link click count
      emailLog.links[existingLinkIndex].clickCount += 1;
    } else {
      // Add new link
      if (!emailLog.links) {
        emailLog.links = [];
      }
      emailLog.links.push({
        url,
        clickCount: 1
      });
    }
    
    // Update click data
    emailLog.clicked = true;
    emailLog.clickedAt = emailLog.clickedAt || new Date();
    emailLog.clickCount = (emailLog.clickCount || 0) + 1;
    
    await emailLog.save();
    
    // Update newsletter click stats
    if (emailLog.newsletterId) {
      await Newsletter.findByIdAndUpdate(
        emailLog.newsletterId,
        { $inc: { 'stats.clickCount': 1 } }
      );
    }
    
    return true;
  } catch (error) {
    console.error('Error tracking email click:', error);
    return false;
  }
};

/**
 * Send a welcome email to a new user
 * @param {Object} user - User object
 * @param {Object} userProfile - UserProfile object
 * @returns {Object} Sending result
 */
exports.sendWelcomeEmail = async (user, userProfile) => {
  try {
    return await exports.sendEmail({
      recipient: user.email,
      subject: `Welcome to BoysToLeaders, ${userProfile.personalInfo.firstName}!`,
      template: 'welcome',
      data: {
        firstName: userProfile.personalInfo.firstName,
        unsubscribeToken: userProfile.emailPreferences?.unsubscribeToken || 'token'
      },
      userId: user._id,
      track: true
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
};

/**
 * Send a password reset email
 * @param {string} email - User's email
 * @param {string} resetToken - Password reset token
 * @returns {Object} Sending result
 */
exports.sendPasswordResetEmail = async (email, resetToken, userId) => {
  try {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    
    return await exports.sendEmail({
      recipient: email,
      subject: 'Reset Your BoysToLeaders Password',
      template: 'password-reset',
      data: {
        resetUrl
      },
      userId,
      track: false // Don't track password reset emails for privacy
    });
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};