"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      // Check if response is actually JSON before parsing
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server error: API did not return JSON. The backend is either offline or the URL is incorrect.");
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      // Store auth info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect home
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549428587-8fbaf5c1f516?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity z-0"></div>
      
      <div className="glass-card p-10 max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Create Account</h1>
          <p className="text-silver-400">Join 95 Star for premium travel.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-silver-300 mb-2">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" 
              placeholder="John Doe" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-silver-300 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" 
              placeholder="john@example.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-silver-300 mb-2">Password</label>
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
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-8 text-center text-silver-400 text-sm">
          Already have an account? <a href="/login" className="text-emerald-500 hover:text-emerald-400 font-medium">Sign in</a>
        </p>
      </div>
    </div>
  );
}
