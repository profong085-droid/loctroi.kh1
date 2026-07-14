"use client";

import HeroBackground from "@/components/3d/HeroBackground";
import { Products } from "@/components/Products";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-koulen font-black text-white leading-[1.1] mb-6 drop-shadow-2xl"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-500">
                Lộc Trời
              </span>{" "}
              Cambodia
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            >
              ផ្គត់ផ្គង់ថ្នាំការពារដំណាំ ជីកសិកម្ម និងពូជស្រូវគុណភាពខ្ពស់ ដើម្បីជួយកសិករកម្ពុជា
              បង្កើនផលិតភាពដំណាំ។
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#products" 
                className="flex items-center gap-2 px-8 py-4 bg-accent-500 text-primary-950 rounded-full font-black shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:bg-accent-400 transition-colors"
              >
                មើលផលិតផល <ArrowRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about" 
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                ស្វែងយល់បន្ថែម
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* About Section */}
      <About />

      {/* Products Section */}
      <Products />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
