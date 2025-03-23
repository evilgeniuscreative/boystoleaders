// content/modules/relationships/conversation-simulator.js
const conversationScenarios = [
    {
      id: "convo-sim-1",
      title: "Starting a Conversation",
      description: "Practice initiating a conversation with someone new in a school setting.",
      difficulty: "beginner",
      context: "You've noticed someone in your class who seems to share your interest in basketball. You'd like to get to know them better.",
      characters: [
        {
          id: "student",
          name: "Jordan",
          description: "A student your age who you've seen wearing basketball team merchandise.",
          image: "/images/scenarios/student-jordan.png"
        }
      ],
      startingPoint: "You see Jordan at lunch sitting alone. This seems like a good opportunity to introduce yourself.",
      objectives: [
        "Introduce yourself in a friendly way",
        "Find common ground through your shared interest",
        "Be respectful of boundaries if they seem busy",
        "Ask open-ended questions that go beyond yes/no answers"
      ],
      interactions: [
        {
          id: "intro",
          type: "player-choice",
          prompt: "How do you approach Jordan?",
          options: [
            {
              id: "direct-approach",
              text: "Hey, I'm [Your Name]. I noticed your Chicago Bulls hoodie. Are you into basketball?",
              feedback: {
                positive: "Good job introducing yourself and mentioning the specific thing you noticed. This shows you're observant and gives a natural conversation starter.",
                score: 8
              },
              nextInteraction: "response-positive"
            },
            {
              id: "casual-approach",
              text: "That Bulls hoodie is cool. Did you see the game last night?",
              feedback: {
                mixed: "Starting with a compliment is good, but you didn't introduce yourself, which makes the interaction feel less personal. Assuming they watched a specific game might also not connect if they didn't see it.",
                score: 5
              },
              nextInteraction: "response-neutral"
            },
            {
              id: "passive-approach",
              text: "Sit nearby and wait for them to notice you.",
              feedback: {
                constructive: "While it's okay to be shy, this approach puts the responsibility on the other person to start the conversation, which might not happen. Taking a small social risk usually leads to better results.",
                score: 2
              },
              nextInteraction: "no-interaction"
            }
          ]
        },
        // More interaction nodes would follow with branching paths
      ],
      feedbackMetrics: [
        "Respect for personal space",
        "Conversation initiation skills",
        "Active listening",
        "Genuine interest shown",
        "Natural conversation flow"
      ],
      completionCriteria: {
        minimumScore: 60,
        requiredObjectives: 2
      },
      rewards: {
        points: 50,
        badge: "Conversation Starter",
        unlocks: ["convo-sim-2"]
      }
    },
    // Additional scenarios would be defined here
  ];
  
  module.exports = { conversationScenarios };