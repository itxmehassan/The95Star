import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alexander Pierce",
      role: "CEO, TechVentures",
      content: "95 Star Chauffeur is the only service I trust for my executive team. Their punctuality and the pristine condition of their vehicles are truly unmatched.",
      rating: 5
    },
    {
      name: "Sophia Martinez",
      role: "Event Director",
      content: "We use 95 Star for all our high-profile clients. They provide a level of discretion and luxury that sets the standard in the industry. Highly recommended.",
      rating: 5
    },
    {
      name: "James Cavendish",
      role: "Frequent Traveler",
      content: "From the effortless booking process to the smooth ride to the airport, the experience is flawless every time. The chauffeurs are always professional.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">Testimonials</span>
        <h2 className="text-4xl font-serif font-bold mt-2 text-white">Client Experiences</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex text-emerald-500 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-silver-300 italic mb-8">"{t.content}"</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-charcoal-700 rounded-full flex items-center justify-center text-emerald-500 font-bold font-serif text-xl border border-charcoal-600">
                {t.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">{t.name}</h4>
                <p className="text-sm text-silver-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
