export type ApiClientOptions = {
  baseUrl: string;
  getTenant: () => string;
  getToken?: () => string | null;
};

export class ApiClient {
  constructor(private readonly options: ApiClientOptions) {}

  async post<TResponse>(path: string, payload: unknown): Promise<TResponse> {
    const tenant = this.options.getTenant();
    const token = this.options.getToken?.();

    const response = await fetch(`${this.options.baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tenant": tenant,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`API_ERROR(${response.status}): ${message}`);
    }

    return (await response.json()) as TResponse;
  }
}
