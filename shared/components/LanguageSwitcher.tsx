"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/shared/i18n/config";
import { locales } from "@/shared/i18n/config";
import { useLocale } from "@/shared/context/LocaleContext";

export function LanguageSwitcher() {
  const router = useRouter();
  const current = useLocale();
  const [pending, setPending] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function setLocale(locale: Locale) {
    if (locale === current || pending) {
      setIsOpen(false);
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });
      if (!response.ok) return;
      router.refresh();
    } finally {
      setPending(false);
      setIsOpen(false);
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>

      <button
        type="button"
        disabled={pending}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 px-4 py-2 text-sm border border-brand text-brand rounded-lg font-medium transition-colors hover:bg-brand/5 bg-transparent backdrop-blur-sm"
      >
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="mt-0.5">{current.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 lg:right-0 lg:left-auto mt-2 w-full min-w-[100px] bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => void setLocale(locale)}
              className={`w-full text-center px-4 py-2 text-sm transition-colors ${current === locale
                ? "bg-brand/10 text-brand font-bold"
                : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}