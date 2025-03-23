// controllers/email.controller.js
const path = require('path');
const fs = require('fs');
const { trackEmailOpen } = require('../services/email.service');

// Serve tracking pixel and record open
exports.trackOpen = async (req, res) => {
  try {
    const { id } = req.query;
    
    // Record the open event (async)
    if (id) {
      trackEmailOpen(id).catch(err => console.error('Error tracking email open:', err));
    }
    
    // Return a 1x1 transparent pixel
    const trackingPixel = path.join(__dirname, '../public/tracking-pixel.png');
    fs.createReadStream(trackingPixel).pipe(res);
  } catch (error) {
    console.error('Error in tracking pixel:', error);
    res.status(500).end();
  }
};

// Track link clicks
exports.trackClick = async (req, res) => {
  try {
    const { id, url } = req.query;
    
    if (!id || !url) {
      return res.status(400).json({ message: 'Missing tracking ID or URL' });
    }
    
    // Record the click event
    const EmailLog = mongoose.model('EmailLog');
    
    await EmailLog.findOneAndUpdate(
      { trackingId: id },
      { 
        $set: { 
          clicked: true, 
          clickedAt: new Date()
        },
        $inc: { clickCount: 1 },
        $push: { 
          links: { 
            url, 
            clickCount: 1 
          } 
        }
      }
    );
    
    // Redirect to the target URL
    res.redirect(url);
  } catch (error) {
    console.error('Error tracking click:', error);
    res.status(500).json({ message: 'Error processing link' });
  }
};

// Handle unsubscribe requests
exports.unsubscribe = async (req, res) => {
  try {
    const { token, email } = req.query;
    
    if (!token || !email) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }
    
    // Find user by email and token
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const userProfile = await UserProfile.findOne({ 
      userId: user._id,
      'emailPreferences.unsubscribeToken': token
    });
    
    if (!userProfile) {
      return res.status(400).json({ message: 'Invalid unsubscribe token' });
    }
    
    // Update subscription preference
    userProfile.emailPreferences.subscribed = false;
    userProfile.emailPreferences.newsletterFrequency = 'never';
    await userProfile.save();
    
    // Render unsubscribe confirmation page
    res.render('unsubscribe', {
      email: user.email,
      name: userProfile.personalInfo.firstName
    });
  } catch (error) {
    console.error('Error processing unsubscribe:', error);
    res.status(500).json({ message: 'Error processing unsubscribe request' });
  }
};