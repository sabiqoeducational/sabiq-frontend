"use client";
import { JobCard } from "@/shared/types/featuePage";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
const jobs: JobCard[] = [
  {
    id: 1,
    title: "المدير",
    description:
      "تحكم كامل في إدارة المدرسة ومتابعة الأداء اليومي، مع تقارير دقيقة تساعدك على اتخاذ قرارات أفضل.",
    image: "/platform/Feature/images/head-manager.svg",
  },
  {
    id: 2,
    title: "الوكيل",
    description:
      "الإشراف على سير العملية التعليمية اليومية، مع متابعة الحضور والانضباط لضمان بيئة تعليمية منظمة.",
    image: "/platform/Feature/images/principal.svg",
  },
  {
    id: 3,
    title: "المعلم",
    description:
      "إدارة الفصول الدراسية بسهولة، مع أدوات للحضور والتحضير تساعدك على تنظيم يومك بكفاءة",
    image: "/platform/Feature/images/teacher.svg",
  },
  {
    id: 4,
    title: "ولى الأمر",
    description:
      "متابعة مستوى الأبناء والتواصل مع المدرسة بشكل مباشر، مع تحديثات مستمرة عن الأداء والحضور.",
    image: "/platform/Feature/images/guardian.svg",
  },
  {
    id: 5,
    title: "المشرف الأكاديمي",
    description:
      "متابعة الأداء الأكاديمي للطلاب والمعلمين من خلال تقارير دقيقة تساعد على تحسين جودة التعليم واتخاذ قرارات فقالة.",
    image: "/platform/Feature/images/academic-supervisor.svg",
  },
  {
    id: 6,
    title: "الإدارى",
    description:
      "تنظيم العمليات اليومية وإدارة شؤون المدرسة لضمان سير العمل بسلاسة بين جميع الأقسام.",
    image: "/platform/Feature/images/administrative.svg",
  },
  {
    id: 7,
    title: "المحاسب",
    description:
      "إدارة الرسوم والمصروفات بدقة, مع تقارير مالية واضحة تساعدك على متابعة الأداء المألي.",
    image: "/platform/Feature/images/accounant.svg",
  },
  {
    id: 8,
    title: "مسئول IT",
    description:
      "إدارة الأنظمة التقنية وضمان استقرار المنصة  لتقديم تجربة استخدام سلسة لجميع المستخدمين.",
    image: "/platform/Feature/images/it-engineer.svg",
  },
];

const SabeqSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center m-4 lg:mx-24 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="feature-headline"
      >
        لمن صمم سابق ؟<span></span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl text-center w-80 font-semibold mb-4 md:text-5xl md:w-150 md:leading-15 "
      >
        مصمم
        <span className="text-(--tenant-primary) "> سابق </span>
        لك, أيا كان
        <span className="text-(--tenant-primary) "> دورك</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-base text-slate-400 text-center mb-8 md:w-150 md:text-lg"
      >
        يمنحك سابق الأدوات التي تحتاجها بالضبط،سواء كنت مديرًا أو معلمًا أو
        وليًا للأمر.{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full group p-4"
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 scroll-smooth no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex-none transition-all duration-300
                       w-[calc(100%-40px)]     
                       md:w-[calc(40%-20px)]    
                       lg:w-[calc(25%-15px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex flex-col">
                <div className="bg-[#E5E7EB] p-5 rounded-[20px]">
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={200}
                    height={300}
                    className="w-full object-cover rounded-[15px]"
                  />
                </div>

                <div className="mt-4 px-1 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-(--text-secondary) mt-2 text-base leading-6 text-center">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[35%] z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            <Image
              src={"/platform/Feature/images/Vector.svg"}
              alt="arrow"
              width={12}
              height={12}
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[35%] z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors rotate-180"
          >
            <Image
              src={"/platform/Feature/images/Vector.svg"}
              alt="arrow"
              width={12}
              height={12}
            />
          </button>
        </div>
        <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </motion.div>
    </section>
  );
};

export default SabeqSlider;
