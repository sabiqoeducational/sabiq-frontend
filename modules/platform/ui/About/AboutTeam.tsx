"use client";

import React from "react";
import Image from "next/image";
import type { Messages } from "@/shared/i18n/messages";
import { motion } from "framer-motion";

type AboutTeamProps = {
  content: Messages["platform"]["about"]["team"];
};

export const AboutTeam = ({ content }: AboutTeamProps) => {
  return (
    <section className="py-20 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-1.5 text-md font-semibold text-[#0D1530] bg-[#F5F8FF] rounded-lg mb-6">
              {content.badge}
              <span className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full" />
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
              {content.titleblack}
              <span className="text-[#3b6fe2]">{content.titleblue}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.3 }}
          >
            {" "}
            <p className="max-w-3xl mx-auto text-lg text-gray-500 font-medium mt-6">
              {content.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        >
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12">
            {content.members.map((member, index) => (
              <div key={index} className="flex flex-col group">
                {/* Image Card */}
                <div className="border border-[#D8DCF0] rounded-md mb-4">
                  <div className="relative aspect-4/5 rounded-md bg-gray-100 overflow-hidden  border-14 border-gray-100 shadow-sm ">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover shadow-sm bg-gray-100 rounded-md"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center px-2">
                  <h3 className="text-2xl font-black text-[#0f172a] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-bold text-sm  uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
