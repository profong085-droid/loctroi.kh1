"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const agriVideos = [
  "https://web.facebook.com/reel/989128403824307",
  "https://web.facebook.com/reel/896795882756422",
  "https://web.facebook.com/reel/1044446701488127"
];

export function AgriVideos() {
  const t = useTranslations("AgriVideos");
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingState, setPlayingState] = useState<Record<number, boolean>>({});

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % agriVideos.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + agriVideos.length) % agriVideos.length);
  const videoSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "ការប្រើប្រាស់ផលិតផល INSURAN 50 WG លើដំណាំធូរេន",
      "description": "សកម្មភាពជាក់ស្តែងនៃការប្រើប្រាស់ផលិតផល INSURAN 50 WG លើដំណាំឈើហូបផ្លែ\n👍សន្សំសំចៃការចំណាយ ផ្តល់ផលចំណេញខ្ពស់។\n✅កុំរង់ចាំរហូតដល់យឺតពេល! ប្រើប្រាស់ INSURAN 50WGនៅថ្ងៃនេះ ដើម្បីការពារទិន្នផល និងទ្រព្យសម្បត្តិរបស់បងប្អូន។\n📩 ផ្ញើសារ (Inbox) មកកាន់យើងខ្ញុំឥឡូវនេះ ដើម្បីទទួលបានការពិគ្រោះយោបល់បច្ចេកទេសដោយឥតគិតថ្លៃ!\n📞 លេខទូរស័ព្ទទំនាក់ទំនង៖ 0316315666/012469686",
      "thumbnailUrl": [
        "https://loctroi.online/photo/cower 2.jpg"
      ],
      "uploadDate": "2026-05-05",
      "contentUrl": "https://web.facebook.com/reel/989128403824307"
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "ការប្រើប្រាស់ផលិតផល INSURAN 50 WG លើចំកាម្រេច",
      "description": "ម្រេចងាប់លឿន ងាប់យឺត? – កុំទុកឲ្យហួសពេល!\n👉ជំងឺងាប់លឿន (បង្កដោយផ្សិត Phytophthora) និងជំងឺងាប់យឺត (បង្កដោយផ្សិត Fusarium) គឺជា \"ជំងឺ\" ដ៏គួរឱ្យខ្លាចបំផុតនៅក្នុងចម្ការម្រេច។ នៅពេលឃើញស្លឹកលឿង ជ្រុះកង់ ឬដើមស្រពោន ដើមម្រេចត្រូវតែទទួលបានការព្យាបាលជាបន្ទាន់!\n✅ប្រើប្រាស់ អិនស៊ូរែន 50WG -INSURAN 50WG (សារធាតុសកម្ម Dimethomorth) ដែលមានលក្ខណៈពិសេស👉ជ្រាបចូល និងចរន្តពីរផ្លូវយ៉ាងខ្លាំងក្លា (ស្រូបតាមស្លឹកនាំចុះទៅឫស និងផ្ទុយមកវិញ) ដើម្បីការពារបណ្តាញនាំទឹក និងអាហាររបស់ដើមម្រេចបានយ៉ាងទូលំទូលាយ។\n🛠 ណែនាំវិធីចាត់ការលឿនៗសម្រាប់ចម្ការម្រេច៖\n១. ការស្រោចគល់ (ព្យាបាលជំងឺ និងការពារប្រព័ន្ធឫស)៖\nកម្រិតប្រើប្រាស់៖ លាយ Insuran ៤០០ក្រាម - ៥០០ក្រាម ជាមួយទឹកមួយភីដុង ២០០លីត្រ។\nវិធីធ្វើ៖ ស្រោចឱ្យជោកជុំវិញគល់ម្រេច (ប្រហែល ៣-៥ លីត្រ/គល់ អាស្រ័យលើដើមធំឬតូច)។ គួរស្រោច ២ដង ចន្លោះគ្នាពី ៧-១០ ថ្ងៃ នៅពេលចាប់ផ្តើមឃើញមានរោគសញ្ញាជំងឺ។\n២. ការបាញ់លើដើម និងស្លឹក (ទប់ស្កាត់ការរាលដាល)៖\nកម្រិតប្រើប្រាស់៖ លាយ ៤០ក្រាម - ៥០ក្រាម ជាមួយធុងទឹក ១៦ - ២០លីត្រ រួចបាញ់ឱ្យសព្វពីចុងជន្លង់ម្រេចចុះមកដើម និងស្លឹកទាំងមូល។\nពេលវេលា៖ បាញ់ការពារជាទៀងទាត់នៅដើមរដូវ ភាគ្គកណ្តាល និងចុងរដូវវស្សា ដែលជាពេលមានសំណើមខ្ពស់ និងជាពេលដែលមេរោគផ្សិតលូតលាស់ខ្លាំងបំផុត។\n⚠️ គោលការណ៍មាស 2 យ៉ាងដែលបងប្អូនត្រូវចងចាំ៖\n1. ☘️ ប្រព័ន្ធរំដោះទឹកល្អ៖ ជំងឺនេះខ្លាចបំផុតគឺដីធូរស្រឡះ។ ត្រូវកាប់ចង្អូររំដោះទឹកជាបន្ទាន់ កុំឱ្យមានទឹកដក់នៅគល់ម្រេច។\n❌ កុំលាយថ្នាំផ្តេសផ្តាស់៖ ដាច់ខាត កុំ លាយ Insuran 50 WG ជាមួយថ្នាំដែលមានសមាសធាតុផ្សំពីទង់ដែង ឬជីបាញ់តាមស្លឹកដែលមានជាតិអាសូត ខ្ពស់។\n📩 ផ្ញើសារ (Inbox) មកកាន់យើងខ្ញុំឥឡូវនេះ ដើម្បីទទួលបានការពិគ្រោះយោបល់បច្ចេកទេសដោយឥតគិតថ្លៃ!\n📞 លេខទូរស័ព្ទទំនាក់ទំនង៖ 0316315666/012469686",
      "thumbnailUrl": [
        "https://loctroi.online/photo/insuran ម្រេច.jpg"
      ],
      "uploadDate": "2026-05-05",
      "contentUrl": "https://web.facebook.com/reel/896795882756422"
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "ការប្រើប្រាស់ផលិតផល INSURAN 50 WG លើចំធុរេ របៀបលាបថ្នាំ",
      "description": "✅សកម្មភាពជាក់ស្តែងនៃការប្រើប្រាស់ផលិតផល INSURAN 50 WG លើដំណាំឈើហូបផ្លែ\n👍សន្សំសំចៃការចំណាយ ផ្តល់ផលចំណេញខ្ពស់។\n✅កុំរង់ចាំរហូតដល់យឺតពេល! ប្រើប្រាស់ INSURAN 50WGនៅថ្ងៃនេះ ដើម្បីការពារទិន្នផល និងទ្រព្យសម្បត្តិរបស់បងប្អូន។\n📩 ផ្ញើសារ (Inbox) មកកាន់យើងខ្ញុំឥឡូវនេះ ដើម្បីទទួលបានការពិគ្រោះយោបល់បច្ចេកទេសដោយឥតគិតថ្លៃ!\n📞 លេខទូរស័ព្ទទំនាក់ទំនង៖ 0316315666/012469686",
      "thumbnailUrl": [
        "https://loctroi.online/photo/លាបថ្នាំ insuran.jpg"
      ],
      "uploadDate": "2026-05-05",
      "contentUrl": "https://web.facebook.com/reel/1044446701488127"
    }
  ];

  return (
    <section id="agri-videos" className="pt-6 pb-2 md:pt-10 md:pb-6 bg-primary-950 px-4 md:px-8 relative overflow-hidden">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas) }}
      />

      {/* Cinematic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-5xl font-bold font-koulen text-white mb-2 tracking-wide drop-shadow-lg">
            {t("title1")} <span className="text-accent-500">{t("title2")}</span>
          </h2>
        </div>

        {/* 3D Carousel Coverflow */}
        <div className="relative w-full max-w-5xl h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] mx-auto flex items-center justify-center mt-2 md:mt-4">
          {agriVideos.map((link, index) => {
            let position = "hidden";
            if (index === activeIndex) position = "center";
            else if (index === (activeIndex - 1 + agriVideos.length) % agriVideos.length) position = "left";
            else if (index === (activeIndex + 1) % agriVideos.length) position = "right";

            return (
              <div
                key={index}
                className={`absolute w-[85%] sm:w-[70%] md:w-[60%] aspect-video bg-[#111] rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl transition-all duration-700 ease-out flex items-center justify-center ring-2 ring-white/10 ${
                  position === "center"
                    ? "translate-x-0 scale-100 z-30 opacity-100 ring-accent-500 shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
                    : position === "left"
                    ? "translate-x-[-35%] sm:translate-x-[-50%] md:translate-x-[-60%] scale-75 z-20 opacity-40 md:opacity-50 cursor-pointer hover:opacity-80"
                    : position === "right"
                    ? "translate-x-[35%] sm:translate-x-[50%] md:translate-x-[60%] scale-75 z-20 opacity-40 md:opacity-50 cursor-pointer hover:opacity-80"
                    : "opacity-0 z-10 pointer-events-none scale-50"
                }`}
                onClick={() => {
                  if (position === "left") handlePrev();
                  if (position === "right") handleNext();
                }}
              >
                {/* Transparent overlay to prevent iframe clicks when on sides (allows click to navigate) */}
                {position !== "center" && (
                  <div className="absolute inset-0 z-20 bg-transparent" />
                )}
                
                {playingState[index] ? (
                  <iframe 
                    title="Agricultural Video"
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(link)}&show_text=false&width=auto&autoplay=1`} 
                    style={{ border: "none", overflow: "hidden" }}
                    className="w-full h-full absolute inset-0 z-10 pointer-events-auto"
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    referrerPolicy="no-referrer"
                  ></iframe>
                ) : (
                  <div 
                    className="absolute inset-0 w-full h-full z-10 cursor-pointer flex flex-col items-center justify-center bg-black/50 hover:bg-black/40 transition group"
                    onClick={(e) => {
                      if (position === "center") {
                        e.stopPropagation();
                        setPlayingState(prev => ({...prev, [index]: true}));
                      }
                    }}
                  >
                    {/* Facade image using the video schemas thumbnail */}
                    <Image 
                      src={videoSchemas[index]?.thumbnailUrl?.[0].replace("https://loctroi.online", "") || "/photo/banner1.jpg"} 
                      alt="Thumbnail" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover -z-10 opacity-70"
                    />
                    {/* Play Button Icon */}
                    <div className="w-16 h-16 rounded-full bg-accent-500/90 flex items-center justify-center text-primary-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] group-hover:scale-110 group-hover:bg-accent-400 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                )}
                
                {/* Loader Placeholder (below facade/iframe) */}
                <div className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center gap-4 -z-20">
                  <div className="w-10 h-10 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-6 mt-6 md:mt-8 z-20">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:text-primary-950 hover:scale-110 transition-all duration-300 shadow-lg group backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-2">
            {agriVideos.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 rounded-full transition-all duration-500 ${idx === activeIndex ? "w-10 bg-accent-500" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:text-primary-950 hover:scale-110 transition-all duration-300 shadow-lg group backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
