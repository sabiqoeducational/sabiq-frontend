"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';

export interface TestimonialItem {
  id: string | number;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  videoUrl?: string;
}

interface TestimonialsProps {
  badgeText?: string;
  title: React.ReactNode;
  subtitle: string;
  testimonials: TestimonialItem[];
}

export const Testimonials = ({
  badgeText = "آراء العملاء",
  title,
  subtitle,
  testimonials
}: TestimonialsProps) => {
  // 1. State لتتبع الكارت المفتوح
  const [activeId, setActiveId] = useState(testimonials[0]?.id);
  // 2. Ref للتحكم في شريط التمرير
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // دالة التقليب بالأسهم
  const scroll = (direction: 'next' | 'prev') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; 
      // في اللغة العربية (RTL)، التقليب للأمام يعني السحب لليسار (قيمة سالبة)
      const targetScroll = direction === 'next' ? -scrollAmount : scrollAmount;
      
      scrollContainerRef.current.scrollBy({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-24 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="container-default max-w-7xl mx-auto w-full px-6 lg:px-24 relative">
        
        {/* الترويسة وأزرار التحكم */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center justify-center gap-2 bg-blue-50/50 border border-blue-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              <span className="text-sm font-medium text-slate-700">{badgeText}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* أزرار التقليب للكمبيوتر */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => scroll('prev')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white hover:border-brand transition-colors focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('next')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white hover:border-brand transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* منطقة التمرير (Slider) */}
      <div className="w-full relative px-6 lg:px-24">
        <div 
          ref={scrollContainerRef}
          // الحاوية بتعمل Scroll وبتخفي الـ Scrollbar
          className="flex gap-4 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory 
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((t) => {
            const isActive = activeId === t.id;

            return (
              <div
                key={t.id}
                onClick={() => setActiveId(t.id)}
                // السحر هنا: التحكم في العرض (Width) بناءً على حالة الكارت (نشط أم لا)
                className={`relative rounded-3xl overflow-hidden shrink-0 snap-center cursor-pointer transition-all duration-500 ease-out group h-[450px]
                  ${isActive 
                    ? 'w-[85vw] md:w-[600px] shadow-2xl opacity-100' // الكارت النشط عريض
                    : 'w-[60vw] md:w-[280px] shadow-md opacity-70 hover:opacity-100' // الكارت غير النشط رفيع
                  }
                `}
              >
                {/* صورة الخلفية */}
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* التدرج اللوني */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive 
                    ? 'bg-gradient-to-t from-black/95 via-black/50 to-transparent' 
                    : 'bg-gradient-to-t from-black/80 to-transparent'
                }`} />

                {/* محتوى الكارت */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  
                  {/* الاقتباس وزر التشغيل (يظهر فقط في الكارت النشط) */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-6
                      ${isActive ? 'opacity-100 translate-y-0 mb-6' : 'opacity-0 translate-y-8 h-0 mb-0 pointer-events-none'}
                    `}
                  >
                    <p className="text-white text-lg lg:text-xl font-medium leading-relaxed line-clamp-4">
                      "{t.quote}"
                    </p>
                    
                    <button className="w-12 h-12 rounded-full bg-white text-brand flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-5 h-5 ml-1" fill="currentColor" />
                    </button>
                  </div>

                  {/* اسم المستخدم والمسمى الوظيفي (ظاهرين دائماً) */}
                  <div className="flex flex-col mt-auto transition-transform duration-500">
                    <h4 className={`font-bold text-white transition-all ${isActive ? 'text-xl' : 'text-base lg:text-lg'}`}>
                      {t.name}
                    </h4>
                    <span className="text-white/80 text-sm font-medium mt-1 line-clamp-1">
                      {t.role}
                    </span>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};