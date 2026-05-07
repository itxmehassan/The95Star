"use client";
import React, { useState } from 'react';

export default function AdminBookings() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-white">Bookings Management</h1>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Create Booking
        </button>
      </div>

      <div className="glass-card rounded-xl overflow-hidden">
        {/* Tabs and Filters */}
        <div className="px-6 py-4 border-b border-charcoal-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex space-x-2">
            {['all', 'pending', 'confirmed', 'completed'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${activeTab === tab ? 'bg-charcoal-700 text-white' : 'text-silver-400 hover:text-white hover:bg-charcoal-800'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-500"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" placeholder="Search bookings..." className="bg-charcoal-800 border border-charcoal-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-full sm:w-64" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-silver-300">
            <thead className="bg-charcoal-800/50 text-xs uppercase text-silver-400">
              <tr>
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Service & Route</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              {/* Mock Row 1 */}
              <tr className="hover:bg-charcoal-800/30 transition-colors group">
                <td className="px-6 py-4 font-mono">#BK-9501</td>
                <td className="px-6 py-4">
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-xs text-silver-500">john@example.com</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">Airport Transfer</p>
                  <p className="text-xs text-silver-500">JFK &rarr; Manhattan</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">May 06, 2026</p>
                  <p className="text-xs text-silver-500">14:30 EST</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-medium border border-amber-500/20">Pending</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-silver-400 hover:text-emerald-500 mr-3">Edit</button>
                  <button className="text-silver-400 hover:text-red-500">Cancel</button>
                </td>
              </tr>
              {/* Mock Row 2 */}
              <tr className="hover:bg-charcoal-800/30 transition-colors group">
                <td className="px-6 py-4 font-mono">#BK-9499</td>
                <td className="px-6 py-4">
                  <p className="text-white font-medium">Sarah Miller</p>
                  <p className="text-xs text-silver-500">sarah@corp.net</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">Hourly Hire (4 Hrs)</p>
                  <p className="text-xs text-silver-500">Beverly Hills Area</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">May 05, 2026</p>
                  <p className="text-xs text-silver-500">09:00 PST</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-medium border border-emerald-500/20">Completed</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-silver-400 hover:text-emerald-500 mr-3">View</button>
                </td>
              </tr>
              {/* Mock Row 3 */}
              <tr className="hover:bg-charcoal-800/30 transition-colors group">
                <td className="px-6 py-4 font-mono">#BK-9498</td>
                <td className="px-6 py-4">
                  <p className="text-white font-medium">Robert Taylor</p>
                  <p className="text-xs text-silver-500">rtaylor@agency.com</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">Corporate Travel</p>
                  <p className="text-xs text-silver-500">SFO &rarr; San Jose</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">May 04, 2026</p>
                  <p className="text-xs text-silver-500">18:15 PST</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-medium border border-blue-500/20">Confirmed</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-silver-400 hover:text-emerald-500 mr-3">Edit</button>
                  <button className="text-silver-400 hover:text-red-500">Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-charcoal-800 flex justify-between items-center">
          <p className="text-sm text-silver-500">Showing 1 to 3 of 1,284 results</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded bg-charcoal-800 text-silver-400 hover:bg-charcoal-700 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 rounded bg-charcoal-800 text-silver-400 hover:bg-charcoal-700">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
