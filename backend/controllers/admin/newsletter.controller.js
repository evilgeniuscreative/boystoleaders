// controllers/admin/newsletter.controller.js
const { Newsletter, User, UserProfile } = require('../../models');

const { sendNewsletter } = require('../../services/email.service');
const mongoose = require('mongoose');

// Get all newsletters with pagination and filtering
exports.getAllNewsletters = async (req, res) => {
  try {
    const { 
      status, 
      page = 1, 
      limit = 20,
      sortBy = 'createdAt',
      sortDir = 'desc'
    } = req.query;
    
    const query = {};
    if (status) query.status = status;
    
    const skip = (page - 1) * limit;
    const sort = {};
    sort[sortBy] = sortDir === 'asc' ? 1 : -1;
    
    const totalCount = await Newsletter.countDocuments(query);
    
    const newsletters = await Newsletter.find(query)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit))
      .populate('createdBy', 'firstName lastName');
    
    res.json({
      newsletters,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: Number(page)
    });
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    res.status(500).json({ message: 'Server error while fetching newsletters' });
  }
};

// Get newsletter by ID
exports.getNewsletterById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const newsletter = await Newsletter.findById(id)
      .populate('createdBy', 'firstName lastName');
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }
    
    res.json(newsletter);
  } catch (error) {
    console.error('Error fetching newsletter:', error);
    res.status(500).json({ message: 'Server error while fetching newsletter' });
  }
};

// Create newsletter
exports.createNewsletter = async (req, res) => {
  try {
    const newsletter = new Newsletter({
      ...req.body,
      createdBy: req.user.id,
      status: 'draft'
    });
    
    await newsletter.save();
    
    res.status(201).json(newsletter);
  } catch (error) {
    console.error('Error creating newsletter:', error);
    res.status(500).json({ message: 'Server error while creating newsletter' });
  }
};

// Update newsletter
exports.updateNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    
    const newsletter = await Newsletter.findById(id);
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }
    
    // Only allow updates to drafts
    if (newsletter.status !== 'draft') {
      return res.status(400).json({ 
        message: 'Cannot update a newsletter that has been sent or scheduled' 
      });
    }
    
    // Update fields
    Object.assign(newsletter, req.body);
    await newsletter.save();
    
    res.json(newsletter);
  } catch (error) {
    console.error('Error updating newsletter:', error);
    res.status(500).json({ message: 'Server error while updating newsletter' });
  }
};

// Schedule newsletter
exports.scheduleNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    const { scheduledFor } = req.body;
    
    if (!scheduledFor) {
      return res.status(400).json({ message: 'Scheduled date is required' });
    }
    
    const scheduledDate = new Date(scheduledFor);
    
    // Validate date is in the future
    if (scheduledDate <= new Date()) {
      return res.status(400).json({ message: 'Scheduled date must be in the future' });
    }
    
    const newsletter = await Newsletter.findById(id);
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }
    
    // Only drafts can be scheduled
    if (newsletter.status !== 'draft') {
      return res.status(400).json({ 
        message: 'Only draft newsletters can be scheduled' 
      });
    }
    
    newsletter.status = 'scheduled';
    newsletter.scheduledFor = scheduledDate;
    await newsletter.save();
    
    // Schedule a job to send this newsletter
    // Note: In a production app, you'd use a proper job scheduler like Bull
    const timeUntilSend = scheduledDate.getTime() - Date.now();
    setTimeout(async () => {
      try {
        // Get the newsletter again to ensure it's still scheduled
        const newsletterToSend = await Newsletter.findById(id);
        if (newsletterToSend && newsletterToSend.status === 'scheduled') {
          await sendNewsletterToRecipients(id);
        }
      } catch (err) {
        console.error('Error in scheduled newsletter send:', err);
      }
    }, timeUntilSend);
    
    res.json(newsletter);
  } catch (error) {
    console.error('Error scheduling newsletter:', error);
    res.status(500).json({ message: 'Server error while scheduling newsletter' });
  }
};

// Send newsletter immediately
exports.sendNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    
    const newsletter = await Newsletter.findById(id);
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }
    
    // Only drafts or scheduled newsletters can be sent
    if (!['draft', 'scheduled'].includes(newsletter.status)) {
      return res.status(400).json({ 
        message: 'Newsletter has already been sent or cancelled' 
      });
    }
    
    // Start sending process (async)
    const result = await sendNewsletterToRecipients(id);
    
    res.json({
      message: 'Newsletter sending started',
      recipientCount: result.totalRecipients
    });
  } catch (error) {
    console.error('Error sending newsletter:', error);
    res.status(500).json({ message: 'Server error while sending newsletter' });
  }
};

// Helper function to send newsletter to all recipients
const sendNewsletterToRecipients = async (newsletterId) => {
  try {
    const newsletter = await Newsletter.findById(newsletterId);
    
    if (!newsletter) {
      throw new Error('Newsletter not found');
    }
    
    // Build query for recipients based on targeting criteria
    const query = { 'emailPreferences.subscribed': true };
    
    // Add age targeting if specified
    if (newsletter.targetAudience.ageMin || newsletter.targetAudience.ageMax) {
      query.birthdate = {};
      
      if (newsletter.targetAudience.ageMin) {
        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() - newsletter.targetAudience.ageMin);
        query.birthdate.$lte = maxDate;
      }
      
      if (newsletter.targetAudience.ageMax) {
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - newsletter.targetAudience.ageMax);
        query.birthdate.$gte = minDate;
      }
    }
    
    // Get eligible recipients
    const recipients = await UserProfile.find(query)
      .select('userId personalInfo.firstName personalInfo.lastName emailPreferences')
      .populate('userId', 'email');
    
    // Format recipients for email service
    const formattedRecipients = recipients.map(profile => ({
      _id: profile.userId._id,
      email: profile.userId.email,
      firstName: profile.personalInfo.firstName
    }));
    
    // Update newsletter status
    newsletter.status = 'sent';
    await newsletter.save();
    
    // Send to all recipients
    const result = await sendNewsletter(newsletterId, formattedRecipients);
    
    return {
      ...result,
      totalRecipients: formattedRecipients.length
    };
  } catch (error) {
    console.error('Error in sendNewsletterToRecipients:', error);
    throw error;
  }
};

// Cancel scheduled newsletter
exports.cancelNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    
    const newsletter = await Newsletter.findById(id);
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }
    
    // Only scheduled newsletters can be cancelled
    if (newsletter.status !== 'scheduled') {
      return res.status(400).json({ 
        message: 'Only scheduled newsletters can be cancelled' 
      });
    }
    
    newsletter.status = 'cancelled';
    await newsletter.save();
    
    res.json({
      message: 'Newsletter cancelled successfully',
      newsletter
    });
  } catch (error) {
    console.error('Error cancelling newsletter:', error);
    res.status(500).json({ message: 'Server error while cancelling newsletter' });
  }
};

// Get newsletter stats
exports.getNewsletterStats = async (req, res) => {
  try {
    const { id } = req.params;
    
    const EmailLog = mongoose.model('EmailLog');
    
    const newsletter = await Newsletter.findById(id);
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }
    
    // Get detailed stats
    const stats = await EmailLog.aggregate([
      { $match: { newsletterId: mongoose.Types.ObjectId(id) } },
      { $group: {
        _id: '$status',
        count: { $sum: 1 },
        openCount: { $sum: { $cond: ['$opened', 1, 0] } },
        clickCount: { $sum: { $cond: ['$clicked', 1, 0] } }
      }}
    ]);
    
    // Format stats
    const formattedStats = {
      total: newsletter.stats?.totalRecipients || 0,
      sent: 0,
      failed: 0,
      opened: 0,
      clicked: 0
    };
    
    stats.forEach(stat => {
      if (stat._id === 'sent') {
        formattedStats.sent = stat.count;
        formattedStats.opened = stat.openCount;
        formattedStats.clicked = stat.clickCount;
      } else if (stat._id === 'failed') {
        formattedStats.failed = stat.count;
      }
    });
    
    // Calculate rates
    formattedStats.openRate = formattedStats.sent > 0 
      ? (formattedStats.opened / formattedStats.sent * 100).toFixed(2) 
      : 0;
    
    formattedStats.clickRate = formattedStats.opened > 0 
      ? (formattedStats.clicked / formattedStats.opened * 100).toFixed(2) 
      : 0;
    
    res.json({
      newsletter,
      stats: formattedStats
    });
  } catch (error) {
    console.error('Error fetching newsletter stats:', error);
    res.status(500).json({ message: 'Server error while fetching newsletter stats' });
  }
};