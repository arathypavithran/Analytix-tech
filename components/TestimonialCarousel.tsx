"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";
import { Quote } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

export default function TestimonialCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden py-8 select-none"
    >
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-[#03060D] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-[#03060D] to-transparent" />

      <motion.div
        animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-6 sm:gap-8 will-change-transform"
      >
        {items.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="w-[340px] sm:w-[440px] rounded-[22px] border border-[rgba(72,139,255,0.22)] bg-[#0A1930]/80 backdrop-blur-md p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#168BFF]/50 hover:bg-[#0A1930] hover:shadow-[0_15px_35px_rgba(22,139,255,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#168BFF]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <span className="rounded-full bg-[#1677FF]/15 px-3 py-1 text-xs font-semibold text-[#168BFF] border border-[#1677FF]/30">
                  {item.metric}
                </span>
              </div>

              <div className="relative mb-6">
                <AnimatedIcon
                  type="decorative"
                  floating={true}
                  className="absolute -top-3 -left-2 -z-0"
                >
                  <Quote className="h-8 w-8 text-white/15" />
                </AnimatedIcon>
                <p className="text-white/95 text-base sm:text-lg leading-relaxed relative z-10 italic">
                  "{item.quote}"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-heading text-base font-bold text-white">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#b9b4cc]">
                  {item.role} · {item.company}
                </p>
              </div>
              <span className="text-xs text-white/50">{item.location}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
