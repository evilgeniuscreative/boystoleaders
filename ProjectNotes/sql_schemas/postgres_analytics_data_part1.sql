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
