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
          const imagePath = path.join(process.cwd(), 'public', productImage);
          let base64Image = '';
          if (fs.existsSync(imagePath)) {
            const fileBuffer = fs.readFileSync(imagePath);
            const ext = path.extname(imagePath).replace('.', '') || 'png';
            base64Image = `data:image/${ext};base64,${fileBuffer.toString('base64')}`;
          }

          // 2. Fetch Khmer Font (Suwannaphum)
          let fontData: ArrayBuffer | null = null;
          try {
            const cssRes = await fetch('https://fonts.googleapis.com/css2?family=Suwannaphum:wght@400', {
              headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36' }
            });
            const css = await cssRes.text();
            const match = css.match(/url\((https:\/\/[^)]+\.ttf)\)/);
            if (match) {
              const fontRes = await fetch(match[1]);
              fontData = await fontRes.arrayBuffer();
            }
          } catch (e) {
            console.error("Failed to load Khmer font", e);
          }

          // 3. Generate Receipt Image
          const receiptElement = React.createElement('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
              padding: '40px',
              borderTop: '16px solid #16a34a',
              fontFamily: '"Suwannaphum", sans-serif',
            }
          }, 
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #f1f5f9', paddingBottom: '20px', width: '100%' } },
              React.createElement('h1', { style: { fontSize: '42px', color: '#16a34a', margin: 0 } }, 'LỘC TRỜI (លំអងមាស)'),
              React.createElement('div', { style: { fontSize: '24px', color: '#64748b', display: 'flex' } }, 'សាកសួរព័ត៌មាន / Inquiry')
            ),
            React.createElement('div', { style: { display: 'flex', flexDirection: 'row', flex: 1, width: '100%' } },
              React.createElement('div', { style: { display: 'flex', flex: 1, flexDirection: 'column', paddingRight: '40px' } },
                React.createElement('h2', { style: { fontSize: '36px', color: '#0f172a', margin: '0 0 10px 0' } }, `ផលិតផល: ${productName}`),
                React.createElement('h3', { style: { fontSize: '28px', color: '#334155', margin: '0 0 20px 0' } }, `ប្រភេទ: ${productCategory}`),
                React.createElement('div', { style: { display: 'flex', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', flexWrap: 'wrap' } },
                   React.createElement('p', { style: { fontSize: '22px', color: '#475569', margin: 0, lineHeight: 1.5 } }, productUsage)
                )
              ),
              React.createElement('div', { style: { display: 'flex', width: '250px', height: '250px', backgroundColor: '#f8fafc', borderRadius: '16px', padding: '20px', justifyContent: 'center', alignItems: 'center' } },
                base64Image ? React.createElement('img', { src: base64Image, style: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } }) : null
              )
            ),
            React.createElement('div', { style: { display: 'flex', marginTop: 'auto', borderTop: '2px dashed #cbd5e1', paddingTop: '20px', justifyContent: 'space-between', color: '#94a3b8', fontSize: '20px', width: '100%' } },
              React.createElement('span', null, `កាលបរិច្ឆេទ: ${new Date().toLocaleString('en-GB')}`),
              React.createElement('span', null, 'បង្កើតដោយប្រព័ន្ធស្វ័យប្រវត្តិ')
            )
          );

          const fonts = fontData ? [{ name: 'Suwannaphum', data: fontData, weight: 400 as const, style: 'normal' as const }] : [];
          const imageResponse = new ImageResponse(receiptElement, {
            width: 800,
            height: 500,
            fonts,
          });

          // 4. Send to Telegram
          const imageBuffer = await imageResponse.arrayBuffer();
          const blob = new Blob([imageBuffer]);
          
          const formData = new FormData();
          formData.append("chat_id", chatId);
          formData.append("photo", blob, "receipt.png");
          formData.append("caption", `📩 វិក្កយបត្រសាកសួរព័ត៌មានថ្មី:\n*${productName}*`);
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
          const caption = `🛒 *អតិថិជនចាប់អារម្មណ៍ផលិតផល*\n\n*ឈ្មោះផលិតផល:* ${productName}\n*ប្រភេទ:* ${productCategory}\n*ព័ត៌មានបន្ថែម:* ${productUsage}`;
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
