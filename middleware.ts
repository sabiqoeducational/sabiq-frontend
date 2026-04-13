import { NextRequest, NextResponse } from "next/server";
import { extractTenantFromHost } from "@/middleware/tenant";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const tenant = extractTenantFromHost(host) ?? "public";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-tenant", tenant);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
