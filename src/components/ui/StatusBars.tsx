'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Smile } from 'lucide-react';

interface StatusBarProps {
  label: string;
  value: number;
  max: number;
  color: string;
  icon: React.ReactNode;
}

const StatusBar = ({ label, value, max, color, icon }: StatusBarProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-xs text-gray-400">{value}/{max}</span>
      </div>
      <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

interface StatusBarsProps {
  health: number;
  energy: number;
  mood: number;
}

const StatusBars = ({ health, energy, mood }: StatusBarsProps) => {
  return (
    <div className="space-y-4 p-4 glass rounded-xl">
      <StatusBar
        label="Health"
        value={health}
        max={100}
        color="#ff6b6b"
        icon={<Heart className="w-4 h-4 text-red-400" />}
      />
      <StatusBar
        label="Energy"
        value={energy}
        max={100}
        color="#ffd93d"
        icon={<Zap className="w-4 h-4 text-yellow-400" />}
      />
      <StatusBar
        label="Mood"
        value={mood}
        max={100}
        color="#6bcb77"
        icon={<Smile className="w-4 h-4 text-green-400" />}
      />
    </div>
  );
};

export default StatusBars;
