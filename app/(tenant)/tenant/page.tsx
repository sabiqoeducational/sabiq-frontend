import { headers } from "next/headers";
import { TenantLanding } from "@/modules/tenant/components/TenantLanding";
import { getTenantSiteDataCached } from "@/modules/tenant/hooks/useTenantSiteData";

export default async function TenantWebsitePage() {
  const headerStore = await headers();
  const tenant = headerStore.get("x-tenant") ?? "public";
  const data = await getTenantSiteDataCached(tenant);

  return (
    <main className="mx-auto w-full max-w-7xl">
      <TenantLanding data={data} />
    </main>
  );
}
