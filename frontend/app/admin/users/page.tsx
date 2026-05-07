"use client";
import React from 'react';

export default function AdminUsers() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-white">User Management</h1>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
          Invite User
        </button>
      </div>

      <div className="glass-card rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-charcoal-800 flex justify-end">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-500"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" placeholder="Search by name or email..." className="bg-charcoal-800 border border-charcoal-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-full sm:w-64" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-silver-300">
            <thead className="bg-charcoal-800/50 text-xs uppercase text-silver-400">
              <tr>
                <th className="px-6 py-4 font-medium">User Info</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Join Date</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              <tr className="hover:bg-charcoal-800/30 transition-colors">
                <td className="px-6 py-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold mr-4 border border-emerald-500/30">
                    A
                  </div>
                  <div>
                    <p className="text-white font-medium">Admin User</p>
                    <p className="text-xs text-silver-500">admin@95star.com</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded text-xs font-bold tracking-wider">ADMIN</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-emerald-500 text-xs">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div> Active
                  </div>
                </td>
                <td className="px-6 py-4 text-silver-400">May 01, 2026</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-silver-400 hover:text-emerald-500">Edit</button>
                </td>
              </tr>
              <tr className="hover:bg-charcoal-800/30 transition-colors">
                <td className="px-6 py-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-charcoal-700 text-silver-300 flex items-center justify-center font-bold mr-4 border border-charcoal-600">
                    JD
                  </div>
                  <div>
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-xs text-silver-500">john@example.com</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-charcoal-700 text-silver-300 rounded text-xs font-bold tracking-wider">USER</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-emerald-500 text-xs">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div> Active
                  </div>
                </td>
                <td className="px-6 py-4 text-silver-400">May 06, 2026</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-silver-400 hover:text-emerald-500 mr-3">Edit</button>
                  <button className="text-silver-400 hover:text-red-500">Suspend</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
