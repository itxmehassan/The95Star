import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">About 95 Star</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Redefining Luxury Ground Transportation</h1>
          <p className="text-silver-400 leading-relaxed text-lg mb-6">
            Founded with a vision to provide unparalleled service, 95 Star Chauffeur has grown into the region's premier luxury transportation provider. We understand that our clients expect more than just a ride; they expect an experience.
          </p>
          <p className="text-silver-400 leading-relaxed text-lg mb-8">
            Our commitment to punctuality, discretion, and immaculate presentation sets us apart. Every chauffeur in our team undergoes rigorous training and background checks to ensure your safety and comfort.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="text-4xl font-serif font-bold text-emerald-500 mb-2">15+</div>
              <div className="text-sm text-silver-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-emerald-500 mb-2">10k+</div>
              <div className="text-sm text-silver-400 uppercase tracking-wider">Rides Completed</div>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden border border-charcoal-700">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549428587-8fbaf5c1f516?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-charcoal-900/30"></div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-bold text-white">Why Choose Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-charcoal-800 border border-charcoal-600 flex items-center justify-center text-emerald-500 mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Always On Time</h3>
          <p className="text-silver-400 text-sm">We arrive 15 minutes early as a standard practice. Your schedule is our priority.</p>
        </div>
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-charcoal-800 border border-charcoal-600 flex items-center justify-center text-emerald-500 mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Professional Chauffeurs</h3>
          <p className="text-silver-400 text-sm">Courteous, discreet, and highly trained professionals committed to your safety.</p>
        </div>
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-charcoal-800 border border-charcoal-600 flex items-center justify-center text-emerald-500 mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m4.93 19.07 14.14-14.14"/></svg>
          </div>
          <h3 className="text-xl font-medium text-white mb-3">Immaculate Fleet</h3>
          <p className="text-silver-400 text-sm">Our vehicles are detailed daily and maintained to the highest standards of perfection.</p>
        </div>
      </div>
    </div>
  );
}
