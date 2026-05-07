import React from 'react';

export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">A Trusted Partner Network</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Travel Agencies</h1>
          <p className="text-silver-400 leading-relaxed text-lg mb-8">
            We offer lucrative commission structures and seamless integration for travel agencies and concierges. Book reliable luxury transport for your clients globally with confidence. Our dedicated agency portal makes managing reservations effortless.
          </p>
          <a href="/booking" className="btn-primary inline-block">Book This Service</a>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="glass-card overflow-hidden p-2 rounded-2xl">
            <div className="w-full h-[400px] bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }}></div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Unmatched Safety</h3>
          <p className="text-silver-400 text-sm">Rigorous vehicle inspections and highly trained professionals ensure your absolute safety on every journey.</p>
        </div>
        <div className="glass-card p-8">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Absolute Punctuality</h3>
          <p className="text-silver-400 text-sm">We value your time. Our advanced routing and tracking systems guarantee we are always early.</p>
        </div>
        <div className="glass-card p-8">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <h3 className="text-xl font-medium mb-3 text-white">Premium Experience</h3>
          <p className="text-silver-400 text-sm">Complimentary amenities, climate control, and supreme privacy in the world's finest vehicles.</p>
        </div>
      </div>
    </div>
  );
}
