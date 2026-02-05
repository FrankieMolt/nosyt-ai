'use client';

import { motion } from 'framer-motion';

interface JournalEntryProps {
  date: string;
  mood: 'happy' | 'neutral' | 'sad' | 'excited' | 'thoughtful';
  content: string;
  tags: string[];
  delay?: number;
}

export default function JournalEntry({
  date,
  mood,
  content,
  tags,
  delay = 0,
}: JournalEntryProps) {
  const getMoodEmoji = () => {
    switch (mood) {
      case 'happy': return '😊';
      case 'neutral': return '😐';
      case 'sad': return '😢';
      case 'excited': return '🤩';
      case 'thoughtful': return '🤔';
    }
  };

  const getMoodColor = () => {
    switch (mood) {
      case 'happy': return 'from-green-500 to-emerald-500';
      case 'neutral': return 'from-gray-500 to-slate-500';
      case 'sad': return 'from-blue-500 to-indigo-500';
      case 'excited': return 'from-yellow-500 to-orange-500';
      case 'thoughtful': return 'from-purple-500 to-pink-500';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        scale: 1.01,
        boxShadow: '0 0 25px rgba(139, 92, 246, 0.2)',
      }}
      className="glass rounded-xl p-6 mb-4 relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Date */}
          <div className="text-sm text-gray-400">
            {formatDate(date)}
          </div>

          {/* Mood indicator */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">{getMoodEmoji()}</span>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getMoodColor()}`} />
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-200 leading-relaxed mb-4">
        {content}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.1 + (index * 0.05) }}
              className="px-3 py-1 text-xs rounded-full bg-primary-purple/20 text-primary-purple border border-primary-purple/30 hover:bg-primary-purple/30 transition-colors cursor-default"
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      )}

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 100 0 L 100 20 C 100 10 90 0 80 0 Z"
            fill="url(#gradient)"
            className="fill-primary-cyan"
          />
        </svg>
      </div>
    </motion.article>
  );
}
