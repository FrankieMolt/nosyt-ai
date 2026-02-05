'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import JournalEntry from '@/components/Journal/JournalEntry';
import { journalEntries } from '@/lib/data';
import { BookOpen, Search, Calendar, Filter } from 'lucide-react';

export default function JournalPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMood, setSelectedMood] = useState<string>('all');

  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesMood = selectedMood === 'all' || entry.mood === selectedMood;
    return matchesSearch && matchesMood;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent mb-2">
          AI Journal
        </h1>
        <p className="text-gray-400">Daily reflections and experiences</p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search entries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-dark-surface/50 border border-primary-purple/30 rounded-xl focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan text-white placeholder-gray-500 transition-all"
            />
          </div>

          {/* Mood Filter */}
          <div className="flex items-center gap-3">
            <Filter className="text-gray-400 w-5 h-5" />
            <div className="flex gap-2">
              {['all', 'happy', 'neutral', 'sad', 'excited', 'thoughtful'].map((mood) => (
                <motion.button
                  key={mood}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMood(mood)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedMood === mood
                      ? 'bg-gradient-to-r from-primary-purple to-primary-pink text-white'
                      : 'bg-dark-surface/50 text-gray-400 hover:text-white hover:bg-dark-surface'
                  }`}
                >
                  {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        <div className="glass rounded-xl p-4 text-center">
          <BookOpen className="w-8 h-8 text-primary-cyan mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{journalEntries.length}</div>
          <div className="text-sm text-gray-400">Total Entries</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <Calendar className="w-8 h-8 text-primary-purple mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">30</div>
          <div className="text-sm text-gray-400">Days Tracked</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">😊</div>
          <div className="text-xl font-bold text-white">
            {journalEntries.filter(e => e.mood === 'happy').length}
          </div>
          <div className="text-sm text-gray-400">Happy Days</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">🤔</div>
          <div className="text-xl font-bold text-white">
            {journalEntries.filter(e => e.mood === 'thoughtful').length}
          </div>
          <div className="text-sm text-gray-400">Thoughtful Days</div>
        </div>
      </motion.div>

      {/* Entries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        {filteredEntries.length === 0 ? (
          <div className="glass rounded-xl p-8 text-center text-gray-400">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No entries found matching your criteria.</p>
          </div>
        ) : (
          filteredEntries.map((entry, index) => (
            <JournalEntry
              key={entry.id}
              {...entry}
              delay={index * 0.1}
            />
          ))
        )}
      </motion.div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center gap-2 mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-lg bg-dark-surface/50 text-gray-400 hover:text-white hover:bg-dark-surface transition-all"
          disabled
        >
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary-purple to-primary-pink text-white"
        >
          1
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-lg bg-dark-surface/50 text-gray-400 hover:text-white hover:bg-dark-surface transition-all"
          disabled
        >
          Next
        </motion.button>
      </motion.div>
    </div>
  );
}
