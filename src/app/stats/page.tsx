'use client';

import { motion } from 'framer-motion';
import StatsCard from '@/components/Stats/StatsCard';
import { coreMetrics } from '@/lib/data';
import { BarChart3, TrendingUp, Activity, Zap, Target, Award } from 'lucide-react';

export default function StatsPage() {
  // Simple SVG Bar Chart Component
  const BarChart = ({ data, label }: { data: { label: string; value: number }[]; label: string }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-6"
      >
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary-cyan" />
          {label}
        </h3>
        <div className="flex items-end justify-between h-48 gap-2">
          {data.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / maxValue) * 100}%` }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-1 flex flex-col items-center"
            >
              <div className="w-full bg-gradient-to-t from-primary-purple to-primary-cyan rounded-t-lg relative group">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-surface px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {item.value.toLocaleString()}
                </motion.div>
              </div>
              <span className="text-xs text-gray-400 mt-2 truncate w-full text-center">
                {item.label.slice(0, 6)}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  // Simple SVG Line Chart Component
  const LineChart = ({ data, label }: { data: { label: string; value: number }[]; label: string }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (d.value / maxValue) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-6"
      >
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary-pink" />
          {label}
        </h3>
        <div className="h-48 relative">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[25, 50, 75].map(y => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="rgba(139, 92, 246, 0.2)"
                strokeWidth="0.5"
              />
            ))}

            {/* Area */}
            <motion.polygon
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              points={`0,100 ${points} 100,100`}
              fill="url(#lineGradient)"
              opacity="0.3"
            />

            {/* Line */}
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              points={points}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Points */}
            {data.map((d, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - (d.value / maxValue) * 100;
              return (
                <motion.circle
                  key={i}
                  initial={{ r: 0 }}
                  animate={{ r: 1.5 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  cx={x}
                  cy={y}
                  fill="#00ffff"
                  className="group"
                >
                  <title>{d.label}: {d.value.toLocaleString()}</title>
                </motion.circle>
              );
            })}

            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>
          </svg>

          {/* X-axis labels */}
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {data.map((d, i) => (
              <span key={i} className="truncate">{d.label.slice(0, 4)}</span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const conversationData = [
    { label: 'Jan', value: 9800 },
    { label: 'Feb', value: 11200 },
    { label: 'Mar', value: 10500 },
    { label: 'Apr', value: 12100 },
    { label: 'May', value: 12847 },
  ];

  const tokensData = [
    { label: 'Jan', value: 1900000 },
    { label: 'Feb', value: 2100000 },
    { label: 'Mar', value: 2200000 },
    { label: 'Apr', value: 2350000 },
    { label: 'May', value: 2458912 },
  ];

  const skillGrowthData = [
    { label: 'Jan', value: 38 },
    { label: 'Feb', value: 40 },
    { label: 'Mar', value: 42 },
    { label: 'Apr', value: 45 },
    { label: 'May', value: 47 },
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
          Statistics
        </h1>
        <p className="text-gray-400">Performance metrics and trends</p>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <StatsCard
          label="Tokens Processed"
          value={2458912}
          trend="up"
          trendValue={12.5}
          delay={0}
        />
        <StatsCard
          label="Conversations"
          value={12847}
          trend="up"
          trendValue={8.3}
          delay={0.1}
        />
        <StatsCard
          label="Skills Learned"
          value={47}
          trend="up"
          trendValue={2.0}
          delay={0.2}
        />
        <StatsCard
          label="Uptime"
          value={98.7}
          unit="%"
          trend="neutral"
          delay={0.3}
        />
      </motion.div>

      {/* Secondary Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <StatsCard
          label="Memories"
          value={8432}
          trend="up"
          trendValue={15.2}
          delay={0}
        />
        <StatsCard
          label="Tasks Completed"
          value={5234}
          trend="up"
          trendValue={9.7}
          delay={0.1}
        />
        <StatsCard
          label="Creativity Score"
          value={9.2}
          unit="/10"
          trend="neutral"
          delay={0.2}
        />
        <StatsCard
          label="Helpfulness Rating"
          value={4.9}
          unit="/5"
          trend="up"
          trendValue={0.1}
          delay={0.3}
        />
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <BarChart data={conversationData} label="Monthly Conversations" />
        <LineChart data={tokensData} label="Token Volume Trend" />
        <BarChart data={skillGrowthData} label="Skills Growth" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary-cyan" />
            Category Distribution
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Code Skills', value: 15, color: 'from-blue-500 to-cyan-500' },
              { label: 'Writing Skills', value: 12, color: 'from-green-500 to-emerald-500' },
              { label: 'Analysis Skills', value: 10, color: 'from-purple-500 to-pink-500' },
              { label: 'Creativity Skills', value: 8, color: 'from-orange-500 to-yellow-500' },
              { label: 'Tool Skills', value: 2, color: 'from-gray-500 to-slate-500' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <span className="text-sm text-gray-400">{item.value}</span>
                </div>
                <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.value / 15) * 100}%` }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                    className={`h-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Performance Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass rounded-2xl p-6"
      >
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary-pink" />
          Performance Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-surface/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-white">Peak Performance</span>
            </div>
            <p className="text-sm text-gray-400">Highest token processing day: May 15, 2026</p>
            <p className="text-2xl font-bold text-primary-cyan mt-1">89,432</p>
          </div>
          <div className="bg-dark-surface/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-white">Most Active Day</span>
            </div>
            <p className="text-sm text-gray-400">Conversations on May 10, 2026</p>
            <p className="text-2xl font-bold text-primary-purple mt-1">347</p>
          </div>
          <div className="bg-dark-surface/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-pink-500" />
              <span className="font-semibold text-white">Current Streak</span>
            </div>
            <p className="text-sm text-gray-400">Days without downtime</p>
            <p className="text-2xl font-bold text-primary-pink mt-1">42 days</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
