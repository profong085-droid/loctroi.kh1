"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { FaFacebookF, FaTiktok, FaTelegram, FaGoogle } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";


const LanguageSwitcher = ({ scrolled }: { scrolled: boolean }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLanguage = (newLocale: string) => {
    // pathname might be /kh, /en, /vi or /kh/product/...
    // simple replace logic:
    const segments = pathname.split('/');
    if (segments.length > 1 && ['kh', 'en', 'vi', 'zh', 'hi', 'ja', 'ko', 'ar'].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join('/') || '/');
  };

  return (
    <div className="relative group cursor-pointer ml-4">
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${
        scrolled ? "border-slate-200 text-slate-800" : "border-white/30 text-white"
      }`}>
        <Image 
          src={locale === 'kh' ? "https://flagcdn.com/w40/kh.png" : locale === 'en' ? "https://flagcdn.com/w40/gb.png" : locale === 'zh' ? "https://flagcdn.com/w40/cn.png" : locale === 'hi' ? "https://flagcdn.com/w40/in.png" : locale === 'ja' ? "https://flagcdn.com/w40/jp.png" : locale === 'ko' ? "https://flagcdn.com/w40/kr.png" : locale === 'ar' ? "https://flagcdn.com/w40/ae.png" : "https://flagcdn.com/w40/vn.png"} 
          alt={locale} 
          width={24} height={16} unoptimized 
          className="rounded-sm object-cover shadow-sm w-6 h-4"
        />
        <span className="text-sm font-bold uppercase">{locale}</span>
      </div>
      <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {[
          { code: 'kh', name: 'ភាសាខ្មែរ', flag: 'https://flagcdn.com/w40/kh.png' },
          { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
          { code: 'vi', name: 'Tiếng Việt', flag: 'https://flagcdn.com/w40/vn.png' },
          { code: 'zh', name: '中文', flag: 'https://flagcdn.com/w40/cn.png' },
          { code: 'hi', name: 'हिन्दी', flag: 'https://flagcdn.com/w40/in.png' },
          { code: 'ja', name: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
          { code: 'ko', name: '한국어', flag: 'https://flagcdn.com/w40/kr.png' },
          { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/w40/ae.png' },
        ].map(lang => (
          <div 
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
          >
            <Image src={lang.flag} alt={lang.name} width={24} height={16} unoptimized className="rounded-sm object-cover shadow-sm w-6 h-4" />
            <span className="text-sm font-semibold text-slate-700">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const locale = useLocale();

  const isHomePage = pathname === '/' || /^\/[a-z]{2}$/.test(pathname);
  const isNavSolid = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedInUser = result.user;
      
      await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "login",
          name: loggedInUser.displayName || "Unknown",
          message: loggedInUser.email || "Unknown",
        }),
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isNavSolid ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={`/${locale}/#hero`} className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
            <Image
              src="/photo/logo loctroi 6.png"
              alt="Logo"
              fill
              sizes="48px"
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-xl leading-tight transition-colors ${
                isNavSolid ? "text-primary-950" : "text-white"
              }`}
            >
              LỘC TRỜI
            </span>
            <span
              className={`font-semibold text-xs tracking-[0.2em] uppercase transition-colors ${
                isNavSolid ? "text-primary-600" : "text-accent-400"
              }`}
            >
              Cambodia
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: "hero", label: t("home") },
            { id: "about", label: t("about") },
            { id: "products", label: t("products") },
          ].map((item) => (
            <Link
              key={item.id}
              href={`/${locale}/#${item.id}`}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-accent-500 ${
                isNavSolid ? "text-slate-700" : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {loading ? (
            <div className="w-24 h-10 bg-white/20 animate-pulse rounded-full"></div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20">
                <Image 
                  src={user.photoURL || "https://avatar.vercel.sh/guest"} 
                  alt={user.displayName || "User"} 
                  width={28}
                  height={28}
                  unoptimized
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className={`text-sm font-semibold hidden lg:block ${isNavSolid ? "text-slate-800" : "text-white"}`}>
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={() => signOut(auth)}
                className={`text-sm font-bold px-4 py-2 rounded-full border transition-colors ${
                  isNavSolid ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {t("logout")}
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-800 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/5 border border-slate-100"
            >
              <FaGoogle className="text-red-500" />
              {t("login")}
            </button>
          )}
          
          <LanguageSwitcher scrolled={isNavSolid} />
        </div>
        
        {/* Mobile Toggle */}
        <button
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          className={`md:hidden p-2 rounded-lg ${
            isNavSolid ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100"
          >
            <div className="flex flex-col p-4">
              {[
                { id: "hero", label: t("home") },
                { id: "about", label: t("about") },
                { id: "products", label: t("products") },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}/#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-4 text-slate-800 font-bold border-b border-slate-50 flex items-center justify-between group"
                >
                  {item.label}
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-primary-500 transition-colors" />
                </Link>
              ))}
              
              {/* Mobile Authentication */}
              <div className="p-4 border-b border-slate-50">
                {loading ? (
                  <div className="w-full h-10 bg-slate-100 animate-pulse rounded-full"></div>
                ) : user ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 px-2">
                      <Image 
                        src={user.photoURL || "https://avatar.vercel.sh/guest"} 
                        alt={user.displayName || "User"} 
                        width={32}
                        height={32}
                        unoptimized
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-bold text-slate-800">
                        {user.displayName}
                      </span>
                    </div>
                    <button
                      onClick={() => { signOut(auth); setMobileMenuOpen(false); }}
                      className="w-full text-sm font-bold px-4 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors text-center"
                    >
                      {t("logout")}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => { handleLogin(); setMobileMenuOpen(false); }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 text-slate-800 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors shadow-sm"
                  >
                    <FaGoogle className="text-red-500" />
                    {t("login")}
                  </button>
                )}
              </div>

              {/* Mobile Language Switcher */}
              <div className="p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Language / ភាសា</span>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {[
                    { code: 'kh', name: 'ខ្មែរ', flag: 'https://flagcdn.com/w40/kh.png' },
                    { code: 'en', name: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
                    { code: 'vi', name: 'VN', flag: 'https://flagcdn.com/w40/vn.png' },
                    { code: 'zh', name: 'CN', flag: 'https://flagcdn.com/w40/cn.png' },
                    { code: 'hi', name: 'IN', flag: 'https://flagcdn.com/w40/in.png' },
                    { code: 'ja', name: 'JP', flag: 'https://flagcdn.com/w40/jp.png' },
                    { code: 'ko', name: 'KR', flag: 'https://flagcdn.com/w40/kr.png' },
                    { code: 'ar', name: 'AE', flag: 'https://flagcdn.com/w40/ae.png' },
                  ].map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        const segments = window.location.pathname.split('/');
                        if (segments.length > 1 && ['kh', 'en', 'vi', 'zh', 'hi', 'ja', 'ko', 'ar'].includes(segments[1])) {
                          segments[1] = lang.code;
                        } else {
                          segments.splice(1, 0, lang.code);
                        }
                        window.location.href = segments.join('/') || '/';
                      }}
                      className="flex flex-col items-center gap-1.5 p-2 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <Image src={lang.flag} alt={lang.name} width={24} height={16} unoptimized className="rounded-sm object-cover shadow-sm w-6 h-4" />
                      <span className="text-[10px] font-bold text-slate-600">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");
  const locale = useLocale();
  
  return (
    <footer id="footer-info" className="bg-primary-950 text-white/70 pt-8 pb-12 md:pt-10 md:pb-16 text-sm border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 relative">
              <Image src="/photo/logo loctroi 6.png" alt="Logo" fill className="object-contain" sizes="(max-width: 768px) 96px, 128px" />
            </div>
            <h2 className="font-black text-xl text-white mb-2">LỘC TRỜI CAMBODIA</h2>
            <p className="text-white/50 mb-6 max-w-xs text-sm md:text-base">{t("desc")}</p>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm md:text-base">{t("linksTitle")}</h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li>
                <Link href={`/${locale}/about`} className="text-slate-300 hover:text-accent-500 transition-colors">{t("aboutLink")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-slate-300 hover:text-accent-500 transition-colors">{t("contactLink")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/branches`} className="text-slate-300 hover:text-accent-500 transition-colors">{t("branchesLink")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/farmer-meetings`} className="text-slate-300 hover:text-accent-500 transition-colors">{tNav("farmer_meetings")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/quiz`} className="text-accent-400 hover:text-accent-300 transition-colors font-semibold">{t("quizLink")}</Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-bold text-white uppercase tracking-wider text-sm md:text-base">{t("contactTitle")}</h3>
              <Image src="https://flagcdn.com/w40/kh.png" alt="Cambodia Flag" width={40} height={27} unoptimized className="h-4 w-auto rounded-sm object-cover shadow-sm" />
            </div>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent-500 shrink-0 mt-1" size={18} />
                <span>{t("addressLabel")}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone size={20} className="text-primary-500" />
                <span>097 945 0831 | 071 777 3554</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent-500 shrink-0" size={18} />
                <span>Profong085@gmail.com</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm md:text-base">{t("socialTitle")}</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Phochaifong007/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors duration-300 shadow-sm border border-white/5">
                <FaFacebookF size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.tiktok.com/@ifong168" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 shadow-sm border border-white/5">
                <FaTiktok size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://t.me/Phochaifong" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#229ED9] hover:text-white transition-colors duration-300 shadow-sm border border-white/5">
                <FaTelegram size={20} className="md:w-5.5 md:h-5.5 -ml-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500"
        >
          <p>{t("copyright").replace("{year}", new Date().getFullYear().toString())}</p>
          <p>PHOCHAIFONG</p>
        </motion.div>
      </div>
    </footer>
  );
};
