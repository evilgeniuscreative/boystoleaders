// models/index.js
const mongoose = require('mongoose');

// Create a models object to export
const models = {};

// User Model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'mentor', 'admin', 'content_creator', 'editor'],
    default: 'user'
  },
  active: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  }
}, { timestamps: true });

// UserProfile Model
const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthdate: { type: Date, required: true },
    profileImage: { type: String, default: '/images/default-avatar.png' },
    location: {
      city: String,
      state: String,
      country: String
    }
  },
  interests: [String],
  emailPreferences: {
    subscribed: { type: Boolean, default: true },
    newsletterFrequency: { 
      type: String, 
      enum: ['weekly', 'monthly', 'quarterly', 'never'],
      default: 'weekly'
    },
    topicPreferences: [String],
    lastEmailSent: Date,
    unsubscribeToken: { type: String }
  },
  avatar: {
    seed: { type: String },
    skinColor: { type: String },
    hairColor: { type: String },
    backgroundColor: { type: String },
    customized: { type: Boolean, default: false }
  }
}, { timestamps: true });

// UserProgress Model
const userProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  level: {
    type: Number,
    default: 1,
    min: 1
  },
  points: {
    type: Number,
    default: 0,
    min: 0
  },
  currentStreak: {
    type: Number,
    default: 0,
    min: 0
  },
  maxStreak: {
    type: Number,
    default: 0,
    min: 0
  },
  lastActivityDate: {
    type: Date
  },
  completedChallenges: [{
    challengeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content'
    },
    completedAt: {
      type: Date,
      default: Date.now
    },
    submission: {
      content: String,
      format: String,
      attachments: [String]
    }
  }],
  skills: [{
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill'
    },
    level: {
      type: Number,
      default: 1,
      min: 1
    },
    pointsEarned: {
      type: Number,
      default: 0,
      min: 0
    },
    lastProgress: Date
  }],
  achievements: [{
    id: String,
    name: String,
    description: String,
    icon: String,
    earnedAt: {
      type: Date,
      default: Date.now
    }
  }],
  moduleProgress: [{
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content'
    },
    name: String,
    percentComplete: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    lastActivity: Date
  }]
}, { timestamps: true });

// Activity Model
const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  details: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, { timestamps: true });

// Notification Model
const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'LEVEL_UP',
      'ACHIEVEMENT_EARNED',
      'CHALLENGE_COMPLETED',
      'MENTOR_ASSIGNED',
      'CHALLENGE_FEEDBACK',
      'STREAK_MILESTONE',
      'NEW_CONTENT',
      'COMMUNITY_MENTION',
      'WELCOME',
      'REMINDER'
    ]
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  read: {
    type: Boolean,
    default: false
  },
  readAt: {
    type: Date
  }
}, { timestamps: true });

// Skill Model
const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['leadership', 'communication', 'emotional_intelligence', 'technical', 'social', 'practical'],
    required: true
  },
  icon: {
    type: String
  },
  levels: [{
    level: Number,
    name: String,
    description: String,
    pointsRequired: Number
  }],
  relatedSkills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
  }],
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// Email Newsletter Model
const newsletterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'scheduled', 'sent', 'cancelled'],
    default: 'draft'
  },
  scheduledFor: {
    type: Date
  },
  sentAt: {
    type: Date
  },
  targetAudience: {
    roles: [String],
    ageMin: Number,
    ageMax: Number,
    activityLevel: String,
    customSegmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserSegment'
    }
  },
  stats: {
    totalRecipients: Number,
    sentCount: Number,
    failedCount: Number,
    openCount: Number,
    clickCount: Number
  }
}, { timestamps: true });

// Email Log Model
const emailLogSchema = new mongoose.Schema({
  newsletterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Newsletter'
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  recipientEmail: {
    type: String,
    required: true
  },
  trackingId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['sent', 'failed', 'bounced'],
    required: true
  },
  opened: {
    type: Boolean,
    default: false
  },
  openedAt: {
    type: Date
  },
  openCount: {
    type: Number,
    default: 0
  },
  clicked: {
    type: Boolean,
    default: false
  },
  clickedAt: {
    type: Date
  },
  clickCount: {
    type: Number,
    default: 0
  },
  links: [{
    url: String,
    clickCount: Number
  }],
  error: String,
  sentAt: {
    type: Date,
    default: Date.now
  }
});

// Content Model (for challenges, learning modules, etc.)
const contentBaseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'review', 'published', 'archived'],
    default: 'draft'
  },
  targetAudience: {
    ageMin: { type: Number, min: 13, max: 19 },
    ageMax: { type: Number, min: 13, max: 19 },
    skillLevel: { 
      type: String, 
      enum: ['beginner', 'intermediate', 'advanced', 'all'],
      default: 'all'
    }
  },
  tags: [String],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  publishDate: Date
}, { 
  timestamps: true,
  discriminatorKey: 'contentType'
});

// Safe model creation - avoids OverwriteModelError
const createModel = (name, schema) => {
  return mongoose.models[name] || mongoose.model(name, schema);
};

// Register all models
models.User = createModel('User', userSchema);
models.UserProfile = createModel('UserProfile', userProfileSchema);
models.UserProgress = createModel('UserProgress', userProgressSchema);
models.Activity = createModel('Activity', activitySchema);
models.Notification = createModel('Notification', notificationSchema);
models.Skill = createModel('Skill', skillSchema);
models.Newsletter = createModel('Newsletter', newsletterSchema);
models.EmailLog = createModel('EmailLog', emailLogSchema);
models.Content = createModel('Content', contentBaseSchema);

// Set up content discriminators
if (!mongoose.models.Content.discriminators || 
    !mongoose.models.Content.discriminators.Challenge) {
  models.Challenge = models.Content.discriminator('Challenge', new mongoose.Schema({
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: true
    },
    duration: {
      type: String,
      enum: ['quick', 'short', 'medium', 'extended'],
      required: true
    },
    pointsAwarded: {
      type: Number,
      required: true,
      min: 10,
      max: 500
    },
    instructions: {
      type: String,
      required: true
    },
    submissionType: {
      type: String,
      enum: ['text', 'image', 'video', 'audio', 'file', 'multiple'],
      required: true
    },
    resources: [{
      title: String,
      type: String,
      url: String
    }],
    successCriteria: [String],
    feedbackTemplate: String
  }));
}

if (!mongoose.models.Content.discriminators || 
    !mongoose.models.Content.discriminators.LearningModule) {
  models.LearningModule = models.Content.discriminator('LearningModule', new mongoose.Schema({
    lessons: [{
      title: String,
      content: String,
      videoUrl: String,
      order: Number,
      quizQuestions: [{
        question: String,
        options: [String],
        correctAnswer: Number,
        explanation: String
      }]
    }],
    estimatedCompletionTime: Number,
    prerequisites: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content'
    }],
    skillsAddressed: [String],
    certificationEnabled: {
      type: Boolean,
      default: false
    }
  }));
}

if (!mongoose.models.Content.discriminators || 
    !mongoose.models.Content.discriminators.RelationshipModule) {
  models.RelationshipModule = models.Content.discriminator('RelationshipModule', new mongoose.Schema({
    topics: [{
      title: String,
      content: String,
      order: Number
    }],
    scenarios: [{
      title: String,
      description: String,
      interactions: [{}],
      feedback: String
    }],
    perspectives: [{
      title: String,
      personaName: String,
      personaBackground: String,
      content: String,
      videoUrl: String
    }],
    discussionPrompts: [String]
  }));
}

// Create indexes for performance
Object.keys(models).forEach(modelName => {
  if (models[modelName].createIndexes) {
    models[modelName].createIndexes()
      .catch(err => console.error(`Error creating indexes for ${modelName}:`, err));
  }
});

module.exports = models;