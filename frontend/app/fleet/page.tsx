import React from 'react';

export default function FleetPage() {
  const fleet = [
    {
      name: "Mercedes-Benz S-Class",
      type: "Sedan",
      capacity: { pass: 3, lug: 2 },
      img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop",
      desc: "The pinnacle of luxury sedans, offering supreme comfort and advanced technology for executive travel."
    },
    {
      name: "Cadillac Escalade",
      type: "SUV",
      capacity: { pass: 6, lug: 6 },
      img: "https://images.unsplash.com/photo-1563720225384-9c0f679246d8?q=80&w=2070&auto=format&fit=crop",
      desc: "A bold, spacious, and luxurious SUV perfect for group transport, roadshows, and airport transfers."
    },
    {
      name: "Lincoln Stretch Limo",
      type: "Limo",
      capacity: { pass: 8, lug: 4 },
      img: "https://images.unsplash.com/photo-1549428587-8fbaf5c1f516?q=80&w=2070&auto=format&fit=crop",
      desc: "The classic choice for weddings and special events, featuring a partition, mini-bar, and mood lighting."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">Our Vehicles</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">The 95 Star Fleet</h1>
        <p className="text-silver-400 mt-4 max-w-2xl mx-auto text-lg">Meticulously maintained and late-model luxury vehicles designed for your ultimate comfort and safety.</p>
      </div>

      <div className="space-y-16">
        {fleet.map((vehicle, index) => (
          <div key={index} className="glass-card overflow-hidden flex flex-col md:flex-row group">
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${vehicle.img})` }}></div>
              <div className="absolute inset-0 bg-charcoal-900/20"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-serif text-white">{vehicle.name}</h2>
                <span className="px-3 py-1 bg-charcoal-800 text-emerald-500 text-xs font-bold uppercase rounded-full border border-charcoal-600">{vehicle.type}</span>
              </div>
              <p className="text-silver-400 mb-6 leading-relaxed">{vehicle.desc}</p>
              <div className="flex gap-6 mb-8 border-y border-charcoal-600/50 py-4">
                <div className="flex items-center text-silver-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span>{vehicle.capacity.pass} Passengers</span>
                </div>
                <div className="flex items-center text-silver-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mr-2"><path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/><path d="M3 15h6"/><path d="M3 18h6"/></svg>
                  <span>{vehicle.capacity.lug} Luggage</span>
                </div>
              </div>
              <div>
                <a href="/booking" className="btn-outline">Book this Vehicle</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
