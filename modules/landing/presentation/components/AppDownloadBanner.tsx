import React from 'react';
import Image from 'next/image';
import { Reveal } from '@/shared/components/Reveal';

interface AppDownloadBannerProps {
  title?: string;
  subtitle?: string;
  playStoreLink?: string;
  appStoreLink?: string;
}

export const AppDownloadBanner = ({
  title = "حمّل تطبيق سابق الآن",
  subtitle = "أدر مدرستك من أي مكان، تابع الحضور، راقب الأداء، وتواصل مع أولياء الأمور بضغطة واحدة. حمّل التطبيق الآن وابدأ تجربتك المجانية اليوم.",
  playStoreLink = "#",
  appStoreLink = "#"
}: AppDownloadBannerProps) => {
  return (
    <section className="bg-white py-12 w-full flex flex-col items-center justify-center px-6 lg:px-24 overflow-hidden">
      <div className="container-default max-w-7xl mx-auto w-full">

        <div className="relative bg-brand rounded-[2.5rem] w-full overflow-hidden flex flex-col items-center text-center px-6 py-16 lg:py-20 shadow-2xl shadow-brand/20">

          <div className="relative z-10 max-w-2xl mx-auto">
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
                {subtitle}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                <a href={playStoreLink} className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto font-bold text-sm">
                  <div className="text-left flex flex-col">
                    <span className="text-[10px] text-slate-500 font-normal">تنزيل من</span>
                    <span>Google Play</span>
                  </div>
                  <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M5 21V3l15 9-15 9z" /></svg>
                </a>

                <a href={appStoreLink} className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto font-bold text-sm">
                  <div className="text-left flex flex-col">
                    <span className="text-[10px] text-slate-500 font-normal">تنزيل من</span>
                    <span>App Store</span>
                  </div>
                  <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.95.92 3.78 2.29-2.95 1.76-2.45 5.56.55 6.84-.71 1.77-1.63 3.32-2.93 4.88zm-2.95-15.5c.34-1.57-.49-3.13-1.85-3.88-1.07 1.88.22 3.65 1.85 3.88z" /></svg>
                </a>

              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.4} className="hidden lg:block absolute top-[78px] right-[32px] w-[236px] h-[488px] z-10">
            <div className="w-full h-full rounded-3xl shadow-2xl overflow-hidden relative">
              <Image
                src="/images/sabeq-phone-light.png"
                alt="واجهة التطبيق 1"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.4} className="hidden lg:block absolute top-[78px] left-[32px] w-[236px] h-[488px] z-10">
            <div className="w-full h-full rounded-3xl shadow-2xl overflow-hidden relative">
              <Image
                src="/images/sabeq-phone-blue.png" 
                alt="واجهة التطبيق 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};