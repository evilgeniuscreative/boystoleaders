// services/gamification.service.js


const { UserProgress, User, Activity, Notification } = require('../models');
const { getSkillById } = require('./skills.service');

/**
 * Level configuration - points needed for each level
 * Each index represents a level, and the value is points needed to reach that level
 */
const LEVEL_THRESHOLDS = [
  0,      // Level 0 (not used)
  0,      // Level 1 (starting level)
  100,    // Level 2
  250,    // Level 3
  500,    // Level 4
  1000,   // Level 5
  2000,   // Level 6
  3500,   // Level 7
  5500,   // Level 8
  8000,   // Level 9
  11000,  // Level 10
];

/**
 * Level titles for each level
 */
const LEVEL_TITLES = [
  'Newcomer',    // Level 0 (not used)
  'Explorer',    // Level 1
  'Pathfinder',  // Level 2
  'Trailblazer', // Level 3
  'Mentor',      // Level 4
  'Champion',    // Level 5
  'Guardian',    // Level 6
  'Visionary',   // Level 7
  'Leader',      // Level 8
  'Legend',      // Level 9
  'Luminary'     // Level 10
];

/**
 * Unlocks and perks for each level
 */
const LEVEL_PERKS = {
  2: ['Weekly challenges access', 'Profile customization'],
  3: ['Group chat access', 'Custom avatar creator'],
  4: ['Mentor matching', 'Community posting'],
  5: ['Leadership board visibility', 'Group challenges'],
  6: ['Content creation', 'Peer mentoring'],
  7: ['Advanced workshops', 'Project leadership'],
  8: ['Exclusive events', 'Special recognition'],
  9: ['Impact planning', 'Community leadership'],
  10: ['Platform ambassador', 'Future leader program']
};

/**
 * Award points to a user and handle leveling and achievements
 * @param {string} userId - The user's ID
 * @param {number} points - Points to award
 * @param {Object} context - Context information about the activity
 * @returns {Object} Result with points, level changes, etc.
 */
exports.awardPoints = async (userId, points, context) => {
  try {
    // Get user's current progress
    let userProgress = await UserProgress.findOne({ userId });
    
    // If no progress record exists, create one
    if (!userProgress) {
      userProgress = new UserProgress({
        userId,
        level: 1,
        points: 0,
        currentStreak: 0,
        maxStreak: 0
      });
    }
    
    // Record previous state for comparison
    const previousLevel = userProgress.level;
    const previousPoints = userProgress.points;
    
    // Add points
    userProgress.points += points;
    
    // Update streak if applicable
    if (context.type === 'daily_challenge' || context.type === 'daily_login') {
      const lastActivityDate = userProgress.lastActivityDate || new Date(0);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      // Check if last activity was yesterday or today
      if (isSameDay(lastActivityDate, yesterday)) {
        userProgress.currentStreak += 1;
        userProgress.maxStreak = Math.max(userProgress.currentStreak, userProgress.maxStreak);
      } else if (isSameDay(lastActivityDate, today)) {
        // Already logged in today, don't increase streak but don't reset either
      } else {
        // Streak broken
        userProgress.currentStreak = 1;
      }
      
      userProgress.lastActivityDate = today;
    }
    
    // Check for level up
    const levelUpDetails = checkAndUpdateLevel(userProgress);
    
    // Save progress
    await userProgress.save();
    
    // Record activity
    const activity = await Activity.create({
      userId,
      type: context.type,
      points,
      details: {
        ...context,
        previousPoints,
        newPoints: userProgress.points,
        previousLevel,
        newLevel: userProgress.level,
        leveledUp: levelUpDetails.leveledUp
      }
    });
    
    // Check for achievements based on this activity
    const newAchievements = await checkForAchievements(userId, context);
    
    // If leveled up, create notification
    if (levelUpDetails.leveledUp) {
      await Notification.create({
        userId,
        type: 'LEVEL_UP',
        title: `You've reached Level ${userProgress.level}!`,
        message: `Congratulations! You are now a ${getLevelTitle(userProgress.level)}.`,
        data: {
          level: userProgress.level,
          levelTitle: getLevelTitle(userProgress.level),
          newPerks: getLevelPerks(userProgress.level)
        },
        read: false
      });
    }
    
    // If new achievements, create notifications
    if (newAchievements && newAchievements.length > 0) {
      for (const achievement of newAchievements) {
        await Notification.create({
          userId,
          type: 'ACHIEVEMENT_EARNED',
          title: `New Achievement: ${achievement.name}`,
          message: achievement.description,
          data: { achievement },
          read: false
        });
      }
    }
    
    // Return result with all details
    return {
      success: true,
      points: {
        awarded: points,
        total: userProgress.points
      },
      level: {
        current: userProgress.level,
        previous: previousLevel,
        leveledUp: levelUpDetails.leveledUp,
        newLevels: levelUpDetails.levelsGained
      },
      streak: {
        current: userProgress.currentStreak,
        max: userProgress.maxStreak
      },
      achievements: newAchievements
    };
  } catch (error) {
    console.error('Error in awardPoints:', error);
    throw error;
  }
};

/**
 * Check if a user should level up and update their level
 * @param {Object} userProgress - The user's progress object
 * @returns {Object} Details about level changes
 */
function checkAndUpdateLevel(userProgress) {
  const previousLevel = userProgress.level;
  let currentLevel = previousLevel;
  
  // Check each level to see if user has enough points
  for (let level = currentLevel + 1; level < LEVEL_THRESHOLDS.length; level++) {
    if (userProgress.points >= LEVEL_THRESHOLDS[level]) {
      currentLevel = level;
    } else {
      break; // Stop once we find a level the user hasn't reached
    }
  }
  
  // Update level if changed
  if (currentLevel > previousLevel) {
    userProgress.level = currentLevel;
    return {
      leveledUp: true,
      levelsGained: currentLevel - previousLevel
    };
  }
  
  return {
    leveledUp: false,
    levelsGained: 0
  };
}

/**
 * Check for any achievements unlocked by an activity
 * @param {string} userId - The user's ID
 * @param {Object} context - Context information about the activity
 * @returns {Array} New achievements earned
 */
async function checkForAchievements(userId, context) {
  try {
    // This would connect to your achievements service
    // For now, we'll implement a simple version
    
    const userProgress = await UserProgress.findOne({ userId });
    const user = await User.findById(userId);
    
    const newAchievements = [];
    
    // Check for streak achievements
    if (userProgress.currentStreak >= 7 && !hasAchievement(userProgress, 'STREAK_7_DAYS')) {
      newAchievements.push(await unlockAchievement(userProgress, {
        id: 'STREAK_7_DAYS',
        name: 'Consistency Champion',
        description: 'Logged in for 7 consecutive days',
        icon: 'streak_icon'
      }));
    }
    
    if (userProgress.currentStreak >= 30 && !hasAchievement(userProgress, 'STREAK_30_DAYS')) {
      newAchievements.push(await unlockAchievement(userProgress, {
        id: 'STREAK_30_DAYS',
        name: 'Monthly Dedication',
        description: 'Logged in for 30 consecutive days',
        icon: 'monthly_streak_icon'
      }));
    }
    
    // Check for challenge completion achievements
    if (context.type === 'challenge_completed') {
      const completedChallenges = userProgress.completedChallenges?.length || 0;
      
      if (completedChallenges >= 5 && !hasAchievement(userProgress, 'COMPLETE_5_CHALLENGES')) {
        newAchievements.push(await unlockAchievement(userProgress, {
          id: 'COMPLETE_5_CHALLENGES',
          name: 'Challenge Seeker',
          description: 'Completed 5 different challenges',
          icon: 'challenge_icon'
        }));
      }
      
      if (completedChallenges >= 25 && !hasAchievement(userProgress, 'COMPLETE_25_CHALLENGES')) {
        newAchievements.push(await unlockAchievement(userProgress, {
          id: 'COMPLETE_25_CHALLENGES',
          name: 'Challenge Master',
          description: 'Completed 25 different challenges',
          icon: 'challenge_master_icon'
        }));
      }
    }
    
    // Check skill achievements
    if (context.type === 'skill_progress') {
      const skillId = context.skillId;
      const skill = await getSkillById(skillId);
      
      // Find the skill in user progress
      const userSkill = userProgress.skills?.find(s => s.skillId.toString() === skillId);
      
      if (userSkill && userSkill.level >= 5) {
        const achievementId = `SKILL_MASTER_${skillId}`;
        
        if (!hasAchievement(userProgress, achievementId)) {
          newAchievements.push(await unlockAchievement(userProgress, {
            id: achievementId,
            name: `${skill.name} Master`,
            description: `Reached level 5 in ${skill.name}`,
            icon: `skill_${skill.slug}_icon`
          }));
        }
      }
    }
    
    return newAchievements;
  } catch (error) {
    console.error('Error checking achievements:', error);
    return [];
  }
}

/**
 * Check if a user has a specific achievement
 * @param {Object} userProgress - The user's progress object
 * @param {string} achievementId - The achievement ID to check
 * @returns {boolean} Whether the user has the achievement
 */
function hasAchievement(userProgress, achievementId) {
  return userProgress.achievements?.some(a => a.id === achievementId) || false;
}

/**
 * Unlock a new achievement for a user
 * @param {Object} userProgress - The user's progress object
 * @param {Object} achievement - The achievement to unlock
 * @returns {Object} The unlocked achievement with timestamp
 */
async function unlockAchievement(userProgress, achievement) {
  const achievementWithTimestamp = {
    ...achievement,
    earnedAt: new Date()
  };
  
  if (!userProgress.achievements) {
    userProgress.achievements = [];
  }
  
  userProgress.achievements.push(achievementWithTimestamp);
  await userProgress.save();
  
  return achievementWithTimestamp;
}

/**
 * Get the title for a specific level
 * @param {number} level - The level number
 * @returns {string} The level title
 */
function getLevelTitle(level) {
  if (level < 1) return LEVEL_TITLES[1];
  if (level >= LEVEL_TITLES.length) return LEVEL_TITLES[LEVEL_TITLES.length - 1];
  return LEVEL_TITLES[level];
}

/**
 * Get unlocks/perks for a specific level
 * @param {number} level - The level number
 * @returns {Array} The perks for this level
 */
function getLevelPerks(level) {
  return LEVEL_PERKS[level] || [];
}

/**
 * Check if two dates are the same day
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 * @returns {boolean} Whether they are the same day
 */
function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

/**
 * Get a user's current points and level
 * @param {string} userId - The user's ID
 * @returns {Object} The user's points and level information
 */
exports.getUserProgression = async (userId) => {
  try {
    let userProgress = await UserProgress.findOne({ userId });
    
    if (!userProgress) {
      // Create initial progress record
      userProgress = new UserProgress({
        userId,
        level: 1,
        points: 0,
        currentStreak: 0,
        maxStreak: 0
      });
      await userProgress.save();
    }
    
    // Calculate points needed for next level
    let nextLevelThreshold = Infinity;
    let pointsToNextLevel = Infinity;
    
    for (let level = userProgress.level + 1; level < LEVEL_THRESHOLDS.length; level++) {
      if (LEVEL_THRESHOLDS[level] > userProgress.points) {
        nextLevelThreshold = LEVEL_THRESHOLDS[level];
        pointsToNextLevel = nextLevelThreshold - userProgress.points;
        break;
      }
    }
    
    // Calculate percentage to next level
    const currentLevelThreshold = LEVEL_THRESHOLDS[userProgress.level];
    const levelProgress = nextLevelThreshold === Infinity
      ? 100 // Max level reached
      : Math.floor(
          ((userProgress.points - currentLevelThreshold) / 
           (nextLevelThreshold - currentLevelThreshold)) * 100
        );
    
    return {
      userId,
      level: userProgress.level,
      levelTitle: getLevelTitle(userProgress.level),
      points: userProgress.points,
      streak: {
        current: userProgress.currentStreak,
        max: userProgress.maxStreak
      },
      progression: {
        levelProgress,
        pointsToNextLevel,
        nextLevelTitle: nextLevelThreshold === Infinity 
          ? null 
          : getLevelTitle(userProgress.level + 1)
      },
      perks: getLevelPerks(userProgress.level)
    };
  } catch (error) {
    console.error('Error in getUserProgression:', error);
    throw error;
  }
};

/**
 * Get leaderboard data
 * @param {Object} options - Options for the leaderboard
 * @param {string} options.timeframe - 'all', 'weekly', 'monthly'
 * @param {number} options.limit - Number of users to return
 * @returns {Array} Leaderboard entries
 */
exports.getLeaderboard = async (options = {}) => {
  try {
    const { timeframe = 'all', limit = 10 } = options;
    
    // Build query based on timeframe
    const query = {};
    if (timeframe !== 'all') {
      const startDate = new Date();
      if (timeframe === 'weekly') {
        startDate.setDate(startDate.getDate() - 7);
      } else if (timeframe === 'monthly') {
        startDate.setMonth(startDate.getMonth() - 1);
      }
      
      // For timeframe-based leaderboards, use the Activity collection
      const leaderboardData = await Activity.aggregate([
        {
          $match: {
            createdAt: { $gte: startDate }
          }
        },
        {
          $group: {
            _id: '$userId',
            points: { $sum: '$points' }
          }
        },
        {
          $sort: { points: -1 }
        },
        {
          $limit: limit
        }
      ]);
      
      // Get user details for each leaderboard entry
      const enrichedLeaderboard = [];
      for (const entry of leaderboardData) {
        const user = await User.findById(entry._id).select('firstName lastName');
        const userProgress = await UserProgress.findOne({ userId: entry._id });
        
        if (user && userProgress) {
          enrichedLeaderboard.push({
            userId: entry._id,
            name: `${user.firstName} ${user.lastName}`,
            points: entry.points,
            level: userProgress.level,
            levelTitle: getLevelTitle(userProgress.level)
          });
        }
      }
      
      return enrichedLeaderboard;
    } else {
      // For all-time leaderboard, use UserProgress
      const users = await UserProgress.find()
        .sort({ points: -1 })
        .limit(limit)
        .populate('userId', 'firstName lastName');
      
      return users.map(progress => ({
        userId: progress.userId._id,
        name: `${progress.userId.firstName} ${progress.userId.lastName}`,
        points: progress.points,
        level: progress.level,
        levelTitle: getLevelTitle(progress.level)
      }));
    }
  } catch (error) {
    console.error('Error in getLeaderboard:', error);
    throw error;
  }
};