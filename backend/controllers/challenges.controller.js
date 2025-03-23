// controllers/challenges.controller.js
const Challenge = require('../models/challenge.model');
const UserProgress = require('../models/userProgress.model');
const { createActivity } = require('../services/activity.service');

exports.getDailyChallenge = async (req, res) => {
  try {
    const userId = req.user.id;
    const userProgress = await UserProgress.findOne({ userId });
    
    // Find appropriate challenge based on user level and previously completed challenges
    const completedChallengeIds = userProgress.completedChallenges.map(c => c.challengeId);
    
    const challenge = await Challenge.findOne({
      level: { $lte: userProgress.level + 1 },
      _id: { $nin: completedChallengeIds },
      type: 'daily',
      isActive: true
    }).sort({ difficulty: 1 });
    
    if (!challenge) {
      return res.status(404).json({ message: 'No appropriate challenge found' });
    }
    
    res.json({ challenge });
  } catch (error) {
    console.error('Error fetching daily challenge:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.submitChallengeCompletion = async (req, res) => {
  try {
    const { challengeId, submission } = req.body;
    const userId = req.user.id;
    
    // Validate the challenge exists
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    
    // Update user progress
    const userProgress = await UserProgress.findOne({ userId });
    
    // Check if already completed
    const alreadyCompleted = userProgress.completedChallenges.some(
      c => c.challengeId.toString() === challengeId
    );
    
    if (alreadyCompleted) {
      return res.status(400).json({ message: 'Challenge already completed' });
    }
    
    // Add to completed challenges
    userProgress.completedChallenges.push({
      challengeId,
      completedAt: new Date(),
      submission
    });
    
    // Award points
    userProgress.points += challenge.pointsAwarded;
    
    // Check for level up
    const previousLevel = userProgress.level;
    if (userProgress.points >= getLevelThreshold(userProgress.level)) {
      userProgress.level += 1;
    }
    
    await userProgress.save();
    
    // Create activity record
    await createActivity({
      userId,
      type: 'CHALLENGE_COMPLETED',
      data: {
        challengeId,
        pointsAwarded: challenge.pointsAwarded,
        levelUp: userProgress.level > previousLevel
      }
    });
    
    // Prepare response
    const response = {
      success: true,
      pointsAwarded: challenge.pointsAwarded,
      totalPoints: userProgress.points,
      currentLevel: userProgress.level,
      levelUp: userProgress.level > previousLevel
    };
    
    // If leveled up, add additional info
    if (response.levelUp) {
      response.newLevelTitle = getLevelTitle(userProgress.level);
      response.newPerks = getLevelPerks(userProgress.level);
    }
    
    res.json(response);
  } catch (error) {
    console.error('Error submitting challenge:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Helper functions
function getLevelThreshold(level) {
  // Points needed for each level
  const thresholds = [0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 11000];
  return thresholds[level] || Infinity;
}

function getLevelTitle(level) {
  const titles = [
    'Newcomer',
    'Explorer',
    'Pathfinder',
    'Trailblazer',
    'Mentor',
    'Champion',
    'Guardian',
    'Visionary',
    'Leader',
    'Legend'
  ];
  return titles[level - 1] || 'Legend';
}

function getLevelPerks(level) {
  const perks = {
    2: ['Access to weekly challenges', 'Profile customization'],
    3: ['Group chat access', 'Custom avatar creator'],
    4: ['Mentor matching', 'Create community posts'],
    5: ['Leadership board visibility', 'Start group challenges'],
    // more perks for higher levels
  };
  
  return perks[level] || [];
}