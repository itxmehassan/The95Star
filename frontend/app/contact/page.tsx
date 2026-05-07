"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would call /api/contact here
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Contact Us</h1>
          <p className="text-silver-400 text-lg mb-12">
            Have a question or special request? Our support team is available 24/7 to assist you with your transportation needs.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-600 flex items-center justify-center text-emerald-500 mr-6 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Phone</h3>
                <p className="text-silver-400">+1 (555) 123-4567</p>
                <p className="text-silver-500 text-sm">Available 24/7 for bookings and support</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-600 flex items-center justify-center text-emerald-500 mr-6 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Email</h3>
                <p className="text-silver-400">contact@95star.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-600 flex items-center justify-center text-emerald-500 mr-6 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Headquarters</h3>
                <p className="text-silver-400">123 Luxury Avenue<br/>Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-10">
          {submitted ? (
             <div className="text-center py-12">
               <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
               </div>
               <h3 className="text-2xl font-serif text-white mb-2">Message Sent</h3>
               <p className="text-silver-400">Thank you for reaching out. A member of our team will contact you shortly.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-serif text-white mb-6">Send us a Message</h2>
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Your Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Message</label>
                <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
