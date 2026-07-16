import { productsData, getLocalizedText } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Tag, FlaskConical, CheckCircle2, Leaf, Microscope } from "lucide-react";
import { Metadata } from "next";
import { ShareButton } from "@/components/ShareButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    return {
      title: "រកមិនឃើញផលិតផល - Loc Troi Cambodia",
    };
  }

  const productName = getLocalizedText(product.name, 'kh');
  const productUsage = getLocalizedText(product.usage, 'kh');

  return {
    title: `${productName} | Loc Troi Cambodia`,
    description: `ផលិតផល ${productName} - ${product.categoryKh}។ ${productUsage}`,
    openGraph: {
      title: `${productName} | Loc Troi Cambodia`,
      description: `ផលិតផល ${productName} - ${product.categoryKh}`,
      url: `https://loctroi.online/product/${product.id}`,
      siteName: 'Loc Troi Cambodia',
      images: [
        {
          url: `https://loctroi.online/${product.image}`,
          width: 800,
          height: 800,
          alt: `${productName} | Loc Troi Cambodia`,
        },
      ],
      locale: 'km_KH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${productName} | Loc Troi Cambodia`,
      description: `ផលិតផល ${productName} - ${product.categoryKh}`,
      images: [`https://loctroi.online/${product.image}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const productName = getLocalizedText(product.name, 'kh');
  const productUsage = getLocalizedText(product.usage, 'kh');
  const productIngredients = getLocalizedText(product.ingredients, 'kh');
  const productIngredientDetails = getLocalizedText(product.ingredientDetails, 'kh');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    image: `https://loctroi.online/${product.image}`,
    description: `ផលិតផល ${productName} - ${product.categoryKh}។ ${productUsage}`,
    brand: {
      '@type': 'Brand',
      name: 'Loc Troi Cambodia'
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/#products" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            ត្រឡប់ទៅទំព័រដើម
          </Link>
          <ShareButton 
            title={`${productName} | Loc Troi Cambodia`}
            text={`ផលិតផល ${productName} - ${product.categoryKh} របស់ក្រុមហ៊ុន ឡុក ត្រើយ`}
            url={`https://loctroi.online/product/${product.id}`}
          />
        </div>
        
        <div className="bg-white rounded-4xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="w-full md:w-1/2 p-6 sm:p-12 bg-slate-50 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image 
                src={`/${product.image}`} 
                alt={`${productName} | Loc Troi Cambodia`} 
                title={`${productName} - Loc Troi Cambodia`}
                fill
                priority
                className="object-contain drop-shadow-2xl" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary-100 text-primary-800 text-xs sm:text-sm font-black rounded-full uppercase tracking-wider mb-4 sm:mb-6 w-max">
              {product.categoryKh}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4 sm:mb-6 leading-tight">
              {productName}
            </h1>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {product.ingredients && (
                <div className="bg-primary-50/50 p-4 sm:p-6 rounded-2xl border border-primary-100">
                  <h4 className="font-bold text-primary-900 mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                    <FlaskConical size={20} className="text-primary-600 sm:w-[24px] sm:h-[24px]" />
                    ធាតុកម្មសកម្ម (Active Ingredients)
                  </h4>
                  <p className="text-primary-800 font-semibold text-sm sm:text-base md:text-lg ml-4 sm:ml-8 mb-4 border-l-4 border-primary-300 pl-4 py-1">
                    {productIngredients}
                  </p>
                  
                  {/* Detailed Information based on Active Ingredient */}
                  {product.ingredientDetails && (
                    <div className="ml-4 sm:ml-8 bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-primary-100">
                      <h5 className="font-bold text-primary-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <Microscope size={18} className="text-accent-500 sm:w-[20px] sm:h-[20px]" />
                        ព័ត៌មានលម្អិតនៃធាតុកម្ម៖
                      </h5>
                      <div className="text-slate-600 leading-relaxed text-sm sm:text-base space-y-2">
                        {productIngredientDetails.split('\n').map((line: string, i: number) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {product.benefits && product.benefits.length > 0 && (
                <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                    <Leaf size={18} className="text-accent-500 sm:w-[20px] sm:h-[20px]" />
                    អត្ថប្រយោជន៍ (Benefits)
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 ml-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5 sm:w-[20px] sm:h-[20px]" />
                        <span className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">{getLocalizedText(benefit, 'kh')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg">
                  <Tag size={18} className="text-accent-500 sm:w-[20px] sm:h-[20px]" />
                  របៀបប្រើប្រាស់ (Usage)
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg ml-4 sm:ml-7">
                  {productUsage}
                </p>
              </div>
            </div>
            
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl w-full text-base sm:text-lg"
            >
              សាកសួរព័ត៌មានបន្ថែម
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
