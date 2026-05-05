import Image from 'next/image';
import { Reveal } from '@/shared/components/Reveal'

interface HeroSectionProps {
  heroData: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageUrl: string;
  };
}

export const HeroSection = ({ heroData }: HeroSectionProps) => {
  return (
    <section className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 bg-transparent mt-[45px] lg:gap-0">


      {/* ========== LEFT PART ========== */}
      <div className="flex flex-col items-center lg:items-start gap-8 mb-24 lg:mb-0">
        <Reveal direction="right" delay={0.1}>
          <h3 className='font-bold text-brand py-2 px-4 rounded-3xl border border-white bg-white/50'> منصة إدارة المدارس #1 في المنطقة </h3>
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            {heroData.title.split(' ').map((word, i) => (
              <span key={i} className={word.includes('سابق') ? 'text-brand' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </Reveal>


        <Reveal direction="right" delay={0.3}>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            {heroData.subtitle}
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.4}>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
            <button className="bg-brand text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              {heroData.primaryCta}
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-white transition-colors bg-white/50 backdrop-blur-sm">
              {heroData.secondaryCta}
            </button>
          </div>
          <h3 className='font-bold'>تجربة مجانية 14 يوم — بدون بطاقة ائتمان — إلغاء في أي وقت</h3>
        </Reveal>

        <Reveal direction="right" delay={0.5}>
          <div className="inline-flex w-fit items-center gap-3 bg-white/70 backdrop-blur-md px-5 py-2.5  rounded-full border border-white/60 shadow-sm">
            <span className="text-sm font-bold text-slate-800">
              98% <span className="font-medium text-slate-600">نسبة رضا المديرين</span>
            </span>

            <div className="flex -space-x-2 space-x-reverse">
              <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <Image
                  src="/images/user-1.png"
                  alt="مدير مدرسة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <Image
                  src="/images/user-1.png"
                  alt="مشرفة أكاديمية"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <Image
                  src="/images/user-1.png"
                  alt="مدير تنفيذي"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <Image
                  src="/images/user-1.png"
                  alt="قائدة مدرسة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 z-10">
                +99
              </div>
            </div>

          </div>
        </Reveal>
      </div>


      {/* ========== LEFT PART ========== */}
      <div className="relative w-full max-w-[650px] aspect-[626/646] mx-auto lg:mr-auto lg:ml-0 -mt-[95px]">
        <Reveal direction="up" delay={0.4} className="absolute inset-0 z-0">
          <Image
            src={heroData.imageUrl}
            alt="صورة مدير مدرسة"
            fill
            className="object-contain object-bottom"
            priority
          />
        </Reveal>

        <Reveal
          direction="left"
          delay={0.6}
          className="absolute top-[35%] left-0 lg:-left-8 z-10 w-48 sm:w-56"
        >
          <div
            className="absolute top-[35%] left-0 lg:-left-8 z-10 w-48 sm:w-56 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hidden lg:block"
            dir="rtl"
          >
            <div className="h-1.5 w-full bg-[#1A64F0]"></div>

            <div className="p-4 sm:p-5 flex flex-col gap-1 sm:gap-2">
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium">عدد الطلاب</h3>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">1,240</div>

              <div className="flex items-center justify-between mt-1 sm:mt-2">
                <span className="text-gray-500 text-[10px] sm:text-xs">طالب مسجل</span>
                <span className="bg-blue-50 text-[#1A64F0] text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">
                  +12 هذا الفصل
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          direction="right"
          delay={0.8}
          className="absolute bottom-[20%] right-0 lg:-right-4 z-10 w-48 sm:w-56"
        >
          <div
            className="absolute bottom-[20%] right-0 lg:-right-4 z-10 w-48 sm:w-56 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hidden lg:block"
            dir="rtl"
          >
            <div className="h-1.5 w-full bg-[#F59E0B]"></div>

            <div className="p-4 sm:p-5 flex flex-col gap-1 sm:gap-2">
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium">نسبة الغياب</h3>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">13%</div>

              <div className="flex items-center justify-between mt-1 sm:mt-2">
                <span className="text-gray-500 text-[10px] sm:text-xs">هذا الأسبوع</span>
                <span className="bg-orange-50 text-[#F59E0B] text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  2% تحسن
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 sm:mt-3">
                <div className="h-full bg-[#F59E0B] rounded-full w-[13%]"></div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

    </section>
  );
};