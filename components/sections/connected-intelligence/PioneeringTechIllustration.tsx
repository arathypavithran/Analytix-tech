"use client";

import { motion } from "framer-motion";

export default function PioneeringTechIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Dynamic ambient background accent glow with floating pulse */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-radial from-[#1677FF]/20 via-[#38D9C8]/10 to-transparent blur-2xl pointer-events-none"
      />

      <svg
        viewBox="0 0 460 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="pioneeringGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="chipRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9C8" />
            <stop offset="50%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#1677FF" />
          </linearGradient>

          <linearGradient id="chipBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#111726" />
            <stop offset="100%" stopColor="#080B12" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            1. PCB CIRCUIT-BOARD LINES & NODES (ACCENT: #1677FF & #38D9C8)
            =================================================================== */}
        <g stroke="rgba(72,139,255,0.22)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Top-Left Circuit Traces */}
          <path d="M 40 40 L 95 40 L 135 80 L 180 80" />
          <path d="M 60 20 L 115 20 L 155 60 L 180 60" strokeOpacity="0.4" />
          <path d="M 20 85 L 75 85 L 110 100 L 180 100" strokeOpacity="0.5" />

          {/* Bottom-Left Circuit Traces */}
          <path d="M 50 185 L 105 185 L 145 145 L 180 145" />
          <path d="M 90 205 L 130 205 L 160 175 L 180 175" strokeOpacity="0.5" />

          {/* Top-Right Circuit Traces */}
          <path d="M 420 40 L 365 40 L 325 80 L 280 80" />
          <path d="M 400 20 L 345 20 L 305 60 L 280 60" strokeOpacity="0.4" />
          <path d="M 440 90 L 385 90 L 350 100 L 280 100" strokeOpacity="0.5" />

          {/* Bottom-Right Circuit Traces */}
          <path d="M 410 185 L 355 185 L 315 145 L 280 145" />
          <path d="M 370 205 L 330 205 L 300 175 L 280 175" strokeOpacity="0.5" />
        </g>

        {/* Small Connection Node Dots with animated pulse */}
        <g fill="#38D9C8">
          <circle cx="40" cy="40" r="2.5" />
          <circle cx="60" cy="20" r="2" opacity="0.6" />
          <circle cx="50" cy="185" r="2.5" />
          <circle cx="90" cy="205" r="2" opacity="0.6" />
          <circle cx="420" cy="40" r="2.5" />
          <circle cx="400" cy="20" r="2" opacity="0.6" />
          <circle cx="410" cy="185" r="2.5" />
          <circle cx="370" cy="205" r="2" opacity="0.6" />
          <circle cx="155" cy="60" r="2" fill="#168BFF" />
          <circle cx="305" cy="60" r="2" fill="#168BFF" />
          <circle cx="160" cy="175" r="2" fill="#168BFF" />
          <circle cx="300" cy="175" r="2" fill="#168BFF" />
        </g>

        {/* Floating background auxiliary modules */}
        <rect
          x="42"
          y="85"
          width="48"
          height="48"
          rx="12"
          fill="#0B0F19"
          stroke="rgba(72,139,255,0.18)"
          strokeWidth="1.2"
        />
        <rect x="52" y="95" width="8" height="8" rx="2" fill="#1677FF" opacity="0.3" />
        <rect x="64" y="95" width="8" height="8" rx="2" fill="#1677FF" opacity="0.3" />
        <rect x="52" y="107" width="8" height="8" rx="2" fill="#1677FF" opacity="0.3" />
        <rect x="64" y="107" width="8" height="8" rx="2" fill="#38D9C8" opacity="0.5" />

        <rect
          x="370"
          y="85"
          width="48"
          height="48"
          rx="12"
          fill="#0B0F19"
          stroke="rgba(72,139,255,0.18)"
          strokeWidth="1.2"
        />
        <rect x="382" y="97" width="24" height="6" rx="2" fill="#1677FF" opacity="0.25" />
        <rect x="382" y="107" width="18" height="6" rx="2" fill="#38D9C8" opacity="0.35" />
        <rect x="382" y="117" width="24" height="6" rx="2" fill="#1677FF" opacity="0.2" />

        {/* ===================================================================
            2. CENTRAL AI PROCESSOR CHIP (CENTERED AT cx: 230, cy: 110)
            =================================================================== */}
        {/* Chip Connector Contact Pins */}
        <g stroke="#96A8C2" strokeWidth="2" strokeLinecap="round" opacity="0.65">
          <line x1="202" y1="52" x2="202" y2="60" />
          <line x1="220" y1="52" x2="220" y2="60" />
          <line x1="240" y1="52" x2="240" y2="60" />
          <line x1="258" y1="52" x2="258" y2="60" />

          <line x1="202" y1="160" x2="202" y2="168" />
          <line x1="220" y1="160" x2="220" y2="168" />
          <line x1="240" y1="160" x2="240" y2="168" />
          <line x1="258" y1="160" x2="258" y2="168" />

          <line x1="172" y1="82" x2="180" y2="82" />
          <line x1="172" y1="100" x2="180" y2="100" />
          <line x1="172" y1="120" x2="180" y2="120" />
          <line x1="172" y1="138" x2="180" y2="138" />

          <line x1="280" y1="82" x2="288" y2="82" />
          <line x1="280" y1="100" x2="288" y2="100" />
          <line x1="280" y1="120" x2="288" y2="120" />
          <line x1="280" y1="138" x2="288" y2="138" />
        </g>

        {/* Ambient Halo Behind Processor */}
        <rect
          x="180"
          y="60"
          width="100"
          height="100"
          rx="22"
          fill="none"
          stroke="#168BFF"
          strokeWidth="3"
          opacity="0.3"
          filter="url(#pioneeringGlow)"
        />

        {/* Chip Base Package */}
        <rect
          x="180"
          y="60"
          width="100"
          height="100"
          rx="20"
          fill="url(#chipBodyGrad)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
        />

        {/* Glowing Accent Ring with Corner Dots */}
        <rect
          x="188"
          y="68"
          width="84"
          height="84"
          rx="16"
          fill="none"
          stroke="url(#chipRingGrad)"
          strokeWidth="1.8"
          filter="url(#pioneeringGlow)"
        />
        <rect
          x="188"
          y="68"
          width="84"
          height="84"
          rx="16"
          fill="none"
          stroke="url(#chipRingGrad)"
          strokeWidth="1.4"
        />

        {/* Corner alignment solder pads */}
        <circle cx="196" cy="76" r="2.5" fill="#38D9C8" />
        <circle cx="264" cy="76" r="2.5" fill="#38D9C8" />
        <circle cx="196" cy="144" r="2.5" fill="#38D9C8" />
        <circle cx="264" cy="144" r="2.5" fill="#38D9C8" />

        {/* Inner Silicon Die Frame */}
        <rect
          x="198"
          y="78"
          width="64"
          height="64"
          rx="12"
          fill="#060910"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* Embossed "AI" Typography Monogram */}
        <text
          x="230"
          y="119"
          textAnchor="middle"
          fill="#F5F8FF"
          fontSize="24"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.5"
          style={{
            filter: "drop-shadow(0 0 10px rgba(56, 217, 200, 0.45))",
          }}
        >
          AI
        </text>
      </svg>
    </div>
  );
}
