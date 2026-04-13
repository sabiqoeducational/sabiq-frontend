export type TenantSiteData = {
  name: string;
  logo: string;
  primaryColor: string;
  heading: string;
  subtitle: string;
};

const tenantDataMap: Record<string, TenantSiteData> = {
  tenant1: {
    name: "مدارس الريادة",
    logo: "🎓",
    primaryColor: "#7c3aed",
    heading: "مرحبًا بك في موقع مدارس الريادة",
    subtitle: "تجربة تعليمية رقمية متكاملة للطلاب والمعلمين وأولياء الأمور.",
  },
  tenant2: {
    name: "أكاديمية الأفق",
    logo: "🚀",
    primaryColor: "#059669",
    heading: "بوابة أكاديمية الأفق",
    subtitle: "كل أدوات الإدارة التعليمية في منصة واحدة آمنة وسريعة.",
  },
  public: {
    name: "المنصة العامة",
    logo: "🏫",
    primaryColor: "#155dfc",
    heading: "موقع المستأجر",
    subtitle: "هذه نسخة افتراضية لواجهة المستأجر.",
  },
};

export async function getTenantSiteData(tenant: string): Promise<TenantSiteData> {
  return tenantDataMap[tenant] ?? tenantDataMap.public;
}
