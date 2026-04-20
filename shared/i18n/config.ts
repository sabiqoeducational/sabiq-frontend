export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

/** Cookie name for persisted language choice */
export const LOCALE_COOKIE = "sabiq-locale";

export function isValidLocale(value: string | null | undefined): value is Locale {
  return value === "ar" || value === "en";
}

export function isRtlLocale(locale: Locale): boolean {
  return locale === "ar";
}

export const localeLabels: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
};
