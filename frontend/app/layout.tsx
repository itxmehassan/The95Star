import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

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
        <Navbar />
        
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
