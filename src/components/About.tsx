"use client";

import Image from "next/image";
import { PiCheckCircleDuotone, PiShieldCheckDuotone, PiLeafDuotone, PiUsersDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
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
                  src="/photo/fong ២.jpg" 
                  alt="About Loc Troi" 
                  fill 
                  className="object-cover" 
                  unoptimized
                />
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-4xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center font-black text-2xl">
                    10+
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">ឆ្នាំបទពិសោធន៍</h4>
                    <p className="text-sm text-slate-500">ក្នុងវិស័យកសិកម្ម</p>
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
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-sm font-black rounded-full uppercase tracking-widest mb-6">
              អំពី Lộc Trời
            </div>
            <h2 className="text-4xl md:text-5xl font-koulen text-slate-800 mb-6 leading-[1.6] tracking-wide">
              ដៃគូដ៏គួរឱ្យទុកចិត្ត <br />
              <span className="text-primary-600">សម្រាប់កសិករកម្ពុជា</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Lộc Trời Cambodia ប្តេជ្ញាផ្តល់ជូននូវផលិតផលកសិកម្មដែលមានគុណភាពខ្ពស់បំផុត រួមមានថ្នាំការពារដំណាំ ជីកសិកម្ម និងពូជស្រូវ ដើម្បីជួយឱ្យកសិករទទួលបានទិន្នផលខ្ពស់ និងជីវភាពកាន់តែប្រសើរ។
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
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
                { icon: PiShieldCheckDuotone, title: "គុណភាពស្តង់ដារ", desc: "ផលិតផលពិត គុណភាពខ្ពស់" },
                { icon: PiLeafDuotone, title: "ទិន្នផលខ្ពស់", desc: "ជួយបង្កើនផលដំណាំ" },
                { icon: PiUsersDuotone, title: "សេវាកម្មល្អ", desc: "ប្រឹក្សាយោបល់បច្ចេកទេសកសិកម្ម" },
                { icon: PiCheckCircleDuotone, title: "ទំនុកចិត្ត", desc: "ការធានាលើគ្រប់ផលិតផល" }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-primary-100 transition-colors hover:bg-primary-100 hover:border-primary-200 cursor-pointer">
                    <feature.icon className="text-primary-600 drop-shadow-sm" size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
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
