"use client";

import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "@/lib/content";

interface MarqueeProps {
  items?: string[];
  speed?: number;
  className?: string;
}

export default function Marquee({
  items = MARQUEE_ITEMS,
  speed = 35,
  className = "",
}: MarqueeProps) {
  // Duplicate array 3 times for a continuous, seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-[rgba(72,139,255,0.18)] bg-[#071426]/40 backdrop-blur-md py-4.5 select-none ${className}`}
    >
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#03060D] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#03060D] to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
      >
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="font-heading text-lg sm:text-xl font-semibold tracking-wide text-[#F5F8FF]/90 transition-colors hover:text-[#168BFF]">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF] shadow-[0_0_8px_#168BFF]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
