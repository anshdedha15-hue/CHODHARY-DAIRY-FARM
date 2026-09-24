import React from 'react';
import { QUALITY_PILLARS } from '../data/farmData.ts';

export const QualityHighlights: React.FC = () => {
  return (
    <section className="py-8 bg-stone-900 text-stone-100 border-y border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALITY_PILLARS.map((item, index) => (
            <div
              key={item.title}
              className="relative p-5 rounded-xl bg-stone-800/60 border border-stone-700/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xl sm:text-2xl font-serif-display font-bold text-amber-400">
                    {item.metric}
                  </span>
                  <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider">
                    {item.metricLabel}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-stone-100 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
