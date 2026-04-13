"use client";

import { createContext, useContext, useMemo } from "react";
import type { TenantSlug } from "@/shared/types/tenant";

type TenantContextValue = {
  tenant: TenantSlug;
};

const TenantContext = createContext<TenantContextValue | null>(null);

export function TenantProvider({
  tenant,
  children,
}: {
  tenant: TenantSlug;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ tenant }), [tenant]);
  return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>;
}

export function useTenantContext() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error("useTenantContext must be used within TenantProvider");
  }

  return context;
}
