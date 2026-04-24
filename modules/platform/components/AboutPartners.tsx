"use client";

import React, { useMemo, useEffect, useState } from "react";
import Image from "next/image";
import type { Messages } from "@/shared/i18n/messages";
import { motion } from "framer-motion";

type AboutPartnersProps = {
  content: Messages["platform"]["about"]["partners"];
};

const CARD_W = 220;
const GAP = 16;

export const AboutPartners = ({ content }: AboutPartnersProps) => {
  const [centerIndex, setCenterIndex] = useState(2);
  const [offset, setOffset] = useState(150);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setOffset(40);
      } else if (window.innerWidth < 1024) {
        setOffset(80);
      } else {
        setOffset(150);
      }
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const schoolImages = useMemo(
    () => [
      "/images/carousel/538e60128159a2f63f707fbdb1d590ef78fe691e.png",
      "/images/carousel/81165b911b9b7705772ee745ccd9db7cd4fba84a.png",
      "/images/carousel/984144ebdf47cd56039013c78bd98a1fef4d0d35.png",
      "/images/carousel/696038dc3699b0e223dd80c3b3d591435096f678.png",
      "/images/carousel/d67b325c7b494e5a821de696af1736226f364c69.png",
    ],
    [],
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % schoolImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [schoolImages.length]);
  const count = content.countries.length;
  // Total width of one full iteration of countries
  const SINGLE_SET_WIDTH = count * (CARD_W + GAP);

  const items = useMemo(
    () => [...content.countries, ...content.countries, ...content.countries],
    [content.countries],
  );

  return (
    <section className="pt-20 bg-white overflow-hidden" dir="rtl">
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
    to   { transform: translateX(${SINGLE_SET_WIDTH}px); }
        }
        .ticker-track {
          display: flex;
          gap: ${GAP}px;
          width: max-content;
          animation: ticker-scroll ${count * 1.5}s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
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
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a]">
              {content.titleblack}
              <span className="text-[#156AE1]">{content.titleblue}</span>
            </h2>
          </motion.div>{" "}
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
        <motion.div
          className="relative lg:mb-10 "
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <div className="ticker-track">
              {items.map((country, i) => (
                <div
                  key={`${country.name}-${i}`}
                  style={{ width: `${CARD_W}px` }}
                  className="shrink-0 bg-[#F6F7FB] py-3 px-4  rounded-lg flex items-center justify-content-center gap-4"
                >
                  <div className="w-16 h-12 relative">
                    <Image
                      src={country.flag}
                      alt={country.name}
                      fill
                      className="object-contain w-16 h-16"
                    />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold text-[#0D1530] text-lg">
                      {country.name}
                    </h3>
                    <p className="text-[#156AE1] text-md font-medium">
                      {country.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative h-[450px] flex items-center justify-center mx-5">
          <div className="relative  max-w-sm h-full flex items-center justify-center mx-5">
            {schoolImages.map((src, index) => {
              let position = index - centerIndex;

              if (position < -2) position += schoolImages.length;
              if (position > 2) position -= schoolImages.length;

              const isCenter = position === 0;
              const isVisible = Math.abs(position) <= 2;

              return (
                <motion.div
                  key={`school-${index}`}
                  initial={false}
                  animate={{
                    x: position * offset,
                    scale: isCenter ? 1 : 0.8,
                    zIndex: 10 - Math.abs(position),
                    opacity: isVisible ? (isCenter ? 1 : 0.9) : 0,
                  }}
                  transition={{
                    type: "tween",
                    stiffness: 150,
                    damping: 20,
                  }}
                  className="absolute w-[70vw] max-w-140 aspect-16/10 rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image
                    onClick={() => setCenterIndex(index)}
                    src={src}
                    alt="School"
                    fill
                    className={`object-cover transition-all duration-700 `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center gap-2  ">
          {schoolImages.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setCenterIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === centerIndex ? "w-2 bg-[#3b6fe2]" : "w-2 bg-blue-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
