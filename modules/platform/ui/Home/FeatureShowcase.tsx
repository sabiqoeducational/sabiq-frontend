"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/shared/components/Reveal';

export interface ShowcaseItem {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
}

interface FeatureShowcaseProps {
  badgeText?: string;
  title: React.ReactNode;
  subtitle: string;
  features: ShowcaseItem[];
}

export const FeatureShowcase = ({
  badgeText = "فوائد الوحدات",
  title,
  subtitle,
  features,
}: FeatureShowcaseProps) => {

  const [activeFeatureId, setActiveFeatureId] = useState(features[0]?.id);

  const activeIndex = features.findIndex((f) => f.id === activeFeatureId);
  const activeFeature = features[activeIndex] || features[0];

  return (
    <section className="bg-white w-full flex flex-col items-center justify-center px-6 lg:px-25 overflow-hidden pb-22.5" dir="rtl">
      <div className="flex flex-col items-center max-w-7xl mx-auto w-full gap-10">

        {/* ============ HEADER ============ */}
        <div className="text-center mb-16 flex flex-col items-center max-w-3xl mx-auto gap-6">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center justify-center gap-2 bg-blue-50/50 border border-blue-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              <span className="text-sm font-medium text-slate-700">{badgeText}</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight ">
              {title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-lg text-slate-500 leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* =========== GRID ========= */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 lg:h-172.5 w-full items-center">

          {/* ======== LEFT SIDE (CARDS) ======== */}
          <div className="flex flex-col justify-center lg:w-146 w-full">
            {features.map((feature, index) => {
              const isActive = activeFeatureId === feature.id;
              const cardDelay = 0.4 + (index * 0.1);

              return (
                <Reveal direction="right" delay={cardDelay} key={feature.id}>
                  <div
                    onClick={() => setActiveFeatureId(feature.id)}
                    className={`relative cursor-pointer transition-all duration-300 flex flex-col pr-8 py-6 gap-2 
            ${isActive
                        ? 'bg-transparent'
                        : 'bg-transparent opacity-60 hover:opacity-100'
                      }`}
                  >
                    {/* ============== PROGRESS BAR ============== */}
                    <div
                      className={`absolute right-0 top-0 bottom-0 w-[6px] transition-colors duration-300 
              ${isActive ? 'bg-brand' : 'bg-slate-200'}
              ${index === 0 ? 'rounded-t-full' : ''} 
              ${index === features.length - 1 ? 'rounded-b-full' : ''}
            `}
                    />

                    <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-[#0D1530]' : 'text-slate-600'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed font-medium transition-colors ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ========= RIGHT SIDE (IMAGE) ========= */}
          <Reveal direction="left" delay={0.4} className="order-first lg:order-last w-full lg:w-146 h-100 lg:h-full">
            <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-50">
              <Image
                key={activeFeature.id}
                src={activeFeature.imageUrl}
                alt={activeFeature.title}
                fill
                className="object-cover object-[50%_25%] animate-in fade-in zoom-in-[0.98] duration-700 ease-out"
                priority
              />
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};