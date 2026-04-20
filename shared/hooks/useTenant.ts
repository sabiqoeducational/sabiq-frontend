"use client";

import { useTenantContext } from "@/shared/context/TenantContext";

export function useTenant() {
  return useTenantContext().tenant;
}
