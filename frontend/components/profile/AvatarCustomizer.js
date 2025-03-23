// components/profile/AvatarCustomizer.js
import { useState, useEffect } from 'react';
import { updateUserAvatar } from '../../utils/api';

const skinColorOptions = [
  { label: 'Light', value: 'f2d3b1' },
  { label: 'Medium Light', value: 'edb98a' },
  { label: 'Medium', value: 'd08b5b' },
  { label: 'Medium Dark', value: 'ae5d29' },
  { label: 'Dark', value: '614335' },
  { label: 'Darker', value: '4a312c' }
];

const hairColorOptions = [
  { label: 'Black', value: '090806' },
  { label: 'Dark Brown', value: '2c1b18' },
  { label: 'Brown', value: '724133' },
  { label: 'Light Brown', value: 'a55728' },
  { label: 'Blonde', value: 'd6b370' },
  { label: 'Platinum', value: 'e0c797' }
];

const backgroundColorOptions = [
  { label: 'Blue', value: 'b6e3f4' },
  { label: 'Purple', value: 'c0aede' },
  { label: 'Pink', value: 'ffd5dc' },
  { label: 'Orange', value: 'ffdfbf' },
  { label: 'Green', value: 'c6f7d0' }
];

const AvatarCustomizer = ({ user, onUpdate }) => {
  const [avatarOptions, setAvatarOptions] = useState({
    seed: user?.avatar?.seed || user?.firstName || '',
    skinColor: user?.avatar?.skinColor || 'f2d3b1',
    hairColor: user?.avatar?.hairColor || '090806',
    backgroundColor: user?.avatar?.backgroundColor || 'b6e3f4'
  });
  
  const [previewUrl, setPreviewUrl] = useState('');
  const [saving, setSaving] = useState(false);
  
  useEffect(() => {
    updatePreviewUrl();
  }, [avatarOptions]);
  
  const updatePreviewUrl = () => {
    const baseUrl = 'https://api.dicebear.com/7.x/avataaars/svg';
    let url = `${baseUrl}?seed=${encodeURIComponent(avatarOptions.seed)}`;
    
    url += `&skinColor=${avatarOptions.skinColor}`;
    url += `&hairColor=${avatarOptions.hairColor}`;
    url += `&backgroundColor=${avatarOptions.backgroundColor}`;
    
    setPreviewUrl(url);
  };
  
  const handleOptionChange = (field, value) => {
    setAvatarOptions(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleRandomize = () => {
    // Generate a random seed
    const randomSeed = Math.random().toString(36).substring(2, 10);
    
    // Pick random options
    const randomSkin = skinColorOptions[Math.floor(Math.random() * skinColorOptions.length)].value;
    const randomHair = hairColorOptions[Math.floor(Math.random() * hairColorOptions.length)].value;
    const randomBg = backgroundColorOptions[Math.floor(Math.random() * backgroundColorOptions.length)].value;
    
    setAvatarOptions({
      seed: randomSeed,
      skinColor: randomSkin,
      hairColor: randomHair,
      backgroundColor: randomBg
    });
  };
  
  const handleSave = async () => {
    try {
      setSaving(true);
      const updatedUser = await updateUserAvatar(user.id, {
        ...avatarOptions,
        customized: true
      });
      
      if (onUpdate) {
        onUpdate(updatedUser);
      }
      
      // Show success message
    } catch (error) {
      console.error('Failed to update avatar:', error);
      // Show error message
    } finally {
      setSaving(false);
    }
  };
  
  return (
    <div className="avatar-customizer">
      <div className="customizer-preview">
        <img 
          src={previewUrl}
          alt="Avatar preview"
          className="w-48 h-48 mx-auto mb-6"
        />
      </div>
      
      <div className="customizer-controls grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="customizer-field">
          <label className="block text-gray-700 font-medium mb-2">Skin Tone</label>
          <div className="color-options flex space-x-2">
            {skinColorOptions.map(option => (
              <button
                key={option.value}
                className={`color-option w-8 h-8 rounded-full ${
                  avatarOptions.skinColor === option.value ? 'ring-2 ring-primary-base ring-offset-2' : ''
                }`}
                style={{ backgroundColor: `#${option.value}` }}
                title={option.label}
                onClick={() => handleOptionChange('skinColor', option.value)}
              />
            ))}
          </div>
        </div>
        
        <div className="customizer-field">
          <label className="block text-gray-700 font-medium mb-2">Hair Color</label>
          <div className="color-options flex space-x-2">
            {hairColorOptions.map(option => (
              <button
                key={option.value}
                className={`color-option w-8 h-8 rounded-full ${
                  avatarOptions.hairColor === option.value ? 'ring-2 ring-primary-base ring-offset-2' : ''
                }`}
                style={{ backgroundColor: `#${option.value}` }}
                title={option.label}
                onClick={() => handleOptionChange('hairColor', option.value)}
              />
            ))}
          </div>
        </div>
        
        <div className="customizer-field">
          <label className="block text-gray-700 font-medium mb-2">Background Color</label>
          <div className="color-options flex space-x-2">
            {backgroundColorOptions.map(option => (
              <button
                key={option.value}
                className={`color-option w-8 h-8 rounded-full ${
                  avatarOptions.backgroundColor === option.value ? 'ring-2 ring-primary-base ring-offset-2' : ''
                }`}
                style={{ backgroundColor: `#${option.value}` }}
                title={option.label}
                onClick={() => handleOptionChange('backgroundColor', option.value)}
              />
            ))}
          </div>
        </div>
        
        <div className="customizer-field col-span-full">
          <label className="block text-gray-700 font-medium mb-2">Character Style</label>
          <button 
            className="btn btn-secondary w-full"
            onClick={handleRandomize}
          >
            Randomize My Avatar
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Click to generate a new random look!
          </p>
        </div>
      </div>
      
      <div className="customizer-actions mt-6 flex justify-end space-x-4">
        <button 
          className="btn btn-outline"
          onClick={() => onUpdate(user)}
        >
          Cancel
        </button>
        <button 
          className="btn btn-primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Avatar'}
        </button>
      </div>
    </div>
  );
};

export default AvatarCustomizer;