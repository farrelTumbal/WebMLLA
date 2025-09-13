// Mock data for MLLA Research Visualization
export const researchData = {
  // Basic research info
  title: "Exploring User Experience of Mobile Language Learning Applications (MLLAs): A Mixed-Methods Study toward GIS-MLLA Framework",
  totalRespondents: 269,
  users: 198,
  nonUsers: 68,
  interviewParticipants: 15,

  // UX Dimension Mean Scores
  uxDimensions: {
    all: {
      engagement: 3.2,
      usability: 2.8,
      retention: 2.9,
      acceptance: 3.1
    },
    users: {
      engagement: 2.8,
      usability: 2.8,
      retention: 2.9,
      acceptance: 2.9
    },
    nonUsers: {
      engagement: 4.18,
      usability: 3.5,
      retention: 2.1,
      acceptance: 3.8
    }
  },

  // Reliability Coefficients (Cronbach's α)
  reliability: {
    engagement: 0.875,
    usability: 0.851,
    retention: 0.742,
    acceptance: 0.923
  },

  // Spearman Correlation Matrix
  correlations: [
    [1.00, 0.621, 0.543, 0.678],  // Engagement
    [0.621, 1.00, 0.729, 0.755],  // Usability  
    [0.543, 0.729, 1.00, 0.632],  // Retention
    [0.678, 0.755, 0.632, 1.00]   // Acceptance
  ],

  // SEM Path Coefficients
  semPaths: [
    { from: 'Engagement', to: 'Usability', coefficient: 0.319 },
    { from: 'Retention', to: 'Usability', coefficient: 0.379 },
    { from: 'Usability', to: 'Acceptance', coefficient: 0.755 }
  ],

  // Cluster Data for Scatter Plot
  clusterData: [
    // Passive users
    { engagement: 2.1, retention: 1.8, cluster: 'passive', color: '#94a3b8' },
    { engagement: 2.3, retention: 2.0, cluster: 'passive', color: '#94a3b8' },
    { engagement: 1.9, retention: 1.6, cluster: 'passive', color: '#94a3b8' },
    { engagement: 2.0, retention: 1.9, cluster: 'passive', color: '#94a3b8' },
    
    // Moderate users  
    { engagement: 2.8, retention: 2.7, cluster: 'moderate', color: '#60a5fa' },
    { engagement: 3.0, retention: 2.9, cluster: 'moderate', color: '#60a5fa' },
    { engagement: 2.9, retention: 2.8, cluster: 'moderate', color: '#60a5fa' },
    { engagement: 2.7, retention: 2.6, cluster: 'moderate', color: '#60a5fa' },
    
    // Active users
    { engagement: 4.2, retention: 2.0, cluster: 'active', color: '#f97316' },
    { engagement: 4.0, retention: 2.2, cluster: 'active', color: '#f97316' },
    { engagement: 4.3, retention: 1.9, cluster: 'active', color: '#f97316' },
    { engagement: 4.1, retention: 2.1, cluster: 'active', color: '#f97316' }
  ],

  // Qualitative Interview Themes
  qualitativeThemes: [
    {
      theme: "Repetitive Content",
      frequency: 87,
      quotes: [
        "The content becomes very repetitive after a few weeks of use",
        "Same exercises over and over again, it gets boring quickly"
      ]
    },
    {
      theme: "No Real Retention", 
      frequency: 93,
      quotes: [
        "I don't feel like I'm actually learning anything that sticks",
        "After finishing lessons, I can't apply what I learned in real conversations"
      ]
    },
    {
      theme: "Limited Speaking Evaluation",
      frequency: 73,
      quotes: [
        "The speaking feature doesn't give good feedback on pronunciation",
        "It's hard to improve speaking skills with the current system"
      ]
    },
    {
      theme: "Superficial Gamification",
      frequency: 67,
      quotes: [
        "The game elements are fun at first but don't add real value to learning",
        "Streaks and points don't motivate me to actually learn better"
      ]
    },
    {
      theme: "Premium Walls Disruptive",
      frequency: 58,
      quotes: [
        "Too many features locked behind payment",
        "Ads interrupt the learning flow constantly"
      ]
    },
    {
      theme: "Learning Feels Isolated",
      frequency: 45,
      quotes: [
        "I wish there was more interaction with other learners",
        "Learning alone gets demotivating over time"
      ]
    }
  ],

  // App Usage Distribution
  appUsage: [
    { app: 'Duolingo', users: 89, percentage: 45 },
    { app: 'ELSA Speak', users: 43, percentage: 22 },
    { app: 'Babbel', users: 27, percentage: 14 },
    { app: 'Others', users: 39, percentage: 19 }
  ]
};

export default researchData;