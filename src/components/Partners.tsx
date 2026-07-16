"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const partners = [
  { name: "Lộc Trời Group", id: 1 },
  { name: "Syngenta", id: 2 },
  { name: "Bayer", id: 3 },
  { name: "Corteva", id: 4 },
  { name: "BASF", id: 5 },
  { name: "UPL", id: 6 },
  { name: "Nufarm", id: 7 },
];

export const Partners = () => {
  const t = useTranslations("Partners");
  
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">
          {t("title")}
        </h3>
      </div>
      
      {/* Infinite Scrolling Marquee */}
      <div className="relative flex max-w-7xl mx-auto overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10"></div>
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <h4 className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">
                {partner.name}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
