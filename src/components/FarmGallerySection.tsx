import React, { useState } from 'react';
import { Camera, ZoomIn, Eye, Sparkles, Droplet } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/farmData.ts';
import { ProductPhoto } from './ProductPhoto.tsx';
import { ProductPhotoModal } from './ProductPhotoModal.tsx';

interface FarmGallerySectionProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export const FarmGallerySection: React.FC<FarmGallerySectionProps> = ({
  onSelectProductForEnquiry,
}) => {
  const [selectedPhotoProduct, setSelectedPhotoProduct] = useState<ProductItem | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Inspection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-white tracking-tight">
              Farm Product Photography Showcase
            </h2>
            <p className="mt-2 text-stone-300 text-sm leading-relaxed">
              Explore high-definition photos of our milk varieties, traditional churned butter, slow-simmered golden ghee, and thick earthen curd directly from our Old Gardhi Mendu farm.
            </p>
          </div>

          <div className="text-xs text-stone-400 shrink-0">
            Click any photo to zoom, inspect purity, or upload custom farm photos.
          </div>
        </div>

        {/* Masonry / Bento Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((product, idx) => (
            <div
              key={`gallery-${product.id}`}
              onClick={() => setSelectedPhotoProduct(product)}
              className={`group relative rounded-xl overflow-hidden bg-stone-800 border border-stone-700/80 hover:border-amber-400/60 cursor-pointer transition-all duration-200 flex flex-col ${
                idx === 0 || idx === 5 ? 'sm:col-span-2' : ''
              }`}
            >
              {/* Photo Area */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-stone-950">
                <ProductPhoto
                  productId={product.id}
                  productName={product.name}
                  category={product.category}
                  className="w-full h-full"
                  onOpenLightbox={() => setSelectedPhotoProduct(product)}
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10">
                  {product.category === 'milk' ? 'Fresh Milk Photo' : 'Handcrafted Dairy'}
                </div>

                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-amber-400 text-stone-950 font-bold shadow-lg flex items-center gap-1.5 text-xs">
                    <ZoomIn className="w-4 h-4" />
                    <span>Inspect Photo</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 bg-stone-800/90 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    Butterfat: <strong className="text-stone-200">{product.fatContent}</strong> · {product.packaging[0]}
                  </p>
                </div>
                <Eye className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / High-Def Photo Modal */}
      {selectedPhotoProduct && (
        <ProductPhotoModal
          product={selectedPhotoProduct}
          onClose={() => setSelectedPhotoProduct(null)}
          onSelectProductForEnquiry={onSelectProductForEnquiry}
        />
      )}
    </section>
  );
};
