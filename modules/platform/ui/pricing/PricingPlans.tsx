import Image from "next/image";

const PricingPlans = () => {
  const dataPlans = [
    {
      planTitle: "الفئة التجريبية",
      planDescription:
        "ابدأ بدون أي التزام و استكشف أساسيات النظام قبل اتخاذ القرار.",
      planPrice: "مجاني",
      planPriceDescription:
        'استخدم نظام "سابق" لمدة 28 يوم بنسخة تجريبية محدودة',
      planFeatures: [
        {
          featureTitle: "تسجيل الطلاب",
          isAvailable: true,
        },
        {
          featureTitle: "عرض الحضور والغياب",
          isAvailable: true,
        },
        {
          featureTitle: "الجدول الدراسي اليدوي",
          isAvailable: true,
        },
        {
          featureTitle: "الجدول الديناميكي",
          isAvailable: false,
        },
        {
          featureTitle: "التحضير للمعلمين",
          isAvailable: false,
        },
        {
          featureTitle: "الخطط الاسبوعيه",
          isAvailable: false,
        },
        {
          featureTitle: "متابعة مستوى الطالب (سلوكي / تحصيلي / تفاعلي)",
          isAvailable: false,
        },
        {
          featureTitle: "اداره الموارد البشريه",
          isAvailable: false,
        },
        {
          featureTitle: "برامج الانشطه الطلابيه",
          isAvailable: false,
        },
      ],
      buttonText: "ابدأ مجانا",
    },
    {
      planTitle: "الفئة الأساسية",
      planDescription:
        "كل ما تحتاجه لإدارة مدرستك اليومية بكفاءة و بدون تعقيد.",
      planPrice: "399 ريال/ سنوياً",
      planPriceDescription: "شامل ضريبة القيمة المضافة",
      planFeatures: [
        {
          featureTitle: "تسجيل الطلاب",
          isAvailable: true,
        },
        {
          featureTitle: "عرض الحضور والغياب",
          isAvailable: true,
        },
        {
          featureTitle: "الجدول الدراسي اليدوي",
          isAvailable: true,
        },
        {
          featureTitle: "الجدول الديناميكي",
          isAvailable: true,
        },
        {
          featureTitle: "التحضير للمعلمين",
          isAvailable: true,
        },
        {
          featureTitle: "الخطط الاسبوعيه",
          isAvailable: true,
        },
        {
          featureTitle: "متابعة مستوى الطالب (سلوكي / تحصيلي / تفاعلي)",
          isAvailable: true,
        },
        {
          featureTitle: "اداره الموارد البشريه",
          isAvailable: false,
        },
        {
          featureTitle: "برامج الانشطه الطلابيه",
          isAvailable: false,
        },
      ],
      buttonText: "اشترك الآن",
    },
    {
      planTitle: "الفئة الشاملة",
      planDescription:
        "حل متكامل للمدارس التي تبحث عن تحكم أكبر و تقارير متقدمة و إدارة شاملة.",
      planPrice: "699 ريال/ سنوياً ",
      planPriceDescription: "شامل ضريبة القيمة المضافة",
      planFeatures: [
        {
          featureTitle: "تسجيل الطلاب",
          isAvailable: true,
        },
        {
          featureTitle: "عرض الحضور والغياب",
          isAvailable: true,
        },
        {
          featureTitle: "الجدول الدراسي اليدوي",
          isAvailable: true,
        },
        {
          featureTitle: "الجدول الديناميكي",
          isAvailable: true,
        },
        {
          featureTitle: "التحضير للمعلمين",
          isAvailable: true,
        },
        {
          featureTitle: "الخطط الاسبوعيه",
          isAvailable: true,
        },
        {
          featureTitle: "متابعة مستوى الطالب (سلوكي / تحصيلي / تفاعلي)",
          isAvailable: true,
        },
        {
          featureTitle: "اداره الموارد البشريه",
          isAvailable: true,
        },
        {
          featureTitle: "برامج الانشطه الطلابيه",
          isAvailable: true,
        },
      ],
      buttonText: "تواصل مع فريق المبيعات",
    },
  ];
  return (
    <div className="flex flex-col gap-6 w-full lg:grid lg:grid-cols-3">
      {dataPlans.map((plan, index) => (
        <div
          key={index}
          className={`border border-[#d8dcf0] hover:border-(--tenant-primary)  rounded-xl p-6 flex flex-col gap-4 ${index === 1 ? "bg-(--tenant-primary) text-white border-(--tenant-primary)" : ""}`}
        >
          <div className={`flex flex-col gap-4 `}>
            <div className="flex gap-3 ">
              <div className="flex flex-col gap-3">
                <h5 className="text-2xl font-semibold ">{plan.planTitle}</h5>
                <p
                  className={`text-base text-(--text-secondary) ${index === 1 ? "text-white" : ""}`}
                >
                  {plan.planDescription}
                </p>
              </div>
              {index === 1 && (
                <div className="bg-white rounded-4xl flex items-center justify-center gap-2 h-7 p-2 ">
                  <span className=" text-black text-sm font-semibold text-nowrap">
                    الاكثر طلبا
                  </span>
                  <span>⭐</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <h5
                className={`text-2xl font-semibold text-(--tenant-primary) ${index === 1 ? "text-white" : ""}`}
              >
                {plan.planPrice}
              </h5>
              <p
                className={`text-base text-(--text-secondary) ${index === 1 ? "text-white" : ""}`}
              >
                {plan.planPriceDescription}
              </p>
            </div>
          </div>
          <hr className="border-[#d6dcf0]" />
          {plan.planFeatures.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start gap-2">
              {feature.isAvailable ? (
                <div
                  style={{
                    maskImage: `url(/platform/pricing/check.svg)`,
                    WebkitMaskImage: `url(/platform/pricing/check.svg)`,
                    maskRepeat: "no-repeat",
                    maskSize: "contain",
                  }}
                  className={`w-6 h-6 ${index === 1 ? "bg-white" : "bg-gray-700"}`}
                ></div>
              ) : (
                <Image src="/platform/pricing/lock.svg" alt="cross" width={24} height={24} />
              )}
              <span className="text-base font-normal">
                {feature.featureTitle}
              </span>
            </div>
          ))}
          <hr className="border-[#d6dcf0]" />
          <button
          className={`w-full py-3 rounded-lg font-medium transition-all cursor-pointer ${index === 1 ? "bg-white text-(--tenant-primary)" : "bg-(--tenant-primary) text-white"}`}
          >{plan.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
