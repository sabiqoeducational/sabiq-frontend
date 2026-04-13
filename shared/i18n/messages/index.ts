import type { Locale } from "@/shared/i18n/config";
import { ar, type Messages } from "./ar";
import { en } from "./en";

export type { Messages };

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? en : ar;
}
