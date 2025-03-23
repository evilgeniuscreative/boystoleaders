// components/profile/Avatar.js
import { memo } from 'react';

const Avatar = ({ user, size = 'md', className = '' }) => {
  const avatarUrl = user?.avatarUrl || '/images/default-avatar.png';
  
  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };
  
  return (
    <div className={`avatar-container ${sizeClasses[size]} ${className}`}>
      <img 
        src={avatarUrl} 
        alt={`${user?.firstName || 'User'}'s avatar`}
        className="rounded-full object-cover w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

export default memo(Avatar);