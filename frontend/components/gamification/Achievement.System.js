// components/gamification/AchievementSystem.js
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AchievementSystem({ achievements, userLevel, levelTitle }) {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  
  const achievementLevels = [
    "Explorer", "Pathfinder", "Trailblazer", "Mentor", 
    "Champion", "Guardian", "Visionary"
  ];
  
  const handleAchievementClick = (achievement) => {
    setSelectedAchievement(achievement);
  };
  
  const closeAchievementDetail = () => {
    setSelectedAchievement(null);
  };
  
  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <h2>Your Growth Journey</h2>
        <div className="level-display">
          <span className="level-number">{userLevel}</span>
          <span className="level-title">{levelTitle}</span>
          <div className="level-progress">
            <div className="next-level">Next: {achievementLevels[achievementLevels.indexOf(levelTitle) + 1]}</div>
          </div>
        </div>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <motion.div 
            key={achievement.id}
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleAchievementClick(achievement)}
          >
            <div className="achievement-icon">
              <Image 
                src={achievement.unlocked ? achievement.iconUnlocked : achievement.iconLocked}
                alt={achievement.title}
                width={60}
                height={60}
              />
            </div>
            <h3>{achievement.title}</h3>
            {achievement.unlocked && 
              <div className="achievement-date">Earned {achievement.dateEarned}</div>
            }
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div 
            className="achievement-detail-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="achievement-detail-content">
              <button className="close-button" onClick={closeAchievementDetail}>×</button>
              <div className="achievement-detail-header">
                <Image 
                  src={selectedAchievement.unlocked ? 
                    selectedAchievement.iconUnlocked : selectedAchievement.iconLocked}
                  alt={selectedAchievement.title}
                  width={100}
                  height={100}
                />
                <h2>{selectedAchievement.title}</h2>
              </div>
              <p className="achievement-description">{selectedAchievement.description}</p>
              
              {selectedAchievement.unlocked ? (
                <div className="achievement-earned">
                  <p>Earned on {selectedAchievement.dateEarned}</p>
                  <p>{selectedAchievement.completionMessage}</p>
                </div>
              ) : (
                <div className="achievement-requirements">
                  <h3>How to earn this achievement:</h3>
                  <ul>
                    {selectedAchievement.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}