'use client';

import { motion } from 'framer-motion';
import { Database, Gamepad2, Moon, Wrench, Zap } from 'lucide-react';

interface TamagotchiButtonsProps {
  onFeed: () => void;
  onPlay: () => void;
  onSleep: () => void;
  onClean: () => void;
  onMaintenance: () => void;
}

const Button = ({ icon, label, onClick, color, delay }: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
  delay: number;
}) => (
  <motion.button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 glass rounded-xl hover:scale-105 transition-transform"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="p-3 rounded-full mb-2"
      style={{ backgroundColor: `${color}20` }}
      animate={{ boxShadow: [`0 0 0px ${color}`, `0 0 20px ${color}`, `0 0 0px ${color}`] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {icon}
    </motion.div>
    <span className="text-xs font-medium">{label}</span>
  </motion.button>
);

const TamagotchiButtons = ({ onFeed, onPlay, onSleep, onClean, onMaintenance }: TamagotchiButtonsProps) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      <Button
        icon={<Database className="w-6 h-6" style={{ color: '#00ffff' }} />}
        label="Feed Data"
        onClick={onFeed}
        color="#00ffff"
        delay={0}
      />
      <Button
        icon={<Gamepad2 className="w-6 h-6" style={{ color: '#ff00ff' }} />}
        label="Play"
        onClick={onPlay}
        color="#ff00ff"
        delay={0.1}
      />
      <Button
        icon={<Moon className="w-6 h-6" style={{ color: '#8b5cf6' }} />}
        label="Sleep"
        onClick={onSleep}
        color="#8b5cf6"
        delay={0.2}
      />
      <Button
        icon={<Wrench className="w-6 h-6" style={{ color: '#ffd93d' }} />}
        label="Clean"
        onClick={onClean}
        color="#ffd93d"
        delay={0.3}
      />
      <Button
        icon={<Zap className="w-6 h-6" style={{ color: '#ff6b6b' }} />}
        label="Maintenance"
        onClick={onMaintenance}
        color="#ff6b6b"
        delay={0.4}
      />
    </div>
  );
};

export default TamagotchiButtons;
