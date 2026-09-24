import React, { useMemo } from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData.ts';
import { FarmIllustration } from './FarmIllustrations.tsx';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  // Check if current time is within 5:00 AM - 7:00 PM
  const isOpen = useMemo(() => {
    const now = new Date();
    // Default to Indian Standard Time (UTC+5:30)
    const utcMinutes = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istDate = new Date(utcMinutes + (3600000 * 5.5));
    const hours = istDate.getHours();
    return hours >= 5 && hours < 19;
  }, []);

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust and Location Kickers (Clean text with typographic separators, anti-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-emerald-900">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Old Gardhi Mendu, Delhi</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1.5 text-stone-600">
                <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Open Daily 5:00 AM – 7:00 PM</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className={`inline-flex items-center gap-1 text-xs font-semibold ${isOpen ? 'text-emerald-700' : 'text-amber-800'}`}>
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'}`} />
                <span>{isOpen ? 'Open Now for Milk Collection' : 'Opens Daily at 5:00 AM'}</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif-display font-bold text-stone-950 tracking-tight leading-[1.15] text-balance">
                Pure, Farm-Fresh Milk &amp; Traditional Dairy in Delhi
              </h1>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
                Directly from our family farm in Old Gardhi Mendu. Wholesome cow milk, rich buffalo milk, pure desi ghee, and fresh curd produced with clean animal care and nutritious green fodder.
              </p>
            </div>

            {/* Quality Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-stone-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Twice-Daily Fresh Extraction:</strong> Morning &amp; evening fresh batches.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>100% Unadulterated:</strong> Zero preservatives, chemicals, or milk dilution.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Nutritious Green Fodder:</strong> Fresh seasonal berseem, chari, and oil cakes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Hygienic Care:</strong> Clean open-air sheds and regular vet health checks.</span>
              </div>
            </div>

            {/* Primary Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Make Product Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${FARM_CONTACT.phone}`}
                className="px-6 py-3.5 text-sm font-semibold text-stone-900 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 hover:border-stone-400 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call {FARM_CONTACT.formattedPhone}</span>
              </a>

              <a
                href={FARM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-emerald-950 bg-emerald-100/70 border border-emerald-200/80 rounded-lg hover:bg-emerald-200/70 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>WhatsApp Message</span>
              </a>
            </div>

            {/* Sub-note on farm visits */}
            <p className="text-xs text-stone-500 pt-1">
              * Local residents and families are welcome to visit our farm between 5:00 AM and 7:00 PM to inspect animal care and milk purity.
            </p>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-xl">
              
              {/* Artistic Vector Illustration of the Dairy Farm */}
              <div className="h-64 sm:h-76 w-full relative">
                <FarmIllustration variant="hero" className="w-full h-full" />
                
                {/* Floating Farm Badge on Image */}
                <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-2 border border-stone-700/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">Choudhary Dairy Farm · Old Gardhi Mendu</span>
                </div>
              </div>

              {/* Quick Farm Information Bar below image */}
              <div className="p-5 bg-stone-50/70 space-y-4 border-t border-stone-200">
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Location</div>
                    <div className="text-sm font-semibold text-stone-900">Old Gardhi Mendu, Delhi</div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Daily Farm Hours</div>
                    <div className="text-sm font-semibold text-stone-900">5:00 AM – 7:00 PM</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Primary Contact</div>
                    <a
                      href={`tel:${FARM_CONTACT.phone}`}
                      className="text-sm font-bold text-emerald-800 hover:underline"
                    >
                      {FARM_CONTACT.formattedPhone}
                    </a>
                  </div>
                  <a
                    href="#products"
                    className="text-xs font-semibold text-stone-700 hover:text-emerald-900 flex items-center gap-1 transition-colors"
                  >
                    <span>View 7 Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
