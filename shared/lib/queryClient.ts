import { QueryClient, MutationCache } from "@tanstack/react-query";
import { isApiError } from "@/core/errors/AppError";

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        retry: (failureCount, error) => {
          if (isApiError(error) && error.status < 500) return false;
          return failureCount < 2;
        },
      },
    },
    mutationCache: new MutationCache({
      onError: (error) => {
        if (!(error instanceof Error)) {
          console.error("[Unexpected mutation error]", error);
        }
      },
    }),
  });
}
