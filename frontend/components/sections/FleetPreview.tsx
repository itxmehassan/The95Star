import React from 'react';
import { Users, Briefcase } from 'lucide-react';

export default function FleetPreview() {
  const fleet = [
    {
      name: "Mercedes-Benz S-Class",
      type: "Sedan",
      capacity: { pass: 3, lug: 2 },
      img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop",
    },
    {
      name: "Cadillac Escalade",
      type: "SUV",
      capacity: { pass: 6, lug: 6 },
      img: "https://images.unsplash.com/photo-1563720225384-9c0f679246d8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Lincoln Stretch Limo",
      type: "Limo",
      capacity: { pass: 8, lug: 4 },
      img: "https://images.unsplash.com/photo-1549428587-8fbaf5c1f516?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 bg-[#09090b] w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-emerald-500 uppercase tracking-widest text-sm font-semibold">Our Vehicles</span>
            <h2 className="text-4xl font-serif font-bold mt-2 text-white">The 95 Star Fleet</h2>
          </div>
          <a href="/fleet" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors flex items-center mt-4 md:mt-0">
            View Full Fleet
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <div key={index} className="glass-card overflow-hidden group">
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${vehicle.img})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-charcoal-800/80 backdrop-blur-sm text-emerald-500 text-xs font-bold uppercase rounded-full border border-charcoal-600">{vehicle.type}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-4">{vehicle.name}</h3>
                <div className="flex gap-4 text-sm text-silver-400 mb-6">
                  <div className="flex items-center">
                    <Users size={16} className="text-emerald-500 mr-2" />
                    <span>{vehicle.capacity.pass}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={16} className="text-emerald-500 mr-2" />
                    <span>{vehicle.capacity.lug}</span>
                  </div>
                </div>
                <a href="/booking" className="block w-full py-2 text-center border border-charcoal-600 rounded-lg text-white hover:border-emerald-500 hover:text-emerald-500 transition-colors">Select Vehicle</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
