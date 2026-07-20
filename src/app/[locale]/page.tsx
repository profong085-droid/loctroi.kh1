import { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import dynamic from "next/dynamic";

const Partners = dynamic(() => import("@/components/Partners").then(mod => mod.Partners));
const About = dynamic(() => import("@/components/About").then(mod => mod.About));
const Products = dynamic(() => import("@/components/Products").then(mod => mod.Products));
// const VideoSongs = dynamic(() => import("@/components/VideoSongs").then(mod => mod.VideoSongs));
const AgriVideos = dynamic(() => import("@/components/AgriVideos").then(mod => mod.AgriVideos));

import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const sParams = await searchParams;
  const songParam = sParams.song;
  
  const alternates = {
    canonical: `/${locale}`,
    languages: {
      'km-KH': '/kh',
      'en-US': '/en',
      'vi-VN': '/vi',
    }
  };

  // Dynamic OpenGraph image if sharing a specific song
  if (songParam && !Array.isArray(songParam)) {
    const idx = parseInt(songParam, 10);
    if (idx === 0) {
      return {
        alternates,
        openGraph: {
          title: "ភាពរុងរឿង Loctroi Cambodia",
          images: [
            {
              url: encodeURI("/photo/ភាពរុងរឿង Loctroi Cambodia-Cover.jpg"),
              width: 1200,
              height: 630,
              alt: "ភាពរុងរឿង Loctroi Cambodia",
            },
          ],
        },
      };
    }
  }

  return { alternates };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HomeHero />

      {/* Partners Section */}
      <Partners />

      {/* About Section */}
      <About />

      {/* Products Section */}
      <Products />

      {/* Video Songs Section */}
      {/* <VideoSongs /> */}

      {/* Agri Videos Section */}
      <AgriVideos />
    </main>
  );
}
