const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? "lvh.me";

export function extractTenantFromHost(host: string): string | null {
  const hostname = host.split(":")[0].toLowerCase();

  if (hostname === "localhost" || hostname === ROOT_DOMAIN) {
    return null;
  }

  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = hostname.replace(`.${ROOT_DOMAIN}`, "");
    return subdomain || null;
  }

  const parts = hostname.split(".");
  if (parts.length >= 3) {
    return parts[0];
  }

  return null;
}
