import React from 'react';
import { Droplet, Leaf, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { FarmIllustration } from './FarmIllustrations.tsx';

export const FeedFodderSection: React.FC = () => {
  return (
    <section id="feed" className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            Nutritional Stewardship
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-stone-950 tracking-tight text-balance">
            Nutritious Feed, Green Fodder &amp; Clean Water
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            The quality, richness, and safety of dairy milk begin with what the cattle eat and drink. At Choudhary Dairy Farm, we maintain a balanced, natural feeding ratio to ensure optimal health and naturally nutrient-dense milk.
          </p>
        </div>

        {/* 4 Pillars of Animal Nutrition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Pillar 1: Seasonal Green Fodder */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-600/50 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif-display font-bold text-stone-900">
                Fresh Green Fodder (हरा चारा)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Seasonal green crops rich in vitamins, plant sugars, and natural carotene. Cultivated without toxic pesticides.
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Winter Berseem (Egyptian Clover)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Summer Sorghum (Chari) &amp; Maize</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Fresh cut daily for maximum succulence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 2: Dry Fodder & Fiber */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-600/50 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif-display font-bold text-stone-900">
                Dry Fodder &amp; Fiber (सूखा चारा)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                High-quality golden wheat straw (bhusa) essential for ruminant digestion, rumen health, and balanced butterfat synthesis.
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Clean, dry, mold-free wheat straw</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Ensures optimal cud-chewing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Aids natural milk fat percentage</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 3: Natural Concentrates & Oil Cakes */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-600/50 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif-display font-bold text-stone-900">
                Protein Cakes &amp; Bran (खली एवं चोकर)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Natural protein-rich oil cakes and grain byproducts mixed daily to supply energy and essential amino acids.
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                  <span>Mustard cake (Sarson Khali)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                  <span>Cottonseed cake (Binola)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                  <span>Wheat bran (Chokar) &amp; pulse chuni</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 4: 24/7 Clean Drinking Water */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-cyan-600/50 transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif-display font-bold text-stone-900">
                Clean Borewell Water (स्वच्छ जल)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Milk is ~87% water. Fresh, unpolluted water is available 24/7 through automatic troughs, cleaned and inspected daily.
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                  <span>Clean deep-well freshwater source</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                  <span>Troughs scrubbed every morning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                  <span>Fortified with essential mineral salts</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Zero Chemical / Adulteration Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950 text-white border border-emerald-900 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <ShieldAlert className="w-4 h-4" />
                <span>Strict Farm Feeding Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-white">
                Zero Hormones, Zero Urea, Zero Synthetic Stimulants
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Many industrial operations add urea or chemical compounds to artificially stimulate milk yield. At Choudhary Dairy Farm in Old Gardhi Mendu, we enforce an absolute zero-tolerance policy against synthetic stimulants. Our cattle produce wholesome milk strictly powered by clean nature.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-700/60 text-xs space-y-2 shrink-0 md:w-64">
              <div className="font-semibold text-amber-300">Natural Daily Schedule:</div>
              <div className="text-stone-200">
                · <strong>5:00 AM:</strong> Fresh water &amp; morning ration<br />
                · <strong>10:00 AM:</strong> Chaffed green berseem/chari<br />
                · <strong>3:00 PM:</strong> Wheat straw &amp; cake mix<br />
                · <strong>6:30 PM:</strong> Evening green fodder &amp; rest
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
