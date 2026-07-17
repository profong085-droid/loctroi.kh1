"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export const Testimonials = () => {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      name: t("t1_name"),
      role: t("t1_role"),
      text: t("t1_text"),
      rating: 5,
    },
    {
      name: t("t2_name"),
      role: t("t2_role"),
      text: t("t2_text"),
      rating: 5,
    },
    {
      name: t("t3_name"),
      role: t("t3_role"),
      text: t("t3_text"),
      rating: 5,
    },
    {
      name: t("t4_name"),
      role: t("t4_role"),
      text: t("t4_text"),
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-accent-100 text-accent-600 text-sm font-black rounded-full uppercase tracking-widest mb-6">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-koulen text-slate-800 mb-6 tracking-wide leading-relaxed">
            {t("title1")} <span className="text-primary-600">{t("title2")}</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t("desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testi.rating ? "text-accent-500 fill-accent-500" : "text-slate-200"}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{testi.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">{testi.name}</h3>
                  <p className="text-xs text-primary-600 font-semibold">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
