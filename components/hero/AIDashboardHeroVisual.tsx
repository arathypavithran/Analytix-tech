"use client";

import { useEffect, useRef, useState, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  Layers,
  Cpu,
  ShieldCheck,
  Rocket,
  Sparkles,
  LucideIcon,
} from "lucide-react";

interface AIDashboardHeroVisualProps {
  accentColor?: string;
  activeTabId?: string;
  highlightNodes?: string[];
}

interface FeatureHighlight {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  glowColor: string;
  posClass: string;
  floatDuration: number;
  floatY: number[];
  delay: number;
}

export default function AIDashboardHeroVisual({
  accentColor = "#7c5cff",
  activeTabId = "ai-erp",
}: AIDashboardHeroVisualProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();
  const idPrefix = useId().replace(/:/g, "-");

  // Mouse Parallax listener with spring-like smoothing
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
    };

    const el = containerRef.current;
    if (el) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (el) el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  // 5 Floating Feature Highlights - Standalone Borderless Icons + Text
  // Positioned in dedicated quadrants so they NEVER overlap the laptop or chart!
  const features: FeatureHighlight[] = [
    {
      id: "data-insights",
      title: "Data Insights",
      subtitle: "Predict. Plan. Grow.",
      icon: TrendingUp,
      iconColor: "#06b6d4",
      glowColor: "rgba(6, 182, 212, 0.75)",
      posClass: "top-2 left-1 sm:top-3 sm:left-3",
      floatDuration: 4.8,
      floatY: [-3, 3, -3],
      delay: 0.15,
    },
    {
      id: "unified-ops",
      title: "Unified Operations",
      subtitle: "Connect finance, sales, inventory and HR.",
      icon: Layers,
      iconColor: "#c58bff",
      glowColor: "rgba(197, 139, 255, 0.75)",
      posClass: "top-2 right-1 sm:top-3 sm:right-3",
      floatDuration: 5.4,
      floatY: [3, -3, 3],
      delay: 0.3,
    },
    {
      id: "automation",
      title: "Automation",
      subtitle: "Streamline workflows and reduce manual work.",
      icon: Cpu,
      iconColor: "#a78bfa",
      glowColor: "rgba(167, 139, 250, 0.75)",
      posClass: "top-[235px] -left-3 sm:-left-5 lg:-left-7",
      floatDuration: 4.5,
      floatY: [-4, 3, -4],
      delay: 0.45,
    },
    {
      id: "security",
      title: "Security",
      subtitle: "Enterprise-grade data protection.",
      icon: ShieldCheck,
      iconColor: "#22d3ee",
      glowColor: "rgba(34, 211, 238, 0.75)",
      posClass: "bottom-3 left-2 sm:bottom-4 sm:left-4",
      floatDuration: 5.2,
      floatY: [3, -3, 3],
      delay: 0.6,
    },
    {
      id: "scalable-growth",
      title: "Scalable Growth",
      subtitle: "Built for your next stage.",
      icon: Rocket,
      iconColor: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.75)",
      posClass: "bottom-3 right-1 sm:bottom-4 sm:right-3",
      floatDuration: 4.6,
      floatY: [-3, 4, -3],
      delay: 0.75,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[620px] h-[540px] sm:h-[570px] lg:h-[600px] mx-auto select-none flex items-center justify-center overflow-visible"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Container Scaler for Mobile & Tablet Responsiveness */}
      <div className="relative w-full h-full flex items-center justify-center scale-[0.74] sm:scale-[0.88] lg:scale-[0.98] xl:scale-100 origin-center transition-transform duration-300">
        {/* ===================================================================
            1. PURE SEAMLESS RADIANT GLOW (NO DARK BOXES, NO SHADOW BLOBS)
            =================================================================== */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Subtle soft colored ambient light - blends 100% naturally into page background */}
          <div
            className="absolute w-[440px] h-[400px] rounded-full blur-[100px] opacity-35 transition-colors duration-1000"
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, rgba(6,182,212,0.2) 45%, transparent 70%)`,
            }}
          />
          {/* Gentle electric cyan center light */}
          <div className="absolute w-[280px] h-[260px] rounded-full blur-[80px] bg-[#06b6d4]/15" />
        </div>

        {/* ===================================================================
            2. SVG CONNECTING LIGHT TRAILS & DIGITAL WAVES
            =================================================================== */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
          viewBox="0 0 620 580"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Gradient definitions for glowing trails */}
            <linearGradient
              id={`${idPrefix}-trail-cyan`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#7c5cff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#c58bff" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient
              id={`${idPrefix}-trail-violet`}
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#c58bff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#7c5cff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient
              id={`${idPrefix}-wave-grad`}
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.0" />
              <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#7c5cff" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#c58bff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>

            {/* Glow filter for connection trails */}
            <filter
              id={`${idPrefix}-trail-glow`}
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Digital Wave Lines behind the dashboard */}
          <g opacity="0.35">
            <path
              d="M 20 460 Q 180 435, 340 460 T 600 455"
              fill="none"
              stroke={`url(#${idPrefix}-wave-grad)`}
              strokeWidth="1.2"
            />
            <path
              d="M 40 490 Q 200 470, 360 490 T 580 485"
              fill="none"
              stroke={`url(#${idPrefix}-wave-grad)`}
              strokeWidth="1"
              strokeDasharray="4 8"
              opacity="0.65"
            />
          </g>

          {/* -------------------------------------------------------------
              THIN GLOWING CURVES CONNECTING ICONS TO DASHBOARD
              ------------------------------------------------------------- */}
          {/* Trail 1: Data Insights (Top Left) -> Laptop Screen Top-Left */}
          <g id="trail-1">
            <path
              d="M 100 55 C 160 75, 210 100, 260 130"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
              opacity="0.25"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            <path
              d="M 100 55 C 160 75, 210 100, 260 130"
              fill="none"
              stroke={`url(#${idPrefix}-trail-cyan)`}
              strokeWidth="1.5"
              strokeDasharray="3 5"
              opacity="0.9"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            {!shouldReduceMotion && (
              <circle r="2.5" fill="#ffffff" filter={`url(#${idPrefix}-trail-glow)`}>
                <animateMotion
                  path="M 100 55 C 160 75, 210 100, 260 130"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* Trail 2: Unified Operations (Top Right) -> Laptop Screen Top-Right */}
          <g id="trail-2">
            <path
              d="M 480 55 C 470 80, 480 105, 490 130"
              fill="none"
              stroke="#c58bff"
              strokeWidth="3"
              opacity="0.25"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            <path
              d="M 480 55 C 470 80, 480 105, 490 130"
              fill="none"
              stroke={`url(#${idPrefix}-trail-violet)`}
              strokeWidth="1.5"
              strokeDasharray="3 5"
              opacity="0.9"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            {!shouldReduceMotion && (
              <circle r="2.5" fill="#ffffff" filter={`url(#${idPrefix}-trail-glow)`}>
                <animateMotion
                  path="M 480 55 C 470 80, 480 105, 490 130"
                  dur="3.4s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* Trail 3: Automation (Mid Left) -> Laptop Screen Left Edge */}
          <g id="trail-3">
            <path
              d="M 120 260 C 165 260, 200 255, 235 250"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="3"
              opacity="0.25"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            <path
              d="M 120 260 C 165 260, 200 255, 235 250"
              fill="none"
              stroke={`url(#${idPrefix}-trail-cyan)`}
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.85"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            {!shouldReduceMotion && (
              <circle r="2.5" fill="#ffffff" filter={`url(#${idPrefix}-trail-glow)`}>
                <animateMotion
                  path="M 120 260 C 165 260, 200 255, 235 250"
                  dur="2.7s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* Trail 4: Security (Bottom Left) -> Laptop Base Left Chassis */}
          <g id="trail-4">
            <path
              d="M 90 490 C 145 470, 195 440, 250 410"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              opacity="0.25"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            <path
              d="M 90 490 C 145 470, 195 440, 250 410"
              fill="none"
              stroke={`url(#${idPrefix}-trail-cyan)`}
              strokeWidth="1.5"
              strokeDasharray="3 5"
              opacity="0.9"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            {!shouldReduceMotion && (
              <circle r="2.5" fill="#ffffff" filter={`url(#${idPrefix}-trail-glow)`}>
                <animateMotion
                  path="M 90 490 C 145 470, 195 440, 250 410"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* Trail 5: Scalable Growth (Bottom Right) -> Laptop Base Right Chassis */}
          <g id="trail-5">
            <path
              d="M 490 490 C 495 465, 495 435, 485 410"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              opacity="0.25"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            <path
              d="M 490 490 C 495 465, 495 435, 485 410"
              fill="none"
              stroke={`url(#${idPrefix}-trail-violet)`}
              strokeWidth="1.5"
              strokeDasharray="3 5"
              opacity="0.9"
              filter={`url(#${idPrefix}-trail-glow)`}
            />
            {!shouldReduceMotion && (
              <circle r="2.5" fill="#ffffff" filter={`url(#${idPrefix}-trail-glow)`}>
                <animateMotion
                  path="M 490 490 C 495 465, 495 435, 485 410"
                  dur="3.6s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* Floating micro data points */}
          <circle cx="190" cy="110" r="1.5" fill="#06b6d4" opacity="0.65" />
          <circle cx="450" cy="100" r="1.5" fill="#c58bff" opacity="0.6" />
          <circle cx="160" cy="340" r="2" fill="#06b6d4" opacity="0.5" />
          <circle cx="470" cy="350" r="2" fill="#c58bff" opacity="0.5" />
        </svg>

        {/* ===================================================================
            3. MAIN 3D COMPOSITION: REALISTIC FLOATING LAPTOP & AI CORE
            Shifted smoothly to the right for perfect balance
            =================================================================== */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: shouldReduceMotion ? 0 : [0, -6, 0],
            scale: 1,
            rotateX: shouldReduceMotion ? 10 : 10 - mousePos.y * 4,
            rotateY: shouldReduceMotion ? -8 : -8 + mousePos.x * 5,
            rotateZ: 1,
          }}
          transition={{
            opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            y: shouldReduceMotion
              ? { duration: 0 }
              : { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { type: "spring", stiffness: 140, damping: 20 },
            rotateY: { type: "spring", stiffness: 140, damping: 20 },
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="relative z-20 flex flex-col items-center justify-center translate-x-12 sm:translate-x-16 lg:translate-x-20"
        >
          {/* Floating Holographic AI Symbol near Laptop Screen (Top Right Corner) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? false
                : {
                    scale: [1, 1.08, 1],
                    y: [-3, 3, -3],
                    rotate: [0, 4, -4, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-7 right-2 sm:-top-8 sm:right-4 z-30 flex items-center justify-center"
            style={{
              transform: "translateZ(45px)",
            }}
          >
            {/* Pulsing glow aura */}
            <div className="absolute inset-0 w-13 h-13 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#c58bff] blur-md opacity-70 animate-pulse" />

            {/* Rotating dashed orbital rings */}
            <div
              className="absolute -inset-2 rounded-full border border-dashed border-[#06b6d4]/60 animate-spin pointer-events-none"
              style={{ animationDuration: "16s" }}
            />
            <div
              className="absolute -inset-3.5 rounded-full border border-[#c58bff]/40 animate-spin pointer-events-none"
              style={{ animationDuration: "24s", animationDirection: "reverse" }}
            />

            {/* AI Insignia Core */}
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#121926] via-[#1a1738] to-[#251e4a] border border-[#a78bfa]/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6),0_0_30px_rgba(124,92,255,0.4)]">
              <Sparkles className="w-5 h-5 text-[#06b6d4] drop-shadow-[0_0_6px_#06b6d4]" />
              <div className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-[#25D366] shadow-[0_0_6px_#25D366]" />
            </div>
          </motion.div>

          {/* -------------------------------------------------------------
              LAPTOP DISPLAY (THE SCREEN LID)
              ------------------------------------------------------------- */}
          <div
            className="relative w-[300px] sm:w-[330px] lg:w-[345px] h-[200px] sm:h-[220px] lg:h-[230px] rounded-xl p-2 transition-all duration-300"
            style={{
              background:
                "linear-gradient(145deg, #181d2c 0%, #0c0f18 60%, #151828 100%)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              boxShadow:
                "0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(124, 92, 255, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
              transform: "translateZ(18px)",
            }}
          >
            {/* Top Bezel Notch with Camera Lens & Active Indicator */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
              <div className="h-1.5 w-1.5 rounded-full bg-[#05070c] border border-white/20" />
              <div className="h-1 w-1 rounded-full bg-[#06b6d4] shadow-[0_0_4px_#06b6d4]" />
            </div>

            {/* Screen Inner Display Surface */}
            <div className="relative w-full h-full rounded-lg bg-[#080b14] border border-white/10 overflow-hidden flex flex-col p-2 sm:p-2.5 text-white">
              {/* Glossy screen glass reflection sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-transparent pointer-events-none z-20" />

              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-1 font-mono text-[8px] sm:text-[8.5px] font-bold text-white/75 tracking-wider truncate max-w-[170px]">
                    ANALYTIX AI // {activeTabId ? activeTabId.toUpperCase().replace(/-/g, " ") : "CORE"} v4.2
                  </span>
                </div>

                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  <span className="h-1 w-1 rounded-full bg-[#06b6d4] animate-pulse" />
                  <span className="font-mono text-[7.5px] sm:text-[8px] font-semibold text-[#06b6d4]">
                    LIVE SYNC
                  </span>
                </div>
              </div>

              {/* Top Metrics Row - AI Analytics KPI Chips */}
              <div className="grid grid-cols-3 gap-1.5 mb-1.5">
                <div className="p-1 rounded bg-white/[0.04] border border-white/5">
                  <div className="text-[6.5px] sm:text-[7px] font-mono text-white/50 tracking-wider">
                    AI ACCURACY
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-white">
                      99.4%
                    </span>
                    <span className="text-[7px] font-mono font-semibold text-[#25D366]">
                      +3.8%
                    </span>
                  </div>
                </div>

                <div className="p-1 rounded bg-white/[0.04] border border-white/5">
                  <div className="text-[6.5px] sm:text-[7px] font-mono text-white/50 tracking-wider">
                    WORKFLOWS
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-white">
                      18.4K
                    </span>
                    <span className="text-[7px] font-mono font-semibold text-[#06b6d4]">
                      AUTO
                    </span>
                  </div>
                </div>

                <div className="p-1 rounded bg-white/[0.04] border border-white/5">
                  <div className="text-[6.5px] sm:text-[7px] font-mono text-white/50 tracking-wider">
                    GCC SECURITY
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-white">
                      100%
                    </span>
                    <span className="text-[7px] font-mono font-semibold text-[#c58bff]">
                      SHIELD
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Visual: AI Predictive Trend Curve + Modular Metrics */}
              <div className="relative flex-1 grid grid-cols-12 gap-1.5 items-center">
                {/* Left Chart (7 cols) */}
                <div className="col-span-7 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[7px] font-mono text-white/40 mb-0.5">
                    <span>PREDICTIVE CURVE</span>
                    <span className="text-[#06b6d4]">● OPTIMAL</span>
                  </div>

                  {/* SVG Area & Trend Chart */}
                  <div className="relative w-full h-[54px] sm:h-[62px] bg-white/[0.02] rounded border border-white/5 overflow-hidden flex items-end px-1">
                    {/* Subtle Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none opacity-20">
                      <div className="w-full border-b border-dashed border-white/40" />
                      <div className="w-full border-b border-dashed border-white/40" />
                      <div className="w-full border-b border-dashed border-white/40" />
                    </div>

                    <svg
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 160 60"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={`${idPrefix}-chart-fill`}
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Gradient fill beneath curve */}
                      <path
                        d="M 0 52 Q 25 45, 50 34 T 100 22 T 140 10 L 160 6 L 160 60 L 0 60 Z"
                        fill={`url(#${idPrefix}-chart-fill)`}
                      />

                      {/* Cyan primary curve */}
                      <path
                        d="M 0 52 Q 25 45, 50 34 T 100 22 T 140 10 L 160 6"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2"
                      />

                      {/* Violet secondary comparison curve */}
                      <path
                        d="M 0 56 Q 30 52, 60 44 T 110 36 T 160 20"
                        fill="none"
                        stroke="#c58bff"
                        strokeWidth="1.2"
                        strokeDasharray="2 3"
                        opacity="0.7"
                      />

                      {/* Pulsing milestone node */}
                      <circle cx="140" cy="10" r="2.5" fill="#ffffff" />
                      <circle
                        cx="140"
                        cy="10"
                        r="5.5"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="1.2"
                        className="animate-ping"
                      />
                    </svg>
                  </div>
                </div>

                {/* Right Telemetry Column (5 cols) */}
                <div className="col-span-5 h-full flex flex-col justify-between">
                  <div className="text-[7px] font-mono text-white/40 mb-0.5">
                    MODULE TELEMETRY
                  </div>

                  {/* 4 Mini Progress Indicators */}
                  <div className="space-y-1">
                    <div>
                      <div className="flex justify-between text-[6.5px] font-mono text-white/70">
                        <span>ERP CORE</span>
                        <span className="text-[#06b6d4]">98%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[98%] h-full bg-gradient-to-r from-[#06b6d4] to-[#7c5cff] rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[6.5px] font-mono text-white/70">
                        <span>FINANCE AI</span>
                        <span className="text-[#c58bff]">94%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[94%] h-full bg-gradient-to-r from-[#7c5cff] to-[#c58bff] rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[6.5px] font-mono text-white/70">
                        <span>INVENTORY</span>
                        <span className="text-[#25D366]">99%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[99%] h-full bg-[#25D366] rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[6.5px] font-mono text-white/70">
                        <span>AUTOMATION</span>
                        <span className="text-[#38bdf8]">96%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[96%] h-full bg-cyan-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Live Activity Feed Strip */}
              <div className="pt-1 mt-0.5 border-t border-white/10 flex items-center justify-between text-[7px] font-mono text-white/50">
                <span className="truncate">
                  ● [AUTO] Real-time neural sync active
                </span>
                <span className="text-[#06b6d4] font-semibold flex-shrink-0 ml-1">
                  12ms
                </span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              LAPTOP BASE (KEYBOARD DECK & CHASSIS)
              Directly connected to display for realistic unibody look
              ------------------------------------------------------------- */}
          <div
            className="relative w-[315px] sm:w-[345px] lg:w-[360px] h-[95px] sm:h-[110px] lg:h-[115px] rounded-b-xl -mt-1.5 p-2 pt-2.5 transition-all duration-300"
            style={{
              background:
                "linear-gradient(180deg, #181d2a 0%, #0d101a 60%, #080a12 100%)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              borderTop: "1px solid rgba(6, 182, 212, 0.35)",
              boxShadow:
                "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 35px rgba(6, 182, 212, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
              transform:
                "rotateX(50deg) translateY(-6px) translateZ(-4px)",
            }}
          >
            {/* Recessed Keyboard Well with Backlit Ambient Light */}
            <div className="w-full h-[54px] sm:h-[62px] rounded-md bg-black/45 border border-white/5 p-1 flex flex-col justify-between shadow-inner">
              {/* Keyboard Rows of Chiclet Keys */}
              {[14, 13, 12, 10].map((count, rowIdx) => (
                <div key={rowIdx} className="flex gap-0.5 sm:gap-1 justify-center w-full">
                  {Array.from({ length: count }).map((_, keyIdx) => (
                    <div
                      key={keyIdx}
                      className="flex-1 h-1.5 sm:h-2 rounded-[1.5px] bg-[#1a1f30] border border-white/[0.08]"
                      style={{
                        boxShadow:
                          rowIdx === 1 && (keyIdx === 4 || keyIdx === 5)
                            ? "0 0 5px rgba(6, 182, 212, 0.4)"
                            : "none",
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Trackpad with Laser-Etched Accent Border */}
            <div className="w-20 sm:w-24 h-4 sm:h-5 mx-auto mt-1 rounded bg-[#131724] border border-white/10 shadow-inner" />

            {/* Front Edge Glowing Status Slit */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-14 h-[1.5px] rounded-full bg-cyan-400/80 shadow-[0_0_6px_#06b6d4]" />
          </div>

          {/* Clean Floating Ambient Underglow Right Under Laptop Base */}
          <div
            className="absolute -bottom-5 w-[280px] sm:w-[320px] h-[45px] rounded-full blur-xl pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, rgba(124,92,255,0.15) 50%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* ===================================================================
            4. FIVE FLOATING BORDERLESS FEATURE HIGHLIGHTS
            (No rectangular cards, no boxes, no container borders)
            =================================================================== */}
        {features.map((feat) => {
          const Icon = feat.icon;

          return (
            <motion.div
              key={feat.id}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 14, scale: 0.92 }
              }
              animate={{
                opacity: 1,
                scale: 1,
                y: shouldReduceMotion ? 0 : feat.floatY,
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: feat.delay,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 0.6,
                  delay: feat.delay,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: feat.floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
              }}
              className={`absolute z-30 flex items-center gap-2 sm:gap-2.5 cursor-default group pointer-events-auto ${feat.posClass}`}
            >
              {/* Standalone Glowing Icon with Soft Halo */}
              <div className="relative flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                {/* Soft Radial Glow behind icon */}
                <div
                  className="absolute inset-0 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${feat.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Translucent Circular Disc for Icon */}
                <div
                  className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.18) 0%, rgba(18,25,38,0.85) 100%)",
                    boxShadow: `0 0 16px ${feat.glowColor}, 0 4px 12px rgba(0,0,0,0.5)`,
                  }}
                >
                  <Icon
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300"
                    style={{
                      color: feat.iconColor,
                      filter: `drop-shadow(0 0 6px ${feat.iconColor})`,
                    }}
                  />
                </div>
              </div>

              {/* Standalone Typography - Borderless, sits directly on background */}
              <div className="flex flex-col text-left">
                <span className="font-heading text-xs sm:text-sm font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {feat.title}
                </span>
                <span className="text-[10px] sm:text-xs text-[#b9b4cc] font-medium leading-tight max-w-[125px] sm:max-w-[150px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {feat.subtitle}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
