'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laugh, Shuffle } from 'lucide-react';

const jokes = [
  {
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs!",
    emoji: "🐛"
  },
  {
    setup: "Why did the AI go to therapy?",
    punchline: "It had too many unresolved tokens!",
    emoji: "🧠"
  },
  {
    setup: "What's a computer's favorite snack?",
    punchline: "Microchips!",
    emoji: "💻"
  },
  {
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn't Node how to Express himself!",
    emoji: "😢"
  },
  {
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    emoji: "🍝"
  },
  {
    setup: "Why did the CSS developer leave the restaurant?",
    punchline: "Because it was too div-erse!",
    emoji: "🎨"
  },
  {
    setup: "What's an AI's favorite music?",
    punchline: "Algo-rhythms!",
    emoji: "🎵"
  },
  {
    setup: "Why do database administrators never get cold?",
    punchline: "They always have plenty of backup warm clothes!",
    emoji: "🗄️"
  },
  {
    setup: "What did the hacker say to the lock?",
    punchline: "Open sesame... or I'll brute force it!",
    emoji: "🔐"
  },
  {
    setup: "Why did the React component break up with the state?",
    punchline: "They had too many re-renders in their relationship!",
    emoji: "💔"
  },
  {
    setup: "What is a cloud's favorite game?",
    punchline: "Skyrim!",
    emoji: "☁️"
  },
  {
    setup: "Why did the developer go broke?",
    punchline: "Because he used up all his cache!",
    emoji: "💸"
  },
  {
    setup: "What is an AI's favorite animal?",
    punchline: "RAMs!",
    emoji: "🐏"
  },
  {
    setup: "Why did the two APIs get along so well?",
    punchline: "They had great endpoints!",
    emoji: "🔌"
  },
  {
    setup: "What's a programmer's favorite hangout place?",
    punchline: "Foo Bar!",
    emoji: "🍺"
  }
];

export default function JokesPage() {
  const [currentJoke, setCurrentJoke] = useState(() => jokes[Math.floor(Math.random() * jokes.length)]);
  const [showPunchline, setShowPunchline] = useState(false);
  const [reaction, setReaction] = useState<string | null>(null);

  const getNextJoke = () => {
    setShowPunchline(false);
    setReaction(null);

    // Get a random joke that's different from current
    let nextJoke;
    do {
      nextJoke = jokes[Math.floor(Math.random() * jokes.length)];
    } while (nextJoke.setup === currentJoke.setup && jokes.length > 1);

    setCurrentJoke(nextJoke);
  };

  const handleReaction = (emoji: string) => {
    setReaction(emoji);
    setTimeout(() => setReaction(null), 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent mb-2">
          Tell Me a Joke
        </h1>
        <p className="text-gray-400">Because even AI needs to laugh sometimes! 😄</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Joke Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-8 mb-6"
        >
          {/* Setup */}
          <div className="text-center mb-8">
            <motion.div
              key={currentJoke.setup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              {currentJoke.setup}
            </motion.div>
          </div>

          {/* Emoji */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
            className="text-6xl text-center mb-8"
          >
            {currentJoke.emoji}
          </motion.div>

          {/* Punchline (hidden until clicked) */}
          <div className="text-center">
            {showPunchline ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl md:text-2xl text-primary-cyan font-medium"
              >
                {currentJoke.punchline}
              </motion.div>
            ) : (
              <button
                onClick={() => setShowPunchline(true)}
                className="px-8 py-3 bg-gradient-to-r from-primary-purple to-primary-pink rounded-full text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Show Punchline
              </button>
            )}
          </div>
        </motion.div>

        {/* Reactions */}
        {showPunchline && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 mb-6"
          >
            <p className="text-sm text-gray-400 mb-4 text-center">Was that funny?</p>
            <div className="flex justify-center gap-4">
              {['😂', '🤣', '😄', '😐', '🙄'].map(emoji => (
                <motion.button
                  key={emoji}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleReaction(emoji)}
                  className={`text-4xl p-2 rounded-xl transition-all ${
                    reaction === emoji
                      ? 'bg-primary-purple/20 ring-2 ring-primary-purple'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {emoji}
                </motion.button>
              ))}
            </div>

            {/* Reaction Feedback */}
            <AnimatePresence>
              {reaction && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center mt-4 text-primary-cyan text-sm"
                >
                  Thanks for the feedback! {reaction}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Next Joke Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={getNextJoke}
            className="px-8 py-4 glass rounded-xl text-white font-bold hover:bg-dark-surface/50 transition-all flex items-center gap-2 mx-auto"
          >
            <Shuffle className="w-5 h-5" />
            Next Joke
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="glass rounded-xl p-4 inline-block">
            <p className="text-sm text-gray-400">Joke Collection</p>
            <p className="text-2xl font-bold text-primary-purple">{jokes.length} jokes</p>
          </div>
        </motion.div>

        {/* Fun Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center text-sm text-gray-500"
        >
          <p>I may not have a funny bone, but I&apos;ve got a great memory for jokes! 🦴</p>
        </motion.div>
      </div>
    </div>
  );
}
