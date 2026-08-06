"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Check, Link2, X } from "lucide-react";
import { FaFacebook, FaTelegram, FaFacebookMessenger } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export function ShareButton({ title, text, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = useTranslations("ShareButton");
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        setIsOpen(false);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook size={22} />,
      color: "text-[#1877F2] bg-blue-50 hover:bg-blue-100",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={22} className="-ml-0.5" />, // adjust slightly to look centered
      color: "text-[#229ED9] bg-sky-50 hover:bg-sky-100",
      url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    },
    {
      name: "Messenger",
      icon: <FaFacebookMessenger size={22} />,
      color: "text-[#00B2FF] bg-blue-50 hover:bg-blue-100",
      url: `fb-messenger://share/?link=${encodeURIComponent(url)}`
    }
  ];

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium transition-colors border border-slate-200 shadow-sm"
        title={t("title")}
      >
        <Share2 size={18} />
        <span>{t("share")}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 p-4 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 z-50 w-[280px]"
          >
            <div className="flex items-center justify-between mb-4 px-1">
              <h4 className="font-bold text-slate-800">ចែករំលែកទៅកាន់</h4>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-1 rounded-full transition-colors">
                <X size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mb-4">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center gap-1 aspect-square rounded-2xl transition-colors ${link.color}`}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
              
              {/* Native share / More options */}
              <button
                onClick={handleNativeShare}
                className="flex flex-col items-center justify-center gap-1 aspect-square rounded-2xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                title="More options"
              >
                <Share2 size={22} />
              </button>
            </div>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="group flex items-center justify-between w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors text-sm font-semibold text-slate-700 border border-slate-200"
            >
              <span className="flex items-center gap-3">
                <Link2 size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                ចម្លងតំណ (Copy Link)
              </span>
              {copied && <Check size={18} className="text-green-500" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
