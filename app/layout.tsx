import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import AppProviders from "@/app/providers";
import { getTenantTheme } from "@/shared/theme/tenantTheme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "منصة سبيق",
  description: "منصة SaaS تعليمية متعددة المستأجرين",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const tenant = headerStore.get("x-tenant") ?? "public";
  const theme = getTenantTheme(tenant);

  return (
    <html
      lang="ar"
      dir="rtl"
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
        <AppProviders tenant={tenant}>{children}</AppProviders>
      </body>
    </html>
  );
}
