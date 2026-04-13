"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";
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
          <div className="flex justify-end border-b border-slate-200 bg-white px-4 py-2">
            <LanguageSwitcher />
          </div>
          {children}
        </QueryClientProvider>
      </TenantProvider>
    </LocaleProvider>
  );
}
