"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Download, ZoomIn } from "lucide-react";

type Props = {
  image: string;
  productName: string;
};

export function ProductMainImage({ image, productName }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const img = new window.Image();
      img.crossOrigin = "Anonymous";
      img.src = `/${image}`;
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Add padding (make canvas 1.4x larger than image)
      const paddingFactor = 1.4;
      // Max canvas size to prevent extremely large downloads
      const MAX_CANVAS_SIZE = 1200;
      
      let canvasWidth = img.width * paddingFactor;
      let canvasHeight = img.height * paddingFactor;
      
      let scale = 1;
      if (canvasWidth > MAX_CANVAS_SIZE || canvasHeight > MAX_CANVAS_SIZE) {
        scale = Math.min(MAX_CANVAS_SIZE / canvasWidth, MAX_CANVAS_SIZE / canvasHeight);
        canvasWidth *= scale;
        canvasHeight *= scale;
      }
      
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      
      // Draw image centered
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      const x = (canvasWidth - drawWidth) / 2;
      const y = (canvasHeight - drawHeight) / 2;
      
      ctx.drawImage(img, x, y, drawWidth, drawHeight);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${productName.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, "image/png");
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      <div 
        className="relative w-[50%] sm:w-full h-48 sm:h-80 md:h-100 lg:h-125 group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={`/${image}`} 
          alt={`${productName} | Loc Troi Cambodia`} 
          title={`${productName} - Loc Troi Cambodia`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain drop-shadow-xl md:drop-shadow-2xl group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center rounded-2xl">
          <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-slate-800 text-sm px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0">
            <ZoomIn size={18} className="text-primary-600" />
            មើលធំ និងទាញយក
          </span>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 sm:gap-3 z-50">
            <button 
              className="flex items-center gap-1.5 sm:gap-2 text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/30 rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 transition-all active:scale-95 font-medium text-xs sm:text-base"
              onClick={handleDownload}
            >
              <Download size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">ទាញយករូបភាព</span>
            </button>
            <button 
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 sm:p-2.5 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
          
          <div 
            className="relative w-full max-w-5xl h-[80vh] sm:h-[90vh] animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={`/${image}`} 
              alt={productName} 
              fill 
              unoptimized
              className="object-contain drop-shadow-2xl p-6 sm:p-12 md:p-16" 
            />
          </div>
        </div>
      )}
    </>
  );
}
