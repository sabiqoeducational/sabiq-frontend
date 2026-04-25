
import { AboutStats } from '@/modules/landing/presentation/components/AboutStats';
import { AppDownloadBanner } from '@/modules/landing/presentation/components/AppDownloadBanner';
import { FeatureShowcase } from '@/modules/landing/presentation/components/FeatureShowcase';
import { HeroSection } from '@/modules/landing/presentation/components/HeroSection';
import { HowItWorks } from '@/modules/landing/presentation/components/HowItWorks';
import { PlatformModules } from '@/modules/landing/presentation/components/PlatformModules';
import { SchoolProof } from '@/modules/landing/presentation/components/SchoolProof';
import { Testimonials } from '@/modules/landing/presentation/components/Testimonials';
import { getLandingContent } from '@/modules/landing/services/landingService';
import Image from 'next/image';


// IMPORT DATA FROM LANDINGDATA - CONSTANTS
import {
  aboutDescription,
  modulesData,
  modulesTitle,
  platformStats,
  showcaseFeatures,
  showcaseTitle,
  stepsData,
  testimonialsData,
  testimonialsTitle
} from '@/modules/landing/constants/landingData';

export default async function PlatformHomePage() {

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
      <AboutStats
        description={aboutDescription}
        stats={platformStats}
      />

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

      <HowItWorks steps={stepsData} />

      <AppDownloadBanner />

      <Testimonials
            title={testimonialsTitle}
            subtitle="آراء مديري المدارس والمعلمين وأولياء الأمور حول تجربتهم مع سابق وكيف ساعدهم في تطوير العملية التعليمية."
            testimonials={testimonialsData}
         />

      

    </main>
  );
}