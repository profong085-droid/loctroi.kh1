import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Tag, FlaskConical, CheckCircle2, Leaf, Microscope } from "lucide-react";
import { Metadata } from "next";

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

  return {
    title: `${product.name} | Loc Troi Cambodia`,
    description: `ផលិតផល ${product.name} - ${product.categoryKh}។ ${product.usage}`,
    openGraph: {
      title: `${product.name} | Loc Troi Cambodia`,
      description: `ផលិតផល ${product.name} - ${product.categoryKh}`,
      images: [
        {
          url: `/${product.image}`,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link 
          href="/#products" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          ត្រឡប់ទៅទំព័រដើម
        </Link>
        
        <div className="bg-white rounded-4xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="w-full md:w-1/2 p-12 bg-slate-50 flex items-center justify-center min-h-[400px]">
            <div className="relative w-full h-[500px]">
              <Image 
                src={`/${product.image}`} 
                alt={product.name} 
                fill
                priority
                className="object-contain drop-shadow-2xl" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 text-sm font-black rounded-full uppercase tracking-wider mb-6 w-max">
              {product.categoryKh}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="space-y-6 mb-8">
              {product.ingredients && (
                <div className="bg-primary-50/50 p-6 rounded-2xl border border-primary-100">
                  <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2 text-xl">
                    <FlaskConical size={24} className="text-primary-600" />
                    ធាតុកម្មសកម្ម (Active Ingredients)
                  </h4>
                  <p className="text-primary-800 font-semibold text-lg ml-8 mb-4 border-l-4 border-primary-300 pl-4 py-1">
                    {product.ingredients}
                  </p>
                  
                  {/* Detailed Information based on Active Ingredient */}
                  {product.ingredientDetails && (
                    <div className="ml-8 bg-white p-5 rounded-xl shadow-sm border border-primary-100">
                      <h5 className="font-bold text-primary-800 mb-3 flex items-center gap-2">
                        <Microscope size={20} className="text-accent-500" />
                        ព័ត៌មានលម្អិតនៃធាតុកម្ម៖
                      </h5>
                      <div className="text-slate-600 leading-relaxed text-base space-y-2">
                        {product.ingredientDetails.split('\n').map((line: string, i: number) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {product.benefits && product.benefits.length > 0 && (
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
                    <Leaf size={20} className="text-accent-500" />
                    អត្ថប្រយោជន៍ (Benefits)
                  </h4>
                  <ul className="space-y-3 ml-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-lg leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-lg">
                  <Tag size={20} className="text-accent-500" />
                  របៀបប្រើប្រាស់ (Usage)
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg ml-7">
                  {product.usage}
                </p>
              </div>
            </div>
            
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl w-full text-lg"
            >
              សាកសួរព័ត៌មានបន្ថែម
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
