const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? "app.com";
const PLATFORM_HOSTS = new Set([
  ROOT_DOMAIN,
  `www.${ROOT_DOMAIN}`,
  "localhost",
  "127.0.0.1",
  "lvh.me",
  "https://sabiq-frontend-owlq.vercel.app/"
]);

export function extractTenantFromHost(host: string): string | null {
  const hostname = host.split(":")[0].toLowerCase();

  if (PLATFORM_HOSTS.has(hostname)) {
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

export function isPlatformHost(host: string): boolean {
  const hostname = host.split(":")[0].toLowerCase();
  return PLATFORM_HOSTS.has(hostname);
}
