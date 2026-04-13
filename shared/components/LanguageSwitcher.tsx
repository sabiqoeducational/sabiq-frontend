"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/shared/i18n/config";
import { locales } from "@/shared/i18n/config";
import { localeLabels } from "@/shared/i18n/config";
import { useLocale, useTranslations } from "@/shared/context/LocaleContext";

export function LanguageSwitcher() {
  const router = useRouter();
  const current = useLocale();
  const t = useTranslations();
  const [pending, setPending] = useState(false);

  async function setLocale(locale: Locale) {
    if (locale === current || pending) return;
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
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-slate-500">{t("common.language")}</span>
      <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
        {locales.map((locale) => (
          <button
            key={locale}
            type="button"
            disabled={pending}
            onClick={() => void setLocale(locale)}
            className={`rounded-md px-2.5 py-1 font-medium transition ${
              current === locale
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
            aria-pressed={current === locale}
            aria-label={localeLabels[locale]}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
