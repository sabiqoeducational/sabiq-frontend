const ar = {
  meta: {
    title: "منصة سبيق",
    description: "منصة SaaS تعليمية متعددة المستأجرين",
  },
  platform: {
    landing: {
      title: "منصة SaaS تعليمية حديثة لإدارة المدارس متعددة الفروع",
      subtitle:
        "أنشئ موقعًا لكل مستأجر، وادِر التسجيل والفوترة والتحليلات من بنية واحدة قابلة للتوسع.",
      ctaPrimary: "ابدأ مجانًا",
      ctaSecondary: "تواصل معنا",
      stats: [
        { value: "+120", label: "مدرسة على المنصة" },
        { value: "+85K", label: "طالب نشط" },
        { value: "99.9%", label: "استمرارية الخدمة" },
      ],
    },
    about: {
      title: "من نحن",
      body:
        "نحن نبني منصة SaaS تعليمية تعتمد على بنية متعددة المستأجرين لتقديم تجربة مخصصة وآمنة لكل مدرسة.",
    },
    contact: {
      title: "تواصل معنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      submit: "إرسال",
    },
    register: {
      title: "إنشاء حساب جديد",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      organization: "اسم المؤسسة",
      password: "كلمة المرور",
      submit: "إنشاء الحساب",
    },
  },
  common: {
    language: "اللغة",
  },
} as const;

export type Messages = typeof ar;

export { ar };
