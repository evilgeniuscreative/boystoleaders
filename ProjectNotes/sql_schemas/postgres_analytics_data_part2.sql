-- Activity tracking for users 11-25
INSERT INTO activities (user_id, activity_type, points_earned, challenge_id, content_id, details, created_at) VALUES
-- User 11
(11, 'CHALLENGE_COMPLETED', 50, 101, NULL, '{"challengeName": "Leadership Interview", "submissionType": "text"}', '2025-02-10 13:20:45'),
(11, 'MODULE_PROGRESS', 25, NULL, 208, '{"moduleName": "Team Leadership", "lessonCompleted": "Team Dynamics"}', '2025-02-20 15:45:30'),
(11, 'SKILL_PRACTICE', 20, NULL, 310, '{"skillName": "Team Building", "exerciseCompleted": "Group Challenge"}', '2025-03-05 11:30:15'),
(11, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 16}', '2025-03-21 09:20:45'),

-- User 12
(12, 'MODULE_PROGRESS', 20, NULL, 209, '{"moduleName": "Financial Literacy", "lessonCompleted": "Budgeting Basics"}', '2025-02-15 14:30:45'),
(12, 'SKILL_PRACTICE', 15, NULL, 311, '{"skillName": "Financial Planning", "exerciseCompleted": "Budget Creation"}', '2025-03-01 10:15:30'),
(12, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 12}', '2025-03-17 08:45:20'),

-- User 13
(13, 'CHALLENGE_COMPLETED', 45, 115, NULL, '{"challengeName": "Personal Reflection", "submissionType": "journal"}', '2025-02-20 15:30:45'),
(13, 'MODULE_PROGRESS', 15, NULL, 210, '{"moduleName": "Self-Discovery", "lessonCompleted": "Strengths Assessment"}', '2025-03-05 11:20:30'),
(13, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 10}', '2025-03-15 09:45:15'),

-- User 14
(14, 'CHALLENGE_COMPLETED', 60, 116, NULL, '{"challengeName": "Career Exploration", "submissionType": "presentation"}', '2025-02-05 14:15:30'),
(14, 'MODULE_PROGRESS', 30, NULL, 211, '{"moduleName": "Career Development", "lessonCompleted": "Industry Research"}', '2025-02-20 16:45:15'),
(14, 'SKILL_PRACTICE', 25, NULL, 312, '{"skillName": "Networking", "exerciseCompleted": "Informational Interview"}', '2025-03-10 13:30:45'),
(14, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 18}', '2025-03-22 08:15:30'),

-- User 15
(15, 'MODULE_PROGRESS', 15, NULL, 212, '{"moduleName": "Digital Literacy", "lessonCompleted": "Online Safety"}', '2025-02-25 11:45:30'),
(15, 'SKILL_PRACTICE', 10, NULL, 313, '{"skillName": "Digital Citizenship", "exerciseCompleted": "Online Research"}', '2025-03-10 14:20:15'),
(15, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 9}', '2025-03-19 09:30:45'),

-- User 16
(16, 'CHALLENGE_COMPLETED', 55, 117, NULL, '{"challengeName": "Mentorship Connection", "submissionType": "report"}', '2024-12-20 15:30:45'),
(16, 'MODULE_PROGRESS', 25, NULL, 213, '{"moduleName": "Mentorship Skills", "lessonCompleted": "Effective Communication"}', '2025-01-15 11:45:30'),
(16, 'SKILL_PRACTICE', 20, NULL, 314, '{"skillName": "Relationship Building", "exerciseCompleted": "Trust Building"}', '2025-02-10 14:20:15'),
(16, 'CHALLENGE_COMPLETED', 65, 118, NULL, '{"challengeName": "Peer Support", "submissionType": "document"}', '2025-03-05 16:30:45'),
(16, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 17}', '2025-03-22 08:45:30'),

-- User 17
(17, 'MODULE_PROGRESS', 20, NULL, 214, '{"moduleName": "Health and Wellness", "lessonCompleted": "Stress Management"}', '2025-02-05 13:45:30'),
(17, 'SKILL_PRACTICE', 15, NULL, 315, '{"skillName": "Self-Care", "exerciseCompleted": "Wellness Plan"}', '2025-02-25 10:30:15'),
(17, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 14}', '2025-03-20 09:15:45'),

-- User 18
(18, 'CHALLENGE_COMPLETED', 50, 119, NULL, '{"challengeName": "Environmental Project", "submissionType": "report"}', '2025-02-25 14:30:45'),
(18, 'MODULE_PROGRESS', 20, NULL, 215, '{"moduleName": "Environmental Leadership", "lessonCompleted": "Sustainability Basics"}', '2025-03-10 11:15:30'),
(18, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 11}', '2025-03-21 08:45:20'),

-- User 19
(19, 'CHALLENGE_COMPLETED', 55, 120, NULL, '{"challengeName": "Family Interview", "submissionType": "audio"}', '2025-01-15 15:30:45'),
(19, 'MODULE_PROGRESS', 25, NULL, 216, '{"moduleName": "Family Dynamics", "lessonCompleted": "Communication Patterns"}', '2025-02-01 11:45:30'),
(19, 'SKILL_PRACTICE', 20, NULL, 316, '{"skillName": "Conflict Resolution", "exerciseCompleted": "Mediation Practice"}', '2025-02-20 14:15:15'),
(19, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 15}', '2025-03-17 09:30:45'),

-- User 20
(20, 'CHALLENGE_COMPLETED', 65, 121, NULL, '{"challengeName": "Technology Project", "submissionType": "project"}', '2025-01-05 16:45:30'),
(20, 'MODULE_PROGRESS', 30, NULL, 217, '{"moduleName": "Technology Leadership", "lessonCompleted": "Digital Innovation"}', '2025-01-25 13:20:15'),
(20, 'SKILL_PRACTICE', 25, NULL, 317, '{"skillName": "Coding", "exerciseCompleted": "App Development"}', '2025-02-15 10:45:30'),
(20, 'CHALLENGE_COMPLETED', 80, 122, NULL, '{"challengeName": "Tech Solution", "submissionType": "presentation"}', '2025-03-05 15:30:45'),
(20, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 20}', '2025-03-22 08:15:30'),

-- User 21
(21, 'MODULE_PROGRESS', 15, NULL, 218, '{"moduleName": "Creative Expression", "lessonCompleted": "Storytelling Basics"}', '2025-03-05 11:30:45'),
(21, 'SKILL_PRACTICE', 10, NULL, 318, '{"skillName": "Creative Writing", "exerciseCompleted": "Short Story"}', '2025-03-15 14:45:30'),
(21, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 8}', '2025-03-20 09:30:15'),

-- User 22
(22, 'CHALLENGE_COMPLETED', 50, 123, NULL, '{"challengeName": "Sports Leadership", "submissionType": "video"}', '2025-01-25 15:30:45'),
(22, 'MODULE_PROGRESS', 20, NULL, 219, '{"moduleName": "Sports Leadership", "lessonCompleted": "Team Motivation"}', '2025-02-10 11:45:30'),
(22, 'SKILL_PRACTICE', 15, NULL, 319, '{"skillName": "Coaching", "exerciseCompleted": "Practice Planning"}', '2025-03-01 14:20:15'),
(22, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 13}', '2025-03-18 08:45:30'),

-- User 23
(23, 'MODULE_PROGRESS', 25, NULL, 220, '{"moduleName": "Academic Excellence", "lessonCompleted": "Study Strategies"}', '2025-03-05 13:45:30'),
(23, 'SKILL_PRACTICE', 20, NULL, 320, '{"skillName": "Time Management", "exerciseCompleted": "Schedule Creation"}', '2025-03-15 10:30:15'),
(23, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 10}', '2025-03-20 09:15:45'),

-- User 24
(24, 'CHALLENGE_COMPLETED', 55, 124, NULL, '{"challengeName": "Cultural Exchange", "submissionType": "presentation"}', '2025-01-20 14:30:45'),
(24, 'MODULE_PROGRESS', 25, NULL, 221, '{"moduleName": "Cultural Awareness", "lessonCompleted": "Cultural Competence"}', '2025-02-05 11:15:30'),
(24, 'SKILL_PRACTICE', 20, NULL, 321, '{"skillName": "Cross-Cultural Communication", "exerciseCompleted": "Cultural Interview"}', '2025-02-25 15:45:15'),
(24, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 16}', '2025-03-21 08:30:45'),

-- User 25
(25, 'CHALLENGE_COMPLETED', 60, 125, NULL, '{"challengeName": "Athletic Achievement", "submissionType": "video"}', '2024-12-15 16:45:30'),
(25, 'MODULE_PROGRESS', 30, NULL, 222, '{"moduleName": "Physical Development", "lessonCompleted": "Training Principles"}', '2025-01-10 13:20:15'),
(25, 'SKILL_PRACTICE', 25, NULL, 322, '{"skillName": "Athletic Performance", "exerciseCompleted": "Training Program"}', '2025-02-01 10:45:30'),
(25, 'CHALLENGE_COMPLETED', 75, 126, NULL, '{"challengeName": "Fitness Challenge", "submissionType": "report"}', '2025-02-20 15:30:45'),
(25, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 21}', '2025-03-22 09:15:30');
