import React from 'react';
import BookingWidget from '@/components/ui/BookingWidget';
import FleetPreview from '@/components/sections/FleetPreview';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-charcoal-900 z-0">
           {/* In a real scenario, use next/image here */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-charcoal-900/20 to-charcoal-800"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="text-emerald-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Welcome to 95 Star</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            The Ultimate <br/> Chauffeur Experience
          </h1>
          <p className="text-lg md:text-xl text-silver-300 mb-10 max-w-2xl mx-auto font-light">
            Experience uncompromised luxury, absolute discretion, and impeccable timing with our premium fleet of sedans and limousines.
          </p>
          <BookingWidget />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">What We Offer</span>
          <h2 className="text-4xl font-serif font-bold mt-2">Premium Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="glass-card p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l-3.5-3.5C11 6 9.5 5 8 5H4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h13.8c.8 0 1.4-.8 1.1-1.6l-1.1-2.2z"/><path d="M12 2v2"/><path d="m15.5 3.5-1.4 1.4"/><path d="M18 7h-2"/></svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Airport Transfers</h3>
            <p className="text-silver-400 text-sm leading-relaxed">Punctual and stress-free airport pick-ups and drop-offs. We track your flight to ensure we're there when you land.</p>
          </div>
          
          {/* Service Card 2 */}
          <div className="glass-card p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Corporate Travel</h3>
            <p className="text-silver-400 text-sm leading-relaxed">Make a lasting impression with our executive sedans. Perfect for meetings, roadshows, and VIP client transport.</p>
          </div>

          {/* Service Card 3 */}
          <div className="glass-card p-8 transition-transform hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Wedding & Events</h3>
            <p className="text-silver-400 text-sm leading-relaxed">Arrive in style on your special day. Our pristine luxury vehicles add an elegant touch to any celebration.</p>
          </div>
        </div>
      </section>

      {/* Fleet Preview Section */}
      <FleetPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-silver-300 mb-10 text-lg">Book your chauffeur today and enjoy a seamless, comfortable ride.</p>
          <a href="/booking" className="btn-primary">Reserve Now</a>
        </div>
      </section>
    </div>
  );
}
