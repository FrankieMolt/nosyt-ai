'use client';

import { useState, useEffect } from 'react';

export default function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('nosyt_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple "private" password for you and me
    if (password === 'nosyt-private') {
      sessionStorage.setItem('nosyt_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md border border-green-500/50 p-8 rounded-lg bg-black/50 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 animate-scan"></div>
        
        <h1 className="text-2xl font-bold mb-6 text-center glitch-text">ACCESS RESTRICTED</h1>
        <p className="text-center mb-8 text-green-400/70 text-sm">
          NOSYT-AI SECURE TERMINAL<br/>
          AUTHORIZED PERSONNEL ONLY
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="ENTER ACCESS CODE"
              className="w-full bg-black border border-green-500/30 p-3 rounded text-center focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-green-900"
              autoFocus
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-center text-xs animate-pulse">
              ACCESS DENIED. INVALID CREDENTIALS.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-900/20 border border-green-500/50 text-green-500 py-3 rounded hover:bg-green-500/10 transition-colors uppercase tracking-widest text-sm font-bold"
          >
            Authenticate
          </button>
        </form>

        <div className="mt-8 text-center text-[10px] text-green-900">
          SESSION ID: {Math.random().toString(36).substring(7).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
