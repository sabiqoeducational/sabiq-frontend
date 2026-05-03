import AppSystemSection from "@/modules/platform/ui/Feature/AppSystemSection";
import SabeqSlider from "@/modules/platform/ui/Feature/FeatureForWho";
import FeatureHeroSection from "@/modules/platform/ui/Feature/FeatureHeroSection";
import FeatureHowitWork from "@/modules/platform/ui/Feature/FeatureHowitWork";
import FeatureServiceSection from "@/modules/platform/ui/Feature/FeatureServiceSection";
const Page = () => {
  return (
    <>
      <FeatureHeroSection
        head="تعرف علي النظام"
        title="نظام رقمي متكامل لإدارة المدارس"
        subtitle="بكفاءة واحتراف"
        description=" منصة رقمية متكاملة تجمع إدارة الطلاب، الجداول، الحضور، التقارير، و
          التواصل مع أولياء الأمور كل ذلك في نظام واحد سهل و آمن ومتوافق مع
          متطلبات وزارة التعليم."
      />
      <AppSystemSection />
      <FeatureServiceSection />
      <FeatureHowitWork />
      <SabeqSlider />
    </>
  );
};

export default Page;
