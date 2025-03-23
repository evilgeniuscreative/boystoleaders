// controllers/auth.controller.js
exports.register = async (req, res) => {
    try {
      // ... existing user creation code
      
      // Create user profile with random avatar
      const userProfile = new UserProfile({
        userId: newUser._id,
        personalInfo: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          // ... other personal info
        },
        // The pre-save middleware will automatically assign random avatar properties
      });
      
      await userProfile.save();
      
      // ... rest of registration logic
      
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error during registration' });
    }
  };