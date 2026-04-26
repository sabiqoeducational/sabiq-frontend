"use client";
import { feature } from "@/shared/types/featuePage";
import { motion } from "framer-motion";
const FeatureHeroSection = () => {
  const featureNumbers: feature[] = [
    {
      number: "500+",
      title: "مدرسة",
    },
    {
      number: "120k+",
      title: "طالب مسجل",
    },
    {
      number: "98%",
      title: "رضا المستخدمين",
    },
    {
      number: "60%",
      title: "توفير الوقت",
    },
  ];
  return (
    <section className="flex flex-col items-center m-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="bg-(--tenant-primary) text-white px-4 py-1 rounded-lg flex items-center gap-2 mb-8 ">
          تعرف علي الوحدات{" "}
          <span className="inline-block bg-white w-2 h-2 rounded-full "></span>
        </div>
        <h2 className="text-3xl text-center w-70 font-semibold mb-5 md:text-5xl md:w-150 md:leading-15">
          نظام رقمي متكامل لإدارة المدارس{" "}
          <span className="text-(--tenant-primary)">بكفاءة واحتراف</span>
        </h2>
        <p className="text-base text-slate-400 text-center mb-8 md:w-150 md:text-lg">
          منصة رقمية متكاملة تجمع إدارة الطلاب، الجداول، الحضور، التقارير، و
          التواصل مع أولياء الأمور كل ذلك في نظام واحد سهل و آمن ومتوافق مع
          متطلبات وزارة التعليم.
        </p>
        <div className="w-full flex gap-4 mb-3 md:justify-center">
          <button className="bg-(--tenant-primary) text-white py-2.5 px-5 rounded-xl grow md:grow-0">
            ابدأ تجربتك المجانية
          </button>
          <button className="border border-(--tenant-primary) rounded-xl text-(--tenant-primary) py-2.5 px-5 grow md:grow-0">
            معرفة المزيد
          </button>
        </div>
        <p className="text-sm text-center mb-8 md:text-base md:font-medium">
          تجربة مجانية 14 يوم — بدون بطاقة ائتمان — إلغاء في أي وقت
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-wrap gap-2 md:flex-nowrap md:w-full lg:w-300"
      >
        {featureNumbers.map((item) => (
          <div
            key={item.title}
            className="w-[48%] md:flex-1 flex flex-col justify-center items-center gap-2 font-semibold 
             odd:border-l odd:border-gray-200 
             md:border-l md:border-gray-200 md:last:border-none
             md:even:border-l md:even:border-gray-200"
          >
            <h4 className="text-[26px] text-(--tenant-primary)">
              {item.number}
            </h4>
            <p className="text-base font-semibold">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureHeroSection;
