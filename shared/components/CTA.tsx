"use client";

import React from "react";
import Image from "next/image";
import type { Messages } from "@/shared/i18n/messages";
import { motion } from "framer-motion";

type CTAProps = {
  content: Messages["platform"]["cta"];
};

export const CTA = ({ content }: CTAProps) => {
  return (
    <section className="py-6 lg:px-14 px-4 bg-white justify-center ">
      <motion.div
        className="container mx-auto "
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.2, ease: "easeIn", delay: 0.1 }}
      >
        <div className="relative  w-full h-100 md:h-120 lg:h-100 rounded-lg overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/shared/5fdf49f287c43eda8bcb959a09dfb5b29f794f72.png"
              alt="Join Sabiq"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 lg:bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="text-white text-xl lg:text-5xl font-bold mb-4 opacity-90">
              {content.name}{" "}
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl">
              {content.title}
            </h2>

            <p className="text-white/80 text-lg md:text-xl font-medium mb-10 max-w-2xl">
              {content.subtitle}
            </p>

            <button className="bg-[#156AE1] hover:bg-[#0e51b1] text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20 active:scale-95 cursor-pointer">
              {content.button}
            </button>
          </div>
        </div>
      </motion.div>{" "}
    </section>
  );
};
