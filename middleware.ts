import { NextRequest, NextResponse } from "next/server";
import { extractTenantFromHost, isPlatformHost } from "@/middleware/tenant";
import {
  defaultLocale,
  isValidLocale,
  LOCALE_COOKIE,
  type Locale,
} from "@/shared/i18n/config";

function detectLocale(request: NextRequest): Locale {
  const cookieValue = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isValidLocale(cookieValue)) {
    return cookieValue;
  }

  const accept = request.headers.get("accept-language") ?? "";
  const languages = accept
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  if (languages.some((lang) => lang.startsWith("ar"))) {
    return "ar";
  }
  if (languages.some((lang) => lang.startsWith("en"))) {
    return "en";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const platform = isPlatformHost(host);
  const tenant = extractTenantFromHost(host) ?? "public";
  const locale = detectLocale(request);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tenant", tenant);
  requestHeaders.set("x-platform", String(platform));
  requestHeaders.set("x-locale", locale);

  if (!platform && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/tenant";
    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
