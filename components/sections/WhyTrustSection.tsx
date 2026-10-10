"use client";

import { motion } from "framer-motion";
import { Eye, Sliders, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import NeuralSphereVisual from "./ai-visuals/NeuralSphereVisual";

const TRUST_METRICS = [
  {
    value: "10+ years",
    label: "Enterprise AI & ERP architecture experience across UAE & KSA",
  },
  {
    value: "500M+ Records",
    label: "Total enterprise records & transactions processed autonomously",
  },
  {
    value: "99.98% SLA",
    label: "Mission-critical model availability & real-time inference uptime",
  },
  {
    value: "0 Breaches",
    label: "Zero sovereign data compromises throughout our entire history",
  },
  {
    value: "150+ Systems",
    label: "Scaled enterprise deployments across GCC industrial sectors",
  },
  {
    value: "$25M+ Saved",
    label: "Combined operational expenditure saved via AI workflows",
  },
];

const PILLARS = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clients receive real-time telemetry on model performance, explainable decision outputs, and auditable event logs across all autonomous workflows.",
    accent: "#38D9C8",
  },
  {
    icon: Sliders,
    title: "Control",
    desc: "Every automated transaction undergoes deterministic rule verification, role-based permission tiers, and configurable human-in-the-loop governance.",
    accent: "#168BFF",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Infrastructure protected with Aramco SCCC compliance, Zero-Trust network boundaries, and sovereign in-country data residency in UAE & KSA.",
    accent: "#38D9C8",
  },
];

export default function WhyTrustSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="trust">
      {/* Ambient background light */}
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[600px] h-[300px] rounded-full bg-[#1677FF]/12 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference typography */}
        <Reveal delay={0.1}>
          <div className="mb-10 sm:mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight max-w-2xl leading-[1.15]">
              Why leading enterprises trust our AI
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* LEFT LARGE CARD: 6 Key Metrics + 3D Neural Wireframe Mesh Orb */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative rounded-[24px] sm:rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-[#0F1422]/90 via-[#0A0D16]/95 to-[#07090F]/98 p-6 sm:p-9 h-full flex flex-col justify-between overflow-hidden shadow-[0_20px_60px_rgba(2,4,8,0.7)] group hover:border-[#168BFF]/40 transition-all duration-300">
                {/* Subtle top edge highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Background 3D Neural Mesh Orb on the right */}
                <div className="absolute -right-12 sm:-right-8 top-1/2 -translate-y-1/2 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] opacity-75 sm:opacity-85 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                  <NeuralSphereVisual />
                </div>

                {/* 2-Column Grid of 6 Stats */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-7 sm:gap-y-9 gap-x-6 sm:gap-x-8 max-w-[85%] sm:max-w-[78%]">
                  {TRUST_METRICS.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F8FF] tracking-tight mb-1">
                        {metric.value}
                      </span>
                      <span className="text-xs sm:text-sm text-[#96A8C2] leading-relaxed">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: 3 Stacked Cards (Transparency, Control, Security) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={0.2 + idx * 0.1}>
                  <div className="group relative rounded-[20px] sm:rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-[#0F1422]/90 via-[#0A0D16]/95 to-[#07090F]/98 p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-[#168BFF]/40 hover:shadow-[0_10px_30px_rgba(2,4,8,0.8),0_0_20px_rgba(22,139,255,0.12)] hover:-translate-y-0.5">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="flex items-start gap-4">
                      {/* Dark circle badge with icon */}
                      <div className="h-10 w-10 shrink-0 rounded-full bg-[#0C1220] border border-white/[0.1] flex items-center justify-center text-[#38D9C8] group-hover:border-[#168BFF]/40 group-hover:scale-105 transition-all">
                        <Icon className="h-5 w-5" style={{ color: pillar.accent }} />
                      </div>

                      <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F8FF] mb-1.5 tracking-tight group-hover:text-white transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#96A8C2] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
