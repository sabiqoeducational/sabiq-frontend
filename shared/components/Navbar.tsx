"use client";

import { useTranslations } from "@/shared/context/LocaleContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.features"), href: "/features" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav className="relative w-full flex items-center justify-between px-6 pt-4 lg:px-24 bg-transparent z-50">
      
      {/* اللوجو */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-brand">
          SABIQ
        </Link>
      </div>

      {/* اللينكات (للشاشات الكبيرة) */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link, index) => {
          const isActive = link.href === '/' 
            ? (pathname === '/' || pathname === '/home') 
            : pathname?.startsWith(link.href);

          return (
            <Link 
              key={index} 
              href={link.href}
              className={`text-sm font-medium transition-all py-1 border-b-2 ${
                isActive 
                  ? "text-brand border-brand font-bold" 
                  : "text-slate-600 border-transparent hover:text-brand" 
              }`}
            >
              {link.name}
            </Link>
          )
        })}
      </div>

      {/* الأزرار وزرار الهامبرجر */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        <LanguageSwitcher />

        <div className="hidden sm:block">
          <Button href="/login" variant="primary" size="sm">
            {t("nav.login")}
          </Button>
        </div>

        {/* زرار الهامبرجر */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-brand focus:outline-none transition-colors z-50 relative"
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {/* حركة بسيطة للأيقونة نفسها عند التبديل */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <svg 
              className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg 
              className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </button>
      </div>

      {/* قائمة الموبايل المنسدلة مع حركة (Animation) 
        - origin-top: يخلي القائمة تفتح من فوق لتحت.
        - transition-all duration-300 ease-out: بيتحكم في نعومة الحركة.
        - translate-y-[-10px]: بيخلي القائمة مسحوبة لفوق شوية وهي مقفولة عشان تنزل بـ Slide.
      */}
      <div 
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl lg:hidden flex flex-col p-6 gap-4 z-40 origin-top transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 visible pointer-events-auto" 
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => {
          const isActive = link.href === '/' 
            ? (pathname === '/' || pathname === '/home') 
            : pathname?.startsWith(link.href);

          return (
            <Link 
              key={index} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium py-3 border-b w-fit transition-colors ${
                isActive 
                  ? "text-brand border-brand font-bold" 
                  : "text-slate-600 border-slate-100 border-none hover:text-brand" 
              }`}
            >
              {link.name}
            </Link>
          )
        })}

        <div className="sm:hidden mt-4 w-full">
          <Button href="/login" variant="primary" size="lg" className="w-full">
            {t("nav.login")}
          </Button>
        </div>
      </div>
    </nav>
  );
};