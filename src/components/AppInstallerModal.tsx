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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md transition-all">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-sm bg-slate-900/95 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-emerald-500/20 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/15 transition-colors z-20 cursor-pointer"
            >
              <X size={15} />
            </button>

            {/* App Header Card */}
            <div className="flex items-center gap-3 mb-4 relative z-10 pr-6">
              <div className="relative w-10 h-10 shrink-0 rounded-xl overflow-hidden border border-emerald-500/30 p-0.5 bg-slate-950 flex items-center justify-center shadow-md">
                <Image
                  src="/photo/logo loctroi 6.png"
                  alt="Loc Troi Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                  <ShieldCheck size={12} className="text-emerald-400 shrink-0" />
                  <span>ក្រុមហ៊ុនផ្លូវការ • OFFICIAL APP</span>
                </div>
                <h3 className="text-sm font-bold text-white truncate leading-tight">
                  Loc Troi Cambodia App
                </h3>
              </div>
            </div>

            {/* Platform Selector Tabs */}
            <div className="flex bg-slate-950/70 p-1 rounded-xl mb-4 border border-white/10 relative z-10">
              <button
                onClick={() => setActiveTab("android")}
                className={`flex-1 py-1.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                  activeTab === "android"
                    ? "bg-emerald-500 text-slate-950 shadow-md font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaAndroid size={14} className={activeTab === "android" ? "text-slate-950" : "text-emerald-400"} />
                <span>Android (APK)</span>
              </button>
              <button
                onClick={() => setActiveTab("ios")}
                className={`flex-1 py-1.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                  activeTab === "ios"
                    ? "bg-white text-slate-950 shadow-md font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FaApple size={14} className={activeTab === "ios" ? "text-slate-950" : "text-slate-200"} />
                <span>iOS (iPhone)</span>
              </button>
            </div>

            {/* Content for Android */}
            {activeTab === "android" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="relative z-10"
              >
                {/* Features List */}
                <div className="space-y-2 mb-4 bg-slate-950/40 p-3 rounded-xl border border-white/5 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Zap size={13} className="text-emerald-400 shrink-0" />
                    <span className="truncate">ដំណើរការលឿន រលូន មិនស្ទះ ស៊ី RAM តិច</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Search size={13} className="text-emerald-400 shrink-0" />
                    <span className="truncate">ស្វែងរក ថ្នាំ និងជីកសិកម្មគ្រប់ពេល</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <MapPin size={13} className="text-emerald-400 shrink-0" />
                    <span className="truncate">ដេប៉ូ ២៥ ខេត្តក្រុង & Live Chat ផ្ទាល់</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleInstallPWA}
                    className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all text-xs cursor-pointer active:scale-[0.98]"
                  >
                    <Smartphone size={16} />
                    <span>
                      {isInstalled ? "App ត្រូវបានដំឡើងរួចរាល់" : "ដំឡើង App លើទូរសព្ទ (Install App)"}
                    </span>
                  </button>

                  <a
                    href="/loctroi.apk"
                    download="loctroi-cambodia.apk"
                    className="w-full py-2 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl font-medium flex items-center justify-center gap-2 border border-white/10 transition-all text-xs text-center cursor-pointer"
                  >
                    <FileDown size={14} className="text-emerald-400" />
                    <span>ទាញយកជា File APK ផ្ទាល់ (Direct APK)</span>
                  </a>
                </div>
              </motion.div>
            )}

            {/* Content for iOS (iPhone/iPad) */}
            {activeTab === "ios" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="relative z-10"
              >
                <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5 mb-4 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs mb-1">
                    <FaApple size={14} className="text-white" />
                    <span>របៀបដំឡើង App លើ iPhone ៖</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 font-bold text-[10px]">1</span>
                    <p className="truncate">
                      បើក <strong>Safari</strong> រួចចុច <strong>Share <Share size={12} className="inline text-sky-400" /></strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[10px]">2</span>
                    <p className="truncate">
                      ជ្រើសរើស <strong>&quot;Add to Home Screen <PlusSquare size={12} className="inline text-emerald-400" />&quot;</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-[10px]">3</span>
                    <p className="truncate">
                      ចុច <strong>&quot;Add&quot;</strong> ដើម្បីបន្ថែម App លើ Home Screen
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-950 rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-md transition-all text-xs cursor-pointer active:scale-[0.98]"
                >
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>យល់ព្រម / Got it</span>
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
