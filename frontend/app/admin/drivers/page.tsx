"use client";
import React, { useState } from 'react';

// Mock Data
const mockDrivers = [
  { id: 1, firstName: 'Maliz', lastName: 'Abbasi', email: 'malizabbasii@gmail.com', ssn: 'N/A', phone: '(771)-201-5351', phoneType: '@tmomail.net', dob: 'N/A', address: 'N/A' },
  { id: 2, firstName: 'Ahmed', lastName: 'N/A', email: 'assebot4545@yahoo.com', ssn: 'N/A', phone: '(301)-979-5333', phoneType: '@tmomail.net', dob: 'N/A', address: 'N/A' },
  { id: 3, firstName: 'Kashif', lastName: 'N/A', email: 'Sales@tysontransport.com', ssn: 'N/A', phone: '(703)-399-5039', phoneType: '@vtext.com', dob: 'N/A', address: 'N/A' },
  { id: 4, firstName: 'Jahan', lastName: 'N/A', email: 'Qayyumjahanzeb@gmail.com', ssn: 'N/A', phone: '(410)-501-0358', phoneType: '@tmomail.net', dob: 'N/A', address: 'N/A' },
  { id: 5, firstName: 'Abdul', lastName: 'N/A', email: 'abdulls382@gmail.com', ssn: 'N/A', phone: '(202)-763-0298', phoneType: '@tmomail.net', dob: 'N/A', address: 'N/A' },
];

export default function DriversPage() {
  const [drivers, setDrivers] = useState(mockDrivers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filterTab, setFilterTab] = useState('Range');
  const [selectedRange, setSelectedRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newDriver, setNewDriver] = useState({
    firstName: '',
    lastName: '',
    email: '',
    ssn: '',
    phone: '',
    phoneType: '',
    dob: '',
    address: ''
  });

  const ranges = ['All', 'Tomorrow', 'Today', 'Yesterday', 'Last 7 days', 'Last 31 days', 'Last 90 days', '12 months', 'Custom Range'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2023', '2024', '2025', '2026', '2027'];

  const handleCreateDriver = () => {
    if (!newDriver.firstName || !newDriver.email || !newDriver.phone) return;
    const id = drivers.length > 0 ? Math.max(...drivers.map(d => d.id)) + 1 : 1;
    
    const driverToAdd = {
      id,
      firstName: newDriver.firstName,
      lastName: newDriver.lastName || 'N/A',
      email: newDriver.email,
      ssn: newDriver.ssn || 'N/A',
      phone: newDriver.phone,
      phoneType: newDriver.phoneType || 'N/A',
      dob: newDriver.dob || 'N/A',
      address: newDriver.address || 'N/A'
    };
    
    setDrivers([driverToAdd, ...drivers]);
    setIsModalOpen(false);
    setNewDriver({ firstName: '', lastName: '', email: '', ssn: '', phone: '', phoneType: '', dob: '', address: '' });
  };

  const filteredDrivers = drivers.filter(driver => {
    const q = searchQuery.toLowerCase();
    return (
      driver.firstName.toLowerCase().includes(q) ||
      driver.lastName.toLowerCase().includes(q) ||
      driver.email.toLowerCase().includes(q) ||
      driver.phone.includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col mb-8 text-center relative">
        <h1 className="text-3xl font-serif font-bold text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-emerald-500 mx-auto">
          Drivers
        </h1>
      </div>

      {/* Top Controls */}
      <div className="flex justify-between items-center mb-6 relative">
        <div className="relative">
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center justify-between bg-charcoal-800 border border-charcoal-700 text-white rounded-lg pl-4 pr-3 py-2 focus:outline-none focus:border-emerald-500 w-48 hover:bg-charcoal-700 transition-colors"
          >
            <span>{selectedRange}</span>
            <svg className="fill-current h-4 w-4 text-silver-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </button>

          {/* Filters Dropdown */}
          {isFiltersOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-charcoal-800 border border-charcoal-700 rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="flex border-b border-charcoal-700">
                {['Range', 'Month', 'Year'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setFilterTab(tab)}
                    className={`flex-1 py-2 text-sm font-medium ${filterTab === tab ? 'bg-emerald-500 text-white' : 'text-silver-400 hover:text-white hover:bg-charcoal-700'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {filterTab === 'Range' && (
                <div className="p-4 max-h-64 overflow-y-auto">
                  {ranges.map(range => (
                    <label key={range} className="flex items-center space-x-3 mb-3 cursor-pointer group" onClick={() => { setSelectedRange(range); setIsFiltersOpen(false); }}>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedRange === range ? 'border-emerald-500' : 'border-silver-500 group-hover:border-emerald-500'}`}>
                        {selectedRange === range && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                      </div>
                      <span className="text-sm text-silver-300 group-hover:text-white">{range}</span>
                    </label>
                  ))}
                </div>
              )}
              {filterTab === 'Month' && (
                <div className="p-4 max-h-64 overflow-y-auto">
                  {months.map(month => (
                    <label key={month} className="flex items-center space-x-3 mb-3 cursor-pointer group" onClick={() => { setSelectedRange(month); setIsFiltersOpen(false); }}>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedRange === month ? 'border-emerald-500' : 'border-silver-500 group-hover:border-emerald-500'}`}>
                        {selectedRange === month && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                      </div>
                      <span className="text-sm text-silver-300 group-hover:text-white">{month}</span>
                    </label>
                  ))}
                </div>
              )}
              {filterTab === 'Year' && (
                <div className="p-4 max-h-64 overflow-y-auto">
                  {years.map(year => (
                    <label key={year} className="flex items-center space-x-3 mb-3 cursor-pointer group" onClick={() => { setSelectedRange(year); setIsFiltersOpen(false); }}>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedRange === year ? 'border-emerald-500' : 'border-silver-500 group-hover:border-emerald-500'}`}>
                        {selectedRange === year && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                      </div>
                      <span className="text-sm text-silver-300 group-hover:text-white">{year}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search drivers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" 
            />
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="glass-card rounded-xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-sm text-silver-300 whitespace-nowrap">
          <thead className="bg-charcoal-800 border-b border-charcoal-700 text-xs font-semibold text-silver-400 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">First Name</th>
              <th className="px-6 py-4">Last Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Social Security Number</th>
              <th className="px-6 py-4">Phone No</th>
              <th className="px-6 py-4">Phone No Type</th>
              <th className="px-6 py-4">Date of Birth</th>
              <th className="px-6 py-4">Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-800">
            {filteredDrivers.map((driver) => (
              <tr key={driver.id} className="hover:bg-charcoal-800/30 transition-colors">
                <td className="px-6 py-4 text-emerald-500 font-medium">{driver.firstName}</td>
                <td className="px-6 py-4 text-white">{driver.lastName}</td>
                <td className="px-6 py-4">{driver.email}</td>
                <td className="px-6 py-4">{driver.ssn}</td>
                <td className="px-6 py-4">{driver.phone}</td>
                <td className="px-6 py-4">{driver.phoneType}</td>
                <td className="px-6 py-4">{driver.dob}</td>
                <td className="px-6 py-4">{driver.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Driver Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-charcoal-900 border border-charcoal-700 rounded-xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh] shadow-2xl">
            {/* Modal Header */}
            <div className="bg-emerald-600 px-6 py-4 flex justify-between items-center shrink-0">
              <h2 className="text-white font-medium text-lg mx-auto pl-6">Create Driver</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">First Name<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <input type="text" value={newDriver.firstName} onChange={e => setNewDriver({...newDriver, firstName: e.target.value})} placeholder="Enter First Name" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Last Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <input type="text" value={newDriver.lastName} onChange={e => setNewDriver({...newDriver, lastName: e.target.value})} placeholder="Enter Last Name" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">Email<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <input type="email" value={newDriver.email} onChange={e => setNewDriver({...newDriver, email: e.target.value})} placeholder="Enter Email" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Social Security Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <input type="text" value={newDriver.ssn} onChange={e => setNewDriver({...newDriver, ssn: e.target.value})} placeholder="Enter Social Security Number" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">Phone No<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    </div>
                    <input type="tel" value={newDriver.phone} onChange={e => setNewDriver({...newDriver, phone: e.target.value})} placeholder="Enter Phone No" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Phone No Type<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select value={newDriver.phoneType} onChange={e => setNewDriver({...newDriver, phoneType: e.target.value})} className="appearance-none w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500">
                      <option value="">Select Type</option>
                      <option value="@tmomail.net">@tmomail.net</option>
                      <option value="@vtext.com">@vtext.com</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-silver-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-white mb-1">Date of Birth</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    </div>
                    {/* Note: In dark mode, color scheme dark is needed for native date picker icon */}
                    <input type="date" value={newDriver.dob} onChange={e => setNewDriver({...newDriver, dob: e.target.value})} className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 [color-scheme:dark]" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white mb-1">Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-silver-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    </div>
                    <input type="text" value={newDriver.address} onChange={e => setNewDriver({...newDriver, address: e.target.value})} placeholder="Type to select address" className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-silver-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-charcoal-800 flex justify-between items-center shrink-0 bg-charcoal-900">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex items-center px-4 py-2 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500/10 transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Cancel
              </button>
              <button 
                onClick={handleCreateDriver}
                disabled={!newDriver.firstName || !newDriver.email || !newDriver.phone}
                className="flex items-center px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors text-sm font-medium shadow-lg shadow-emerald-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
