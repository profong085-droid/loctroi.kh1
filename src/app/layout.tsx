import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Koulen } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Layout";

import { AuthProvider } from "@/context/AuthContext";

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

export const metadata: Metadata = {
  title: "Loc Troi Cambodia - ដៃគូកសិកម្មដ៏ល្អបំផុតរបស់អ្នក",
  description: "ក្រុមហ៊ុន Loc Troi Cambodia ផ្គត់ផ្គង់ថ្នាំការពារដំណាំ ជីកសិកម្ម និងពូជស្រូវគុណភាពខ្ពស់ ដើម្បីជួយកសិករកម្ពុជាបង្កើនទិន្នផល និងគុណភាពដំណាំ។",
  keywords: ["ថ្នាំកសិកម្ម", "ជីកសិកម្ម", "ពូជស្រូវ", "កសិកម្មកម្ពុជា", "Loc Troi Cambodia", "Lộc Trời", "ថ្នាំសម្លាប់សត្វល្អិត", "ជីបំប៉ន"],
  openGraph: {
    title: "Loc Troi Cambodia",
    description: "ដៃគូកសិកម្មដ៏ល្អបំផុតរបស់អ្នក ផ្គត់ផ្គង់ថ្នាំកសិកម្ម ជី និងពូជស្រូវ។",
    url: "https://loctroi-kh.com",
    siteName: "Loc Troi Cambodia",
    images: [
      {
        url: "/photo/banner 3.jpg",
        width: 1200,
        height: 630,
        alt: "Loc Troi Cambodia Banner",
      },
    ],
    locale: "km_KH",
    type: "website",
  },
  icons: {
    icon: "/photo/logo4.png?v=2",
    apple: "/photo/logo4.png?v=2",
  },
  verification: {
    google: "uemO56pZRbhi7Fe_74xIzAmZ_K5bKYMvwOfN2ppAMiw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km" className="scroll-smooth">
      <body className={`${inter.variable} ${kantumruyPro.variable} ${koulen.variable} font-khmer bg-slate-50 text-slate-900 antialiased`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
