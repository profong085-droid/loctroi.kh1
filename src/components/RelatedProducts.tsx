"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { productsData, getLocalizedText } from "@/data/products";
import { useTranslations } from "next-intl";

export function RelatedProducts({ 
  currentProductId, 
  category, 
  locale 
}: { 
  currentProductId: string; 
  category: string; 
  locale: string;
}) {
  const tCat = useTranslations("Products");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Filter products by same category, exclude current one
  const relatedProducts = productsData
    .filter(p => p.category === category && p.id !== currentProductId)
    .slice(0, 8); // Show up to 8 products

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [relatedProducts.length]);

  useEffect(() => {
    if (isHovered || relatedProducts.length <= 2) return;
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered, relatedProducts.length]);

  if (relatedProducts.length === 0) return null;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Translations for the UI
  const relatedTitle = locale === 'kh' ? 'ផលិតផលពាក់ព័ន្ធ' : locale === 'vi' ? 'Sản phẩm liên quan' : 'Related Products';
  const viewText = locale === 'kh' ? 'មើលលម្អិត' : locale === 'vi' ? 'Xem chi tiết' : 'View Details';

  const getCatName = (catId: string) => {
    try {
      return tCat(`category_${catId}`);
    } catch {
      return catId;
    }
  };

  return (
    <div className="mt-16 md:mt-24 border-t border-slate-200 pt-12 pb-12">
      <div className="flex items-center justify-between mb-8 relative">
        <h2 className="text-2xl md:text-3xl font-black text-primary-900 border-l-4 border-accent-500 pl-4">
          {relatedTitle}
        </h2>
        
        {relatedProducts.length > 2 && (
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollLeft ? 'bg-white border border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'}`}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollRight ? 'bg-white border border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'}`}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {relatedProducts.map((product) => {
            return (
              <div 
                key={product.id}
                className="min-w-37.5 sm:min-w-50 md:min-w-70 snap-start flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group hover:-translate-y-1"
              >
                <Link href={`/${locale}/product/${product.id}`} className="flex-1 flex flex-col">
                  <div className="relative h-32 sm:h-40 md:h-56 p-3 md:p-6 bg-linear-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden border-b border-slate-50">
                    <div className="absolute top-3 left-3 px-2 py-1 bg-primary-100/80 backdrop-blur text-primary-800 text-[10px] font-black rounded-full uppercase tracking-wider z-10">
                      {getCatName(product.category) || product.categoryKh}
                    </div>
                    <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={`/${product.image}`}
                        alt={getLocalizedText(product.name, locale)}
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  </div>
                  
                  <div className="p-3 md:p-5 flex-1 flex flex-col text-center items-center justify-center">
                    <h3 className="font-black text-slate-800 text-[13px] md:text-lg line-clamp-2 mb-2 md:mb-4 group-hover:text-primary-700 transition-colors leading-tight">
                      {getLocalizedText(product.name, locale)}
                    </h3>
                    <div className="mt-auto pt-2 w-full">
                      <div className="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2 bg-primary-700 text-white rounded-full font-bold text-[11px] md:text-sm shadow-md group-hover:bg-primary-900 group-hover:shadow-lg transition-all w-full justify-center">
                        <Eye size={16} /> {viewText}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
