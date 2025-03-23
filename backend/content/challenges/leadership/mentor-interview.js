// content/challenges/leadership/mentor-interview.js
const mentorInterviewChallenge = {
    id: "challenge-mentor-interview",
    title: "Leadership Perspectives",
    category: "Leadership",
    type: "weekly",
    difficulty: "intermediate",
    
    description: "Interview an adult mentor in your life about their leadership experiences and create a summary of what you learned.",
    
    objectives: [
      "Practice professional communication by arranging an interview",
      "Develop thoughtful questions about leadership",
      "Practice active listening during the interview",
      "Synthesize what you learned into key takeaways"
    ],
    
    instructions: `
      ## Leadership Perspectives Challenge
      
      ### Step 1: Preparation
      - Identify an adult in your life who has leadership experience (coach, teacher, family member, etc.)
      - Create 5-7 thoughtful questions about their leadership journey and philosophy
      - Schedule a 15-30 minute conversation (in person, phone, or video chat)
      
      ### Step 2: The Interview
      - Begin by explaining the purpose of your interview
      - Ask your prepared questions
      - Practice active listening - follow up on interesting points
      - Take notes on key insights
      
      ### Step 3: Reflection
      - Create a summary (300-500 words) of what you learned
      - Include at least 3 specific insights that surprised or inspired you
      - Explain how you might apply these lessons to your own leadership opportunities
      
      ### Step 4: Submission
      - Submit your interview questions and summary
      - Include the name and role of your interviewee (with their permission)
    `,
    
    submissionType: "text",
    
    rubric: {
      "Interview Quality": {
        "Excellent": "Questions show depth and thoughtfulness. Follow-up questions demonstrate active listening.",
        "Good": "Questions are relevant and go beyond basics. Some evidence of follow-up.",
        "Needs Improvement": "Questions are basic or could be answered with simple yes/no responses."
      },
      "Reflection Depth": {
        "Excellent": "Reflection shows genuine insight and personal connection to the lessons learned.",
        "Good": "Reflection identifies meaningful takeaways with some personal connection.",
        "Needs Improvement": "Reflection is surface-level or primarily summarizes without personal insight."
      },
      "Application": {
        "Excellent": "Clear, specific examples of how learnings will be applied to personal leadership.",
        "Good": "Some specific applications mentioned with reasonable connection to personal growth.",
        "Needs Improvement": "Applications are vague or disconnected from the interview insights."
      }
    },
    
    pointsAwarded: 150,
    estimatedTime: "2 hours",
    
    resources: [
      {
        title: "Effective Interview Techniques",
        type: "article",
        link: "/resources/interview-techniques"
      },
      {
        title: "Sample Leadership Questions",
        type: "pdf",
        link: "/resources/leadership-questions.pdf"
      }
    ],
    
    validationMethod: "mentor-review",
    
    successMessage: "Congratulations on completing your leadership interview! Seeking wisdom from experienced leaders is a key part of developing your own leadership style. The insights you've gained provide valuable perspective on your own leadership journey."
  };
  
  module.exports = { mentorInterviewChallenge };