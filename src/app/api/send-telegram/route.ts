import { NextRequest, NextResponse } from "next/server";

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
      // Product inquiry with image
      const caption = `🛒 *អតិថិជនចាប់អារម្មណ៍ផលិតផល*\n\n*ឈ្មោះផលិតផល:* ${productName}\n*ប្រភេទ:* ${productCategory}\n*ព័ត៌មានបន្ថែម:* ${productUsage}`;

      if (productImage) {
        // Try sending with photo
        try {
          const imageUrl = `${req.nextUrl.origin}/${productImage}`;
          const url = `https://api.telegram.org/bot${token}/sendPhoto`;
          await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              photo: imageUrl,
              caption: caption,
              parse_mode: "Markdown",
            }),
          });
        } catch {
          // Fallback to text only
          const url = `https://api.telegram.org/bot${token}/sendMessage`;
          await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: caption,
              parse_mode: "Markdown",
            }),
          });
        }
      } else {
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: caption,
            parse_mode: "Markdown",
          }),
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
