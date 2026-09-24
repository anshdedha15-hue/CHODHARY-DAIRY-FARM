import React, { useState } from 'react';
import { X, ArrowRight, Camera, Upload, Check, Sparkles, Droplet, ShieldCheck } from 'lucide-react';
import { ProductItem } from '../data/farmData.ts';
import { ProductPhoto, saveCustomPhoto } from './ProductPhoto.tsx';

interface ProductPhotoModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSelectProductForEnquiry: (productName: string) => void;
}

export const ProductPhotoModal: React.FC<ProductPhotoModalProps> = ({
  product,
  onClose,
  onSelectProductForEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'studio' | 'packaging' | 'farm'>('studio');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  if (!product) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          saveCustomPhoto(product.id, event.target.result as string);
          setUploadSuccess(true);
          setTimeout(() => {
            window.location.reload(); // Quick refresh to show custom uploaded photo everywhere
          }, 400);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative bg-white max-w-3xl w-full rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <div className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
              High-Definition Product Photography
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-stone-900">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Close photo view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-5">
          
          {/* Main Large Photo Frame */}
          <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-stone-200 bg-stone-900 shadow-inner">
            <ProductPhoto
              productId={product.id}
              productName={product.name}
              category={product.category}
              viewMode={activeTab}
              className="w-full h-full"
            />
            
            {/* Packaging / Spec Badge on Photo */}
            <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg border border-stone-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Choudhary Dairy Farm · Fresh Batch</span>
            </div>
          </div>

          {/* Photo View Switcher & Custom Upload Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200">
              <button
                type="button"
                onClick={() => setActiveTab('studio')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'studio' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Studio Shot
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('packaging')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'packaging' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Packaging View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('farm')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'farm' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Farm Source
              </button>
            </div>

            {/* Custom Photo Upload for Farm Owner / User */}
            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors shadow-xs">
              <Upload className="w-3.5 h-3.5 text-emerald-700" />
              <span>{uploadSuccess ? 'Photo Updated!' : 'Upload Farm Photo'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Product Nutritional & Quality Profile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200/80 text-xs">
            <div>
              <span className="text-stone-400 block font-medium">Natural Butterfat</span>
              <span className="text-stone-900 font-bold text-sm tabular-nums">{product.fatContent}</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Solids Not Fat (SNF)</span>
              <span className="text-stone-900 font-bold text-sm tabular-nums">{product.snfContent}</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Extraction Schedule</span>
              <span className="text-stone-900 font-semibold">Twice Daily</span>
            </div>
            <div>
              <span className="text-stone-400 block font-medium">Shelf Life</span>
              <span className="text-stone-900 font-semibold">{product.shelfLife.split('(')[0]}</span>
            </div>
          </div>

          {/* Full Description & Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              About this Dairy Offering
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {product.fullDesc}
            </p>
            <div className="space-y-1.5">
              {product.highlights.map((hl) => (
                <div key={hl} className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
          >
            Back to Products
          </button>

          <button
            onClick={() => {
              const name = product.name;
              onClose();
              onSelectProductForEnquiry(name);
            }}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Enquire for {product.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
