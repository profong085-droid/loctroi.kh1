import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import React from 'react';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Telegram sends updates. If there is no message or text, just return success 200 to acknowledge.
    if (!body.message || !body.message.text) {
      return NextResponse.json({ success: true });
    }

    const chatId = body.message.chat.id;
    const text = body.message.text.trim();
    const token = process.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
      console.error("Missing TELEGRAM_BOT_TOKEN");
      return NextResponse.json({ error: "Missing config" }, { status: 500 });
    }

    // Only respond to /buy command
    if (text === "/buy") {
      try {
        // Fetch Khmer Font (Suwannaphum)
        let fontData: ArrayBuffer | null = null;
        try {
          const cssRes = await fetch('https://fonts.googleapis.com/css2?family=Suwannaphum:wght@400', {
            headers: { 'User-Agent': 'Mozilla/5.0' }
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

        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const orderId = Math.floor(Math.random() * 9000) + 1000;

        // Generate Receipt Image using next/og
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
          React.createElement('img', { src: 'https://loctroi.online/photo/logo4.png', width: 150, height: 150, style: { marginBottom: '20px' } }),
          React.createElement('div', { style: { fontSize: '46px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' } }, 'LOC TROI CAMBODIA'),
          
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '50px', marginBottom: '15px' } },
            React.createElement('div', { style: { fontSize: '24px', color: '#6b7280' } }, `${dateStr}, ${timeStr}`),
            React.createElement('div', { style: { fontSize: '24px', color: '#6b7280' } }, `ID #${orderId}`)
          ),
          React.createElement('div', { style: { display: 'flex', width: '100%', justifyContent: 'flex-start', marginBottom: '30px' } },
            React.createElement('div', { style: { fontSize: '24px', color: '#6b7280' } }, `From: Customer (N/A)`)
          ),
          
          React.createElement('div', { style: { borderBottom: '2px dashed #d1d5db', width: '100%', marginBottom: '30px' } }),
          
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '30px', color: '#9ca3af', fontSize: '22px' } },
            React.createElement('div', null, 'ITEM / PRODUCT'),
            React.createElement('div', null, 'CATEGORY')
          ),
          
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' } },
            React.createElement('div', { style: { display: 'flex', flexDirection: 'column', maxWidth: '60%' } },
              React.createElement('div', { style: { fontSize: '28px', fontWeight: 'bold', color: '#111827', marginBottom: '10px', lineHeight: 1.2 } }, 'Facinate 4.5L'),
              React.createElement('div', { style: { fontSize: '24px', color: '#6b7280', display: 'flex' } }, 'មើលព័ត៌មានបន្ថែមក្នុងប្រអប់សារ')
            ),
            React.createElement('div', { style: { fontSize: '26px', color: '#111827', fontWeight: 'bold' } }, 'ថ្នាំសម្លាប់សត្វល្អិត')
          ),
          
          React.createElement('img', { src: 'https://loctroi.online/photo/logo4.png', width: 280, height: 280, style: { marginTop: '40px', objectFit: 'contain' } }),
          
          React.createElement('div', { style: { borderBottom: '2px dashed #d1d5db', width: '100%', margin: '40px 0' } }),
          
          React.createElement('div', { style: { fontSize: '26px', color: '#6b7280', marginBottom: '15px' } }, 'អរគុណសម្រាប់ការអញ្ជើញ!'),
          React.createElement('div', { style: { fontSize: '26px', color: '#6b7280' } }, 'Thank you for your visit!')
        );

        const fonts = fontData ? [{ name: 'Suwannaphum', data: fontData, weight: 400 as const, style: 'normal' as const }] : [];
        const imageResponse = new ImageResponse(receiptElement, {
          width: 700,
          height: 1100,
          fonts,
        });

        const imageBuffer = await imageResponse.arrayBuffer();
        const file = new File([imageBuffer], "receipt.png", { type: "image/png" });
        
        const formData = new FormData();
        formData.append("chat_id", chatId);
        formData.append("photo", file);
        formData.append("caption", `✅ វិក្កយបត្រថ្មីត្រូវបានបង្កើតដោយជោគជ័យ!`);
        formData.append("parse_mode", "Markdown");

        const url = `https://api.telegram.org/bot${token}/sendPhoto`;
        await fetch(url, {
          method: "POST",
          body: formData,
        });

      } catch (err) {
        console.error("Error generating or sending receipt:", err);
        // Fallback text message if image fails
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: "សូមអភ័យទោស មានបញ្ហាក្នុងការបង្កើតវិក្កយបត្រ។" }),
        });
      }
    }

    // Always return 200 OK to Telegram so it stops retrying the webhook
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
