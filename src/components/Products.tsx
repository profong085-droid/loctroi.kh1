"use client";

import { useState, useMemo, ElementType, useRef } from "react";
import Image from "next/image";
import { Search, Tag, X, ChevronDown, ZoomIn } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { productsData, categories, Product } from "@/data/products";

import { 
  PiSquaresFourDuotone, 
  PiBugBeetleDuotone, 
  PiLeafDuotone, 
  PiShieldWarningDuotone, 
  PiBugDuotone, 
  PiFlaskDuotone, 
  PiPlantDuotone, 
  PiStarDuotone 
} from "react-icons/pi";

const Icon = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
  const iconMap: Record<string, ElementType> = {
    'layout-grid': PiSquaresFourDuotone,
    'bug': PiBugBeetleDuotone,
    'leaf': PiLeafDuotone,
    'shield-alert': PiShieldWarningDuotone,
    'snail': PiBugDuotone, // Using bug duotone as fallback for snail
    'flask-conical': PiFlaskDuotone,
    'wheat': PiPlantDuotone,
    'star': PiStarDuotone
  };
  const IconComponent = iconMap[name] || PiSquaresFourDuotone;
  return <IconComponent size={size} className={className} />;
};

export const Products = () => {
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchCat = activeCat === "all" || p.category === activeCat;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.categoryKh.includes(search);
      return matchCat && matchSearch;
    });
  }, [activeCat, search]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleInquireProduct = async (product: Product) => {
    setSelectedProduct(null);
    
    try {
      await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "product-inquiry",
          productName: product.name,
          productCategory: product.categoryKh,
          productUsage: product.usage,
          productImage: product.image,
        }),
      });
    } catch (error) {
      console.error("Failed to send product inquiry", error);
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-koulen text-primary-950 mb-6 tracking-wide leading-relaxed">ផលិតផលរបស់យើង</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">ស្វែងរកផលិតផលថ្នាំកសិកម្ម ជី និងពូជស្រូវគុណភាពខ្ពស់សម្រាប់ដំណាំគ្រប់ប្រភេទ</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-8 mb-12 max-w-5xl mx-auto">
          {/* Search */}
          <div className="relative max-w-xl mx-auto w-full group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="ស្វែងរកផលិតផល..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(12); }}
              className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 rounded-full focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-lg shadow-sm"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActiveCat(cat.id); setVisibleCount(12); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCat === cat.id
                    ? "bg-primary-800 text-white shadow-lg shadow-primary-800/30"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-primary-300 hover:bg-primary-50"
                }`}
              >
                <Icon name={cat.icon} size={16} />
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="text-sm text-slate-500 mb-8 font-medium text-center">
          បង្ហាញ {displayedProducts.length} នៃ {filteredProducts.length} ផលិតផល
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-24 bg-white rounded-3xl border border-slate-100"
            >
              <div className="flex justify-center mb-6 text-slate-300"><Search size={64} /></div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">រកមិនឃើញផលិតផល</h3>
              <p className="text-slate-500">សូមសាកល្បងស្វែងរកពាក្យផ្សេង ឬជ្រើសរើសប្រភេទផ្សេង</p>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
              {displayedProducts.map((product, i) => {
                const categoryData = categories.find(c => c.id === product.category);
                return (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    categoryData={categoryData} 
                    onClick={() => setSelectedProduct(product)} 
                    index={i} 
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="flex items-center gap-2 px-10 py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-full font-bold transition-all shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 hover:-translate-y-1"
            >
              <ChevronDown size={20} />
              មើលបន្ថែមទៀត
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setSelectedProduct(null)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl md:rounded-4xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <ModalImage3D image={selectedProduct.image} alt={selectedProduct.name} />
              
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-xs font-black rounded-full uppercase tracking-wider mb-6 w-max">
                  {selectedProduct.categoryKh}
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-slate-800 mb-4 md:mb-6 leading-tight">
                  {selectedProduct.name}
                </h3>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Tag size={18} className="text-accent-500" />
                    ព័ត៌មានលម្អិត
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {selectedProduct.usage}
                  </p>
                </div>
                
                <div className="flex flex-col gap-3 mt-8">
                  <button 
                    className="px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl w-full"
                    onClick={() => handleInquireProduct(selectedProduct)}
                  >
                    សាកសួរព័ត៌មានបន្ថែម
                  </button>
                  <Link 
                    href={`/product/${selectedProduct.id}`}
                    className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-primary-800 text-primary-800 hover:bg-primary-50 rounded-full font-bold transition-all w-full text-center"
                    onClick={() => setSelectedProduct(null)}
                  >
                    ចូលមើលទំព័រពេញ
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// 3D Tilt Product Card
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ product, categoryData, onClick, index }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0.1, 0.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-white rounded-2xl md:rounded-4xl shadow-sm hover:shadow-2xl cursor-pointer flex flex-col h-auto min-h-[250px] md:min-h-[400px] transition-shadow duration-500 border border-slate-50 overflow-hidden"
      >
        {/* Glare Effect */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none rounded-2xl md:rounded-4xl mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`,
            left: glareX,
            top: glareY,
            opacity: glareOpacity,
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />

        <div className="relative h-40 md:h-64 p-4 md:p-8 flex items-center justify-center overflow-hidden bg-linear-to-b from-transparent to-slate-50/50">
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="absolute top-2 left-2 md:top-4 md:left-4 px-2 md:px-4 py-1 bg-primary-100/80 backdrop-blur text-primary-800 text-[9px] md:text-[10px] font-black rounded-full uppercase tracking-wider z-10 flex items-center gap-1.5"
          >
            <Icon name={categoryData?.icon || "tag"} size={12} />
            {product.categoryKh}
          </div>
          <div 
            style={{ transform: "translateZ(40px)" }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary-800 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10 shadow-lg"
          >
            <ZoomIn size={18} />
          </div>
          <motion.div 
            style={{ transform: "translateZ(60px)" }}
            className="relative w-full h-full group-hover:scale-110 transition-transform duration-700"
          >
            <Image
              src={`/${product.image}`}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl pointer-events-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
        </div>
        
        <div 
          style={{ transform: "translateZ(20px)" }}
          className="p-3 md:p-6 flex-1 flex flex-col justify-end text-center bg-white z-20"
        >
          <h4 className="font-black text-slate-800 text-sm md:text-xl truncate mb-1">{product.name}</h4>
          <p className="text-accent-500 text-[10px] md:text-sm font-bold">{product.categoryKh}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 3D Tilt Modal Image
const ModalImage3D = ({ image, alt }: { image: string, alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full md:w-1/2 p-6 md:p-12 bg-slate-50 flex items-center justify-center min-h-[200px] md:min-h-[300px]" style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[200px] md:h-[400px] rounded-2xl group cursor-crosshair"
      >
        {/* Glare Effect */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`,
            left: glareX,
            top: glareY,
            opacity: glareOpacity,
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
        <motion.div 
          style={{ transform: "translateZ(50px)" }}
          className="relative w-full h-full group-hover:scale-105 transition-transform duration-500"
        >
          <Image 
            src={`/${image}`} 
            alt={alt} 
            fill
            className="object-contain drop-shadow-2xl pointer-events-none" 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
