import React, { useState, useEffect } from 'react';
import { Camera, ZoomIn, Eye, Sparkles, Check, Upload, Image as ImageIcon } from 'lucide-react';
import { ProductItem } from '../data/farmData.ts';

interface ProductPhotoProps {
  productId: string;
  productName: string;
  category: 'milk' | 'traditional';
  className?: string;
  onOpenLightbox?: () => void;
  viewMode?: 'studio' | 'farm' | 'packaging';
}

// Local storage key prefix for custom uploaded photos
const PHOTO_STORAGE_KEY = 'choudhary_dairy_custom_photos_v1';

export const getStoredCustomPhotos = (): Record<string, string> => {
  try {
    const raw = localStorage.getItem(PHOTO_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const saveCustomPhoto = (productId: string, dataUrl: string) => {
  try {
    const existing = getStoredCustomPhotos();
    existing[productId] = dataUrl;
    localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('Failed to save custom photo to localStorage', err);
  }
};

export const ProductPhoto: React.FC<ProductPhotoProps> = ({
  productId,
  productName,
  category,
  className = 'w-full h-full',
  onOpenLightbox,
  viewMode = 'studio',
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  useEffect(() => {
    const photos = getStoredCustomPhotos();
    if (photos[productId]) {
      setCustomPhoto(photos[productId]);
    }
  }, [productId]);

  // If user uploaded their custom actual farm photo, render it
  if (customPhoto) {
    return (
      <div className={`relative group overflow-hidden bg-stone-100 ${className}`}>
        <img
          src={customPhoto}
          alt={`${productName} authentic farm photo`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3 text-white">
          <span className="text-[11px] font-medium flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Farm Original Photo</span>
          </span>
          {onOpenLightbox && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenLightbox();
              }}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-xs transition-colors"
              title="Zoom Photo"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Otherwise render rich, high-definition photorealistic render tailored to each product
  return (
    <div className={`relative group overflow-hidden select-none ${className}`}>
      {renderPhotorealisticScene(productId, viewMode)}
      
      {/* Photo Overlay Actions */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3 text-white">
        <span className="text-[11px] font-medium flex items-center gap-1">
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>Click to view photo</span>
        </span>
        {onOpenLightbox && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox();
            }}
            className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 backdrop-blur-xs text-white border border-white/20 transition-colors flex items-center gap-1 text-xs"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Full View</span>
          </button>
        )}
      </div>
    </div>
  );
};

// High-fidelity, detailed artistic photographic vector renders with depth, shadows, reflections, and natural lighting
function renderPhotorealisticScene(productId: string, viewMode: string) {
  switch (productId) {
    case 'fresh-milk':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="fmBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="fmWood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="15%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
            <linearGradient id="glassBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#f8fafc" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#f1f5f9" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="milkWhite" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="foilCap" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
          </defs>

          {/* Background: Morning Farm Kitchen Atmosphere */}
          <rect width="400" height="300" fill="url(#fmBg)" />
          {/* Warm morning sun flare */}
          <circle cx="90" cy="50" r="120" fill="#fef08a" opacity="0.35" filter="blur(25px)" />
          
          {/* Rustic Wood Table Surface */}
          <rect y="180" width="400" height="120" fill="url(#fmWood)" />
          {/* Wood grain lines */}
          <line x1="0" y1="210" x2="400" y2="210" stroke="#78350f" strokeWidth="2" opacity="0.6" />
          <line x1="0" y1="250" x2="400" y2="250" stroke="#522407" strokeWidth="2" opacity="0.6" />

          {/* Cast Shadows on table */}
          <ellipse cx="200" cy="245" rx="55" ry="14" fill="#1c1917" opacity="0.45" filter="blur(6px)" />
          <ellipse cx="295" cy="248" rx="35" ry="9" fill="#1c1917" opacity="0.4" filter="blur(5px)" />
          <ellipse cx="105" cy="240" rx="45" ry="12" fill="#1c1917" opacity="0.35" filter="blur(6px)" />

          {/* Left: Traditional Stainless Steel Farm Milking Can */}
          <g transform="translate(60, 115) scale(0.85)">
            <rect x="15" y="45" width="70" height="95" rx="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
            {/* Stainless steel reflection bands */}
            <rect x="25" y="46" width="12" height="93" fill="#ffffff" opacity="0.6" />
            <rect x="52" y="46" width="8" height="93" fill="#64748b" opacity="0.3" />
            <polygon points="12,45 88,45 78,20 22,20" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
            <rect x="28" y="10" width="44" height="12" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 12 50 C 0 50 0 85 12 90" stroke="#64748b" strokeWidth="3.5" fill="none" />
          </g>

          {/* Center: Heritage Glass Milk Bottle filled with creamy milk */}
          <g transform="translate(155, 60)">
            {/* Bottle Glass Body */}
            <path d="M25 50 C25 25 35 15 35 0 L55 0 C55 15 65 25 65 50 L75 75 L75 180 C75 188 68 192 60 192 L30 192 C22 192 15 188 15 180 L15 75 Z" fill="url(#glassBody)" stroke="#94a3b8" strokeWidth="1.5" />
            
            {/* Milk Fill */}
            <path d="M17 78 L73 78 L73 178 C73 184 68 188 60 188 L30 188 C22 188 17 184 17 178 Z" fill="url(#milkWhite)" />
            
            {/* Milk Top Cream Layer (gentle yellow-rich rim) */}
            <ellipse cx="45" cy="78" rx="28" ry="4" fill="#fef9c3" stroke="#fef08a" strokeWidth="1" />

            {/* Farm Brand Stamp on Glass */}
            <rect x="26" y="105" width="38" height="42" rx="4" fill="#14532d" opacity="0.9" />
            <text x="45" y="122" fill="#fef3c7" fontSize="7" fontWeight="bold" textAnchor="middle">CHOUDHARY</text>
            <text x="45" y="131" fill="#ffffff" fontSize="6" textAnchor="middle">DAIRY FARM</text>
            <text x="45" y="140" fill="#86efac" fontSize="5" textAnchor="middle">100% PURE MILK</text>

            {/* Glass Specular Highlights */}
            <path d="M20 85 L20 175" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <path d="M26 85 L26 175" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <path d="M70 85 L70 175" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

            {/* Green Farm Fresh Foil Bottle Seal */}
            <ellipse cx="45" cy="2" rx="13" ry="5" fill="url(#foilCap)" stroke="#14532d" strokeWidth="1" />
            <rect x="32" y="2" width="26" height="7" rx="2" fill="url(#foilCap)" />
          </g>

          {/* Right: Fresh Tumbler Glass of Foaming Milk */}
          <g transform="translate(265, 120)">
            <polygon points="10,25 50,25 44,120 16,120" fill="url(#glassBody)" stroke="#cbd5e1" strokeWidth="1.5" />
            <polygon points="12,40 48,40 43,118 17,118" fill="url(#milkWhite)" />
            {/* Frothy top bubbles */}
            <ellipse cx="30" cy="40" rx="18" ry="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="24" cy="38" r="2.5" fill="#f1f5f9" />
            <circle cx="33" cy="39" r="2" fill="#f8fafc" />
            <circle cx="38" cy="40" r="1.5" fill="#f1f5f9" />
            {/* Glass shine */}
            <line x1="16" y1="45" x2="20" y2="110" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          </g>
        </svg>
      );

    case 'cow-milk':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="cmBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="50%" stopColor="#fffbeb" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="cmWood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#854d0e" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
            <linearGradient id="cowMilkCream" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fffef0" />
              <stop offset="100%" stopColor="#fef9c3" />
            </linearGradient>
          </defs>

          <rect width="400" height="300" fill="url(#cmBg)" />
          {/* Golden sun ray */}
          <path d="M 0 0 L 220 0 L 140 300 L 0 300 Z" fill="#fde68a" opacity="0.25" />

          {/* Table */}
          <rect y="175" width="400" height="125" fill="url(#cmWood)" />

          {/* Shadow */}
          <ellipse cx="200" cy="245" rx="60" ry="15" fill="#1c1917" opacity="0.4" filter="blur(6px)" />
          <ellipse cx="295" cy="245" rx="35" ry="9" fill="#1c1917" opacity="0.35" filter="blur(5px)" />

          {/* Indigenous Cow background motif outline (Sahiwal silhouette) */}
          <g transform="translate(30, 45) scale(0.65)" opacity="0.18">
            <ellipse cx="85" cy="52" rx="55" ry="30" fill="#78350f" />
            <path d="M 45 42 C 48 20 64 20 68 42 Z" fill="#78350f" />
            <circle cx="34" cy="48" r="20" fill="#78350f" />
            <path d="M 30 36 C 24 20 32 14 36 26" stroke="#78350f" strokeWidth="4" fill="none" />
          </g>

          {/* Center Glass Bottle of Cow Milk with golden beta-carotene glow */}
          <g transform="translate(155, 55)">
            <path d="M25 50 C25 25 35 15 35 0 L55 0 C55 15 65 25 65 50 L75 75 L75 185 C75 192 68 196 60 196 L30 196 C22 196 15 192 15 185 L15 75 Z" fill="#ffffff" fillOpacity="0.85" stroke="#cbd5e1" strokeWidth="1.5" />
            
            {/* Naturally golden cow milk */}
            <path d="M17 78 L73 78 L73 182 C73 188 68 192 60 192 L30 192 C22 192 17 188 17 182 Z" fill="url(#cowMilkCream)" />
            
            {/* Carotene golden rim */}
            <ellipse cx="45" cy="78" rx="28" ry="4" fill="#fde047" opacity="0.7" />

            {/* Cow Milk Label */}
            <rect x="24" y="105" width="42" height="46" rx="4" fill="#78350f" />
            <text x="45" y="122" fill="#fde68a" fontSize="7" fontWeight="bold" textAnchor="middle">DESI COW</text>
            <text x="45" y="132" fill="#ffffff" fontSize="6.5" textAnchor="middle">PURE MILK</text>
            <text x="45" y="142" fill="#fde047" fontSize="5" textAnchor="middle">SAHIWAL HERD</text>

            <path d="M20 85 L20 180" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            
            {/* Golden cap */}
            <rect x="32" y="2" width="26" height="7" rx="2" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
            <ellipse cx="45" cy="2" rx="13" ry="5" fill="#eab308" />
          </g>

          {/* Right: Traditional Terracotta / Clay Kulhad with fresh warm cow milk */}
          <g transform="translate(265, 125)">
            <polygon points="12,30 48,30 42,110 18,110" fill="#9a3412" stroke="#7c2d12" strokeWidth="2" />
            <ellipse cx="30" cy="30" rx="18" ry="5" fill="url(#cowMilkCream)" stroke="#c2410c" strokeWidth="1.5" />
            <circle cx="26" cy="30" r="2" fill="#fef08a" />
            {/* Clay texture stripes */}
            <path d="M 15 55 Q 30 60 45 55" stroke="#7c2d12" strokeWidth="1" fill="none" opacity="0.7" />
            <path d="M 16 80 Q 30 85 44 80" stroke="#7c2d12" strokeWidth="1" fill="none" opacity="0.7" />
          </g>
        </svg>
      );

    case 'buffalo-milk':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="bmBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="bmWood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#44403c" />
              <stop offset="100%" stopColor="#1c1917" />
            </linearGradient>
            <linearGradient id="thickWhite" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
          </defs>

          <rect width="400" height="300" fill="url(#bmBg)" />
          {/* Subtle rim light */}
          <circle cx="340" cy="70" r="140" fill="#38bdf8" opacity="0.12" filter="blur(30px)" />
          
          {/* Granite / Slate Dairy Table */}
          <rect y="175" width="400" height="125" fill="url(#bmWood)" />
          <line x1="0" y1="176" x2="400" y2="176" stroke="#78716c" strokeWidth="1.5" />

          {/* Shadows */}
          <ellipse cx="190" cy="245" rx="65" ry="16" fill="#000000" opacity="0.6" filter="blur(6px)" />
          <ellipse cx="300" cy="245" rx="40" ry="10" fill="#000000" opacity="0.5" filter="blur(5px)" />

          {/* Murrah Buffalo Head Silhouette Badge in background */}
          <g transform="translate(30, 40) scale(0.65)" opacity="0.25">
            <ellipse cx="90" cy="55" rx="55" ry="32" fill="#ffffff" />
            <circle cx="35" cy="45" r="22" fill="#ffffff" />
            <path d="M 30 35 C 18 20 40 10 44 24" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>

          {/* Heavy Glass Milk Canister filled with dense buffalo milk */}
          <g transform="translate(145, 55)">
            <rect x="15" y="45" width="80" height="145" rx="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            <rect x="18" y="48" width="74" height="138" rx="8" fill="url(#thickWhite)" />
            
            {/* Thick dense cream top layer */}
            <rect x="18" y="48" width="74" height="24" rx="4" fill="#fef9c3" opacity="0.85" />
            <line x1="18" y1="72" x2="92" y2="72" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Rich label */}
            <rect x="25" y="95" width="60" height="52" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
            <text x="55" y="114" fill="#fbbf24" fontSize="7.5" fontWeight="bold" textAnchor="middle">MURRAH BUFFALO</text>
            <text x="55" y="125" fill="#ffffff" fontSize="7" textAnchor="middle">8% BUTTERFAT</text>
            <text x="55" y="136" fill="#a1a1aa" fontSize="6" textAnchor="middle">FULL CREAM MILK</text>

            {/* Specular gloss */}
            <line x1="24" y1="52" x2="24" y2="185" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
            
            {/* Silver handle */}
            <path d="M 15 80 C -5 80 -5 140 15 140" stroke="#94a3b8" strokeWidth="4" fill="none" />
          </g>

          {/* Right: Traditional Kadhai / Stainless bowl with thick cream layer (Malai) */}
          <g transform="translate(265, 140)">
            <ellipse cx="40" cy="55" rx="38" ry="16" fill="#475569" stroke="#64748b" strokeWidth="2" />
            <ellipse cx="40" cy="52" rx="36" ry="14" fill="url(#thickWhite)" />
            {/* Thick wrinkled boiled malai skin */}
            <path d="M 15 50 Q 30 54 45 49 Q 60 55 70 51" stroke="#fef08a" strokeWidth="3" fill="none" opacity="0.8" />
            <text x="40" y="88" fill="#e2e8f0" fontSize="8" fontWeight="600" textAnchor="middle">Rich Creamy Malai</text>
          </g>
        </svg>
      );

    case 'curd':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="curdBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="60%" stopColor="#fef08a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="matkaClay" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c2410c" />
              <stop offset="40%" stopColor="#9a3412" />
              <stop offset="100%" stopColor="#7c2d12" />
            </linearGradient>
          </defs>

          <rect width="400" height="300" fill="url(#curdBg)" />
          {/* Jute mat table */}
          <rect y="170" width="400" height="130" fill="#a16207" />
          <line x1="0" y1="172" x2="400" y2="172" stroke="#713f12" strokeWidth="2" />

          {/* Cast shadow */}
          <ellipse cx="200" cy="245" rx="75" ry="18" fill="#451a03" opacity="0.5" filter="blur(6px)" />

          {/* Traditional Terracotta Matka (Clay Pot) */}
          <g transform="translate(130, 70)">
            {/* Belly of clay pot */}
            <path d="M20 70 C5 120 20 170 65 175 C110 170 125 120 110 70 Z" fill="url(#matkaClay)" stroke="#7c2d12" strokeWidth="2.5" />
            
            {/* Rim */}
            <ellipse cx="65" cy="70" rx="46" ry="16" fill="#7c2d12" stroke="#431407" strokeWidth="2" />
            
            {/* Dense, Spoonable Thick White Curd inside */}
            <ellipse cx="65" cy="70" rx="42" ry="14" fill="#ffffff" stroke="#fef3c7" strokeWidth="1.5" />
            
            {/* Spoon scoop mark in curd */}
            <path d="M45 68 C55 60 75 60 85 68 C75 75 55 75 45 68 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            
            {/* Traditional Wooden Spoon dipped in Dahi */}
            <path d="M 80 40 L 95 10 C 98 5 106 5 108 10 L 96 45 Z" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
            {/* Curd dollop on spoon */}
            <circle cx="82" cy="42" r="5" fill="#ffffff" />

            {/* Matka Handcrafted Clay Etchings */}
            <path d="M 28 110 Q 65 125 102 110" stroke="#ea580c" strokeWidth="2" fill="none" opacity="0.7" />
            <path d="M 35 130 Q 65 142 95 130" stroke="#ea580c" strokeWidth="2" fill="none" opacity="0.7" />
          </g>

          {/* Badge */}
          <g transform="translate(30, 220)">
            <rect width="110" height="28" rx="6" fill="#7c2d12" opacity="0.9" />
            <text x="55" y="18" fill="#fef3c7" fontSize="9" fontWeight="bold" textAnchor="middle">MATKA DAHI</text>
          </g>
        </svg>
      );

    case 'butter':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="butterBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef9c3" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="butterBlock" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fefce8" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>

          <rect width="400" height="300" fill="url(#butterBg)" />
          {/* Teak wood cutting board */}
          <ellipse cx="200" cy="220" rx="140" ry="55" fill="#78350f" stroke="#451a03" strokeWidth="3" />
          <ellipse cx="200" cy="216" rx="136" ry="51" fill="#92400e" />

          {/* Cast shadow */}
          <ellipse cx="190" cy="215" rx="60" ry="20" fill="#451a03" opacity="0.5" filter="blur(6px)" />

          {/* Fresh Churned White Makhan / Butter Mound */}
          <g transform="translate(130, 95)">
            {/* Top surface */}
            <polygon points="20,50 85,25 150,45 85,75" fill="url(#butterBlock)" stroke="#ca8a04" strokeWidth="1.5" />
            {/* Front left face */}
            <polygon points="20,50 85,75 85,120 20,95" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            {/* Front right face */}
            <polygon points="85,75 150,45 150,90 85,120" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />

            {/* Hand-churned rustic butter textures */}
            <circle cx="65" cy="55" r="4" fill="#ffffff" opacity="0.9" />
            <circle cx="105" cy="50" r="5" fill="#ffffff" opacity="0.9" />

            {/* Fresh butter curl sliced off on side */}
            <path d="M 95 65 C 105 55 125 58 120 70" stroke="#eab308" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </g>

          {/* Wooden Butter Spreader / Knife */}
          <g transform="translate(230, 160) rotate(-20)">
            <rect x="0" y="0" width="85" height="14" rx="4" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
            <path d="M 0 0 L 25 0 L 20 14 L 0 14 Z" fill="#b45309" />
            {/* Butter smear on blade tip */}
            <path d="M 60 2 L 80 2 L 82 12 L 65 12 Z" fill="#ffffff" />
          </g>

          <g transform="translate(40, 240)">
            <rect width="130" height="26" rx="6" fill="#78350f" opacity="0.9" />
            <text x="65" y="17" fill="#fef9c3" fontSize="8.5" fontWeight="bold" textAnchor="middle">DESI MAKHAN</text>
          </g>
        </svg>
      );

    case 'ghee':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="gheeBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="60%" stopColor="#292524" />
              <stop offset="100%" stopColor="#1c1917" />
            </linearGradient>
            <linearGradient id="goldenGhee" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="brassLadle" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ca8a04" />
              <stop offset="50%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>

          <rect width="400" height="300" fill="url(#gheeBg)" />
          {/* Golden glow from pure ghee */}
          <circle cx="200" cy="150" r="130" fill="#f59e0b" opacity="0.25" filter="blur(35px)" />

          {/* Polished Teak Table */}
          <rect y="180" width="400" height="120" fill="#1c1917" />
          <line x1="0" y1="181" x2="400" y2="181" stroke="#ca8a04" strokeWidth="1" opacity="0.4" />

          {/* Shadow */}
          <ellipse cx="200" cy="245" rx="60" ry="16" fill="#000000" opacity="0.7" filter="blur(6px)" />

          {/* Faceted Glass Jar of Danedaar Desi Ghee */}
          <g transform="translate(145, 60)">
            {/* Glass Jar Outline */}
            <rect x="15" y="45" width="80" height="135" rx="10" fill="#ffffff" fillOpacity="0.15" stroke="#ca8a04" strokeWidth="1.5" />
            
            {/* Liquid Gold Ghee Fill */}
            <rect x="18" y="55" width="74" height="122" rx="8" fill="url(#goldenGhee)" />
            
            {/* Granular (Danedaar) texture specks */}
            <g fill="#ffffff" opacity="0.65">
              <circle cx="35" cy="85" r="1.5" />
              <circle cx="50" cy="95" r="1.5" />
              <circle cx="68" cy="88" r="1.5" />
              <circle cx="42" cy="120" r="1.5" />
              <circle cx="60" cy="130" r="1.5" />
              <circle cx="75" cy="115" r="1.5" />
              <circle cx="32" cy="145" r="1.5" />
              <circle cx="55" cy="155" r="1.5" />
            </g>

            {/* Royal Gold Label */}
            <rect x="24" y="90" width="62" height="48" rx="4" fill="#14532d" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="55" y="108" fill="#fef08a" fontSize="7.5" fontWeight="bold" textAnchor="middle">SHUDDH GHEE</text>
            <text x="55" y="118" fill="#ffffff" fontSize="6.5" textAnchor="middle">SLOW SIMMERED</text>
            <text x="55" y="128" fill="#86efac" fontSize="5.5" textAnchor="middle">DANEDAAR</text>

            {/* Specular Highlight on Jar */}
            <line x1="22" y1="50" x2="22" y2="175" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

            {/* Golden Thread & Cloth Covered Jar Lid */}
            <rect x="25" y="32" width="60" height="14" rx="3" fill="#ca8a04" stroke="#a16207" strokeWidth="1" />
            <ellipse cx="55" cy="32" rx="30" ry="7" fill="#eab308" />
            {/* Golden twine tie */}
            <line x1="20" y1="42" x2="90" y2="42" stroke="#fef08a" strokeWidth="2" />
          </g>

          {/* Traditional Brass Spoon dripping ghee on right */}
          <g transform="translate(260, 90)">
            <ellipse cx="25" cy="35" rx="18" ry="10" fill="url(#brassLadle)" stroke="#854d0e" strokeWidth="1.5" />
            <path d="M 25 35 L 75 0" stroke="url(#brassLadle)" strokeWidth="4" strokeLinecap="round" />
            {/* Dripping golden droplet */}
            <path d="M 25 45 C 22 55 22 65 25 68 C 28 65 28 55 25 45 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          </g>
        </svg>
      );

    case 'fresh-cream':
    default:
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <linearGradient id="creamBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="creamSurface" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fffbeb" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
          </defs>

          <rect width="400" height="300" fill="url(#creamBg)" />
          {/* Ceramic surface */}
          <rect y="175" width="400" height="125" fill="#f1f5f9" />
          <line x1="0" y1="176" x2="400" y2="176" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Shadow */}
          <ellipse cx="200" cy="245" rx="75" ry="18" fill="#64748b" opacity="0.3" filter="blur(6px)" />

          {/* Glazed Ceramic Serving Bowl with Fresh Cream */}
          <g transform="translate(125, 90)">
            <ellipse cx="75" cy="95" rx="75" ry="32" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
            <ellipse cx="75" cy="85" rx="72" ry="28" fill="#f8fafc" />
            
            {/* Rich Clotted Cream / Malai Swirl inside */}
            <ellipse cx="75" cy="85" rx="66" ry="24" fill="url(#creamSurface)" />
            
            {/* Luxurious velvety wave ripples */}
            <path d="M 30 85 Q 55 95 80 82 Q 105 72 130 85" stroke="#fde68a" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M 45 92 Q 75 102 105 90" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />

            {/* Wooden cream ladle dipped */}
            <ellipse cx="115" cy="75" rx="15" ry="8" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
            <line x1="115" y1="75" x2="155" y2="30" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
            {/* Cream coating on ladle */}
            <ellipse cx="115" cy="74" rx="12" ry="5" fill="#ffffff" />
          </g>

          <g transform="translate(30, 230)">
            <rect width="125" height="26" rx="6" fill="#0f172a" opacity="0.9" />
            <text x="62" y="17" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle">FRESH MALAI</text>
          </g>
        </svg>
      );
  }
}
