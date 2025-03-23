// routes/gamification.routes.js

const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');
const gamificationController = require('../controllers/gamification.controller');

// Apply auth middleware to all routes
router.use(authMiddleware);

// Routes
router.post('/points', gamificationController.awardUserPoints);
router.get('/progression', gamificationController.getUserProgressionData);
router.get('/leaderboard', gamificationController.getLeaderboardData);
router.get('/leaderboard/position', gamificationController.getUserLeaderboardPosition);

module.exports = router;