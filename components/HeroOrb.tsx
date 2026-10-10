"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroOrb() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 240]);
  const rotate = useTransform(scrollY, [0, 800], [0, 90]);
  const opacity = useTransform(scrollY, [0, 600], [0.42, 0.12]);

  return (
    <motion.div
      style={{ y, rotate, opacity }}
      className="pointer-events-none absolute -top-28 right-0 sm:-right-24 z-0 h-[440px] w-[440px] sm:h-[680px] sm:w-[680px] select-none"
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-full blur-[140px]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #7c5cff 0deg, #c58bff 120deg, #06b6d4 240deg, #7c5cff 360deg)",
        }}
      />
    </motion.div>
  );
}
