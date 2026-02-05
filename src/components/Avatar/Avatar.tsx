'use client';

import { motion } from 'framer-motion';

type Expression = 'happy' | 'thinking' | 'working' | 'charging' | 'sleeping';

interface AvatarProps {
  expression: Expression;
  health: number;
  energy: number;
  mood: 'happy' | 'neutral' | 'sad';
  size?: number;
}

export default function Avatar({ expression, health, energy, mood, size = 200 }: AvatarProps) {
  const getExpressionSVG = () => {
    switch (expression) {
      case 'happy':
        return (
          <g>
            {/* Eyes - happy/open */}
            <ellipse cx="70" cy="85" rx="12" ry="15" fill="#00ffff" />
            <ellipse cx="130" cy="85" rx="12" ry="15" fill="#00ffff" />
            <circle cx="70" cy="83" r="6" fill="#0a0a0f" />
            <circle cx="130" cy="83" r="6" fill="#0a0a0f" />
            {/* Smile */}
            <path d="M 60 120 Q 100 155 140 120" stroke="#00ffff" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Sparkles */}
            <circle cx="45" cy="60" r="3" fill="#ff00ff" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="155" cy="55" r="2" fill="#00ffff" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1s" repeatCount="indefinite" />
            </circle>
          </g>
        );
      case 'thinking':
        return (
          <g>
            {/* Eyes - looking up slightly */}
            <ellipse cx="70" cy="85" rx="12" ry="15" fill="#8b5cf6" />
            <ellipse cx="130" cy="85" rx="12" ry="15" fill="#8b5cf6" />
            <circle cx="70" cy="83" r="6" fill="#0a0a0f" />
            <circle cx="130" cy="83" r="6" fill="#0a0a0f" />
            {/* Thoughtful mouth */}
            <ellipse cx="100" cy="130" rx="15" ry="8" stroke="#8b5cf6" strokeWidth="3" fill="none" />
            {/* Thought bubble */}
            <g transform="translate(155, 40)">
              <circle cx="10" cy="10" r="20" fill="#1a1a25" stroke="#8b5cf6" strokeWidth="2" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.7;0.9" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="10" y="15" textAnchor="middle" fill="#8b5cf6" fontSize="20">💭</text>
              <circle cx="-5" cy="35" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="-12" cy="42" r="2" fill="#8b5cf6" opacity="0.4" />
            </g>
          </g>
        );
      case 'working':
        return (
          <g>
            {/* Focused eyes */}
            <ellipse cx="70" cy="85" rx="10" ry="12" fill="#00ffff" />
            <ellipse cx="130" cy="85" rx="10" ry="12" fill="#00ffff" />
            <circle cx="70" cy="85" r="5" fill="#0a0a0f" />
            <circle cx="130" cy="85" r="5" fill="#0a0a0f" />
            {/* Determined mouth */}
            <line x1="85" y1="125" x2="115" y2="125" stroke="#00ffff" strokeWidth="3" strokeLinecap="round" />
            {/* Code symbols floating */}
            <g opacity="0.7">
              <text x="40" y="50" fill="#00ffff" fontSize="14" fontFamily="monospace">
                &lt;/&gt;
                <animate attributeName="y" values="50;45;50" dur="2s" repeatCount="indefinite" />
              </text>
              <text x="145" y="60" fill="#ff00ff" fontSize="14" fontFamily="monospace">
                { }
                <animate attributeName="y" values="60;55;60" dur="2.5s" repeatCount="indefinite" />
              </text>
            </g>
          </g>
        );
      case 'charging':
        return (
          <g>
            {/* Eyes - half closed, relaxed */}
            <path d="M 58 85 Q 70 80 82 85" stroke="#00ff88" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 118 85 Q 130 80 142 85" stroke="#00ff88" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Gentle smile */}
            <path d="M 70 125 Q 100 135 130 125" stroke="#00ff88" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Battery indicator */}
            <g transform="translate(145, 45)">
              <rect x="0" y="0" width="24" height="14" rx="2" stroke="#00ff88" strokeWidth="2" fill="none">
                <animate attributeName="strokeOpacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
              </rect>
              <rect x="26" y="4" width="4" height="6" rx="1" fill="#00ff88">
                <animate attributeName="fillOpacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
              </rect>
              <rect x="2" y="2" width="16" height="10" fill="#00ff88">
                <animate attributeName="fillOpacity" values="1;0.6;1" dur="1s" repeatCount="indefinite" />
              </rect>
              {/* Lightning bolt */}
              <text x="6" y="12" fontSize="10" fill="#0a0a0f">⚡</text>
            </g>
          </g>
        );
      case 'sleeping':
        return (
          <g>
            {/* Closed eyes */}
            <path d="M 58 85 Q 70 90 82 85" stroke="#8b5cf6" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 118 85 Q 130 90 142 85" stroke="#8b5cf6" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Peaceful smile */}
            <path d="M 70 128 Q 100 140 130 128" stroke="#8b5cf6" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Z's floating up */}
            <g>
              <text x="150" y="60" fill="#8b5cf6" fontSize="16" opacity="0">
                Z
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                <animate attributeName="y" values="60;30" dur="3s" repeatCount="indefinite" />
              </text>
              <text x="160" y="75" fill="#8b5cf6" fontSize="14" opacity="0">
                z
                <animate attributeName="opacity" values="0;1;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="y" values="75;50" dur="3s" begin="0.5s" repeatCount="indefinite" />
              </text>
              <text x="165" y="90" fill="#8b5cf6" fontSize="12" opacity="0">
                z
                <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="y" values="90;70" dur="3s" begin="1s" repeatCount="indefinite" />
              </text>
            </g>
          </g>
        );
    }
  };

  const getMoodColor = () => {
    switch (mood) {
      case 'happy': return '#00ffff';
      case 'neutral': return '#8b5cf6';
      case 'sad': return '#ff6b6b';
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar */}
      <motion.div
        animate={{
          scale: expression === 'sleeping' ? [1, 1.02, 1] : [1, 1.01, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          className="filter drop-shadow-2xl"
        >
          {/* Outer glow */}
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={getMoodColor()} stopOpacity="0.3" />
              <stop offset="100%" stopColor={getMoodColor()} stopOpacity="0" />
            </radialGradient>
            <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a25" />
              <stop offset="100%" stopColor="#12121a" />
            </linearGradient>
          </defs>

          {/* Glow effect */}
          <circle cx="100" cy="100" r="95" fill="url(#glowGradient)">
            <animate
              attributeName="r"
              values="95;100;95"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Main face circle */}
          <circle cx="100" cy="100" r="80" fill="url(#faceGradient)" stroke={getMoodColor()} strokeWidth="3" />

          {/* Circuit lines */}
          <g stroke={getMoodColor()} strokeWidth="1" fill="none" opacity="0.3">
            <path d="M 20 100 L 40 100" />
            <path d="M 160 100 L 180 100" />
            <path d="M 100 20 L 100 35" />
            <path d="M 100 165 L 100 180" />
            <circle cx="30" cy="70" r="3" fill={getMoodColor()} />
            <circle cx="170" cy="130" r="3" fill={getMoodColor()} />
          </g>

          {/* Expression */}
          {getExpressionSVG()}
        </svg>
      </motion.div>

      {/* Status bars */}
      <div className="w-full max-w-[200px] space-y-2">
        {/* Health bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-primary-cyan">Health</span>
            <span className="text-gray-400">{health}%</span>
          </div>
          <div className="h-2 bg-dark-surface rounded-full overflow-hidden border border-primary-cyan/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${health}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-primary-cyan to-primary-pink"
              style={{
                boxShadow: health > 50 ? '0 0 10px rgba(0, 255, 255, 0.5)' : 'none',
              }}
            />
          </div>
        </div>

        {/* Energy bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-primary-purple">Energy</span>
            <span className="text-gray-400">{energy}%</span>
          </div>
          <div className="h-2 bg-dark-surface rounded-full overflow-hidden border border-primary-purple/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${energy}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-primary-purple to-primary-cyan"
              style={{
                boxShadow: energy > 50 ? '0 0 10px rgba(139, 92, 246, 0.5)' : 'none',
              }}
            />
          </div>
        </div>

        {/* Mood indicator */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Mood</span>
          <span className={`text-lg ${mood === 'happy' ? 'animate-bounce' : ''}`}>
            {mood === 'happy' ? '😊' : mood === 'neutral' ? '😐' : '😢'}
          </span>
        </div>
      </div>
    </div>
  );
}
