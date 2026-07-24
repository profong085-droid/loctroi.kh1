"use client";

import { useState, useEffect } from "react";
import { Play, Share2, Check } from "lucide-react";
import { useTranslations } from "next-intl";

export function VideoSongs() {
  const t = useTranslations("VideoSongs");

  const videos = [
    {
      title: t("v1"),
      src: encodeURI("/video song/ភាពរុងរឿង Loctroi Cambodia.mp4"),
      poster: encodeURI("/photo/ភាពរុងរឿង Loctroi Cambodia-Cover.jpg"),
    },
    {
      title: t("v2"),
      src: encodeURI("/video song/អនាគតបៃតង.mp4"),
    },
    {
      title: t("v3"),
      src: encodeURI("/video song/ជោគជ័យក្នុងវាលស្រែ.mp4"),
    },
    {
      title: t("v4"),
      src: encodeURI("/video song/ឋានសួគ៌នៅលើដី.mp4"),
    },
    {
      title: t("v5"),
      src: encodeURI("/video song/ថ្ងៃរះលើវាលស្រែ.mp4"),
    },
    {
      title: t("v6"),
      src: encodeURI("/video song/មាគាថ្មីនៃកសិកម្ម.MP4"),
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeVideo = videos[activeIndex] || videos[0];

  useEffect(() => {
    // Check if URL has ?song= index
    const params = new URLSearchParams(window.location.search);
    const songIndex = params.get("song");
    if (songIndex !== null) {
      const idx = parseInt(songIndex, 10);
      if (!isNaN(idx) && idx >= 0 && idx < videos.length) {
        setTimeout(() => setActiveIndex(idx), 0);
        // Also scroll to the songs section if they came directly from a share link
        setTimeout(() => {
          const element = document.getElementById("songs");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?song=${activeIndex}#songs`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="songs" className="py-4 md:py-6 bg-primary-950 flex justify-center px-4 relative overflow-hidden">
      {/* Background glow (Optimized for iOS WebKit) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' }}
      />

      {/* The Small Contained Box */}
      <div className="w-full max-w-3xl bg-white/5 border border-white/10 p-2 md:p-4 rounded-3xl md:rounded-4xl shadow-2xl flex flex-col md:flex-row gap-3 md:gap-6 items-center relative z-10 hover:border-white/20 transition-colors">
        
        {/* Compact Video Player */}
        <div className="w-[60%] md:w-[40%] mx-auto shrink-0 aspect-square bg-black rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <video 
            controls 
            preload="none"
            playsInline
            poster={activeVideo.poster}
            className="w-full h-full object-cover"
            src={activeVideo.src}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Compact Playlist */}
        <div className="w-full md:w-[60%] flex flex-col justify-center py-2 md:pr-2">
          <div className="flex items-center justify-between mb-4 px-1 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center">
                <Play className="w-3 h-3 text-accent-500 fill-current" />
              </div>
              <h2 className="text-xl font-bold text-white font-koulen tracking-wide">
                {t("title")} <span className="text-accent-500">LTC</span>
              </h2>
            </div>
            
            {/* Share Button */}
            <button 
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-accent-500 hover:text-primary-950 text-white transition-colors text-xs font-bold shrink-0"
              title={t("share")}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" /> {t("copied")}
                </>
              ) : (
                <>
                  <Share2 className="w-3 h-3" /> {t("share")}
                </>
              )}
            </button>
          </div>
          
          <div className="flex flex-col gap-1.5 md:gap-2 max-h-35 md:max-h-45 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
            {videos.map((video, index) => {
              const isActive = activeVideo.src === video.src;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-3 py-2 md:px-4 md:py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-between group ${
                    isActive 
                      ? 'bg-accent-500 text-primary-950 shadow-[0_4px_15px_rgba(245,158,11,0.3)] scale-[1.02]' 
                      : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white hover:scale-[1.01]'
                  }`}
                >
                  <span className="truncate pr-3">{video.title}</span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-primary-950/20' : 'bg-white/10 group-hover:bg-accent-500'
                  }`}>
                    <Play className={`w-2.5 h-2.5 ${isActive ? 'fill-current text-primary-950' : 'fill-current text-white group-hover:text-primary-950'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
