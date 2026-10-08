"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      // ពិនិត្យមើលថាតើធ្លាប់បាន track ក្នុង session នេះឬនៅ
      if (sessionStorage.getItem("visitor_tracked")) {
        return;
      }

      try {
        const data: any = {
          url: window.location.href,
          userAgent: navigator.userAgent,
          language: navigator.language,
          theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light",
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        };

        // ទាញយក IP ពី API ខាងក្រៅ
        try {
          const ipResponse = await fetch("https://api.ipify.org?format=json");
          const ipData = await ipResponse.json();
          data.ip = ipData.ip;
        } catch (e) {
          console.error("Failed to fetch IP", e);
        }

        // ទាញយកព័ត៌មានថ្ម (Battery) បើមាន
        if ("getBattery" in navigator) {
          try {
            const battery: any = await (navigator as any).getBattery();
            data.batteryLevel = Math.round(battery.level * 100);
            data.isCharging = battery.charging;
          } catch (e) {
            console.error("Battery API error", e);
          }
        }

        // ទាញយកព័ត៌មានល្បឿនអ៊ីនធឺណិត (Network Information)
        if ("connection" in navigator) {
          const conn = (navigator as any).connection;
          data.networkType = conn.effectiveType || "Unknown";
          data.downlink = conn.downlink || 0; // Mbps
        }

        // សុំការអនុញ្ញាតទាញយកទីតាំង GPS (Geolocation)
        const getPosition = () =>
          new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              timeout: 10000,
              enableHighAccuracy: true,
            });
          });

        try {
          if ("geolocation" in navigator) {
            const position = await getPosition();
            data.gps = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
          }
        } catch (e) {
          console.log("GPS permission denied or timeout");
        }

        // ផ្ញើទិន្នន័យទៅកាន់ API របស់យើង
        await fetch("/api/track-visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        // កំណត់ session storage ដើម្បីកុំឱ្យផ្ញើផ្ទួនៗ
        sessionStorage.setItem("visitor_tracked", "true");
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    // រង់ចាំបន្តិចមុននឹងដំណើរការ ដើម្បីកុំឱ្យប៉ះពាល់ដល់ការដំណើរការទំព័រ
    const timeoutId = setTimeout(() => {
      trackVisitor();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return null; // Component នេះមិនបង្ហាញអ្វីនៅលើអេក្រង់ទេ
}
