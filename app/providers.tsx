"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { TenantProvider } from "@/shared/context/TenantContext";
import { createQueryClient } from "@/shared/lib/queryClient";

export default function AppProviders({
  tenant,
  children,
}: {
  tenant: string;
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <TenantProvider tenant={tenant}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TenantProvider>
  );
}
