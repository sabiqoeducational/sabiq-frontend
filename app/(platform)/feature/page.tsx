import AppSystemSection from "@/modules/platform/ui/Feature/AppSystemSection";
import FeatureHeroSection from "@/modules/platform/ui/Feature/FeatureHeroSection";
import Footer from "@/modules/platform/layout/Footer"
import FeatureServiceSection from "@/modules/platform/ui/Feature/FeatureServiceSection";
import FeatureHowitWork from "@/modules/platform/ui/Feature/FeatureHowitWork";
import SabeqSlider from "@/modules/platform/ui/Feature/FeatureForWho";
const Page = () => {
  return (
    <>
      <FeatureHeroSection />
      <AppSystemSection/>
      <FeatureServiceSection />
      <FeatureHowitWork />
      <SabeqSlider />
      <Footer />
    </>
  );
};

export default Page;
