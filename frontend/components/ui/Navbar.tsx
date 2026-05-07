"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled || isOpen ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-charcoal-800' : 'bg-transparent'} px-6 py-4 flex justify-between items-center`}>
        <a href="/" className="text-2xl font-serif font-bold text-white tracking-wider relative z-50">
          95 STAR<span className="text-emerald-500">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 text-sm uppercase tracking-widest text-silver-300 items-center">
          <a href="/" className="hover:text-emerald-500 transition-colors py-2">Home</a>
          
          {/* Services Dropdown */}
          <div className="group relative py-2">
            <a href="/services" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
              Services
              <ChevronDown size={14} />
            </a>
            <div className="absolute left-0 top-full mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-charcoal-900 border border-charcoal-700 rounded-lg shadow-xl py-2 z-50 flex flex-col">
              <a href="/services/city-to-city" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">City to City Rides</a>
              <a href="/services/airport-transfer" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Airport Transfer</a>
              <a href="/services/hourly-hire" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Hourly Hire</a>
              <a href="/services/chauffeur" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Chauffeur Service</a>
              <a href="/services/limousine" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Limousine Service</a>
            </div>
          </div>

          {/* Business Dropdown */}
          <div className="group relative py-2">
            <a href="/business" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
              Business
              <ChevronDown size={14} />
            </a>
            <div className="absolute left-0 top-full mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-charcoal-900 border border-charcoal-700 rounded-lg shadow-xl py-2 z-50 flex flex-col">
              <a href="/business/overview" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Overview</a>
              <a href="/business/corporations" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Corporations</a>
              <a href="/business/travel-agencies" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Travel Agencies</a>
              <a href="/business/strategic-partnerships" className="px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors normal-case tracking-normal">Strategic Partnerships</a>
            </div>
          </div>

          <a href="/fleet" className="hover:text-emerald-500 transition-colors py-2">Fleet</a>
          <a href="/chauffeurs" className="hover:text-emerald-500 transition-colors py-2">Chauffeurs</a>
          <a href="/about" className="hover:text-emerald-500 transition-colors py-2">About</a>
          <a href="/contact" className="hover:text-emerald-500 transition-colors py-2">Contact</a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-4">
          <a href="/login" className="text-sm font-medium text-silver-300 hover:text-emerald-500 transition-colors uppercase tracking-widest hidden md:block">Log In</a>
          <a href="/booking" className="btn-primary !py-2 !px-6 text-sm">Book Now</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-silver-300 hover:text-emerald-500 transition-colors relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-40 lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col h-full justify-center px-8 pt-20 pb-10 overflow-y-auto">
          <div className="flex flex-col space-y-6 text-xl tracking-widest uppercase text-silver-300 font-medium">
            <a href="/" className="hover:text-emerald-500 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            
            {/* Mobile Services Dropdown */}
            <div className="flex flex-col border-b border-charcoal-800 pb-2">
              <button 
                onClick={() => toggleDropdown('services')} 
                className="flex justify-between items-center hover:text-emerald-500 transition-colors w-full text-left"
              >
                <span>Services</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-emerald-500' : ''}`} />
              </button>
              
              <div className={`flex flex-col space-y-4 overflow-hidden transition-all duration-300 ${activeDropdown === 'services' ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/services/city-to-city" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> City to City</a>
                <a href="/services/airport-transfer" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Airport Transfer</a>
                <a href="/services/hourly-hire" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Hourly Hire</a>
                <a href="/services/chauffeur" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Chauffeur Service</a>
                <a href="/services/limousine" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Limousine Service</a>
              </div>
            </div>

            {/* Mobile Business Dropdown */}
            <div className="flex flex-col border-b border-charcoal-800 pb-2">
              <button 
                onClick={() => toggleDropdown('business')} 
                className="flex justify-between items-center hover:text-emerald-500 transition-colors w-full text-left"
              >
                <span>Business</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'business' ? 'rotate-180 text-emerald-500' : ''}`} />
              </button>
              
              <div className={`flex flex-col space-y-4 overflow-hidden transition-all duration-300 ${activeDropdown === 'business' ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/business/overview" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Overview</a>
                <a href="/business/corporations" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Corporations</a>
                <a href="/business/travel-agencies" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Travel Agencies</a>
                <a href="/business/strategic-partnerships" className="text-base text-silver-400 pl-4 hover:text-emerald-500 flex items-center" onClick={() => setIsOpen(false)}><ChevronRight size={14} className="mr-2"/> Strategic Partnerships</a>
              </div>
            </div>

            <a href="/fleet" className="hover:text-emerald-500 transition-colors" onClick={() => setIsOpen(false)}>Fleet</a>
            <a href="/chauffeurs" className="hover:text-emerald-500 transition-colors" onClick={() => setIsOpen(false)}>Chauffeurs</a>
            <a href="/about" className="hover:text-emerald-500 transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="/contact" className="hover:text-emerald-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            
            <div className="pt-8 flex flex-col space-y-4 mt-auto">
              <a href="/login" className="btn-outline w-full text-center tracking-widest text-sm" onClick={() => setIsOpen(false)}>LOG IN</a>
              <a href="/booking" className="btn-primary w-full text-center tracking-widest text-sm" onClick={() => setIsOpen(false)}>BOOK NOW</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
