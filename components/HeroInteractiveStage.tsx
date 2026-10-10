"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Lock,
  Cpu,
  BarChart3,
  Flame,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import HeroServicesVisual from "@/components/HeroServicesVisual";
import { SITE_CONFIG } from "@/lib/content";

interface TabItem {
  id: number;
  label: string;
  badge: string;
}

const TABS: TabItem[] = [
  { id: 1, label: "Overview", badge: "01" },
  { id: 2, label: "Odoo ERP", badge: "02" },
  { id: 3, label: "Cybersecurity", badge: "03" },
  { id: 4, label: "AI Automation", badge: "04" },
];

export default function HeroInteractiveStage() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[640px]">
        {/* ===================================================================
            LEFT COLUMN: Feature Tabs & Dynamic Animated Copy
            =================================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 max-w-2xl">
          {/* Feature Step Selector Tabs */}
          <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl mb-8 max-w-fit shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-[#b9b4cc] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="heroActiveTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7c5cff]/40 to-[#c58bff]/30 border border-[#a78bfa]/60 shadow-[0_0_20px_rgba(124,92,255,0.35)]"
                    />
                  )}
                  <span
                    className={`relative z-10 font-mono text-[11px] font-bold ${
                      isActive ? "text-[#c58bff]" : "text-[#b9b4cc]/60"
                    }`}
                  >
                    {tab.badge}
                  </span>
                  <span className="relative z-10 tracking-wide">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Animated Content Steps */}
          <div className="relative min-h-[390px] sm:min-h-[360px]">
            <AnimatePresence mode="wait">
              {activeTab === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-1 text-xs font-semibold text-[#c58bff] tracking-wider uppercase mb-5 w-fit shadow-[0_0_20px_rgba(124,92,255,0.2)]">
                    <span className="h-2 w-2 rounded-full bg-[#c58bff] animate-ping" />
                    <span>SMARTER SYSTEMS • REAL BUSINESS GROWTH</span>
                  </div>

                  {/* Headline */}
                  <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-5">
                    Technology Experts Delivering{" "}
                    <span className="bg-gradient-to-r from-white via-[#c58bff] to-[#06b6d4] bg-clip-text text-transparent">
                      ERP, AI & Sovereign Security
                    </span>
                  </h1>

                  {/* Paragraph */}
                  <p className="text-base sm:text-lg text-[#b9b4cc] font-normal leading-relaxed max-w-2xl mb-8">
                    We help enterprise organizations scale with Odoo ERP, design,
                    development, marketing, AI process automation, and
                    Aramco-certified cybersecurity solutions built for speed and
                    success.
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <Link
                      href={SITE_CONFIG.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#7c5cff] to-[#c58bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,92,255,0.4)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(124,92,255,0.6)] hover:scale-[1.02]"
                    >
                      <AnimatedIcon type="cta" glowColor="purple">
                        <MessageSquare className="h-4 w-4" />
                      </AnimatedIcon>
                      <span>Book a Free Strategy Call</span>
                      <AnimatedIcon type="arrow" glowColor="purple">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </AnimatedIcon>
                    </Link>

                    <Link
                      href="/odoo-erp"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1] hover:border-white/30"
                    >
                      <span>Explore Solutions</span>
                      <AnimatedIcon type="arrow" glowColor="purple">
                        <ArrowRight className="h-4 w-4 text-[#c58bff]" />
                      </AnimatedIcon>
                    </Link>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm text-[#b9b4cc]">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366]" />
                      <span>Aramco CCC / SCCC Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#c58bff] shadow-[0_0_8px_#c58bff]" />
                      <span>Odoo Silver Partner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      <span>Dubai & Riyadh Local Presence</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md px-4 py-1 text-xs font-semibold text-blue-300 tracking-wider uppercase mb-5 w-fit">
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
                    <span>FEATURE 01 // ENTERPRISE ERP</span>
                  </div>

                  <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-5">
                    Odoo ERP Implementation &{" "}
                    <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-[#c58bff] bg-clip-text text-transparent">
                      Operational Mastery
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-[#b9b4cc] font-normal leading-relaxed max-w-2xl mb-7">
                    Unify finance, sales, inventory, HR, and supply chain into one
                    intelligent, automated ecosystem. Tailored for F&B, Logistics,
                    Manufacturing, and Construction across UAE & KSA.
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mb-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#a78bfa] to-[#67e8f9] bg-clip-text text-transparent">
                        40%+
                      </div>
                      <div className="text-xs text-[#b9b4cc] font-medium mt-1">
                        Efficiency Boost
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#a78bfa] to-[#67e8f9] bg-clip-text text-transparent">
                        100%
                      </div>
                      <div className="text-xs text-[#b9b4cc] font-medium mt-1">
                        Real-Time Operations
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/odoo-erp"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-[#7c5cff] to-[#c58bff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,92,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
                    >
                      <AnimatedIcon type="service" glowColor="purple">
                        <Layers className="h-4 w-4" />
                      </AnimatedIcon>
                      <span>Explore Odoo ERP</span>
                      <AnimatedIcon type="arrow" glowColor="purple">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </AnimatedIcon>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1]"
                    >
                      <span>Request Demo</span>
                    </Link>
                  </div>
                </motion.div>
              )}

              {activeTab === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md px-4 py-1 text-xs font-semibold text-cyan-300 tracking-wider uppercase mb-5 w-fit">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>FEATURE 02 // CYBERSECURITY & COMPLIANCE</span>
                  </div>

                  <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-5">
                    Aramco Cybersecurity &{" "}
                    <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-[#a78bfa] bg-clip-text text-transparent">
                      Sovereign Defense
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-[#b9b4cc] font-normal leading-relaxed max-w-2xl mb-7">
                    Protect critical enterprise digital assets and ensure SCCC /
                    CCC audit compliance with end-to-end threat monitoring,
                    vulnerability management, and defense architecture.
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mb-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-[#a78bfa] bg-clip-text text-transparent">
                        SCCC
                      </div>
                      <div className="text-xs text-[#b9b4cc] font-medium mt-1">
                        Audit Preparedness
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-[#a78bfa] bg-clip-text text-transparent">
                        24/7
                      </div>
                      <div className="text-xs text-[#b9b4cc] font-medium mt-1">
                        Threat Shield
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/aramco-compliance"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-[#7c5cff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.02]"
                    >
                      <AnimatedIcon type="service" glowColor="cyan">
                        <Shield className="h-4 w-4" />
                      </AnimatedIcon>
                      <span>Aramco Cybersecurity</span>
                      <AnimatedIcon type="arrow" glowColor="cyan">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </AnimatedIcon>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1]"
                    >
                      <span>Audit Readiness Check</span>
                    </Link>
                  </div>
                </motion.div>
              )}

              {activeTab === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md px-4 py-1 text-xs font-semibold text-purple-300 tracking-wider uppercase mb-5 w-fit">
                    <span className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
                    <span>FEATURE 03 // AI & CUSTOM ENGINEERING</span>
                  </div>

                  <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-5">
                    AI Process Automation &{" "}
                    <span className="bg-gradient-to-r from-[#c58bff] via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                      Scalable Architecture
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-[#b9b4cc] font-normal leading-relaxed max-w-2xl mb-7">
                    Custom enterprise web applications, intelligent LLM automation
                    workflows, and high-performance cloud engineering built for
                    rapid digital expansion and high ROI.
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mb-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#c58bff] to-cyan-300 bg-clip-text text-transparent">
                        AI Native
                      </div>
                      <div className="text-xs text-[#b9b4cc] font-medium mt-1">
                        Smart Workflows
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#c58bff] to-cyan-300 bg-clip-text text-transparent">
                        Global
                      </div>
                      <div className="text-xs text-[#b9b4cc] font-medium mt-1">
                        Cloud Deployment
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/ai-automation"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c5cff] via-[#c58bff] to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(197,139,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
                    >
                      <AnimatedIcon type="service" glowColor="cyan">
                        <Cpu className="h-4 w-4" />
                      </AnimatedIcon>
                      <span>Explore AI Automation</span>
                      <AnimatedIcon type="arrow" glowColor="cyan">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </AnimatedIcon>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1]"
                    >
                      <span>Book AI Discovery</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ===================================================================
            RIGHT COLUMN: Holographic 3D Services Visual
            =================================================================== */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center z-10 overflow-visible">
          <HeroServicesVisual />
        </div>
      </div>
    </div>
  );
}
