import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  try {
    const filePath = 'd:\\code new\\loctroi kh\\loctroi-next\\src\\data\\products.ts';
    const content = fs.readFileSync(filePath, 'utf-8');
    // We only send the first 50000 characters to avoid huge payload, or we can send all.
    return NextResponse.json({ content: content.substring(0, 50000) });
  } catch (err: unknown) {
    return new NextResponse((err as Error).message, { status: 200 }); // Return 200 so read_url_content doesn't fail
  }
}
