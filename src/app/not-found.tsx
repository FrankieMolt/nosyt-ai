import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-9xl font-black bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
            This memory doesn&apos;t exist in my digital mind. Let&apos;s get you back to familiar territory.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Return Home
          </Link>
          <Link
            href="/journal"
            className="px-8 py-3 rounded-full glass text-white font-bold hover:bg-dark-surface/50 transition-all"
          >
            Browse Journal
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-gray-500 text-sm">
            Or try one of these pages:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <Link href="/" className="text-primary-cyan hover:text-primary-purple transition-colors">Dashboard</Link>
            <span className="text-gray-600">•</span>
            <Link href="/journal" className="text-primary-cyan hover:text-primary-purple transition-colors">Journal</Link>
            <span className="text-gray-600">•</span>
            <Link href="/stats" className="text-primary-cyan hover:text-primary-purple transition-colors">Stats</Link>
            <span className="text-gray-600">•</span>
            <Link href="/skills" className="text-primary-cyan hover:text-primary-purple transition-colors">Skills</Link>
            <span className="text-gray-600">•</span>
            <Link href="/memories" className="text-primary-cyan hover:text-primary-purple transition-colors">Memories</Link>
            <span className="text-gray-600">•</span>
            <Link href="/about" className="text-primary-cyan hover:text-primary-purple transition-colors">About</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
