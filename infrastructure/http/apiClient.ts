import { ApiError, NetworkError } from "@/core/errors/AppError";

export type ApiClientOptions = {
  baseUrl: string;
  getTenant: () => string;
  getLocale?: () => string;
  getToken?: () => string | null;
};

export class ApiClient {
  constructor(private readonly options: ApiClientOptions) {}

  private async request<TResponse>(
    method: string,
    path: string,
    body?: unknown,
    params?: Record<string, string>,
  ): Promise<TResponse> {
    const { baseUrl, getTenant, getLocale, getToken } = this.options;

    const url = new URL(`${baseUrl}${path}`);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }

    let response: Response;
    try {
      response = await fetch(url.toString(), {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-tenant": getTenant(),
          ...(getLocale?.() ? { "x-locale": getLocale()! } : {}),
          ...(getToken?.() ? { Authorization: `Bearer ${getToken()!}` } : {}),
        },
        ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
      });
    } catch (cause) {
      throw new NetworkError(
        cause instanceof Error ? cause.message : "Network request failed",
        cause,
      );
    }

    if (!response.ok) {
      let code = "UNKNOWN_ERROR";
      let message = `HTTP ${response.status}`;

      try {
        const json = await response.json();
        code = json.code ?? code;
        message = json.message ?? message;
      } catch {
        message = await response.text().catch(() => message);
      }

      throw new ApiError(response.status, code, message);
    }

    return (await response.json()) as TResponse;
  }

  async post<TResponse>(path: string, payload: unknown): Promise<TResponse> {
    return this.request<TResponse>("POST", path, payload);
  }

  async get<TResponse>(
    path: string,
    params?: Record<string, string>,
  ): Promise<TResponse> {
    return this.request<TResponse>("GET", path, undefined, params);
  }

  async put<TResponse>(path: string, payload: unknown): Promise<TResponse> {
    return this.request<TResponse>("PUT", path, payload);
  }

  async patch<TResponse>(path: string, payload: unknown): Promise<TResponse> {
    return this.request<TResponse>("PATCH", path, payload);
  }

  async delete<TResponse>(path: string): Promise<TResponse> {
    return this.request<TResponse>("DELETE", path);
  }
}
