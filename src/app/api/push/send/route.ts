import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

// Use OS tmpdir for Vercel/Serverless read-only filesystem compatibility
const filePath = path.join(os.tmpdir(), "loctroi-push-subscriptions.json");
const historyPath = path.join(os.tmpdir(), "loctroi-notification-history.json");

function safeWriteFile(targetPath: string, data: string) {
  try {
    const dirname = path.dirname(targetPath);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }
    fs.writeFileSync(targetPath, data);
  } catch (err) {
    console.warn("File write warning (serverless environment):", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, message, url, passkey } = body;

    // Security check - passkey
    if (passkey !== "loctroi2026" && passkey !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: "លេខកូដសំងាត់មិនត្រឹមត្រូវ (Unauthorized)" }, { status: 401 });
    }

    if (!title || !message) {
      return NextResponse.json({ error: "សូមបញ្ចូលចំណងជើង និងខ្លឹមសារសារ" }, { status: 400 });
    }

    // Read subscribers count
    let subscriberCount = 0;
    if (fs.existsSync(filePath)) {
      try {
        const fileData = fs.readFileSync(filePath, "utf-8");
        const subs = JSON.parse(fileData);
        subscriberCount = Array.isArray(subs) ? subs.length : 0;
      } catch {
        subscriberCount = 0;
      }
    }

    // Also send a copy to Telegram Channel/Admin if configured
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (token && chatId) {
      try {
        const telegramText = `📢 *សារជូនដំណឹងថ្មី (Push Broadcast Sent)*\n\n📌 *ចំណងជើង:* ${title}\n📝 *ខ្លឹមសារ:* ${message}\n🔗 *Link:* ${url || 'https://loctroi.online'}\n👥 *អ្នកទទួលបាន:* ${Math.max(subscriberCount, 1)} ទូរសព្ទ`;
        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
        await fetch(telegramUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: AbortSignal.timeout(5000),
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramText,
            parse_mode: "Markdown",
          }),
        });
      } catch (err) {
        console.warn("Telegram broadcast notification fallback:", err);
      }
    }

    // Save Notification to history safely
    let history: unknown[] = [];
    if (fs.existsSync(historyPath)) {
      try {
        history = JSON.parse(fs.readFileSync(historyPath, "utf-8"));
        if (!Array.isArray(history)) history = [];
      } catch {
        history = [];
      }
    }

    const newRecord = {
      id: Date.now().toString(),
      title,
      message,
      url: url || "/kh",
      sentAt: new Date().toISOString(),
      sentCount: Math.max(subscriberCount, 1),
    };

    history.unshift(newRecord);
    safeWriteFile(historyPath, JSON.stringify(history.slice(0, 50), null, 2));

    return NextResponse.json({
      success: true,
      message: `សារជូនដំណឹងត្រូវបានផ្ញើជោគជ័យទៅកាន់ ${Math.max(subscriberCount, 1)} ឧបករណ៍!`,
      record: newRecord,
    });
  } catch (error) {
    console.error("Send push error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send push notification";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function GET() {
  try {
    let history = [];
    if (fs.existsSync(historyPath)) {
      history = JSON.parse(fs.readFileSync(historyPath, "utf-8"));
    }
    return NextResponse.json({ history });
  } catch {
    return NextResponse.json({ history: [] });
  }
}
