"use client";

import { useState } from "react";
import { Send, Phone, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
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
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-koulen text-primary-950 mb-4 tracking-wide leading-relaxed">ទំនាក់ទំនងមកយើង</h2>
          <p className="text-slate-500 text-lg">មានចម្ងល់ ឬត្រូវការប្រឹក្សាយោបល់អំពីកសិកម្ម? សូមបញ្ជូលព័ត៌មានរបស់អ្នកខាងក្រោម ក្រុមការងារយើងនឹងទាក់ទងទៅអ្នកវិញក្នុងពេលឆាប់ៗ!</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-12 rounded-4xl shadow-lg border border-slate-100"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">ទទួលបានសារដោយជោគជ័យ!</h3>
              <p className="text-slate-500">សូមអរគុណសម្រាប់ការទំនាក់ទំនង។ យើងនឹងទាក់ទងទៅអ្នកវិញក្នុងពេលឆាប់ៗ។</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ឈ្មោះរបស់អ្នក"
                    className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-base shadow-sm"
                  />
                </div>
                
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="លេខទូរស័ព្ទ"
                    className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-base shadow-sm"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute left-5 top-5 text-slate-400 group-focus-within:text-primary-500 transition-colors">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="សរសេរសាររបស់អ្នកទីនេះ..."
                  rows={5}
                  className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all text-base shadow-sm resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    ផ្ញើសារ
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
