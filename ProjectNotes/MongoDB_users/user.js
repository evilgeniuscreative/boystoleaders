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