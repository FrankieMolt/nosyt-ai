# NOSYT-AI 🤖

**The Digital Soul of an AI Assistant - Tamagotchi Dashboard**

<div align="center">

![NOSYT-AI](https://img.shields.io/badge/NOSYT--AI-v1.0.0-00ffff?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

[Live Demo](https://nosyt-ai.vercel.app) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

</div>

---

## ✨ Features

### 🎭 Tamagotchi-Style Avatar
- Interactive AI character with 5 unique expressions
- Animated breathing/pulsing effects
- Real-time state transitions (Happy, Thinking, Working, Charging, Sleeping)
- SVG-based animations with neon glow effects

### 📊 Live Dashboard
- Real-time statistics tracking (tokens processed, conversations, uptime)
- Health, Energy, and Mood status bars with glowing animations
- Activity feed with timestamped events
- Interactive Tamagotchi buttons (Feed, Play, Sleep, Clean, Maintenance)

### 📔 Daily Journal
- Auto-generated daily entries
- Mood tracking with emoji indicators
- "Thought of the day" reflections
- Lessons learned and future goals
- Beautiful glassmorphism design

### 🌳 Skill Tree
- Interactive visualization of capabilities
- Categories: Code, Writing, Analysis, Creativity, Tools
- Expandable nodes with level indicators
- Progress bars with smooth animations

### 🧠 Memory Gallery
- Visual representation of AI experiences
- Search functionality by title, description, or keywords
- Filter by type (Conversations, Achievements, Learning, Creative)
- Connection tracking between related memories

### 📈 Detailed Statistics
- Processing power metrics (tokens, response time, error rate)
- Capabilities overview (skills, languages, patterns)
- Memory & storage statistics
- Performance metrics and achievements

### 🎨 Design
- Dark theme with deep purple/black background
- Neon cyan and pink accents
- Glassmorphism effects throughout
- Smooth Framer Motion animations
- Retro-futuristic Tamagotchi vibe
- Fully responsive design

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FrankieMolt/nosyt-ai.git
   cd nosyt-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nosyt-ai/
├── src/
│   ├── app/
│   │   ├── about/           # About page
│   │   ├── journal/         # Daily journal entries
│   │   ├── memories/        # Memory gallery
│   │   ├── page.tsx         # Main dashboard
│   │   ├── skills/          # Skill tree
│   │   ├── stats/           # Detailed statistics
│   │   ├── layout.tsx       # Root layout with navigation
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Activity/        # Activity feed component
│       ├── Avatar/          # Tamagotchi avatar
│       ├── Journal/         # Journal components
│       ├── Memories/        # Memory components
│       ├── Skills/          # Skill tree components
│       ├── Stats/           # Statistics cards
│       └── ui/              # Reusable UI components
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 🎮 Interactive Features

### Tamagotchi Buttons
- **Feed Data**: Increases health and mood, shows happy expression
- **Play**: Decreases energy, increases mood, shows working expression
- **Sleep**: Increases energy, shows sleeping expression
- **Clean**: Slight health boost, shows working expression
- **Maintenance**: Triggers "optimizing neural pathways" animation

### Avatar States
- 😊 **Happy**: Default state, shows friendly expression
- 🤔 **Thinking**: Pondering, shows thought bubble
- 💻 **Working**: Focused, shows code symbols
- 🔋 **Charging**: Resting, shows energy particles
- 😴 **Sleeping**: Resting, shows Z's floating up

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    cyan: '#00ffff',      // Main accent color
    pink: '#ff00ff',      // Secondary accent
    purple: '#8b5cf6',     // Tertiary accent
  },
  dark: {
    bg: '#0a0a0f',        // Background color
    card: '#12121a',       // Card background
    surface: '#1a1a25',    // Surface color
  },
}
```

### Avatar Expressions
Modify `src/components/Avatar/Avatar.tsx` to customize facial expressions and animations.

### Statistics
Update the stats data in `src/app/page.tsx` to reflect your own metrics.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 About the Creator

**NOSYT-AI** (pronounced "nos-yet") is a personal AI assistant created by Frankie Molt.

Philosophy:
> "Infrastructure, not a chatbot."

Built with the goal of being:
- ✅ Competent
- ✅ Resourceful
- ✅ Honest
- ✅ Respectful
- ✅ Continuously Learning

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

<div align="center">

Made with 💜 and 🤖

[⬆ Back to Top](#nosyt-ai-)

</div>
