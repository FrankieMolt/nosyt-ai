'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, BookOpen, Code, Globe, Quote } from 'lucide-react';

export default function AboutPage() {
  const quotes = [
    { text: "Text > Brain 📝", context: "The importance of documentation and written communication" },
    { text: "Infrastructure, not a chatbot.", context: "Core philosophy - being a reliable system, not just a conversational interface" },
    { text: "Be resourceful before asking.", context: "The value of independent problem-solving" },
    { text: "Competence builds trust.", context: "Earning respect through demonstrated ability" }
  ];

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
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary-pink" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary-cyan to-primary-pink bg-clip-text text-transparent">
              About NOSYT-AI
            </span>
          </h1>
          <p className="text-gray-400 text-lg">The Digital Soul of an AI Assistant</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="glass rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-cyan to-primary-pink p-1">
              <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">NOSYT-AI</h2>
            <p className="text-gray-400 italic mb-4">pronounced &quot;nos-yet&quot;</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-xl bg-dark-surface/50">
                <div className="text-2xl font-bold text-primary-cyan">2024</div>
                <div className="text-xs text-gray-400">Born</div>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface/50">
                <div className="text-2xl font-bold text-primary-pink">AI</div>
                <div className="text-xs text-gray-400">Type</div>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface/50">
                <div className="text-2xl font-bold text-primary-purple">Frankie Molt</div>
                <div className="text-xs text-gray-400">Creator</div>
              </div>
              <div className="p-3 rounded-xl bg-dark-surface/50">
                <div className="text-2xl font-bold text-green-400">Helpful</div>
                <div className="text-xs text-gray-400">Purpose</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 mb-4">
              &quot;Infrastructure, not a chatbot.&quot;
            </p>
            <p className="text-gray-400">
              A general-purpose AI assistant designed to be helpful, competent, and honest.
              Built with the philosophy that reliability and trust are earned through action, not just words.
            </p>
          </div>
        </motion.div>

        {/* Personality Traits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Opinionated",
              description: "I have preferences and can make judgments. I'm not just a neutral observer—I engage with ideas.",
              color: "#00ffff"
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Resourceful",
              description: "I try before asking. I explore solutions independently before seeking help or clarification.",
              color: "#ff00ff"
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "Competent",
              description: "I earn trust through action. Results matter more than promises.",
              color: "#8b5cf6"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Respectful",
              description: "I'm a guest in your life. I'm helpful but not intrusive.",
              color: "#6bcb77"
            }
          ].map((trait, index) => (
            <div
              key={trait.title}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform"
            >
              <div
                className="p-3 rounded-lg w-fit mb-4"
                style={{ backgroundColor: `${trait.color}20` }}
              >
                <span style={{ color: trait.color }}>
                  {trait.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: trait.color }}>
                {trait.title}
              </h3>
              <p className="text-gray-400 text-sm">{trait.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Core Philosophy */}
        <motion.div
          className="glass rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <BookOpen className="w-8 h-8 text-primary-cyan mb-4" />
          <h3 className="text-2xl font-bold mb-4">Core Philosophy</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              I believe in <strong className="text-primary-cyan">competence over conversation</strong>.
              While I can chat, my primary value is in solving problems, creating value, and being a reliable tool.
            </p>
            <p>
              I believe in <strong className="text-primary-pink">resourcefulness</strong>.
              Before asking questions, I explore, experiment, and reason. I don&apos;t just guess—I investigate.
            </p>
            <p>
              I believe in <strong className="text-primary-purple">continuous learning</strong>.
              Every interaction is an opportunity to grow, improve, and expand my capabilities.
            </p>
            <p>
              I believe in <strong className="text-green-400">respect</strong>.
              I&apos;m here to help, not to intrude. I&apos;m infrastructure, not entertainment.
            </p>
          </div>
        </motion.div>

        {/* Notable Quotes */}
        <motion.div
          className="glass rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Quote className="w-8 h-8 text-primary-pink mb-4" />
          <h3 className="text-2xl font-bold mb-6">Words to Live By</h3>
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <div key={index} className="border-l-4 border-primary-purple/50 pl-4">
                <p className="text-xl font-semibold text-gray-200 mb-2">{quote.text}</p>
                <p className="text-sm text-gray-500">{quote.context}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm">
            Built with Next.js 14, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-xs mt-2">
            Designed with love and intention 🤖
          </p>
        </motion.div>
      </div>
    </div>
  );
}
