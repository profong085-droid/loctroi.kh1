/* eslint-disable @typescript-eslint/no-require-imports */
const TelegramBotModule = require('node-telegram-bot-api');
const TelegramBot = TelegramBotModule.default || TelegramBotModule;
const { createCanvas, loadImage } = require('canvas');
require('dotenv').config({ path: '.env.local' });

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false });

bot.deleteWebHook().then(() => {
  console.log('✅ បានលុប Webhook ចាស់ចោលដោយជោគជ័យ!');
  bot.startPolling();
  console.log('🤖 Telegram Bot កំពុងដំណើរការ... សូមវាយបញ្ជា /buy');
}).catch(console.error);

bot.onText(/\/buy/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    const width = 700;
    const height = 1100;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 1. Background White
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    let currentY = 60;

    // 2. Draw Logo
    try {
      const logoUrl = 'https://loctroi.online/photo/logo4.png';
      const logo = await loadImage(logoUrl);
      ctx.drawImage(logo, width / 2 - 75, currentY, 150, 150);
    } catch(e) {
      console.log('បញ្ហាក្នុងការទាញ Logo:', e.message);
    }
    
    currentY += 190;

    // 3. Title
    ctx.textAlign = 'center';
    ctx.fillStyle = '#111827';
    ctx.font = 'bold 46px Arial'; 
    ctx.fillText('LOC TROI CAMBODIA', width / 2, currentY);

    currentY += 70;

    // 4. Date and ID
    ctx.font = '24px Arial';
    ctx.fillStyle = '#6b7280'; // gray-500
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    ctx.textAlign = 'left';
    ctx.fillText(`${dateStr}, ${timeStr}`, 50, currentY);
    
    ctx.textAlign = 'right';
    const orderId = Math.floor(Math.random() * 9000) + 1000;
    ctx.fillText(`ID #${orderId}`, width - 50, currentY);

    currentY += 50;

    // From: Customer
    ctx.textAlign = 'left';
    ctx.fillText('From: Customer (N/A)', 50, currentY);

    currentY += 60;

    // Helper: Dashed Line
    const drawDashedLine = (y) => {
      ctx.beginPath();
      ctx.setLineDash([6, 6]);
      ctx.moveTo(50, y);
      ctx.lineTo(width - 50, y);
      ctx.strokeStyle = '#d1d5db'; // gray-300
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);
    };

    drawDashedLine(currentY);

    currentY += 60;

    // 5. Table Header
    ctx.font = '22px Arial';
    ctx.fillStyle = '#9ca3af'; // gray-400
    ctx.textAlign = 'left';
    ctx.fillText('ITEM / PRODUCT', 50, currentY);
    ctx.textAlign = 'right';
    ctx.fillText('CATEGORY', width - 50, currentY);

    currentY += 70;

    // 6. Product Item
    ctx.fillStyle = '#111827'; // very dark gray/black
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Facinate 4.5L', 50, currentY);

    ctx.textAlign = 'right';
    ctx.font = 'bold 26px Arial';
    ctx.fillText('ថ្នាំសម្លាប់សត្វល្អិត', width - 50, currentY);

    currentY += 45;
    
    ctx.fillStyle = '#6b7280';
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('មើលព័ត៌មានបន្ថែមក្នុងប្រអប់សារ', 50, currentY);

    currentY += 60;

    // 7. Product Image
    try {
      // Trying to draw the actual bottle image. We'll use a placeholder URL if not available.
      const productImgUrl = 'https://loctroi.online/photo/logo4.png'; // using logo as fallback for now
      const productImg = await loadImage(productImgUrl);
      
      // Draw product image in the center
      const imgWidth = 280;
      const imgHeight = 280;
      ctx.drawImage(productImg, (width - imgWidth) / 2, currentY, imgWidth, imgHeight);
    } catch(e) {
      console.log('បញ្ហាក្នុងការទាញរូបភាពទំនិញ:', e.message);
      // Fallback box
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(width / 2 - 140, currentY, 280, 280);
      ctx.fillStyle = '#9ca3af';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Product Image', width / 2, currentY + 140);
    }

    currentY += 340;

    drawDashedLine(currentY);

    currentY += 70;

    // 8. Footer Message
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6b7280';
    ctx.font = '26px Arial';
    ctx.fillText('អរគុណសម្រាប់ការអញ្ជើញ!', width / 2, currentY);
    
    currentY += 40;
    ctx.fillText('Thank you for your visit!', width / 2, currentY);

    // Buffer and send
    const buffer = canvas.toBuffer('image/png');
    await bot.sendPhoto(chatId, buffer, {
      caption: `✅ វិក្កយបត្រថ្មីត្រូវបានបង្កើតដោយជោគជ័យ!`
    });

  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'សូមអភ័យទោស មានបញ្ហាក្នុងការបង្កើតវិក្កយបត្រ។');
  }
});
