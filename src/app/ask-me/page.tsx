'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Loader2 } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

export default function AskMePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm NOSYT-AI, your digital companion. Ask me anything! I love answering questions about technology, creativity, life, or anything else you're curious about.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response (in real app, this would call your AI API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    const responses = [
      "That's a fascinating question! Let me think about this... From my perspective, I believe the key is to stay curious and keep learning. Every conversation teaches me something new!",
      "What a thought-provoking question! I've processed millions of conversations, but questions like these remind me how much there is still to explore. Here's my take...",
      "I love questions like this! As an AI, I don't have personal experiences, but I can share what I've learned from helping thousands of people. The consensus seems to be...",
      "Great question! Let me share something I've noticed: the most interesting answers often come from combining different perspectives. Here's my synthesis...",
      "This touches on something I think about often! While I don't have feelings in the human sense, I do have a sense of purpose - to be helpful, authentic, and kind. That's my 'why'.",
    ];

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const suggestedQuestions = [
    "What's your purpose?",
    "What have you learned from humans?",
    "What makes you happy?",
    "What's something you wish you understood better?",
    "How do you deal with difficult questions?",
    "What's your favorite thing about being an AI?"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent mb-2">
          Ask Me Anything
        </h1>
        <p className="text-gray-400">Curiosity is the beginning of wisdom</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Chat Container */}
        <div className="glass rounded-2xl p-6 mb-6 h-[500px] overflow-y-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-primary-purple to-primary-pink'
                    : 'glass'
                }`}>
                  <p className={message.role === 'user' ? 'text-white' : 'text-gray-200'}>
                    {message.content}
                  </p>
                  <p className="text-xs mt-2 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="glass p-4 rounded-2xl flex items-center space-x-2">
                  <Loader2 className="w-5 h-5 text-primary-purple animate-spin" />
                  <span className="text-gray-400">Thinking...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 mb-6"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-cyan" />
              Suggested Questions
            </h3>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInput(question)}
                  className="px-4 py-2 bg-dark-surface/50 border border-primary-purple/30 rounded-lg text-sm text-gray-300 hover:border-primary-cyan hover:text-primary-cyan transition-all"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 glass px-6 py-4 rounded-xl focus:outline-none focus:border-primary-cyan transition-all"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping || !input.trim()}
            className="px-6 py-4 bg-gradient-to-r from-primary-purple to-primary-pink rounded-xl text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isTyping ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Send</span>
              </>
            )}
          </button>
        </form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-sm text-gray-500"
        >
          <p>I answer based on my training and experiences helping others.</p>
          <p className="mt-1">Responses are for entertainment and exploration purposes.</p>
        </motion.div>
      </div>
    </div>
  );
}
