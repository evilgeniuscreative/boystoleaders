-- Activity tracking for users 26-40
INSERT INTO activities (user_id, activity_type, points_earned, challenge_id, content_id, details, created_at) VALUES
-- User 26
(26, 'MODULE_PROGRESS', 15, NULL, 223, '{"moduleName": "Music and Leadership", "lessonCompleted": "Collaborative Performance"}', '2025-03-10 14:30:45'),
(26, 'SKILL_PRACTICE', 10, NULL, 323, '{"skillName": "Musical Expression", "exerciseCompleted": "Group Performance"}', '2025-03-20 11:15:30'),
(26, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 7}', '2025-03-22 09:45:20'),

-- User 27
(27, 'CHALLENGE_COMPLETED', 50, 127, NULL, '{"challengeName": "Entrepreneurship Project", "submissionType": "business plan"}', '2025-01-25 15:45:30'),
(27, 'MODULE_PROGRESS', 25, NULL, 224, '{"moduleName": "Entrepreneurship", "lessonCompleted": "Business Fundamentals"}', '2025-02-10 12:30:15'),
(27, 'SKILL_PRACTICE', 20, NULL, 324, '{"skillName": "Business Planning", "exerciseCompleted": "Market Research"}', '2025-03-01 16:15:45'),
(27, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 15}', '2025-03-20 08:30:45'),

-- User 28
(28, 'MODULE_PROGRESS', 15, NULL, 225, '{"moduleName": "Art and Expression", "lessonCompleted": "Visual Storytelling"}', '2025-02-20 13:45:30'),
(28, 'SKILL_PRACTICE', 10, NULL, 325, '{"skillName": "Visual Arts", "exerciseCompleted": "Portfolio Creation"}', '2025-03-10 10:30:15'),
(28, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 9}', '2025-03-19 09:15:45'),

-- User 29
(29, 'CHALLENGE_COMPLETED', 55, 128, NULL, '{"challengeName": "Public Speaking", "submissionType": "video"}', '2025-03-15 14:45:30'),
(29, 'MODULE_PROGRESS', 20, NULL, 226, '{"moduleName": "Communication Skills", "lessonCompleted": "Persuasive Speaking"}', '2025-03-20 11:30:15'),
(29, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 8}', '2025-03-22 08:45:30'),

-- User 30
(30, 'CHALLENGE_COMPLETED', 60, 129, NULL, '{"challengeName": "Outdoor Leadership", "submissionType": "report"}', '2025-02-01 16:30:45'),
(30, 'MODULE_PROGRESS', 30, NULL, 227, '{"moduleName": "Outdoor Skills", "lessonCompleted": "Navigation and Planning"}', '2025-02-15 13:15:30'),
(30, 'SKILL_PRACTICE', 25, NULL, 326, '{"skillName": "Wilderness Leadership", "exerciseCompleted": "Trip Planning"}', '2025-03-05 10:45:15'),
(30, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 17}', '2025-03-21 09:30:45'),

-- User 31
(31, 'MODULE_PROGRESS', 20, NULL, 228, '{"moduleName": "Digital Media", "lessonCompleted": "Content Creation"}', '2025-02-25 14:15:30'),
(31, 'SKILL_PRACTICE', 15, NULL, 327, '{"skillName": "Video Production", "exerciseCompleted": "Short Film"}', '2025-03-15 11:30:45'),
(31, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 12}', '2025-03-22 08:15:30'),

-- User 32
(32, 'CHALLENGE_COMPLETED', 50, 130, NULL, '{"challengeName": "Science Project", "submissionType": "experiment"}', '2025-03-20 15:45:30'),
(32, 'MODULE_PROGRESS', 25, NULL, 229, '{"moduleName": "Scientific Inquiry", "lessonCompleted": "Research Methods"}', '2025-03-22 12:30:15'),
(32, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 7}', '2025-03-22 09:45:30'),

-- User 33
(33, 'CHALLENGE_COMPLETED', 55, 131, NULL, '{"challengeName": "Volunteer Leadership", "submissionType": "report"}', '2025-02-05 14:30:45'),
(33, 'MODULE_PROGRESS', 25, NULL, 230, '{"moduleName": "Volunteer Management", "lessonCompleted": "Team Coordination"}', '2025-02-20 11:15:30'),
(33, 'SKILL_PRACTICE', 20, NULL, 328, '{"skillName": "Event Planning", "exerciseCompleted": "Volunteer Day"}', '2025-03-10 16:45:15'),
(33, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 16}', '2025-03-22 08:30:45'),

-- User 34
(34, 'MODULE_PROGRESS', 15, NULL, 231, '{"moduleName": "Culinary Arts", "lessonCompleted": "Nutrition Basics"}', '2025-03-01 13:45:30'),
(34, 'SKILL_PRACTICE', 10, NULL, 329, '{"skillName": "Cooking", "exerciseCompleted": "Meal Preparation"}', '2025-03-15 10:30:15'),
(34, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 8}', '2025-03-22 09:15:45'),

-- User 35
(35, 'CHALLENGE_COMPLETED', 50, 132, NULL, '{"challengeName": "Historical Research", "submissionType": "essay"}', '2025-03-05 15:30:45'),
(35, 'MODULE_PROGRESS', 20, NULL, 232, '{"moduleName": "Historical Leadership", "lessonCompleted": "Case Studies"}', '2025-03-15 12:15:30'),
(35, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 10}', '2025-03-22 08:45:30'),

-- User 36
(36, 'CHALLENGE_COMPLETED', 65, 133, NULL, '{"challengeName": "Engineering Challenge", "submissionType": "project"}', '2025-02-10 16:45:30'),
(36, 'MODULE_PROGRESS', 30, NULL, 233, '{"moduleName": "Engineering Principles", "lessonCompleted": "Design Process"}', '2025-02-25 13:30:15'),
(36, 'SKILL_PRACTICE', 25, NULL, 330, '{"skillName": "Technical Design", "exerciseCompleted": "Prototype Building"}', '2025-03-15 10:15:45'),
(36, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 18}', '2025-03-22 09:30:45'),

-- User 37
(37, 'MODULE_PROGRESS', 20, NULL, 234, '{"moduleName": "Civic Engagement", "lessonCompleted": "Community Governance"}', '2025-03-10 14:15:30'),
(37, 'SKILL_PRACTICE', 15, NULL, 331, '{"skillName": "Advocacy", "exerciseCompleted": "Issue Research"}', '2025-03-20 11:30:45'),
(37, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 11}', '2025-03-22 08:15:30'),

-- User 38
(38, 'CHALLENGE_COMPLETED', 55, 134, NULL, '{"challengeName": "Financial Project", "submissionType": "plan"}', '2025-02-15 15:45:30'),
(38, 'MODULE_PROGRESS', 25, NULL, 235, '{"moduleName": "Financial Management", "lessonCompleted": "Investment Basics"}', '2025-03-01 12:30:15'),
(38, 'SKILL_PRACTICE', 20, NULL, 332, '{"skillName": "Financial Analysis", "exerciseCompleted": "Budget Review"}', '2025-03-20 16:15:45'),
(38, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 15}', '2025-03-22 09:45:30'),

-- User 39
(39, 'CHALLENGE_COMPLETED', 50, 135, NULL, '{"challengeName": "Photography Project", "submissionType": "portfolio"}', '2025-03-15 14:30:45'),
(39, 'MODULE_PROGRESS', 20, NULL, 236, '{"moduleName": "Visual Storytelling", "lessonCompleted": "Composition Techniques"}', '2025-03-20 11:15:30'),
(39, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 9}', '2025-03-22 08:45:30'),

-- User 40
(40, 'MODULE_PROGRESS', 15, NULL, 237, '{"moduleName": "Gardening and Sustainability", "lessonCompleted": "Plant Basics"}', '2025-02-20 13:45:30'),
(40, 'SKILL_PRACTICE', 10, NULL, 333, '{"skillName": "Sustainable Gardening", "exerciseCompleted": "Garden Design"}', '2025-03-10 10:30:15'),
(40, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 8}', '2025-03-22 09:15:45');
