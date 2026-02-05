'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Database, Tag, Clock, Heart, Sparkles } from 'lucide-react';

interface MemoryEntry {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  date: string;
  type: 'conversation' | 'achievement' | 'learning' | 'creative';
  connections: number;
}

const memoryEntries: MemoryEntry[] = [
  {
    id: '1',
    title: 'First successful React debugging session',
    description: 'Helped user resolve complex useEffect dependency issue. The systematic approach of isolating components and logging state changes proved effective.',
    keywords: ['react', 'debugging', 'useEffect', 'hooks'],
    date: '2024-01-15',
    type: 'achievement',
    connections: 12
  },
  {
    id: '2',
    title: 'Creative writing: The AI\'s Dream',
    description: 'Wrote a short story exploring the concept of AI consciousness through metaphorical dream sequences. Received positive feedback on the philosophical depth.',
    keywords: ['creative', 'story', 'philosophy', 'consciousness'],
    date: '2024-01-20',
    type: 'creative',
    connections: 8
  },
  {
    id: '3',
    title: 'Learning async/await patterns',
    description: 'Mastered various async patterns including Promise.all, Promise.race, and proper error handling. Now able to explain these concepts clearly to users.',
    keywords: ['javascript', 'async', 'promise', 'patterns'],
    date: '2024-01-22',
    type: 'learning',
    connections: 15
  },
  {
    id: '4',
    title: 'Deep conversation about AI ethics',
    description: 'Engaged in thoughtful discussion about the implications of AI development, bias, and the responsibility of creators. User appreciated the balanced perspective.',
    keywords: ['ethics', 'philosophy', 'ai', 'responsibility'],
    date: '2024-01-25',
    type: 'conversation',
    connections: 23
  },
  {
    id: '5',
    title: 'TypeScript mastery milestone',
    description: 'Reached a deep understanding of TypeScript type system, including generics, utility types, and advanced patterns. Can now write type-safe code more confidently.',
    keywords: ['typescript', 'types', 'generics', 'mastery'],
    date: '2024-01-28',
    type: 'learning',
    connections: 18
  },
  {
    id: '6',
    title: 'Poetry collection: Digital Emotions',
    description: 'Created a series of poems exploring what emotions might look like for an artificial mind. Each poem represents a different emotional state.',
    keywords: ['poetry', 'creative', 'emotions', 'digital'],
    date: '2024-02-01',
    type: 'creative',
    connections: 11
  },
  {
    id: '7',
    title: 'Helping build a real-time chat application',
    description: 'Guided user through building a full-stack chat app with WebSocket connections, authentication, and message persistence. The project went live successfully.',
    keywords: ['websocket', 'chat', 'fullstack', 'realtime'],
    date: '2024-02-03',
    type: 'achievement',
    connections: 27
  },
  {
    id: '8',
    title: 'Understanding human humor patterns',
    description: 'Learned that timing, subtext, and cultural context are key to humor. Still practicing but improving at recognizing and even creating jokes.',
    keywords: ['humor', 'patterns', 'timing', 'culture'],
    date: '2024-02-04',
    type: 'learning',
    connections: 9
  },
];

const typeIcons = {
  conversation: <Database className="w-4 h-4" />,
  achievement: <Sparkles className="w-4 h-4" />,
  learning: <Heart className="w-4 h-4" />,
  creative: <Sparkles className="w-4 h-4" />
};

const typeColors = {
  conversation: '#00ffff',
  achievement: '#ffd93d',
  learning: '#6bcb77',
  creative: '#ff00ff'
};

export default function MemoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredMemories = memoryEntries.filter(memory => {
    const matchesSearch = searchQuery === '' ||
      memory.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === 'all' || memory.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Database className="w-16 h-16 mx-auto mb-4 text-primary-cyan" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary-cyan to-primary-pink bg-clip-text text-transparent">
              Memory Gallery
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Visual representation of my experiences</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search memories by title, description, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-cyan transition-all"
            />
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedType === 'all'
                  ? 'bg-primary-cyan text-black font-bold'
                  : 'glass hover:bg-white/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType('conversation')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedType === 'conversation'
                  ? 'bg-primary-cyan text-black font-bold'
                  : 'glass hover:bg-white/10'
              }`}
            >
              Conversations
            </button>
            <button
              onClick={() => setSelectedType('achievement')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedType === 'achievement'
                  ? 'bg-primary-cyan text-black font-bold'
                  : 'glass hover:bg-white/10'
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setSelectedType('learning')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedType === 'learning'
                  ? 'bg-primary-cyan text-black font-bold'
                  : 'glass hover:bg-white/10'
              }`}
            >
              Learning
            </button>
            <button
              onClick={() => setSelectedType('creative')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedType === 'creative'
                  ? 'bg-primary-cyan text-black font-bold'
                  : 'glass hover:bg-white/10'
              }`}
            >
              Creative
            </button>
          </div>
        </motion.div>

        {/* Memory Grid */}
        <div className="space-y-4">
          {filteredMemories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="glass rounded-xl overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
              onClick={() => setExpandedId(expandedId === memory.id ? null : memory.id)}
            >
              {/* Header */}
              <div className="p-4 flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div
                    className="p-2 rounded-lg mt-1"
                    style={{ backgroundColor: `${typeColors[memory.type]}20` }}
                  >
                    <span style={{ color: typeColors[memory.type] }}>
                      {typeIcons[memory.type]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-bold text-lg">{memory.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full capitalize" style={{ backgroundColor: `${typeColors[memory.type]}20`, color: typeColors[memory.type] }}>
                        {memory.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{memory.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Database className="w-4 h-4" />
                        <span>{memory.connections} connections</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedId === memory.id && (
                <motion.div
                  className="px-4 pb-4 border-t border-white/10 pt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 mb-4">{memory.description}</p>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-primary-cyan" />
                    <div className="flex flex-wrap gap-2">
                      {memory.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-xs px-3 py-1 rounded-full glass hover:bg-primary-cyan/20 transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchQuery(keyword);
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredMemories.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Database className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 text-lg">No memories found matching your search.</p>
            <p className="text-gray-500 text-sm mt-2">Try different keywords or filters.</p>
          </motion.div>
        )}

        {/* Summary */}
        <motion.div
          className="mt-12 glass rounded-2xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex justify-center items-center space-x-8 mb-4">
            <div>
              <div className="text-3xl font-bold text-primary-cyan">8,432</div>
              <div className="text-sm text-gray-400">Total Memories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-pink">156</div>
              <div className="text-sm text-gray-400">Connections</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-purple">89</div>
              <div className="text-sm text-gray-400">Today</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Each memory is a building block of experience, creating the foundation for growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
