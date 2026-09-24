import React, { useState } from 'react';
import { BREEDS } from '../data/farmData.ts';
import { Check, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { FarmIllustration } from './FarmIllustrations.tsx';

export const BreedsSection: React.FC = () => {
  const [activeBreedId, setActiveBreedId] = useState<'murrah-buffalo' | 'sahiwal-desi-cow'>('murrah-buffalo');
  const activeBreed = BREEDS.find((b) => b.id === activeBreedId) || BREEDS[0];

  return (
    <section id="breeds" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            Livestock &amp; Genetics
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-stone-950 tracking-tight text-balance">
            Cow &amp; Buffalo Breeds at Choudhary Dairy Farm
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Our dairy production relies on healthy, indigenous Murrah buffaloes and Sahiwal cows naturally acclimatized to the North Indian climate. We focus on natural breeding, ethical care, and peaceful shelter.
          </p>
        </div>

        {/* Breed Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {BREEDS.map((breed) => (
            <button
              key={breed.id}
              onClick={() => setActiveBreedId(breed.id as any)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-150 flex items-center gap-2 border ${
                activeBreedId === breed.id
                  ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
            >
              <span>{breed.name}</span>
              <span className={`text-[11px] font-normal ${activeBreedId === breed.id ? 'text-amber-300' : 'text-stone-500'}`}>
                ({breed.id === 'murrah-buffalo' ? 'High Fat Buffalo' : 'Desi Cow'})
              </span>
            </button>
          ))}
        </div>

        {/* Breed Detailed Showcase Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-stone-200 bg-stone-900 relative group">
                {activeBreed.id === 'sahiwal-desi-cow' ? (
                  <>
                    <img
                      src="/images/dairy_cow_farm.jpg"
                      alt="Real Sahiwal Dairy Cow"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20">
                      Real Sahiwal Cattle Photograph
                    </div>
                  </>
                ) : (
                  <FarmIllustration
                    variant="buffalo-milk"
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Breed Origin and Quick Metrics */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Traditional Origin:</span>
                  <span className="font-semibold text-stone-800">{activeBreed.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Average Daily Yield:</span>
                  <span className="font-semibold text-stone-800">{activeBreed.dailyYieldAvg}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Temperament:</span>
                  <span className="font-semibold text-stone-800">{activeBreed.temperament}</span>
                </div>
              </div>
            </div>

            {/* Informational Column */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold text-amber-700 tracking-wide block">
                  {activeBreed.hindiName}
                </span>
                <h3 className="text-2xl font-serif-display font-bold text-stone-900 mt-1">
                  {activeBreed.name}
                </h3>
              </div>

              {/* Milk Profile Box */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs sm:text-sm">
                <div className="font-semibold text-emerald-950 mb-1">
                  Milk Profile &amp; Role in Farm Production:
                </div>
                <p className="text-emerald-900 leading-relaxed">
                  {activeBreed.milkProfile}
                </p>
              </div>

              {/* Physical & Genetic Characteristics */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Breed Characteristics &amp; Strengths
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {activeBreed.characteristics.map((char) => (
                    <div key={char} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Care & Diet Routines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-stone-100 text-xs">
                <div>
                  <strong className="text-stone-800 block mb-1">Dietary Regimen:</strong>
                  <p className="text-stone-600 leading-relaxed">{activeBreed.dietPreference}</p>
                </div>
                <div>
                  <strong className="text-stone-800 block mb-1">Daily Care Routine:</strong>
                  <p className="text-stone-600 leading-relaxed">{activeBreed.careRoutine}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Animal Welfare Ethics Footer */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700">
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <Heart className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900">Stress-Free Housing</strong>
              Spacious sheds with dry bedding, ceiling ventilation, and ample movement space.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900">Scheduled Veterinary Checks</strong>
              Regular deworming, periodic vaccinations, and immediate maternal care.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900">Clean Daily Bathing</strong>
              Daily gentle freshwater washdowns to keep skin hygienic and temperature regulated.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
