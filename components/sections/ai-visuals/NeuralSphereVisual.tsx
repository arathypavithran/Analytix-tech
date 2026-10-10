"use client";

import { motion } from "framer-motion";

export default function NeuralSphereVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden pointer-events-none">
      {/* Background ambient radial glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-radial from-[#1677FF]/35 via-[#38D9C8]/15 to-transparent blur-3xl"
      />

      <svg
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[260px] max-h-[260px]"
      >
        <defs>
          <filter id="sphereGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="sphereGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38D9C8" />
            <stop offset="50%" stopColor="#168BFF" />
            <stop offset="100%" stopColor="#1677FF" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="sphereGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1677FF" />
            <stop offset="100%" stopColor="#38D9C8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Central Core Glow */}
        <circle
          cx="130"
          cy="130"
          r="48"
          fill="#1677FF"
          opacity="0.15"
          filter="url(#sphereGlow)"
        />

        {/* Outer Circular Boundary */}
        <circle
          cx="130"
          cy="130"
          r="95"
          stroke="rgba(72,139,255,0.18)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* ROTATING WIREFRAME RINGS */}
        {/* Ring 1 - Vertical Ellipse */}
        <motion.ellipse
          cx="130"
          cy="130"
          rx="45"
          ry="92"
          stroke="url(#sphereGrad1)"
          strokeWidth="1.4"
          fill="none"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: "130px", originY: "130px" }}
        />

        {/* Ring 2 - Angled Ellipse 60deg */}
        <motion.ellipse
          cx="130"
          cy="130"
          rx="75"
          ry="92"
          stroke="url(#sphereGrad2)"
          strokeWidth="1.4"
          fill="none"
          animate={{
            rotate: [60, 420],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: "130px", originY: "130px" }}
        />

        {/* Ring 3 - Horizontal Latitudinal Ellipse */}
        <motion.ellipse
          cx="130"
          cy="130"
          rx="92"
          ry="38"
          stroke="url(#sphereGrad1)"
          strokeWidth="1.2"
          strokeOpacity="0.75"
          fill="none"
          animate={{
            rotate: [-30, 330],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: "130px", originY: "130px" }}
        />

        {/* Ring 4 - Counter-rotating Equatorial Ring */}
        <motion.ellipse
          cx="130"
          cy="130"
          rx="90"
          ry="65"
          stroke="rgba(56,217,200,0.6)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: "130px", originY: "130px" }}
        />

        {/* NEURAL NODES & SPARKLE POINTS */}
        <g fill="#38D9C8">
          <circle cx="130" cy="38" r="3" filter="url(#sphereGlow)" />
          <circle cx="130" cy="222" r="3" filter="url(#sphereGlow)" />
          <circle cx="38" cy="130" r="2.5" />
          <circle cx="222" cy="130" r="2.5" />
          <circle cx="85" cy="75" r="2" fill="#1677FF" />
          <circle cx="175" cy="185" r="2" fill="#1677FF" />
          <circle cx="180" cy="80" r="2.5" />
          <circle cx="80" cy="180" r="2.5" />
        </g>

        {/* Central Neural Hub Node */}
        <circle cx="130" cy="130" r="12" fill="#0C1424" stroke="#38D9C8" strokeWidth="1.5" />
        <circle cx="130" cy="130" r="5" fill="#38D9C8" filter="url(#sphereGlow)" />
      </svg>
    </div>
  );
}
