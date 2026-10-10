"use client";

import { motion } from "framer-motion";

export default function CustomSolutionsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Ambient background accent glow behind center panel */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.65, 0.9, 0.65],
        }}
        transition={{
          duration: 4.5,
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
          <filter id="customSolGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="activePanelBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9C8" />
            <stop offset="60%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#1677FF" />
          </linearGradient>

          <linearGradient id="panelBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F1626" />
            <stop offset="100%" stopColor="#080C14" />
          </linearGradient>

          <linearGradient id="centerPanelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#131C30" />
            <stop offset="100%" stopColor="#0A0F1A" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            1. STAND & BASE PLATFORM WITH CIRCUIT TRACES
            =================================================================== */}
        {/* Horizontal Data Bus Line with End Connection Nodes */}
        <line x1="20" y1="95" x2="440" y2="95" stroke="rgba(72,139,255,0.14)" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="26" cy="95" r="3.5" fill="#0C1220" stroke="#38D9C8" strokeWidth="1.5" />
        <circle cx="26" cy="95" r="1.5" fill="#38D9C8" />
        <circle cx="434" cy="95" r="3.5" fill="#0C1220" stroke="#168BFF" strokeWidth="1.5" />
        <circle cx="434" cy="95" r="1.5" fill="#168BFF" />

        {/* Console / Display Stand Base */}
        <g stroke="rgba(72,139,255,0.22)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Vertical Neck */}
          <path d="M 215 150 L 215 178" />
          <path d="M 245 150 L 245 178" />
          {/* Base Stand */}
          <path d="M 200 178 L 260 178" />
          <path d="M 200 178 L 190 196 L 270 196 L 260 178" fill="#090E18" fillOpacity="0.8" />
          <line x1="205" y1="192" x2="255" y2="192" stroke="#38D9C8" strokeOpacity="0.4" strokeWidth="1" />
        </g>

        {/* Circuit Traces Radiating from Stand */}
        <g stroke="rgba(72,139,255,0.18)" strokeWidth="1.2" strokeLinecap="round">
          <path d="M 190 196 L 160 196 L 140 176 L 110 176" />
          <circle cx="110" cy="176" r="2" fill="#168BFF" />
          <path d="M 270 196 L 300 196 L 320 176 L 350 176" />
          <circle cx="350" cy="176" r="2" fill="#38D9C8" />
        </g>

        {/* ===================================================================
            2. THREE FLOATING PANELS
            =================================================================== */}

        {/* LEFT PANEL */}
        <g opacity="0.85">
          <rect
            x="68"
            y="32"
            width="100"
            height="115"
            rx="14"
            fill="url(#panelBodyGrad)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.2"
          />
          {/* Skeleton UI lines */}
          <rect x="82" y="50" width="46" height="4" rx="2" fill="#96A8C2" opacity="0.3" />
          <rect x="82" y="60" width="68" height="3" rx="1.5" fill="#96A8C2" opacity="0.18" />
          <rect x="82" y="70" width="54" height="3" rx="1.5" fill="#96A8C2" opacity="0.18" />
          {/* Bottom left radio node */}
          <circle cx="88" cy="122" r="5" fill="#0C1220" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        </g>

        {/* RIGHT PANEL */}
        <g opacity="0.85">
          <rect
            x="292"
            y="32"
            width="100"
            height="115"
            rx="14"
            fill="url(#panelBodyGrad)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.2"
          />
          {/* Skeleton UI lines */}
          <rect x="306" y="50" width="38" height="4" rx="2" fill="#96A8C2" opacity="0.3" />
          <rect x="306" y="60" width="58" height="3" rx="1.5" fill="#96A8C2" opacity="0.18" />
          <rect x="306" y="70" width="44" height="3" rx="1.5" fill="#96A8C2" opacity="0.18" />
          {/* Bottom left radio node */}
          <circle cx="374" cy="122" r="5" fill="#0C1220" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        </g>

        {/* CENTER PANEL (Active / Highlighted with Accent Glow) */}
        {/* Glow Halo behind center panel */}
        <rect
          x="178"
          y="24"
          width="104"
          height="126"
          rx="16"
          fill="none"
          stroke="#168BFF"
          strokeWidth="3"
          opacity="0.35"
          filter="url(#customSolGlow)"
        />

        {/* Center Panel Container */}
        <rect
          x="178"
          y="24"
          width="104"
          height="126"
          rx="16"
          fill="url(#centerPanelGrad)"
          stroke="url(#activePanelBorderGrad)"
          strokeWidth="1.6"
        />

        {/* Center Panel Content Lines */}
        <rect x="194" y="44" width="34" height="4" rx="2" fill="#38D9C8" opacity="0.8" />
        <rect x="194" y="55" width="70" height="3" rx="1.5" fill="#96A8C2" opacity="0.3" />
        <rect x="194" y="66" width="58" height="3" rx="1.5" fill="#96A8C2" opacity="0.25" />
        <rect x="194" y="77" width="45" height="3" rx="1.5" fill="#96A8C2" opacity="0.2" />

        {/* Checkmark Active Badge at Bottom-Left of Center Panel */}
        <g transform="translate(192, 120)">
          <circle cx="8" cy="8" r="8" fill="#1677FF" opacity="0.2" />
          <circle cx="8" cy="8" r="7" fill="#0C1526" stroke="#38D9C8" strokeWidth="1.4" />
          <path
            d="M 5 8 L 7.2 10.2 L 11.2 5.8"
            stroke="#38D9C8"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Connection circuit line linking center panel to right and left */}
        <path d="M 178 86 L 168 86" stroke="#38D9C8" strokeWidth="1.2" opacity="0.6" />
        <path d="M 282 86 L 292 86" stroke="#168BFF" strokeWidth="1.2" opacity="0.6" />
      </svg>
    </div>
  );
}
