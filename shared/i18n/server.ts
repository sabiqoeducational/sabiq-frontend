import { headers } from "next/headers";
import { defaultLocale, isValidLocale, type Locale } from "@/shared/i18n/config";
import { getMessages, type Messages } from "@/shared/i18n/messages";

export async function getServerLocale(): Promise<Locale> {
  const headerStore = await headers();
  const raw = headerStore.get("x-locale");
  return isValidLocale(raw) ? raw : defaultLocale;
}

export async function getServerMessages(): Promise<{ locale: Locale; messages: Messages }> {
  const locale = await getServerLocale();
  return { locale, messages: getMessages(locale) };
}
