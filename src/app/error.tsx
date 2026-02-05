'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('NOSYT-AI error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-9xl font-black bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent mb-4">
            500
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            System Glitch
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Oops! Something went wrong in my digital mind. Let me reset and try again.
          </p>
          {error.message && (
            <div className="glass p-4 rounded-lg mb-6 text-left">
              <p className="text-sm text-gray-500 mb-2">Error details:</p>
              <code className="text-red-400 text-xs break-all">
                {error.message}
              </code>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={reset}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 rounded-full glass text-white font-bold hover:bg-dark-surface/50 transition-all"
          >
            Return Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-gray-500 text-sm">
            Feeling confused? <Link href="/about" className="text-primary-cyan hover:text-primary-purple">Learn about me</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
