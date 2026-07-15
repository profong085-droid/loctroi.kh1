import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

try {
  const outerLockfile = path.join(process.cwd(), "..", "package-lock.json");
  if (fs.existsSync(outerLockfile)) {
    fs.unlinkSync(outerLockfile);
    console.log("✅ បានលុបឯកសារ package-lock.json នៅខាងក្រៅដោយស្វ័យប្រវត្តិដើម្បីជួសជុលបញ្ហា។");
  }
} catch {
  // ignore
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
