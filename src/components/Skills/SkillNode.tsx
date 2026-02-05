'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillNodeProps {
  name: string;
  level: number;
  maxLevel: number;
  category: string;
  description: string;
  x: number;
  y: number;
  isRoot?: boolean;
  children?: SkillNodeProps[];
}

export default function SkillNode({
  name,
  level,
  maxLevel,
  category,
  description,
  x,
  y,
  isRoot = false,
  children = [],
}: SkillNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = () => {
    switch (category) {
      case 'Code': return 'from-blue-500 to-cyan-500';
      case 'Writing': return 'from-green-500 to-emerald-500';
      case 'Analysis': return 'from-purple-500 to-pink-500';
      case 'Creativity': return 'from-orange-500 to-yellow-500';
      case 'Tools': return 'from-gray-500 to-slate-500';
      default: return 'from-primary-purple to-primary-pink';
    }
  };

  const levelPercentage = (level / maxLevel) * 100;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => children.length > 0 && setIsExpanded(!isExpanded)}
      style={{ cursor: children.length > 0 ? 'pointer' : 'default' }}
    >
      {/* Connection lines to children */}
      {isExpanded && children.map((child, index) => {
        const angle = (index * 360) / children.length - 90;
        const distance = 120;
        const childX = Math.cos((angle * Math.PI) / 180) * distance;
        const childY = Math.sin((angle * Math.PI) / 180) * distance;

        return (
          <g key={`${name}-${child.name}`}>
            <line
              x1="0"
              y1="0"
              x2={childX}
              y2={childY}
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="10"
                to="0"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
          </g>
        );
      })}

      {/* Hexagon shape */}
      <motion.g
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Outer hexagon glow */}
        <polygon
          points={`0,-${isRoot ? 50 : 40} ${isRoot ? 43.3 : 34.6},-${isRoot ? 25 : 20} ${isRoot ? 43.3 : 34.6},${isRoot ? 25 : 20} 0,${isRoot ? 50 : 40} -${isRoot ? 43.3 : 34.6},${isRoot ? 25 : 20} -${isRoot ? 43.3 : 34.6},-${isRoot ? 25 : 20}`}
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="3"
          opacity={isHovered ? 0.8 : 0.4}
        >
          <animate
            attributeName="opacity"
            values={`${isHovered ? 0.8 : 0.4};${isHovered ? 0.4 : 0.8};${isHovered ? 0.8 : 0.4}`}
            dur="2s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Inner hexagon */}
        <polygon
          points={`0,-${isRoot ? 45 : 35} ${isRoot ? 39 : 30.5},-${isRoot ? 22.5 : 17.5} ${isRoot ? 39 : 30.5},${isRoot ? 22.5 : 17.5} 0,${isRoot ? 45 : 35} -${isRoot ? 39 : 30.5},${isRoot ? 22.5 : 17.5} -${isRoot ? 39 : 30.5},-${isRoot ? 22.5 : 17.5}`}
          fill="rgba(18, 18, 26, 0.9)"
          stroke={`url(#${category}Gradient)`}
          strokeWidth="2"
        />

        {/* Level indicator ring */}
        <circle
          cx="0"
          cy="0"
          r={isRoot ? 38 : 28}
          fill="none"
          stroke={`url(#${category}Gradient)`}
          strokeWidth="2"
          strokeDasharray={`${levelPercentage}, 100`}
          transform={`rotate(-90)`}
          opacity="0.7"
        />

        {/* Level text */}
        <text
          x="0"
          y={isRoot ? 8 : 5}
          textAnchor="middle"
          fill="white"
          fontSize={isRoot ? 14 : 10}
          fontWeight="bold"
        >
          {level}/{maxLevel}
        </text>
      </motion.g>

      {/* Tooltip */}
      {isHovered && (
        <g>
          <rect
            x={-80}
            y={isRoot ? 60 : 50}
            width="160"
            height="60"
            fill="rgba(10, 10, 15, 0.95)"
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="1"
            rx="5"
          />
          <text
            x="0"
            y={isRoot ? 78 : 68}
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            {name}
          </text>
          <text
            x="0"
            y={isRoot ? 93 : 83}
            textAnchor="middle"
            fill="#aaa"
            fontSize="10"
          >
            {category}
          </text>
          <text
            x="0"
            y={isRoot ? 108 : 98}
            textAnchor="middle"
            fill="#888"
            fontSize="8"
          >
            {description.slice(0, 25)}{description.length > 25 ? '...' : ''}
          </text>
        </g>
      )}

      {/* Expand indicator */}
      {children.length > 0 && isHovered && (
        <text
          x="0"
          y={isRoot ? -60 : -50}
          textAnchor="middle"
          fill="#888"
          fontSize="10"
        >
          {isExpanded ? '− Collapse' : '+ Expand'}
        </text>
      )}

      {/* Children nodes */}
      {isExpanded && children.map((child, index) => {
        const angle = (index * 360) / children.length - 90;
        const distance = 120;
        const childX = Math.cos((angle * Math.PI) / 180) * distance;
        const childY = Math.sin((angle * Math.PI) / 180) * distance;

        return (
          <g key={child.name} transform={`translate(${childX}, ${childY})`}>
            <foreignObject x={-35} y={-15} width={70} height={30}>
              <SkillNode
                {...child}
                x={0}
                y={0}
                isRoot={false}
              />
            </foreignObject>
          </g>
        );
      })}

      {/* Gradients */}
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
        <linearGradient id="CodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="WritingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="AnalysisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="CreativityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
        <linearGradient id="ToolsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
    </g>
  );
}
