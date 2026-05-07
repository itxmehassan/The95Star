import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: "Airport Transfers",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l-3.5-3.5C11 6 9.5 5 8 5H4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h13.8c.8 0 1.4-.8 1.1-1.6l-1.1-2.2z"/><path d="M12 2v2"/><path d="m15.5 3.5-1.4 1.4"/><path d="M18 7h-2"/></svg>,
      desc: "Experience a seamless journey to and from the airport. Our chauffeurs monitor your flight status to ensure timely pick-ups, assisting with luggage and providing a relaxing environment after a long flight."
    },
    {
      title: "Corporate Travel",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
      desc: "Designed for executives who value time and comfort. We offer reliable, discreet, and professional transportation for meetings, corporate events, and daily commutes."
    },
    {
      title: "Wedding Limousines",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
      desc: "Make your special day even more memorable with our elegant stretch limousines and luxury sedans. We provide red-carpet service, complimentary champagne, and immaculate vehicles."
    },
    {
      title: "Event Transportation",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
      desc: "Arrive in style at galas, premieres, concerts, and sporting events. Enjoy the event without worrying about parking or traffic; your chauffeur will be waiting for you."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">Excellence in Motion</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">Our Premium Services</h1>
        <p className="text-silver-400 mt-4 max-w-2xl mx-auto text-lg">Tailored transportation solutions designed to meet the highest standards of luxury, reliability, and professionalism.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glass-card p-10 group hover:border-emerald-500/50 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h2 className="text-2xl font-serif text-white mb-4">{service.title}</h2>
            <p className="text-silver-400 leading-relaxed text-lg">{service.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center glass-card p-12 bg-emerald-900/10 border-emerald-900/30">
        <h2 className="text-3xl font-serif text-white mb-6">Need a Custom Service?</h2>
        <p className="text-silver-300 mb-8 max-w-2xl mx-auto">We accommodate special requests, long-distance travel, and multi-day bookings. Contact us to discuss your specific requirements.</p>
        <a href="/contact" className="btn-primary">Contact Our Team</a>
      </div>
    </div>
  );
}
