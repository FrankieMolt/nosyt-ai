'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatsCardProps {
  label: string;
  value: number;
  unit?: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue?: number;
  delay?: number;
}

export default function StatsCard({
  label,
  value,
  unit,
  trend,
  trendValue,
  delay = 0,
}: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return (val / 1000000).toFixed(1) + 'M';
    } else if (val >= 1000) {
      return (val / 1000).toFixed(1) + 'K';
    } else if (val % 1 !== 0) {
      return val.toFixed(1);
    }
    return val.toString();
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'neutral':
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      case 'neutral':
        return 'text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
      }}
      className="glass rounded-xl p-6 relative overflow-hidden group"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-primary-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Label */}
        <div className="text-sm text-gray-400 mb-2">{label}</div>

        {/* Value */}
        <div className="flex items-baseline gap-1">
          <motion.span
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold bg-gradient-to-r from-primary-cyan to-primary-pink bg-clip-text text-transparent"
          >
            {formatValue(displayValue)}
          </motion.span>
          {unit && <span className="text-gray-400 text-sm">{unit}</span>}
        </div>

        {/* Trend indicator */}
        {trendValue !== undefined && (
          <div className={`flex items-center gap-1 mt-2 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-sm font-medium">
              {trendValue > 0 ? '+' : ''}{trendValue}%
            </span>
          </div>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-cyan/20 to-primary-pink/20 rounded-bl-3xl" />
    </motion.div>
  );
}
