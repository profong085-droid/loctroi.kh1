"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "សុខ វណ្ណារិទ្ធ",
    role: "កសិករស្រូវ ខេត្តបាត់ដំបង",
    text: "ខ្ញុំប្រើផលិតផលរបស់ Lộc Trời មកជាង ៣ ឆ្នាំហើយ។ ទិន្នផលស្រូវរបស់ខ្ញុំបានកើនឡើងជាង ៣០% ពិតជាពេញចិត្តខ្លាំង!",
    rating: 5,
  },
  {
    name: "ចាន់ សុភា",
    role: "កសិករស្រូវ ខេត្តកំពង់ចាម",
    text: "ជីកសិកម្មរបស់ Lộc Trời មានគុណភាពខ្ពស់ណាស់ ដំណាំលូតលាស់ល្អ ហើយក្រុមបច្ចេកទេសក៏ផ្តល់ការប្រឹក្សាយ៉ាងល្អដែរ។",
    rating: 5,
  },
  {
    name: "ហេង សុផល",
    role: "ដេប៉ូកសិកម្ម ខេត្តព្រៃវែង",
    text: "ជាដៃគូអាជីវកម្មដ៏ល្អបំផុត! ផលិតផលមានគុណភាព អតិថិជនពេញចិត្ត ហើយការដឹកជញ្ជូនក៏រហ័សទៀតផង។",
    rating: 5,
  },
  {
    name: "នួន សារុន",
    role: "កសិករបន្លែ ខេត្តកណ្តាល",
    text: "ថ្នាំការពារដំណាំរបស់ Lộc Trời ពិតជាមានប្រសិទ្ធភាពខ្ពស់ សត្វល្អិតស្លាប់ឆាប់ ហើយមិនប៉ះពាល់ដល់ដំណាំឡើយ។",
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-accent-100 text-accent-600 text-sm font-black rounded-full uppercase tracking-widest mb-6">
            មតិអតិថិជន
          </div>
          <h2 className="text-3xl md:text-5xl font-koulen text-slate-800 mb-6 tracking-wide leading-relaxed">
            អតិថិជនរបស់យើង <span className="text-primary-600">និយាយអ្វី?</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            សំឡេងពីកសិករ និងដៃគូអាជីវកម្មដែលបានជ្រើសរើសផលិតផល Lộc Trời Cambodia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
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
                    className={i < t.rating ? "text-accent-500 fill-accent-500" : "text-slate-200"}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
