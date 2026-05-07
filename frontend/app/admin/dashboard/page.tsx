"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simple mock auth check
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.role !== 'admin') {
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  }, [router]);

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-white mb-8">Dashboard Overview</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="glass-card p-6 border-t-2 border-emerald-500">
          <p className="text-silver-400 text-sm font-medium mb-1">Total Bookings</p>
          <p className="text-3xl font-bold text-white">1,284</p>
          <p className="text-emerald-500 text-xs mt-2 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
             +12% this month
          </p>
        </div>
        <div className="glass-card p-6 border-t-2 border-blue-500">
          <p className="text-silver-400 text-sm font-medium mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-white">$145k</p>
          <p className="text-emerald-500 text-xs mt-2 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
             +8% this month
          </p>
        </div>
        <div className="glass-card p-6 border-t-2 border-purple-500">
          <p className="text-silver-400 text-sm font-medium mb-1">Active Vehicles</p>
          <p className="text-3xl font-bold text-white">24</p>
          <p className="text-silver-500 text-xs mt-2 flex items-center">
             Out of 30 total
          </p>
        </div>
        <div className="glass-card p-6 border-t-2 border-amber-500">
          <p className="text-silver-400 text-sm font-medium mb-1">New Users</p>
          <p className="text-3xl font-bold text-white">89</p>
          <p className="text-emerald-500 text-xs mt-2 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
             +24% this month
          </p>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-charcoal-800 flex justify-between items-center">
          <h2 className="text-lg font-medium text-white">Recent Bookings</h2>
          <button className="text-sm text-emerald-500 hover:text-emerald-400">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-silver-300">
            <thead className="bg-charcoal-800/50 text-xs uppercase text-silver-400">
              <tr>
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              <tr className="hover:bg-charcoal-800/30 transition-colors">
                <td className="px-6 py-4">#BK-9501</td>
                <td className="px-6 py-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-charcoal-700 flex items-center justify-center mr-3 text-white font-medium">JD</div>
                  John Doe
                </td>
                <td className="px-6 py-4">Airport Transfer</td>
                <td className="px-6 py-4">Today, 2:30 PM</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-medium border border-amber-500/20">Pending</span>
                </td>
              </tr>
              <tr className="hover:bg-charcoal-800/30 transition-colors">
                <td className="px-6 py-4">#BK-9499</td>
                <td className="px-6 py-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-charcoal-700 flex items-center justify-center mr-3 text-white font-medium">SM</div>
                  Sarah Miller
                </td>
                <td className="px-6 py-4">Hourly Hire (SUV)</td>
                <td className="px-6 py-4">Yesterday</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-medium border border-emerald-500/20">Completed</span>
                </td>
              </tr>
              <tr className="hover:bg-charcoal-800/30 transition-colors">
                <td className="px-6 py-4">#BK-9498</td>
                <td className="px-6 py-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-charcoal-700 flex items-center justify-center mr-3 text-white font-medium">RT</div>
                  Robert Taylor
                </td>
                <td className="px-6 py-4">Corporate Travel</td>
                <td className="px-6 py-4">May 4, 2026</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-medium border border-blue-500/20">In Progress</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
