"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PioneeringTechIllustration from "./connected-intelligence/PioneeringTechIllustration";
import CustomSolutionsIllustration from "./connected-intelligence/CustomSolutionsIllustration";
import NicheFocusIllustration from "./connected-intelligence/NicheFocusIllustration";
import CyberSecurityIllustration from "./connected-intelligence/CyberSecurityIllustration";
import AIMarketingIllustration from "./connected-intelligence/AIMarketingIllustration";

export default function ProductIntro() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="products">
      {/* =====================================================================
          DYNAMIC ANIMATED BACKGROUND
          - Multi-chromatic floating orbs with organic motion
          - Technical cyber grid matrix
          - Ambient aurora glow
          ===================================================================== */}
      {/* 1. Subtle High-Tech Circuit Matrix Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(72,139,255,0.1)_1px,transparent_1px)] [background-size:36px_36px] opacity-40" />

      {/* 2. Floating Animated Electric Blue Glow Orb */}
      <motion.div
        animate={{
          x: [-40, 50, -20, -40],
          y: [-30, 40, -45, -30],
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.18, 0.32, 0.22, 0.18],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-12 left-1/4 w-[600px] h-[350px] rounded-full bg-[#1677FF]/25 blur-[130px]"
      />

      {/* 3. Floating Animated Cyan Accent Glow Orb */}
      <motion.div
        animate={{
          x: [40, -50, 30, 40],
          y: [20, -35, 45, 20],
          scale: [0.95, 1.25, 1, 0.95],
          opacity: [0.14, 0.28, 0.18, 0.14],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-16 right-1/4 w-[550px] h-[320px] rounded-full bg-[#38D9C8]/20 blur-[130px]"
      />

      {/* 4. Center Ambient Pulse Aurora */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[380px] rounded-full bg-gradient-to-r from-[#1677FF]/20 via-[#38D9C8]/15 to-transparent blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Connected Intelligence"
          title="Your Business. Connected by Intelligence."
          description="From enterprise resource planning to sovereign cybersecurity and intelligent marketing, connect the systems, data and decisions that keep modern businesses moving."
        />

        {/* =====================================================================
            FUTURISTIC FIVE-CARD CONNECTED INTELLIGENCE SHOWCASE
            Matches reference layout:
            - Centered outer container with animated scanning border
            - Top Row (Products): 2 large horizontal cards
            - Bottom Row (Services): 3 vertical cards
            ===================================================================== */}
        <Reveal delay={0.1}>
          <div className="relative rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#050812]/85 p-3 sm:p-5 lg:p-6 backdrop-blur-2xl shadow-[0_20px_80px_rgba(2,4,8,0.7)] overflow-hidden">
            {/* Top ambient soft accent lighting flare */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[220px] rounded-full bg-gradient-to-r from-[#1677FF]/25 via-[#38D9C8]/18 to-transparent blur-[90px]" />

            {/* Animated Laser Light Beam scanning horizontally along top border */}
            <motion.div
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#38D9C8] to-transparent opacity-75"
            />

            {/* =================================================================
                FIRST ROW: 2 LARGE HORIZONTAL CARDS (PRODUCTS)
                ================================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-3 sm:mb-4 lg:mb-5">
              {/* CARD 01: AI-Integrated ERP Solution */}
              <div className="group relative rounded-[22px] sm:rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-[#0F1420]/80 via-[#0A0D16]/90 to-[#07090F]/95 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#168BFF]/40 hover:shadow-[0_15px_40px_rgba(2,4,8,0.9),0_0_30px_rgba(22,139,255,0.15)] hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Technical Illustration Showcase */}
                <div className="w-full h-[180px] sm:h-[210px] flex items-center justify-center mb-6">
                  <PioneeringTechIllustration />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#168BFF] uppercase tracking-wider">
                      PRODUCT 01
                    </span>
                    <span className="text-[11px] text-[#96A8C2]/60 font-mono">· ENTERPRISE CORE</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F8FF] mb-2.5 tracking-tight group-hover:text-white transition-colors">
                    Ai Integrated ERP Solution
                  </h3>
                  <p className="text-sm sm:text-base text-[#96A8C2] leading-relaxed mb-4">
                    An intelligent ERP environment designed to connect core business operations, automate repetitive workflows, and transform enterprise data into predictive, actionable intelligence.
                  </p>

                  <Link
                    href="/products/ai-integrated-erp"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#168BFF] hover:text-[#38D9C8] transition-colors"
                  >
                    <span>Explore AI ERP Platform</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* CARD 02: AI Integrated 360 Odoo */}
              <div className="group relative rounded-[22px] sm:rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-[#0F1420]/80 via-[#0A0D16]/90 to-[#07090F]/95 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#38D9C8]/40 hover:shadow-[0_15px_40px_rgba(2,4,8,0.9),0_0_30px_rgba(56,217,200,0.15)] hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Technical Illustration Showcase */}
                <div className="w-full h-[180px] sm:h-[210px] flex items-center justify-center mb-6">
                  <CustomSolutionsIllustration />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#38D9C8] uppercase tracking-wider">
                      PRODUCT 02
                    </span>
                    <span className="text-[11px] text-[#96A8C2]/60 font-mono">· 360° OPERATIONAL SUITE</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F8FF] mb-2.5 tracking-tight group-hover:text-white transition-colors">
                    AI Integrated 360, Odoo
                  </h3>
                  <p className="text-sm sm:text-base text-[#96A8C2] leading-relaxed mb-4">
                    An AI-enhanced Odoo ecosystem that connects modular business functions, automates cross-department workflows, and gives leadership teams a unified 360° operational view.
                  </p>

                  <Link
                    href="/products/ai-integrated-360-odoo"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#38D9C8] hover:text-[#168BFF] transition-colors"
                  >
                    <span>Discover 360 Odoo Ecosystem</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* =================================================================
                SECOND ROW: 3 VERTICAL CARDS (SERVICES)
                ================================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {/* CARD 03: AI Process Automation */}
              <div className="group relative rounded-[22px] sm:rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-[#0F1420]/80 via-[#0A0D16]/90 to-[#07090F]/95 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#168BFF]/40 hover:shadow-[0_15px_40px_rgba(2,4,8,0.9),0_0_30px_rgba(22,139,255,0.15)] hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div className="w-full h-[180px] sm:h-[200px] flex items-center justify-center mb-5">
                  <NicheFocusIllustration />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#168BFF] uppercase tracking-wider">
                      SERVICE 01
                    </span>
                    <span className="text-[11px] text-[#96A8C2]/60 font-mono">· WORKFLOWS</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F8FF] mb-2.5 tracking-tight group-hover:text-white transition-colors">
                    AI Process Automation
                  </h3>
                  <p className="text-sm text-[#96A8C2] leading-relaxed mb-4">
                    Autonomous LLM triggers, document intelligence, and cross-platform API workflows that eliminate repetitive friction and manual bottlenecks.
                  </p>

                  <Link
                    href="/services/ai-process-automation"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#168BFF] hover:text-[#38D9C8] transition-colors"
                  >
                    <span>Explore Automation</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* CARD 04: Cyber Security */}
              <div className="group relative rounded-[22px] sm:rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-[#0F1420]/80 via-[#0A0D16]/90 to-[#07090F]/95 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#168BFF]/40 hover:shadow-[0_15px_40px_rgba(2,4,8,0.9),0_0_30px_rgba(22,139,255,0.15)] hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div className="w-full h-[180px] sm:h-[200px] flex items-center justify-center mb-5">
                  <CyberSecurityIllustration />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#38D9C8] uppercase tracking-wider">
                      SERVICE 02
                    </span>
                    <span className="text-[11px] text-[#96A8C2]/60 font-mono">· SOVEREIGN SHIELD</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F8FF] mb-2.5 tracking-tight group-hover:text-white transition-colors">
                    Cyber Security
                  </h3>
                  <p className="text-sm text-[#96A8C2] leading-relaxed mb-4">
                    Proactive perimeter defense, Aramco SCCC compliance, zero-trust access control, and 24/7 AI-driven threat monitoring for resilient operations.
                  </p>

                  <Link
                    href="/services/cyber-security"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#38D9C8] hover:text-[#168BFF] transition-colors"
                  >
                    <span>Explore Cyber Defense</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* CARD 05: AI Based Marketing */}
              <div className="group relative rounded-[22px] sm:rounded-[26px] border border-white/[0.08] bg-gradient-to-b from-[#0F1420]/80 via-[#0A0D16]/90 to-[#07090F]/95 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#38D9C8]/40 hover:shadow-[0_15px_40px_rgba(2,4,8,0.9),0_0_30px_rgba(56,217,200,0.15)] hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div className="w-full h-[180px] sm:h-[200px] flex items-center justify-center mb-5">
                  <AIMarketingIllustration />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#168BFF] uppercase tracking-wider">
                      SERVICE 03
                    </span>
                    <span className="text-[11px] text-[#96A8C2]/60 font-mono">· GROWTH AI</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F8FF] mb-2.5 tracking-tight group-hover:text-white transition-colors">
                    AI based marketing
                  </h3>
                  <p className="text-sm text-[#96A8C2] leading-relaxed mb-4">
                    Predictive campaign intelligence, autonomous lead scoring, real-time ROI attribution, and dynamic audience engagement across digital channels.
                  </p>

                  <Link
                    href="/services/ai-marketing"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#168BFF] hover:text-[#38D9C8] transition-colors"
                  >
                    <span>Explore Marketing AI</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
