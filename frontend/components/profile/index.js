// pages/profile/index.js
import { useState } from 'react';
import Layout from '../../components/layout/MainLayout';
import Avatar from '../../components/profile/Avatar';
import AvatarCustomizer from '../../components/profile/AvatarCustomizer';
import { useAuth } from '../../contexts/AuthContext';

export default function ProfilePage() {
  const { user, updateUser } = useAuth();
  const [editingAvatar, setEditingAvatar] = useState(false);
  
  const handleAvatarUpdate = (updatedUser) => {
    updateUser(updatedUser);
    setEditingAvatar(false);
  };
  
  return (
    <Layout>
      <div className="profile-container max-w-4xl mx-auto p-6">
        <div className="profile-header flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="avatar-section text-center">
            <Avatar user={user} size="xl" />
            
            {!editingAvatar && (
              <button 
                className="btn btn-sm btn-outline mt-4"
                onClick={() => setEditingAvatar(true)}
              >
                Customize Avatar
              </button>
            )}
          </div>
          
          <div className="profile-info flex-1">
            <h1 className="text-3xl font-bold text-gray-900">
              {user?.personalInfo?.firstName} {user?.personalInfo?.lastName}
            </h1>
            
            <div className="profile-stats mt-4 grid grid-cols-2 gap-4">
              <div className="stat-card bg-gray-100 p-4 rounded-md">
                <div className="stat-value text-2xl font-bold text-primary-base">
                  Level {user?.level || 1}
                </div>
                <div className="stat-label text-sm text-gray-600">
                  {user?.levelTitle || 'Explorer'}
                </div>
              </div>
              
              <div className="stat-card bg-gray-100 p-4 rounded-md">
                <div className="stat-value text-2xl font-bold text-accent-orange">
                  {user?.completedChallenges?.length || 0}
                </div>
                <div className="stat-label text-sm text-gray-600">
                  Challenges Completed
                </div>
              </div>
            </div>
            
            {/* Additional profile info */}
          </div>
        </div>
        
        {editingAvatar ? (
          <div className="avatar-customizer-container bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Customize Your Avatar</h2>
            <AvatarCustomizer 
              user={user} 
              onUpdate={handleAvatarUpdate} 
            />
          </div>
        ) : (
          <div className="profile-content">
            {/* Rest of profile content */}
          </div>
        )}
      </div>
    </Layout>
  );
}