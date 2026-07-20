import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: "About" });
  
  return {
    title: `${t("title1")} ${t("title2")} | Loc Troi Cambodia`,
    description: t("desc"),
  };
}

export default async function AboutPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "About" });
  const tNav = await getTranslations({ locale, namespace: "Navbar" });

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

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-sm font-bold rounded-full mb-6">
              {t("badge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-koulen text-primary-950 mb-6 leading-tight">
              {t("title1")} <span className="text-accent-500">{t("title2")}</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t("desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: t("feature1_title"), desc: t("feature1_desc"), icon: Award },
                { title: t("feature2_title"), desc: t("feature2_desc"), icon: Target },
                { title: t("feature3_title"), desc: t("feature3_desc"), icon: Eye },
                { title: t("feature4_title"), desc: t("feature4_desc"), icon: CheckCircle2 },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-100 md:h-150">
              <Image 
                src="/banner តាសុខ/តាសុខ.jpg" 
                alt="About Loc Troi Cambodia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-950/80 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="text-white">
                  <div className="text-6xl font-black text-accent-400 mb-2">10+</div>
                  <div className="text-xl font-bold">{t("experience")}</div>
                  <div className="text-primary-100">{t("experienceDesc")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
