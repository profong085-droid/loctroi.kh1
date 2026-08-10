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
      const response = await fetch(`/${image}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      // Extract extension if possible, default to jpg
      const ext = image.split('.').pop() || 'jpg';
      a.download = `${productName.replace(/[^a-zA-Z0-9]/g, '_')}.${ext}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
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
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-3 z-50">
            <button 
              className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/30 rounded-full px-5 py-2.5 transition-all active:scale-95 font-medium"
              onClick={handleDownload}
            >
              <Download size={20} />
              <span className="hidden sm:inline">ទាញយករូបភាព</span>
            </button>
            <button 
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X size={24} />
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
              className="object-contain drop-shadow-2xl" 
            />
          </div>
        </div>
      )}
    </>
  );
}
