"use client";

import { useState } from "react";
import { MapPin, Phone, Search, Store } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// List of all 25 provinces/capital of Cambodia
const provinces = [
  "គ្រប់ទីកន្លែង",
  "ភ្នំពេញ", "កណ្តាល", "តាកែវ", "កំពង់ចាម", "ត្បូងឃ្មុំ", 
  "ព្រៃវែង", "ស្វាយរៀង", "កំពង់ស្ពឺ", "កំពត", "កែប", 
  "ព្រះសីហនុ", "កោះកុង", "បាត់ដំបង", "បន្ទាយមានជ័យ", "ប៉ៃលិន", 
  "ពោធិ៍សាត់", "កំពង់ឆ្នាំង", "កំពង់ធំ", "សៀមរាប", "ឧត្តរមានជ័យ", 
  "ព្រះវិហារ", "ក្រចេះ", "ស្ទឹងត្រែង", "រតនគិរី", "មណ្ឌលគិរី"
];

const dealers = provinces.filter(p => p !== "គ្រប់ទីកន្លែង").map((province, index) => {
  const address = `ទីរួមខេត្ត${province}, ប្រទេសកម្ពុជា`;
  // Use index to make dummy data deterministic for SSR hydration
  const phonePart1 = 100 + (index * 13 % 899);
  const phonePart2 = 100 + (index * 29 % 899);
  return {
    id: index + 1,
    name: `ដេប៉ូកសិកម្ម Lộc Trời - សាខា${province}`,
    province: province,
    address: address,
    phone: `09${index % 10} ${phonePart1} ${phonePart2}`,
    mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=14&ie=UTF8&iwloc=B&output=embed`
  };
});

export const DealerLocator = () => {
  const [selectedProvince, setSelectedProvince] = useState("គ្រប់ទីកន្លែង");
  const [selectedDealer, setSelectedDealer] = useState(dealers[0]);

  const filteredDealers = selectedProvince === "គ្រប់ទីកន្លែង" 
    ? dealers 
    : dealers.filter(d => d.province === selectedProvince);

  return (
    <section id="dealers" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-koulen text-slate-800 mb-6 tracking-wide leading-relaxed">
            ទីតាំងតំណាងចែកចាយ <span className="text-primary-600">Lộc Trời</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            ស្វែងរកដេប៉ូ និងតំណាងចែកចាយផលិតផលរបស់យើងដែលនៅជិតអ្នកបំផុត ដើម្បីងាយស្រួលក្នុងការជាវ។
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto">
          
          {/* Left Panel - Dealer List */}
          <div className="w-full lg:w-2/5 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-100 h-[250px] md:h-[350px] lg:h-[450px]">
            {/* Filter */}
            <div className="p-3 md:p-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
              <div className="relative">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select 
                  className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 appearance-none font-bold text-slate-700 text-xs md:text-sm"
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  {provinces.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px] md:text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* List */}
            <div className="overflow-y-auto flex-1 p-1 md:p-2">
              <AnimatePresence mode="popLayout">
                {filteredDealers.map((dealer) => (
                  <motion.div
                    key={dealer.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => setSelectedDealer(dealer)}
                    className={`p-3 md:p-4 m-1.5 rounded-2xl cursor-pointer transition-all border-2 ${
                      selectedDealer.id === dealer.id 
                        ? "border-primary-500 bg-primary-50 shadow-md" 
                        : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-start gap-2.5 md:gap-3">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${
                        selectedDealer.id === dealer.id ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-500"
                      }`}>
                        <Store size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm md:text-base mb-0.5">{dealer.name}</h4>
                        <div className="flex items-start gap-1 text-slate-500 text-[11px] md:text-xs mb-1">
                          <MapPin size={12} className="shrink-0 mt-0.5 text-primary-500" />
                          <p className="line-clamp-2">{dealer.address}</p>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 font-bold text-[11px] md:text-xs">
                          <Phone size={10} className="text-accent-500" />
                          {dealer.phone}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredDealers.length === 0 && (
                <div className="p-4 md:p-6 text-center text-slate-400">
                  <MapPin className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 opacity-20" />
                  <p className="text-xs md:text-sm">មិនទាន់មានតំណាងចែកចាយនៅខេត្តនេះទេ</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Map */}
          <div className="w-full lg:w-3/5 h-[300px] md:h-[350px] lg:h-[450px] bg-slate-200 relative">
            <iframe 
              src={selectedDealer.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80"
            ></iframe>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center justify-between flex-wrap gap-2 md:gap-3">
                <div className="flex-1">
                  <div className="text-[9px] md:text-[10px] font-black text-primary-600 uppercase tracking-widest mb-0.5">ទីតាំងដែលបានជ្រើសរើស</div>
                  <h3 className="font-bold text-sm md:text-lg text-slate-800 leading-tight line-clamp-1">{selectedDealer.name}</h3>
                  <p className="text-slate-600 text-[11px] md:text-xs mt-0.5 line-clamp-1">{selectedDealer.address}</p>
                </div>
                <a 
                  href={`tel:${selectedDealer.phone.replace(/\s+/g, '')}`}
                  className="px-4 md:px-5 py-2 md:py-2.5 bg-primary-800 text-white rounded-full font-bold shadow-lg shadow-primary-900/20 hover:bg-primary-900 transition-colors flex items-center gap-1.5 text-xs md:text-sm shrink-0"
                >
                  <Phone size={14} />
                  ខល
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
