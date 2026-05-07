"use client";
import React from 'react';

export default function AdminSettings() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-white mb-2">Platform Settings</h1>
        <p className="text-silver-400">Manage global application settings, billing, and company profile.</p>
      </div>

      <div className="space-y-8">
        {/* Company Profile Section */}
        <section className="glass-card p-8 rounded-xl border border-charcoal-800">
          <h2 className="text-xl font-medium text-white mb-6 border-b border-charcoal-800 pb-4">Company Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-silver-400 mb-2">Company Name</label>
              <input type="text" defaultValue="95 Star Chauffeur" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-silver-400 mb-2">Support Email</label>
              <input type="email" defaultValue="support@95star.com" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-silver-400 mb-2">Contact Phone</label>
              <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-silver-400 mb-2">Address</label>
              <input type="text" defaultValue="123 Luxury Ave, Beverly Hills, CA" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors border border-charcoal-700 text-sm">Save Profile</button>
          </div>
        </section>

        {/* Booking Preferences Section */}
        <section className="glass-card p-8 rounded-xl border border-charcoal-800">
          <h2 className="text-xl font-medium text-white mb-6 border-b border-charcoal-800 pb-4">Booking Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-silver-400 mb-2">Default Currency</label>
              <select className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-silver-400 mb-2">Minimum Notice Time (Hours)</label>
              <input type="number" defaultValue="4" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              <p className="text-xs text-silver-500 mt-1">Lead time required for new bookings.</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="btn-primary py-2 px-6 text-sm">Save Preferences</button>
          </div>
        </section>
      </div>
    </div>
  );
}
