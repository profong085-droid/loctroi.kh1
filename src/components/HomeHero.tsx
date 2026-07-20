"use client";

import HeroBackground from "@/components/3d/HeroBackground";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export function HomeHero() {
  const t = useTranslations("Hero");
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
    <section id="hero" className="relative h-screen min-h-150 flex items-center pt-20 overflow-hidden">
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
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-koulen font-black text-white leading-[1.1] mb-2 drop-shadow-2xl"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-500">
              Loc Troi
            </span>{" "}
            Cambodia
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg"
          >
            {t("subtitle")}
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="text-white/90 text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-light space-y-4 px-2"
          >
            <p>
              {t.rich("description", {
                strong: (chunks) => <strong className="text-white font-bold">{chunks}</strong>
              })}
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#products" 
              className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-accent-500 text-primary-950 rounded-full font-black text-sm md:text-base shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:bg-accent-400 transition-colors w-full sm:w-auto"
            >
              {t("cta")} <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about" 
              className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              {t("learnMore")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
