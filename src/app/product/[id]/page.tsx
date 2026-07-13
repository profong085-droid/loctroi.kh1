import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Tag } from "lucide-react";
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
            
            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 mb-8">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-lg">
                <Tag size={20} className="text-accent-500" />
                ព័ត៌មានលម្អិត
              </h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {product.usage}
              </p>
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
