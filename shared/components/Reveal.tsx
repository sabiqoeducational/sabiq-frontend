"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none"; 
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, direction = "up", delay = 0, className = "" }: RevealProps) => {
  const getHiddenState = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 50 };
      case "down": return { opacity: 0, y: -30 }; 
      case "left": return { opacity: 0, x: -50 };
      case "right": return { opacity: 0, x: 50 };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getHiddenState()}
      whileInView={{ opacity: 1, y: 0, x: 0 }} 
      viewport={{ once: true, amount: 0, margin: "50px" }} 
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};