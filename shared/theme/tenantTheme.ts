type TenantTheme = {
  primary: string;
  secondary: string;
};

const themeByTenant: Record<string, TenantTheme> = {
  public: { primary: "#155dfc", secondary: "#0f172a" },
  default: { primary: "#155dfc", secondary: "#0f172a" },
  tenant1: { primary: "#7c3aed", secondary: "#1f2937" },
  tenant2: { primary: "#059669", secondary: "#0f172a" },
};

export function getTenantTheme(tenant: string): TenantTheme {
  return themeByTenant[tenant] ?? themeByTenant.default;
}
