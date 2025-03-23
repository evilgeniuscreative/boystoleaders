// pages/dashboard.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/MainLayout';
import DailyChallenge from '../components/challenges/DailyChallenge';
import ProgressTracker from '../components/gamification/ProgressTracker';
import CommunityHighlights from '../components/community/CommunityHighlights';
import MentorshipCard from '../components/community/MentorshipCard';
import SkillPathProgress from '../components/learning/SkillPathProgress';
import { getUserDashboardData } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const data = await getUserDashboardData(user.id);
        setDashboardData(data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    if (user) {
      fetchDashboardData();
    }
  }, [user]);
  
  if (loading) return <Layout><div className="loading-spinner">Loading your journey...</div></Layout>;
  
  return (
    <Layout>
      <Head>
        <title>Your Dashboard | BoysToLeaders</title>
      </Head>
      
      <div className="dashboard-container">
        <div className="dashboard-welcome">
          <h1>Welcome back, {user.firstName}!</h1>
          <p className="level-indicator">Level {dashboardData.userLevel}: {dashboardData.levelTitle}</p>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-main">
            <DailyChallenge challenge={dashboardData.dailyChallenge} />
            <ProgressTracker 
              skillPoints={dashboardData.skillPoints}
              levelProgress={dashboardData.levelProgress}
              streakDays={dashboardData.streakDays}
            />
            <SkillPathProgress paths={dashboardData.skillPaths} />
          </div>
          
          <div className="dashboard-sidebar">
            <MentorshipCard 
              upcomingSessions={dashboardData.mentorship.upcomingSessions}
              mentor={dashboardData.mentorship.mentor}
            />
            <CommunityHighlights highlights={dashboardData.communityHighlights} />
          </div>
        </div>
      </div>
    </Layout>
  );
}