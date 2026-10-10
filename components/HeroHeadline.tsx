"use client";

import { motion } from "framer-motion";

interface HeroHeadlineProps {
  text?: string;
  className?: string;
}

export default function HeroHeadline({
  text = "Smarter Systems. Real Business Growth.",
  className = "",
}: HeroHeadlineProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.08] ${className}`}
    >
      {words.map((word, index) => {
        // Words after the second one get the signature accent gradient
        const isGradientWord = index >= 2;

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-top mr-[0.24em] last:mr-0 py-1"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block ${
                isGradientWord
                  ? "bg-gradient-to-r from-white via-[#c58bff] to-[#a78bfa] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
}
