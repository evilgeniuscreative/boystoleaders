// controllers/gamification.controller.js

const { 
    awardPoints, 
    getUserProgression, 
    getLeaderboard 
  } = require('../services/gamification.service');
  
  /**
   * Award points to a user
   * @route POST /api/gamification/points
   * @access Private
   */
  exports.awardUserPoints = async (req, res) => {
    try {
      const { points, context } = req.body;
      const userId = req.user.id; // From auth middleware
      
      // Validate input
      if (!points || !context || !context.type) {
        return res.status(400).json({ message: 'Points and context are required' });
      }
      
      if (typeof points !== 'number' || points <= 0) {
        return res.status(400).json({ message: 'Points must be a positive number' });
      }
      
      // Award points
      const result = await awardPoints(userId, points, context);
      
      // Return result
      res.json(result);
    } catch (error) {
      console.error('Error in awardUserPoints:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  /**
   * Get a user's progression data
   * @route GET /api/gamification/progression
   * @access Private
   */
  exports.getUserProgressionData = async (req, res) => {
    try {
      const userId = req.user.id; // From auth middleware
      
      const progression = await getUserProgression(userId);
      
      res.json(progression);
    } catch (error) {
      console.error('Error in getUserProgressionData:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  /**
   * Get user's position on leaderboard
   * @route GET /api/gamification/leaderboard/position
   * @access Private
   */
  exports.getUserLeaderboardPosition = async (req, res) => {
    try {
      const userId = req.user.id; // From auth middleware
      const { timeframe = 'all' } = req.query;
      
      // Get all user IDs and points
      const allUsers = await getLeaderboard({ timeframe, limit: 1000 });
      
      // Find user's position
      const userPosition = allUsers.findIndex(user => user.userId.toString() === userId);
      
      if (userPosition === -1) {
        return res.json({ position: null, totalUsers: allUsers.length });
      }
      
      res.json({
        position: userPosition + 1, // 1-based indexing for position
        totalUsers: allUsers.length,
        percentile: Math.floor((1 - userPosition / allUsers.length) * 100)
      });
    } catch (error) {
      console.error('Error in getUserLeaderboardPosition:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  /**
   * Get leaderboard
   * @route GET /api/gamification/leaderboard
   * @access Private
   */
  exports.getLeaderboardData = async (req, res) => {
    try {
      const { timeframe = 'all', limit = 10 } = req.query;
      
      const leaderboard = await getLeaderboard({ 
        timeframe, 
        limit: parseInt(limit, 10) 
      });
      
      res.json(leaderboard);
    } catch (error) {
      console.error('Error in getLeaderboardData:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };