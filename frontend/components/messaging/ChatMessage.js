// components/messaging/ChatMessage.js
import Avatar from '../profile/Avatar';

const ChatMessage = ({ message, currentUser }) => {
  const isOwnMessage = message.senderId === currentUser.id;
  
  return (
    <div className={`chat-message flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isOwnMessage && (
        <Avatar user={message.sender} size="sm" className="mr-2" />
      )}
      
      <div className={`message-bubble p-3 rounded-lg max-w-xs ${
        isOwnMessage 
          ? 'bg-primary-light text-white rounded-tr-none' 
          : 'bg-gray-100 text-gray-800 rounded-tl-none'
      }`}>
        {message.content}
      </div>
      
      {isOwnMessage && (
        <Avatar user={currentUser} size="sm" className="ml-2" />
      )}
    </div>
  );
};