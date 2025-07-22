-- Activity tracking for users 41-50
INSERT INTO activities (user_id, activity_type, points_earned, challenge_id, content_id, details, created_at) VALUES
-- User 41
(41, 'CHALLENGE_COMPLETED', 60, 136, NULL, '{"challengeName": "Debate Competition", "submissionType": "video"}', '2025-01-15 16:30:45'),
(41, 'MODULE_PROGRESS', 30, NULL, 238, '{"moduleName": "Debate and Rhetoric", "lessonCompleted": "Argument Construction"}', '2025-02-01 13:15:30'),
(41, 'SKILL_PRACTICE', 25, NULL, 334, '{"skillName": "Debate", "exerciseCompleted": "Mock Debate"}', '2025-02-20 10:45:15'),
(41, 'CHALLENGE_COMPLETED', 75, 137, NULL, '{"challengeName": "Policy Proposal", "submissionType": "document"}', '2025-03-10 15:30:45'),
(41, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 19}', '2025-03-22 09:30:45'),

-- User 42
(42, 'MODULE_PROGRESS', 20, NULL, 239, '{"moduleName": "Outdoor Adventure", "lessonCompleted": "Safety Protocols"}', '2025-02-25 14:15:30'),
(42, 'SKILL_PRACTICE', 15, NULL, 335, '{"skillName": "Orienteering", "exerciseCompleted": "Map Reading"}', '2025-03-15 11:30:45'),
(42, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 12}', '2025-03-22 08:15:30'),

-- User 43
(43, 'CHALLENGE_COMPLETED', 55, 138, NULL, '{"challengeName": "Mentorship Program", "submissionType": "report"}', '2025-03-20 15:45:30'),
(43, 'MODULE_PROGRESS', 25, NULL, 240, '{"moduleName": "Peer Mentoring", "lessonCompleted": "Support Strategies"}', '2025-03-22 12:30:15'),
(43, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 7}', '2025-03-22 09:45:30'),

-- User 44
(44, 'CHALLENGE_COMPLETED', 50, 139, NULL, '{"challengeName": "Health Campaign", "submissionType": "presentation"}', '2025-01-15 14:30:45'),
(44, 'MODULE_PROGRESS', 25, NULL, 241, '{"moduleName": "Health Advocacy", "lessonCompleted": "Campaign Planning"}', '2025-02-01 11:15:30'),
(44, 'SKILL_PRACTICE', 20, NULL, 336, '{"skillName": "Health Education", "exerciseCompleted": "Workshop Design"}', '2025-02-20 16:45:15'),
(44, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 16}', '2025-03-22 08:30:45'),

-- User 45
(45, 'MODULE_PROGRESS', 15, NULL, 242, '{"moduleName": "Gaming and Leadership", "lessonCompleted": "Team Coordination"}', '2025-03-01 13:45:30'),
(45, 'SKILL_PRACTICE', 10, NULL, 337, '{"skillName": "Strategic Thinking", "exerciseCompleted": "Game Analysis"}', '2025-03-15 10:30:15'),
(45, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 8}', '2025-03-22 09:15:45'),

-- User 46
(46, 'CHALLENGE_COMPLETED', 65, 140, NULL, '{"challengeName": "Robotics Project", "submissionType": "demonstration"}', '2025-03-05 15:30:45'),
(46, 'MODULE_PROGRESS', 30, NULL, 243, '{"moduleName": "Robotics", "lessonCompleted": "Programming Basics"}', '2025-03-15 12:15:30'),
(46, 'SKILL_PRACTICE', 25, NULL, 338, '{"skillName": "Robotics Design", "exerciseCompleted": "Robot Building"}', '2025-03-20 16:45:15'),
(46, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 10}', '2025-03-22 08:45:30'),

-- User 47
(47, 'CHALLENGE_COMPLETED', 55, 141, NULL, '{"challengeName": "Cultural Project", "submissionType": "presentation"}', '2025-01-20 16:45:30'),
(47, 'MODULE_PROGRESS', 25, NULL, 244, '{"moduleName": "Cultural Leadership", "lessonCompleted": "Heritage Celebration"}', '2025-02-05 13:30:15'),
(47, 'SKILL_PRACTICE', 20, NULL, 339, '{"skillName": "Cultural Awareness", "exerciseCompleted": "Cultural Event"}', '2025-02-25 10:15:45'),
(47, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 18}', '2025-03-22 09:30:45'),

-- User 48
(48, 'MODULE_PROGRESS', 20, NULL, 245, '{"moduleName": "Journalism", "lessonCompleted": "Ethical Reporting"}', '2025-02-10 14:15:30'),
(48, 'SKILL_PRACTICE', 15, NULL, 340, '{"skillName": "Interviewing", "exerciseCompleted": "Profile Writing"}', '2025-03-01 11:30:45'),
(48, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 11}', '2025-03-22 08:15:30'),

-- User 49
(49, 'CHALLENGE_COMPLETED', 50, 142, NULL, '{"challengeName": "Dance Performance", "submissionType": "video"}', '2025-03-10 15:45:30'),
(49, 'MODULE_PROGRESS', 20, NULL, 246, '{"moduleName": "Performance Arts", "lessonCompleted": "Choreography Basics"}', '2025-03-20 12:30:15'),
(49, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 9}', '2025-03-22 09:45:30'),

-- User 50
(50, 'CHALLENGE_COMPLETED', 55, 143, NULL, '{"challengeName": "Community Mapping", "submissionType": "project"}', '2025-01-25 14:30:45'),
(50, 'MODULE_PROGRESS', 25, NULL, 247, '{"moduleName": "Community Development", "lessonCompleted": "Needs Assessment"}', '2025-02-10 11:15:30'),
(50, 'SKILL_PRACTICE', 20, NULL, 341, '{"skillName": "Community Analysis", "exerciseCompleted": "Resource Mapping"}', '2025-03-01 16:45:15'),
(50, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 15}', '2025-03-22 08:30:45');

-- Relationship Module Progress for all 50 users
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
(11, 102, 5, 2, 1, 280, 2, '2025-03-21 13:15:25'),
(12, 102, 3, 1, 0, 130, 1, '2025-03-17 11:30:40'),
(13, 102, 2, 0, 0, 70, 1, '2025-03-15 16:45:15'),
(14, 102, 7, 4, 3, 420, 3, '2025-03-22 10:20:35'),
(15, 102, 1, 0, 0, 40, 1, '2025-03-19 15:10:50'),
(16, 103, 6, 3, 2, 340, 3, '2025-03-22 14:25:30'),
(17, 103, 4, 2, 1, 220, 2, '2025-03-20 11:40:15'),
(18, 103, 2, 1, 0, 90, 1, '2025-03-21 16:15:45'),
(19, 103, 5, 3, 2, 310, 3, '2025-03-17 13:30:20'),
(20, 103, 8, 5, 4, 580, 4, '2025-03-22 10:45:35'),
(21, 104, 1, 0, 0, 30, 1, '2025-03-20 15:20:10'),
(22, 104, 4, 2, 1, 230, 2, '2025-03-18 12:35:45'),
(23, 104, 3, 1, 0, 140, 1, '2025-03-20 17:10:30'),
(24, 104, 6, 3, 2, 360, 3, '2025-03-21 14:25:15'),
(25, 104, 7, 4, 3, 480, 3, '2025-03-22 11:40:50'),
(26, 105, 2, 0, 0, 80, 1, '2025-03-22 16:15:25'),
(27, 105, 5, 2, 1, 270, 2, '2025-03-20 13:30:40'),
(28, 105, 1, 0, 0, 50, 1, '2025-03-19 10:45:15'),
(29, 105, 3, 1, 0, 150, 1, '2025-03-22 15:20:30'),
(30, 105, 6, 3, 2, 380, 3, '2025-03-21 12:35:45'),
(31, 106, 4, 2, 1, 240, 2, '2025-03-22 17:10:20'),
(32, 106, 2, 1, 0, 100, 1, '2025-03-22 14:25:35'),
(33, 106, 7, 4, 3, 460, 3, '2025-03-22 11:40:50'),
(34, 106, 1, 0, 0, 60, 1, '2025-03-22 16:15:25'),
(35, 106, 3, 1, 0, 160, 1, '2025-03-22 13:30:40'),
(36, 107, 8, 5, 4, 620, 4, '2025-03-22 10:45:15'),
(37, 107, 2, 0, 0, 90, 1, '2025-03-22 15:20:30'),
(38, 107, 6, 3, 2, 370, 3, '2025-03-22 12:35:45'),
(39, 107, 3, 1, 0, 170, 1, '2025-03-22 17:10:20'),
(40, 107, 1, 0, 0, 70, 1, '2025-03-22 14:25:35'),
(41, 108, 7, 4, 3, 490, 3, '2025-03-22 11:40:50'),
(42, 108, 4, 2, 1, 250, 2, '2025-03-22 16:15:25'),
(43, 108, 2, 0, 0, 110, 1, '2025-03-22 13:30:40'),
(44, 108, 5, 3, 2, 330, 3, '2025-03-22 10:45:15'),
(45, 108, 1, 0, 0, 80, 1, '2025-03-22 15:20:30'),
(46, 109, 6, 3, 2, 400, 3, '2025-03-22 12:35:45'),
(47, 109, 8, 5, 4, 640, 4, '2025-03-22 17:10:20'),
(48, 109, 3, 1, 0, 180, 1, '2025-03-22 14:25:35'),
(49, 109, 2, 0, 0, 120, 1, '2025-03-22 11:40:50'),
(50, 109, 5, 2, 1, 290, 2, '2025-03-22 16:15:25');
