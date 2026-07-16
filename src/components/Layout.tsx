"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { FaFacebookF, FaTiktok, FaTelegram, FaGoogle } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

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
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
            <Image
              src="/photo/logo loctroi 6.png"
              alt="Logo"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-xl leading-tight transition-colors ${
                scrolled ? "text-primary-950" : "text-white"
              }`}
            >
              LỘC TRỜI
            </span>
            <span
              className={`font-semibold text-xs tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-primary-600" : "text-accent-400"
              }`}
            >
              Cambodia
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: "hero", label: "ទំព័រដើម" },
            { id: "about", label: "អំពីយើង" },
            { id: "products", label: "ផលិតផល" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-accent-500 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
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
                <span className={`text-sm font-semibold hidden lg:block ${scrolled ? "text-slate-800" : "text-white"}`}>
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={() => signOut(auth)}
                className={`text-sm font-bold px-4 py-2 rounded-full border transition-colors ${
                  scrolled ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                ចាកចេញ
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-800 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/5 border border-slate-100"
            >
              <FaGoogle className="text-red-500" />
              ចូលគណនី
            </button>
          )}
        </div>
        
        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${
            scrolled ? "text-slate-800" : "text-white"
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
                { id: "hero", label: "ទំព័រដើម" },
                { id: "about", label: "អំពីយើង" },
                { id: "products", label: "ផលិតផល" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-4 text-slate-800 font-bold border-b border-slate-50 flex items-center justify-between group"
                >
                  {item.label}
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-primary-500 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="w-32 h-32 mb-6">
              <Image src="/photo/logo loctroi 6.png" alt="Logo" width={128} height={128} className="object-contain" />
            </div>
            <h3 className="font-black text-xl text-white mb-2">LỘC TRỜI CAMBODIA</h3>
            <p className="text-white/50 mb-6 max-w-xs">ដៃគូកសិកម្មដ៏ល្អបំផុតរបស់អ្នក ផ្តល់ជូនផលិតផលកសិកម្មគុណភាពខ្ពស់។</p>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <h4 className="font-bold text-white uppercase tracking-wider">ទំនាក់ទំនង</h4>
              <Image src="https://flagcdn.com/w40/kh.png" alt="Cambodia Flag" width={40} height={27} unoptimized className="h-4 w-auto rounded-sm object-cover shadow-sm" />
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent-500 shrink-0 mt-1" size={18} />
                <span>ភ្នំពេញ, ប្រទេសកម្ពុជា</span>
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
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">បណ្តាញសង្គម</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Phochaifong007/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors duration-300 shadow-sm border border-white/5">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.tiktok.com/@ifong168" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 shadow-sm border border-white/5">
                <FaTiktok size={20} />
              </a>
              <a href="https://t.me/Phochaifong" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#229ED9] hover:text-white transition-colors duration-300 shadow-sm border border-white/5">
                <FaTelegram size={22} className="-ml-0.5" />
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
          <p>© {new Date().getFullYear()} Loc Troi Cambodia. រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ Pho Chaifong</p>
          <p>PHOCHAIFONG</p>
        </motion.div>
      </div>
    </footer>
  );
};
