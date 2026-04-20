import { cache } from "react";
import { getLandingContent } from "@/modules/landing/services/landingService";

export const getLandingContentCached = cache(async (tenant: string) => {
  return getLandingContent(tenant);
});
