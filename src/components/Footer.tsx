import React from 'react';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xl font-serif-display font-bold text-white tracking-tight">
              {FARM_CONTACT.name}
            </span>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Dedicated to producing fresh, unadulterated cow &amp; buffalo milk, pure desi ghee, butter, and curd in Old Gardhi Mendu, Delhi. Raised on clean green fodder and ethical care.
            </p>
            <div className="text-xs text-stone-500">
              FSSAI &amp; Farm Sanitation Standards Adherent
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">Our Products</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Product Photos</a>
              </li>
              <li>
                <a href="#breeds" className="hover:text-amber-400 transition-colors">Cattle Breeds</a>
              </li>
              <li>
                <a href="#feed" className="hover:text-amber-400 transition-colors">Feed &amp; Fodder</a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-amber-400 transition-colors">Infrastructure</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Farm</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Dairy Offerings
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Fresh Milk (Raw Whole Milk)</li>
              <li>Cow Milk (Desi Cow Milk)</li>
              <li>Buffalo Milk (Murrah High Fat)</li>
              <li>Fresh Curd (Matka Dahi)</li>
              <li>Farm Butter (Desi Makhan)</li>
              <li>Dairy Ghee (Slow-Simmered Desi Ghee)</li>
              <li>Fresh Cream (Skimmed Malai)</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Farm Location &amp; Hours
            </div>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{FARM_CONTACT.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Daily: {FARM_CONTACT.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${FARM_CONTACT.phone}`}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  {FARM_CONTACT.formattedPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block py-2 px-3 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                Send Farm Enquiry
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Choudhary Dairy Farm. Old Gardhi Mendu, Delhi. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Pure Dairy Ethics</span>
            <span aria-hidden="true">·</span>
            <span>No Artificial Hormones</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="text-stone-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
