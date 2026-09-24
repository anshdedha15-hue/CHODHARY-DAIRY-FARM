import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Info, ZoomIn, Camera } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/farmData.ts';
import { ProductPhoto } from './ProductPhoto.tsx';
import { ProductPhotoModal } from './ProductPhotoModal.tsx';

interface ProductsSectionProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForEnquiry }) => {
  const [filter, setFilter] = useState<'all' | 'milk' | 'traditional'>('all');
  const [selectedProductDetail, setSelectedProductDetail] = useState<ProductItem | null>(null);
  const [selectedPhotoProduct, setSelectedPhotoProduct] = useState<ProductItem | null>(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="products" className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
              Farm-Fresh Offerings
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-stone-950 tracking-tight">
              Pure Milk &amp; Traditional Dairy Products
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Every item is freshly extracted or handcrafted at Choudhary Dairy Farm in Old Gardhi Mendu. Free from preservatives, additives, and adulteration.
            </p>
          </div>

          {/* Functional interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg shrink-0 self-start md:self-end border border-stone-200/60">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All 7 Products
            </button>
            <button
              onClick={() => setFilter('milk')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'milk'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Fresh Milk Varieties
            </button>
            <button
              onClick={() => setFilter('traditional')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filter === 'traditional'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Curd, Butter, Ghee &amp; Cream
            </button>
          </div>
        </div>

        {/* Product Cards Grid: 3-column desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-stone-200/90 hover:border-emerald-700/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Visual Photo Area */}
              <div>
                <div
                  onClick={() => setSelectedPhotoProduct(product)}
                  className="relative h-52 w-full overflow-hidden bg-stone-100 cursor-pointer"
                  title="Click to view full photo and specs"
                >
                  <ProductPhoto
                    productId={product.id}
                    productName={product.name}
                    category={product.category}
                    className="w-full h-full"
                    onOpenLightbox={() => setSelectedPhotoProduct(product)}
                  />

                  {/* Price Tag Pill */}
                  <span className="absolute top-3 left-3 bg-emerald-900/90 text-amber-300 font-bold px-2.5 py-1 rounded-md text-xs shadow-md border border-emerald-700/50 backdrop-blur-xs flex items-baseline gap-1 z-10">
                    <span className="text-sm font-serif-display font-extrabold">{product.priceDisplay}</span>
                    <span className="text-[10px] text-emerald-200 font-normal">/{product.priceUnit}</span>
                  </span>

                  {product.tag && (
                    <span className="absolute top-3 right-3 text-[11px] font-semibold text-emerald-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-stone-200/80 shadow-xs z-10">
                      {product.tag}
                    </span>
                  )}

                  {/* Photo Indicator Badge */}
                  <span className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-3 h-3 text-amber-400" />
                    <span>View Photo</span>
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-5 space-y-3">
                  {/* Category kicker & Price row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-800">
                      {product.category === 'milk' ? 'Fresh Farm Milk' : 'Handcrafted Dairy'}
                    </span>
                    <span className="text-xs font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                      {product.priceDisplay} / {product.priceUnit}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedPhotoProduct(product)}
                    className="text-lg font-serif-display font-bold text-stone-900 group-hover:text-emerald-900 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed min-h-[38px]">
                    {product.shortDesc}
                  </p>

                  {/* Price packaging breakdown banner */}
                  {product.secondaryPrice && (
                    <div className="text-[11px] text-stone-500 font-medium bg-stone-50 px-2.5 py-1 rounded border border-stone-100 flex items-center justify-between">
                      <span className="text-stone-400">Available size</span>
                      <span className="text-stone-700 font-semibold">{product.secondaryPrice}</span>
                    </div>
                  )}

                  {/* Composition / Quality specs */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span>
                      Fat: <strong className="text-stone-800 tabular-nums">{product.fatContent}</strong>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      SNF: <strong className="text-stone-800 tabular-nums">{product.snfContent}</strong>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[11px] text-stone-600 truncate max-w-[100px]">
                      {product.packaging[0].split(' - ')[0]}
                    </span>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-1 pt-1">
                    {product.highlights.slice(0, 2).map((hl) => (
                      <div key={hl} className="flex items-center gap-1.5 text-[11px] text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0 mt-3 border-t border-stone-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedPhotoProduct(product)}
                  className="flex-1 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-stone-500" />
                  <span>Photo View</span>
                </button>

                <button
                  onClick={() => onSelectProductForEnquiry(product.name)}
                  className="flex-2 px-3 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-xs"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Notice on freshness & morning deliveries */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-amber-950">
              Looking for regular daily milk delivery or weekly dairy supply in Delhi?
            </h4>
            <p className="text-xs text-amber-900/80 mt-0.5">
              We supply fresh morning and evening milk to nearby households in Old Gardhi Mendu and East Delhi. Enquire for regular schedules.
            </p>
          </div>
          <button
            onClick={() => onSelectProductForEnquiry('Daily Milk Delivery')}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Enquire for Daily Supply
          </button>
        </div>

      </div>

      {/* High-Definition Photo Modal */}
      {selectedPhotoProduct && (
        <ProductPhotoModal
          product={selectedPhotoProduct}
          onClose={() => setSelectedPhotoProduct(null)}
          onSelectProductForEnquiry={onSelectProductForEnquiry}
        />
      )}

      {/* Product Detail Modal */}
      {selectedProductDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-2xl border border-stone-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                  {selectedProductDetail.category === 'milk' ? 'Milk Variety' : 'Dairy Product'}
                </span>
                <h3 className="text-xl font-serif-display font-bold text-stone-900 mt-0.5">
                  {selectedProductDetail.name}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-lg font-bold font-serif-display text-emerald-900">
                    {selectedProductDetail.priceDisplay}
                  </div>
                  <div className="text-[10px] text-stone-500 font-medium">
                    per {selectedProductDetail.priceUnit}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProductDetail(null)}
                  className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100 text-sm font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              {selectedProductDetail.fullDesc}
            </p>

            <div className="grid grid-cols-2 gap-3 p-3 bg-stone-50 rounded-xl text-xs border border-stone-100">
              <div>
                <span className="text-stone-400 block font-medium">Butterfat Content</span>
                <strong className="text-stone-800 tabular-nums">{selectedProductDetail.fatContent}</strong>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">Solids-Not-Fat (SNF)</span>
                <strong className="text-stone-800 tabular-nums">{selectedProductDetail.snfContent}</strong>
              </div>
              <div className="col-span-2">
                <span className="text-stone-400 block font-medium">Recommended For</span>
                <span className="text-stone-700">{selectedProductDetail.bestFor}</span>
              </div>
              <div className="col-span-2">
                <span className="text-stone-400 block font-medium">Packaging Sizes</span>
                <span className="text-stone-700">{selectedProductDetail.packaging.join(' · ')}</span>
              </div>
              <div className="col-span-2">
                <span className="text-stone-400 block font-medium">Shelf Life &amp; Storage</span>
                <span className="text-stone-700">{selectedProductDetail.shelfLife}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-stone-700">Quality Guarantees:</span>
              {selectedProductDetail.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-stone-600">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedProductDetail(null)}
                className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedProductDetail.name;
                  setSelectedProductDetail(null);
                  onSelectProductForEnquiry(name);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Make Enquiry for this Product</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

