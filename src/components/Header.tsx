import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData.ts';

interface HeaderProps {
  onOpenEnquiry: (productName?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Photos', href: '#gallery' },
    { name: 'Breeds', href: '#breeds' },
    { name: 'Feed & Care', href: '#feed' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Quick Announcement Bar: Location & Operational Timings */}
      <aside aria-label="Farm Timings & Location" className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 border-b border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{FARM_CONTACT.address}</span>
            </span>
            <span className="hidden sm:inline-block text-stone-600">·</span>
            <span className="hidden sm:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Daily: {FARM_CONTACT.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400 hidden md:inline">Direct Enquiries:</span>
            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="text-amber-400 font-semibold hover:text-amber-300 flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span>{FARM_CONTACT.formattedPhone}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navigation Bar (Top Bar Contract: 3 Zones) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single Brand Wordmark in display face */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-serif-display font-bold tracking-tight text-emerald-950 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
          >
            Choudhary Dairy Farm
          </a>

          {/* Zone 2: Clean 4–6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-700">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors py-1 relative hover:text-emerald-900 ${
                  activeSection === item.href.slice(1)
                    ? 'text-emerald-900 font-semibold'
                    : 'text-stone-600'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${FARM_CONTACT.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors whitespace-nowrap"
              title="Call Choudhary Dairy Farm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm whitespace-nowrap"
            >
              Make Enquiry
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-emerald-950 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-stone-800 hover:bg-stone-50 hover:text-emerald-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href={`tel:${FARM_CONTACT.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-900 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call {FARM_CONTACT.formattedPhone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Submit Enquiry Form
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
