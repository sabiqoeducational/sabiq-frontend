"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/shared/components/Reveal";
import WorldMap from "./WorldMap";
interface OfficeLocation {
  country: string;
  phone: string;
  address: string;
  email: string;
  flag: string;
}

interface OfficesSectionProps {
  content: {
    badge: string;
    titleBlack: string;
    titleBlue: string;
    subtitle: string;
    locations: readonly OfficeLocation[];
  };
}

export const OfficesSection = ({ content }: OfficesSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* Header */}
        <div className="mb-12">
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
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a]">
              {content.titleBlack}{" "}
              <span className="text-[#156AE1]">{content.titleBlue}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.3 }}
          >
            <p className="max-w-3xl mx-auto text-lg text-gray-500 font-medium mt-6">
              {content.subtitle}
            </p>
          </motion.div>
        </div>

        {/* World Map Illustration */}

        <Reveal direction="none" delay={0.6}>
          <div className="relative w-full  h-130 md:h-auto  md:aspect-21/9 mb-10 md:mb-14 rounded-xl overflow-hidden ">
            <WorldMap />
          </div>
        </Reveal>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F6F7FB] p-8 rounded-xl border border-[#D8DCF0] hover:border-[#156AE1] transition-all group shadow-sm text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative w-14 h-10 rounded shadow-sm overflow-hidden border border-gray-100">
                  <Image
                    src={loc.flag}
                    alt={loc.country}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0D1530] mb-2">
                {loc.country}
              </h3>

              <div className="space-y-1 text-sm text-[#6B7280] font-medium leading-relaxed">
                <p dir="ltr">{loc.phone}</p>
                <p className="px-4">{loc.address}</p>
                <a
                  href={`mailto:${loc.email}`}
                  className="block text-[#6B7280] "
                >
                  {loc.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
