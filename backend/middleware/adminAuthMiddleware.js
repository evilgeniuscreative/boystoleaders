// middleware/adminAuthMiddleware.js
const models = require('../models');

exports.adminAuthMiddleware = async (req, res, next) => {
  try {
    // Get user from existing auth middleware
    const userId = req.user.id;
    
    // Check if user has admin or content creator role
    const user = await models.User.findById(userId);
    
    if (!user || !['admin', 'content_creator', 'editor'].includes(user.role)) {
      return res.status(403).json({ 
        message: 'Access denied. You do not have permission to access this resource.' 
      });
    }
    
    // Add role to request for fine-grained permissions
    req.userRole = user.role;
    next();
  } catch (error) {
    console.error('Admin authorization error:', error);
    res.status(500).json({ message: 'Server error during authorization' });
  }
};