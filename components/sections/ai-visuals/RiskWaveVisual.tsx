"use client";

import { motion } from "framer-motion";

export default function RiskWaveVisual() {
  return (
    <div className="relative w-full h-full min-h-[160px] flex items-end justify-center select-none overflow-hidden rounded-[20px] bg-gradient-to-t from-[#0A1224]/90 via-[#070B14]/80 to-transparent border border-white/[0.06] p-4">
      {/* Ambient bottom glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[140px] rounded-full bg-gradient-to-t from-[#1677FF]/35 via-[#38D9C8]/20 to-transparent blur-3xl pointer-events-none"
      />

      <svg
        viewBox="0 0 500 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[180px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="waveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1677FF" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#168BFF" />
            <stop offset="80%" stopColor="#38D9C8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="waveGrad2" x1="10%" y1="100%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#168BFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38D9C8" />
            <stop offset="100%" stopColor="#F5F8FF" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* SWEEPING CURVED GLOWING RIBBONS */}
        {/* Base Wide Glow Band */}
        <path
          d="M 10 170 C 120 160 220 120 340 70 C 420 35 460 25 490 20"
          stroke="url(#waveGrad1)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.25"
          filter="url(#waveGlow)"
        />

        {/* Primary Sharp Ribbon 1 */}
        <path
          d="M 30 175 C 130 165 240 125 350 75 C 410 45 450 35 485 30"
          stroke="url(#waveGrad1)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Primary Sharp Ribbon 2 (Higher crest) */}
        <path
          d="M 60 178 C 160 168 260 115 370 60 C 420 35 455 25 480 20"
          stroke="url(#waveGrad2)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Secondary Delicate Filament 3 */}
        <path
          d="M 90 180 C 180 172 270 135 370 85 C 430 55 465 45 490 40"
          stroke="rgba(56,217,200,0.6)"
          strokeWidth="1.4"
          strokeDasharray="4 2"
          strokeLinecap="round"
        />

        {/* Secondary Filament 4 (Lower arch) */}
        <path
          d="M 20 165 C 110 150 200 100 320 50 C 390 20 430 12 470 10"
          stroke="rgba(22,139,255,0.7)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* FLOATING LIGHT PARTICLES ALONG CREST */}
        <g fill="#F5F8FF">
          <circle cx="340" cy="70" r="2.5" filter="url(#waveGlow)" />
          <circle cx="370" cy="60" r="3" fill="#38D9C8" filter="url(#waveGlow)" />
          <circle cx="410" cy="40" r="2" fill="#60A5FA" />
          <circle cx="445" cy="28" r="2.5" fill="#38D9C8" />
          <circle cx="475" cy="22" r="3" fill="#F5F8FF" filter="url(#waveGlow)" />
          <circle cx="280" cy="100" r="1.8" fill="#38D9C8" opacity="0.8" />
          <circle cx="220" cy="130" r="1.5" fill="#168BFF" opacity="0.7" />
          <circle cx="150" cy="155" r="1.5" fill="#38D9C8" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
