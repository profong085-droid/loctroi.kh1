"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary-950">
      {/* Background Image Banner */}
      <Image 
        src="/photo/banner 3.jpg" 
        alt="Hero Banner" 
        fill
        priority
        className="object-cover opacity-70" 
      />
      
      {/* Subtle overlay gradient to make text readable */}
      <div className="absolute inset-0 bg-linear-to-t from-primary-950 via-primary-900/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-primary-950/80 via-primary-950/30 to-transparent z-10" />
    </div>
  );
}
