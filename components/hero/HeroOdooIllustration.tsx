"use client";

import { motion } from "framer-motion";

export default function HeroOdooIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Ambient violet/purple background accent glow with floating pulse */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-radial from-[#7c5cff]/25 via-[#a78bfa]/12 to-transparent blur-2xl pointer-events-none"
      />

      <svg
        viewBox="0 0 460 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="odooHeroGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="odooBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c5cff" />
          </linearGradient>

          <linearGradient id="odooCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#151329" />
            <stop offset="100%" stopColor="#0B0916" />
          </linearGradient>

          <linearGradient id="odooCenterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1B1736" />
            <stop offset="100%" stopColor="#0E0B1F" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            1. DATA BUS CONNECTORS & CIRCUIT TRACES (ACCENT: #a78bfa & #7c5cff)
            =================================================================== */}
        <g stroke="rgba(167,139,250,0.25)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          {/* Top-Left Module connector */}
          <path d="M 45 45 L 105 45 L 140 75 L 175 75" />
          {/* Bottom-Left Module connector */}
          <path d="M 55 175 L 115 175 L 145 145 L 175 145" />
          {/* Top-Right Module connector */}
          <path d="M 415 45 L 355 45 L 320 75 L 285 75" />
          {/* Bottom-Right Module connector */}
          <path d="M 405 175 L 345 175 L 315 145 L 285 145" />
        </g>

        {/* Pulsing Signal Nodes along traces */}
        <circle cx="105" cy="45" r="2.5" fill="#a78bfa" />
        <circle cx="355" cy="45" r="2.5" fill="#c084fc" />
        <circle cx="115" cy="175" r="2.5" fill="#7c5cff" />
        <circle cx="345" cy="175" r="2.5" fill="#a78bfa" />

        {/* ===================================================================
            2. LEFT FLOATING MODULE: CRM & SALES
            =================================================================== */}
        <g>
          <rect
            x="35"
            y="70"
            width="85"
            height="80"
            rx="12"
            fill="url(#odooCardGrad)"
            stroke="rgba(167,139,250,0.3)"
            strokeWidth="1.2"
          />
          {/* Module Header Bar */}
          <rect x="43" y="78" width="22" height="4" rx="2" fill="#a78bfa" />
          <rect x="68" y="78" width="40" height="4" rx="2" fill="rgba(167,139,250,0.2)" />
          {/* Data Lines */}
          <rect x="43" y="90" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
          <rect x="43" y="98" width="45" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
          {/* Mini Chart */}
          <path d="M 43 130 L 55 122 L 68 126 L 82 114 L 105 118" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
          <circle cx="82" cy="114" r="2" fill="#c084fc" />
          <text x="43" y="142" fill="#a78bfa" fontSize="7" fontFamily="monospace" fontWeight="bold">
            CRM · SALES
          </text>
        </g>

        {/* ===================================================================
            3. RIGHT FLOATING MODULE: INVENTORY & FINANCE
            =================================================================== */}
        <g>
          <rect
            x="340"
            y="70"
            width="85"
            height="80"
            rx="12"
            fill="url(#odooCardGrad)"
            stroke="rgba(167,139,250,0.3)"
            strokeWidth="1.2"
          />
          {/* Module Header Bar */}
          <rect x="348" y="78" width="28" height="4" rx="2" fill="#7c5cff" />
          <rect x="380" y="78" width="35" height="4" rx="2" fill="rgba(167,139,250,0.2)" />
          {/* Bar Chart Visualization */}
          <rect x="352" y="115" width="8" height="15" rx="2" fill="rgba(124,92,255,0.4)" />
          <rect x="365" y="105" width="8" height="25" rx="2" fill="rgba(167,139,250,0.6)" />
          <rect x="378" y="95" width="8" height="35" rx="2" fill="#a78bfa" />
          <rect x="391" y="102" width="8" height="28" rx="2" fill="#c084fc" />
          <text x="348" y="142" fill="#c084fc" fontSize="7" fontFamily="monospace" fontWeight="bold">
            STOCK · 360°
          </text>
        </g>

        {/* ===================================================================
            4. CENTER MAIN APPLICATION STAGE (ODOO 360 CORE INTERFACE)
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
            stroke="url(#odooBorderGrad)"
            strokeWidth="1.5"
            filter="url(#odooHeroGlow)"
            opacity="0.75"
          />
          {/* Main Card Shell */}
          <rect
            x="160"
            y="35"
            width="140"
            height="150"
            rx="16"
            fill="url(#odooCenterGrad)"
            stroke="url(#odooBorderGrad)"
            strokeWidth="1.5"
          />

          {/* Window Title Bar */}
          <rect x="160" y="35" width="140" height="24" rx="16" fill="rgba(255,255,255,0.03)" />
          {/* Mac-style Window Controls */}
          <circle cx="174" cy="47" r="3" fill="#ff5f56" opacity="0.8" />
          <circle cx="183" cy="47" r="3" fill="#ffbd2e" opacity="0.8" />
          <circle cx="192" cy="47" r="3" fill="#27c93f" opacity="0.8" />
          <text x="210" y="50" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace">
            ANALYTIX 360
          </text>

          {/* Center Circular Odoo/AI Connector Hub */}
          <circle cx="230" cy="98" r="28" fill="#140f28" stroke="#a78bfa" strokeWidth="1.5" />
          <circle cx="230" cy="98" r="24" fill="rgba(124,92,255,0.15)" stroke="rgba(192,132,252,0.4)" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Central Logo / Pulse Core */}
          <circle cx="230" cy="98" r="14" fill="url(#odooBorderGrad)" />
          <text x="230" y="102" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            360
          </text>

          {/* Connected Peripheral Module Badges */}
          <g>
            <rect x="175" y="142" width="48" height="18" rx="6" fill="#181330" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />
            <text x="199" y="154" fill="#a78bfa" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              HR/WPS
            </text>

            <rect x="237" y="142" width="48" height="18" rx="6" fill="#181330" stroke="rgba(192,132,252,0.4)" strokeWidth="1" />
            <text x="261" y="154" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              ZATCA
            </text>
          </g>

          <text x="230" y="174" fill="rgba(255,255,255,0.5)" fontSize="7" textAnchor="middle" fontFamily="monospace">
            AI-ENHANCED ODOO CORE
          </text>
        </g>
      </svg>
    </div>
  );
}
