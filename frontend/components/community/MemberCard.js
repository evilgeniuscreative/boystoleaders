// components/community/MemberCard.js
import Avatar from '../profile/Avatar';

const MemberCard = ({ member }) => {
  return (
    <div className="member-card p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <Avatar user={member} size="md" />
        <div className="ml-4">
          <h3 className="font-medium text-gray-900">{member.personalInfo.firstName}</h3>
          <p className="text-sm text-gray-500">Level {member.level} {member.levelTitle}</p>
        </div>
      </div>
    </div>
  );
};