import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import React from 'react';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, phone, message, productName, productCategory, productUsage, productImage } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ error: "Telegram config missing" }, { status: 500 });
    }

    if (type === "contact") {
      // Contact form message
      const telegramText = `📬 *សារថ្មីពីអតិថិជន (New Contact)*\n\n*ឈ្មោះ (Name):* ${name}\n*លេខទូរស័ព្ទ (Phone):* ${phone}\n*សារ (Message):* ${message}`;

      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: "Markdown",
        }),
      });

    } else if (type === "login") {
      // Login notification
      const telegramText = `🔔 *ចូលគណនីថ្មី (New Login)*\n\n*ឈ្មោះ (Name):* ${name}\n*អ៊ីមែល (Email):* ${message}\n*ម៉ោង (Time):* ${new Date().toLocaleString()}`;

      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: "Markdown",
        }),
      });

    } else if (type === "product-inquiry") {
      if (productImage) {
        try {
          // 1. Get Base64 image for the receipt
          const imagePath = path.join(process.cwd(), 'public', productImage.replace(/^https?:\/\/[^\/]+/, ''));
          let base64Image = '';
          if (fs.existsSync(imagePath)) {
            const fileBuffer = fs.readFileSync(imagePath);
            const ext = path.extname(imagePath).replace('.', '') || 'png';
            base64Image = `data:image/${ext};base64,${fileBuffer.toString('base64')}`;
          } else {
            // Fallback to URL if local file not found
            base64Image = productImage;
          }

          // 2. Fetch Khmer Font (Suwannaphum)
          let fontData: ArrayBuffer | null = (globalThis as unknown as { __cachedFontData?: ArrayBuffer }).__cachedFontData || null;
          if (!fontData) {
            try {
              const cssRes = await fetch('https://fonts.googleapis.com/css2?family=Suwannaphum:wght@400', {
                headers: { 'User-Agent': 'Mozilla/5.0' },
                signal: AbortSignal.timeout(3000),
              });
              if (cssRes.ok) {
                const css = await cssRes.text();
                const match = css.match(/url\((https:\/\/[^)]+\.ttf)\)/);
                if (match) {
                  const fontRes = await fetch(match[1], { signal: AbortSignal.timeout(3000) });
                  if (fontRes.ok) {
                    fontData = await fontRes.arrayBuffer();
                    (globalThis as unknown as { __cachedFontData?: ArrayBuffer }).__cachedFontData = fontData;
                  }
                }
              }
            } catch (e) {
              console.warn("Failed to load Google font, using system font fallback", e);
            }
          }

          // 3. Generate Receipt Image (POS Style)
          const receiptElement = React.createElement('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
              padding: '40px',
              fontFamily: '"Suwannaphum", sans-serif',
              alignItems: 'center',
            }
          }, 
            React.createElement('img', { src: 'https://loctroi.online/photo/logo%20loctroi%206.png', width: 120, height: 120, style: { marginBottom: '20px' } }),
            React.createElement('div', { style: { fontSize: '46px', fontWeight: 'bold', color: '#0f172a', marginBottom: '10px' } }, 'LOC TROI CAMBODIA'),
            React.createElement('div', { style: { fontSize: '26px', color: '#64748b', marginBottom: '10px' } }, 'សាកសួរព័ត៌មានផលិតផល (Inquiry)'),
            React.createElement('div', { style: { fontSize: '22px', color: '#64748b', marginBottom: '30px' } }, 'Phnom Penh, Cambodia'),
            
            React.createElement('div', { style: { borderBottom: '2px dashed #cbd5e1', width: '100%', marginBottom: '30px' } }),
            
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' } },
              React.createElement('div', { style: { fontSize: '24px', color: '#64748b' } }, new Date().toLocaleString('en-GB')),
              React.createElement('div', { style: { fontSize: '24px', color: '#64748b' } }, `ID #${Math.floor(Math.random() * 9000) + 1000}`)
            ),
            React.createElement('div', { style: { display: 'flex', width: '100%', justifyContent: 'flex-start', marginBottom: '30px' } },
              React.createElement('div', { style: { fontSize: '24px', color: '#64748b' } }, `From: ${name || 'Customer'} (${phone || 'N/A'})`)
            ),
            
            React.createElement('div', { style: { borderBottom: '2px dashed #cbd5e1', width: '100%', marginBottom: '30px' } }),
            
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '30px', color: '#94a3b8', fontSize: '22px', fontWeight: 'bold' } },
              React.createElement('div', null, 'ITEM / PRODUCT'),
              React.createElement('div', null, 'CATEGORY')
            ),
            
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' } },
              React.createElement('div', { style: { display: 'flex', flexDirection: 'column', maxWidth: '60%' } },
                React.createElement('div', { style: { fontSize: '28px', fontWeight: 'bold', color: '#0f172a', marginBottom: '10px', lineHeight: 1.2 } }, productName),
                React.createElement('div', { style: { fontSize: '24px', color: '#64748b', display: 'flex' } }, 'មើលព័ត៌មានបន្ថែមក្នុងប្រអប់សារ')
              ),
              React.createElement('div', { style: { fontSize: '24px', color: '#0f172a', fontWeight: 'bold' } }, productCategory)
            ),
            
            base64Image ? React.createElement('img', { src: base64Image, width: 250, height: 250, style: { marginTop: '30px', objectFit: 'contain' } }) : null,
            
            React.createElement('div', { style: { borderBottom: '2px dashed #cbd5e1', width: '100%', margin: '40px 0' } }),
            
            React.createElement('div', { style: { fontSize: '26px', color: '#64748b', marginBottom: '15px' } }, 'អរគុណសម្រាប់ការចាប់អារម្មណ៍!'),
            React.createElement('div', { style: { fontSize: '26px', color: '#64748b', marginBottom: '20px' } }, 'ក្រុមការងារនឹងទាក់ទងទៅអ្នកឆាប់ៗនេះ'),
            React.createElement('div', { style: { fontSize: '28px', fontWeight: 'bold', color: '#0f172a' } }, 'Thank You & See You Again!')
          );

          const fonts = fontData ? [{ name: 'Suwannaphum', data: fontData, weight: 400 as const, style: 'normal' as const }] : [];
          const imageResponse = new ImageResponse(receiptElement, {
            width: 600,
            height: 980,
            fonts,
          });

          // 4. Send to Telegram
          const imageBuffer = await imageResponse.arrayBuffer();
          // Fix for Web FormData in Next.js
          const file = new File([imageBuffer], "receipt.png", { type: "image/png" });
          
          const formData = new FormData();
          formData.append("chat_id", chatId);
          formData.append("photo", file);
          formData.append("caption", `📩 **វិក្កយបត្រសាកសួរព័ត៌មានថ្មី (Inquiry POS)**\n\n*ឈ្មោះអតិថិជន:* ${name}\n*លេខទូរស័ព្ទ:* ${phone}\n*ផលិតផល:* ${productName}\n*សារបន្ថែម:* ${message || 'គ្មាន'}`);
          formData.append("parse_mode", "Markdown");

          const url = `https://api.telegram.org/bot${token}/sendPhoto`;
          const response = await fetch(url, {
            method: "POST",
            body: formData,
          });
          
          if (!response.ok) {
            throw new Error(`Telegram API Error: ${await response.text()}`);
          }
        } catch (err) {
          console.error("Failed to send generated receipt, falling back to text:", err);
          const caption = `🛒 *អតិថិជនចាប់អារម្មណ៍ផលិតផល (Fallback)*\n\n*ឈ្មោះអតិថិជន:* ${name}\n*លេខទូរស័ព្ទ:* ${phone}\n*ឈ្មោះផលិតផល:* ${productName}\n*ប្រភេទ:* ${productCategory}`;
          const url = `https://api.telegram.org/bot${token}/sendMessage`;
          await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: caption, parse_mode: "Markdown" }),
          });
        }
      } else {
        const caption = `🛒 *អតិថិជនចាប់អារម្មណ៍ផលិតផល*\n\n*ឈ្មោះផលិតផល:* ${productName}\n*ប្រភេទ:* ${productCategory}\n*ព័ត៌មានបន្ថែម:* ${productUsage}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: caption, parse_mode: "Markdown" }),
        });
      }
    } else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
