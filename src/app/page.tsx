import { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { Products } from "@/components/Products";
import { VideoSongs } from "@/components/VideoSongs";
import { AgriVideos } from "@/components/AgriVideos";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const songParam = params.song;
  
  // Dynamic OpenGraph image if sharing a specific song
  if (songParam && !Array.isArray(songParam)) {
    const idx = parseInt(songParam, 10);
    if (idx === 0) {
      return {
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

  return {};
}

export default function Home() {
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
      <VideoSongs />

      {/* Agri Videos Section */}
      <AgriVideos />
    </main>
  );
}
