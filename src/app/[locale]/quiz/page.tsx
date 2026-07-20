
import FooterQuiz from "@/components/FooterQuiz";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'kh' ? "សាកល្បងចំណេះដឹង | Loc Troi" : "Agriculture Knowledge Quiz | Loc Troi",
    description: "Test your knowledge about agriculture and our products.",
  };
}

export default async function QuizPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-primary-50 pb-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-100 bg-primary-900 rounded-b-[20%] z-0"></div>
      
      <div className="w-full max-w-4xl mx-auto z-10 flex flex-col pt-28 px-4 relative">
        <div className="w-full flex justify-start mb-6">
          {/* Back Button */}
          <Link 
            href={`/${locale}`} 
            className="flex items-center gap-2 text-white/80 hover:text-white font-medium transition-all hover:-translate-x-1 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>ត្រឡប់ទៅក្រោយ</span>
          </Link>
        </div>

        <div className="text-center mb-10 w-full">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-md">ហ្គេមសាកល្បងចំណេះដឹង</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
            ចូលរួមលេងកម្សាន្ត និងសាកល្បងចំណេះដឹងរបស់អ្នកអំពីវិស័យកសិកម្ម និងផលិតផលរបស់ Lộc Trời
          </p>
        </div>
        
        {/* Render the Quiz Component */}
        <div className="w-full">
          <FooterQuiz />
        </div>
      </div>
    </div>
  );
}
