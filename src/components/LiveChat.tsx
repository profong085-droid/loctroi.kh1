"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  time: Date;
  element?: React.ReactNode;
}

export const LiveChat = () => {
  const t = useTranslations("LiveChat");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "welcome", // placeholder, will be replaced in render
      sender: "bot",
      time: new Date(),
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Auto-Reply Logic
    setTimeout(() => {
      let replyText = "";
      let replyElement: React.ReactNode = null;
      const text = userMessage.text.toLowerCase();

      if (text.includes("សួស្តី") || text === "hi" || text === "hello" || text.includes("chào")) {
        replyText = t("reply_hi");
      } else if (text.includes("ផលិតផល") || text.includes("ជី") || text.includes("ថ្នាំ") || text === "1" || text === "1️⃣" || text.includes("product") || text.includes("sản phẩm")) {
        replyText = t("reply_products");
      } else if (text.includes("ទីតាំង") || text.includes("នៅណា") || text === "2" || text === "2️⃣" || text.includes("location") || text.includes("địa chỉ")) {
        replyText = t("reply_location");
        replyElement = (
          <div className="mt-2 w-full h-40 rounded-xl overflow-hidden border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25790.199768790324!2d105.34840979170943!3d11.525199472629579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310bf34142364f9d%3A0x4002af3861b79ed3!2z4Z6K4Z-B4Z6U4Z-J4Z684Z6G4Z624Z6Z4Z6V4Z6b4Z-S4Z6b4Z62IOGem-GegOGfi-GeguGfkuGemuGev-GehOGen-GfhuGejuGehOGfiw!5e0!3m2!1sen!2skh!4v1783980451265!5m2!1sen!2skh" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        );
      } else if (text.includes("លេខទូរស័ព្ទ") || text.includes("ទំនាក់ទំនង") || text === "3" || text === "3️⃣" || text.includes("contact") || text.includes("liên hệ")) {
        replyText = t("reply_contact");
      } else {
        replyText = t("reply_default");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: replyText,
        sender: "bot",
        time: new Date(),
        element: replyElement,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000); // 1 second delay to feel natural
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary-500 text-white rounded-full shadow-2xl shadow-primary-500/40 flex items-center justify-center z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[90vw] md:w-[380px] h-[550px] max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-primary-500 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-koulen text-xl tracking-wide">FONG-BOT</h3>
                  <div className="flex items-center gap-1.5 text-xs text-primary-100">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    {t("typing")}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-slate-200 text-slate-500" : "bg-primary-100 text-primary-600"}`}>
                    {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-primary-500 text-white rounded-tr-sm" 
                      : "bg-white text-slate-700 rounded-tl-sm border border-slate-100"
                  }`}>
                    {msg.id === "welcome" ? t("welcome") : msg.text}
                    {msg.element && msg.element}
                    <div className={`text-[10px] mt-1 text-right ${msg.sender === "user" ? "text-primary-100" : "text-slate-400"}`}>
                      {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                placeholder={t("placeholder")}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-slate-100 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-11 h-11 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
