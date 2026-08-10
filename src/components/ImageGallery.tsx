"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ImageIcon } from "lucide-react";

export function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="w-full mt-auto px-2 sm:px-4 md:px-6 mb-4 sm:mb-6 md:mb-8">
        <div className="flex md:grid md:grid-cols-2 gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
          {images.slice(0, 4).map((img, idx) => {
            if (img === "coming_soon") {
              return (
                <div 
                  key={idx} 
                  className="relative w-24 sm:w-32 md:w-full aspect-video md:aspect-3/2 shrink-0 snap-start bg-slate-100 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center text-slate-400 overflow-hidden"
                >
                  <ImageIcon className="opacity-50 w-5 h-5 md:w-8 md:h-8" />
                  <span className="text-[10px] md:text-sm font-medium mt-1 md:mt-2">ឆាប់ៗនេះ</span>
                </div>
              );
            }
            return (
              <div 
                key={idx} 
                className="relative w-24 sm:w-32 md:w-full aspect-video md:aspect-3/2 shrink-0 snap-start bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <Image 
                  src={`/${img}`} 
                  alt={`Related image ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/80 text-slate-800 text-xs px-2 py-1 rounded-md font-medium shadow-sm transition-opacity duration-300">
                    មើលធំ
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-[80vh] sm:h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={`/${selectedImage}`} 
              alt="Enlarged image" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      )}
    </>
  );
}
