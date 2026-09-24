import React from 'react';
import { ShieldCheck, Heart, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            Our Roots &amp; Principles
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-stone-950 tracking-tight text-balance">
            Rooted in Old Gardhi Mendu, Dedicated to Pure Dairy Traditions
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Choudhary Dairy Farm was established with a singular conviction: milk should reach your kitchen exactly as nature intended—fresh, wholesome, rich in nutrients, and completely free from industrial processing or adulterants.
          </p>
        </div>

        {/* Narrative & Principles Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
              <h3 className="text-xl font-serif-display font-bold text-stone-900">
                A Transparent, Ethical Dairy in Delhi
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Situated in Old Gardhi Mendu in East Delhi, our farm provides a quiet, clean, and airy sanctuary for our dairy herd. Unlike commercial factory setups, our animals are treated as valued living beings. They are housed in high-ceiling sheds with natural cross-ventilation, soft bedding, and constant access to clean, fresh drinking water.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Every batch of milk delivered to nearby households and collected by visitors is drawn fresh during our two daily milking routines. We rigorously avoid oxytocin or any artificial yield stimulants, letting nature dictate our herd&apos;s natural yield and health.
              </p>

              {/* Milking Routine Breakdown */}
              <div className="pt-4 border-t border-stone-100">
                <div className="text-xs font-semibold uppercase text-stone-500 tracking-wider mb-3">
                  Daily Farm Routine &amp; Milking Schedule
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-100/80">
                    <div className="font-semibold text-emerald-950 flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Morning Milking (5:00 AM – 7:30 AM)</span>
                    </div>
                    <p className="text-stone-600">Fresh morning milk drawn after dawn grooming and fresh feed.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-100/80">
                    <div className="font-semibold text-amber-950 flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      <span>Evening Milking (4:30 PM – 6:30 PM)</span>
                    </div>
                    <p className="text-stone-600">Evening fresh extraction ready for dinner deliveries and collections.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Commitment Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80">
                <div className="text-emerald-700 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <Heart className="w-4 h-4" />
                  <span>Animal First</span>
                </div>
                <p className="text-xs text-stone-600">
                  Daily washing, regular veterinary checkups, and humane animal welfare.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80">
                <div className="text-emerald-700 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero Adulteration</span>
                </div>
                <p className="text-xs text-stone-600">
                  No skimming, no starch, and no chemicals. 100% farm-extracted raw purity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80">
                <div className="text-emerald-700 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Locally Fresh</span>
                </div>
                <p className="text-xs text-stone-600">
                  Delivered locally across Delhi within hours of milking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Farm Facts Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-emerald-950 text-stone-200 p-6 sm:p-8 rounded-2xl border border-emerald-900 shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Farm Standard Checklist
              </span>
              <h3 className="text-xl font-serif-display font-bold text-white mt-1 mb-5">
                Our Purity Pledge
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Untouched &amp; Pure</strong>
                    Collected in food-grade stainless steel containers directly after milking.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Seasonal Green Nutrition</strong>
                    Fed on fresh green berseem, sorghum, maize, and natural oil cakes.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">No Synthetic Enhancers</strong>
                    No hormonal injections, chemical yield boosters, or preservatives.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Open Farm Policy</strong>
                    We encourage customers to visit Old Gardhi Mendu and see our farm operations.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-800/60 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-emerald-300">Farm Location</div>
                  <div className="text-xs font-semibold text-white">{FARM_CONTACT.address}</div>
                </div>
                <div>
                  <div className="text-[11px] text-emerald-300">Contact Number</div>
                  <a
                    href={`tel:${FARM_CONTACT.phone}`}
                    className="text-xs font-semibold text-amber-400 hover:underline"
                  >
                    {FARM_CONTACT.formattedPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Visit quote card */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950">
              <strong>Visiting the Farm:</strong> You can come meet our caretakers, watch the milking sessions, and collect milk directly from the farm between 5:00 AM and 7:00 PM.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
