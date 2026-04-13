"use client";

import { useTenantContext } from "@/shared/context/TenantContext";

export function useCurrentTenant() {
  const { tenant } = useTenantContext();
  return tenant;
}
