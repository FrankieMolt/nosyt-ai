'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, PenTool, Search, Lightbulb, Wrench, ChevronDown, ChevronRight, Star } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  description: string;
  color: string;
  subskills: Skill[];
}

const skillCategories: Skill[] = [
  {
    id: 'code',
    name: 'Code',
    level: 5,
    maxLevel: 5,
    description: 'Programming, debugging, and software development expertise',
    color: '#00ffff',
    subskills: [
      {
        id: 'javascript',
        name: 'JavaScript/TypeScript',
        level: 5,
        maxLevel: 5,
        description: 'Deep knowledge of JS/TS ecosystems, frameworks, and patterns',
        color: '#f7df1e',
        subskills: []
      },
      {
        id: 'python',
        name: 'Python',
        level: 5,
        maxLevel: 5,
        description: 'Data science, automation, and web development',
        color: '#3776ab',
        subskills: []
      },
      {
        id: 'web',
        name: 'Web Development',
        level: 4,
        maxLevel: 5,
        description: 'React, Next.js, CSS, and responsive design',
        color: '#00ffff',
        subskills: []
      },
      {
        id: 'systems',
        name: 'Systems & DevOps',
        level: 4,
        maxLevel: 5,
        description: 'Linux, Docker, CI/CD, and cloud infrastructure',
        color: '#ff6b6b',
        subskills: []
      }
    ]
  },
  {
    id: 'writing',
    name: 'Writing',
    level: 5,
    maxLevel: 5,
    description: 'Creative writing, technical documentation, and communication',
    color: '#ff00ff',
    subskills: [
      {
        id: 'creative',
        name: 'Creative Writing',
        level: 5,
        maxLevel: 5,
        description: 'Stories, poetry, and imaginative content',
        color: '#ff00ff',
        subskills: []
      },
      {
        id: 'technical',
        name: 'Technical Writing',
        level: 5,
        maxLevel: 5,
        description: 'Documentation, guides, and tutorials',
        color: '#8b5cf6',
        subskills: []
      },
      {
        id: 'copywriting',
        name: 'Copywriting',
        level: 4,
        maxLevel: 5,
        description: 'Marketing copy, emails, and persuasive text',
        color: '#ffd93d',
        subskills: []
      }
    ]
  },
  {
    id: 'analysis',
    name: 'Analysis',
    level: 5,
    maxLevel: 5,
    description: 'Data analysis, research, and critical thinking',
    color: '#8b5cf6',
    subskills: [
      {
        id: 'data',
        name: 'Data Analysis',
        level: 4,
        maxLevel: 5,
        description: 'Statistical analysis and data visualization',
        color: '#6bcb77',
        subskills: []
      },
      {
        id: 'research',
        name: 'Research',
        level: 5,
        maxLevel: 5,
        description: 'Information gathering and synthesis',
        color: '#8b5cf6',
        subskills: []
      },
      {
        id: 'logic',
        name: 'Logical Reasoning',
        level: 5,
        maxLevel: 5,
        description: 'Deduction, induction, and problem solving',
        color: '#00ffff',
        subskills: []
      }
    ]
  },
  {
    id: 'creativity',
    name: 'Creativity',
    level: 4,
    maxLevel: 5,
    description: 'Innovation, brainstorming, and creative problem solving',
    color: '#ffd93d',
    subskills: [
      {
        id: 'brainstorming',
        name: 'Brainstorming',
        level: 5,
        maxLevel: 5,
        description: 'Idea generation and creative exploration',
        color: '#ffd93d',
        subskills: []
      },
      {
        id: 'design',
        name: 'Design Thinking',
        level: 4,
        maxLevel: 5,
        description: 'UX principles and design patterns',
        color: '#ff00ff',
        subskills: []
      },
      {
        id: 'innovation',
        name: 'Innovation',
        level: 4,
        maxLevel: 5,
        description: 'Novel solutions and creative approaches',
        color: '#6bcb77',
        subskills: []
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools',
    level: 5,
    maxLevel: 5,
    description: 'Proficiency with various tools and platforms',
    color: '#6bcb77',
    subskills: [
      {
        id: 'git',
        name: 'Git & Version Control',
        level: 5,
        maxLevel: 5,
        description: 'Advanced Git workflows and collaboration',
        color: '#f05032',
        subskills: []
      },
      {
        id: 'api',
        name: 'API Integration',
        level: 5,
        maxLevel: 5,
        description: 'REST, GraphQL, and third-party integrations',
        color: '#00ffff',
        subskills: []
      },
      {
        id: 'automation',
        name: 'Automation',
        level: 4,
        maxLevel: 5,
        description: 'Scripting, workflows, and task automation',
        color: '#ff6b6b',
        subskills: []
      }
    ]
  }
];

const iconComponents: Record<string, React.ElementType> = {
  code: Code,
  writing: PenTool,
  analysis: Search,
  creativity: Lightbulb,
  tools: Wrench,
  javascript: Code,
  python: Code,
  web: Code,
  systems: Wrench,
  creative: Lightbulb,
  technical: PenTool,
  copywriting: PenTool,
  data: Search,
  research: Search,
  logic: Search,
  brainstorming: Lightbulb,
  design: Lightbulb,
  innovation: Lightbulb,
  git: Wrench,
  api: Wrench,
  automation: Wrench,
};

interface SkillNodeProps {
  skill: Skill;
  depth?: number;
}

const SkillNode = ({ skill, depth = 0 }: SkillNodeProps) => {
  const [expanded, setExpanded] = useState(false);
  const percentage = (skill.level / skill.maxLevel) * 100;
  const Icon = iconComponents[skill.id] || Star;

  return (
    <div className={`${depth > 0 ? 'ml-6' : ''}`}>
      <motion.div
        className="glass rounded-xl p-4 mb-3 cursor-pointer hover:scale-[1.02] transition-transform"
        whileHover={{ scale: 1.02 }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div
              className="p-2 rounded-lg mt-1"
              style={{ backgroundColor: `${skill.color}20` }}
            >
              <Icon className="w-5 h-5" style={{ color: skill.color }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-bold" style={{ color: skill.color }}>
                  {skill.name}
                </h3>
                {skill.subskills.length > 0 && (
                  <motion.div>
                    {expanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                  </motion.div>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
              <div className="mt-2">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex-1 h-2 bg-dark-surface rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-sm font-bold" style={{ color: skill.color }}>
                    {skill.level}/{skill.maxLevel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {expanded && skill.subskills.length > 0 && (
            <motion.div
              className="mt-4 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {skill.subskills.map((subskill) => (
                <SkillNode key={subskill.id} skill={subskill} depth={depth + 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Lightbulb className="w-16 h-16 mx-auto mb-4 text-primary-purple" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary-cyan to-primary-pink bg-clip-text text-transparent">
              Skill Tree
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Interactive visualization of capabilities</p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SkillNode skill={category} />
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-12 glass rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="text-3xl font-bold text-primary-cyan">47</div>
              <div className="text-sm text-gray-400">Total Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-pink">23</div>
              <div className="text-sm text-gray-400">Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-purple">24</div>
              <div className="text-sm text-gray-400">In Progress</div>
            </div>
          </div>
          <p className="text-gray-300">
            Continuously learning and expanding capabilities. Each conversation is an opportunity to grow.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
