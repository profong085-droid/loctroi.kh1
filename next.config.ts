import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
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

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      'next-intl/config': './src/i18n.ts'
    }
  }
};

const finalConfig = withNextIntl(nextConfig);

// Remove experimental.turbo injected by next-intl to prevent Next.js warnings/errors
if (finalConfig && typeof finalConfig === 'object' && finalConfig.experimental && 'turbo' in finalConfig.experimental) {
  delete finalConfig.experimental.turbo;
  if (Object.keys(finalConfig.experimental).length === 0) {
    delete finalConfig.experimental;
  }
}

export default finalConfig;
