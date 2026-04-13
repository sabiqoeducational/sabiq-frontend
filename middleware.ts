import { NextRequest, NextResponse } from "next/server";
import { extractTenantFromHost, isPlatformHost } from "@/middleware/tenant";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const platform = isPlatformHost(host);
  const tenant = extractTenantFromHost(host) ?? "public";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tenant", tenant);
  requestHeaders.set("x-platform", String(platform));

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
