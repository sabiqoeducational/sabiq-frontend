"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// 1. واجهة البيانات لكل ميزة
export interface ShowcaseItem {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
}

// 2. واجهة الـ Props للمكون
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
  // 3. State لتتبع الميزة النشطة (الافتراضي هو أول عنصر)
  const [activeFeatureId, setActiveFeatureId] = useState(features[0]?.id);

  // إيجاد بيانات الميزة النشطة لعرض صورتها
  const activeFeature = features.find((f) => f.id === activeFeatureId) || features[0];

  return (
    <section className="bg-white py-24 w-full flex flex-col items-center justify-center px-6 lg:px-24 overflow-hidden">
      <div className="container-default flex flex-col items-center max-w-7xl mx-auto w-full">
        
        {/* الترويسة (Header) */}
        <div className="text-center mb-16 flex flex-col items-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-50/50 border border-blue-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-sm font-medium text-slate-700">{badgeText}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight mb-6">
            {title}
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* شبكة المحتوى (Grid: صورة + قائمة) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          
          {/* الجانب الأيمن (قائمة الفوائد) */}
          <div className="flex flex-col w-full">
            {features.map((feature) => {
              const isActive = activeFeatureId === feature.id;

              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeatureId(feature.id)}
                  // الكلاسات دي بتعمل التصميم بتاع الكارت النشط (خط أزرق يمين، زوايا دائرية شمال، خلفية رمادي)
                  className={`cursor-pointer transition-all duration-300 p-6 md:p-8 
                    ${isActive 
                      ? 'bg-slate-50 border-r-4 border-brand rounded-l-2xl' 
                      : 'bg-transparent border-r-4 border-transparent hover:bg-slate-50/50 rounded-l-2xl opacity-70 hover:opacity-100'
                    }`}
                >
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* الجانب الأيسر (الصورة المتغيرة) */}
          <div className="relative w-full h-[400px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 order-first lg:order-last">
            {/* استخدام key يخبر React بإعادة رسم الصورة عند تغيرها لتشغيل حركة الظهور (Fade In) */}
            <Image
              key={activeFeature.id}
              src={activeFeature.imageUrl}
              alt={activeFeature.title}
              fill
              className="object-cover animate-in fade-in zoom-in-[0.98] duration-700 ease-out"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
};