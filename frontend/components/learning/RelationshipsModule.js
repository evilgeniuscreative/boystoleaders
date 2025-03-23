// components/learning/RelationshipsModule.js
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConversationSimulator from './relationships/ConversationSimulator';
import ScenarioChallenge from './relationships/ScenarioChallenge';
import PerspectiveLibrary from './relationships/PerspectiveLibrary';
import SkillBuilding from './relationships/SkillBuilding';

export default function RelationshipsModule({ userData, moduleProgress }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="module-container relationships-module">
      <div className="module-header">
        <h1>Building Connections</h1>
        <p className="module-description">
          Develop the skills to form healthy, respectful relationships with everyone in your life.
        </p>
        <div className="module-progress-bar">
          <div 
            className="progress-fill" 
            style={{width: `${moduleProgress.percentComplete}%`}}
          ></div>
          <span className="progress-text">{moduleProgress.percentComplete}% Complete</span>
        </div>
      </div>
      
      <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
        <TabList className="module-tabs">
          <Tab>Learn</Tab>
          <Tab>Practice</Tab>
          <Tab>Perspectives</Tab>
          <Tab>Challenges</Tab>
        </TabList>
        
        <TabPanel>
          <div className="learning-content">
            <h2>Understanding Healthy Connections</h2>
            <div className="video-container">
              {/* Video component would go here */}
            </div>
            <div className="key-concepts">
              <h3>Key Concepts</h3>
              <ul>
                <li>Communication is the foundation of any relationship</li>
                <li>Respect means honoring boundaries and differences</li>
                <li>Empathy allows us to understand others' perspectives</li>
                <li>Genuine connections are built on shared interests and values</li>
              </ul>
            </div>
            <div className="next-steps">
              <button className="primary-button">Continue to Practice</button>
            </div>
          </div>
        </TabPanel>
        
        <TabPanel>
          <ConversationSimulator 
            scenarios={moduleProgress.availableScenarios}
            userProgress={moduleProgress.simulatorProgress}
          />
        </TabPanel>
        
        <TabPanel>
          <PerspectiveLibrary 
            perspectives={moduleProgress.availablePerspectives}
            completedPerspectives={moduleProgress.completedPerspectives}
          />
        </TabPanel>
        
        <TabPanel>
          <ScenarioChallenge 
            challenges={moduleProgress.availableChallenges}
            completedChallenges={moduleProgress.completedChallenges}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}