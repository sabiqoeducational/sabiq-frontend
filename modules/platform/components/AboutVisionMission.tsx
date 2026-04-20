"use client";

import React from "react";
import type { Messages } from "@/shared/i18n/messages";
import { Eye, MessageSquareCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type VisionMissionProps = {
  content: Messages["platform"]["about"]["visionMission"];
};

export const AboutVisionMission = ({ content }: VisionMissionProps) => {
  const icons = [
    <Eye key="eye" className="w-5 h-5 text-white" />,
    <div key="target" className="w-5 h-5 flex items-center justify-center">
      <Image
        src="/target-arrow.svg"
        alt="mission"
        width={28}
        height={28}
        className="object-contain"
      />
    </div>,
    <MessageSquareCheck key="msg" className="w-5 h-5 text-white" />,
  ];

  return (
    <section className="bg-white w-auto ">
      <div className="container mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#0D1530] bg-[#F5F8FF] rounded-xl mb-6">
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
              {content.titleblack}
              <span className="text-[#156AE1]">{content.titleblue}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.3 }}
          >
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              {content.description}
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5">
          {content.items.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="bg-[#F5F8FF] px-2 py-4 rounded-2xl border-2 border-[#D8DCF0] shadow-sm hover:border-[#156AE1] transition-all text-center flex flex-col items-center"
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <div className="bg-[#156AE1] p-2.5 rounded-full">
                    {icons[index]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0D1530] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-5 max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
