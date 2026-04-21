
import Image from 'next/image';
import { getLandingContent } from '@/modules/landing/services/landingService';
import { Navbar } from '@/shared/components/Navbar';
import { HeroSection } from '@/modules/landing/presentation/components/HeroSection';
import { SchoolProof } from '@/modules/landing/presentation/components/SchoolProof';
import { AboutStats } from '@/modules/landing/presentation/components/AboutStats';
import { PlatformModules } from '@/modules/landing/presentation/components/PlatformModules';
import { FeatureShowcase } from '@/modules/landing/presentation/components/FeatureShowcase';
import { HowItWorks } from '@/modules/landing/presentation/components/HowItWorks';
import { AppDownloadBanner } from '@/modules/landing/presentation/components/AppDownloadBanner';
import { Testimonials } from '@/modules/landing/presentation/components/Testimonials';

import { Reveal } from '@/shared/components/Reveal'
// IMPORT DATA FROM LANDINGDATA - CONSTANTS
import {
   aboutDescription,
   platformStats,
   modulesData,
   modulesTitle,
   showcaseFeatures,
   showcaseTitle,
   stepsData,
   testimonialsData,
   testimonialsTitle
} from '@/modules/landing/constants/landingData';

export default async function PlatformHomePage() {

   const landingData = await getLandingContent('public');

   return (
      <main>
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
               <Reveal direction="down" >
                  <Navbar />
               </Reveal>
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

         {/* <FeatureShowcase
            title={showcaseTitle}
            subtitle="باستخدام وحدات سابق المتكاملة، يمكن لإدارة المدرسة تنظيم العمليات اليومية بسهولة، وتحسين متابعة الطلاب، وتعزيز التواصل مع أولياء الأمور."
            features={showcaseFeatures}
         /> */}

         {/* <HowItWorks steps={stepsData} /> */}

         {/* <AppDownloadBanner /> */}

         {/* <Testimonials
            title={testimonialsTitle}
            subtitle="آراء مديري المدارس والمعلمين وأولياء الأمور حول تجربتهم مع سابق وكيف ساعدهم في تطوير العملية التعليمية."
            testimonials={testimonialsData}
         /> */}
      </main>
   );
}