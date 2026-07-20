import type { Metadata, Viewport } from "next";
import { Inter, Kantumruy_Pro, Koulen } from "next/font/google";
import "../globals.css";
import { Navbar, Footer } from "@/components/Layout";
import { FloatingComponents } from "@/components/FloatingComponents";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';

import { AuthProvider } from "@/context/AuthContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kantumruyPro = Kantumruy_Pro({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["khmer"],
  variable: "--font-khmer"
});
const koulen = Koulen({
  weight: "400",
  subsets: ["khmer"],
  variable: "--font-koulen"
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL("https://loctroi.online"),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://loctroi.online/${locale}`,
      siteName: "Loc Troi Cambodia",
      images: [
        {
          url: "/photo/Loc%20Troi%20Icypro.jpg",
          width: 1200,
          height: 630,
          alt: "Loc Troi Cambodia Banner",
        },
      ],
      locale: locale === 'kh' ? 'km_KH' : locale === 'vi' ? 'vi_VN' : 'en_US',
      type: "website",
    },
    icons: {
      icon: "/photo/logo%20loctroi%206.png?v=6",
      apple: "/photo/logo%20loctroi%206.png?v=6",
    },
    verification: {
      google: "uemO56pZRbhi7Fe_74xIzAmZ_K5bKYMvwOfN2ppAMiw",
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Loc Troi Cambodia",
      "url": "https://loctroi.online",
      "image": "https://loctroi.online/photo/Loc%20Troi%20Icypro.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Loc Troi Cambodia",
      "url": "https://loctroi.online",
      "logo": "https://loctroi.online/photo/logo%20loctroi%206.png?v=6",
      "description": "ក្រុមហ៊ុន Loc Troi Cambodia ផ្តល់ជូននូវកសិផលគុណភាពខ្ពស់ ថ្នាំកសិកម្ម ជី និងពូជស្រូវ ដើម្បីជួយកសិករកម្ពុជា។"
    }
  ];

  return (
    <html lang={locale} className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${kantumruyPro.variable} ${koulen.variable} font-khmer bg-slate-50 text-slate-900 antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <FloatingComponents />
            <Analytics />
            <SpeedInsights />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
