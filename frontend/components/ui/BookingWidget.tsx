"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Flag, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BookingWidget() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('one-way');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSearch = () => {
    const query = new URLSearchParams({
      type: activeTab,
      pickup,
      dropoff: activeTab === 'one-way' ? dropoff : '',
      date,
      time
    }).toString();
    router.push(`/booking?${query}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 md:mt-12 bg-[#0a0a0a]/80 backdrop-blur-md border border-charcoal-800 rounded-2xl p-4 md:p-6 text-left shadow-2xl">
      {/* Tabs */}
      <div className="flex items-center border-b border-charcoal-800 mb-6 pb-0">
        <button 
          onClick={() => setActiveTab('one-way')}
          className={`flex-1 sm:flex-none flex justify-center sm:justify-start items-center space-x-2 text-sm font-medium transition-colors relative pb-4 ${activeTab === 'one-way' ? 'text-white' : 'text-charcoal-400 hover:text-silver-300'}`}
        >
          <MapPin size={16} />
          <span>One Way</span>
          {activeTab === 'one-way' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"></span>
          )}
        </button>
        <button 
          onClick={() => setActiveTab('hourly')}
          className={`flex-1 sm:flex-none flex justify-center sm:justify-start items-center space-x-2 text-sm font-medium transition-colors relative pb-4 sm:ml-8 ${activeTab === 'hourly' ? 'text-white' : 'text-charcoal-400 hover:text-silver-300'}`}
        >
          <Clock size={16} />
          <span>Hourly</span>
          {activeTab === 'hourly' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"></span>
          )}
        </button>
      </div>

      {/* Inputs */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="relative w-full lg:w-1/4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
            <MapPin size={18} />
          </div>
          <input 
            type="text" 
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Pick-up Location" 
            className="w-full bg-[#121212] border border-charcoal-800 rounded-lg pl-10 pr-4 py-3.5 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        {activeTab === 'one-way' && (
          <div className="relative w-full lg:w-1/4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
              <Flag size={18} />
            </div>
            <input 
              type="text" 
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Drop-off Location" 
              className="w-full bg-[#121212] border border-charcoal-800 rounded-lg pl-10 pr-4 py-3.5 text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        )}

        <div className="relative w-full lg:w-1/5">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
            <Calendar size={18} />
          </div>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#121212] border border-charcoal-800 rounded-lg pl-10 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          />
        </div>

        <div className="relative w-full lg:w-1/5">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-400">
            <Clock size={18} />
          </div>
          <input 
            type="time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-[#121212] border border-charcoal-800 rounded-lg pl-10 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          />
        </div>

        <div className="w-full lg:flex-1">
          <button onClick={handleSearch} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
            <span>Search</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
