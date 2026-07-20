"use client";

import { useState, useMemo, ElementType, useEffect } from "react";
import Image from "next/image";
import { Search, ChevronDown, ChevronLeft, ChevronRight, X, LayoutGrid, Snail, Leaf, Bug, ShieldAlert, Sprout, Wheat, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { productsData, categories, getLocalizedText } from "@/data/products";
import { useTranslations, useLocale } from "next-intl";

const Icon = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
  const iconMap: Record<string, ElementType> = {
    'layout-grid': LayoutGrid,
    'bug': Bug,
    'leaf': Leaf,
    'shield-alert': ShieldAlert,
    'snail': Snail,
    'flask-conical': Sprout,
    'wheat': Wheat,
    'star': Sparkles
  };
  const IconComponent = iconMap[name] || LayoutGrid;
  return <IconComponent size={size} className={className} />;
};

// Banner Carousel Component
const BannerCarousel = ({ baseBanners, bannerImages }: { baseBanners: { src: string; alt: string }[], bannerImages: { src: string; alt: string }[] }) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const handleNextBanner = () => setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
  const handlePrevBanner = () => setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="mb-12 md:mb-16 relative w-full max-w-7xl mx-auto h-[140px] sm:h-[300px] md:h-[400px] flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center overflow-visible">
        {bannerImages.map((banner, index) => {
          let position = "hidden";
          if (index === currentBanner) position = "center";
          else if (index === (currentBanner - 1 + bannerImages.length) % bannerImages.length) position = "left1";
          else if (index === (currentBanner + 1) % bannerImages.length) position = "right1";
          else if (index === (currentBanner - 2 + bannerImages.length) % bannerImages.length) position = "left2";
          else if (index === (currentBanner + 2) % bannerImages.length) position = "right2";

          return (
            <div
              key={index}
              className={`absolute w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] aspect-3/2 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out flex items-center justify-center ring-2 ring-black/5 ${
                position === "center"
                  ? "translate-x-0 scale-100 z-30 opacity-100 ring-primary-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  : position === "left1"
                  ? "translate-x-[-50%] sm:translate-x-[-60%] md:translate-x-[-70%] lg:translate-x-[-80%] scale-[0.75] z-20 opacity-80 cursor-pointer hover:opacity-100 shadow-lg"
                  : position === "right1"
                  ? "translate-x-[50%] sm:translate-x-[60%] md:translate-x-[70%] lg:translate-x-[80%] scale-[0.75] z-20 opacity-80 cursor-pointer hover:opacity-100 shadow-lg"
                  : position === "left2"
                  ? "translate-x-[-90%] sm:translate-x-[-110%] md:translate-x-[-125%] lg:translate-x-[-140%] scale-[0.55] z-10 opacity-60 cursor-pointer hover:opacity-90 shadow-md"
                  : position === "right2"
                  ? "translate-x-[90%] sm:translate-x-[110%] md:translate-x-[125%] lg:translate-x-[140%] scale-[0.55] z-10 opacity-60 cursor-pointer hover:opacity-90 shadow-md"
                  : "opacity-0 z-0 pointer-events-none scale-[0.4]"
              }`}
              onClick={() => {
                if (position !== "center" && position !== "hidden") {
                  setCurrentBanner(index);
                }
              }}
            >
              {position !== "hidden" && (
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  title={banner.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 35vw"
                  className="object-cover"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-8 z-40">
        <button 
          aria-label="Previous banner"
          onClick={handlePrevBanner}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:text-primary-800 hover:scale-110 transition-all duration-300 shadow-md group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        
        <div className="hidden sm:flex gap-2">
          {baseBanners.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-500 ${idx === (currentBanner % baseBanners.length) ? "w-8 bg-primary-600" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>

        <button 
          aria-label="Next banner"
          onClick={handleNextBanner}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:text-primary-800 hover:scale-110 transition-all duration-300 shadow-md group"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export const Products = () => {
  const t = useTranslations("Products");
  const locale = useLocale() as "kh" | "en" | "vi";

  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const router = useRouter();

  const baseBanners = [
    { src: "/banner តាសុខ/តាសុខខ្លាំង.jpg", alt: "ថ្នាំកសិកម្ម តាសុខខ្លាំង លេខមួយពីក្រុមហ៊ុន Lộc Trời Cambodia ជួយការពារនិងកម្ចាត់រោគសត្វល្អិត" },
    { src: "/banner តាសុខ/តាសុខ.jpg", alt: "ផលិតផលថ្នាំកសិកម្ម តាសុខ គុណភាពខ្ពស់ ផ្តល់ទំនុកចិត្តដល់កសិករ" },
    { src: "/banner តាសុខ/កុំលេងមួយតាសុខ.jpg", alt: "កុំលេងមួយតាសុខ ដំណោះស្រាយកសិកម្មដ៏មានប្រសិទ្ធភាពសម្រាប់ដំណាំគ្រប់ប្រភេទ" },
    { src: "/banner តាសុខ/តាសុខកានពូជ.jpg", alt: "តាសុខកានពូជ ជំនាញថែរក្សានិងការពារគ្រាប់ពូជស្រូវឲ្យដុះលូតលាស់ល្អ" },
    { src: "/banner តាសុខ/តាសុខបំប៉ន.jpg", alt: "តាសុខបំប៉ន ជីបំប៉នដំណាំឲ្យលូតលាស់លឿន ដើមថ្លោស ទទួលបានទិន្នផលខ្ពស់" }
  ];
  const bannerImages = [...baseBanners, ...baseBanners];


  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchCat = activeCat === "all" || p.category === activeCat;
      const matchSearch =
        getLocalizedText(p.name, locale).toLowerCase().includes(search.toLowerCase()) ||
        p.categoryKh.includes(search);
      return matchCat && matchSearch;
    });
  }, [activeCat, search, locale]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-6 md:py-16 bg-slate-50 relative">
      {/* កូដ SEO ពិសេស (Schema Markup) ដើម្បីប្រាប់ Google ពី Banner ទាំង ៥ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Loc Troi Cambodia - Ta Sok Banners",
            "description": "បណ្តុំរូបភាព Banner តាសុខ គុណភាពខ្ពស់ពីក្រុមហ៊ុន ឡុកត្រយ កម្ពុជា (Loc Troi Cambodia)",
            "itemListElement": baseBanners.map((banner, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "ImageObject",
                "contentUrl": `https://loctroi.online${encodeURI(banner.src)}`,
                "description": banner.alt,
                "name": banner.alt
              }
            }))
          })
        }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <BannerCarousel baseBanners={baseBanners} bannerImages={bannerImages} />

        <div className="text-center mb-8 md:mb-12 mt-16 md:mt-20">
          <h2 className="text-2xl md:text-5xl font-koulen text-primary-950 tracking-wide leading-relaxed">{t("title")}</h2>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12 max-w-5xl mx-auto">
          {/* Search */}
          <div className="relative max-w-xl mx-auto w-full group">
            <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
              <Search size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(12); }}
              className="w-full pl-12 pr-4 py-3 md:pl-14 md:pr-6 md:py-4 bg-white border-2 border-slate-100 rounded-full focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-base md:text-lg shadow-sm"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={18} className="md:w-[20px] md:h-[20px]" />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setActiveCat(cat.id); setVisibleCount(12); }}
                className={`flex items-center gap-2.5 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[13px] md:text-sm font-bold transition-all duration-300 border ${
                  activeCat === cat.id
                    ? "bg-primary-700 border-primary-700 text-white shadow-lg shadow-primary-700/30"
                    : "bg-white border-slate-200/80 text-slate-600 hover:border-primary-300 hover:bg-primary-50/50 hover:text-primary-700 shadow-sm hover:shadow-md"
                }`}
              >
                <div className={`flex items-center justify-center rounded-full p-1.5 transition-colors ${
                  activeCat === cat.id ? "bg-white/20 text-white" : "bg-primary-50 text-primary-600"
                }`}>
                  <Icon name={cat.icon} size={14} className="md:w-[16px] md:h-[16px]" />
                </div>
                <span className="whitespace-nowrap">
                  {cat.id === "all" ? t("categoryAll") : t(`category_${cat.id}` as Parameters<typeof t>[0])}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="text-sm text-slate-500 mb-8 font-medium text-center">
          {t("showing")} {displayedProducts.length} {t("of")} {filteredProducts.length} {t("productsCount")}
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white rounded-3xl border border-slate-100"
          >
            <div className="flex justify-center mb-6 text-slate-300"><Search size={64} /></div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">{t("noResults")}</h3>
            <p className="text-slate-500">{t("noResultsDesc")}</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
              {displayedProducts.map((product) => {
                const categoryData = categories.find(c => c.id === product.category);
                return (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    categoryData={categoryData} 
                    onClick={() => router.push(`/${locale}/product/${product.id}`)} 
                    locale={locale}
                  />
                );
              })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="flex items-center gap-2 px-10 py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-full font-bold transition-all shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 hover:-translate-y-1"
            >
              <ChevronDown size={20} />
              {t("loadMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// 3D Tilt Product Card
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ product, categoryData, onClick, locale }: any) => {
  return (
    <div className="group">
      <div
        onClick={onClick}
        className="relative bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-2xl cursor-pointer flex flex-col h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[400px] transition-all duration-300 hover:-translate-y-2 border border-slate-50 overflow-hidden"
      >
        <div className="relative h-32 sm:h-40 md:h-56 lg:h-64 p-2 sm:p-4 md:p-8 flex items-center justify-center overflow-hidden bg-linear-to-b from-transparent to-slate-50/50">
          <div 
            className="absolute top-2 left-2 md:top-4 md:left-4 px-2 md:px-4 py-0.5 md:py-1 bg-primary-100/90 text-primary-800 text-[8px] sm:text-[9px] md:text-xs font-black rounded-full uppercase tracking-wider z-10 flex items-center gap-1.5"
          >
            <Icon name={categoryData?.icon || "tag"} size={10} className="md:w-[12px] md:h-[12px]" />
            {categoryData?.name || product.categoryKh}
          </div>
          <div 
            className="absolute top-2 right-2 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-10"
          >
            <Image src="/photo/logo%20loctroi%205.png" alt="Loc Troi" width={40} height={40} className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] object-contain drop-shadow-md" />
          </div>
          <div 
            className="relative w-full h-full group-hover:scale-110 transition-transform duration-700"
          >
            <Image
              src={`/${product.image}`}
              alt={`${getLocalizedText(product.name, locale)} | Loc Troi Cambodia`}
              title={`${getLocalizedText(product.name, locale)} - Loc Troi Cambodia`}
              fill
              className="object-contain pointer-events-none"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>
        
        <div 
          className="p-2 sm:p-3 md:p-6 flex-1 flex flex-col justify-end text-center bg-white z-20"
        >
          <h3 className="font-black text-slate-800 text-xs sm:text-sm md:text-xl truncate mb-0.5 md:mb-1">{getLocalizedText(product.name, locale)}</h3>
          <p className="text-accent-500 text-[9px] sm:text-[10px] md:text-sm font-bold">{categoryData?.name || product.categoryKh}</p>
        </div>
      </div>
    </div>
  );
};
