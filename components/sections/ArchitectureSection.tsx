"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Cpu,
  Layers,
  Workflow,
  ShieldCheck,
  Megaphone,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ARCHITECTURE_NODES } from "@/lib/content";

const ICON_MAP: Record<string, any> = {
  Database,
  Cpu,
  Layers,
  Workflow,
  ShieldCheck,
  BarChart: Megaphone,
  Sparkles,
};

// Detailed metadata for each architecture node to show on active selection
const NODE_DETAILS: Record<
  string,
  {
    category: string;
    description: string;
    specs: string[];
  }
> = {
  data: {
    category: "Ingestion & Normalization",
    description:
      "Connects ERP databases, APIs, IoT sensors, and unstructured documents into a real-time event pipeline.",
    specs: ["Sub-50ms sync", "Zero-loss buffering", "Sovereign data residency"],
  },
  ai: {
    category: "Autonomous Reasoning Core",
    description:
      "Predictive machine learning models and domain-tuned LLMs parse business intent and formulate actions.",
    specs: ["Multi-model ensemble", "Continuous RAG checks", "Explainable telemetry"],
  },
  erp: {
    category: "Operational System of Record",
    description:
      "Unified ERP backbone and Odoo modular workflows maintaining single source of truth across operations.",
    specs: ["ZATCA e-invoicing", "Bi-directional ledger sync", "Zero manual re-entry"],
  },
  automation: {
    category: "Execution Engine",
    description:
      "Cross-department autonomous robotic and API workflows eliminating manual administrative friction.",
    specs: ["Event-driven triggers", "Smart retry handlers", "End-to-end audit trails"],
  },
  security: {
    category: "Sovereign Cyber Shield",
    description:
      "Perimeter defense, Aramco SCCC compliance, Zero-Trust access verification, and 24/7 threat shielding.",
    specs: ["Aramco SCCC certified", "Air-gapped private LLMs", "Hardware encryption"],
  },
  marketing: {
    category: "Growth & Demand Intelligence",
    description:
      "Autonomous campaign optimization, lead scoring, audience targeting, and real-time ROI attribution.",
    specs: ["Predictive scoring", "Omnichannel reach", "Dynamic spend allocation"],
  },
  bi: {
    category: "Strategic Executive Radar",
    description:
      "Predictive financial analytics, supply chain forecasting, and executive board intelligence dashboards.",
    specs: ["Real-time KPI boards", "Scenario simulations", "Automated alert feeds"],
  },
};

export default function ArchitectureSection() {
  // Center active node (defaults to AI Core: index 1)
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalNodes = ARCHITECTURE_NODES.length;

  // Auto-carousel timer (every 4s if user is not hovering)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalNodes);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalNodes]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalNodes) % totalNodes);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalNodes);
  };

  const activeNode = ARCHITECTURE_NODES[activeIndex];
  const activeDetail = NODE_DETAILS[activeNode.id] || NODE_DETAILS.ai;

  return (
    <section
      className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden"
      id="architecture"
    >
      {/* Background Volumetric Beam & Ambient Flare */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-r from-[#1677FF]/12 via-[#38D9C8]/18 to-[#168BFF]/12 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Intelligent Business Architecture"
          title="One Intelligent Layer Across Your Business"
          description="Synchronize all enterprise data sources through an embedded AI engine that orchestrates ERP records, automates workflows, enforces security, and surfaces strategic intelligence."
        />

        {/* ===================================================================
            SEMI-CIRCLE / RAINBOW SHAPE ARC CAROUSEL
            Cards arranged along an upward convex semi-circle curve
            with radial tilt, elevations, and smooth continuous motion
            =================================================================== */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mt-12 sm:mt-16 w-full flex flex-col items-center select-none"
        >
          {/* Controls: Prev / Next Buttons */}
          <div className="w-full flex items-center justify-between max-w-4xl px-4 mb-2 z-30">
            <button
              onClick={handlePrev}
              aria-label="Previous Architecture Stage"
              className="h-10 w-10 rounded-full bg-[#080E1C]/90 border border-white/[0.12] text-[#96A8C2] hover:text-white hover:border-[#168BFF] hover:shadow-[0_0_20px_rgba(22,139,255,0.35)] flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Stage Counter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {ARCHITECTURE_NODES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-gradient-to-r from-[#168BFF] to-[#38D9C8] shadow-[0_0_10px_#38D9C8]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to stage ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Architecture Stage"
              className="h-10 w-10 rounded-full bg-[#080E1C]/90 border border-white/[0.12] text-[#96A8C2] hover:text-white hover:border-[#168BFF] hover:shadow-[0_0_20px_rgba(22,139,255,0.35)] flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* ARC STAGE CONTAINER (Desktop & Tablet) */}
          <div className="relative w-full max-w-6xl h-[390px] sm:h-[440px] md:h-[480px] flex items-center justify-center overflow-visible">
            {/* 1. BACKGROUND GLOWING RAINBOW ARCH BASE */}
            <div className="absolute inset-x-0 bottom-4 sm:bottom-6 h-[240px] sm:h-[300px] pointer-events-none flex items-end justify-center">
              <svg
                viewBox="0 0 1000 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-5xl h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1677FF" stopOpacity="0.05" />
                    <stop offset="25%" stopColor="#168BFF" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#38D9C8" stopOpacity="0.9" />
                    <stop offset="75%" stopColor="#168BFF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1677FF" stopOpacity="0.05" />
                  </linearGradient>

                  <linearGradient id="domeFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0B1324" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#04060C" stopOpacity="0.95" />
                  </linearGradient>

                  <filter id="rainbowGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Shaded Convex Dome Fill under the Rainbow Arc */}
                <path
                  d="M 50 320 Q 500 20 950 320 Z"
                  fill="url(#domeFillGrad)"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                />

                {/* Glowing Outer Rainbow Arc Line */}
                <path
                  d="M 60 320 Q 500 20 940 320"
                  stroke="url(#rainbowGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#rainbowGlow)"
                  opacity="0.45"
                />
                <path
                  d="M 60 320 Q 500 20 940 320"
                  stroke="url(#rainbowGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Sub-arch accent trail */}
                <path
                  d="M 120 320 Q 500 65 880 320"
                  stroke="rgba(72,139,255,0.2)"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* 2. THE 7 ARCHITECTURE CARDS POSITIONED ALONG THE SEMI-CIRCLE ARC */}
            {ARCHITECTURE_NODES.map((node, idx) => {
              const Icon = ICON_MAP[node.icon] || Cpu;

              // Calculate shortest circular difference from active index
              let diff = idx - activeIndex;
              if (diff > totalNodes / 2) diff -= totalNodes;
              if (diff < -totalNodes / 2) diff += totalNodes;

              // Angular spacing along the arc (in degrees)
              const angleStep = 11.5;
              const angle = diff * angleStep;
              const rad = (angle * Math.PI) / 180;

              // Arc radius (in px)
              const radius = 640;

              const xPos = Math.sin(rad) * radius;
              const yPos = (1 - Math.cos(rad)) * radius;

              const isCurrent = diff === 0;
              const isVisible = Math.abs(diff) <= 3;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={node.id}
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    x: xPos,
                    y: yPos - 55,
                    rotate: angle,
                    scale: isCurrent ? 1.08 : Math.max(0.78, 1 - Math.abs(diff) * 0.07),
                    opacity: isCurrent ? 1 : Math.max(0.35, 1 - Math.abs(diff) * 0.18),
                    zIndex: 25 - Math.abs(diff),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 20,
                    mass: 0.9,
                  }}
                  className={`absolute cursor-pointer w-[165px] sm:w-[195px] md:w-[215px] h-[235px] sm:h-[265px] md:h-[285px] rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between backdrop-blur-2xl transition-shadow duration-300 ${
                    isCurrent
                      ? "bg-gradient-to-b from-[#101A2F]/98 via-[#0C1424]/98 to-[#070A14] border-2 border-[#168BFF] shadow-[0_0_40px_rgba(22,139,255,0.45),0_20px_50px_rgba(2,4,8,0.9)]"
                      : "bg-gradient-to-b from-[#0F1626]/85 via-[#0A0F1B]/90 to-[#070912]/95 border border-white/[0.08] hover:border-[#168BFF]/40 hover:bg-[#0F1626]/95"
                  }`}
                  style={{
                    transformOrigin: "bottom center",
                  }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="flex items-center justify-between relative z-10">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        isCurrent
                          ? "bg-[#1677FF]/20 border-[#1677FF]/40 text-[#38D9C8] font-bold"
                          : "bg-white/[0.04] border-white/[0.08] text-[#96A8C2]"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    {isCurrent && (
                      <span className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-[#38D9C8]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C8] animate-pulse" />
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-center my-auto relative z-10">
                    <div
                      className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isCurrent
                          ? "bg-gradient-to-tr from-[#1677FF] to-[#38D9C8] text-white shadow-[0_0_25px_rgba(22,139,255,0.5)] scale-110"
                          : "bg-[#0B1322] border border-white/[0.08] text-[#168BFF]"
                      }`}
                    >
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                  </div>

                  <div className="text-center relative z-10">
                    <h4
                      className={`font-heading text-xs sm:text-sm md:text-base font-bold mb-1 leading-snug transition-colors ${
                        isCurrent ? "text-white" : "text-[#F5F8FF]/90"
                      }`}
                    >
                      {node.title}
                    </h4>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#96A8C2] block leading-tight">
                      {node.subtitle}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ===================================================================
              INSPECTION PANEL FOR CURRENTLY ACTIVE ENGINE
              =================================================================== */}
          <div className="w-full max-w-4xl mt-8 sm:mt-12 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-[#0A1224]/90 via-[#070D1A]/95 to-[#040710]/98 p-5 sm:p-7 shadow-[0_20px_60px_rgba(2,4,8,0.7)] backdrop-blur-xl"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-[#38D9C8] uppercase tracking-wider">
                        STAGE 0{activeIndex + 1}
                      </span>
                      <span className="text-xs text-[#96A8C2]/60 font-mono">
                        · {activeDetail.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {activeNode.title}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#1677FF]/15 border border-[#1677FF]/30 text-[#168BFF]">
                    {activeNode.subtitle}
                  </span>
                </div>

                <p className="text-sm text-[#96A8C2] leading-relaxed my-4">
                  {activeDetail.description}
                </p>

                {/* Feature Specs */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {activeDetail.specs.map((spec, specIdx) => (
                    <div
                      key={specIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#070F20] border border-white/[0.06] text-xs font-mono text-[#F5F8FF]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#38D9C8]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
