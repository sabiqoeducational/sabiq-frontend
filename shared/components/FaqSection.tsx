"use client";

import React, { useState } from 'react';
import { Reveal } from '@/shared/components/Reveal';

// 1. واجهة البيانات
interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

// 2. بيانات الأسئلة (تقدر تعدلها أو تمررها كـ Props)
const faqsData: FaqItemData[] = [
  {
    id: 1,
    question: "هل سابق مناسبة لجميع أحجام المدارس؟",
    answer: "نعم، سابق مصممة لتناسب المدارس من جميع الأحجام - من المدارس الصغيرة ذات الفصول المحدودة إلى المجموعات التعليمية الكبيرة. يمكن تخصيص الباقة المناسبة بحسب عدد الطلاب والمعلمين وإمكانيات المدرسة."
  },
  {
    id: 2,
    question: "كم يستغرق تطبيق سابق في المدرسة؟",
    answer: "تتميز منصتنا بسهولة الإعداد، حيث يمكن إطلاق النظام بالكامل في مدرستك خلال أسبوعين إلى 4 أسابيع، ويتضمن ذلك نقل البيانات وتدريب الموظفين الأساسيين."
  },
  {
    id: 3,
    question: "هل بيانات المدرسة والطلاب آمنة؟",
    answer: "بالتأكيد. نحن نستخدم أحدث تقنيات التشفير ونستضيف بياناتك على خوادم سحابية آمنة ومحمية، مع عمل نسخ احتياطية يومية لضمان عدم فقدان أي معلومات."
  },
  {
    id: 4,
    question: "هل يمكن لأولياء الأمور متابعة أبنائهم عبر سابق؟",
    answer: "نعم، يوفر النظام تطبيقاً خاصاً لأولياء الأمور يمكنهم من خلاله متابعة الحضور، الدرجات، الواجبات، والتواصل المباشر مع المعلمين والإدارة بسهولة تامة."
  }
];

export const FaqSection = () => {
  // State لتتبع السؤال المفتوح حالياً (null تعني أن كله مغلق)
  const [openId, setOpenId] = useState<number | null>(1); // جعلت الأول مفتوح افتراضياً

  // دالة الفتح والإغلاق
  const toggleFaq = (id: number) => {
    // إذا ضغطت على نفس السؤال المفتوح يغلق، وإلا يفتح الجديد
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 w-full px-6 lg:px-24 overflow-hidden" dir="rtl">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* ============ Header ============ */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-100 rounded-full mb-6">
              الأسئلة الشائعة
              <span className="w-2 h-2 bg-brand rounded-full" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight mb-4">
              كل ما تريد <span className="text-brand">معرفته عن سابق</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-lg text-slate-500 font-medium">
              إجابات واضحة على أكثر الأسئلة شيوعاً حول منصة سابق
            </p>
          </Reveal>
        </div>

        {/* ============ FAQ Accordion ============ */}
        <div className="flex flex-col gap-4">
          {faqsData.map((faq, index) => {
            const isOpen = openId === faq.id;
            const delay = 0.4 + (index * 0.1);

            return (
              <Reveal direction="up" delay={delay} key={faq.id}>
                <div 
                  className={`border transition-all duration-300 rounded-2xl overflow-hidden bg-slate-50/50
                    ${isOpen ? 'border-brand/30 shadow-md shadow-brand/5' : 'border-slate-200 hover:border-slate-300'}
                  `}
                >
                  {/* زر السؤال */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-right focus:outline-none"
                  >
                    <h3 className={`text-lg md:text-xl font-bold pr-2 transition-colors ${isOpen ? 'text-brand' : 'text-slate-800'}`}>
                      {faq.question}
                    </h3>
                    
                    {/* أيقونة السهم المربع الأزرق */}
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white mr-4">
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* الإجابة (هنا خدعة الأنيميشن باستخدام Grid) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out 
                      ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                    `}
                  >
                    <div className="overflow-hidden">
                      {/* الـ Padding هنا بيظهر بس لما المحتوى يتفتح عشان ميبوظش المسافات */}
                      <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium pb-6 px-6 md:px-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};