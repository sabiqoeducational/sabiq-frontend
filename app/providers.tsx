"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
// 1. مسحنا سطر الـ import بتاع الـ LanguageSwitcher من هنا
import { LocaleProvider } from "@/shared/context/LocaleContext";
import { TenantProvider } from "@/shared/context/TenantContext";
import type { Locale } from "@/shared/i18n/config";
import type { Messages } from "@/shared/i18n/messages";
import { createQueryClient } from "@/shared/lib/queryClient";

export default function AppProviders({
  tenant,
  isPlatform,
  locale,
  messages,
  children,
}: {
  tenant: string;
  isPlatform: boolean;
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <LocaleProvider locale={locale} messages={messages}>
      <TenantProvider tenant={tenant} isPlatform={isPlatform}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </TenantProvider>
    </LocaleProvider>
  );
}