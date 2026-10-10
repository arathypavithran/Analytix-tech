"use client";

import { motion } from "framer-motion";

export default function CyberSecurityIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Soft ambient radial glow with breathing motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
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
        viewBox="0 0 340 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="cyberSecGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="cyberRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9C8" />
            <stop offset="50%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#1677FF" />
          </linearGradient>

          <linearGradient id="cyberPillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#111728" />
            <stop offset="100%" stopColor="#080C14" />
          </linearGradient>

          <linearGradient id="cyberNodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#162238" />
            <stop offset="100%" stopColor="#0A0F1A" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            1. VERTICAL SPINE & HORIZONTAL TRACK TRACES
            =================================================================== */}
        <line x1="170" y1="56" x2="170" y2="100" stroke="#38D9C8" strokeWidth="1.6" strokeOpacity="0.8" />
        <line x1="170" y1="124" x2="170" y2="162" stroke="#168BFF" strokeWidth="1.6" strokeOpacity="0.8" />

        {/* Bottom Horizontal Diamond Track */}
        <line x1="70" y1="174" x2="270" y2="174" stroke="rgba(72,139,255,0.25)" strokeWidth="1.4" />
        <polygon points="70,170 74,174 70,178 66,174" fill="#38D9C8" />
        <polygon points="270,170 274,174 270,178 266,174" fill="#168BFF" />

        {/* Subtle Horizontal Circuit Guidelines from Top Node */}
        <g stroke="rgba(72,139,255,0.18)" strokeWidth="1.2" strokeLinecap="round">
          <path d="M 120 40 L 90 40 L 80 50 L 50 50" />
          <circle cx="50" cy="50" r="2" fill="#38D9C8" />
          <path d="M 220 40 L 250 40 L 260 50 L 290 50" />
          <circle cx="290" cy="50" r="2" fill="#168BFF" />
        </g>

        {/* ===================================================================
            2. TOP NODE: SENTINEL RADAR / THREAT MONITOR BEACON
            =================================================================== */}
        <circle
          cx="170"
          cy="40"
          r="19"
          stroke="url(#cyberRingGrad)"
          strokeWidth="2.5"
          opacity="0.35"
          filter="url(#cyberSecGlow)"
        />
        <circle
          cx="170"
          cy="40"
          r="19"
          fill="url(#cyberNodeGrad)"
          stroke="url(#cyberRingGrad)"
          strokeWidth="1.5"
        />

        {/* Sentinel Radar Spark */}
        <g transform="translate(161, 31)" stroke="#38D9C8" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="4.5" fill="#38D9C8" fillOpacity="0.25" />
          <line x1="9" y1="1" x2="9" y2="2.8" />
          <line x1="9" y1="15.2" x2="9" y2="17" />
          <line x1="1" y1="9" x2="2.8" y2="9" />
          <line x1="15.2" y1="9" x2="17" y2="9" />
          <line x1="3.3" y1="3.3" x2="4.6" y2="4.6" />
          <line x1="13.4" y1="13.4" x2="14.7" y2="14.7" />
          <line x1="3.3" y1="14.7" x2="4.6" y2="13.4" />
          <line x1="13.4" y1="4.6" x2="14.7" y2="3.3" />
        </g>

        {/* ===================================================================
            3. MIDDLE LAYER: HORIZONTAL PILL PANEL WITH ZERO-TRUST SHIELD
            =================================================================== */}
        <rect
          x="50"
          y="94"
          width="240"
          height="36"
          rx="18"
          fill="url(#cyberPillGrad)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.4"
        />
        <rect
          x="56"
          y="100"
          width="228"
          height="24"
          rx="12"
          fill="#060910"
          opacity="0.4"
        />

        {/* Center Zero-Trust Defense Shield Badge */}
        <circle
          cx="170"
          cy="112"
          r="16"
          fill="#0E1626"
          stroke="rgba(72,139,255,0.3)"
          strokeWidth="1.4"
        />
        {/* Shield Icon */}
        <g transform="translate(162, 104)" stroke="#38D9C8" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M 8 2 L 14 4.5 V 9.5 C 14 13.5 8 16 8 16 C 8 16 2 13.5 2 9.5 V 4.5 L 8 2 Z"
            fill="#1677FF"
            fillOpacity="0.25"
            stroke="#168BFF"
          />
          <path d="M 5.5 8.5 L 7.5 10.5 L 11 6.5" stroke="#38D9C8" strokeWidth="1.3" />
        </g>

        {/* ===================================================================
            4. BOTTOM NODE: VERIFIED IDENTITY ACCESS NODE
            =================================================================== */}
        <circle
          cx="170"
          cy="174"
          r="14"
          fill="url(#cyberNodeGrad)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.3"
        />
        {/* Verified User / Lock Icon */}
        <g transform="translate(163, 167)" stroke="#96A8C2" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="4.5" r="3" fill="#96A8C2" fillOpacity="0.3" />
          <path d="M 1.5 13 C 1.5 10 3.5 8.5 7 8.5 C 10.5 8.5 12.5 10 12.5 13" />
        </g>
      </svg>
    </div>
  );
}
