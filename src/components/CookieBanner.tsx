"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { messaging } from "@/lib/firebase";
import { getToken } from "firebase/messaging";

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = async () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);

    // Request Native Push Notification Permission
    if ("Notification" in window) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          // Show a test notification immediately
          new Notification("អរគុណសម្រាប់ការយល់ព្រម!", {
            body: "អ្នកនឹងទទួលបានព័ត៌មានកសិកម្មថ្មីៗពី Lộc Trời Cambodia",
            icon: "/favicon.ico",
          });

          // Attempt to get Firebase FCM Token (for future backend usage)
          if (messaging) {
            getToken(messaging)
              .then((currentToken) => {
                if (currentToken) {
                  console.log("FCM Token:", currentToken);
                }
              })
              .catch((err) => console.log("FCM Token Error:", err));
          }
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    }
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "false");
    setShowBanner(false);
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-9999 bg-gray-900/95 backdrop-blur text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap font-khmer text-xs md:text-sm border border-gray-700"
          >
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
              ✓
            </div>
            អរគុណសម្រាប់ការយល់ព្រម!
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-9999 p-2 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                {t("title")}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 font-inter leading-snug md:leading-normal">
                {t("description")}
              </p>
            </div>
            
            <div className="flex flex-row justify-center gap-2 md:gap-3 w-full md:w-auto shrink-0 mt-1 md:mt-0">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-4 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl border border-gray-300 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                {t("decline")}
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-4 py-1.5 md:px-6 md:py-2.5 rounded-lg md:rounded-xl bg-green-600 text-white text-xs md:text-sm font-medium hover:bg-green-700 transition-colors shadow-md shadow-green-600/30"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
