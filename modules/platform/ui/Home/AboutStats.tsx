"use client";

import React from "react";
import type { Messages } from "@/shared/i18n/messages";
import { motion } from "framer-motion";

type AboutStatsProps = {
  content: Messages["platform"]["about"]["stats"];
};

export const AboutStats = ({ content }: AboutStatsProps) => {
  return (
    <section className="bg-white py-2 lg:py-10">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4">
          {content.map((stat, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center px-2 py-4 lg:py-0
                /* Desktop: Divider on the left of each item except the last one */
                ${index !== content.length - 1 ? "lg:border-l lg:border-gray-200" : ""}
                
                /* Mobile: Divider between the two columns */
                ${index % 2 === 0 ? "border-l border-gray-100 lg:border-l-none" : ""}
              `}
            >
              <span className="text-2xl md:text-4xl font-medium text-[#156AE1] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-lg md:text-xl font-medium text-[#0D1530] opacity-80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
