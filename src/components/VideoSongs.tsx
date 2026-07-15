"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    title: "ជោគជ័យក្នុងវាលស្រែ",
    src: encodeURI("/video song/ជោគជ័យក្នុងវាលស្រែ.mp4"),
  },
  {
    title: "ឋានសួគ៌នៅលើដី",
    src: encodeURI("/video song/ឋានសួគ៌នៅលើដី.mp4"),
  },
  {
    title: "ថ្ងៃរះលើវាលស្រែ",
    src: encodeURI("/video song/ថ្ងៃរះលើវាលស្រែ.mp4"),
  },
  {
    title: "មាគាថ្មីនៃកសិកម្ម",
    src: encodeURI("/video song/មាគាថ្មីនៃកសិកម្ម.MP4"),
  }
];

export function VideoSongs() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section id="songs" className="py-12 bg-primary-950 flex justify-center px-4 relative overflow-hidden">
      {/* Background glow to make the small card look natural in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* The Small Contained Box */}
      <div className="w-full max-w-3xl bg-white/5 border border-white/10 p-3 md:p-4 rounded-4xl backdrop-blur-xl shadow-2xl flex flex-col md:flex-row gap-4 md:gap-6 items-center relative z-10 hover:border-white/20 transition-colors">
        
        {/* Compact Video Player */}
        <div className="w-full md:w-[55%] shrink-0 aspect-video bg-black rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <video 
            key={activeVideo.src}
            controls 
            autoPlay
            className="w-full h-full object-cover"
          >
            <source src={activeVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Compact Playlist */}
        <div className="w-full md:w-[45%] flex flex-col justify-center py-2 md:pr-2">
          <div className="flex items-center gap-2 mb-4 px-1 border-b border-white/10 pb-3">
            <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center">
              <Play className="w-3 h-3 text-accent-500 fill-current" />
            </div>
            <h2 className="text-xl font-bold text-white font-koulen tracking-wide">
              វីដេអូចម្រៀង <span className="text-accent-500">LTC</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-2">
            {videos.map((video, index) => {
              const isActive = activeVideo.src === video.src;
              return (
                <button
                  key={index}
                  onClick={() => setActiveVideo(video)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-between group ${
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
