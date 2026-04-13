"use client";

import { useTenantContext } from "@/shared/context/TenantContext";

export function usePlatform() {
  return useTenantContext().isPlatform;
}
