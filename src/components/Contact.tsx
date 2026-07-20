"use client";

import { useState } from "react";
import { Send, Phone, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      
      setIsSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-koulen text-primary-950 mb-3 md:mb-4 tracking-wide leading-relaxed">{t("title1")} {t("title2")}</h2>
          <p className="text-slate-500 text-sm md:text-lg">{t("subtitle")}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-6 md:p-12 rounded-4xl shadow-lg border border-slate-100"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <CheckCircle2 size={32} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{t("successTitle")}</h3>
              <p className="text-slate-500 text-sm md:text-base">{t("successDesc")}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="relative group">
                  <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                    <User size={18} className="md:w-5 md:h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("name")}
                    suppressHydrationWarning
                    className="w-full pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-sm md:text-base shadow-sm"
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                    <Phone size={18} className="md:w-5 md:h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("phone")}
                    suppressHydrationWarning
                    className="w-full pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-sm md:text-base shadow-sm"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute left-4 md:left-5 top-4 md:top-5 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                  <MessageSquare size={18} className="md:w-5 md:h-5" />
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("question")}
                  suppressHydrationWarning
                  className="w-full pl-10 md:pl-12 pr-4 md:pr-6 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-sm md:text-base resize-none shadow-sm"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 md:py-4 bg-primary-800 text-white rounded-2xl font-bold text-sm md:text-lg hover:bg-primary-900 transition-all shadow-md hover:shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    {t("btnSending")}
                  </span>
                ) : (
                  <>
                    <Send size={18} className="md:w-5 md:h-5" />
                    {t("btnSend")}
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
