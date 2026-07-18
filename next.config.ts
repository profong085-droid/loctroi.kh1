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
  },
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      {
        source: '/photo/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
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
