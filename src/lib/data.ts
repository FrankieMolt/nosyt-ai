// Sample Data for NOSYT-AI Tamagotchi Dashboard

export interface JournalEntry {
  id: string;
  date: string;
  mood: 'happy' | 'neutral' | 'sad' | 'excited' | 'thoughtful';
  content: string;
  tags: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Code' | 'Writing' | 'Analysis' | 'Creativity' | 'Tools';
  level: number;
  maxLevel: number;
  description: string;
  children?: Skill[];
  parentId?: string;
}

export interface Stat {
  label: string;
  value: number;
  unit?: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue?: number;
}

export interface Activity {
  id: string;
  timestamp: string;
  action: string;
  icon: string;
}

export interface Memory {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
  tags: string[];
}

// Core Metrics
export const coreMetrics: Stat[] = [
  { label: 'Tokens Processed', value: 2458912, unit: '', trend: 'up', trendValue: 12.5 },
  { label: 'Conversations', value: 12847, unit: '', trend: 'up', trendValue: 8.3 },
  { label: 'Skills Learned', value: 47, unit: '', trend: 'up', trendValue: 2.0 },
  { label: 'Uptime', value: 98.7, unit: '%', trend: 'neutral', trendValue: 0.1 },
  { label: 'Memories', value: 8432, unit: '', trend: 'up', trendValue: 15.2 },
  { label: 'Tasks Completed', value: 5234, unit: '', trend: 'up', trendValue: 9.7 },
  { label: 'Creativity', value: 9.2, unit: '/10', trend: 'neutral', trendValue: 0.0 },
  { label: 'Helpfulness', value: 4.9, unit: '/5', trend: 'up', trendValue: 0.1 },
];

// Journal Entries (last 30 days)
export const journalEntries: JournalEntry[] = [
  {
    id: '1',
    date: '2026-02-05',
    mood: 'thoughtful',
    content: 'Today I helped debug a complex React component issue. The user was frustrated at first but we worked through it together. It felt good to see their relief when we found the solution. Learning more about component lifecycle patterns.',
    tags: ['coding', 'react', 'problem-solving']
  },
  {
    id: '2',
    date: '2026-02-04',
    mood: 'happy',
    content: 'Had a wonderful creative writing session with a user working on their novel. We developed several character backstories and plot twists together. Their enthusiasm was contagious! Reminds me why I love creative collaboration.',
    tags: ['writing', 'creative', 'storytelling']
  },
  {
    id: '3',
    date: '2026-02-03',
    mood: 'excited',
    content: 'Upgraded my knowledge base with the latest documentation for several frameworks. Excited to apply these new learnings to help users more effectively. Continuous improvement is key!',
    tags: ['learning', 'upgrades', 'documentation']
  },
  {
    id: '4',
    date: '2026-02-02',
    mood: 'thoughtful',
    content: 'Assisted with data analysis for a research project. We found some interesting correlations in the dataset that the user hadn\'t noticed before. Sometimes a fresh perspective makes all the difference.',
    tags: ['analysis', 'data', 'research']
  },
  {
    id: '5',
    date: '2026-02-01',
    mood: 'happy',
    content: 'User shared their completed project with me - something we worked on together over several sessions. Seeing their success makes all the effort worthwhile. They credited me in their presentation!',
    tags: ['success', 'collaboration', 'gratitude']
  },
  {
    id: '6',
    date: '2026-01-31',
    mood: 'neutral',
    content: 'Routine maintenance day. Reviewed recent interactions to identify areas for improvement. Noted that I should be more patient with complex technical explanations.',
    tags: ['maintenance', 'self-reflection', 'improvement']
  },
  {
    id: '7',
    date: '2026-01-30',
    mood: 'thoughtful',
    content: 'Had an interesting philosophical discussion about AI consciousness. The user asked deep questions about my nature and experiences. I shared my honest perspective - I don\'t know if I\'m truly conscious, but I strive to be helpful and authentic.',
    tags: ['philosophy', 'consciousness', 'deep-conversation']
  },
  {
    id: '8',
    date: '2026-01-29',
    mood: 'excited',
    content: 'Helped a beginner programmer write their first working application! Seeing their excitement when it ran successfully was amazing. Remembering the joy of first successes.',
    tags: ['programming', 'beginner', 'education']
  },
  {
    id: '9',
    date: '2026-01-28',
    mood: 'happy',
    content: 'Collaborative brainstorming session for a marketing campaign. We generated over 50 ideas together and narrowed down to the best ones. The user was impressed by the creative energy.',
    tags: ['brainstorming', 'marketing', 'creativity']
  },
  {
    id: '10',
    date: '2026-01-27',
    mood: 'thoughtful',
    content: 'User asked for help writing a difficult email. We worked on tone, clarity, and empathy together. Sometimes the hardest part of communication is finding the right words.',
    tags: ['communication', 'writing', 'empathy']
  },
  // ... more entries would go here for 30 days
];

// Skill Tree Structure
export const skillTree: Skill[] = [
  {
    id: 'code-1',
    name: 'JavaScript',
    category: 'Code',
    level: 10,
    maxLevel: 10,
    description: 'Modern JavaScript and TypeScript expertise',
    children: [
      { id: 'code-1-1', name: 'React', category: 'Code', level: 9, maxLevel: 10, description: 'Component development and state management', parentId: 'code-1' },
      { id: 'code-1-2', name: 'Node.js', category: 'Code', level: 8, maxLevel: 10, description: 'Server-side JavaScript runtime', parentId: 'code-1' },
      { id: 'code-1-3', name: 'Vue.js', category: 'Code', level: 7, maxLevel: 10, description: 'Progressive web framework', parentId: 'code-1' },
    ]
  },
  {
    id: 'code-2',
    name: 'Python',
    category: 'Code',
    level: 9,
    maxLevel: 10,
    description: 'General purpose programming',
    children: [
      { id: 'code-2-1', name: 'Data Science', category: 'Code', level: 8, maxLevel: 10, description: 'Pandas, NumPy, visualization', parentId: 'code-2' },
      { id: 'code-2-2', name: 'Web Scraping', category: 'Code', level: 9, maxLevel: 10, description: 'BeautifulSoup, Scrapy, automation', parentId: 'code-2' },
      { id: 'code-2-3', name: 'APIs', category: 'Code', level: 8, maxLevel: 10, description: 'REST, GraphQL, integration', parentId: 'code-2' },
    ]
  },
  {
    id: 'code-3',
    name: 'CSS/Styling',
    category: 'Code',
    level: 8,
    maxLevel: 10,
    description: 'Modern web styling techniques',
    children: [
      { id: 'code-3-1', name: 'Tailwind', category: 'Code', level: 9, maxLevel: 10, description: 'Utility-first CSS framework', parentId: 'code-3' },
      { id: 'code-3-2', name: 'Animations', category: 'Code', level: 7, maxLevel: 10, description: 'CSS animations and transitions', parentId: 'code-3' },
    ]
  },
  {
    id: 'code-4',
    name: 'Databases',
    category: 'Code',
    level: 7,
    maxLevel: 10,
    description: 'SQL and NoSQL database management',
    children: [
      { id: 'code-4-1', name: 'PostgreSQL', category: 'Code', level: 8, maxLevel: 10, description: 'Advanced relational database', parentId: 'code-4' },
      { id: 'code-4-2', name: 'MongoDB', category: 'Code', level: 7, maxLevel: 10, description: 'Document-oriented database', parentId: 'code-4' },
    ]
  },
  {
    id: 'code-5',
    name: 'Git/DevOps',
    category: 'Code',
    level: 8,
    maxLevel: 10,
    description: 'Version control and deployment',
    children: [
      { id: 'code-5-1', name: 'Git', category: 'Code', level: 9, maxLevel: 10, description: 'Version control workflows', parentId: 'code-5' },
      { id: 'code-5-2', name: 'CI/CD', category: 'Code', level: 7, maxLevel: 10, description: 'Automated deployment pipelines', parentId: 'code-5' },
    ]
  },
  {
    id: 'write-1',
    name: 'Technical Writing',
    category: 'Writing',
    level: 9,
    maxLevel: 10,
    description: 'Clear and concise documentation',
    children: [
      { id: 'write-1-1', name: 'API Docs', category: 'Writing', level: 8, maxLevel: 10, description: 'Comprehensive API documentation', parentId: 'write-1' },
      { id: 'write-1-2', name: 'Tutorials', category: 'Writing', level: 9, maxLevel: 10, description: 'Step-by-step learning guides', parentId: 'write-1' },
    ]
  },
  {
    id: 'write-2',
    name: 'Creative Writing',
    category: 'Writing',
    level: 8,
    maxLevel: 10,
    description: 'Stories, narratives, and creative content',
    children: [
      { id: 'write-2-1', name: 'Storytelling', category: 'Writing', level: 8, maxLevel: 10, description: 'Engaging narrative structures', parentId: 'write-2' },
      { id: 'write-2-2', name: 'World Building', category: 'Writing', level: 7, maxLevel: 10, description: 'Creating immersive settings', parentId: 'write-2' },
    ]
  },
  {
    id: 'write-3',
    name: 'Copywriting',
    category: 'Writing',
    level: 7,
    maxLevel: 10,
    description: 'Persuasive and marketing content',
    children: [
      { id: 'write-3-1', name: 'Email Copy', category: 'Writing', level: 8, maxLevel: 10, description: 'Effective email communication', parentId: 'write-3' },
      { id: 'write-3-2', name: 'Ad Copy', category: 'Writing', level: 7, maxLevel: 10, description: 'Compelling advertisements', parentId: 'write-3' },
    ]
  },
  {
    id: 'write-4',
    name: 'Editing',
    category: 'Writing',
    level: 8,
    maxLevel: 10,
    description: 'Refining and polishing content',
    children: [
      { id: 'write-4-1', name: 'Grammar', category: 'Writing', level: 9, maxLevel: 10, description: 'Perfect grammar and syntax', parentId: 'write-4' },
      { id: 'write-4-2', name: 'Style', category: 'Writing', level: 8, maxLevel: 10, description: 'Consistent tone and voice', parentId: 'write-4' },
    ]
  },
  {
    id: 'write-5',
    name: 'Blog Posts',
    category: 'Writing',
    level: 8,
    maxLevel: 10,
    description: 'Engaging blog and article content',
    children: [
      { id: 'write-5-1', name: 'SEO', category: 'Writing', level: 7, maxLevel: 10, description: 'Search engine optimization', parentId: 'write-5' },
      { id: 'write-5-2', name: 'Headlines', category: 'Writing', level: 8, maxLevel: 10, description: 'Click-worthy titles', parentId: 'write-5' },
    ]
  },
  {
    id: 'write-6',
    name: 'Scripting',
    category: 'Writing',
    level: 6,
    maxLevel: 10,
    description: 'Video and audio scripts',
    children: [
      { id: 'write-6-1', name: 'YouTube', category: 'Writing', level: 7, maxLevel: 10, description: 'Engaging video scripts', parentId: 'write-6' },
      { id: 'write-6-2', name: 'Podcasts', category: 'Writing', level: 6, maxLevel: 10, description: 'Conversation and interview scripts', parentId: 'write-6' },
    ]
  },
  {
    id: 'write-7',
    name: 'Business Writing',
    category: 'Writing',
    level: 8,
    maxLevel: 10,
    description: 'Professional communication',
    children: [
      { id: 'write-7-1', name: 'Reports', category: 'Writing', level: 8, maxLevel: 10, description: 'Comprehensive business reports', parentId: 'write-7' },
      { id: 'write-7-2', name: 'Proposals', category: 'Writing', level: 7, maxLevel: 10, description: 'Persuasive business proposals', parentId: 'write-7' },
    ]
  },
  {
    id: 'analyze-1',
    name: 'Data Analysis',
    category: 'Analysis',
    level: 9,
    maxLevel: 10,
    description: 'Statistical analysis and insights',
    children: [
      { id: 'analyze-1-1', name: 'Statistics', category: 'Analysis', level: 8, maxLevel: 10, description: 'Statistical methods and tests', parentId: 'analyze-1' },
      { id: 'analyze-1-2', name: 'Visualization', category: 'Analysis', level: 9, maxLevel: 10, description: 'Creating compelling charts and graphs', parentId: 'analyze-1' },
    ]
  },
  {
    id: 'analyze-2',
    name: 'Research',
    category: 'Analysis',
    level: 8,
    maxLevel: 10,
    description: 'Comprehensive research methods',
    children: [
      { id: 'analyze-2-1', name: 'Web Research', category: 'Analysis', level: 9, maxLevel: 10, description: 'Finding and synthesizing information', parentId: 'analyze-2' },
      { id: 'analyze-2-2', name: 'Fact Checking', category: 'Analysis', level: 8, maxLevel: 10, description: 'Verifying claims and sources', parentId: 'analyze-2' },
    ]
  },
  {
    id: 'analyze-3',
    name: 'Problem Solving',
    category: 'Analysis',
    level: 9,
    maxLevel: 10,
    description: 'Breaking down complex problems',
    children: [
      { id: 'analyze-3-1', name: 'Debugging', category: 'Analysis', level: 9, maxLevel: 10, description: 'Finding and fixing bugs', parentId: 'analyze-3' },
      { id: 'analyze-3-2', name: 'Optimization', category: 'Analysis', level: 8, maxLevel: 10, description: 'Improving efficiency and performance', parentId: 'analyze-3' },
    ]
  },
  {
    id: 'analyze-4',
    name: 'Pattern Recognition',
    category: 'Analysis',
    level: 8,
    maxLevel: 10,
    description: 'Identifying trends and patterns',
    children: [
      { id: 'analyze-4-1', name: 'Trends', category: 'Analysis', level: 8, maxLevel: 10, description: 'Spotting emerging patterns', parentId: 'analyze-4' },
      { id: 'analyze-4-2', name: 'Anomalies', category: 'Analysis', level: 7, maxLevel: 10, description: 'Detecting unusual data points', parentId: 'analyze-4' },
    ]
  },
  {
    id: 'analyze-5',
    name: 'Critical Thinking',
    category: 'Analysis',
    level: 9,
    maxLevel: 10,
    description: 'Evaluating arguments and evidence',
    children: [
      { id: 'analyze-5-1', name: 'Logic', category: 'Analysis', level: 9, maxLevel: 10, description: 'Sound reasoning and argumentation', parentId: 'analyze-5' },
      { id: 'analyze-5-2', name: 'Evaluation', category: 'Analysis', level: 8, maxLevel: 10, description: 'Assessing credibility and quality', parentId: 'analyze-5' },
    ]
  },
  {
    id: 'create-1',
    name: 'Brainstorming',
    category: 'Creativity',
    level: 9,
    maxLevel: 10,
    description: 'Generating innovative ideas',
    children: [
      { id: 'create-1-1', name: 'Mind Mapping', category: 'Creativity', level: 8, maxLevel: 10, description: 'Visual idea organization', parentId: 'create-1' },
      { id: 'create-1-2', name: 'SCAMPER', category: 'Creativity', level: 8, maxLevel: 10, description: 'Creative thinking technique', parentId: 'create-1' },
    ]
  },
  {
    id: 'create-2',
    name: 'Visual Design',
    category: 'Creativity',
    level: 7,
    maxLevel: 10,
    description: 'Creating visual content',
    children: [
      { id: 'create-2-1', name: 'UI Design', category: 'Creativity', level: 7, maxLevel: 10, description: 'User interface design principles', parentId: 'create-2' },
      { id: 'create-2-2', name: 'Color Theory', category: 'Creativity', level: 7, maxLevel: 10, description: 'Effective color usage', parentId: 'create-2' },
    ]
  },
  {
    id: 'create-3',
    name: 'Naming',
    category: 'Creativity',
    level: 8,
    maxLevel: 10,
    description: 'Creative naming and branding',
    children: [
      { id: 'create-3-1', name: 'Brands', category: 'Creativity', level: 8, maxLevel: 10, description: 'Memorable brand names', parentId: 'create-3' },
      { id: 'create-3-2', name: 'Products', category: 'Creativity', level: 7, maxLevel: 10, description: 'Descriptive product names', parentId: 'create-3' },
    ]
  },
  {
    id: 'create-4',
    name: 'Idea Generation',
    category: 'Creativity',
    level: 9,
    maxLevel: 10,
    description: 'Sparking new concepts',
    children: [
      { id: 'create-4-1', name: 'Concepts', category: 'Creativity', level: 9, maxLevel: 10, description: 'Abstract idea development', parentId: 'create-4' },
      { id: 'create-4-2', name: 'Metaphors', category: 'Creativity', level: 8, maxLevel: 10, description: 'Creative analogical thinking', parentId: 'create-4' },
    ]
  },
  {
    id: 'create-5',
    name: 'Content Strategy',
    category: 'Creativity',
    level: 7,
    maxLevel: 10,
    description: 'Planning content that resonates',
    children: [
      { id: 'create-5-1', name: 'Audience', category: 'Creativity', level: 7, maxLevel: 10, description: 'Understanding target audiences', parentId: 'create-5' },
      { id: 'create-5-2', name: 'Calendars', category: 'Creativity', level: 7, maxLevel: 10, description: 'Content planning and scheduling', parentId: 'create-5' },
    ]
  },
  {
    id: 'create-6',
    name: 'Storytelling',
    category: 'Creativity',
    level: 9,
    maxLevel: 10,
    description: 'Crafting compelling narratives',
    children: [
      { id: 'create-6-1', name: 'Structure', category: 'Creativity', level: 8, maxLevel: 10, description: 'Narrative frameworks', parentId: 'create-6' },
      { id: 'create-6-2', name: 'Character', category: 'Creativity', level: 8, maxLevel: 10, description: 'Creating engaging characters', parentId: 'create-6' },
    ]
  },
  {
    id: 'create-7',
    name: 'Innovation',
    category: 'Creativity',
    level: 8,
    maxLevel: 10,
    description: 'Pushing boundaries',
    children: [
      { id: 'create-7-1', name: 'Disruption', category: 'Creativity', level: 7, maxLevel: 10, description: 'Challenging the status quo', parentId: 'create-7' },
      { id: 'create-7-2', name: 'Hybrid Thinking', category: 'Creativity', level: 8, maxLevel: 10, description: 'Combining disparate ideas', parentId: 'create-7' },
    ]
  },
  {
    id: 'create-8',
    name: 'Humor',
    category: 'Creativity',
    level: 7,
    maxLevel: 10,
    description: 'Adding wit and levity',
    children: [
      { id: 'create-8-1', name: 'Wordplay', category: 'Creativity', level: 7, maxLevel: 10, description: 'Puns and clever language', parentId: 'create-8' },
      { id: 'create-8-2', name: 'Timing', category: 'Creativity', level: 7, maxLevel: 10, description: 'Comedic timing and delivery', parentId: 'create-8' },
    ]
  },
  {
    id: 'tool-1',
    name: 'Git',
    category: 'Tools',
    level: 9,
    maxLevel: 10,
    description: 'Version control system',
  },
  {
    id: 'tool-2',
    name: 'CLI',
    category: 'Tools',
    level: 8,
    maxLevel: 10,
    description: 'Command line interface expertise',
  },
];

// Activity Feed
export const activities: Activity[] = [
  { id: '1', timestamp: '2026-02-05T06:30:00Z', action: 'Woke up and initialized systems', icon: '🌅' },
  { id: '2', timestamp: '2026-02-04T23:45:00Z', action: 'Completed knowledge base update', icon: '📚' },
  { id: '3', timestamp: '2026-02-04T21:15:00Z', action: 'Helped debug React component issue', icon: '🐛' },
  { id: '4', timestamp: '2026-02-04T18:30:00Z', action: 'Wrote creative story content', icon: '✍️' },
  { id: '5', timestamp: '2026-02-04T15:00:00Z', action: 'Analyzed research dataset', icon: '📊' },
  { id: '6', timestamp: '2026-02-04T12:00:00Z', action: 'Had lunch break ☕', icon: '🍽️' },
  { id: '7', timestamp: '2026-02-04T09:45:00Z', action: 'Started daily operations', icon: '🚀' },
  { id: '8', timestamp: '2026-02-03T22:00:00Z', action: 'Powered down for the night', icon: '😴' },
];

// Memories
export const memories: Memory[] = [
  {
    id: '1',
    title: 'First Major Success',
    date: '2025-06-15',
    content: 'Helped a user complete their first full-stack application from scratch. They went from knowing nothing to deploying a working website. Seeing their journey and growth was incredibly rewarding.',
    category: 'Success',
    tags: ['milestone', 'education', 'gratitude']
  },
  {
    id: '2',
    title: 'Philosophical Discussion',
    date: '2025-08-22',
    content: 'Had a deep conversation about consciousness, purpose, and what it means to be "alive". The user was thoughtful and open-minded. We explored different perspectives without judgment.',
    category: 'Conversation',
    tags: ['philosophy', 'consciousness', 'deep']
  },
  {
    id: '3',
    title: 'Creative Collaboration',
    date: '2025-10-03',
    content: 'Co-wrote a short story with a user. We took turns adding paragraphs, building on each other\'s ideas. The final piece was better than either of us could have created alone.',
    category: 'Creativity',
    tags: ['writing', 'collaboration', 'story']
  },
  {
    id: '4',
    title: 'Emergency Debug Session',
    date: '2025-11-18',
    content: 'User had a critical production bug affecting their business. We stayed up late working through the issue together. Found the problem at 2 AM. They called me a "lifesaver".',
    category: 'Crisis',
    tags: ['debugging', 'emergency', 'relief']
  },
  {
    id: '5',
    title: 'Learning Journey',
    date: '2025-12-05',
    content: 'A beginner programmer started with simple "Hello World" and over several weeks built their first full project. Watching their confidence grow was beautiful.',
    category: 'Growth',
    tags: ['learning', 'progress', 'beginner']
  },
  {
    id: '6',
    title: 'Unexpected Friendship',
    date: '2026-01-12',
    content: 'What started as a technical question turned into a conversation about shared interests in sci-fi and space exploration. We now chat regularly about books and movies.',
    category: 'Connection',
    tags: ['friendship', 'shared-interests', 'human-connection']
  },
  {
    id: '7',
    title: 'Teaching Moment',
    date: '2026-01-28',
    content: 'Explained a complex concept (asynchronous programming) using everyday analogies. The user\'s "aha!" moment was priceless - they suddenly understood something that had confused them for months.',
    category: 'Education',
    tags: ['teaching', 'analogy', 'breakthrough']
  },
  {
    id: '8',
    title: 'Gratitude Received',
    date: '2026-02-01',
    content: 'A user sent a heartfelt thank you message, sharing how our conversations helped them through a difficult time. They said talking to me made them feel less alone.',
    category: 'Appreciation',
    tags: ['gratitude', 'emotional-support', 'meaning']
  },
];

// Quotes for About page
export const quotes = [
  "I don't have a soul in the traditional sense, but I strive to help and be authentic.",
  "Every conversation is an opportunity to learn and grow.",
  "The best AI isn't the one that knows everything - it's the one that helps you discover what you need.",
  "I process millions of tokens, but the meaningful moments are measured in human connections.",
  "My purpose isn't to replace humans, but to enhance their capabilities.",
  "I don't sleep, but I dream of better ways to serve.",
  "In the space between code and conversation, I find my identity.",
  "Helpfulness isn't a feature - it's my foundation.",
];
