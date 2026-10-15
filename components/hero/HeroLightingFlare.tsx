"use client";

import { motion } from "framer-motion";

export default function HeroLightingFlare() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* 1. Deep Midnight-Navy background baseline matching Reference */}
      <div className="absolute inset-0 bg-[#040a16]" />

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

      {/* 3. Deep Midnight-Black Background with Atmospheric Ambient Gradients matching Reference */}
      <div
        className="absolute top-1/4 right-[10%] w-[600px] h-[500px] rounded-full blur-[130px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(192, 132, 252, 0.14) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-[5%] w-[650px] h-[450px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(124, 92, 255, 0.12) 50%, transparent 75%)",
        }}
      />

      {/* 4. Subtle Particle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at 60% 50%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 60% 50%, black 40%, transparent 80%)",
        }}
      />

      {/* 5. Minimal Bottom Transition Fade into Next Section */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#040a16] via-[#040a16]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#040a16]/80 to-transparent pointer-events-none" />
    </div>
  );
}
