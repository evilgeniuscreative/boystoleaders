// services/activity.service.js
const { Activity } = require('../models');

/**
 * Create an activity record
 * @param {Object} activityData - Data for the activity record
 * @returns {Object} The created activity
 */
exports.createActivity = async (activityData) => {
  try {
    const activity = new Activity(activityData);
    await activity.save();
    return activity;
  } catch (error) {
    console.error('Error creating activity record:', error);
    throw error;
  }
};

/**
 * Get recent activities for a user
 * @param {string} userId - User ID
 * @param {number} limit - Number of activities to return
 * @returns {Array} Recent activities
 */
exports.getUserActivities = async (userId, limit = 20) => {
  try {
    const activities = await Activity.find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit);
    return activities;
  } catch (error) {
    console.error('Error fetching user activities:', error);
    throw error;
  }
};

/**
 * Get activity feed items for a user
 * This could include activities from friends, mentors, etc.
 * @param {string} userId - User ID
 * @param {number} limit - Number of activities to return
 * @returns {Array} Activity feed items
 */
exports.getActivityFeed = async (userId, limit = 20) => {
  try {
    // This is a simplified version - in a real app, you'd include
    // activities from connections, mentors, groups, etc.
    const activities = await Activity.find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit);
      
    return activities;
  } catch (error) {
    console.error('Error fetching activity feed:', error);
    throw error;
  }
};

/**
 * Get activity statistics for a user
 * @param {string} userId - User ID
 * @returns {Object} Activity statistics
 */
exports.getUserActivityStats = async (userId) => {
  try {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    // Get counts by time period
    const [todayCount, weekCount, monthCount, totalCount] = await Promise.all([
      Activity.countDocuments({
        userId,
        createdAt: { $gte: new Date(today.setHours(0, 0, 0, 0)) }
      }),
      Activity.countDocuments({
        userId,
        createdAt: { $gte: sevenDaysAgo }
      }),
      Activity.countDocuments({
        userId,
        createdAt: { $gte: thirtyDaysAgo }
      }),
      Activity.countDocuments({ userId })
    ]);
    
    // Get activity counts by type
    const activityByType = await Activity.aggregate([
      { $match: { userId: userId } },
      { $group: { _id: '$type', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    
    return {
      counts: {
        today: todayCount,
        week: weekCount,
        month: monthCount,
        total: totalCount
      },
      byType: activityByType.reduce((acc, item) => {
        acc[item._id] = item.count;
        return acc;
      }, {})
    };
  } catch (error) {
    console.error('Error fetching user activity stats:', error);
    throw error;
  }
};

/**
 * Track a user action that doesn't necessarily award points
 * @param {string} userId - User ID
 * @param {string} actionType - Type of action
 * @param {Object} details - Additional details
 * @returns {Object} The created activity
 */
exports.trackUserAction = async (userId, actionType, details = {}) => {
  try {
    const activity = new Activity({
      userId,
      type: actionType,
      points: 0, // No points for tracking actions
      details
    });
    
    await activity.save();
    return activity;
  } catch (error) {
    console.error('Error tracking user action:', error);
    throw error;
  }
};