// services/skills.service.js
const { Skill } = require('../models');

/**
 * Get a skill by ID
 * @param {string} skillId - The skill ID
 * @returns {Object} The skill document
 */
exports.getSkillById = async (skillId) => {
  try {
    const skill = await Skill.findById(skillId);
    return skill;
  } catch (error) {
    console.error('Error fetching skill by ID:', error);
    throw error;
  }
};

/**
 * Get all skills
 * @param {Object} filters - Optional filters
 * @returns {Array} List of skills
 */
exports.getAllSkills = async (filters = {}) => {
  try {
    const query = { active: true };
    
    if (filters.category) {
      query.category = filters.category;
    }
    
    const skills = await Skill.find(query).sort({ name: 1 });
    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

/**
 * Create a new skill
 * @param {Object} skillData - The skill data
 * @returns {Object} The created skill
 */
exports.createSkill = async (skillData) => {
  try {
    const skill = new Skill(skillData);
    await skill.save();
    return skill;
  } catch (error) {
    console.error('Error creating skill:', error);
    throw error;
  }
};

/**
 * Update a skill
 * @param {string} skillId - The skill ID
 * @param {Object} updateData - The data to update
 * @returns {Object} The updated skill
 */
exports.updateSkill = async (skillId, updateData) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      skillId,
      updateData,
      { new: true, runValidators: true }
    );
    return skill;
  } catch (error) {
    console.error('Error updating skill:', error);
    throw error;
  }
};

/**
 * Calculate the level for a specific skill based on points
 * @param {string} skillId - The skill ID
 * @param {number} points - The points earned for this skill
 * @returns {Object} The level information
 */
exports.calculateSkillLevel = async (skillId, points) => {
  try {
    const skill = await Skill.findById(skillId);
    
    if (!skill) {
      throw new Error('Skill not found');
    }
    
    // Find the appropriate level based on points
    let level = 1;
    let levelInfo = null;
    
    for (const levelData of skill.levels) {
      if (points >= levelData.pointsRequired) {
        level = levelData.level;
        levelInfo = levelData;
      } else {
        break;
      }
    }
    
    // Calculate progress to next level
    let nextLevel = null;
    let progressPercent = 100;
    
    if (level < skill.levels.length) {
      nextLevel = skill.levels.find(l => l.level === level + 1);
      
      if (nextLevel) {
        const currentLevelPoints = levelInfo.pointsRequired;
        const nextLevelPoints = nextLevel.pointsRequired;
        const pointsToNextLevel = nextLevelPoints - currentLevelPoints;
        const pointsEarnedInCurrentLevel = points - currentLevelPoints;
        
        progressPercent = Math.min(
          Math.floor((pointsEarnedInCurrentLevel / pointsToNextLevel) * 100),
          99
        );
      }
    }
    
    return {
      skillId,
      skillName: skill.name,
      level,
      currentLevelName: levelInfo?.name || `Level ${level}`,
      currentLevelDescription: levelInfo?.description || '',
      nextLevelName: nextLevel?.name,
      progressPercent,
      totalPoints: points
    };
  } catch (error) {
    console.error('Error calculating skill level:', error);
    throw error;
  }
};