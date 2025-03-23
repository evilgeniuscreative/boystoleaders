// services/avatar.service.js
const UserProfile = require('../models');

/**
 * Update user avatar settings
 */
exports.updateUserAvatar = async (userId, avatarData) => {
  try {
    const userProfile = await UserProfile.findOne({ userId });
    
    if (!userProfile) {
      throw new Error('User profile not found');
    }
    
    // Update avatar fields
    userProfile.avatar = {
      ...userProfile.avatar,
      ...avatarData,
      customized: true
    };
    
    await userProfile.save();
    
    return {
      ...userProfile.toObject(),
      avatarUrl: userProfile.getAvatarUrl()
    };
  } catch (error) {
    console.error('Avatar update error:', error);
    throw error;
  }
};