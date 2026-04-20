import React from 'react';
import { Button } from '@/shared/components/Button';
import { Reveal } from '@/shared/components/Reveal';

export interface StatItem {
  id: string | number;
  value: string;
  label: string;
}

interface AboutStatsProps {
  badgeText?: string;
  description: React.ReactNode;
  stats: StatItem[];
  ctaText?: string;
  ctaHref?: string;
}

export const AboutStats = ({
  badgeText = "قصتنا و رؤيتنا",
  description,
  stats,
  ctaText = "تعرف من نحن",
  ctaHref = "/about"
}: AboutStatsProps) => {
  return (
    <section className="bg-transparent py-20 w-full flex flex-col items-center justify-center px-6 lg:px-24">
      <div className="container-default flex flex-col items-center text-center max-w-5xl mx-auto">

        <Reveal direction='down' delay={0.3}>
          <div className="inline-flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-sm font-medium text-slate-700">{badgeText}</span>
          </div>
        </Reveal>

        <Reveal direction='up' delay={0.4}>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-slate-900 leading-relaxed md:leading-[1.4] mb-16">
            {description}
          </h3>
        </Reveal>

        <Reveal direction='up' delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-y-12 md:gap-y-0 mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex flex-col items-center justify-center space-y-2
                ${index !== stats.length - 1 ? 'md:border-l border-slate-200' : ''} 
              `}
              >
                <span className="text-4xl md:text-5xl font-bold text-brand">
                  {stat.value}
                </span>
                <span className="text-base md:text-lg font-medium text-slate-800">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction='up' delay={0.6}>
          <Button href={ctaHref} variant="primary" size="lg" className="px-10">
            {ctaText}
          </Button>
        </Reveal>

      </div>
    </section>
  );
};