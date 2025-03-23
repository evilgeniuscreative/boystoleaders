-- Create Activity Table
CREATE TABLE activities (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  activity_type VARCHAR(50) NOT NULL,
  points_earned INTEGER DEFAULT 0,
  challenge_id INTEGER REFERENCES challenges(id),
  mentor_id INTEGER REFERENCES users(id),
  content_id INTEGER REFERENCES content(id),
  skill_id INTEGER REFERENCES skills(id),
  details JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Skill Progress Table
CREATE TABLE skill_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  skill_id INTEGER NOT NULL REFERENCES skills(id),
  current_level INTEGER NOT NULL DEFAULT 1,
  points_earned INTEGER NOT NULL DEFAULT 0,
  completed_activities INTEGER NOT NULL DEFAULT 0,
  last_activity_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, skill_id)
);

-- Create Relationship Progress Table
CREATE TABLE relationship_module_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  module_id INTEGER NOT NULL REFERENCES learning_modules(id),
  lessons_completed INTEGER NOT NULL DEFAULT 0,
  simulations_completed INTEGER NOT NULL DEFAULT 0,
  scenarios_completed INTEGER NOT NULL DEFAULT 0,
  total_points INTEGER NOT NULL DEFAULT 0,
  highest_level_completed INTEGER NOT NULL DEFAULT 0,
  last_activity_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, module_id)
);

-- Indexes for efficient analytics queries
CREATE INDEX idx_activities_user_time ON activities(user_id, created_at);
CREATE INDEX idx_activities_type_time ON activities(activity_type, created_at);
CREATE INDEX idx_skill_progress_user ON skill_progress(user_id);
CREATE INDEX idx_relationship_module_user ON relationship_module_progress(user_id);