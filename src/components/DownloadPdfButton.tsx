"use client";

import { useState, useEffect, useRef } from "react";
import { Download, FlaskConical, Leaf, Tag, CheckCircle2, ChevronDown, BookOpen, FileText } from "lucide-react";
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
  allProducts?: ProductPdfData[];
};

const fetchAsBase64 = async (url: string) => {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch {
    return url;
  }
};

export function DownloadPdfButton({ product, allProducts }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingBook, setIsGeneratingBook] = useState(false);
  const [bookProgress, setBookProgress] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const [base64Images, setBase64Images] = useState({ 
    logo: "/photo/logo loctroi 6.png", 
    product: `/${product.image}` 
  });

  const [activeBookProduct, setActiveBookProduct] = useState<{product: ProductPdfData, imageBase64: string, logoBase64: string} | null>(null);

  useEffect(() => {
    Promise.all([
      fetchAsBase64("/photo/logo loctroi 6.png"),
      fetchAsBase64(`/${product.image}`)
    ]).then(([logo, prod]) => {
      setBase64Images({ logo, product: prod });
    });
  }, [product.image]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownloadPdf = async () => {
    setShowMenu(false);
    const element = document.getElementById("pdf-template-content");
    if (!element) return;

    setIsGenerating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const imgData = await htmlToImage.toJpeg(element, {
        quality: 1.0,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        width: 794,
        height: 1123,
        style: { transform: 'none' }
      });

      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${product.name.replace(/[^a-zA-Z0-9]/g, '_')}_details.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadBookPdf = async () => {
    setShowMenu(false);
    if (!allProducts || allProducts.length === 0) return;
    setIsGeneratingBook(true);
    try {
      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const logoBase64 = await fetchAsBase64("/photo/logo loctroi 6.png");

      for (let i = 0; i < allProducts.length; i++) {
        setBookProgress(`កំពុងទាញយក... ${i + 1}/${allProducts.length}`);
        const currentProd = allProducts[i];
        
        setActiveBookProduct({
          product: currentProd,
          imageBase64: await fetchAsBase64(`/${currentProd.image}`),
          logoBase64
        });

        // wait for React to render the new state
        await new Promise((resolve) => setTimeout(resolve, 300));

        const element = document.getElementById("pdf-book-template-content");
        if (!element) continue;

        const imgData = await htmlToImage.toJpeg(element, {
          quality: 1.0,
          backgroundColor: '#ffffff',
          pixelRatio: 2,
          width: 794,
          height: 1123,
          style: { transform: 'none' }
        });

        if (i > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save("Loctroi_Products_Catalog.pdf");
    } catch (error) {
      console.error("Error generating book PDF:", error);
    } finally {
      setIsGeneratingBook(false);
      setActiveBookProduct(null);
      setBookProgress("");
    }
  };

  const renderPdfTemplate = (prod: ProductPdfData, images: {logo: string, product: string}, id: string) => (
    <div className="fixed top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none opacity-0 z-[-9999]" aria-hidden="true">
      <div id={id} style={{ width: '794px', height: '1123px' }} className="bg-white text-slate-800 flex flex-col relative overflow-hidden font-sans">
        <div className="px-14 pt-14 pb-8 flex justify-between items-end border-b-2 border-primary-600">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images.logo} alt="Loc Troi" className="h-14 object-contain" />
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
        <div className="flex-1 px-14 py-10 flex flex-col">
          <div className="mb-10">
            <span className="inline-block px-4 py-1 border border-primary-500 text-primary-700 font-bold rounded-full uppercase tracking-wider text-xs mb-4">
              {prod.category}
            </span>
            <h1 className="text-[42px] font-black text-slate-900 leading-tight mb-4">{prod.name}</h1>
          </div>
          <div className="flex gap-14 flex-1">
            <div className="w-[45%] flex flex-col items-center justify-start pt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images.product} alt={prod.name} className="w-full h-auto max-h-150 object-contain drop-shadow-xl" />
            </div>
            <div className="w-[55%] flex flex-col gap-8 pt-2">
              {prod.ingredients && (
                <div>
                  <h3 className="text-primary-800 font-bold text-lg uppercase tracking-wider mb-3 flex items-center gap-3">
                    <FlaskConical size={20} className="text-primary-500"/>
                    {prod.labels.ingredients}
                  </h3>
                  <div className="h-0.5 w-12 bg-primary-500 mb-4"></div>
                  <p className="text-slate-800 font-semibold text-lg leading-relaxed">{prod.ingredients}</p>
                  {prod.ingredientDetails && (
                    <div className="mt-4 text-slate-600 text-sm leading-relaxed space-y-2">
                      {prod.ingredientDetails.split('\n').map((line, i) => (<p key={i}>{line}</p>))}
                    </div>
                  )}
                </div>
              )}
              {prod.benefits && prod.benefits.length > 0 && (
                <div>
                  <h3 className="text-primary-800 font-bold text-lg uppercase tracking-wider mb-3 flex items-center gap-3">
                    <Leaf size={20} className="text-primary-500"/>
                    {prod.labels.benefits}
                  </h3>
                  <div className="h-0.5 w-12 bg-primary-500 mb-4"></div>
                  <ul className="space-y-4">
                    {prod.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <CheckCircle2 size={20} className="text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {prod.usage && (
                <div>
                  <h3 className="text-primary-800 font-bold text-lg uppercase tracking-wider mb-3 flex items-center gap-3">
                    <Tag size={20} className="text-primary-500"/>
                    {prod.labels.usage}
                  </h3>
                  <div className="h-0.5 w-12 bg-primary-500 mb-4"></div>
                  <p className="text-slate-700 text-base leading-relaxed">{prod.usage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-14 py-8 flex justify-between items-center text-slate-400 text-xs uppercase tracking-wider border-t border-slate-100">
          <p>Loc Troi Cambodia © {new Date().getFullYear()}</p>
          <p>Date: {new Date().toLocaleDateString('en-GB')}</p>
        </div>
        <div className="h-2 w-full bg-primary-700 absolute bottom-0 left-0"></div>
      </div>
    </div>
  );

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex bg-slate-100 hover:bg-slate-200 rounded-full transition-colors divide-x divide-slate-300 shadow-sm border border-slate-200">
        <button
          onClick={handleDownloadPdf}
          disabled={isGenerating || isGeneratingBook}
          className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 gap-2 text-slate-700 rounded-l-full font-medium disabled:opacity-50 transition-colors"
          title="Download as PDF"
        >
          <Download size={18} />
          <span className="hidden sm:inline whitespace-nowrap">
            {isGenerating ? "កំពុងទាញយក..." : isGeneratingBook ? bookProgress : "ទាញយក PDF"}
          </span>
        </button>
        {allProducts && allProducts.length > 0 && (
          <button
            onClick={() => setShowMenu(!showMenu)}
            disabled={isGenerating || isGeneratingBook}
            className="inline-flex items-center justify-center px-2 sm:px-3 text-slate-700 rounded-r-full disabled:opacity-50 hover:bg-slate-300 transition-colors"
            title="More options"
          >
            <ChevronDown size={18} />
          </button>
        )}
      </div>

      {showMenu && !isGenerating && !isGeneratingBook && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
          <div className="p-1.5">
            <button
              onClick={handleDownloadPdf}
              className="w-full flex items-center gap-3 px-3 py-3 hover:bg-slate-50 text-slate-700 rounded-lg text-sm text-left transition-colors font-medium"
            >
              <FileText size={18} className="text-primary-600 shrink-0" />
              <span>ទាញយក PDF ផលិតផលនេះ</span>
            </button>
            <button
              onClick={handleDownloadBookPdf}
              className="w-full flex items-center gap-3 px-3 py-3 hover:bg-slate-50 text-slate-700 rounded-lg text-sm text-left transition-colors font-medium mt-1"
            >
              <BookOpen size={18} className="text-accent-500 shrink-0" />
              <span>ទាញយកសៀវភៅ PDF (ផលិតផលទាំងអស់)</span>
            </button>
          </div>
        </div>
      )}

      {renderPdfTemplate(product, base64Images, "pdf-template-content")}
      
      {activeBookProduct && renderPdfTemplate(
        activeBookProduct.product, 
        { logo: activeBookProduct.logoBase64, product: activeBookProduct.imageBase64 }, 
        "pdf-book-template-content"
      )}
    </div>
  );
}
