export type StatItem = {
  value: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  content: string;
};

export type LandingContent = {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageUrl: string;
  };
  logos: string[];
  stats: StatItem[];
  features: FeatureItem[];
  testimonials: TestimonialItem[];
};

export async function getLandingContent(tenant: string): Promise<LandingContent> {
  const tenantName = tenant === "public" ? "سبيق" : tenant;

  return {
    hero: {
      title: `منصة ${tenantName} لإدارة التعليم باحترافية`,
      subtitle:
        "نظام SaaS متكامل لإدارة المدارس والطلاب والاختبارات مع تجربة استخدام عربية حديثة.",
      primaryCta: "ابدأ الآن",
      secondaryCta: "طلب عرض تجريبي",
      imageUrl:
        "/images/hero-section-img.png",
    },
    logos: ["مدارس الريادة", "مدارس البيان", "أكاديمية النخبة", "مدارس الأفق"],
    stats: [
      { value: "+120", label: "مدرسة نشطة" },
      { value: "+85K", label: "طالب على المنصة" },
      { value: "99.9%", label: "نسبة التوفر" },
      { value: "+300K", label: "تقرير شهري" },
    ],
    features: [
      {
        icon: "📚",
        title: "إدارة أكاديمية متكاملة",
        description: "إدارة الجداول، المواد، الحصص، والاختبارات من لوحة واحدة.",
      },
      {
        icon: "💳",
        title: "فوترة واشتراكات",
        description: "نظام اشتراكات مرن يدعم الخطط المختلفة والمدفوعات الدورية.",
      },
      {
        icon: "📊",
        title: "تحليلات لحظية",
        description: "مؤشرات أداء فورية تساعد الإدارة على اتخاذ قرارات دقيقة.",
      },
      {
        icon: "🔐",
        title: "عزل بيانات المستأجرين",
        description: "كل مستأجر يعمل في مساحة آمنة مستقلة لحماية البيانات.",
      },
      {
        icon: "⚙️",
        title: "قابلية توسع عالية",
        description: "بنية حديثة تدعم التوسع السريع دون التأثير على الأداء.",
      },
      {
        icon: "🎨",
        title: "هوية بصرية لكل مستأجر",
        description: "تخصيص الألوان والهوية ليتوافق المنتج مع علامتك التجارية.",
      },
    ],
    testimonials: [
      {
        name: "سارة العتيبي",
        role: "مديرة مدرسة",
        content: "المنصة سهّلت متابعة الأداء ووفرت الوقت لفريق العمل بشكل ملحوظ.",
      },
      {
        name: "أحمد القرني",
        role: "مشرف أكاديمي",
        content: "أفضل نظام جرّبناه في إدارة المدارس من ناحية السرعة والتقارير.",
      },
      {
        name: "لينا الشهري",
        role: "قائدة قسم التقنية",
        content: "الربط عبر API ممتاز وسهّل تكامل الأنظمة الداخلية لدينا.",
      },
    ],
  };
}
