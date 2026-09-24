import React from 'react';

interface IllustrationProps {
  className?: string;
  variant?: 'hero' | 'breeds' | 'milk' | 'ghee' | 'curd' | 'butter' | 'cream' | 'cow-milk' | 'buffalo-milk' | 'infrastructure' | 'feed';
}

export const FarmIllustration: React.FC<IllustrationProps> = ({ className = 'w-full h-full', variant = 'hero' }) => {
  switch (variant) {
    case 'hero':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-emerald-900 via-stone-800 to-amber-950 text-white flex items-center justify-center ${className}`}>
          {/* Subtle rural sunrise skyline */}
          <svg viewBox="0 0 800 450" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#065f46" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#064e3b" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="fieldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="100%" stopColor="#14532d" />
              </linearGradient>
            </defs>

            {/* Morning Sky Backdrop */}
            <rect width="800" height="450" fill="url(#skyGrad)" />
            
            {/* Sunrise Glow */}
            <circle cx="560" cy="180" r="140" fill="url(#sunGrad)" filter="blur(20px)" />
            <circle cx="560" cy="180" r="70" fill="#fde68a" fillOpacity="0.5" />

            {/* Rolling green pastures */}
            <path d="M0 320 Q220 270 440 310 T800 290 L800 450 L0 450 Z" fill="#1e3a1f" opacity="0.6" />
            <path d="M0 340 Q280 295 560 330 T800 320 L800 450 L0 450 Z" fill="url(#fieldGrad)" />

            {/* Farm Shed Architecture Outline */}
            <g transform="translate(110, 160)" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* Shed roof truss */}
              <polygon points="10,90 120,40 230,90" fill="#292524" fillOpacity="0.85" stroke="#78716c" />
              <polygon points="120,40 290,40 400,90 230,90" fill="#44403c" fillOpacity="0.9" stroke="#78716c" />
              {/* Shed support pillars */}
              <line x1="25" y1="90" x2="25" y2="190" stroke="#a8a29e" strokeWidth="4" />
              <line x1="120" y1="90" x2="120" y2="190" stroke="#a8a29e" strokeWidth="4" />
              <line x1="230" y1="90" x2="230" y2="190" stroke="#a8a29e" strokeWidth="4" />
              <line x1="385" y1="90" x2="385" y2="190" stroke="#a8a29e" strokeWidth="4" />
              {/* Trough line */}
              <rect x="20" y="150" width="370" height="26" rx="4" fill="#57534e" stroke="#a8a29e" strokeWidth="2" />
              {/* Fresh Fodder in Trough */}
              <path d="M 25 152 Q 60 142 100 152 Q 150 140 210 152 Q 280 142 380 152" stroke="#4ade80" strokeWidth="5" />
            </g>

            {/* Cattle Silhouettes */}
            {/* Murrah Buffalo silhouette */}
            <g transform="translate(380, 260) scale(0.85)">
              <ellipse cx="90" cy="55" rx="55" ry="32" fill="#171717" />
              <circle cx="35" cy="45" r="22" fill="#171717" />
              {/* Curled horn */}
              <path d="M 30 35 C 18 20 40 10 44 24" stroke="#d6d3d1" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Sturdy legs */}
              <line x1="55" y1="80" x2="55" y2="120" stroke="#171717" strokeWidth="9" strokeLinecap="round" />
              <line x1="75" y1="80" x2="73" y2="120" stroke="#171717" strokeWidth="8" strokeLinecap="round" />
              <line x1="120" y1="80" x2="120" y2="120" stroke="#171717" strokeWidth="9" strokeLinecap="round" />
              <line x1="135" y1="80" x2="137" y2="120" stroke="#171717" strokeWidth="8" strokeLinecap="round" />
            </g>

            {/* Indigenous Cow silhouette with distinctive hump */}
            <g transform="translate(190, 275) scale(0.8)">
              {/* Body */}
              <ellipse cx="85" cy="52" rx="50" ry="28" fill="#78350f" opacity="0.95" />
              {/* Hump (Kakud) */}
              <path d="M 45 42 C 48 24 64 24 68 42 Z" fill="#78350f" />
              <circle cx="34" cy="48" r="18" fill="#78350f" />
              {/* Dewlap */}
              <path d="M 32 60 Q 42 75 52 64" fill="#78350f" />
              {/* Horns */}
              <path d="M 30 36 C 24 24 32 18 36 28" stroke="#f59e0b" strokeWidth="3" fill="none" />
              {/* Legs */}
              <line x1="50" y1="76" x2="48" y2="114" stroke="#78350f" strokeWidth="7" strokeLinecap="round" />
              <line x1="68" y1="76" x2="68" y2="114" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
              <line x1="110" y1="76" x2="110" y2="114" stroke="#78350f" strokeWidth="7" strokeLinecap="round" />
              <line x1="125" y1="76" x2="127" y2="114" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
            </g>

            {/* Traditional Stainless Steel Milk Can */}
            <g transform="translate(680, 280) scale(0.95)">
              <rect x="20" y="30" width="48" height="65" rx="6" fill="#cbd5e1" stroke="#475569" strokeWidth="2.5" />
              <polygon points="16,30 72,30 64,14 24,14" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
              <rect x="26" y="6" width="36" height="9" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
              <path d="M 16 35 C 8 35 8 50 16 55" stroke="#475569" strokeWidth="3" fill="none" />
              <line x1="28" y1="48" x2="60" y2="48" stroke="#64748b" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      );

    case 'cow-milk':
    case 'milk':
      return (
        <div className={`relative bg-gradient-to-br from-amber-50 to-emerald-50/60 p-6 flex flex-col items-center justify-center border-b border-stone-100 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-stone-200/80 flex items-center justify-center relative mb-3">
            <svg viewBox="0 0 64 64" className="w-14 h-14 text-emerald-800" fill="none" stroke="currentColor">
              {/* Milk Can / Bottle */}
              <path d="M24 16 L40 16 L44 26 L44 54 C44 56.2 42.2 58 40 58 L24 58 C21.8 58 20 56.2 20 54 L20 26 Z" strokeWidth="2.5" fill="#f8fafc" />
              <rect x="25" y="8" width="14" height="8" rx="2" strokeWidth="2" fill="#e2e8f0" />
              {/* Pure milk level splash */}
              <path d="M22 38 Q32 32 42 38 L42 54 C42 55.1 41.1 56 40 56 L24 56 C22.9 56 22 55.1 22 54 Z" fill="#dcfce7" stroke="none" />
              <path d="M30 42 Q32 46 34 42" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute -bottom-1 bg-emerald-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
              100% Raw
            </span>
          </div>
          <span className="text-xs font-semibold text-emerald-900 tracking-wide">Morning & Evening Milking</span>
        </div>
      );

    case 'buffalo-milk':
      return (
        <div className={`relative bg-gradient-to-br from-stone-100 to-slate-200/80 p-6 flex flex-col items-center justify-center border-b border-stone-100 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-stone-300 flex items-center justify-center relative mb-3">
            <svg viewBox="0 0 64 64" className="w-14 h-14 text-stone-800" fill="none" stroke="currentColor">
              {/* Murrah Buffalo Head and horns symbol */}
              <path d="M14 20 C18 10 26 14 24 24" strokeWidth="3" strokeLinecap="round" stroke="#1c1917" />
              <path d="M50 20 C46 10 38 14 40 24" strokeWidth="3" strokeLinecap="round" stroke="#1c1917" />
              <path d="M20 24 C20 18 44 18 44 24 L42 44 C42 50 22 50 22 44 Z" fill="#292524" stroke="#1c1917" strokeWidth="2.5" />
              {/* Muzzle */}
              <ellipse cx="32" cy="42" rx="7" ry="4" fill="#44403c" />
              <circle cx="29" cy="42" r="1" fill="#fff" />
              <circle cx="35" cy="42" r="1" fill="#fff" />
            </svg>
            <span className="absolute -bottom-1 bg-stone-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
              8% Fat Murrah
            </span>
          </div>
          <span className="text-xs font-semibold text-stone-800 tracking-wide">High Fat & Thick Cream</span>
        </div>
      );

    case 'curd':
      return (
        <div className={`relative bg-gradient-to-br from-amber-50/80 to-orange-50 p-6 flex flex-col items-center justify-center border-b border-stone-100 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-amber-200 flex items-center justify-center relative mb-3">
            <svg viewBox="0 0 64 64" className="w-14 h-14 text-amber-900" fill="none" stroke="currentColor">
              {/* Earthen Matka / Bowl */}
              <path d="M12 28 Q32 24 52 28 L46 50 C44 54 20 54 18 50 Z" fill="#b45309" stroke="#78350f" strokeWidth="2.5" />
              {/* Thick curd layer */}
              <ellipse cx="32" cy="28" rx="19" ry="7" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
              {/* Spoon dipping */}
              <path d="M38 14 L30 32" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="absolute -bottom-1 bg-amber-800 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
              Matka Dahi
            </span>
          </div>
          <span className="text-xs font-semibold text-amber-900 tracking-wide">Spoon-Thick Cultured</span>
        </div>
      );

    case 'butter':
      return (
        <div className={`relative bg-gradient-to-br from-yellow-50 to-amber-100/60 p-6 flex flex-col items-center justify-center border-b border-stone-100 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-yellow-300 flex items-center justify-center relative mb-3">
            <svg viewBox="0 0 64 64" className="w-14 h-14 text-amber-600" fill="none" stroke="currentColor">
              {/* Butter block */}
              <polygon points="14,32 30,22 52,26 36,38" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
              <polygon points="14,32 36,38 36,50 14,44" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              <polygon points="36,38 52,26 52,38 36,50" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
              {/* Fresh butter churn mark */}
              <circle cx="28" cy="34" r="2" fill="#ca8a04" />
            </svg>
            <span className="absolute -bottom-1 bg-yellow-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
              Desi Makhan
            </span>
          </div>
          <span className="text-xs font-semibold text-amber-800 tracking-wide">Freshly Churned Farm Butter</span>
        </div>
      );

    case 'ghee':
      return (
        <div className={`relative bg-gradient-to-br from-amber-100/70 to-yellow-50 p-6 flex flex-col items-center justify-center border-b border-stone-100 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-amber-300 flex items-center justify-center relative mb-3">
            <svg viewBox="0 0 64 64" className="w-14 h-14 text-amber-700" fill="none" stroke="currentColor">
              {/* Glass Jar with Golden Desi Ghee */}
              <rect x="20" y="24" width="24" height="32" rx="4" fill="#fef3c7" stroke="#b45309" strokeWidth="2.5" />
              <rect x="23" y="16" width="18" height="8" rx="2" fill="#d97706" stroke="#b45309" strokeWidth="2" />
              {/* Golden Danedaar Ghee level */}
              <rect x="22" y="32" width="20" height="22" rx="2" fill="#fbbf24" opacity="0.9" />
              <circle cx="32" cy="43" r="3" fill="#f59e0b" />
            </svg>
            <span className="absolute -bottom-1 bg-amber-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
              Danedaar
            </span>
          </div>
          <span className="text-xs font-semibold text-amber-900 tracking-wide">Aromatic Slow-Simmered</span>
        </div>
      );

    case 'cream':
      return (
        <div className={`relative bg-gradient-to-br from-stone-50 to-amber-50 p-6 flex flex-col items-center justify-center border-b border-stone-100 ${className}`}>
          <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-stone-200 flex items-center justify-center relative mb-3">
            <svg viewBox="0 0 64 64" className="w-14 h-14 text-emerald-900" fill="none" stroke="currentColor">
              {/* Cream container */}
              <path d="M16 26 L48 26 L44 52 C44 54 20 54 20 52 Z" fill="#fafaf9" stroke="#78716c" strokeWidth="2.5" />
              <ellipse cx="32" cy="26" rx="16" ry="6" fill="#fef3c7" stroke="#78716c" strokeWidth="2" />
              {/* Thick rich cream swirl */}
              <path d="M26 26 C28 22 36 22 38 26" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="absolute -bottom-1 bg-emerald-800 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase">
              Fresh Malai
            </span>
          </div>
          <span className="text-xs font-semibold text-stone-800 tracking-wide">Skimmed Sweet Cream</span>
        </div>
      );

    case 'breeds':
      return (
        <div className={`relative bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 p-6 rounded-2xl text-white flex items-center justify-center overflow-hidden ${className}`}>
          <svg viewBox="0 0 400 240" className="w-full h-full object-cover" fill="none">
            <rect width="400" height="240" fill="#1c1917" />
            <circle cx="200" cy="120" r="160" fill="#064e3b" opacity="0.4" filter="blur(30px)" />
            {/* Buffalo and cow peaceful profiles */}
            <g transform="translate(60, 60)">
              <circle cx="60" cy="50" r="45" fill="#0c0a09" stroke="#44403c" strokeWidth="2" />
              <path d="M30 35 C20 18 55 10 50 30" stroke="#a8a29e" strokeWidth="4" fill="none" />
              <text x="30" y="115" fill="#e7e5e4" fontSize="13" fontWeight="600">Murrah Buffalo</text>
            </g>
            <g transform="translate(220, 60)">
              <circle cx="60" cy="50" r="45" fill="#78350f" stroke="#b45309" strokeWidth="2" />
              <path d="M 45 15 C 50 5 70 5 75 15 Z" fill="#78350f" />
              <path d="M40 32 C35 20 48 16 52 28" stroke="#fde68a" strokeWidth="3" fill="none" />
              <text x="35" y="115" fill="#fde68a" fontSize="13" fontWeight="600">Sahiwal Cow</text>
            </g>
          </svg>
        </div>
      );

    case 'infrastructure':
      return (
        <div className={`relative bg-gradient-to-br from-stone-800 to-emerald-900 p-6 rounded-xl text-white flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-400" fill="none" stroke="currentColor">
            <path d="M10 40 L50 15 L90 40 L90 85 L10 85 Z" strokeWidth="3" />
            <line x1="30" y1="85" x2="30" y2="55" strokeWidth="3" />
            <line x1="70" y1="85" x2="70" y2="55" strokeWidth="3" />
            <line x1="30" y1="55" x2="70" y2="55" strokeWidth="3" />
            <circle cx="50" cy="35" r="8" strokeWidth="2" fill="#065f46" />
          </svg>
        </div>
      );

    case 'feed':
      return (
        <div className={`relative bg-gradient-to-br from-emerald-800 to-lime-900 p-6 rounded-xl text-white flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-20 h-20 text-lime-300" fill="none" stroke="currentColor">
            <path d="M50 85 C50 85 50 35 75 20 C75 45 60 70 50 85 Z" strokeWidth="2.5" fill="#65a30d" />
            <path d="M50 85 C50 85 50 40 25 25 C25 50 40 70 50 85 Z" strokeWidth="2.5" fill="#4d7c0f" />
            <line x1="50" y1="85" x2="50" y2="20" strokeWidth="3" stroke="#bef264" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
