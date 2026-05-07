"use client";
import React from 'react';
import { Users, Briefcase } from 'lucide-react';

export default function AdminFleet() {
  const fleet = [
    { id: 'V-001', name: "Mercedes-Benz S-Class", type: "Sedan", plates: "XYZ 123", status: "Available", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop" },
    { id: 'V-002', name: "Cadillac Escalade", type: "SUV", plates: "LXR 999", status: "On Trip", img: "https://images.unsplash.com/photo-1563720225384-9c0f679246d8?q=80&w=2070&auto=format&fit=crop" },
    { id: 'V-003', name: "Lincoln Stretch Limo", type: "Limo", plates: "VIP 001", status: "Maintenance", img: "https://images.unsplash.com/photo-1549428587-8fbaf5c1f516?q=80&w=2070&auto=format&fit=crop" },
    { id: 'V-004', name: "BMW 7 Series", type: "Sedan", plates: "ABC 789", status: "Available", img: "https://images.unsplash.com/photo-1555353540-64fd1b622868?q=80&w=2070&auto=format&fit=crop" },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Available': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'On Trip': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Maintenance': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return 'bg-charcoal-700 text-silver-300 border-charcoal-600';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-white">Fleet Management</h1>
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add Vehicle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((vehicle) => (
          <div key={vehicle.id} className="glass-card overflow-hidden group border border-charcoal-700 hover:border-emerald-500/50 transition-colors">
            <div className="h-48 relative overflow-hidden bg-charcoal-800">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${vehicle.img})` }}></div>
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${getStatusColor(vehicle.status)}`}>
                  {vehicle.status}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-serif text-white">{vehicle.name}</h3>
                <span className="text-xs font-mono text-silver-500 bg-charcoal-800 px-2 py-1 rounded">{vehicle.plates}</span>
              </div>
              <p className="text-sm text-emerald-500 mb-4">{vehicle.type} &bull; ID: {vehicle.id}</p>
              
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-charcoal-800 hover:bg-charcoal-700 text-white text-sm rounded-lg transition-colors border border-charcoal-700">Edit</button>
                <button className="flex-1 py-2 bg-charcoal-800 hover:bg-charcoal-700 text-white text-sm rounded-lg transition-colors border border-charcoal-700">Service Log</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
