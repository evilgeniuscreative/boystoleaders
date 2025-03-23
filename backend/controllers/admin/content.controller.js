// controllers/admin/content.controller.js
const { Content, Challenge, LearningModule, RelationshipModule } = require('../../models');
const { createActivity } = require('../../services/activity.service');

// Get all content with filtering
exports.getAllContent = async (req, res) => {
  try {
    const { 
      contentType, 
      status, 
      page = 1, 
      limit = 20,
      search,
      sortBy = 'updatedAt',
      sortDir = 'desc'
    } = req.query;
    
    const query = {};
    
    // Apply filters
    if (contentType) query.contentType = contentType;
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    // Set up pagination
    const skip = (page - 1) * limit;
    
    // Set up sorting
    const sort = {};
    sort[sortBy] = sortDir === 'asc' ? 1 : -1;
    
    // Get content count for pagination
    const totalCount = await Content.countDocuments(query);
    
    // Get content
    const content = await Content.find(query)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit))
      .populate('createdBy', 'firstName lastName')
      .populate('updatedBy', 'firstName lastName');
    
    // Send response
    res.json({
      content,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: Number(page)
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ message: 'Server error while fetching content' });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const content = await Content.findById(id)
      .populate('createdBy', 'firstName lastName')
      .populate('updatedBy', 'firstName lastName');
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    res.json(content);
  } catch (error) {
    console.error('Error fetching content by ID:', error);
    res.status(500).json({ message: 'Server error while fetching content' });
  }
};

// Create new content
exports.createContent = async (req, res) => {
  try {
    const { contentType } = req.body;
    
    let ContentModel;
    
    // Select appropriate model based on content type
    switch (contentType) {
      case 'Challenge':
        ContentModel = Challenge;
        break;
      case 'LearningModule':
        ContentModel = LearningModule;
        break;
      case 'RelationshipModule':
        ContentModel = RelationshipModule;
        break;
      default:
        return res.status(400).json({ message: 'Invalid content type' });
    }
    
    // Create content
    const content = new ContentModel({
      ...req.body,
      createdBy: req.user.id,
      updatedBy: req.user.id
    });
    
    await content.save();
    
    // Record activity
    await createActivity({
      userId: req.user.id,
      type: 'CONTENT_CREATED',
      data: {
        contentId: content._id,
        contentType,
        title: content.title
      }
    });
    
    res.status(201).json(content);
  } catch (error) {
    console.error('Error creating content:', error);
    res.status(500).json({ message: 'Server error while creating content' });
  }
};

// Update content
exports.updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find existing content
    const content = await Content.findById(id);
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    // Check if user has permission to edit
    // Admins can edit anything, creators can only edit their own content unless it's published
    if (req.userRole !== 'admin' && 
        content.createdBy.toString() !== req.user.id && 
        content.status === 'published') {
      return res.status(403).json({ 
        message: 'You do not have permission to edit this published content' 
      });
    }
    
    // Update content (except for type which shouldn't change)
    const { contentType, ...updateData } = req.body;
    
    // Update updatedBy field
    updateData.updatedBy = req.user.id;
    
    // Perform update
    const updatedContent = await Content.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    // Record activity
    await createActivity({
      userId: req.user.id,
      type: 'CONTENT_UPDATED',
      data: {
        contentId: updatedContent._id,
        contentType: updatedContent.contentType,
        title: updatedContent.title
      }
    });
    
    res.json(updatedContent);
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ message: 'Server error while updating content' });
  }
};

// Change content status
exports.updateContentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    // Validate status
    if (!['draft', 'review', 'published', 'archived'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    // Find existing content
    const content = await Content.findById(id);
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    // Check permissions based on role and status change
    if (req.userRole === 'content_creator' && status === 'published') {
      return res.status(403).json({ 
        message: 'Content creators cannot publish content directly. Submit for review instead.' 
      });
    }
    
    // Update status
    content.status = status;
    content.updatedBy = req.user.id;
    
    // If publishing, set publish date
    if (status === 'published' && !content.publishDate) {
      content.publishDate = new Date();
    }
    
    await content.save();
    
    // Record activity
    await createActivity({
      userId: req.user.id,
      type: 'CONTENT_STATUS_CHANGED',
      data: {
        contentId: content._id,
        contentType: content.contentType,
        title: content.title,
        newStatus: status
      }
    });
    
    res.json(content);
  } catch (error) {
    console.error('Error updating content status:', error);
    res.status(500).json({ message: 'Server error while updating content status' });
  }
};

// Delete content
exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find existing content
    const content = await Content.findById(id);
    
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    
    // Only admins can delete content, or creators can delete their own drafts
    if (req.userRole !== 'admin' && 
        (content.createdBy.toString() !== req.user.id || content.status !== 'draft')) {
      return res.status(403).json({ 
        message: 'You do not have permission to delete this content' 
      });
    }
    
    await Content.findByIdAndDelete(id);
    
    // Record activity
    await createActivity({
      userId: req.user.id,
      type: 'CONTENT_DELETED',
      data: {
        contentTitle: content.title,
        contentType: content.contentType
      }
    });
    
    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    console.error('Error deleting content:', error);
    res.status(500).json({ message: 'Server error while deleting content' });
  }
};