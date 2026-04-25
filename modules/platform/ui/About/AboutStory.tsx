"use client";

import React from "react";
import Image from "next/image";
import type { Messages } from "@/shared/i18n/messages";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type AboutStoryProps = {
  content: Messages["platform"]["about"]["story"];
};

export const AboutStory = ({ content }: AboutStoryProps) => {
  return (
    <section className="py-12 lg:py-10 bg-white ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.1 }}
          >
            {" "}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#0D1530] bg-[#F5F8FF] rounded-xl mb-8">
              {content.badge}
              <span className="w-2 h-2 bg-[#156AE1] rounded-full" />
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
          >
            {" "}
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a]">
              {content.titleblack}{" "}
              <span className="text-[#156AE1]">{content.titleblue}</span>
            </h2>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-start mx-8 gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-right">
              <div className="space-y-4">
                <p className="text-md text-[#0D1530] opacity-80 leading-relaxed font-medium">
                  {content.description1}
                </p>
                <p className="text-md text-[#0D1530] opacity-80 leading-relaxed font-medium">
                  {content.description2}
                </p>
                <p className="text-md text-[#0D1530] opacity-80 leading-relaxed font-medium ">
                  {content.description3}
                </p>
              </div>

              <div className="mt-1 space-y-2">
                {content.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-start group"
                  >
                    <div className="shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-white fill-[#156AE1]" />
                    </div>
                    <span className="text-md font-medium text-[#6B7280]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/Gemini_Generated_Image_8f1rr58f1rr58f1r 1.svg"
                  alt="قصة سابق"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
