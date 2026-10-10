"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    phase: "Phase 01 · Up to 14 days",
    title: "Architecture & Ingestion",
    items: [
      "ERP & database connectivity",
      "Unstructured document parsing",
      "Secure API webhook ingestion",
      "Real-time event streaming",
      "Sovereign vector embeddings",
    ],
    // Visual 1: 3D Crystal / Diamond Prism
    renderVisual: () => (
      <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16">
        <polygon points="50,15 82,38 82,72 50,88 18,72 18,38" fill="#0E172A" stroke="#168BFF" strokeWidth="1.5" />
        <polygon points="50,15 82,38 50,52 18,38" fill="#1677FF" fillOpacity="0.25" stroke="#38D9C8" strokeWidth="1.2" />
        <polygon points="50,52 82,72 50,88 18,72" fill="#0C1424" stroke="#168BFF" strokeWidth="1.2" />
        <line x1="50" y1="15" x2="50" y2="88" stroke="#38D9C8" strokeWidth="1.4" />
        <circle cx="50" cy="52" r="3" fill="#38D9C8" />
      </svg>
    ),
  },
  {
    phase: "Phase 02 · Continuous",
    title: "Autonomous Orchestration",
    items: [
      "Multi-agent workflow reasoning",
      "Cross-system task routing",
      "Continuous policy verification",
      "Dynamic exception handling",
      "Transparent audit logging",
    ],
    // Visual 2: Connected Neural Network Nodes
    renderVisual: () => (
      <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16">
        <circle cx="50" cy="50" r="36" fill="#0A1224" stroke="rgba(72,139,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
        {/* Network connector lines */}
        <line x1="32" y1="62" x2="50" y2="35" stroke="#168BFF" strokeWidth="1.5" />
        <line x1="50" y1="35" x2="68" y2="62" stroke="#38D9C8" strokeWidth="1.5" />
        <line x1="32" y1="62" x2="68" y2="62" stroke="#168BFF" strokeWidth="1.5" />
        <line x1="50" y1="35" x2="50" y2="74" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Node dots */}
        <circle cx="50" cy="35" r="4.5" fill="#38D9C8" />
        <circle cx="32" cy="62" r="4" fill="#168BFF" />
        <circle cx="68" cy="62" r="4" fill="#168BFF" />
        <circle cx="50" cy="74" r="3.5" fill="#38D9C8" />
        <circle cx="50" cy="50" r="2.5" fill="#F5F8FF" />
      </svg>
    ),
  },
  {
    phase: "Phase 03 · Enterprise Scale",
    title: "Value Realization & Scale",
    items: [
      "Instantaneous ERP updates",
      "Automated customer interactions",
      "Real-time executive dashboards",
      "Continuous model self-tuning",
      "Measurable operational ROI",
    ],
    // Visual 3: Hand holding energy / value icon
    renderVisual: () => (
      <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16">
        <circle cx="50" cy="50" r="38" fill="#0A1224" stroke="rgba(56,217,200,0.25)" strokeWidth="1" />
        {/* Energy sparks */}
        <path d="M 50 24 L 52 32 L 60 34 L 52 36 L 50 44 L 48 36 L 40 34 L 48 32 Z" fill="#38D9C8" />
        <circle cx="35" cy="40" r="1.5" fill="#168BFF" />
        <circle cx="65" cy="40" r="1.5" fill="#168BFF" />
        {/* Supportive stylized hand / upward curve */}
        <path
          d="M 28 66 C 36 60 44 60 50 63 C 56 60 64 60 72 66"
          stroke="#168BFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 24 72 C 34 68 46 68 50 71 C 54 68 66 68 76 72"
          stroke="#38D9C8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="how-it-works">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#1677FF]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal delay={0.1}>
          <div className="mb-10 sm:mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight max-w-2xl leading-[1.15]">
              How Does It Work?
            </h2>
          </div>
        </Reveal>

        {/* 3 Tall Vertical Cards matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {STEPS.map((step, idx) => (
            <Reveal key={step.title} delay={0.15 + idx * 0.1}>
              <div className="group relative rounded-[24px] sm:rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-[#0F1422]/90 via-[#0A0D16]/95 to-[#07090F]/98 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_60px_rgba(2,4,8,0.7)] transition-all duration-300 hover:border-[#168BFF]/40 hover:shadow-[0_15px_40px_rgba(2,4,8,0.9),0_0_30px_rgba(22,139,255,0.15)] hover:-translate-y-1 min-h-[460px]">
                {/* Subtle top edge highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div>
                  {/* Top Header Row with Pill Badge */}
                  <div className="flex items-center justify-end mb-6">
                    <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#96A8C2]">
                      {step.phase}
                    </span>
                  </div>

                  {/* Center Top Glowing Spherical Icon Showcase */}
                  <div className="flex items-center justify-center my-6">
                    <div className="h-24 w-24 rounded-full bg-[#080E1C] border border-white/[0.08] flex items-center justify-center shadow-[0_0_30px_rgba(22,139,255,0.2)] transition-transform duration-500 group-hover:scale-105">
                      {step.renderVisual()}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-center text-[#F5F8FF] mb-6 tracking-tight group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Sub-items list matching reference layout */}
                <div className="border-t border-white/[0.06] pt-6 space-y-2.5 text-center">
                  {step.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="text-xs sm:text-sm text-[#96A8C2] group-hover:text-[#C5D3E8] transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
