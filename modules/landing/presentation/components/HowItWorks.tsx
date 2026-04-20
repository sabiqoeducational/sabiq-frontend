import React from 'react';

// 1. واجهة بيانات الخطوة
export interface StepItem {
  id: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  steps: StepItem[];
}

export const HowItWorks = ({
  badgeText = "كيف يعمل سابق ؟",
  title = "ابدأ استخدام المنصة في خطوات بسيطة",
  subtitle = "ابدأ استخدام منصة سابق في خطوات بسيطة لتتمكن مدرستك من إدارة العمليات التعليمية والإدارية بكفاءة وسهولة.",
  steps
}: HowItWorksProps) => {
  return (
    <section className="bg-white py-20 w-full flex flex-col items-center justify-center px-6 lg:px-24">
      <div className="container-default max-w-7xl mx-auto w-full">
        
        {/* الترويسة */}
        <div className="text-center mb-16 flex flex-col items-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-50/50 border border-blue-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-medium text-slate-700">{badgeText}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">{title}</h2>
          <p className="text-lg text-slate-500 leading-relaxed">{subtitle}</p>
        </div>

        {/* شبكة الخطوات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-brand/30 transition-all duration-300 flex flex-col items-center"
            >
              {/* الدائرة التي تحتوي على الرقم */}
              <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md shadow-brand/20">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};