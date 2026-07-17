"use client";

import Image from "next/image";
import { PiCheckCircleDuotone, PiShieldCheckDuotone, PiLeafDuotone, PiUsersDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("About");
  return (
    <section id="about" className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-100 rounded-[3rem] transform -rotate-3 scale-105 z-0"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white aspect-4/3">
                <Image 
                  src="/photo/Loc Troi Icypro.jpg" 
                  alt="About Loc Troi" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-4xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center font-black text-2xl">
                    10+
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{t("experience")}</div>
                    <p className="text-sm text-slate-500">{t("experienceDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary-100 text-primary-800 text-xs sm:text-sm font-black rounded-full uppercase tracking-widest mb-4 sm:mb-6">
              {t("badge")}
            </div>
            <h2 className="text-3xl md:text-5xl font-koulen text-slate-800 mb-4 sm:mb-6 leading-[1.4] sm:leading-[1.6] tracking-wide">
              {t("title1")} <br />
              <span className="text-primary-600">{t("title2")}</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t("desc")}
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                { icon: PiShieldCheckDuotone, title: t("feature1_title"), desc: t("feature1_desc") },
                { icon: PiLeafDuotone, title: t("feature2_title"), desc: t("feature2_desc") },
                { icon: PiUsersDuotone, title: t("feature3_title"), desc: t("feature3_desc") },
                { icon: PiCheckCircleDuotone, title: t("feature4_title"), desc: t("feature4_desc") }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-3 sm:gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-50 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-primary-100 transition-colors hover:bg-primary-100 hover:border-primary-200 cursor-pointer">
                    <feature.icon className="text-primary-600 drop-shadow-sm w-[24px] h-[24px] md:w-[32px] md:h-[32px]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-slate-800 mb-0.5 sm:mb-1 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
