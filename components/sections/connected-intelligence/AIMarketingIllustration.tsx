"use client";

import { motion } from "framer-motion";

export default function AIMarketingIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Central ambient glow with breathing motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.65, 0.9, 0.65],
        }}
        transition={{
          duration: 4.8,
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
          <filter id="aiMktHubGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="mktHubRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9C8" />
            <stop offset="50%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#1677FF" />
          </linearGradient>

          <linearGradient id="mktHubCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#101828" />
            <stop offset="100%" stopColor="#060911" />
          </linearGradient>
        </defs>

        {/* ===================================================================
            1. RADIAL CONNECTOR TRACES FROM CENTER (170, 110)
            =================================================================== */}
        <g stroke="rgba(72,139,255,0.22)" strokeWidth="1.2" strokeLinecap="round">
          {/* Top-Left: to ADS (80, 52) */}
          <line x1="170" y1="110" x2="80" y2="52" />
          {/* Top-Right: to Chart (260, 52) */}
          <line x1="170" y1="110" x2="260" y2="52" />
          {/* Middle-Left: to WWW (52, 110) */}
          <line x1="170" y1="110" x2="52" y2="110" />
          {/* Middle-Right: to Location (288, 110) */}
          <line x1="170" y1="110" x2="288" y2="110" />
          {/* Bottom-Left: to CRM (80, 168) */}
          <line x1="170" y1="110" x2="80" y2="168" />
          {/* Bottom-Right: to AI (260, 168) */}
          <line x1="170" y1="110" x2="260" y2="168" />

          {/* Horizontal cross-lines on satellites */}
          <line x1="30" y1="52" x2="56" y2="52" strokeDasharray="2 2" />
          <line x1="284" y1="52" x2="310" y2="52" strokeDasharray="2 2" />
          <line x1="30" y1="168" x2="56" y2="168" strokeDasharray="2 2" />
          <line x1="284" y1="168" x2="310" y2="168" strokeDasharray="2 2" />
        </g>

        {/* Ambient dust / sparkle particles around central growth hub */}
        <g fill="#38D9C8" opacity="0.65">
          <circle cx="140" cy="85" r="1.2" />
          <circle cx="200" cy="82" r="1.2" />
          <circle cx="135" cy="135" r="1" />
          <circle cx="205" cy="140" r="1.5" />
          <circle cx="170" cy="65" r="1" fill="#168BFF" />
          <circle cx="170" cy="155" r="1" fill="#168BFF" />
        </g>

        {/* ===================================================================
            2. CENTRAL GLOWING MARKETING INTELLIGENCE HUB (170, 110)
            =================================================================== */}
        <circle
          cx="170"
          cy="110"
          r="46"
          stroke="url(#mktHubRingGrad)"
          strokeWidth="3"
          opacity="0.35"
          filter="url(#aiMktHubGlow)"
        />

        <circle
          cx="170"
          cy="110"
          r="46"
          stroke="url(#mktHubRingGrad)"
          strokeWidth="1.8"
          opacity="0.85"
        />

        <circle
          cx="170"
          cy="110"
          r="38"
          fill="url(#mktHubCoreGrad)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.2"
        />

        {/* Central Geometric Monogram */}
        <g transform="translate(156, 96)" stroke="#F5F8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 6 4 L 14 12 L 22 4" stroke="#38D9C8" strokeWidth="2" />
          <path d="M 14 12 L 14 24" stroke="#168BFF" strokeWidth="2" />
          <path d="M 6 24 L 14 16 L 22 24" stroke="#38D9C8" strokeWidth="2" />
          <circle cx="6" cy="4" r="1.5" fill="#38D9C8" />
          <circle cx="22" cy="4" r="1.5" fill="#38D9C8" />
          <circle cx="6" cy="24" r="1.5" fill="#38D9C8" />
          <circle cx="22" cy="24" r="1.5" fill="#38D9C8" />
        </g>

        {/* ===================================================================
            3. SURROUNDING SATELLITES (6 NODES)
            =================================================================== */}

        {/* 1. TOP-LEFT: "ADS" Campaign Pill */}
        <g transform="translate(60, 42)">
          <rect
            x="0"
            y="0"
            width="40"
            height="20"
            rx="10"
            fill="#090E19"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.2"
          />
          <text
            x="20"
            y="14"
            textAnchor="middle"
            fill="#F5F8FF"
            fontSize="9"
            fontWeight="700"
            fontFamily="system-ui, monospace"
            letterSpacing="0.8"
          >
            ADS
          </text>
        </g>

        {/* 2. TOP-RIGHT: Analytics / Revenue Chart Circle */}
        <g transform="translate(247, 39)">
          <circle cx="13" cy="13" r="13" fill="#090E19" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
          <g transform="translate(6, 6)" stroke="#38D9C8" strokeWidth="1.3" strokeLinecap="round">
            <line x1="2" y1="12" x2="2" y2="8" />
            <line x1="7" y1="12" x2="7" y2="4" />
            <line x1="12" y1="12" x2="12" y2="1" />
          </g>
        </g>

        {/* 3. MIDDLE-LEFT: "WWW" / Omnichannel Reach Circle */}
        <g transform="translate(39, 97)">
          <circle cx="13" cy="13" r="13" fill="#090E19" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
          <text
            x="13"
            y="16"
            textAnchor="middle"
            fill="#96A8C2"
            fontSize="7.5"
            fontWeight="700"
            fontFamily="monospace"
            letterSpacing="0.2"
          >
            WWW
          </text>
        </g>

        {/* 4. MIDDLE-RIGHT: Geo / Audience Pin Circle */}
        <g transform="translate(275, 97)">
          <circle cx="13" cy="13" r="13" fill="#090E19" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
          <g transform="translate(8, 6)" stroke="#168BFF" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 5 1 C 2.8 1 1 2.8 1 5 C 1 8 5 12 5 12 C 5 12 9 8 9 5 C 9 2.8 7.2 1 5 1 Z" />
            <circle cx="5" cy="5" r="1.5" fill="#168BFF" />
          </g>
        </g>

        {/* 5. BOTTOM-LEFT: "CRM" Leads Pill */}
        <g transform="translate(60, 158)">
          <rect
            x="0"
            y="0"
            width="40"
            height="20"
            rx="10"
            fill="#090E19"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.2"
          />
          <text
            x="20"
            y="14"
            textAnchor="middle"
            fill="#F5F8FF"
            fontSize="9"
            fontWeight="700"
            fontFamily="system-ui, monospace"
            letterSpacing="0.8"
          >
            CRM
          </text>
        </g>

        {/* 6. BOTTOM-RIGHT: "AI" Intelligence Pill */}
        <g transform="translate(240, 158)">
          <rect
            x="0"
            y="0"
            width="40"
            height="20"
            rx="10"
            fill="#090E19"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.2"
          />
          <text
            x="20"
            y="14"
            textAnchor="middle"
            fill="#38D9C8"
            fontSize="9"
            fontWeight="700"
            fontFamily="system-ui, monospace"
            letterSpacing="0.8"
          >
            AI
          </text>
        </g>
      </svg>
    </div>
  );
}
