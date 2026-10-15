"use client";

import { motion } from "framer-motion";

export default function HeroERPIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Ambient electric blue/cyan background accent glow with floating pulse */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-radial from-[#1677FF]/25 via-[#38D9C8]/12 to-transparent blur-2xl pointer-events-none"
      />

      <svg
        viewBox="0 0 460 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="erpHeroGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="erpBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9C8" />
            <stop offset="50%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#1677FF" />
          </linearGradient>

          <linearGradient id="erpCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#101828" />
            <stop offset="100%" stopColor="#080C14" />
          </linearGradient>

          <linearGradient id="erpCenterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#132038" />
            <stop offset="100%" stopColor="#09101C" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            1. PCB CIRCUIT TRACES (ACCENT: #1677FF & #38D9C8)
            =================================================================== */}
        <g stroke="rgba(72,139,255,0.28)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          {/* Top-Left to Core */}
          <path d="M 45 45 L 105 45 L 140 75 L 175 75" />
          {/* Bottom-Left to Core */}
          <path d="M 55 175 L 115 175 L 145 145 L 175 145" />
          {/* Top-Right to Core */}
          <path d="M 415 45 L 355 45 L 320 75 L 285 75" />
          {/* Bottom-Right to Core */}
          <path d="M 405 175 L 345 175 L 315 145 L 285 145" />
        </g>

        {/* Pulsing Signal Nodes along traces */}
        <circle cx="105" cy="45" r="2.5" fill="#38D9C8" />
        <circle cx="355" cy="45" r="2.5" fill="#168BFF" />
        <circle cx="115" cy="175" r="2.5" fill="#1677FF" />
        <circle cx="345" cy="175" r="2.5" fill="#38D9C8" />

        {/* ===================================================================
            2. LEFT FLOATING MODULE: FINANCE & LEDGER
            =================================================================== */}
        <g>
          <rect
            x="35"
            y="70"
            width="85"
            height="80"
            rx="12"
            fill="url(#erpCardGrad)"
            stroke="rgba(72,139,255,0.35)"
            strokeWidth="1.2"
          />
          {/* Module Header Bar */}
          <rect x="43" y="78" width="26" height="4" rx="2" fill="#168BFF" />
          <rect x="72" y="78" width="36" height="4" rx="2" fill="rgba(72,139,255,0.2)" />
          {/* Data Lines */}
          <rect x="43" y="90" width="58" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
          <rect x="43" y="98" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
          {/* Financial Telemetry Line */}
          <path d="M 43 126 L 56 120 L 70 128 L 86 112 L 105 116" stroke="#38D9C8" strokeWidth="1.5" fill="none" />
          <circle cx="86" cy="112" r="2" fill="#38D9C8" />
          <text x="43" y="142" fill="#38D9C8" fontSize="7" fontFamily="monospace" fontWeight="bold">
            FINANCE · GL
          </text>
        </g>

        {/* ===================================================================
            3. RIGHT FLOATING MODULE: SUPPLY CHAIN & INVENTORY
            =================================================================== */}
        <g>
          <rect
            x="340"
            y="70"
            width="85"
            height="80"
            rx="12"
            fill="url(#erpCardGrad)"
            stroke="rgba(72,139,255,0.35)"
            strokeWidth="1.2"
          />
          {/* Module Header Bar */}
          <rect x="348" y="78" width="32" height="4" rx="2" fill="#38D9C8" />
          <rect x="383" y="78" width="32" height="4" rx="2" fill="rgba(56,217,200,0.2)" />
          {/* Stock Metrics Bars */}
          <rect x="352" y="112" width="8" height="18" rx="2" fill="rgba(22,119,255,0.4)" />
          <rect x="365" y="104" width="8" height="26" rx="2" fill="rgba(22,139,255,0.6)" />
          <rect x="378" y="94" width="8" height="36" rx="2" fill="#168BFF" />
          <rect x="391" y="100" width="8" height="30" rx="2" fill="#38D9C8" />
          <text x="348" y="142" fill="#168BFF" fontSize="7" fontFamily="monospace" fontWeight="bold">
            SUPPLY · WMS
          </text>
        </g>

        {/* ===================================================================
            4. CENTER MAIN APPLICATION STAGE (AI ERP PROCESSOR CORE)
            =================================================================== */}
        <g>
          {/* Outer Ambient Glow Ring */}
          <rect
            x="160"
            y="35"
            width="140"
            height="150"
            rx="16"
            fill="none"
            stroke="url(#erpBorderGrad)"
            strokeWidth="1.5"
            filter="url(#erpHeroGlow)"
            opacity="0.8"
          />
          {/* Main Card Shell */}
          <rect
            x="160"
            y="35"
            width="140"
            height="150"
            rx="16"
            fill="url(#erpCenterGrad)"
            stroke="url(#erpBorderGrad)"
            strokeWidth="1.5"
          />

          {/* Window Title Bar */}
          <rect x="160" y="35" width="140" height="24" rx="16" fill="rgba(255,255,255,0.03)" />
          {/* Mac-style Window Controls */}
          <circle cx="174" cy="47" r="3" fill="#ff5f56" opacity="0.8" />
          <circle cx="183" cy="47" r="3" fill="#ffbd2e" opacity="0.8" />
          <circle cx="192" cy="47" r="3" fill="#27c93f" opacity="0.8" />
          <text x="210" y="50" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace">
            ERP AUTONOMOUS
          </text>

          {/* Center Circular Processor Chip Core */}
          <rect x="202" y="70" width="56" height="56" rx="14" fill="#0C1424" stroke="url(#erpBorderGrad)" strokeWidth="1.5" />
          <rect x="209" y="77" width="42" height="42" rx="10" fill="rgba(22,139,255,0.18)" stroke="rgba(56,217,200,0.5)" strokeWidth="1" strokeDasharray="3 3" />
          
          <text x="230" y="103" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            AI
          </text>

          {/* Micro Pins around Chip */}
          <line x1="216" y1="67" x2="216" y2="70" stroke="#38D9C8" strokeWidth="1.5" />
          <line x1="230" y1="67" x2="230" y2="70" stroke="#38D9C8" strokeWidth="1.5" />
          <line x1="244" y1="67" x2="244" y2="70" stroke="#38D9C8" strokeWidth="1.5" />
          <line x1="216" y1="126" x2="216" y2="129" stroke="#168BFF" strokeWidth="1.5" />
          <line x1="230" y1="126" x2="230" y2="129" stroke="#168BFF" strokeWidth="1.5" />
          <line x1="244" y1="126" x2="244" y2="129" stroke="#168BFF" strokeWidth="1.5" />

          {/* Connected Peripheral Module Badges */}
          <g>
            <rect x="175" y="142" width="48" height="18" rx="6" fill="#0E182A" stroke="rgba(72,139,255,0.4)" strokeWidth="1" />
            <text x="199" y="154" fill="#38D9C8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              LEDGER
            </text>

            <rect x="237" y="142" width="48" height="18" rx="6" fill="#0E182A" stroke="rgba(56,217,200,0.4)" strokeWidth="1" />
            <text x="261" y="154" fill="#168BFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              ORCHESTR
            </text>
          </g>

          <text x="230" y="174" fill="rgba(255,255,255,0.5)" fontSize="7" textAnchor="middle" fontFamily="monospace">
            PREDICTIVE CORE LAYER
          </text>
        </g>
      </svg>
    </div>
  );
}
