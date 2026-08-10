"use client";

import { useState } from "react";
import { Download, FlaskConical, Leaf, Tag, CheckCircle2 } from "lucide-react";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";

export type ProductPdfData = {
  name: string;
  category: string;
  image: string;
  ingredients: string;
  ingredientDetails: string;
  benefits: string[];
  usage: string;
  labels: {
    ingredients: string;
    ingredientDetails: string;
    benefits: string;
    usage: string;
  };
};

type Props = {
  product: ProductPdfData;
};

export function DownloadPdfButton({ product }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    const element = document.getElementById("pdf-template-content");
    if (!element) return;

    setIsGenerating(true);
    try {
      // Small delay to ensure any UI states are settled
      await new Promise((resolve) => setTimeout(resolve, 100));

      const imgData = await htmlToImage.toJpeg(element, {
        quality: 1.0,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        width: 794,
        height: 1123,
        style: {
          transform: 'none',
        }
      });

      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // We know the aspect ratio is exactly A4 (794x1123 is roughly 1:1.414)
      // So we can stretch it to fit the page perfectly.
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

      pdf.save(`${product.name.replace(/[^a-zA-Z0-9]/g, '_')}_details.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button
        onClick={handleDownloadPdf}
        disabled={isGenerating}
        className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium transition-colors disabled:opacity-50"
        title="Download as PDF"
      >
        <Download size={18} />
        <span className="hidden sm:inline">
          {isGenerating ? "កំពុងទាញយក..." : "ទាញយក PDF"}
        </span>
      </button>

      {/* Hidden PDF Template designed specifically for A4 format (794x1123 px at 96 DPI) */}
      <div className="fixed top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none opacity-0 z-[-9999]" aria-hidden="true">
        <div id="pdf-template-content" style={{ width: '794px', height: '1123px' }} className="bg-white text-slate-800 flex flex-col relative overflow-hidden font-sans">
          
          {/* Header */}
          <div className="px-14 pt-14 pb-8 flex justify-between items-end border-b-2 border-primary-600">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo/logo loctroi 6.png" alt="Loc Troi" className="h-14 object-contain" />
              <div className="flex flex-col">
                <span className="font-black text-3xl text-primary-800 tracking-tight leading-none">LỘC TRỜI</span>
                <span className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] mt-1">Cambodia</span>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className="text-primary-700 font-bold tracking-widest uppercase text-sm mb-1">Product Specification</span>
              <span className="text-slate-500 text-xs">www.loctroi.online</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 px-14 py-10 flex flex-col">
            
            {/* Title Section */}
            <div className="mb-10">
              <span className="inline-block px-4 py-1 border border-primary-500 text-primary-700 font-bold rounded-full uppercase tracking-wider text-xs mb-4">
                {product.category}
              </span>
              <h1 className="text-[42px] font-black text-slate-900 leading-tight mb-4">{product.name}</h1>
            </div>

            {/* Two Column Layout */}
            <div className="flex gap-14 flex-1">
              
              {/* Left Column: Image */}
              <div className="w-[45%] flex flex-col items-center justify-start pt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/${product.image}`} 
                  alt={product.name} 
                  className="w-full h-auto max-h-150 object-contain drop-shadow-xl"
                />
              </div>

              {/* Right Column: Details */}
              <div className="w-[55%] flex flex-col gap-8 pt-2">
                
                {product.ingredients && (
                  <div>
                    <h3 className="text-primary-800 font-bold text-lg uppercase tracking-wider mb-3 flex items-center gap-3">
                      <FlaskConical size={20} className="text-primary-500"/>
                      {product.labels.ingredients}
                    </h3>
                    <div className="h-0.5 w-12 bg-primary-500 mb-4"></div>
                    <p className="text-slate-800 font-semibold text-lg leading-relaxed">{product.ingredients}</p>
                    
                    {product.ingredientDetails && (
                      <div className="mt-4 text-slate-600 text-sm leading-relaxed space-y-2">
                        {product.ingredientDetails.split('\n').map((line, i) => (
                           <p key={i}>{line}</p>
                         ))}
                      </div>
                    )}
                  </div>
                )}

                {product.benefits && product.benefits.length > 0 && (
                  <div>
                    <h3 className="text-primary-800 font-bold text-lg uppercase tracking-wider mb-3 flex items-center gap-3">
                      <Leaf size={20} className="text-primary-500"/>
                      {product.labels.benefits}
                    </h3>
                    <div className="h-0.5 w-12 bg-primary-500 mb-4"></div>
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <CheckCircle2 size={20} className="text-primary-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-base leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.usage && (
                  <div>
                    <h3 className="text-primary-800 font-bold text-lg uppercase tracking-wider mb-3 flex items-center gap-3">
                      <Tag size={20} className="text-primary-500"/>
                      {product.labels.usage}
                    </h3>
                    <div className="h-0.5 w-12 bg-primary-500 mb-4"></div>
                    <p className="text-slate-700 text-base leading-relaxed">
                      {product.usage}
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-14 py-8 flex justify-between items-center text-slate-400 text-xs uppercase tracking-wider border-t border-slate-100">
            <p>Loc Troi Cambodia © {new Date().getFullYear()}</p>
            <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
          </div>
          
          {/* Bottom Accent Line */}
          <div className="h-2 w-full bg-primary-700 absolute bottom-0 left-0"></div>
        </div>
      </div>
    </>
  );
}
