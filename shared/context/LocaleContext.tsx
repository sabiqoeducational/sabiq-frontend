"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/shared/i18n/config";
import type { Messages } from "@/shared/i18n/messages";
import { createTranslator } from "@/shared/i18n/translate";

type LocaleContextValue = {
  locale: Locale;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  const t = useMemo(
    () => createTranslator(messages as unknown as Record<string, unknown>),
    [messages],
  );

  const value = useMemo(() => ({ locale, t }), [locale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return ctx;
}

export function useTranslations() {
  return useLocaleContext().t;
}

export function useLocale() {
  return useLocaleContext().locale;
}
