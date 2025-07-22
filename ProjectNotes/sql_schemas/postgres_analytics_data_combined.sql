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

-- Activity tracking for users 1-10
INSERT INTO activities (user_id, activity_type, points_earned, challenge_id, content_id, details, created_at) VALUES
-- User 1
(1, 'CHALLENGE_COMPLETED', 50, 101, NULL, '{"challengeName": "Leadership Interview", "submissionType": "text"}', '2025-01-10 14:32:45'),
(1, 'CHALLENGE_COMPLETED', 75, 102, NULL, '{"challengeName": "Community Project", "submissionType": "pdf"}', '2025-02-05 16:15:22'),
(1, 'MODULE_PROGRESS', 25, NULL, 201, '{"moduleName": "Building Connections", "lessonCompleted": "Communication Basics"}', '2025-02-10 19:45:11'),
(1, 'SKILL_PRACTICE', 15, NULL, 301, '{"skillName": "Public Speaking", "exerciseCompleted": "Introduction Speech"}', '2025-02-15 13:20:05'),
(1, 'CHALLENGE_COMPLETED', 60, 103, NULL, '{"challengeName": "Conversation Simulator", "submissionType": "text"}', '2025-03-15 15:10:33'),
(1, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 23}', '2025-03-22 08:45:12'),

-- User 2
(2, 'CHALLENGE_COMPLETED', 50, 101, NULL, '{"challengeName": "Leadership Interview", "submissionType": "text"}', '2024-12-10 10:22:15'),
(2, 'CHALLENGE_COMPLETED', 100, 104, NULL, '{"challengeName": "Mentorship Project", "submissionType": "video"}', '2025-01-15 11:30:45'),
(2, 'MODULE_PROGRESS', 30, NULL, 202, '{"moduleName": "Creative Leadership", "lessonCompleted": "Design Thinking"}', '2025-01-20 14:15:30'),
(2, 'SKILL_PRACTICE', 20, NULL, 302, '{"skillName": "Creative Thinking", "exerciseCompleted": "Ideation Workshop"}', '2025-02-05 09:45:20'),
(2, 'CHALLENGE_COMPLETED', 80, 105, NULL, '{"challengeName": "Business Pitch", "submissionType": "presentation"}', '2025-03-01 16:20:10'),
(2, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 18}', '2025-03-20 10:15:30'),

-- User 3
(3, 'CHALLENGE_COMPLETED', 45, 106, NULL, '{"challengeName": "Personal Goals", "submissionType": "text"}', '2025-01-05 13:45:20'),
(3, 'MODULE_PROGRESS', 20, NULL, 201, '{"moduleName": "Building Connections", "lessonCompleted": "Active Listening"}', '2025-01-15 15:30:10'),
(3, 'SKILL_PRACTICE', 15, NULL, 301, '{"skillName": "Public Speaking", "exerciseCompleted": "Group Presentation"}', '2025-02-10 11:20:45'),
(3, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 12}', '2025-03-15 09:10:25'),

-- User 4
(4, 'CHALLENGE_COMPLETED', 55, 101, NULL, '{"challengeName": "Leadership Interview", "submissionType": "audio"}', '2024-12-15 14:25:30'),
(4, 'MODULE_PROGRESS', 25, NULL, 203, '{"moduleName": "Problem Solving", "lessonCompleted": "Critical Thinking"}', '2025-01-10 16:45:15'),
(4, 'CHALLENGE_COMPLETED', 70, 107, NULL, '{"challengeName": "Community Analysis", "submissionType": "document"}', '2025-02-05 10:30:45'),
(4, 'SKILL_PRACTICE', 20, NULL, 303, '{"skillName": "Problem Solving", "exerciseCompleted": "Case Study Analysis"}', '2025-02-20 13:15:30'),
(4, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 15}', '2025-03-10 08:45:20'),

-- User 5
(5, 'CHALLENGE_COMPLETED', 60, 108, NULL, '{"challengeName": "Peer Mentoring", "submissionType": "text"}', '2025-01-20 11:30:45'),
(5, 'MODULE_PROGRESS', 30, NULL, 204, '{"moduleName": "Emotional Intelligence", "lessonCompleted": "Self-Awareness"}', '2025-02-05 14:15:20'),
(5, 'SKILL_PRACTICE', 25, NULL, 304, '{"skillName": "Empathy", "exerciseCompleted": "Perspective Taking"}', '2025-02-25 09:45:30'),
(5, 'CHALLENGE_COMPLETED', 75, 109, NULL, '{"challengeName": "Conflict Resolution", "submissionType": "video"}', '2025-03-10 15:20:10'),
(5, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 20}', '2025-03-18 10:30:15'),

-- User 6
(6, 'MODULE_PROGRESS', 15, NULL, 201, '{"moduleName": "Building Connections", "lessonCompleted": "Introduction to Communication"}', '2025-01-15 13:45:30'),
(6, 'SKILL_PRACTICE', 10, NULL, 305, '{"skillName": "Time Management", "exerciseCompleted": "Priority Setting"}', '2025-02-01 10:20:45'),
(6, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 8}', '2025-03-05 09:15:20'),

-- User 7
(7, 'CHALLENGE_COMPLETED', 50, 110, NULL, '{"challengeName": "Goal Setting", "submissionType": "text"}', '2025-01-25 14:30:15'),
(7, 'MODULE_PROGRESS', 20, NULL, 205, '{"moduleName": "Personal Development", "lessonCompleted": "Growth Mindset"}', '2025-02-10 11:45:30'),
(7, 'SKILL_PRACTICE', 15, NULL, 306, '{"skillName": "Goal Setting", "exerciseCompleted": "SMART Goals"}', '2025-02-25 15:20:10'),
(7, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 14}', '2025-03-16 08:45:25'),

-- User 8
(8, 'CHALLENGE_COMPLETED', 65, 111, NULL, '{"challengeName": "Innovation Project", "submissionType": "presentation"}', '2025-01-05 16:30:45'),
(8, 'MODULE_PROGRESS', 35, NULL, 206, '{"moduleName": "Innovation and Leadership", "lessonCompleted": "Creative Problem Solving"}', '2025-01-20 13:15:30'),
(8, 'SKILL_PRACTICE', 25, NULL, 307, '{"skillName": "Innovation", "exerciseCompleted": "Design Challenge"}', '2025-02-15 10:45:20'),
(8, 'CHALLENGE_COMPLETED', 85, 112, NULL, '{"challengeName": "Tech Solution", "submissionType": "project"}', '2025-03-05 14:30:15'),
(8, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 25}', '2025-03-21 09:10:30'),

-- User 9
(9, 'MODULE_PROGRESS', 15, NULL, 201, '{"moduleName": "Building Connections", "lessonCompleted": "Nonverbal Communication"}', '2025-01-10 11:45:20'),
(9, 'SKILL_PRACTICE', 10, NULL, 308, '{"skillName": "Active Listening", "exerciseCompleted": "Reflection Exercise"}', '2025-02-05 15:30:45'),
(9, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 10}', '2025-03-10 08:20:15'),

-- User 10
(10, 'CHALLENGE_COMPLETED', 55, 113, NULL, '{"challengeName": "Community Service", "submissionType": "report"}', '2025-01-15 14:20:30'),
(10, 'MODULE_PROGRESS', 25, NULL, 207, '{"moduleName": "Community Leadership", "lessonCompleted": "Service Learning"}', '2025-02-01 11:45:15'),
(10, 'SKILL_PRACTICE', 20, NULL, 309, '{"skillName": "Project Management", "exerciseCompleted": "Event Planning"}', '2025-02-20 16:30:45'),
(10, 'CHALLENGE_COMPLETED', 70, 114, NULL, '{"challengeName": "Volunteer Coordination", "submissionType": "document"}', '2025-03-10 13:15:30'),
(10, 'DAILY_LOGIN', 5, NULL, NULL, '{"streakDays": 19}', '2025-03-19 09:45:20');

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

-- Skill Progress for all 50 users
INSERT INTO skill_progress (user_id, skill_id, current_level, points_earned, completed_activities, last_activity_at) VALUES
-- User 1
(1, 201, 3, 320, 8, '2025-02-10 15:20:30'),
(1, 202, 4, 580, 12, '2025-03-15 14:10:25'),
-- User 2
(2, 203, 5, 780, 15, '2025-03-10 16:45:10'),
-- User 3
(3, 201, 2, 160, 5, '2025-03-05 13:30:45'),
(3, 204, 1, 85, 2, '2025-03-12 17:20:15'),
-- User 4
(4, 202, 3, 340, 9, '2025-03-08 15:40:30'),
(4, 205, 4, 520, 11, '2025-03-15 12:10:55'),
-- User 5
(5, 203, 2, 190, 6, '2025-03-10 14:25:40'),
(5, 201, 3, 310, 8, '2025-03-17 16:30:20'),
-- User 6
(6, 206, 1, 95, 3, '2025-03-05 11:45:15'),
-- User 7
(7, 207, 2, 180, 5, '2025-03-16 13:20:40'),
(7, 208, 1, 110, 3, '2025-03-10 15:45:25'),
-- User 8
(8, 209, 4, 610, 14, '2025-03-21 10:30:15'),
(8, 210, 3, 350, 9, '2025-03-15 12:45:50'),
-- User 9
(9, 201, 1, 90, 2, '2025-03-10 16:15:35'),
-- User 10
(10, 211, 3, 330, 8, '2025-03-19 14:10:25'),
(10, 212, 2, 220, 6, '2025-03-12 11:35:40'),
-- User 11
(11, 213, 2, 210, 5, '2025-03-21 13:25:15'),
-- User 12
(12, 214, 1, 120, 3, '2025-03-17 15:40:30'),
-- User 13
(13, 215, 1, 80, 2, '2025-03-15 10:15:45'),
-- User 14
(14, 216, 3, 360, 9, '2025-03-22 12:30:20'),
(14, 217, 2, 230, 6, '2025-03-18 14:45:35'),
-- User 15
(15, 218, 1, 70, 2, '2025-03-19 11:10:50'),
-- User 16
(16, 219, 3, 350, 8, '2025-03-22 15:25:15'),
(16, 220, 2, 240, 6, '2025-03-16 13:40:30'),
-- User 17
(17, 221, 2, 200, 5, '2025-03-20 10:15:45'),
-- User 18
(18, 222, 1, 100, 3, '2025-03-21 12:30:20'),
-- User 19
(19, 223, 3, 320, 8, '2025-03-17 14:45:35'),
(19, 224, 2, 210, 5, '2025-03-12 11:10:50'),
-- User 20
(20, 225, 4, 590, 13, '2025-03-22 15:25:15'),
(20, 226, 3, 370, 9, '2025-03-18 13:40:30'),
-- User 21
(21, 227, 1, 60, 2, '2025-03-20 10:15:45'),
-- User 22
(22, 228, 2, 190, 5, '2025-03-18 12:30:20'),
(22, 229, 1, 110, 3, '2025-03-14 14:45:35'),
-- User 23
(23, 230, 1, 130, 3, '2025-03-20 11:10:50'),
-- User 24
(24, 231, 3, 340, 8, '2025-03-21 15:25:15'),
(24, 232, 2, 220, 6, '2025-03-16 13:40:30'),
-- User 25
(25, 233, 3, 380, 9, '2025-03-22 10:15:45'),
(25, 234, 4, 540, 12, '2025-03-18 12:30:20'),
-- User 26
(26, 235, 1, 90, 2, '2025-03-22 14:45:35'),
-- User 27
(27, 236, 2, 230, 6, '2025-03-20 11:10:50'),
(27, 237, 1, 120, 3, '2025-03-15 15:25:15'),
-- User 28
(28, 238, 1, 70, 2, '2025-03-19 13:40:30'),
-- User 29
(29, 239, 1, 140, 3, '2025-03-22 10:15:45'),
-- User 30
(30, 240, 3, 360, 9, '2025-03-21 12:30:20'),
(30, 241, 2, 250, 6, '2025-03-16 14:45:35'),
-- User 31
(31, 242, 2, 180, 5, '2025-03-22 11:10:50'),
-- User 32
(32, 243, 1, 110, 3, '2025-03-22 15:25:15'),
-- User 33
(33, 244, 3, 330, 8, '2025-03-22 13:40:30'),
(33, 245, 2, 240, 6, '2025-03-18 10:15:45'),
-- User 34
(34, 246, 1, 80, 2, '2025-03-22 12:30:20'),
-- User 35
(35, 247, 1, 150, 4, '2025-03-22 14:45:35'),
-- User 36
(36, 248, 4, 620, 14, '2025-03-22 11:10:50'),
(36, 249, 3, 390, 10, '2025-03-19 15:25:15'),
-- User 37
(37, 250, 1, 100, 3, '2025-03-22 13:40:30'),
-- User 38
(38, 251, 3, 350, 9, '2025-03-22 10:15:45'),
(38, 252, 2, 260, 7, '2025-03-20 12:30:20'),
-- User 39
(39, 253, 1, 160, 4, '2025-03-22 14:45:35'),
-- User 40
(40, 254, 1, 90, 2, '2025-03-22 11:10:50'),
-- User 41
(41, 255, 3, 370, 9, '2025-03-22 15:25:15'),
(41, 256, 4, 550, 12, '2025-03-20 13:40:30'),
-- User 42
(42, 257, 2, 170, 5, '2025-03-22 10:15:45'),
-- User 43
(43, 258, 1, 120, 3, '2025-03-22 12:30:20'),
-- User 44
(44, 259, 3, 310, 8, '2025-03-22 14:45:35'),
(44, 260, 2, 220, 6, '2025-03-18 11:10:50'),
-- User 45
(45, 261, 1, 70, 2, '2025-03-22 15:25:15'),
-- User 46
(46, 262, 3, 400, 10, '2025-03-22 13:40:30'),
(46, 263, 2, 270, 7, '2025-03-20 10:15:45'),
-- User 47
(47, 264, 3, 380, 9, '2025-03-22 12:30:20'),
(47, 265, 2, 250, 6, '2025-03-19 14:45:35'),
-- User 48
(48, 266, 2, 190, 5, '2025-03-22 11:10:50'),
-- User 49
(49, 267, 1, 130, 3, '2025-03-22 15:25:15'),
-- User 50
(50, 268, 2, 280, 7, '2025-03-22 13:40:30'),
(50, 269, 1, 140, 4, '2025-03-20 10:15:45');

-- User Achievements
INSERT INTO user_achievements (user_id, achievement_id, earned_at) VALUES
(1, 301, '2025-02-20 15:30:45'),
(1, 302, '2025-03-10 13:45:20'),
(2, 303, '2025-01-25 14:20:30'),
(2, 304, '2025-02-15 16:10:15'),
(2, 305, '2025-03-05 11:30:45'),
(3, 301, '2025-03-01 13:20:45'),
(4, 306, '2025-02-10 15:45:30'),
(4, 307, '2025-03-05 12:15:20'),
(5, 308, '2025-02-20 14:30:15'),
(5, 309, '2025-03-15 11:45:30'),
(6, 310, '2025-03-01 16:20:45'),
(7, 311, '2025-03-10 13:30:15'),
(8, 312, '2025-02-15 15:45:30'),
(8, 313, '2025-03-01 12:20:15'),
(8, 314, '2025-03-20 14:10:45'),
(9, 301, '2025-03-05 16:30:20'),
(10, 315, '2025-02-25 13:45:30'),
(10, 316, '2025-03-15 15:20:15'),
(11, 317, '2025-03-15 14:30:45'),
(12, 318, '2025-03-10 16:15:30'),
(13, 319, '2025-03-10 13:45:20'),
(14, 320, '2025-03-01 15:30:45'),
(14, 321, '2025-03-20 12:15:30'),
(15, 322, '2025-03-15 14:45:20'),
(16, 323, '2025-02-20 16:30:45'),
(16, 324, '2025-03-15 13:20:15'),
(17, 325, '2025-03-15 15:10:45'),
(18, 326, '2025-03-20 14:30:20'),
(19, 327, '2025-03-10 16:45:30'),
(19, 328, '2025-03-15 13:15:45'),
(20, 329, '2025-02-25 15:30:20'),
(20, 330, '2025-03-10 12:45:15'),
(20, 331, '2025-03-20 14:20:30'),
(21, 332, '2025-03-15 16:10:45'),
(22, 333, '2025-03-10 13:30:20'),
(22, 334, '2025-03-18 15:45:30'),
(23, 335, '2025-03-15 14:20:15'),
(24, 336, '2025-03-10 16:30:45'),
(24, 337, '2025-03-20 13:15:20'),
(25, 338, '2025-03-01 15:45:30'),
(25, 339, '2025-03-15 12:30:15'),
(25, 340, '2025-03-22 14:10:45'),
(26, 341, '2025-03-20 16:30:20'),
(27, 342, '2025-03-15 13:45:30'),
(27, 343, '2025-03-20 15:20:15'),
(28, 344, '2025-03-15 14:30:45'),
(29, 345, '2025-03-20 16:15:30'),
(30, 346, '2025-03-10 13:45:20'),
(30, 347, '2025-03-20 15:30:45'),
(31, 348, '2025-03-20 12:15:30'),
(32, 349, '2025-03-22 14:45:20'),
(33, 350, '2025-03-15 16:30:45'),
(33, 351, '2025-03-20 13:20:15'),
(34, 352, '2025-03-20 15:10:45'),
(35, 353, '2025-03-20 14:30:20'),
(36, 354, '2025-03-15 16:45:30'),
(36, 355, '2025-03-20 13:15:45'),
(36, 356, '2025-03-22 15:30:20'),
(37, 357, '2025-03-20 12:45:15'),
(38, 358, '2025-03-15 14:20:30'),
(38, 359, '2025-03-22 16:10:45'),
(39, 360, '2025-03-20 13:30:20'),
(40, 361, '2025-03-20 15:45:30'),
(41, 362, '2025-03-10 14:20:15'),
(41, 363, '2025-03-20 16:30:45'),
(41, 364, '2025-03-22 13:15:20'),
(42, 365, '2025-03-20 15:45:30'),
(43, 366, '2025-03-22 12:30:15'),
(44, 367, '2025-03-15 14:10:45'),
(44, 368, '2025-03-22 16:30:20'),
(45, 369, '2025-03-20 13:45:30'),
(46, 370, '2025-03-20 15:20:15'),
(46, 371, '2025-03-22 14:30:45'),
(47, 372, '2025-03-15 16:15:30'),
(47, 373, '2025-03-22 13:45:20'),
(48, 374, '2025-03-20 15:30:45'),
(49, 375, '2025-03-22 12:15:30'),
(50, 376, '2025-03-20 14:45:20'),
(50, 377, '2025-03-22 16:30:45');

-- Create a combined SQL file with all the data
-- This is a comment for reference only, not part of the SQL execution
