"use client";

import React from 'react';
import Image from 'next/image';
import { Reveal } from '@/shared/components/Reveal';

const schoolsLogos = [
  { id: 1, src: '/images/school-1.png', name: 'مدرسة القمم الدولية', bio: 'أكثر من 1200 طالب' },
  { id: 2, src: '/images/school-2.png', name: 'مدارس المستقبل', bio: 'إدارة متكاملة' },
  { id: 3, src: '/images/school-3.png', name: 'أكاديمية المعرفة', bio: '3 فروع رئيسية' },
  { id: 4, src: '/images/school-4.png', name: 'مجمع التميز التعليمي', bio: 'نظام دولي' },
];

export const SchoolProof = () => {
  const count = schoolsLogos.length;
  const CARD_W = 280;
  const GAP = 24;    
  const SINGLE_SET_WIDTH = count * (CARD_W + GAP);
  
  const infiniteLogos = [...schoolsLogos, ...schoolsLogos, ...schoolsLogos];

  return (
    <section className="bg-white py-16 w-full overflow-hidden" dir="rtl">
      
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(${SINGLE_SET_WIDTH}px); }
        }
        .ticker-track {
          display: flex;
          gap: ${GAP}px;
          width: max-content;
          /* نقدر نتحكم في السرعة من هنا (مضروبة في عدد الكروت) */
          animation: ticker-scroll ${count * 3}s linear infinite; 
        }
        .ticker-track:hover {
          /* الحركة بتقف لما اليوزر يحط الماوس عليها عشان يقرا */
          animation-play-state: paused; 
        }
      `}</style>

      <div className="container mx-auto px-4">
        
        {/* ============ HEADER ============ */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-6 py-1.5 text-md font-semibold text-[#0D1530] bg-[#F5F8FF] rounded-lg mb-6 border border-blue-100">
              شركاء النجاح
              <span className="w-2.5 h-2.5 bg-brand rounded-full" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight">
              مدارس تثق في <span className='text-brand'>سبيق</span>
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.3}>
            <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium mt-4">
              نفتخر بتقديم خدماتنا لنخبة من أفضل المدارس والمجمعات التعليمية في المنطقة.
            </p>
          </Reveal>
        </div>

        {/* ============ TICKER (SCROLLING CARDS) ============ */}
        <Reveal direction="up" delay={0.4}>

          <div className="relative w-full mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            
            <div className="ticker-track">
              {infiniteLogos.map((school, index) => (
                <div
                  key={`${school.id}-${index}`}
                  style={{ width: `${CARD_W}px` }}
                  className="shrink-0  hover:bg-blue-50/50 transition-colors duration-300 py-4 px-5 rounded-xl flex items-center gap-4 border border-slate-100"
                >
                  <div className="relative w-16 h-16 shrink-0 bg-white rounded-lg shadow-sm border border-slate-50 p-2 flex items-center justify-center">
                    <Image
                      src={school.src}
                      alt={school.name}
                      fill
                      className="object-contain p-1"
                      priority={index < count} 
                    />
                  </div>

                  <div className="text-right flex flex-col gap-1">
                    <h3 className="font-bold text-[#0D1530] text-base leading-tight">
                      {school.name}
                    </h3>
                    <p className="text-brand text-sm font-medium">
                      {school.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};