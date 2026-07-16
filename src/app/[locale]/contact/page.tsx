import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Contact } from "@/components/Contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: "Contact" });
  
  return {
    title: `${t("title1")} ${t("title2")} | Loc Troi Cambodia`,
    description: t("subtitle"),
  };
}

export default async function ContactPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  setRequestLocale(locale);
  const tNav = await getTranslations({ locale, namespace: "Navbar" });

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl mb-4">
        <Link 
          href={`/${locale}`} 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          {tNav("home")}
        </Link>
      </div>
      <Contact />
    </main>
  );
}
