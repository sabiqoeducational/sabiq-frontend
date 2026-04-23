import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import AppProviders from "@/app/providers";
import { isRtlLocale } from "@/shared/i18n/config";
import { getServerMessages } from "@/shared/i18n/server";
import { getTenantTheme } from "@/shared/theme/tenantTheme";
import "./globals.css";
import "@/modules/platform/Css/index.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { messages } = await getServerMessages();
  return {
    title: messages.meta.title,
    description: messages.meta.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const tenant = headerStore.get("x-tenant") ?? "public";
  const isPlatform = headerStore.get("x-platform") !== "false";
  const { locale, messages } = await getServerMessages();
  const theme = getTenantTheme(tenant);
  const dir = isRtlLocale(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        data-tenant={tenant}
        style={
          {
            "--tenant-primary": theme.primary,
            "--tenant-secondary": theme.secondary,
          } as CSSProperties
        }
        className="min-h-full flex flex-col"
      >
        <AppProviders
          tenant={tenant}
          isPlatform={isPlatform}
          locale={locale}
          messages={messages}
        >
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
