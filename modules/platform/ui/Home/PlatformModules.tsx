import React from 'react';
import { Button } from '@/shared/components/Button';
import { Reveal } from '@/shared/components/Reveal';

export interface ModuleItem {
  id: string | number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconWrapperClass: string;
}

interface PlatformModulesProps {
  badgeText?: string;
  title: React.ReactNode;
  subtitle: string;
  modules: ModuleItem[];
  ctaText?: string;
  ctaHref?: string;
}

export const PlatformModules = ({
  badgeText = "وحدات المنصة",
  title,
  subtitle,
  modules,
  ctaText = "تعرف على كل الوحدات",
  ctaHref = "/features"
}: PlatformModulesProps) => {
  return (
    <section className="bg-white py-24 w-full flex flex-col items-center justify-center px-6 lg:px-24 overflow-hidden">
      <div className="container-default flex flex-col items-center max-w-6xl mx-auto">
        
        <Reveal direction="up" delay={0.1} className="text-center mb-16 flex flex-col items-center max-w-3xl mx-auto">
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
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {modules.map((mod, index) => {
            const colIndex = index % 3;
            const revealDirection = colIndex === 0 ? "right" : colIndex === 2 ? "left" : "up";

            return (
              <Reveal 
                key={mod.id} 
                direction={revealDirection} 
                delay={0.2 + (index * 0.1)} 
                className="h-full"
              >
                <div className="group bg-[#F8FAFC] border border-slate-100 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand transition-all duration-300 h-full flex flex-col">
                  
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${mod.iconWrapperClass}`}>
                    {mod.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium mt-auto">
                    {mod.description}
                  </p>

                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up" delay={0.6}>
          <Button href={ctaHref} variant="primary" size="lg" className="px-10">
            {ctaText}
          </Button>
        </Reveal>

      </div>
    </section>
  );
};