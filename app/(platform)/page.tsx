
import { AboutStats } from '@/modules/platform/ui/Home/AboutStats';
import { AppDownloadBanner } from '@/modules/platform/ui/Home/AppDownloadBanner';
import { FeatureShowcase } from '@/modules/platform/ui/Home/FeatureShowcase';
import { HeroSection } from '@/modules/platform/ui/Home/HeroSection';
import { PlatformModules } from '@/modules/platform/ui/Home/PlatformModules';
import { SchoolProof } from '@/modules/platform/ui/Home/SchoolProof';
import { Testimonials } from '@/modules/platform/ui/Home/Testimonials';
import { getLandingContent } from '@/modules/landing/services/landingService';
import FeatureHowitWork from "@/modules/platform/ui/Feature/FeatureHowitWork";
import Image from 'next/image';


// IMPORT DATA FROM LANDINGDATA - CONSTANTS
import {
  modulesData,
  modulesTitle,
  showcaseFeatures,
  showcaseTitle,
  testimonialsData,
  testimonialsTitle
} from '@/modules/landing/constants/landingData';
import FeatureHowitWork from '@/modules/platform/ui/Feature/FeatureHowitWork';
import { getServerMessages } from "@/shared/i18n/server";

export default async function PlatformHomePage() {
  const { messages } = await getServerMessages();

  const landingData = await getLandingContent('public');

  return (
    <main className='relative -top-16'>
      {/* ========= HERO AND NAV BAR ========= */}
      <div className="relative flex flex-col">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-bg.png"
            alt="Sabiq Background"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative">
          <HeroSection heroData={landingData.hero} />
        </div>
      </div>

      {/* ========= HERO AND NAV BAR ========= */}
      <SchoolProof />
      <AboutStats content={messages.platform.about.stats} />

      <PlatformModules
        title={modulesTitle}
        subtitle="توفر منصة سابق مجموعة من الأدوات المتكاملة التي تساعد إدارات المدارس على تنظيم العمليات التعليمية والإدارية ومتابعة الطلاب والتواصل مع أولياء الأمور كل ذلك في نظام واحد سهل الاستخدام."
        modules={modulesData}
      />

      <FeatureShowcase
        title={showcaseTitle}
        subtitle="باستخدام وحدات سابق المتكاملة، يمكن لإدارة المدرسة تنظيم العمليات اليومية بسهولة، وتحسين متابعة الطلاب، وتعزيز التواصل مع أولياء الأمور."
        features={showcaseFeatures}
      />

      {/* <HowItWorks steps={stepsData} /> */}

      <FeatureHowitWork />

      <AppDownloadBanner />

      <Testimonials
        title={testimonialsTitle}
        subtitle="آراء مديري المدارس والمعلمين وأولياء الأمور حول تجربتهم مع سابق وكيف ساعدهم في تطوير العملية التعليمية."
        testimonials={testimonialsData}
      />

    </main>
  );
}