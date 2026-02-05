'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '@/components/Avatar/Avatar';
import StatsCard from '@/components/Stats/StatsCard';
import ActivityItem from '@/components/Activity/ActivityItem';
import PasswordGate from '@/components/PasswordGate';
import { activities } from '@/lib/data';
import { Heart, Zap, Smile, Moon, Sparkles } from 'lucide-react';

type Expression = 'happy' | 'thinking' | 'working' | 'charging' | 'sleeping';
type Mood = 'happy' | 'neutral' | 'sad';

function DashboardContent() {
  const [expression, setExpression] = useState<Expression>('happy');
  const [health, setHealth] = useState(85);
  const [energy, setEnergy] = useState(70);
  const [mood, setMood] = useState<Mood>('happy');
  const [currentActivity, setCurrentActivity] = useState('Ready to help!');

  // Update expression based on state
  useEffect(() => {
    if (energy < 20) {
      setExpression('sleeping');
      setCurrentActivity('Sleeping... zZz');
    } else if (health < 30) {
      setExpression('charging');
      setCurrentActivity('Charging up...');
    } else if (currentActivity === 'Working on a task...') {
      setExpression('working');
    } else {
      setExpression('happy');
    }

    // Update mood based on health and energy
    if (health > 70 && energy > 50) {
      setMood('happy');
    } else if (health < 40 || energy < 30) {
      setMood('sad');
    } else {
      setMood('neutral');
    }
  }, [health, energy, currentActivity]);

  const handleAction = (action: string) => {
    switch (action) {
      case 'feed':
        setHealth((prev) => Math.min(100, prev + 15));
        setEnergy((prev) => Math.min(100, prev + 10));
        setCurrentActivity('Having a snack! 🍎');
        setExpression('happy');
        setTimeout(() => setExpression('happy'), 2000);
        break;
      case 'play':
        setMood('happy');
        setEnergy((prev) => Math.max(0, prev - 10));
        setCurrentActivity('Playing games! 🎮');
        setExpression('happy');
        setTimeout(() => setCurrentActivity('Ready to help!'), 3000);
        break;
      case 'sleep':
        setCurrentActivity('Taking a nap... 💤');
        setExpression('sleeping');
        const napInterval = setInterval(() => {
          setEnergy((prev) => {
            if (prev >= 100) {
              clearInterval(napInterval);
              setExpression('happy');
              setCurrentActivity('Feeling refreshed! ✨');
              setTimeout(() => setCurrentActivity('Ready to help!'), 3000);
              return 100;
            }
            return Math.min(100, prev + 5);
          });
        }, 1000);
        break;
      case 'clean':
        setHealth((prev) => Math.min(100, prev + 5));
        setCurrentActivity('Fresh and clean! ✨');
        setExpression('happy');
        setTimeout(() => setCurrentActivity('Ready to help!'), 2000);
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent mb-2">
          NOSYT-AI Dashboard
        </h1>
        <p className="text-gray-400">Your digital companion</p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Avatar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]"
          >
            <Avatar
              expression={expression}
              health={health}
              energy={energy}
              mood={mood}
              size={220}
            />

            {/* Current Activity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center"
            >
              <div className="text-sm text-gray-400 mb-1">Currently</div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentActivity}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lg font-medium text-primary-cyan"
                >
                  {currentActivity}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAction('feed')}
                className="flex flex-col items-center gap-1 p-4 rounded-xl bg-gradient-to-br from-primary-pink/20 to-primary-pink/10 border border-primary-pink/30 hover:border-primary-pink/50 transition-all hover:shadow-lg hover:shadow-pink-500/20"
              >
                <Heart className="w-6 h-6 text-primary-pink" />
                <span className="text-sm">Feed</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAction('play')}
                className="flex flex-col items-center gap-1 p-4 rounded-xl bg-gradient-to-br from-primary-cyan/20 to-primary-cyan/10 border border-primary-cyan/30 hover:border-primary-cyan/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Sparkles className="w-6 h-6 text-primary-cyan" />
                <span className="text-sm">Play</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAction('sleep')}
                className="flex flex-col items-center gap-1 p-4 rounded-xl bg-gradient-to-br from-primary-purple/20 to-primary-purple/10 border border-primary-purple/30 hover:border-primary-purple/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Moon className="w-6 h-6 text-primary-purple" />
                <span className="text-sm">Sleep</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAction('clean')}
                className="flex flex-col items-center gap-1 p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                <Zap className="w-6 h-6 text-green-500" />
                <span className="text-sm">Clean</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Stats & Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Smile className="w-6 h-6 text-primary-cyan" />
              Quick Stats
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatsCard
                label="Health"
                value={health}
                unit="%"
                trend={health > 70 ? 'up' : health > 40 ? 'neutral' : 'down'}
                trendValue={2.5}
                delay={0}
              />
              <StatsCard
                label="Energy"
                value={energy}
                unit="%"
                trend={energy > 70 ? 'up' : energy > 40 ? 'neutral' : 'down'}
                trendValue={1.8}
                delay={0.1}
              />
              <StatsCard
                label="Conversations"
                value={12847}
                trend="up"
                trendValue={8.3}
                delay={0.2}
              />
              <StatsCard
                label="Uptime"
                value={98.7}
                unit="%"
                trend="neutral"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary-purple" />
              Recent Activity
            </h2>
            <div className="space-y-2">
              {activities.slice(0, 5).map((activity, index) => (
                <ActivityItem
                  key={activity.id}
                  {...activity}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Motivational Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <Sparkles className="w-6 h-6 text-primary-pink mx-auto mb-3" />
            <p className="text-lg text-gray-200 italic">
              &quot;Every conversation is an opportunity to learn and grow.&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <PasswordGate>
      <DashboardContent />
    </PasswordGate>
  );
}
