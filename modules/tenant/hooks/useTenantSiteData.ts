import { cache } from "react";
import { getTenantSiteData } from "@/modules/tenant/services/tenantThemeService";

export const getTenantSiteDataCached = cache(async (tenant: string) => {
  return getTenantSiteData(tenant);
});
