import { ApiClient, ApiClientOptions } from "@/infrastructure/http/apiClient";
import { useAuthStore } from "@/modules/auth/presentation/stores/authStore";

export function createApiClient(
  options: Omit<ApiClientOptions, "getToken">,
): ApiClient {
  return new ApiClient({
    ...options,
    getToken: () => useAuthStore.getState().accessToken,
  });
}
