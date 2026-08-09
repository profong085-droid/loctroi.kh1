"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { messaging, db } from "@/lib/firebase";
import { getToken } from "firebase/messaging";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const saveTokenToFirestore = async (token: string) => {
    if (!db) return;
    try {
      const tokenRef = doc(db, 'fcm_tokens', token);
      await setDoc(tokenRef, {
        token: token,
        updatedAt: serverTimestamp(),
        platform: navigator.userAgent
      }, { merge: true });
    } catch (error) {
      console.error("Error saving token to Firestore", error);
    }
  };

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // If already consented and permission granted, ensure Firebase is registered and listen for foreground messages
      if ("Notification" in window && Notification.permission === "granted" && "serviceWorker" in navigator && messaging) {
        navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
          getToken(messaging!, { 
            vapidKey: "BNtF9TLWxL77W7nG4BkdXqJ-VA9JYL-vGTevU_bPlhV-rdjLdJGowcpX9rSWBJHKtm1ECcGtR6S-xM0aEY9bnWM",
            serviceWorkerRegistration: registration
          })
            .then((currentToken) => {
              if (currentToken) {
                console.log("FCM Token exists");
                saveTokenToFirestore(currentToken);
              }
            })
            .catch((err) => console.log("FCM Error:", err));
        }).catch(err => console.error("SW registration failed", err));
      }
    }
  }, []);

  // Listen for foreground messages
  useEffect(() => {
    const fcm = messaging;
    if (fcm) {
      import("firebase/messaging").then(({ onMessage }) => {
        onMessage(fcm, (payload) => {
          console.log("Foreground message:", payload);
          
          // Play loud notification sound
          try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            const ctx = new AudioContext();
            
            // First loud beep
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            osc.type = "square";
            osc.frequency.setValueAtTime(800, ctx.currentTime); 
            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0, ctx.currentTime);
            gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
            
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.5);
            
            // Second loud beep
            setTimeout(() => {
              const osc2 = ctx.createOscillator();
              const gainNode2 = ctx.createGain();
              osc2.connect(gainNode2);
              gainNode2.connect(ctx.destination);
              
              osc2.type = "square";
              osc2.frequency.setValueAtTime(1200, ctx.currentTime);
              gainNode2.gain.setValueAtTime(1, ctx.currentTime);
              gainNode2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
              
              osc2.start(ctx.currentTime);
              osc2.stop(ctx.currentTime + 0.5);
            }, 200);
          } catch (e) {
            console.log("Audio play error", e);
          }

          if (Notification.permission === "granted") {
            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification(payload.notification?.title || "សារថ្មី", {
                  body: payload.notification?.body,
                  icon: "/favicon.ico",
                });
              });
            } else {
              new Notification(payload.notification?.title || "សារថ្មី", {
                body: payload.notification?.body,
                icon: "/favicon.ico",
              });
            }
          }
        });
      });
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
          if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
              // We must wait for the service worker to become active before showing a notification
              navigator.serviceWorker.ready.then((readyRegistration) => {
                readyRegistration.showNotification("អរគុណសម្រាប់ការយល់ព្រម!", {
                  body: "អ្នកនឹងទទួលបានព័ត៌មានកសិកម្មថ្មីៗពី Lộc Trời Cambodia",
                  icon: "/favicon.ico",
                });
              });

              if (messaging) {
                getToken(messaging!, { 
                  vapidKey: "BNtF9TLWxL77W7nG4BkdXqJ-VA9JYL-vGTevU_bPlhV-rdjLdJGowcpX9rSWBJHKtm1ECcGtR6S-xM0aEY9bnWM",
                  serviceWorkerRegistration: registration
                })
                  .then((currentToken) => {
                    if (currentToken) {
                      console.log("FCM Token exists");
                      saveTokenToFirestore(currentToken);
                    }
                  })
                  .catch((err) => console.log("FCM Token Error:", err));
              }
            });
          } else {
            new Notification("អរគុណសម្រាប់ការយល់ព្រម!", {
              body: "អ្នកនឹងទទួលបានព័ត៌មានកសិកម្មថ្មីៗពី Lộc Trời Cambodia",
              icon: "/favicon.ico",
            });
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
