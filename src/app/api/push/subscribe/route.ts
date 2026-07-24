import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

// File path for storing subscriptions in OS tmpdir
const filePath = path.join(os.tmpdir(), "loctroi-push-subscriptions.json");

function safeWriteFile(targetPath: string, data: string) {
  try {
    const dirname = path.dirname(targetPath);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }
    fs.writeFileSync(targetPath, data);
  } catch (err) {
    console.warn("Subscription write warning (serverless environment):", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const subscription = await req.json();

    if (!subscription || !subscription.endpoint) {
      return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
    }

    let subscriptions: unknown[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileData = fs.readFileSync(filePath, "utf-8");
        subscriptions = JSON.parse(fileData);
      } catch {
        subscriptions = [];
      }
    }

    // Check if endpoint already exists
    const exists = subscriptions.some(
      (sub: unknown) => (sub as { endpoint: string }).endpoint === subscription.endpoint
    );

    if (!exists) {
      subscriptions.push({
        ...subscription,
        subscribedAt: new Date().toISOString(),
      });
      safeWriteFile(filePath, JSON.stringify(subscriptions, null, 2));
    }

    return NextResponse.json({ success: true, count: subscriptions.length });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

export async function GET() {
  try {
    let count = 0;
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      const subscriptions = JSON.parse(fileData);
      count = Array.isArray(subscriptions) ? subscriptions.length : 0;
    }
    return NextResponse.json({ subscriberCount: count });
  } catch {
    return NextResponse.json({ subscriberCount: 0 });
  }
}
