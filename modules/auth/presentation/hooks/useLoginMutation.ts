"use client";

import { useMutation } from "@tanstack/react-query";
import { LoginUseCase } from "@/application/use-cases/auth/LoginUseCase";
import { ApiClient } from "@/infrastructure/http/apiClient";
import { AuthRepositoryImpl } from "@/infrastructure/repositories/AuthRepositoryImpl";
import { useLocale } from "@/shared/context/LocaleContext";
import { useTenant } from "@/shared/hooks/useTenant";
import { useAuthStore } from "@/modules/auth/presentation/stores/authStore";

type LoginInput = {
  email: string;
  password: string;
};

export function useLoginMutation() {
  const tenant = useTenant();
  const locale = useLocale();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  return useMutation({
    mutationFn: async (input: LoginInput) => {
      const apiClient = new ApiClient({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000",
        getTenant: () => tenant,
        getLocale: () => locale,
      });

      const authRepository = new AuthRepositoryImpl(apiClient);
      const loginUseCase = new LoginUseCase(authRepository);

      return loginUseCase.execute(input);
    },
    onSuccess: (result) => {
      setAccessToken(result.accessToken);
    },
  });
}
