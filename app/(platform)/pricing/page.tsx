import FeatureHeroSection from "@/modules/platform/ui/Feature/FeatureHeroSection";

const page = () => {
  return (
    <section className="flex flex-col items-center m-4 lg:mx-24 ">
      <FeatureHeroSection
        head="الأسعار"
        title="خطط مرنة تناسب "
        subtitle=" احتياجات مدرستك "
        description="اختر الخطة التي تناسب حجم مدرستك وابدأ في إدارة عملياتك التعليمية بسهولة، مع إمكانية الترقية أو التعديل في أي وقت."
        isNumbers={false}
      />
    </section>
  );
};

export default page;
