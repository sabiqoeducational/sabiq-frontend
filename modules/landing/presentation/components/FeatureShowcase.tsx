"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/shared/components/Reveal'

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

  const activeFeature = features.find((f) => f.id === activeFeatureId) || features[0];

  return (
    <section className="bg-white w-full flex flex-col items-center justify-center px-6 lg:px-25 overflow-hidden">
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
          <div className="flex flex-col justify-center lg:w-146 w-full gap-4">
            {features.map((feature, index) => {
              const isActive = activeFeatureId === feature.id;
              const cardDelay = 0.4 + (index * 0.1); 

              return (
                <Reveal direction="right" delay={cardDelay} key={feature.id}>
                  <div
                    onClick={() => setActiveFeatureId(feature.id)}
                    className={`cursor-pointer transition-all duration-300 flex flex-col rounded-xl p-3 gap-3 
                      ${isActive
                        ? 'bg-slate-50 border-r-4 border-brand'
                        : 'bg-transparent border-r-4 border-transparent hover:bg-slate-50/50 opacity-70 hover:opacity-100'
                      }`}
                  >
                    <h3 className={`text-xl font-bold mb-2 md:mb-3 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ========= RIGHT SIDE (IMAGE) ========= */}
          <Reveal direction="left" delay={0.4} className="order-first lg:order-last w-full lg:w-146 h-100 lg:h-full">
            <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <Image
                key={activeFeature.id}
                src={activeFeature.imageUrl}
                alt={activeFeature.title}
                fill
                className="object-cover animate-in fade-in zoom-in-[0.98] duration-700 ease-out"
                priority
              />
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};