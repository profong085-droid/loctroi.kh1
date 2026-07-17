"use client";


import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary-950">
      {/* LCP Optimized Background Image */}
      <Image
        src="/photo/banner1.jpg"
        alt="Loc Troi Cambodia Banner"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="object-cover opacity-70 absolute inset-0"
      />

      {/* Background Video Banner */}
      <video 
        src="/photo/banner1.mp4" 
        poster="/photo/banner1.jpg"
        autoPlay 
        loop 
        muted 
        playsInline
        className="object-cover w-full h-full opacity-70 absolute inset-0"
      />
      
      {/* Subtle overlay gradient to make text readable */}
      <div className="absolute inset-0 bg-linear-to-t from-primary-950 via-primary-900/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-primary-950/80 via-primary-950/30 to-transparent z-10" />
    </div>
  );
}
