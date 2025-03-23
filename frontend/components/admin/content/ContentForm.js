// components/admin/content/ContentForm.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchContentById, createContent, updateContent } from '../../../utils/api';
import RichTextEditor from '../common/RichTextEditor';

const ContentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contentType: 'Challenge', // Default type
    status: 'draft',
    targetAudience: {
      ageMin: 13,
      ageMax: 19,
      skillLevel: 'all'
    },
    tags: [],
    
    // Challenge specific fields
    difficulty: 'medium',
    duration: 'medium',
    pointsAwarded: 100,
    instructions: '',
    submissionType: 'text',
    resources: [],
    successCriteria: [],
    feedbackTemplate: '',
    
    // Learning Module specific fields
    lessons: [],
    estimatedCompletionTime: 30,
    prerequisites: [],
    skillsAddressed: [],
    certificationEnabled: false,
    
    // Relationship Module specific fields
    topics: [],
    scenarios: [],
    perspectives: [],
    discussionPrompts: []
  });
  
  // Load content for editing
  useEffect(() => {
    if (isEditMode) {
      loadContent();
    }
  }, [id]);
  
  const loadContent = async () => {
    try {
      setLoading(true);
      const content = await fetchContentById(id);
      setFormData(content);
    } catch (error) {
      console.error('Error loading content:', error);
      // Show error notification
    } finally {
      setLoading(false);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
   // components/admin/content/ContentForm.js (continued from line 74)

  // Handle input changes for nested properties (e.g., targetAudience.ageMin)
  if (name.includes('.')) {
    const [parent, child] = name.split('.');
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value
      }
    }));
  } else {
    // Handle regular input changes
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

// Handle rich text editor changes
const handleRichTextChange = (fieldName, content) => {
  setFormData(prev => ({
    ...prev,
    [fieldName]: content
  }));
};

// Handle tag changes
const handleTagChange = (tags) => {
  setFormData(prev => ({
    ...prev,
    tags
  }));
};

// Handle array field changes (resources, successCriteria, etc.)
const handleArrayFieldChange = (fieldName, items) => {
  setFormData(prev => ({
    ...prev,
    [fieldName]: items
  }));
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    setSaving(true);
    
    // Prepare data based on content type
    const contentTypeSpecificData = getContentTypeSpecificData();
    
    // Combine common data with type-specific data
    const dataToSubmit = {
      title: formData.title,
      description: formData.description,
      contentType: formData.contentType,
      status: formData.status,
      targetAudience: formData.targetAudience,
      tags: formData.tags,
      ...contentTypeSpecificData
    };
    
    let response;
    
    if (isEditMode) {
      response = await updateContent(id, dataToSubmit);
    } else {
      response = await createContent(dataToSubmit);
    }
    
    // Redirect to content list with success message
    navigate('/admin/content', { 
      state: { 
        message: {
          type: 'success',
          text: isEditMode ? 'Content updated successfully' : 'Content created successfully'
        }
      }
    });
  } catch (error) {
    console.error('Error saving content:', error);
    // Show error notification
  } finally {
    setSaving(false);
  }
}
};