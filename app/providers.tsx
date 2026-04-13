"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { TenantProvider } from "@/shared/context/TenantContext";
import { createQueryClient } from "@/shared/lib/queryClient";

export default function AppProviders({
  tenant,
  isPlatform,
  children,
}: {
  tenant: string;
  isPlatform: boolean;
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <TenantProvider tenant={tenant} isPlatform={isPlatform}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TenantProvider>
  );
}
