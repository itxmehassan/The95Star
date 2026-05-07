"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function BookingForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [bestMatch, setBestMatch] = useState('');
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    vehicleType: 'Sedan',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });

  useEffect(() => {
    const pickup = searchParams.get('pickup');
    const dropoff = searchParams.get('dropoff');
    const date = searchParams.get('date');
    const time = searchParams.get('time');
    const type = searchParams.get('type');

    if (pickup || dropoff || date || time) {
      const recommendedVehicle = type === 'hourly' ? 'SUV' : 'Sedan';
      setFormData(prev => ({
        ...prev,
        pickupLocation: pickup || '',
        dropoffLocation: dropoff || '',
        date: date || '',
        time: time || '',
        vehicleType: recommendedVehicle
      }));
      setBestMatch(recommendedVehicle);
      setStep(2); // Jump straight to vehicle selection
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to backend
    console.log('Submitting booking:', formData);
    setStep(4); // Success step
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Book Your Ride</h1>
        <p className="text-silver-400">Complete the form below to secure your luxury transportation.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-charcoal-600 -z-10 -translate-y-1/2"></div>
        {[1, 2, 3].map((num) => (
          <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= num ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-charcoal-700 text-charcoal-400 border border-charcoal-600'}`}>
            {num}
          </div>
        ))}
      </div>

      <div className="glass-card p-8">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif mb-6 text-white">Ride Details</h2>
            <div>
              <label className="block text-sm font-medium text-silver-300 mb-2">Pickup Location</label>
              <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="Enter pickup address or airport" />
            </div>
            <div>
              <label className="block text-sm font-medium text-silver-300 mb-2">Dropoff Location</label>
              <input type="text" name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Enter dropoff address" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Time</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button onClick={nextStep} className="btn-primary">Next Step</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-white">Vehicle Selection</h2>
            </div>
            
            <div className="space-y-4">
              {['Sedan', 'SUV', 'Limo'].map((type) => (
                <label key={type} className={`block p-4 border rounded-xl cursor-pointer transition-all relative ${formData.vehicleType === type ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]' : 'border-charcoal-600 hover:border-charcoal-400 bg-charcoal-800/50'}`}>
                  {bestMatch === type && (
                    <span className="absolute -top-3 right-4 bg-emerald-500 text-charcoal-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Best Match
                    </span>
                  )}
                  <div className="flex items-center">
                    <input type="radio" name="vehicleType" value={type} checked={formData.vehicleType === type} onChange={handleChange} className="w-4 h-4 text-emerald-500 bg-charcoal-800 border-charcoal-600 focus:ring-emerald-500 focus:ring-offset-charcoal-800" />
                    <span className="ml-3 font-medium text-white text-lg">{type}</span>
                  </div>
                </label>
              ))}
            </div>
            <div className="pt-4 flex justify-between">
              <button onClick={prevStep} className="btn-outline">Back</button>
              <button onClick={nextStep} className="btn-primary">Next Step</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif mb-6 text-white">Contact Information</h2>
            <div>
              <label className="block text-sm font-medium text-silver-300 mb-2">Full Name</label>
              <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-silver-300 mb-2">Email Address</label>
              <input type="email" name="customerEmail" value={formData.customerEmail} onChange={handleChange} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-silver-300 mb-2">Phone Number</label>
              <input type="tel" name="customerPhone" value={formData.customerPhone} onChange={handleChange} className="w-full bg-charcoal-800 border border-charcoal-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="pt-4 flex justify-between">
              <button onClick={prevStep} className="btn-outline">Back</button>
              <button onClick={handleSubmit} className="btn-primary">Confirm Booking</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            </div>
            <h2 className="text-3xl font-serif text-white mb-4">Booking Confirmed!</h2>
            <p className="text-silver-400 mb-8">Thank you for choosing 95 Star. We have sent a confirmation email with your ride details.</p>
            <a href="/" className="btn-primary">Return Home</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white font-serif">Loading booking...</div>}>
      <BookingForm />
    </Suspense>
  );
}
