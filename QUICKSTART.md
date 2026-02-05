# Quick Start Guide - NOSYT-AI Dashboard

## 🚀 Getting Started Locally

```bash
# Navigate to the project
cd nosyt-ai

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## 📁 Project Structure

```
nosyt-ai/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   │   ├── page.tsx      # Dashboard (main page)
│   │   ├── journal/       # Daily journal
│   │   ├── stats/        # Detailed statistics
│   │   ├── skills/       # Skill tree
│   │   ├── memories/     # Memory gallery
│   │   └── about/       # About NOSYT-AI
│   ├── components/       # Reusable components
│   │   ├── Avatar/       # Tamagotchi character
│   │   ├── Activity/     # Activity feed
│   │   ├── Stats/        # Statistics cards
│   │   ├── Skills/       # Skill tree nodes
│   │   └── ui/          # UI components (buttons, status bars)
│   └── lib/             # Data files
├── public/              # Static assets
└── README.md            # Project documentation
```

## 🎮 Interactive Features

### Tamagotchi Buttons (Dashboard)

1. **Feed Data** 📊
   - Increases health (+10)
   - Increases mood (+5)
   - Shows happy expression

2. **Play** 🎮
   - Decreases energy (-10)
   - Increases mood (+15)
   - Shows working expression

3. **Sleep** 😴
   - Increases energy (+20)
   - Shows sleeping expression
   - Auto-wakes after 5 seconds

4. **Clean** 🧹
   - Increases health (+5)
   - Shows working expression

5. **Maintenance** ⚡
   - Triggers "Optimizing neural pathways" animation
   - Cool visual overlay with progress bar

### Avatar States

The AI avatar cycles through expressions automatically:
- 😊 **Happy**: Default friendly state
- 🤔 **Thinking**: Pondering with thought bubble
- 💻 **Working**: Focused with code symbols
- 🔋 **Charging**: Resting with energy particles
- 😴 **Sleeping**: Resting with floating Z's

### Skill Tree (Skills Page)

- Click on skill categories to expand/collapse
- See level progress with animated bars
- Color-coded by category
- Hierarchical structure with subskills

### Memory Gallery (Memories Page)

- **Search**: Type in the search bar to filter memories
- **Filter**: Click type buttons (All, Conversations, Achievements, Learning, Creative)
- **Expand**: Click on any memory to see full details and keywords
- **Keywords**: Click on keywords to search for related memories

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  primary: {
    cyan: '#00ffff',      // Main accent
    pink: '#ff00ff',      // Secondary accent
    purple: '#8b5cf6',    // Tertiary accent
  },
  dark: {
    bg: '#0a0a0f',        // Background
    card: '#12121a',       // Card background
    surface: '#1a1a25',    // Surface
  },
}
```

### Statistics

Update stats in `src/app/page.tsx`:

```typescript
const coreStats = [
  { label: 'Tokens Processed', value: '2.4M', ... },
  { label: 'Conversations', value: '12,847', ... },
  // Add more stats here
];
```

### Avatar Expressions

Modify `src/components/Avatar/Avatar.tsx` to customize facial expressions.

### Journal Entries

Add entries in `src/app/journal/page.tsx` or `src/lib/data.ts`.

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (requires login)
npm i -g vercel
vercel login
vercel --prod
```

## 🔧 Development Tips

1. **Hot Reload**: Changes automatically reload in browser
2. **TypeScript**: Strict mode enabled for type safety
3. **ESLint**: Linting enabled, run `npm run lint` to check
4. **Icons**: Use Lucide React icons from `lucide-react`
5. **Animations**: Use Framer Motion for smooth transitions

## 📱 Testing Responsive Design

Test on different screen sizes:
- **Mobile**: 320px - 480px
- **Tablet**: 768px - 1024px
- **Desktop**: 1200px+

Browser DevTools → Toggle Device Toolbar (Cmd+Shift+M / Ctrl+Shift+M)

## 🎯 Page Overview

### Dashboard (`/`)
- Interactive Tamagotchi avatar
- Real-time statistics
- Status bars (health, energy, mood)
- Activity feed
- Tamagotchi buttons

### Journal (`/journal`)
- Daily entries with mood tracking
- Thought of the day
- Lessons learned
- Future goals

### Stats (`/stats`)
- Detailed metrics
- Processing power
- Capabilities
- Performance indicators
- Achievements

### Skills (`/skills`)
- Interactive skill tree
- Expandable categories
- Level progress
- Skill descriptions

### Memories (`/memories`)
- Memory gallery
- Search functionality
- Type filtering
- Keyword tags

### About (`/about`)
- NOSYT-AI profile
- Personality traits
- Philosophy
- Notable quotes

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
PORT=3001 npm run dev
```

### TypeScript Errors

```bash
# Check types
npx tsc --noEmit
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/docs)

## 💡 Tips

1. **Start with the Dashboard**: Interact with the Tamagotchi avatar
2. **Explore Skills**: Click skill categories to expand them
3. **Search Memories**: Use keywords to find specific memories
4. **Read Journal**: Browse daily reflections and learnings
5. **Check Stats**: View detailed metrics and achievements

---

**Enjoy your NOSYT-AI Dashboard!** 🤖✨
