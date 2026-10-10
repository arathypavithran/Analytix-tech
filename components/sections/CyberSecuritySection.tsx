"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Fingerprint,
  Lock,
  FileCheck,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Radio,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

// 4 Enterprise Security Capability Boxes
const SECURITY_MODULES = [
  {
    id: "zero-trust",
    number: "01",
    title: "Zero-Trust Perimeter",
    subtitle: "NEURAL ACCESS & BIOMETRIC GOVERNANCE",
    shortDesc: "Micro-segmented access with continuous identity & context verification.",
    fullDesc:
      "Every request is dynamically authenticated, authorized, and encrypted before granting access. Strict least-privilege policies prevent lateral movement across enterprise ERP and cloud clusters.",
    icon: Fingerprint,
    accent: "#38D9C8",
    specs: ["Continuous Biometric MFA", "Sub-10ms Lateral Isolation", "Real-Time Risk Scoring"],
    telemetry: {
      metric: "100%",
      label: "Policy Enforcement",
      status: "ACTIVE & AUDITED",
    },
    beamTargetX: "12.5%",
  },
  {
    id: "sovereign-shield",
    number: "02",
    title: "Sovereign Data Shield",
    subtitle: "AIR-GAPPED MILITARY ENCRYPTION",
    shortDesc: "AES-256 GCM encryption at rest and in transit with GCC sovereign storage.",
    fullDesc:
      "Guarantees 100% in-country data residency within UAE and Saudi Arabia borders. Private dedicated key management hardware (HSM) ensures zero third-party or foreign exposure.",
    icon: Lock,
    accent: "#168BFF",
    specs: ["AES-256 GCM Hardware HSM", "Zero Foreign Data Transit", "UAE & KSA Residency"],
    telemetry: {
      metric: "256-BIT",
      label: "Air-Gapped Encryption",
      status: "SOVEREIGN STORAGE",
    },
    beamTargetX: "37.5%",
  },
  {
    id: "aramco-sccc",
    number: "03",
    title: "Aramco SCCC Compliance",
    subtitle: "AUDIT-READY REGULATORY MANDATES",
    shortDesc: "Pre-configured controls aligned with Aramco cybersecurity framework.",
    fullDesc:
      "Automated continuous compliance telemetry aligned directly with Aramco Third-Party Cybersecurity Standard (SCCC), ZATCA Phase-2 e-invoicing, and NCA ECC guidelines with turnkey audit trails.",
    icon: FileCheck,
    accent: "#38D9C8",
    specs: ["Aramco SCCC Certified", "NCA ECC Alignment", "Automated Evidence Feed"],
    telemetry: {
      metric: "99.99%",
      label: "Compliance Score",
      status: "AUDIT CERTIFIED",
    },
    beamTargetX: "62.5%",
  },
  {
    id: "autonomous-threat",
    number: "04",
    title: "Autonomous Threat Defense",
    subtitle: "24/7 REAL-TIME BEHAVIORAL AI",
    shortDesc: "Sub-second anomaly neutralization for zero-day exploits & prompt injections.",
    fullDesc:
      "Self-learning neural watchers continuously monitor API traffic, database queries, and agentic workflows to intercept and neutralize malicious payloads before operational impact.",
    icon: ShieldAlert,
    accent: "#168BFF",
    specs: ["Sub-45ms Threat Isolation", "Prompt Injection Defense", "Neural Pattern Watcher"],
    telemetry: {
      metric: "< 45ms",
      label: "Mitigation Latency",
      status: "24/7 ZERO-DAY SHIELD",
    },
    beamTargetX: "87.5%",
  },
];

export default function CyberSecuritySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [blinkPulse, setBlinkPulse] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);

  const activeModule = SECURITY_MODULES[activeIdx];
  const ActiveIcon = activeModule.icon;

  // Auto-cycle through modules every 6s unless user interacts
  useEffect(() => {
    if (isAutoPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SECURITY_MODULES.length);
      setBlinkPulse((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPaused]);

  const handleSelectModule = (index: number) => {
    setActiveIdx(index);
    setBlinkPulse((prev) => prev + 1);
    setIsAutoPaused(true);
  };

  return (
    <section
      className="relative py-20 sm:py-28 border-t border-[rgba(72,139,255,0.18)] overflow-hidden bg-gradient-to-b from-[#03060D] via-[#050814] to-[#03060D]"
      id="security"
      onMouseEnter={() => setIsAutoPaused(true)}
      onMouseLeave={() => setIsAutoPaused(false)}
    >
      {/* Background Volumetric Lighting & Cosmic Dust Particle Field */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-[#1677FF]/10 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-[#38D9C8]/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px] opacity-40" />

      {/* Floating Ambient Cosmic Dust Spec Particles (matching reference video) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { top: "12%", left: "10%", size: 2.5, delay: 0 },
          { top: "20%", left: "85%", size: 2, delay: 1.2 },
          { top: "45%", left: "6%", size: 3, delay: 2.4 },
          { top: "65%", left: "92%", size: 2.5, delay: 0.8 },
          { top: "35%", left: "50%", size: 2, delay: 3 },
          { top: "80%", left: "30%", size: 3, delay: 1.5 },
          { top: "88%", left: "70%", size: 2, delay: 2.2 },
        ].map((pt, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/45"
            style={{
              top: pt.top,
              left: pt.left,
              width: pt.size,
              height: pt.size,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.2, 0.75, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: pt.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Sovereign Protection & Compliance"
          title="Security That Moves With Your Business"
          description="Protect systems, data and business operations with proactive cybersecurity, threat monitoring, and audit-ready compliance protection tailored for enterprise standards."
        />

        {/* =====================================================================
            FULL-WIDTH SYSTEM FRAME
            The hands come from the two opposite ends (Top-Left and Bottom-Right),
            span all the way across the system frame, and touch together at the center!
            ===================================================================== */}
        <div className="mt-10 sm:mt-12 relative w-full rounded-[32px] sm:rounded-[40px] border border-white/[0.08] bg-gradient-to-b from-[#080E1C]/95 via-[#050914]/98 to-[#02050B] backdrop-blur-3xl shadow-[0_30px_90px_rgba(2,4,8,0.9)] overflow-hidden">
          {/* Top Telemetry Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-5 bg-[#050914]/60 backdrop-blur-sm relative z-20">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38D9C8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38D9C8]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#38D9C8] font-bold">
                HUMAN-AI ZERO-TRUST SYNTHESIS
              </span>
              <span className="hidden lg:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.05] border border-white/[0.08] text-[#96A8C2]">
                STATUS: 100% AUDIT-ENFORCED
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#96A8C2]">
              <span className="hidden sm:inline">CLICK ANY MODULE TO DIRECT DEFENSE</span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1677FF]/15 border border-[#1677FF]/30 text-[#F5F8FF]">
                <Radio className="h-3 w-3 text-[#38D9C8] animate-pulse" />
                <span>SOVEREIGN SHIELD ONLINE</span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              FULL-WIDTH HANDS STAGE:
              - Left: 3D Wireframe Cyber Hand entering from the TOP-LEFT END of the system frame
              - Right: Realistic Human Hand entering from the BOTTOM-RIGHT END of the system frame
              - Center: FINGERTIPS MEET & TOUCH TOGETHER AT (50%, 50%) WITH ELECTRIC BLINKS!
              - Glowing energy laser beam shoots down to the active content box!
              =================================================================== */}
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[560px] overflow-hidden">
            {/* Ambient Radial Spotlight Centered directly on the Touching Fingertips */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(56,217,200,0.22)_0%,rgba(22,119,255,0.12)_45%,transparent_75%)]" />

            {/* Subtle cyber grid backdrop spanning full width */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

            {/* -----------------------------------------------------------------
                LEFT HAND: 3D CYBER WIREFRAME ROBOTIC HAND
                Enters all the way from the TOP-LEFT END of the system frame!
                Forearm originates beyond the top-left boundary, sloping down-right
                to touch fingertip-to-fingertip at the exact center (50%, 50%).
                ----------------------------------------------------------------- */}
            <div
              className="absolute pointer-events-none select-none z-10"
              style={{
                left: "-8%",
                top: "-6%",
                width: "76%",
                height: "96%",
                mixBlendMode: "screen",
              }}
            >
              <motion.div
                key={`cyber-touch-${blinkPulse}`}
                className="relative w-full h-full"
                initial={{ x: -16, scale: 0.98 }}
                animate={{
                  x: [0, 6, 0],
                  y: [0, -3, 0],
                  scale: 1,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/security/cyber_hand_clean_v2.png"
                    alt="3D Cyber Wireframe Robotic Hand entering from top-left end"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-contain object-right opacity-95"
                    priority
                  />
                </div>

                {/* Left Telemetry HUD Tag */}
                <div className="absolute top-6 left-8 sm:left-12 bg-[#050C1A]/85 border border-[#38D9C8]/30 rounded-lg px-3 py-1.5 backdrop-blur-md hidden sm:block shadow-[0_0_15px_rgba(56,217,200,0.2)]">
                  <span className="text-[10px] font-mono text-[#38D9C8] font-bold block flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C8] animate-ping" />
                    AI WIREFRAME SENTINEL
                  </span>
                  <span className="text-[9px] font-mono text-[#96A8C2]">
                    AUTONOMOUS PROTOCOL 0.5.1
                  </span>
                </div>
              </motion.div>
            </div>

            {/* -----------------------------------------------------------------
                RIGHT HAND: REALISTIC HUMAN HAND
                Enters all the way from the BOTTOM-RIGHT END of the system frame!
                Forearm originates beyond the bottom-right boundary, sloping up-left
                to touch fingertip-to-fingertip at the exact center (50%, 50%).
                ----------------------------------------------------------------- */}
            <div
              className="absolute pointer-events-none select-none z-10"
              style={{
                right: "-8%",
                bottom: "-6%",
                width: "74%",
                height: "92%",
                mixBlendMode: "screen",
              }}
            >
              <motion.div
                key={`human-touch-${blinkPulse}`}
                className="relative w-full h-full"
                initial={{ x: 16, scale: 0.98 }}
                animate={{
                  x: [0, -6, 0],
                  y: [0, 3, 0],
                  scale: 1,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/security/human_hand_clean_v2.png"
                    alt="Realistic Human Hand entering from bottom-right end"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-contain object-left opacity-95"
                    priority
                  />
                </div>

                {/* Right Telemetry HUD Tag */}
                <div className="absolute bottom-6 right-8 sm:right-12 bg-[#050C1A]/85 border border-[#1677FF]/30 rounded-lg px-3 py-1.5 backdrop-blur-md hidden sm:block shadow-[0_0_15px_rgba(22,139,255,0.2)]">
                  <span className="text-[10px] font-mono text-[#168BFF] font-bold block flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#168BFF] animate-ping" />
                    ENTERPRISE HUMAN GOVERNANCE
                  </span>
                  <span className="text-[9px] font-mono text-[#96A8C2]">
                    CISO BIOMETRIC AUTHORIZED
                  </span>
                </div>
              </motion.div>
            </div>

            {/* -----------------------------------------------------------------
                THE TOUCHPOINT: EXACT SPOT WHERE THE TWO FINGERTIPS MEET & TOUCH!
                Dead center at (50%, 50%) with high-intensity electric BLINKS & SPARKS!
                ----------------------------------------------------------------- */}
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center">
              {/* PRIMARY BLINKING ELECTRIC BURST CORE */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  key={`electric-spark-blink-${blinkPulse}`}
                  className="relative flex items-center justify-center"
                  animate={{
                    opacity: [1, 0.25, 1, 0.15, 1, 0.4, 1],
                    scale: [1, 1.35, 0.95, 1.5, 1, 1.25, 1],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Rotating Multi-Filament Spark Gyroscope */}
                  <svg
                    className="w-32 h-32 sm:w-40 sm:h-40 text-[#38D9C8] animate-spin"
                    style={{ animationDuration: "5s" }}
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle cx="50" cy="50" r="28" stroke="url(#sparkGrad)" strokeWidth="1.6" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="16" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.9" />
                    <defs>
                      <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38D9C8" />
                        <stop offset="50%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#168BFF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Concentric Expanding Shockwave Rings */}
                  <motion.div
                    className="absolute rounded-full border-2 border-[#38D9C8]"
                    initial={{ width: 10, height: 10, opacity: 1 }}
                    animate={{ width: 90, height: 90, opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute rounded-full border border-[#168BFF]"
                    initial={{ width: 16, height: 16, opacity: 1 }}
                    animate={{ width: 140, height: 140, opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                  />

                  {/* Bright Core White Blink Flare */}
                  <div className="absolute w-8 h-8 rounded-full bg-white shadow-[0_0_35px_#38D9C8,0_0_70px_#168BFF,0_0_100px_#FFFFFF] animate-pulse" />
                  <div className="absolute w-4 h-4 rounded-full bg-[#38D9C8] shadow-[0_0_20px_#FFFFFF]" />

                  {/* Sharp Electric Spark Star Filaments */}
                  <div className="absolute w-24 h-[3px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent shadow-[0_0_12px_#38D9C8]" />
                  <div className="absolute w-24 h-[3px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent rotate-90 shadow-[0_0_12px_#168BFF]" />
                  <div className="absolute w-16 h-[2px] bg-gradient-to-r from-transparent via-[#38D9C8] to-transparent rotate-45" />
                  <div className="absolute w-16 h-[2px] bg-gradient-to-r from-transparent via-[#168BFF] to-transparent -rotate-45" />
                </motion.div>
              </div>

              {/* Holographic Touch Synthesis Badge Floating Cleanly Above the Touchpoint */}
              <div className="absolute -top-14 whitespace-nowrap bg-[#040A18]/90 border border-[#38D9C8]/40 rounded-full px-3.5 py-1 backdrop-blur-md shadow-[0_0_25px_rgba(56,217,200,0.35)] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38D9C8] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38D9C8]" />
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider">
                  FINGERTIPS TOUCHED · SYNTHESIS: {activeModule.title.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Dynamic Energy Laser Circuit Beam Shooting from the Touchpoint to the Active Box */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
              <motion.line
                key={`laser-beam-${activeIdx}`}
                x1="50%"
                y1="50%"
                x2={activeModule.beamTargetX}
                y2="100%"
                stroke="url(#beamGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0.8, 1] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="beamGrad" x1="50%" y1="50%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="25%" stopColor="#38D9C8" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#168BFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38D9C8" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* ===================================================================
              FOUR INTERACTIVE CONTENT BOXES (CONNECTED TO THE HANDS)
              Clicking any box causes the hands to touch together & blink!
              =================================================================== */}
          <div className="px-5 sm:px-8 lg:px-10 pb-8 sm:pb-10 pt-2 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SECURITY_MODULES.map((module, idx) => {
              const Icon = module.icon;
              const isSelected = idx === activeIdx;

              return (
                <div
                  key={module.id}
                  onClick={() => handleSelectModule(idx)}
                  className={`group relative cursor-pointer rounded-[22px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? "bg-gradient-to-b from-[#0F1E38] via-[#091426] to-[#040A14] border-2 border-[#168BFF] shadow-[0_0_35px_rgba(22,139,255,0.45),0_15px_30px_rgba(2,4,8,0.9)] -translate-y-1.5"
                      : "bg-[#070E1C]/80 border border-white/[0.08] hover:border-[#168BFF]/40 hover:bg-[#0A162C]/90 hover:-translate-y-0.5"
                  }`}
                >
                  {/* Glowing Top Line Indicator when touched */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeBoxLine"
                      className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#1677FF] via-[#38D9C8] to-[#168BFF] shadow-[0_0_15px_#38D9C8]"
                    />
                  )}

                  <div>
                    {/* Top Row: Icon & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`h-11 w-11 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-gradient-to-tr from-[#1677FF] to-[#38D9C8] text-white shadow-[0_0_20px_#168BFF]"
                            : "bg-[#0A1424] border border-white/[0.08] text-[#38D9C8] group-hover:scale-105"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full border transition-colors ${
                          isSelected
                            ? "bg-[#38D9C8]/15 border-[#38D9C8]/40 text-[#38D9C8] font-bold shadow-[0_0_10px_rgba(56,217,200,0.3)]"
                            : "bg-white/[0.04] border-white/[0.08] text-[#96A8C2]"
                        }`}
                      >
                        {isSelected ? "TOUCHED · ACTIVE" : `BOX ${module.number}`}
                      </span>
                    </div>

                    {/* Subtitle tag */}
                    <span className="text-[10px] font-mono font-bold text-[#168BFF] uppercase tracking-wider block mb-1">
                      {module.subtitle}
                    </span>

                    {/* Title */}
                    <h3
                      className={`font-heading text-lg font-bold mb-2 transition-colors ${
                        isSelected ? "text-white" : "text-[#F5F8FF]"
                      }`}
                    >
                      {module.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-[#96A8C2] leading-relaxed mb-4">
                      {module.shortDesc}
                    </p>

                    {/* Specs Pills */}
                    <div className="space-y-1.5 mb-4">
                      {module.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 text-[11px] font-medium text-[#D1DCF0]"
                        >
                          <ShieldCheck className="h-3.5 w-3.5 text-[#38D9C8] shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Footer */}
                  <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#38D9C8] flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{module.telemetry.status}</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white">
                      {module.telemetry.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action & Compliance Standards Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#96A8C2]">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#38D9C8] animate-pulse" />
                <strong className="text-white">CERTIFIED REGULATORY STANDARDS:</strong>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#F5F8FF]">
                ARAMCO SCCC
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#F5F8FF]">
                NCA ECC
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#F5F8FF]">
                ZATCA PHASE-2
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#F5F8FF]">
                ISO 27001
              </span>
            </div>

            <Link
              href="/services/cyber-security"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#168BFF] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_25px_rgba(22,139,255,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(22,139,255,0.6)] shrink-0"
            >
              <span>Explore Cyber Security Architecture</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
