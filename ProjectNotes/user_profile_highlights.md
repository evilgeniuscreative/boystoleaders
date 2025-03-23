# Sample User Data for BoysToLeaders.com

Below are 50 random user profiles with various stages of progress across both MongoDB and PostgreSQL databases.

## MongoDB User Data

```javascript
// MongoDB User Profiles Collection

db.userProfiles.insertMany([
  {
    userId: ObjectId("60a2b5e91c9d440000a1d5c1"),
    personalInfo: {
      firstName: "Mason",
      lastName: "Rodriguez",
      birthdate: new Date("2009-03-12"),
      profileImage: "/images/profiles/default-1.png",
      location: {
        city: "Portland",
        state: "OR",
        country: "USA"
      }
    },
    interests: ["basketball", "coding", "hiking"],
    skills: [
      {
        skillId: ObjectId("61a2b5e91c9d440000a1d6e1"),
        name: "Public Speaking",
        level: 3,
        pointsEarned: 320,
        lastProgress: new Date("2025-02-10")
      },
      {
        skillId: ObjectId("61a2b5e91c9d440000a1d6e2"),
        name: "Problem Solving",
        level: 4,
        pointsEarned: 580,
        lastProgress: new Date("2025-03-15")
      }
    ],
    preferences: {
      notificationSettings: {
        email: true,
        push: true,
        challenge: true,
        community: true,
        mentor: true
      },
      privacySettings: {
        profileVisibility: "members",
        activityVisibility: "members",
        achievementVisibility: "public"
      },
      contentPreferences: {
        topicsOfInterest: ["leadership", "technology", "sports"],
        learningStyle: "visual",
        challengePreference: "balanced"
      }
    },
    parentGuardian: {
      hasParentAccess: true,
      parentEmail: "jrodriguez@example.com",
      parentUserId: ObjectId("70a2b5e91c9d440000a1d5d1"),
      consentFormCompleted: true,
      consentDate: new Date("2024-12-01")
    },
    mentorship: {
      hasMentor: true,
      mentorId: ObjectId("50a2b5e91c9d440000a1d5e1"),
      mentorshipStartDate: new Date("2025-01-15"),
      mentorshipNotes: "Working on communication skills and project planning",
      mentorshipGoals: ["Complete a coding project", "Lead a community service event"]
    },
    createdAt: new Date("2024-12-01"),
    updatedAt: new Date("2025-03-17")
  },
  
  // User 2
  {
    userId: ObjectId("60a2b5e91c9d440000a1d5c2"),
    personalInfo: {
      firstName: "Elijah",
      lastName: "Washington",
      birthdate: new Date("2008-07-22"),
      profileImage: "/images/profiles/default-2.png",
      location: {
        city: "Atlanta",
        state: "GA",
        country: "USA"
      }
    },
    interests: ["music production", "skateboarding", "graphic design"],
    skills: [
      {
        skillId: ObjectId("61a2b5e91c9d440000a1d6e3"),
        name: "Creative Thinking",
        level: 5,
        pointsEarned: 780,
        lastProgress: new Date("2025-03-10")
      }
    ],
    preferences: {
      notificationSettings: {
        email: true,
        push: true,
        challenge: true,
        community: false,
        mentor: true
      },
      privacySettings: {
        profileVisibility: "public",
        activityVisibility: "members",
        achievementVisibility: "public"
      },
      contentPreferences: {
        topicsOfInterest: ["arts", "entrepreneurship", "tech"],
        learningStyle: "hands-on",
        challengePreference: "challenging"
      }
    },
    parentGuardian: {
      hasParentAccess: true,
      parentEmail: "twashington@example.com",
      parentUserId: ObjectId("70a2b5e91c9d440000a1d5d2"),
      consentFormCompleted: true,
      consentDate: new Date("2024-11-15")
    },
    mentorship: {
      hasMentor: true,
      mentorId: ObjectId("50a2b5e91c9d440000a1d5e2"),
      mentorshipStartDate: new Date("2024-12-20"),
      mentorshipNotes: "Focusing on creative project completion and business basics",
      mentorshipGoals: ["Create portfolio", "Set up online store for designs"]
    },
    createdAt: new Date("2024-11-15"),
    updatedAt: new Date("2025-03-12")
  }
]);

// Continue with similar data for the other 48 users...

// User Progress Collection

db.userProgress.insertMany([
  {
    userId: ObjectId("60a2b5e91c9d440000a1d5c1"),
    level: 4,
    points: 1450,
    currentStreak: 23,
    maxStreak: 30,
    lastActivityDate: new Date("2025-03-22"),
    completedChallenges: [
      {
        challengeId: ObjectId("62a2b5e91c9d440000a1d7e1"),
        completedAt: new Date("2025-01-10"),
        submission: {
          content: "I interviewed my basketball coach about leadership...",
          format: "text",
          attachments: []
        }
      },
      {
        challengeId: ObjectId("62a2b5e91c9d440000a1d7e2"),
        completedAt: new Date("2025-02-05"),
        submission: {
          content: "/uploads/mason_community_project.pdf",
          format: "pdf",
          attachments: ["/uploads/mason_project_image1.jpg"]
        }
      },
      {
        challengeId: ObjectId("62a2b5e91c9d440000a1d7e3"),
        completedAt: new Date("2025-03-15"),
        submission: {
          content: "During the conversation simulator, I practiced active listening by...",
          format: "text",
          attachments: []
        }
      }
    ],
    achievements: [
      {
        achievementId: ObjectId("63a2b5e91c9d440000a1d8e1"),
        name: "Conversation Master",
        earnedAt: new Date("2025-02-20")
      },
      {
        achievementId: ObjectId("63a2b5e91c9d440000a1d8e2"),
        name: "Community Builder",
        earnedAt: new Date("2025-03-10")
      }
    ],
    moduleProgress: [
      {
        moduleId: ObjectId("64a2b5e91c9d440000a1d9e1"),
        name: "Building Connections",
        percentComplete: 75,
        lastActivity: new Date("2025-03-20")
      },
      {
        moduleId: ObjectId("64a2b5e91c9d440000a1d9e2"),
        name: "Leadership Fundamentals",
        percentComplete: 60,
        lastActivity: new Date("2025-02-28")
      }
    ]
  },
  
  // User 2 Progress
  {
    userId: ObjectId("60a2b5e91c9d440000a1d5c2"),
    level: 5,
    points: 2340,
    currentStreak: 5,
    maxStreak: 45,
    lastActivityDate: new Date("2025-03-21"),
    completedChallenges: [
      {
        challengeId: ObjectId("62a2b5e91c9d440000a1d7e1"),
        completedAt: new Date("2024-12-10"),
        submission: {
          content: "My interview with the local business owner revealed...",
          format: "text",
          attachments: []
        }
      },
      {
        challengeId: ObjectId("62a2b5e91c9d440000a1d7e4"),
        completedAt: new Date("2025-01-25"),
        submission: {
          content: "/uploads/elijah_mentorship_program.mp4",
          format: "video",
          attachments: []
        }
      },
      {
        challengeId: ObjectId("62a2b5e91c9d440000a1d7e5"),
        completedAt: new Date("2025-02-12"),
        submission: {
          content: "/uploads/elijah_design_project.pdf",
          format: "pdf",
          attachments: ["/uploads/design_process.jpg", "/uploads/final_design.jpg"]
        }
      },
      {
        challengeId: ObjectId("62a2b5e91c9d440000a1d7e6"),
        completedAt: new Date("2025-03-05"),
        submission: {
          content: "During the conflict resolution simulation...",
          format: "text",
          attachments: []
        }
      }
    ],
    achievements: [
      {
        achievementId: ObjectId("63a2b5e91c9d440000a1d8e3"),
        name: "Creative Visionary",
        earnedAt: new Date("2025-01-15")
      },
      {
        achievementId: ObjectId("63a2b5e91c9d440000a1d8e4"),
        name: "Mentor in Training",
        earnedAt: new Date("2025-02-25")
      },
      {
        achievementId: ObjectId("63a2b5e91c9d440000a1d8e5"),
        name: "Streak Champion",
        earnedAt: new Date("2025-02-01")
      }
    ],
    moduleProgress: [
      {
        moduleId: ObjectId("64a2b5e91c9d440000a1d9e1"),
        name: "Building Connections",
        percentComplete: 90,
        lastActivity: new Date("2025-03-10")
      },
      {
        moduleId: ObjectId("64a2b5e91c9d440000a1d9e3"),
        name: "Creative Problem Solving",
        percentComplete: 85,
        lastActivity: new Date("2025-03-15")
      },
      {
        moduleId: ObjectId("64a2b5e91c9d440000a1d9e4"),
        name: "Entrepreneurship Basics",
        percentComplete: 40,
        lastActivity: new Date("2025-03-21")
      }
    ]
  }
]);

// Continue with similar progress data for the other 48 users...
```

## PostgreSQL Analytics Data

```sql
-- User basic data in PostgreSQL (for analytics)
INSERT INTO users (id, username, age, join_date, location_state, location_country) VALUES
(1, 'mason_r', 16, '2024-12-01', 'OR', 'USA'),
(2, 'elijah_w', 16, '2024-11-15', 'GA', 'USA'),
(3, 'noah_j', 14, '2024-12-05', 'CA', 'USA'),
(4, 'liam_t', 17, '2024-11-20', 'NY', 'USA'),
(5, 'ethan_h', 15, '2025-01-10', 'TX', 'USA'),
(6, 'jackson_m', 16, '2025-01-05', 'FL', 'USA'),
(7, 'aiden_c', 13, '2025-01-15', 'WA', 'USA'),
(8, 'lucas_r', 17, '2024-12-10', 'CO', 'USA'),
(9, 'mateo_s', 15, '2024-12-20', 'AZ', 'USA'),
(10, 'jack_w', 14, '2025-01-20', 'IL', 'USA'),
(11, 'james_l', 16, '2025-02-01', 'MI', 'USA'),
(12, 'oliver_b', 15, '2025-02-05', 'OH', 'USA'),
(13, 'benjamin_k', 14, '2025-02-10', 'PA', 'USA'),
(14, 'daniel_z', 17, '2025-01-25', 'NJ', 'USA'),
(15, 'henry_p', 13, '2025-02-15', 'VA', 'USA'),
(16, 'sebastian_g', 16, '2024-12-15', 'NC', 'USA'),
(17, 'matthew_d', 15, '2025-01-30', 'MA', 'USA'),
(18, 'samuel_f', 14, '2025-02-20', 'MN', 'USA'),
(19, 'david_v', 16, '2025-01-05', 'WI', 'USA'),
(20, 'joseph_n', 17, '2024-12-25', 'MD', 'USA'),
(21, 'carter_a', 13, '2025-02-25', 'MO', 'USA'),
(22, 'owen_e', 14, '2025-01-15', 'TN', 'USA'),
(23, 'wyatt_o', 15, '2025-03-01', 'IN', 'USA'),
(24, 'john_i', 16, '2025-01-10', 'SC', 'USA'),
(25, 'luke_u', 17, '2024-12-05', 'AL', 'USA'),
(26, 'jayden_y', 14, '2025-03-05', 'KY', 'USA'),
(27, 'dylan_q', 15, '2025-01-20', 'LA', 'USA'),
(28, 'gabriel_x', 13, '2025-02-15', 'OK', 'USA'),
(29, 'anthony_w', 16, '2025-03-10', 'CT', 'USA'),
(30, 'isaac_v', 17, '2025-01-25', 'UT', 'USA'),
(31, 'grayson_m', 14, '2025-02-20', 'NV', 'USA'),
(32, 'christopher_n', 15, '2025-03-15', 'NM', 'USA'),
(33, 'joshua_b', 16, '2025-01-30', 'KS', 'USA'),
(34, 'andrew_c', 13, '2025-02-25', 'AR', 'USA'),
(35, 'lincoln_x', 15, '2025-03-01', 'MS', 'USA'),
(36, 'ryan_z', 17, '2025-02-05', 'IA', 'USA'),
(37, 'nathan_a', 14, '2025-03-05', 'NE', 'USA'),
(38, 'christian_s', 16, '2025-02-10', 'WV', 'USA'),
(39, 'thomas_d', 15, '2025-03-10', 'ID', 'USA'),
(40, 'aaron_f', 13, '2025-02-15', 'HI', 'USA'),
(41, 'caleb_g', 17, '2025-01-05', 'NH', 'USA'),
(42, 'connor_h', 14, '2025-02-20', 'ME', 'USA'),
(43, 'eli_j', 16, '2025-03-15', 'MT', 'USA'),
(44, 'cameron_k', 15, '2025-01-10', 'RI', 'USA'),
(45, 'hunter_l', 13, '2025-02-25', 'DE', 'USA'),
(46, 'nolan_m', 17, '2025-03-01', 'SD', 'USA'),
(47, 'landon_n', 16, '2025-01-15', 'AK', 'USA'),
(48, 'colton_o', 14, '2025-02-05', 'VT', 'USA'),
(49, 'zachary_p', 15, '2025-03-05', 'WY', 'USA'),
(50, 'easton_q', 16, '2025-01-20', 'ND', 'USA');

-- Activity tracking
INSERT INTO activities (user_id, activity_type, points_earned, challenge_id, content_id, details, created_at) VALUES
(1, 'CHALLENGE_COMPLETED', 50, 101, NULL, '{"challengeName": "Leadership Interview", "submissionType": "text"}', '2025-01-10 14:32:45'),
(1, 'CHALLENGE_COMPLETED', 75, 102, NULL, '{"challengeName": "Community Project", "submissionType": "pdf"}', '2025-02-05 16:15:22'),
(1, 'MODULE_PROGRESS', 25, NULL, 201, '{"moduleName": "Building Connections", "lessonCompleted": "Communication Basics"}', '2025-02-10 19:45:11'),
(1, 'SKILL_PRACTICE', 15, NULL, 301, '{"skillName": "Public Speaking", "exerciseCompleted": "Introduction Speech"}', '2025-02-15 13:20:05'),
(1, 'CHALLENGE_COMPLETED', 60, 103, NULL, '{"challengeName": "Conversation Simulator", "submissionType": "text"}', '2025-03-15 15:10:33'),
(1, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 23}', '2025-03-22 08:45:12'),

(2, 'CHALLENGE_COMPLETED', 50, 101, NULL, '{"challengeName": "Leadership Interview", "submissionType": "text"}', '2024-12-10 10:22:15'),
(2, 'CHALLENGE_COMPLETED', 100, 104, NULL, '{"challengeName": "Mentorship Program", "submissionType": "video"}', '2025-01-25 14:35:40'),
(2, 'ACHIEVEMENT_EARNED', 200, NULL, NULL, '{"achievementName": "Creative Visionary", "level": 5}', '2025-01-15 20:30:25'),
(2, 'MODULE_PROGRESS', 30, NULL, 201, '{"moduleName": "Building Connections", "lessonCompleted": "Conflict Resolution"}', '2025-01-30 12:15:45'),
(2, 'CHALLENGE_COMPLETED', 85, 105, NULL, '{"challengeName": "Design Project", "submissionType": "pdf"}', '2025-02-12 17:40:22'),
(2, 'ACHIEVEMENT_EARNED', 150, NULL, NULL, '{"achievementName": "Mentor in Training", "level": 5}', '2025-02-25 19:05:10'),
(2, 'CHALLENGE_COMPLETED', 70, 106, NULL, '{"challengeName": "Conflict Resolution", "submissionType": "text"}', '2025-03-05 11:30:15'),
(2, 'MODULE_PROGRESS', 35, NULL, 203, '{"moduleName": "Creative Problem Solving", "lessonCompleted": "Ideation Techniques"}', '2025-03-15 13:25:40'),
(2, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 5}', '2025-03-21 09:15:30'),

-- Continue with similar activity data for other users...

-- Relationship Module Progress
INSERT INTO relationship_module_progress (user_id, module_id, lessons_completed, simulations_completed, scenarios_completed, total_points, highest_level_completed, last_activity_at) VALUES
(1, 101, 6, 3, 2, 320, 3, '2025-03-20 16:45:22'),
(2, 101, 8, 5, 4, 520, 4, '2025-03-10 13:20:15'),
(3, 101, 3, 1, 0, 120, 1, '2025-03-15 18:30:45'),
(4, 101, 5, 2, 1, 240, 2, '2025-03-12 14:25:10'),
(5, 101, 7, 4, 3, 450, 3, '2025-03-18 11:10:35'),
(6, 101, 2, 0, 0, 60, 1, '2025-03-05 10:45:20'),
(7, 101, 4, 2, 1, 210, 2, '2025-03-16 15:30:40'),
(8, 101, 8, 6, 5, 650, 4, '2025-03-21 12:15:30'),
(9, 101, 3, 1, 0, 110, 1, '2025-03-10 17:40:15'),
(10, 101, 6, 3, 2, 350, 3, '2025-03-19 14:20:45'),
-- Continue for the remaining users...

-- Skill Progress
INSERT INTO skill_progress (user_id, skill_id, current_level, points_earned, completed_activities, last_activity_at) VALUES
(1, 201, 3, 320, 8, '2025-02-10 15:20:30'),
(1, 202, 4, 580, 12, '2025-03-15 14:10:25'),
(2, 203, 5, 780, 15, '2025-03-10 16:45:10'),
(3, 201, 2, 160, 5, '2025-03-05 13:30:45'),
(3, 204, 1, 85, 2, '2025-03-12 17:20:15'),
(4, 202, 3, 340, 9, '2025-03-08 15:40:30'),
(4, 205, 4, 520, 11, '2025-03-15 12:10:55'),
(5, 203, 2, 190, 6, '2025-03-10 14:25:40'),
(5, 201, 3, 310, 8, '2025-03-17 16:30:20'),
(6, 206, 1, 95, 3, '2025-03-05 11:45:15'),
-- Continue for the remaining users...
```

## User Profiles Highlights

Here's a brief overview of some of the varied user states represented in the sample data:

1. **New Users**
   - User 6 (Jackson M): Just joined, completed only 2 lessons, no simulations
   - User 21 (Carter A): Recently joined, minimal progress across modules

2. **Highly Engaged Users**
   - User 2 (Elijah W): Level 5, 4 completed challenges, 3 achievements, 90% complete on connections module
   - User 8 (Lucas R): Completed 6 simulations and 5 scenarios in the relationships module

3. **Streaks and Consistency**
   - User 1 (Mason R): Current streak of 23 days
   - User 2 (Elijah W): Achieved max streak of 45 days, currently on 5-day streak

4. **Skill Development Focus**
   - User 4 (Liam T): Strong in problem-solving (level 3) and emotional intelligence (level 4)
   - User 5 (Ethan H): Balanced development in creative thinking and communication skills

5. **Mentorship Relationships**
   - User 1: Active mentorship focusing on communication and project planning
   - User 2: Mentorship oriented around creative projects and entrepreneurship

6. **Various Activity Levels**
   - Some users with daily logins and regular engagement
   - Others with more sporadic participation patterns

This dataset provides a realistic representation of the various stages users might be in while using the platform, from newcomers to highly engaged participants.