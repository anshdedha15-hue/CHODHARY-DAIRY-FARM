import React from 'react';
import { Clock, MapPin, Phone, Sun, Moon, CheckCircle2 } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData.ts';

export const VisitHoursSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Opening Hours & Schedule */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Operational Schedule
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-white tracking-tight">
                Farm Timings: 5:00 AM – 7:00 PM Daily
              </h2>
              <p className="mt-3 text-stone-300 text-sm leading-relaxed max-w-xl">
                We operate all 7 days a week in Old Gardhi Mendu, Delhi. Whether you are collecting fresh morning milk for your breakfast or visiting in the evening, our gates are open.
              </p>
            </div>

            {/* Timings Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Morning Window */}
              <div className="p-5 rounded-xl bg-stone-800/80 border border-stone-700/60 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Morning Session</span>
                </div>
                <div className="text-2xl font-serif-display font-bold text-white">
                  5:00 AM – 11:30 AM
                </div>
                <p className="text-xs text-stone-400">
                  <strong>Milking Window:</strong> 5:00 AM – 7:30 AM. Peak time for collecting unchilled raw warm milk right after extraction.
                </p>
              </div>

              {/* Evening Window */}
              <div className="p-5 rounded-xl bg-stone-800/80 border border-stone-700/60 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                  <Moon className="w-4 h-4 text-emerald-400" />
                  <span>Evening Session</span>
                </div>
                <div className="text-2xl font-serif-display font-bold text-white">
                  3:00 PM – 7:00 PM
                </div>
                <p className="text-xs text-stone-400">
                  <strong>Milking Window:</strong> 4:30 PM – 6:30 PM. Perfect for evening household deliveries and fresh curd collection.
                </p>
              </div>

            </div>

            {/* Visit Guidelines */}
            <div className="space-y-2 pt-2 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Open Farm Policy:</strong> Visitors are welcome to observe the clean animal sheds and feeding.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Bring Clean Containers:</strong> You are encouraged to bring your own stainless steel milk cans or use our sanitized bottles.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Location & Quick Navigation Card */}
          <div className="lg:col-span-5 bg-stone-800/90 rounded-2xl border border-stone-700 p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-serif-display font-bold text-white">
              Visiting Choudhary Dairy Farm
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <div className="text-stone-400 text-xs font-medium">Farm Address</div>
                  <div className="font-semibold text-stone-100">{FARM_CONTACT.address}</div>
                  <div className="text-stone-400 text-xs mt-0.5">East Delhi, Delhi 110053</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <div className="text-stone-400 text-xs font-medium">Call for Directions / Milk Availability</div>
                  <a
                    href={`tel:${FARM_CONTACT.phone}`}
                    className="font-bold text-amber-400 hover:underline text-base"
                  >
                    {FARM_CONTACT.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <div className="text-stone-400 text-xs font-medium">Daily Operating Hours</div>
                  <div className="font-semibold text-stone-100">{FARM_CONTACT.hours}</div>
                  <div className="text-stone-400 text-xs mt-0.5">Open Monday through Sunday</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-700 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`tel:${FARM_CONTACT.phone}`}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center shadow-xs"
              >
                Call Farm Directly
              </a>
              <a
                href="#contact"
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors text-center shadow-xs"
              >
                Send Message
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
