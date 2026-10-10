"use client";

import { motion } from "framer-motion";

export default function NicheFocusIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Soft central ambient radial glow with breathing motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.65, 0.9, 0.65],
        }}
        transition={{
          duration: 4.2,
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
          <filter id="nicheFocusGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="radarRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9C8" />
            <stop offset="50%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#1677FF" />
          </linearGradient>

          <linearGradient id="nodeDarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#080C14" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            1. RADAR / TARGETING CONCENTRIC SYSTEM
            =================================================================== */}
        {/* Horizontal & Vertical Crosshair Guidelines */}
        <g stroke="rgba(72,139,255,0.18)" strokeWidth="1">
          <line x1="30" y1="110" x2="310" y2="110" strokeDasharray="3 3" />
          <line x1="170" y1="20" x2="170" y2="200" strokeDasharray="3 3" />
          {/* Crosshair target ticks */}
          <line x1="170" y1="36" x2="170" y2="48" stroke="#38D9C8" strokeWidth="1.5" />
          <line x1="170" y1="172" x2="170" y2="184" stroke="#38D9C8" strokeWidth="1.5" />
          <line x1="96" y1="110" x2="108" y2="110" stroke="#38D9C8" strokeWidth="1.5" />
          <line x1="232" y1="110" x2="244" y2="110" stroke="#38D9C8" strokeWidth="1.5" />
        </g>

        {/* Outer Faint Concentric Ring */}
        <circle
          cx="170"
          cy="110"
          r="74"
          stroke="rgba(72,139,255,0.12)"
          strokeWidth="1.2"
        />

        {/* Middle Glowing Radar Accent Ring */}
        <circle
          cx="170"
          cy="110"
          r="54"
          stroke="url(#radarRingGrad)"
          strokeWidth="2.5"
          opacity="0.3"
          filter="url(#nicheFocusGlow)"
        />
        <circle
          cx="170"
          cy="110"
          r="54"
          stroke="url(#radarRingGrad)"
          strokeWidth="1.5"
          opacity="0.85"
        />

        {/* Inner Dark Circular Node (Center) */}
        <circle
          cx="170"
          cy="110"
          r="34"
          fill="url(#nodeDarkGrad)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.4"
        />

        {/* ===================================================================
            2. CENTRAL WORKFLOW / REPEAT CYCLE ICON
            =================================================================== */}
        <g transform="translate(153, 93)" stroke="#F5F8FF" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Cyclic Tri-Arrow Workflow */}
          <path d="M 17 6 A 11 11 0 0 1 27 17" stroke="#38D9C8" />
          <polyline points="24 13 27 17 31 15" stroke="#38D9C8" />

          <path d="M 27 17 A 11 11 0 0 1 12 27" stroke="#168BFF" />
          <polyline points="15 29 12 27 14 23" stroke="#168BFF" />

          <path d="M 12 27 A 11 11 0 0 1 17 6" stroke="#96A8C2" strokeOpacity="0.7" />
          <polyline points="19 8 17 6 13 8" stroke="#96A8C2" strokeOpacity="0.7" />

          {/* Mini node dots in cycle */}
          <circle cx="17" cy="17" r="2.5" fill="#38D9C8" stroke="none" />
          <circle cx="9" cy="12" r="1.5" fill="#96A8C2" stroke="none" />
          <circle cx="25" cy="22" r="1.5" fill="#168BFF" stroke="none" />
        </g>

        {/* ===================================================================
            3. SATELLITE NODES (LEFT & RIGHT)
            =================================================================== */}
        {/* LEFT SATELLITE NODE: Enterprise / Industry Automation Trigger */}
        <g>
          <line x1="88" y1="110" x2="116" y2="110" stroke="rgba(72,139,255,0.3)" strokeWidth="1.2" />
          <circle cx="68" cy="110" r="19" fill="#0A0F1B" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
          <g transform="translate(59, 101)" stroke="#96A8C2" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 3 17 L 3 2 L 15 2" />
            <path d="M 12 2 L 12 7 L 15 7 L 15 10" />
            <line x1="1" y1="17" x2="6" y2="17" />
            <rect x="7" y="11" width="7" height="6" rx="1" fill="#1677FF" fillOpacity="0.2" stroke="#168BFF" strokeWidth="1" />
          </g>
        </g>

        {/* RIGHT SATELLITE NODE: Enterprise System Node */}
        <g>
          <line x1="224" y1="110" x2="252" y2="110" stroke="rgba(72,139,255,0.3)" strokeWidth="1.2" />
          <circle cx="272" cy="110" r="19" fill="#0A0F1B" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
          <g transform="translate(263, 101)" stroke="#96A8C2" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="1" y1="17" x2="17" y2="17" />
            <path d="M 2 7 L 9 2 L 16 7 Z" fill="#38D9C8" fillOpacity="0.15" stroke="#38D9C8" strokeWidth="1" />
            <line x1="4" y1="7" x2="4" y2="15" />
            <line x1="9" y1="7" x2="9" y2="15" />
            <line x1="14" y1="7" x2="14" y2="15" />
          </g>
        </g>
      </svg>
    </div>
  );
}
