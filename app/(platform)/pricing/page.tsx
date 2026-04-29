import FeatureHeroSection from "@/modules/platform/ui/Feature/FeatureHeroSection";
import PricingComponent from "@/modules/platform/ui/pricing/PricingComponent";

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
      <PricingComponent />
    </section>
  );
};

export default page;
