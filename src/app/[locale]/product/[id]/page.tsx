import { productsData, getLocalizedText } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Tag, FlaskConical, CheckCircle2, Leaf, Microscope } from "lucide-react";
import { Metadata } from "next";
import { ShareButton } from "@/components/ShareButton";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RelatedProducts } from "@/components/RelatedProducts";

type Props = {
  params: Promise<{ id: string, locale: string }>;
};

export async function generateStaticParams() {
  const locales = ['kh', 'en', 'vi'];
  return locales.flatMap((locale) =>
    productsData.map((product) => ({
      locale,
      id: product.id,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const product = productsData.find((p) => p.id.toLowerCase() === resolvedParams.id.toLowerCase());
  
  if (!product) {
    return {
      title: "រកមិនឃើញផលិតផល - Loc Troi Cambodia",
    };
  }

  const productName = getLocalizedText(product.name, locale);
  const productUsage = getLocalizedText(product.usage, locale);

  return {
    title: `${productName} | Loc Troi Cambodia`,
    description: `ផលិតផល ${productName} - ${product.categoryKh}។ ${productUsage}`,
    alternates: {
      canonical: `/${locale}/product/${product.id}`,
      languages: {
        'km-KH': `/kh/product/${product.id}`,
        'en-US': `/en/product/${product.id}`,
        'vi-VN': `/vi/product/${product.id}`,
      }
    },
    openGraph: {
      title: `${productName} | Loc Troi Cambodia`,
      description: `ផលិតផល ${productName} - ${product.categoryKh}`,
      url: `https://loctroi.online/${locale}/product/${product.id}`,
      siteName: 'Loc Troi Cambodia',
      images: [
        {
          url: `https://loctroi.online/${product.image}`,
          width: 800,
          height: 800,
          alt: `${productName} | Loc Troi Cambodia`,
        },
      ],
      locale: locale === 'kh' ? 'km_KH' : locale === 'vi' ? 'vi_VN' : 'en_US',
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
  const locale = resolvedParams.locale;
  setRequestLocale(locale);
  const product = productsData.find((p) => p.id.toLowerCase() === resolvedParams.id.toLowerCase());

  if (!product) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "ProductDetail" });
  const tCat = await getTranslations({ locale, namespace: "Products" });
  const tNav = await getTranslations({ locale, namespace: "Navbar" });

  const productName = getLocalizedText(product.name, locale);
  const productUsage = getLocalizedText(product.usage, locale);
  const productIngredients = getLocalizedText(product.ingredients, locale);
  const productIngredientDetails = getLocalizedText(product.ingredientDetails, locale);
  
  // Benefits might be an array of LocaleText
  let productBenefits: string[] = [];
  if (product.benefits && product.benefits.length > 0) {
    productBenefits = product.benefits.map(b => getLocalizedText(b, locale));
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    image: `https://loctroi.online/${product.image}`,
    description: `ផលិតផល ${productName} - ${product.categoryKh}។ ${productUsage}`,
    brand: {
      '@type': 'Brand',
      name: 'Loc Troi Cambodia'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0',
      availability: 'https://schema.org/InStock',
      url: `https://loctroi.online/${locale}/product/${product.id}`,
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'KH',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnInStore',
        returnFees: 'https://schema.org/FreeReturn'
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD'
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'KH'
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'd'
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'd'
          }
        }
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '18'
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: tNav("home"),
        item: `https://loctroi.online/${locale}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: tNav("products"),
        item: `https://loctroi.online/${locale}#products`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: productName,
        item: `https://loctroi.online/${locale}/product/${product.id}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href={`/${locale}#products`} 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            {t("back")}
          </Link>
          <ShareButton 
            title={`${productName} | Loc Troi Cambodia`}
            text={`ផលិតផល ${productName} របស់ក្រុមហ៊ុន ឡុក ត្រើយ`}
            url={`https://loctroi.online/${locale}/product/${product.id}`}
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="w-full md:w-1/2 p-2 sm:p-6 md:p-12 bg-slate-50 flex items-center justify-center min-h-40 sm:min-h-55 md:min-h-100">
            <div className="relative w-full h-40 sm:h-55 md:h-125">
              <Image 
                src={`/${product.image}`} 
                alt={`${productName} | Loc Troi Cambodia`} 
                title={`${productName} - Loc Troi Cambodia`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-xl md:drop-shadow-2xl" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-14 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary-100 text-primary-800 text-[10px] sm:text-xs md:text-sm font-black rounded-full uppercase tracking-wider mb-2 sm:mb-6 w-max">
              {tCat(`category_${product.category}` as Parameters<typeof tCat>[0])}
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-5xl font-black text-slate-800 mb-2 sm:mb-6 leading-tight">
              {productName}
            </h1>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {productIngredients && (
                <div className="bg-primary-50/50 p-4 sm:p-6 rounded-xl border border-primary-100">
                  <h2 className="font-bold text-primary-900 mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                    <FlaskConical size={20} className="text-primary-600 sm:w-6 sm:h-6" />
                    {t("ingredients")}
                  </h2>
                  <p className="text-primary-800 font-semibold text-sm sm:text-base md:text-lg ml-4 sm:ml-8 mb-4 border-l-4 border-primary-300 pl-4 py-1">
                    {productIngredients}
                  </p>
                  
                  {/* Detailed Information based on Active Ingredient */}
                  {productIngredientDetails && (
                    <div className="ml-4 sm:ml-8 bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-primary-100">
                      <h3 className="font-bold text-primary-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <Microscope size={18} className="text-accent-500 sm:w-5 sm:h-5" />
                        {t("ingredientDetails")}
                      </h3>
                      <div className="text-slate-600 leading-relaxed text-sm sm:text-base space-y-2">
                        {productIngredientDetails.split('\n').map((line: string, i: number) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {productBenefits.length > 0 && (
                <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-100">
                  <h2 className="font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                    <Leaf size={18} className="text-accent-500 sm:w-5 sm:h-5" />
                    {t("benefits")}
                  </h2>
                  <ul className="space-y-2 sm:space-y-3 ml-1">
                    {productBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                        <span className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-100">
                <h2 className="font-bold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  <Tag size={16} className="text-accent-500 sm:w-5 sm:h-5" />
                  {t("usage")}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg ml-4 sm:ml-7">
                  {productUsage}
                </p>
              </div>
            </div>
            
            <Link 
              href={`/${locale}#contact`}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl w-full text-base sm:text-lg"
            >
              {t("inquire")}
            </Link>
          </div>
        </div>

        <RelatedProducts currentProductId={product.id} category={product.category} locale={locale} />
      </div>
    </main>
  );
}
