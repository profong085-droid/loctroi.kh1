"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const banners = [
  "/banner/banner APROPO 200SE.jpg",
  "/banner/banner insuran ធូរេន.jpg",
  "/banner/banner insuran.jpg",
  "/banner/banner saltare v2.jpg",
];

export default function HeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {banners.map((banner, index) => (
        <div 
          key={banner} 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Blurred Background Layer (fills the container) */}
          <div className="absolute inset-0 z-0 scale-110">
            <Image
              src={banner}
              alt="Background"
              fill
              priority={index === 0}
              sizes="100vw"
              quality={30}
              className="object-cover blur-2xl opacity-50"
            />
          </div>
          
          {/* Clear Foreground Layer (contains the whole image) */}
          <Image
            src={banner}
            alt={`Loc Troi Cambodia Banner ${index + 1}`}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="100vw"
            quality={90}
            className="object-contain z-10 drop-shadow-2xl"
          />
        </div>
      ))}
    </div>
  );
}
