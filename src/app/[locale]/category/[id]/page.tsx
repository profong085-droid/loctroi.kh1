import { productsData, categories, getLocalizedText } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ id: string, locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryId = resolvedParams.id;
  
  const category = categories.find((c) => c.id === categoryId);
  
  if (!category && categoryId !== "all") {
    return {
      title: "រកមិនឃើញប្រភេទ - Loc Troi Cambodia",
    };
  }

  // Assuming t is accessible via a helper or we just use category name
  const catName = category ? category.name : "ផលិតផលទាំងអស់";

  return {
    title: `${catName} | Loc Troi Cambodia`,
    description: `ផលិតផលក្នុងប្រភេទ ${catName} ពី Loc Troi Cambodia`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const categoryId = resolvedParams.id;
  
  setRequestLocale(locale);
  
  const category = categories.find((c) => c.id === categoryId);
  if (!category && categoryId !== "all") {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Products" });
  const catName = categoryId === "all" ? t("categoryAll") : t(`category_${categoryId}` as Parameters<typeof t>[0]);

  const filteredProducts = productsData.filter(p => categoryId === "all" || p.category === categoryId);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center mb-8">
          <Link 
            href={`/${locale}#products`} 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            {t("back") || "ត្រឡប់ក្រោយ"}
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-koulen text-primary-950 mb-4">{catName}</h1>
          <p className="text-slate-500">
            {t("showing")} {filteredProducts.length} {t("productsCount")}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">{t("noResults")}</h3>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <Link 
                href={`/${locale}/product/${product.id}`}
                key={product.id}
                className="group relative bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-50 overflow-hidden flex flex-col h-full min-h-62.5 md:min-h-87.5"
              >
                <div className="relative h-40 md:h-56 p-4 flex items-center justify-center bg-slate-50 overflow-hidden">
                  <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary-800 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all z-10 shadow-sm">
                    <ZoomIn size={16} />
                  </div>
                  <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={`/${product.image}`}
                      alt={getLocalizedText(product.name, locale)}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col justify-end text-center bg-white z-20">
                  <h4 className="font-bold text-slate-800 text-sm md:text-lg mb-1 line-clamp-2">
                    {getLocalizedText(product.name, locale)}
                  </h4>
                  <p className="text-accent-500 text-xs md:text-sm font-semibold">
                    {category?.name || product.categoryKh}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
