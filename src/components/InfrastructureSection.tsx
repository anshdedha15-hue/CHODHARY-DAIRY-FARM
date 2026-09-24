import React from 'react';
import { INFRASTRUCTURE_FACILITIES } from '../data/farmData.ts';
import { ShieldCheck, Check, Sparkles, Building2 } from 'lucide-react';
import { FarmIllustration } from './FarmIllustrations.tsx';

export const InfrastructureSection: React.FC = () => {
  return (
    <section id="infrastructure" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            Facility Architecture &amp; Sanitization
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-stone-950 tracking-tight text-balance">
            Clean Farm Infrastructure &amp; Hygiene Standards
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Our farm premises in Old Gardhi Mendu are designed for maximum airflow, pristine hygiene, and gentle cattle handling, ensuring that milk is produced in a spotless, bio-secure environment.
          </p>
        </div>

        {/* Infrastructure Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {INFRASTRUCTURE_FACILITIES.map((facility, index) => (
            <div
              key={facility.title}
              className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs hover:border-emerald-700/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      {facility.subtitle}
                    </span>
                    <h3 className="text-xl font-serif-display font-bold text-stone-900 mt-1">
                      {facility.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-emerald-800">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {facility.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  {facility.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sanitization Protocol callout */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Sanitization Protocol:</span>
                </div>
                <p className="text-xs text-emerald-950 font-medium bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100/80">
                  {facility.hygieneProtocol}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Visual Inspection Invitation Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-serif-display font-bold text-stone-900">
              Open Doors for Hygiene Audits &amp; Farm Visits
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl">
              We welcome our customers, local families, and children to visit Old Gardhi Mendu. See our cleanliness protocols, meet the cattle, and experience how pure milk is produced without artificial interventions.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-3 text-xs font-semibold text-emerald-950 bg-amber-100 border border-amber-300 rounded-lg hover:bg-amber-200 transition-colors whitespace-nowrap shadow-xs"
          >
            Plan a Farm Visit
          </a>
        </div>

      </div>
    </section>
  );
};
