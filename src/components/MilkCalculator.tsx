import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface MilkCalculatorProps {
  onPreFillEnquiry: (productName: string, quantityNotes: string) => void;
}

export const MilkCalculator: React.FC<MilkCalculatorProps> = ({ onPreFillEnquiry }) => {
  const [adults, setAdults] = useState<number>(3);
  const [children, setChildren] = useState<number>(1);
  const [teaCupsPerDay, setTeaCupsPerDay] = useState<number>(4);
  const [makeCurdPaneer, setMakeCurdPaneer] = useState<boolean>(true);
  const [preferredMilk, setPreferredMilk] = useState<'cow' | 'buffalo' | 'mixed'>('mixed');

  // Calculation logic:
  // Adult direct drink: 250ml
  // Child direct drink: 350ml
  // Tea/Coffee cup: ~75ml milk
  // Curd / Paneer allowance: ~500ml daily
  const dailyLitres = Math.max(
    1,
    Math.round(
      ((adults * 0.25) +
        (children * 0.35) +
        (teaCupsPerDay * 0.08) +
        (makeCurdPaneer ? 0.6 : 0)) * 2
    ) / 2
  );

  const monthlyLitres = Math.round(dailyLitres * 30);

  const handleApplyToEnquiry = () => {
    const milkName =
      preferredMilk === 'cow'
        ? 'Cow Milk'
        : preferredMilk === 'buffalo'
        ? 'Buffalo Milk'
        : 'Fresh Milk';

    const note = `Estimated Daily Requirement: ${dailyLitres} Litres/day (~${monthlyLitres} Litres/month) for ${adults} Adults & ${children} Children. Preferred: ${milkName}.`;
    onPreFillEnquiry(milkName, note);
  };

  return (
    <section className="py-12 bg-amber-50/40 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 lg:p-10">
          
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
              <Calculator className="w-4 h-4" />
              <span>Family Dairy Planner</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-stone-900">
              Calculate Your Household&apos;s Daily Milk Requirement
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Estimate the ideal daily quantity of fresh milk for your household in Delhi based on family size and daily consumption habits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Adults */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-stone-700">Adults in Household</label>
                    <span className="text-sm font-bold text-emerald-900 tabular-nums">{adults}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full accent-emerald-800 cursor-pointer"
                  />
                </div>

                {/* Children */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-stone-700">Children</label>
                    <span className="text-sm font-bold text-emerald-900 tabular-nums">{children}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6"
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full accent-emerald-800 cursor-pointer"
                  />
                </div>

                {/* Tea / Coffee cups */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-stone-700">Daily Tea/Coffee Cups</label>
                    <span className="text-sm font-bold text-emerald-900 tabular-nums">{teaCupsPerDay} cups</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="12"
                    value={teaCupsPerDay}
                    onChange={(e) => setTeaCupsPerDay(Number(e.target.value))}
                    className="w-full accent-emerald-800 cursor-pointer"
                  />
                </div>

                {/* Curd / Paneer preference toggle */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 flex items-center justify-between">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block">Make Homemade Dahi/Paneer?</label>
                    <span className="text-[11px] text-stone-500">Adds ~500ml daily</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={makeCurdPaneer}
                    onChange={(e) => setMakeCurdPaneer(e.target.checked)}
                    className="w-4 h-4 accent-emerald-800 rounded cursor-pointer"
                  />
                </div>

              </div>

              {/* Milk Type Preference */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-2">
                  Preferred Variety:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredMilk('mixed')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      preferredMilk === 'mixed'
                        ? 'bg-emerald-900 text-white border-emerald-900'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Fresh Whole Milk
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredMilk('cow')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      preferredMilk === 'cow'
                        ? 'bg-emerald-900 text-white border-emerald-900'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Cow Milk (Light)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredMilk('buffalo')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                      preferredMilk === 'buffalo'
                        ? 'bg-emerald-900 text-white border-emerald-900'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Buffalo Milk (Thick)
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Result Display Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-stone-900 rounded-2xl p-6 sm:p-7 text-white border border-emerald-900 shadow-md">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                Estimated Requirement
              </span>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-serif-display font-bold text-white tabular-nums">
                  {dailyLitres}
                </span>
                <span className="text-lg text-emerald-200 font-medium">Litres / Day</span>
              </div>

              <div className="text-xs text-stone-300 pb-4 border-b border-emerald-800/80">
                Approximates to <strong className="text-white tabular-nums">{monthlyLitres} Litres</strong> per month for a family of {adults + children}.
              </div>

              <div className="py-4 space-y-1.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Morning or evening dispatch options</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Collected in sanitized stainless cans/bottles</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyToEnquiry}
                className="w-full mt-2 py-3 px-4 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Enquire with this Quantity</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
