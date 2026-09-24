import React, { useMemo, useState, useEffect } from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, MapPin, Clock, CheckCircle2, Camera, ZoomIn, Upload, X } from 'lucide-react';
import { FARM_CONTACT } from '../data/farmData.ts';

interface HeroProps {
  onOpenEnquiry: () => void;
}

const HERO_PHOTOS = [
  {
    id: 'shed',
    title: 'Milking Shed & Stalls',
    caption: 'Hygienic open-air farm shelter with clean stalls & feeding troughs',
    src: '/images/dairy_farm_banner.jpg',
  },
  {
    id: 'sahiwal',
    title: 'Sahiwal Dairy Cow',
    caption: 'Purebred Indian dairy cow fed on organic green fodder',
    src: '/images/dairy_cow_farm.jpg',
  },
  {
    id: 'pasture',
    title: 'Cattle & Pasture',
    caption: 'Healthy cows in lush green open grazing paddock',
    src: '/images/dairy_cows_pasture.jpg',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('custom_hero_banner_photo');
      if (saved) {
        setCustomPhoto(saved);
      }
    } catch {
      // localStorage may fail in restricted context
    }
  }, []);

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const res = event.target.result as string;
          setCustomPhoto(res);
          try {
            localStorage.setItem('custom_hero_banner_photo', res);
          } catch {
            // ignore
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentPhotoSrc = customPhoto || HERO_PHOTOS[activePhotoIdx].src;
  const currentPhotoTitle = customPhoto ? 'My Dairy Farm Photo' : HERO_PHOTOS[activePhotoIdx].title;
  const currentPhotoCaption = customPhoto ? 'Custom farm photograph' : HERO_PHOTOS[activePhotoIdx].caption;

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

          {/* Right Column: Visual Showcase Card with Real Dairy Farm Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-xl flex flex-col">
              
              {/* Real Dairy Farm Photography Banner Area */}
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="h-72 sm:h-80 w-full relative overflow-hidden bg-stone-900 group cursor-pointer"
                title="Click to zoom and view full dairy farm photo"
              >
                <img
                  src={currentPhotoSrc}
                  alt={currentPhotoTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Floating Farm Badge on Image */}
                <div className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/15 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold">Choudhary Dairy Farm · Real Photo</span>
                </div>

                {/* Zoom Indicator */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white p-2 rounded-lg opacity-85 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs">
                  <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline text-[11px]">Inspect</span>
                </div>

                {/* Bottom Caption on Photo */}
                <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                  <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{currentPhotoTitle}</span>
                  </div>
                  <p className="text-[11px] text-stone-200 mt-0.5 line-clamp-1">
                    {currentPhotoCaption}
                  </p>
                </div>
              </div>

              {/* Photo Selector Switcher & Custom Upload Row */}
              <div className="px-3.5 py-2.5 bg-stone-100/90 border-t border-b border-stone-200 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  {HERO_PHOTOS.map((photo, idx) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => {
                        setCustomPhoto(null);
                        setActivePhotoIdx(idx);
                      }}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        !customPhoto && activePhotoIdx === idx
                          ? 'bg-white text-emerald-950 shadow-xs border border-stone-200'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                      }`}
                    >
                      {photo.title.split(' ')[0]}
                    </button>
                  ))}
                  {customPhoto && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold bg-emerald-800 text-white rounded">
                      Custom
                    </span>
                  )}
                </div>

                {/* Farm Owner Upload Button */}
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors shadow-2xs">
                  <Upload className="w-3 h-3 text-emerald-700" />
                  <span className="text-[11px]">Upload Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCustomPhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Quick Farm Information Bar below image */}
              <div className="p-4 sm:p-5 bg-stone-50/70 space-y-4">
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

      {/* Lightbox / Fullscreen Modal for Real Dairy Farm Photo */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative bg-stone-900 max-w-4xl w-full rounded-2xl overflow-hidden border border-stone-700 shadow-2xl flex flex-col">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  Choudhary Dairy Farm Photography
                </span>
                <h3 className="text-lg font-bold text-white">
                  {currentPhotoTitle}
                </h3>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={currentPhotoSrc}
                alt={currentPhotoTitle}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-4 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
              <p>{currentPhotoCaption}</p>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
