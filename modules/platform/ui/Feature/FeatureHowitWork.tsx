'use client'
import { featureCard } from "@/shared/types/featuePage";
import HowWorksCard from "./HowWorksCard";
import {motion} from "framer-motion"
const FeatureHowitWork = () => {
  const dataCards: featureCard[] = [
    {
      id: 1,
      title: "إنشاء حساب المدرسة",
      description:
        "إنشاء حساب خاص بمدرستك و إعداد المعلومات الأساسية مثل الصفوف و المعلمين و الهيكل التعليمي للمدرسة.",
    },
    {
      id: 2,
      title: "إضافة الطلاب و المعلمين",
      description:
      "إضافة بيانات الطلاب و أولياء الأمور و المعلمين بسهولة و تنظيم الملفات التعليمية في مكان واحد."
    },
    {
      id: 3,
      title: "إدارة العمليات اليومية",
      description:
      "ابدأ بإدارة العمليات اليومية مثل تسجيل الحضور و تنظيم الجداول الدراسية و إدارة الاختبارات والدرجات."
    },
    {
      id: 4,
      title: "متابعة التقارير و التواصل",
      description:
      "اطلع على التقارير و التحليلات و تواصل مع أولياء الأمور لمتابعة تقدم الطلاب بشكل مستمر."
    },
  ];

  return (
    <section className="flex flex-col items-center m-4">
      <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{once:true}}
      className="feature-headline">
        كيف يعمل سابق ؟<span></span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{once:true}}
        className="text-3xl text-center w-80 font-semibold mb-4 md:text-5xl md:w-150 md:leading-15 "
      >
        ابدأ استخدام المنصة في
        <span className="text-(--tenant-primary) "> خطوات بسيطة</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{once:true}}
        className="text-base text-slate-400 text-center mb-8 md:w-150 md:text-lg">
        ابدأ استخدام منصة سابق في خطوات بسيطة، لتتمكن مدرستك من إدارة العمليات
        التعليمية و الإدارية بكفاءة و سهولة.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{once:true}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {dataCards.map((card) => (
          <HowWorksCard key={card.id} props = {card} />
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureHowitWork;
