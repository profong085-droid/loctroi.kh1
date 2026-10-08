import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, userAgent, language, theme, screenResolution, ip, batteryLevel, isCharging, networkType, downlink, gps } = body;

    // Environment variables
    const SITE_NAME = process.env.SITE_NAME || "My Website";
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Missing Telegram bot tokens in environment variables");
      return NextResponse.json({ success: false, error: "Configuration error" }, { status: 500 });
    }

    // ទាញយកព័ត៌មានទីតាំងពី IP
    let ipLocationStr = "មិនមានព័ត៌មាន";
    if (ip) {
      try {
        const ipLocRes = await fetch(`http://ip-api.com/json/${ip}`);
        const ipLocData = await ipLocRes.json();
        if (ipLocData.status === "success") {
          ipLocationStr = `${ipLocData.city}, ${ipLocData.regionName}, ${ipLocData.country} (ISP: ${ipLocData.isp})`;
        }
      } catch (e) {
        console.error("IP Location fetching error", e);
      }
    }

    // បម្លែង GPS Coordinates ទៅជាទីតាំងពិត (Reverse Geocoding)
    let gpsLocationStr = "មិនមាន (User មិនអនុញ្ញាត ឬ Error)";
    let googleMapsLink = "";

    if (gps && gps.lat && gps.lon) {
      googleMapsLink = `https://www.google.com/maps?q=${gps.lat},${gps.lon}`;
      try {
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${gps.lat}&lon=${gps.lon}&accept-language=km,en`,
          { headers: { "User-Agent": "NextjsVisitorTracker/1.0" } }
        );
        const geoData = await geoRes.json();
        if (geoData && geoData.display_name) {
          gpsLocationStr = `📍 <a href="${googleMapsLink}">${geoData.display_name}</a>`;
        } else {
          gpsLocationStr = `📍 <a href="${googleMapsLink}">Latitude: ${gps.lat}, Longitude: ${gps.lon}</a>`;
        }
      } catch (e) {
        console.error("Reverse geocoding error", e);
        gpsLocationStr = `📍 <a href="${googleMapsLink}">Latitude: ${gps.lat}, Longitude: ${gps.lon}</a>`;
      }
    }

    // បែងចែកប្រភេទ Device (សាមញ្ញ)
    let deviceType = "Desktop 💻";
    if (/android/i.test(userAgent)) deviceType = "Android Mobile 📱";
    else if (/iphone|ipad|ipod/i.test(userAgent)) deviceType = "iOS Mobile 📱";
    else if (/windows/i.test(userAgent)) deviceType = "Windows PC 💻";
    else if (/macintosh|mac os x/i.test(userAgent)) deviceType = "Mac 🍏";
    else if (/linux/i.test(userAgent)) deviceType = "Linux 🐧";

    const batteryStr = batteryLevel !== undefined ? `${batteryLevel}% ${isCharging ? "⚡(កំពុងសាក)" : "🔋"}` : "មិនមានព័ត៌មាន";
    const networkStr = networkType ? `${networkType} (~${downlink} Mbps)` : "មិនមានព័ត៌មាន";

    // រៀបចំសារជាទម្រង់ HTML ដើម្បីផ្ញើទៅ Telegram
    const message = `
🔔 <b>មានអ្នកចូលមើលថ្មីនៅលើ ${SITE_NAME}</b>

🌐 <b>តំណភ្ជាប់ (URL):</b> ${url}
🌍 <b>អាសយដ្ឋាន IP:</b> <code>${ip || "មិនមាន"}</code>
🗺 <b>ទីតាំងតាម IP:</b> ${ipLocationStr}
📍 <b>ទីតាំង GPS ពិតប្រាកដ:</b> ${gpsLocationStr}

📱 <b>ព័ត៌មានអំពីឧបករណ៍ (Device):</b>
• ប្រព័ន្ធប្រតិបត្តិការ: ${deviceType}
• ពណ៌ (Theme): ${theme === "Dark" ? "ងងឹត (Dark) 🌙" : "ភ្លឺ (Light) ☀️"}
• ថាមពលថ្ម: ${batteryStr}
• ប្រព័ន្ធអ៊ីនធឺណិត: ${networkStr}
• ទំហំអេក្រង់: ${screenResolution || "មិនមាន"}
• ភាសា: ${language || "មិនមាន"}

🤖 <b>កម្មវិធីរុករក (User Agent):</b>
<pre>${userAgent}</pre>
    `.trim();

    // ១. ផ្ញើសារអត្ថបទទៅកាន់ Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const tgResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: false, // អនុញ្ញាតអោយបង្ហាញ Map Preview
      }),
    });

    if (!tgResponse.ok) {
      console.error("Telegram API Error");
      return NextResponse.json({ success: false, error: "Failed to send message to Telegram" }, { status: 500 });
    }

    // ២. ប្រសិនបើមាន GPS, ផ្ញើផែនទី (Location Pin) ទៅ Telegram បន្ថែមទៀត
    if (gps && gps.lat && gps.lon) {
      const locationUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendLocation`;
      await fetch(locationUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          latitude: gps.lat,
          longitude: gps.lon,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor track API route error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
