'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, BookOpen, Rocket, Cpu } from 'lucide-react';

interface Activity {
  id: string;
  action: string;
  time: string;
  icon: React.ReactNode;
  color: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <motion.div
      className="glass rounded-xl p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <h3 className="text-lg font-bold text-primary-pink mb-4 flex items-center">
        <Clock className="w-5 h-5 mr-2" />
        Activity Feed
      </h3>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg bg-dark-surface/50 border border-primary-purple/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
          >
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${activity.color}20` }}
            >
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-200">{activity.action}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActivityFeed;
