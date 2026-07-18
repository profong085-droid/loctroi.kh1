"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroBackground() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only load the heavy video if the screen is large enough (Desktop/Tablet)
    const timeoutId = setTimeout(() => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      }
    }, 50);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary-950">
      {/* LCP Optimized Background Image - Always loads immediately */}
      <Image
        src="/photo/banner1.jpg"
        alt="Loc Troi Cambodia Banner"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        className="object-cover opacity-70 absolute inset-0"
      />

      {/* Background Video Banner - Only mounts on Desktop to save Mobile bandwidth */}
      {isDesktop && (
        <video 
          src="/photo/banner1.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full opacity-70 absolute inset-0 transition-opacity duration-1000"
        />
      )}
      
      {/* Subtle overlay gradient to make text readable */}
      <div className="absolute inset-0 bg-linear-to-t from-primary-950 via-primary-900/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-primary-950/80 via-primary-950/30 to-transparent z-10" />
    </div>
  );
}
