'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Trophy, RotateCcw } from 'lucide-react';

type GameState = 'menu' | 'playing' | 'won' | 'lost';

export default function PlayWithMePage() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [target, setTarget] = useState({ x: 50, y: 50 });
  const [clicks, setClicks] = useState(0);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nosyt-play-highscore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('lost');
    }
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  // Move target randomly
  const moveTarget = () => {
    setTarget({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    });
  };

  const handleClick = () => {
    if (gameState !== 'playing') return;

    setScore(prev => prev + 10);
    setClicks(prev => prev + 1);
    moveTarget();
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setClicks(0);
    setTimeLeft(30);
    moveTarget();
  };

  const resetGame = () => {
    setGameState('menu');
    setScore(0);
    setClicks(0);
    setTimeLeft(30);
  };

  // Update high score on win
  useEffect(() => {
    if (gameState === 'won' && score > highScore) {
      setHighScore(score);
      localStorage.setItem('nosyt-play-highscore', score.toString());
    }
  }, [gameState, score, highScore]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink bg-clip-text text-transparent mb-2">
          Play With Me!
        </h1>
        <p className="text-gray-400">Let&apos;s have some fun together! 🎮</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Menu Screen */}
        <AnimatePresence mode="wait">
          {gameState === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <Gamepad2 className="w-20 h-20 text-primary-purple mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Reaction Challenge</h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Test your reflexes! Click the target as fast as you can. You have 30 seconds.
              </p>

              <div className="glass rounded-xl p-4 mb-6 inline-block">
                <div className="text-sm text-gray-400 mb-1">High Score</div>
                <div className="text-4xl font-bold text-primary-cyan">{highScore}</div>
              </div>

              <div>
                <button
                  onClick={startGame}
                  className="px-8 py-3 bg-gradient-to-r from-primary-purple to-primary-pink rounded-xl text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  Start Game
                </button>
              </div>
            </motion.div>
          )}

          {/* Playing Screen */}
          {gameState === 'playing' && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* Stats Bar */}
              <div className="flex justify-between items-center mb-6">
                <div className="glass rounded-xl px-6 py-3">
                  <div className="text-sm text-gray-400">Score</div>
                  <div className="text-2xl font-bold text-primary-cyan">{score}</div>
                </div>
                <div className="glass rounded-xl px-6 py-3">
                  <div className="text-sm text-gray-400">Time</div>
                  <div className={`text-2xl font-bold ${timeLeft <= 5 ? 'text-red-500' : 'text-white'}`}>
                    {timeLeft}s
                  </div>
                </div>
                <button
                  onClick={resetGame}
                  className="glass rounded-xl px-6 py-3 hover:bg-dark-surface/50 transition-all"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
              </div>

              {/* Game Area */}
              <div
                className="relative glass rounded-2xl h-[500px] overflow-hidden cursor-crosshair"
              >
                {/* Target */}
                <motion.div
                  animate={{
                    x: `${target.x}%`,
                    y: `${target.y}%`,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 25 },
                    y: { type: 'spring', stiffness: 300, damping: 25 },
                    scale: { duration: 0.5, repeat: Infinity },
                  }}
                  onClick={handleClick}
                  className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: '50%', top: '50%' }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary-purple to-primary-pink rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </motion.div>

                {/* Click feedback */}
                <div className="absolute bottom-4 left-4 text-sm text-gray-500">
                  Clicks: {clicks}
                </div>
              </div>
            </motion.div>
          )}

          {/* Win Screen */}
          {gameState === 'won' && (
            <motion.div
              key="won"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Great Job!</h2>
              <p className="text-gray-400 mb-4">Final Score</p>
              <div className="text-6xl font-black text-primary-cyan mb-4">{score}</div>

              {score >= highScore && score > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-yellow-500/20 text-yellow-500 px-6 py-2 rounded-full inline-block mb-6"
                >
                  🎉 New High Score!
                </motion.div>
              )}

              <div className="flex justify-center gap-4">
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink rounded-xl text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  Play Again
                </button>
                <button
                  onClick={resetGame}
                  className="px-6 py-3 glass rounded-xl hover:bg-dark-surface/50 transition-all"
                >
                  Menu
                </button>
              </div>
            </motion.div>
          )}

          {/* Lost Screen */}
          {gameState === 'lost' && (
            <motion.div
              key="lost"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">⏰</div>
              <h2 className="text-3xl font-bold mb-4">Time&apos;s Up!</h2>
              <p className="text-gray-400 mb-4">Final Score</p>
              <div className="text-6xl font-black text-primary-purple mb-4">{score}</div>

              {score >= highScore && score > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-yellow-500/20 text-yellow-500 px-6 py-2 rounded-full inline-block mb-6"
                >
                  🎉 New High Score!
                </motion.div>
              )}

              <div className="flex justify-center gap-4">
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink rounded-xl text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  Try Again
                </button>
                <button
                  onClick={resetGame}
                  className="px-6 py-3 glass rounded-xl hover:bg-dark-surface/50 transition-all"
                >
                  Menu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
