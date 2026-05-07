"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store auth info (for demo purposes using localStorage)
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect based on role
      if (data.user.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity z-0"></div>
      
      <div className="glass-card p-10 max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-silver-400">Sign in to your 95 Star account.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-silver-300 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" 
              placeholder="admin@95star.com" 
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-silver-300">Password</label>
              <a href="#" className="text-xs text-emerald-500 hover:text-emerald-400">Forgot password?</a>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" 
              placeholder="••••••••" 
            />
          </div>
          
          <button type="submit" disabled={loading} className="w-full btn-primary py-3">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-center text-silver-400 text-sm">
          Don't have an account? <a href="/signup" className="text-emerald-500 hover:text-emerald-400 font-medium">Create one</a>
        </p>
      </div>
    </div>
  );
}
