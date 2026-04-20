import React from 'react';
import Image from 'next/image';

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
    <section className="bg-white py-12 w-full flex flex-col items-center justify-center px-6 lg:px-24">
      <div className="container-default max-w-7xl mx-auto w-full">
        
        {/* البانر الأزرق الأساسي */}
        <div className="relative bg-brand rounded-[2.5rem] w-full overflow-hidden flex flex-col items-center text-center px-6 py-16 lg:py-20 shadow-2xl shadow-brand/20">
          
          {/* محتوى النص والأزرار */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
              {subtitle}
            </p>

            {/* أزرار التحميل */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              {/* زر Google Play */}
              <a href={playStoreLink} className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto font-bold text-sm">
                <div className="text-left flex flex-col">
                  <span className="text-[10px] text-slate-500 font-normal">تنزيل من</span>
                  <span>Google Play</span>
                </div>
                {/* أيقونة مؤقتة لجوجل بلاي (يفضل استبدالها بصورة الأيقونة الأصلية) */}
                <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M5 21V3l15 9-15 9z"/></svg>
              </a>

              {/* زر App Store */}
              <a href={appStoreLink} className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto font-bold text-sm">
                <div className="text-left flex flex-col">
                  <span className="text-[10px] text-slate-500 font-normal">تنزيل من</span>
                  <span>App Store</span>
                </div>
                {/* أيقونة آبل */}
                <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.95.92 3.78 2.29-2.95 1.76-2.45 5.56.55 6.84-.71 1.77-1.63 3.32-2.93 4.88zm-2.95-15.5c.34-1.57-.49-3.13-1.85-3.88-1.07 1.88.22 3.65 1.85 3.88z"/></svg>
              </a>

            </div>
          </div>

          {/* صور الهواتف (تظهر فقط في الشاشات الكبيرة) */}
          {/* ملحوظة: هتحتاج تحط صور الموبايلات في فولدر public/images */}
          <div className="hidden lg:block absolute -bottom-16 -right-12 w-72 h-[500px]">
             {/* صورة الموبايل اليمين (استبدل المسار بصورتك الحقيقية) */}
             <div className="w-full h-full bg-slate-200/20 rounded-3xl border-4 border-slate-800 shadow-xl backdrop-blur-sm flex items-center justify-center text-white/50">صورة موبايل 1</div>
          </div>
          
          <div className="hidden lg:block absolute -bottom-16 -left-12 w-72 h-[500px]">
             {/* صورة الموبايل الشمال (استبدل المسار بصورتك الحقيقية) */}
             <div className="w-full h-full bg-slate-200/20 rounded-3xl border-4 border-slate-800 shadow-xl backdrop-blur-sm flex items-center justify-center text-white/50">صورة موبايل 2</div>
          </div>

        </div>

      </div>
    </section>
  );
};