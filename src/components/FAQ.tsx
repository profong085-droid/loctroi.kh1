"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "តើផលិតផល Lộc Trời មានដឹកជញ្ជូនដល់គ្រប់ខេត្តក្រុងទេ?",
    answer: "ចាស មានដឹកជញ្ជូនដល់គ្រប់ ២៥ ខេត្តក្រុង នៅទូទាំងព្រះរាជាណាចក្រកម្ពុជា។ សម្រាប់ការកម្ម៉ង់ចំនួនច្រើន យើងផ្តល់ជូនការដឹកជញ្ជូនដោយឥតគិតថ្លៃ។",
  },
  {
    question: "តើធ្វើយ៉ាងម៉េចដើម្បីកម្ម៉ង់ផលិតផល?",
    answer: "អ្នកអាចកម្ម៉ង់ផលិតផលបានតាមរយៈ៖ ទំនាក់ទំនងផ្ទាល់តាមលេខ 097 945 0831 ឬ 071 777 3554, តាមរយៈ Facebook Page របស់យើង, ឬបំពេញទម្រង់ទំនាក់ទំនងនៅលើវេបសាយនេះ។",
  },
  {
    question: "តើផលិតផលរបស់ Lộc Trời មានគុណភាពអ្វីខ្លះដែលពិសេស?",
    answer: "ផលិតផលរបស់យើងត្រូវបានផលិតពីក្រុមហ៊ុន Lộc Trời Group ដែលជាក្រុមហ៊ុនកសិកម្មឈានមុខគេនៅប្រទេសវៀតណាម មានបទពិសោធន៍ជាង ១០ ឆ្នាំ។ ផលិតផលគ្រប់មុខត្រូវបានធ្វើតេស្តគុណភាព និងបញ្ជាក់ដោយអាជ្ញាធរពាក់ព័ន្ធ។",
  },
  {
    question: "តើមានការប្រឹក្សាយោបល់បច្ចេកទេសកសិកម្មដែរឬទេ?",
    answer: "ចាស! ក្រុមបច្ចេកទេសរបស់យើងរួចរាល់ក្នុងការផ្តល់ការប្រឹក្សាយោបល់ពីរបៀបប្រើប្រាស់ផលិតផល ការជ្រើសរើសថ្នាំត្រឹមត្រូវ និងបច្ចេកទេសកសិកម្មផ្សេងៗដោយមិនគិតថ្លៃ។",
  },
  {
    question: "តើថ្នាំការពារដំណាំមានសុវត្ថិភាពសម្រាប់ដំណាំទេ?",
    answer: "ផលិតផលរបស់យើងគ្រប់មុខត្រូវបានចុះបញ្ជីស្របច្បាប់ និងមានសុវត្ថិភាពប្រសិនបើប្រើប្រាស់តាមការណែនាំ។ សូមអានស្លាកសញ្ញា និងធ្វើតាមការណែនាំលើការប្រើប្រាស់ឲ្យបានត្រឹមត្រូវ។",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-sm font-black rounded-full uppercase tracking-widest mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-koulen text-slate-800 mb-6 tracking-wide leading-relaxed">
            សំណួរ<span className="text-primary-600">ញឹកញាប់</span>
          </h2>
          <p className="text-slate-500 text-lg">
            ចម្លើយសម្រាប់សំណួរដែលអតិថិជនសួរញឹកញាប់បំផុត
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`bg-white rounded-2xl border-2 transition-colors duration-300 overflow-hidden ${
                  isOpen ? "border-primary-200 shadow-lg" : "border-slate-100 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                >
                  <h3 className={`font-bold text-sm md:text-base transition-colors ${isOpen ? "text-primary-700" : "text-slate-700"}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? "bg-primary-100 text-primary-600" : "bg-slate-100 text-slate-400"}`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
