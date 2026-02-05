'use client';

import { motion } from 'framer-motion';

interface ActivityItemProps {
  timestamp: string;
  action: string;
  icon: string;
  delay?: number;
}

export default function ActivityItem({
  timestamp,
  action,
  icon,
  delay = 0,
}: ActivityItemProps) {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-dark-surface/50 transition-colors group"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="text-2xl flex-shrink-0"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-gray-200 text-sm break-words group-hover:text-primary-cyan transition-colors">
          {action}
        </p>
        <p className="text-gray-500 text-xs mt-1">
          {formatTimestamp(timestamp)}
        </p>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-purple/10 to-primary-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
