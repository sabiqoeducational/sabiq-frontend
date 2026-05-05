"use client";

import { motion } from "framer-motion";

type HeroContent = {
  badge: string;
  titleblack: string;
  titleblue: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trial?: string;
};

type GenericHeroProps = {
  content: HeroContent;
};

export const HeroComponent = ({ content }: GenericHeroProps) => {
  return (
    <section className="relative -mt-20 pt-28 lg:pt-32 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-37.5 -right-37.5 w-50 lg:w-100 md:w-100 h-100 bg-[#A5C8FA] rounded-full blur-[80px]" />
        <div className="absolute -top-37.5 -left-37.5 w-50 lg:w-150 md:w-100 h-30 bg-[#A5C8FA] rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-[#F7F9FF] via-white to-white opacity-70 pointer-events-none" />

      <motion.div
        className="relative container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="flex items-center gap-2 px-5 py-1.5 text-sm font-bold text-white bg-[#156AE1] rounded-full">
            {content.badge}
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </span>
        </div>

        <h1
          className=" text-4xl 
  md:text-5xl 
  lg:text-[56px] 
  font-black 
  text-[#1e293b] 
  mb-6 
  leading-tight 
  max-w-2xl 
  mx-auto"
        >
          {content.titleblack}
          <span className="text-[#156AE1]">{content.titleblue}</span>
        </h1>

        {/* Description */}
        <p className="max-w-150 mx-auto text-base md:text-xl text-[#6B7280] font-light mb-7 leading-relaxed opacity-95">
          {content.description}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 mb-3 max-w-sm mx-auto">
          <button className="flex-1 px-3 py-4 bg-[#156AE1] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all text-lg cursor-pointer">
            {content.ctaPrimary}
          </button>
          <button className="flex-1 px-3 py-3.5 bg-white text-[#156AE1] font-bold rounded-xl border-2 border-[#156AE1] hover:bg-blue-50 transition-all text-lg cursor-pointer">
            {content.ctaSecondary}
          </button>
        </div>

        <p className="md:text-base lg:text-base text-sm text-[#0D1530] font-medium opacity-80 text-center">
          {content.trial}
        </p>
      </motion.div>
    </section>
  );
};
