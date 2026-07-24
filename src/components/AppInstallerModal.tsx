"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAndroid, FaApple } from "react-icons/fa6";
import { Smartphone, CheckCircle2, X, Share, PlusSquare, ShieldCheck, Zap, Search, MapPin, FileDown } from "lucide-react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function AppInstallerModal({
  isOpen,
  onClose,
  initialTab = "android",
}: {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "android" | "ios";
}) {
  const [activeTab, setActiveTab] = useState<"android" | "ios">(initialTab);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detect iOS automatically on mount
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    if (isIOSDevice) {
      setTimeout(() => setActiveTab("ios"), 0);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    if (mediaQuery.matches) {
      setTimeout(() => setIsInstalled(true), 0);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // Direct APK download fallback
      const link = document.createElement("a");
      link.href = "/loctroi.apk";
      link.download = "loctroi-cambodia.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-2xl transition-all">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-linear-to-b from-slate-900 via-primary-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-[0_30px_70px_-15px_rgba(16,185,129,0.35)] border border-emerald-500/30 overflow-hidden"
          >
            {/* Ambient Lighting */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors z-20 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* App Header Card */}
            <div className="flex items-center gap-4 mb-6 relative z-10 bg-white/5 p-3.5 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="relative w-14 h-14 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-emerald-400/40 p-1 bg-slate-900 flex items-center justify-center">
                <Image
                  src="/photo/logo loctroi 6.png"
                  alt="Loc Troi Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-extrabold uppercase tracking-widest mb-0.5">
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                  <span>ក្រុមហ៊ុនផ្លូវការ • OFFICIAL APP</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white truncate leading-tight">
                  Loc Troi Cambodia App
                </h3>
                <p className="text-xs text-slate-400 truncate">ក្រុមហ៊ុន ឡុក ត្រើយ កម្ពុជា</p>
              </div>
            </div>

            {/* Platform Selector Tabs */}
            <div className="flex bg-slate-900/90 p-1.5 rounded-2xl mb-6 border border-white/10 relative z-10">
              <button
                onClick={() => setActiveTab("android")}
                className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  activeTab === "android"
                    ? "bg-linear-to-r from-emerald-500 via-green-500 to-emerald-600 text-slate-950 font-black shadow-lg shadow-emerald-500/25 scale-[1.02]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaAndroid size={18} className={activeTab === "android" ? "text-slate-950" : "text-emerald-400"} />
                <span>Android (APK)</span>
              </button>
              <button
                onClick={() => setActiveTab("ios")}
                className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  activeTab === "ios"
                    ? "bg-linear-to-r from-slate-100 via-white to-slate-200 text-slate-950 font-black shadow-lg shadow-white/20 scale-[1.02]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaApple size={18} className={activeTab === "ios" ? "text-slate-950" : "text-slate-200"} />
                <span>iOS (iPhone/iPad)</span>
              </button>
            </div>

            {/* Content for Android */}
            {activeTab === "android" && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {/* Features List with Vector Icons */}
                <div className="space-y-3 mb-6 bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-emerald-500/20 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
                      <Zap size={15} className="text-emerald-400" />
                    </div>
                    <span className="font-medium">ដំណើរការលឿន រលូន មិនស្ទះ និងស៊ី Memory តិច</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
                      <Search size={15} className="text-emerald-400" />
                    </div>
                    <span className="font-medium">ស្វែងរកផលិតផល ថ្នាំ និងជីកសិកម្មបានគ្រប់ពេល</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
                      <MapPin size={15} className="text-emerald-400" />
                    </div>
                    <span className="font-medium">តភ្ជាប់ជាមួយទីតាំងដេប៉ូ 25 ខេត្តក្រុង និង Live Chat</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleInstallPWA}
                    className="w-full py-4 px-6 bg-linear-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
                  >
                    <Smartphone size={20} className="text-slate-950" />
                    <span>
                      {isInstalled ? "App ត្រូវបានដំឡើងរួចរាល់" : "ដំឡើង App លើទូរសព្ទ (Install App)"}
                    </span>
                  </button>

                  <a
                    href="/loctroi.apk"
                    download="loctroi-cambodia.apk"
                    className="w-full py-3.5 px-6 bg-white/10 hover:bg-white/15 text-white rounded-2xl font-bold flex items-center justify-center gap-2 border border-white/15 transition-all text-xs sm:text-sm text-center"
                  >
                    <FileDown size={17} className="text-emerald-400" />
                    <span>ទាញយកជា File APK ផ្ទាល់ (Direct APK)</span>
                  </a>
                </div>
              </motion.div>
            )}

            {/* Content for iOS (iPhone/iPad) */}
            {activeTab === "ios" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-white/10 mb-6 text-xs sm:text-sm space-y-3.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm mb-1">
                    <FaApple size={18} className="text-white" />
                    <span>របៀបដំឡើង App លើ iPhone / iPad ៖</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 font-black text-xs border border-sky-500/30">
                      1
                    </div>
                    <p className="text-slate-200">
                      បើក <strong>Safari Browser</strong> រួចចុចប៊ូតុង <strong>Share <Share size={14} className="inline mx-1 text-sky-400" /></strong> ខាងក្រោម
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-black text-xs border border-emerald-500/30">
                      2
                    </div>
                    <p className="text-slate-200">
                      អូសចុះក្រោម រួចជ្រើសរើស <strong>&quot;Add to Home Screen <PlusSquare size={14} className="inline mx-1 text-emerald-400" />&quot;</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-black text-xs border border-amber-500/30">
                      3
                    </div>
                    <p className="text-slate-200">
                      ចុច <strong>&quot;Add&quot;</strong> នោះ App នឹងលេចឡើងលើ Home Screen iPhone ភ្លាមៗ!
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full py-4 px-6 bg-linear-to-r from-slate-100 via-white to-slate-200 text-slate-950 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-white/10 transition-transform transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
                >
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <span>យល់ព្រម / យល់ហើយ (Got it)</span>
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
