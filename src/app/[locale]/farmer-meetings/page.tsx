import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const tNav = await getTranslations({ locale, namespace: "Navbar" });
  
  const title = `${tNav("farmer_meetings")} | Loc Troi Cambodia`;
  const description = tNav("farmer_meetings_desc");
    
  return {
    title,
    description,
    keywords: ["ប្រជុំកសិករ", "Farmer Meetings", "Lộc Trời Cambodia", "កសិកម្ម", "បច្ចេកទេសកសិកម្ម", "ជីកសិកម្ម", "ថ្នាំកសិកម្ម", "ទិន្នផលស្រូវ", "agriculture techniques"],
    openGraph: {
      title,
      description,
      type: "website",
    }
  };
}

export default async function FarmerMeetingsPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  setRequestLocale(locale);
  const tNav = await getTranslations({ locale, namespace: "Navbar" });

  const images = [
    "១.jpg",
    "2.jpg",
    "3.jpg",
    "៤.jpg",
    "៥.jpg",
    "៦.jpg",
    "៧.jpg"
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8">
          <Link 
            href={`/${locale}`} 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            {tNav("home")}
          </Link>
        </div>

        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-sm font-bold rounded-full mb-6">
            Lộc Trời Cambodia
          </div>
          <h1 className="text-4xl md:text-5xl font-koulen text-primary-950 mb-6 leading-tight">
            {tNav("farmer_meetings")}
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {tNav("farmer_meetings_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white aspect-4/3">
              <Image 
                src={`/ប្រជុំកសិករ/${img}`} 
                alt={`${locale === 'kh' ? 'ប្រជុំកសិករជាមួយ Lộc Trời Cambodia' : 'Farmer meeting with Loc Troi Cambodia'} - រូបភាពទី ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{tNav("farmer_meetings")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
