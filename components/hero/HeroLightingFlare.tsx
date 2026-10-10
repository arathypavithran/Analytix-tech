"use client";

import { motion } from "framer-motion";

export default function HeroLightingFlare() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* 1. Deep Midnight-Black background baseline */}
      <div className="absolute inset-0 bg-[#03060D]" />

      {/* 2. Hidden SVG Convolution Sharpening Filter for High-Def / 4K Clarity */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="clarity4k" x="-10%" y="-10%" width="120%" height="120%">
            <feConvolveMatrix
              order="3"
              preserveAlpha="true"
              kernelMatrix="
                 0  -0.5   0
               -0.5  3.0 -0.5
                 0  -0.5   0"
            />
          </filter>
        </defs>
      </svg>

      {/* 3. Atmospheric Luminous Ambient Halos matching the Wave's glow */}
      <motion.div
        animate={{
          opacity: [0.35, 0.5, 0.35],
          scale: [0.98, 1.03, 0.98],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] lg:w-[1300px] h-[550px] rounded-full mix-blend-screen blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124, 92, 255, 0.35) 0%, rgba(37, 99, 235, 0.2) 45%, rgba(6, 182, 212, 0.08) 70%, transparent 100%)",
        }}
      />

      {/* 4. Full Homepage Banner GIF Animation (Pause GIF shared image) with 4K clarity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="/hero-banner.gif"
          alt="AI Energy Wave Hero Animation"
          className="w-full h-full max-w-[2560px] object-cover object-center mix-blend-screen opacity-100"
          style={{
            filter: "url(#clarity4k) contrast(1.25) brightness(1.15)",
            imageRendering: "-webkit-optimize-contrast",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />
      </div>

      {/* 5. Minimal Bottom Transition Fade into Next Section (No heavy overlays dulling the wave) */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#03060D] via-[#03060D]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#03060D]/60 to-transparent pointer-events-none" />
    </div>
  );
}
