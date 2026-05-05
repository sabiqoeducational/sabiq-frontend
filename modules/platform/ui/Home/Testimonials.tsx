"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Reveal } from '@/shared/components/Reveal';

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
  const [activeId, setActiveId] = useState(testimonials[0]?.id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'next' | 'prev') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const targetScroll = direction === 'next' ? -scrollAmount : scrollAmount;

      scrollContainerRef.current.scrollBy({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-24 w-full flex flex-col items-center justify-center overflow-hidden" dir="rtl">
      <div className="container-default flex justify-center max-w-7xl mx-auto w-full px-6 lg:px-24 relative">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-center w-full">
            <Reveal direction="up" delay={0.1}>
              <div className="inline-flex items-center justify-center gap-2 bg-blue-50/50 border border-blue-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                <span className="text-sm font-medium text-slate-700">{badgeText}</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight mb-4">
                {title}
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal direction="right" delay={0.4} className="w-full relative px-6 lg:pr-24">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory 
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((t) => {
            const isActive = activeId === t.id;

            return (
              <div
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={`relative rounded-xl overflow-hidden shrink-0 snap-center cursor-pointer transition-all duration-500 ease-out group h-[358px] opacity-100
    ${isActive
                    ? 'w-[85vw] md:w-[481px] shadow-2xl' 
                    : 'w-[60vw] md:w-[229px] shadow-md'  
                  }
  `}
              >
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  fill
                  className="object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-105"
                />

                <div className={`absolute inset-0 transition-opacity duration-500 ${isActive
                    ? 'bg-gradient-to-t from-black/95 via-black/40 to-transparent'
                    : 'bg-gradient-to-t from-black/80 to-transparent'
                  }`} />

                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out w-full
                      ${isActive ? 'opacity-100 translate-y-0 mb-6' : 'opacity-0 translate-y-8 h-0 mb-0 pointer-events-none'}
                    `}
                  >
                    
                    <p className="text-white text-xl lg:text-2xl font-bold leading-relaxed line-clamp-4 text-right">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-end justify-between w-full">
                    <div className="flex flex-col text-right transition-transform duration-500">
                      <h4 className={`font-bold text-white transition-all ${isActive ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'}`}>
                        {t.name}
                      </h4>
                      <span className="text-white/80 text-sm lg:text-base font-medium mt-1 line-clamp-1">
                        {t.role}
                      </span>
                    </div>

                    <div
                      className={`transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
                        }`}
                    >
                      <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shrink-0">
                        <Play className="w-5 h-5 lg:w-6 lg:h-6 ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};