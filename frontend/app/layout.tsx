import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "95 Star Chauffeur | Luxury Transportation",
  description: "Premium luxury chauffeur and limousine service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {/* Navbar placeholder */}
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass-card !rounded-none !border-x-0 !border-t-0 px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-white tracking-wider">95 STAR<span className="text-emerald-500">.</span></div>
          <div className="hidden lg:flex space-x-6 xl:space-x-8 text-sm uppercase tracking-widest text-silver-300 items-center">
            <a href="/" className="hover:text-emerald-500 transition-colors py-2">Home</a>
            
            {/* Services Dropdown */}
            <div className="group relative py-2">
              <a href="/services" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-sm font-medium text-silver-300 hover:text-emerald-500 transition-colors uppercase tracking-widest hidden md:block">Log In</a>
            <a href="/booking" className="btn-primary !py-2 !px-6 text-sm">Book Now</a>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer placeholder */}
        <footer className="bg-charcoal-900 border-t border-charcoal-700 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">95 STAR<span className="text-emerald-500">.</span></h3>
              <p className="text-silver-400 text-sm">Experience the ultimate in luxury ground transportation. Reliable, discreet, and always on time.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-silver-400 text-sm">
                <li>Airport Transfers</li>
                <li>Corporate Travel</li>
                <li>Wedding Limousines</li>
                <li>Event Transportation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-silver-400 text-sm">
                <li>About Us</li>
                <li>Our Fleet</li>
                <li>Contact</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-silver-400 text-sm">
                <li>contact@95star.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Luxury Ave, Beverly Hills, CA</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
