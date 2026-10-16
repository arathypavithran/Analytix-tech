"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  ArrowRight,
  Brain,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Play,
  CheckCheck,
  Zap,
} from "lucide-react";

/* ─── Stagger container ─────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

/* ─── Quick-win stat badges ──────────────────────────────────── */
const STATS = [
  { value: "500+", label: "Enterprises", color: "#38bdf8" },
  { value: "15+", label: "Countries", color: "#a78bfa" },
  { value: "99.9%", label: "Uptime SLA", color: "#34d399" },
];

/* ─── Feature pillars ────────────────────────────────────────── */
const PILLARS = [
  { icon: Brain, label: "AI-Powered", sub: "Insights", href: "#products", color: "#38bdf8", bg: "rgba(2,132,199,0.18)" },
  { icon: Cpu, label: "Process", sub: "Automation", href: "/services/ai-process-automation", color: "#38bdf8", bg: "rgba(2,132,199,0.18)" },
  { icon: ShieldCheck, label: "Enterprise", sub: "Security", href: "/services/cyber-security", color: "#818cf8", bg: "rgba(99,102,241,0.18)" },
  { icon: TrendingUp, label: "Scalable", sub: "Business Solutions", href: "#products", color: "#c084fc", bg: "rgba(124,92,255,0.18)" },
];

export default function HeroProductStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <div ref={ref} className="relative w-full select-none">

      {/* ═══════════════════════════════════════════════════════════════
          CINEMATIC AURORA BACKGROUND LAYER
      ═══════════════════════════════════════════════════════════════ */}
      <div className="pointer-events-none absolute -inset-8 sm:-inset-16 overflow-hidden">
        {/* Primary Aurora Blob — Cyan */}
        <div
          className="absolute top-[-10%] right-[0%] w-[55vw] h-[70vh] rounded-full animate-aurora"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.22) 0%, rgba(56,189,248,0.14) 35%, rgba(99,102,241,0.08) 65%, transparent 80%)",
            filter: "blur(70px)",
          }}
        />
        {/* Secondary Aurora Blob — Purple */}
        <div
          className="absolute bottom-[-15%] right-[20%] w-[45vw] h-[60vh] rounded-full animate-aurora-delay"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(192,132,252,0.15) 40%, rgba(236,72,153,0.07) 70%, transparent 85%)",
            filter: "blur(90px)",
          }}
        />
        {/* Tertiary Aurora Blob — Deep Blue */}
        <div
          className="absolute top-[20%] left-[-5%] w-[35vw] h-[50vh] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.2) 0%, rgba(30,64,175,0.12) 50%, transparent 80%)",
            filter: "blur(80px)",
            animation: "auroraShift 20s ease-in-out infinite",
          }}
        />

        {/* Subtle dot-matrix grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,163,184,0.8) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage: "radial-gradient(ellipse at 65% 45%, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 65% 45%, black 30%, transparent 70%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT GRID
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center min-h-[600px] lg:min-h-[640px]">

        {/* ─────────────────────────────────────────────────────────────
            LEFT: TEXT COLUMN
        ───────────────────────────────────────────────────────────── */}
        <motion.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left z-20 space-y-0"
        >
          {/* ── Eyebrow Pill ────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="mb-5 sm:mb-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#38bdf8]/40 bg-[#071329]/80 shadow-[0_0_30px_rgba(56,189,248,0.22)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#38bdf8]">
                AI-POWERED ENTERPRISE PLATFORM
              </span>
              <Sparkles className="h-3.5 w-3.5 text-[#38bdf8] opacity-80" />
            </div>
          </motion.div>

          {/* ── Massive Display Headline ─────────────────────── */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-black tracking-tight leading-[1.03] mb-5 sm:mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 4.8rem)" }}
          >
            {/* Line 1 */}
            <span className="block text-white">
              Intelligent
            </span>
            {/* Line 2 — animated gradient */}
            <span
              className="block animate-gradient-text"
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #818cf8 25%, #38bdf8 50%, #0ea5e9 75%, #c084fc 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "300% 300%",
              }}
            >
              Systems,
            </span>
            {/* Line 3 */}
            <span className="block text-white">
              Powered by{" "}
              <span
                style={{
                  textShadow:
                    "0 0 40px rgba(56,189,248,0.9), 0 0 80px rgba(56,189,248,0.5), 0 0 120px rgba(56,189,248,0.25)",
                  color: "#38bdf8",
                }}
              >
                AI
              </span>
            </span>
          </motion.h1>

          {/* ── Value Prop ──────────────────────────────────── */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg xl:text-[1.2rem] text-slate-300/90 font-normal leading-relaxed mb-7 sm:mb-8 max-w-[520px]"
          >
            Transform your business with AI-driven ERP solutions, autonomous
            process automation, and sovereign-grade cyber security — all in one
            connected intelligent ecosystem.
          </motion.p>

          {/* ── CTA Row ─────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full mb-7 sm:mb-9">
            {/* Primary CTA */}
            <Link
              href="#products"
              className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm sm:text-[15px] font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #7c3aed 100%)",
                boxShadow: "0 0 35px rgba(37,99,235,0.7), 0 0 70px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                border: "1px solid rgba(99,179,255,0.45)",
              }}
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              <Sparkles className="h-4 w-4 text-cyan-200 transition-transform duration-300 group-hover:rotate-[20deg] shrink-0" />
              <span>See Our Solutions</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
            </Link>

            {/* Ghost CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-slate-300 border border-white/15 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.09] hover:border-white/25 hover:text-white transition-all duration-300"
            >
              <Play className="h-3.5 w-3.5 fill-current opacity-80" />
              Watch Demo
            </Link>
          </motion.div>

          {/* ── Social Proof Stats ─────────────────────────── */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 sm:gap-8">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="font-heading font-black text-xl sm:text-2xl leading-tight"
                  style={{ color: s.color, textShadow: `0 0 20px ${s.color}80` }}
                >
                  {s.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">{s.label}</span>
              </div>
            ))}
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
              <CheckCheck className="h-4 w-4 text-emerald-400" />
              <span>ISO 27001 Certified</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            RIGHT: 3D HOLOGRAPHIC PRODUCT SHOWCASE STAGE
        ───────────────────────────────────────────────────────────── */}
        <motion.div
          style={{ y: cardsY }}
          className="lg:col-span-6 xl:col-span-7 relative w-full flex items-center justify-center pt-8 lg:pt-0"
        >
          {/* ── Outer Atmospheric Halo ───────────────────────── */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 60% 50%, rgba(56,189,248,0.14) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* ── Perspective 3D Stage Wrapper ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative w-full"
            style={{ perspective: "1400px" }}
          >
            {/* ── Holographic Platform Base / Ground Layer ──── */}
            <div className="relative flex flex-col sm:flex-row items-end justify-center gap-5 sm:gap-4 lg:gap-5 xl:gap-7 pb-12 sm:pb-16"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* ════ FLOATING DATA NODE — top left ════ */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                className="hidden lg:flex absolute -top-8 -left-4 xl:-left-8 z-30 items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-xl"
                style={{
                  background: "rgba(6,14,30,0.92)",
                  border: "1px solid rgba(56,189,248,0.4)",
                  boxShadow: "0 0 20px rgba(56,189,248,0.2), 0 8px 32px rgba(0,0,0,0.5)",
                  animation: "floatUp 5s ease-in-out infinite",
                }}
              >
                <div className="h-7 w-7 rounded-lg bg-[#0ea5e9]/20 border border-[#38bdf8]/40 flex items-center justify-center">
                  <Brain className="h-3.5 w-3.5 text-[#38bdf8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#38bdf8] font-bold">AI ENGINE</span>
                  <span className="text-[9px] text-slate-500">Real-time processing</span>
                </div>
              </motion.div>

              {/* ════ FLOATING DATA NODE — top right ════ */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.05, duration: 0.7, ease: "easeOut" }}
                className="hidden lg:flex absolute -top-6 -right-2 xl:-right-6 z-30 items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-xl"
                style={{
                  background: "rgba(6,4,24,0.92)",
                  border: "1px solid rgba(192,132,252,0.4)",
                  boxShadow: "0 0 20px rgba(192,132,252,0.2), 0 8px 32px rgba(0,0,0,0.5)",
                  animation: "floatDown 5.8s ease-in-out infinite",
                }}
              >
                <div className="h-7 w-7 rounded-lg bg-[#9333ea]/20 border border-[#c084fc]/40 flex items-center justify-center">
                  <TrendingUp className="h-3.5 w-3.5 text-[#c084fc]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#c084fc] font-bold">ODOO 360°</span>
                  <span className="text-[9px] text-slate-500">+340% efficiency</span>
                </div>
              </motion.div>

              {/* ════ LIVE STATUS BADGE — bottom center ════ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
                className="hidden sm:flex absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl"
                style={{
                  background: "rgba(4,10,24,0.94)",
                  border: "1px solid rgba(52,211,153,0.4)",
                  boxShadow: "0 0 18px rgba(52,211,153,0.2), 0 8px 28px rgba(0,0,0,0.5)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-widest uppercase">All Systems Live</span>
              </motion.div>

              {/* ════════════════════════════════════════════════
                  CARD 1: AI Integrated ERP Solution
              ════════════════════════════════════════════════ */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotateY: -8, rotateX: 4 }}
                animate={{ opacity: 1, y: 0, rotateY: -4, rotateX: 2 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                whileHover={{ rotateY: 0, rotateX: 0, y: -14, scale: 1.04, transition: { duration: 0.4, ease: "easeOut" } }}
                className="w-full sm:w-[48%] max-w-[320px] sm:max-w-[340px] lg:max-w-[365px] xl:max-w-[385px] group cursor-pointer animate-float-up"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href="/products/ai-integrated-erp"
                  className="relative block transition-transform duration-300"
                >
                  <Image
                    src="/card-erp-v3.png"
                    alt="AI Integrated ERP Solution"
                    width={550}
                    height={496}
                    priority
                    quality={100}
                    className="w-full h-auto object-contain block transition-all duration-500 group-hover:brightness-110"
                    style={{
                      filter:
                        "drop-shadow(0 25px 45px rgba(0,0,0,0.85)) drop-shadow(0 0 35px rgba(56,189,248,0.38))",
                    }}
                  />
                </Link>
              </motion.div>

              {/* ════════════════════════════════════════════════
                  CARD 2: AI Integrated 360, Odoo — raised & larger
              ════════════════════════════════════════════════ */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotateY: 8, rotateX: 4 }}
                animate={{ opacity: 1, y: -28, rotateY: 4, rotateX: 2 }}
                transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
                whileHover={{ rotateY: 0, rotateX: 0, y: -44, scale: 1.04, transition: { duration: 0.4, ease: "easeOut" } }}
                className="w-full sm:w-[52%] max-w-[340px] sm:max-w-[365px] lg:max-w-[390px] xl:max-w-[420px] group cursor-pointer animate-float-down"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link
                  href="/products/ai-integrated-360-odoo"
                  className="relative block transition-transform duration-300"
                >
                  <Image
                    src="/card-odoo-v3.png"
                    alt="AI Integrated 360, Odoo"
                    width={610}
                    height={494}
                    priority
                    quality={100}
                    className="w-full h-auto object-contain block transition-all duration-500 group-hover:brightness-110"
                    style={{
                      filter:
                        "drop-shadow(0 25px 45px rgba(0,0,0,0.85)) drop-shadow(0 0 35px rgba(192,132,252,0.38))",
                    }}
                  />
                </Link>
              </motion.div>

            </div>{/* /cards */}

            {/* ── Neon Orbital Platform Rings ──────────────────── */}
            <svg
              className="pointer-events-none absolute -bottom-2 sm:-bottom-6 inset-x-0 w-full h-[170px] sm:h-[220px] overflow-visible z-0"
              viewBox="0 0 900 250"
              fill="none"
            >
              <defs>
                <linearGradient id="pRingCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.02" />
                  <stop offset="20%"  stopColor="#38bdf8" stopOpacity="0.0" />
                  <stop offset="40%"  stopColor="#38bdf8" stopOpacity="1" />
                  <stop offset="60%"  stopColor="#818cf8" stopOpacity="0.9" />
                  <stop offset="80%"  stopColor="#c084fc" stopOpacity="0.0" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="pRingMagenta" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%"   stopColor="#e879f9" stopOpacity="0.02" />
                  <stop offset="30%"  stopColor="#c084fc" stopOpacity="1" />
                  <stop offset="70%"  stopColor="#818cf8" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
                </linearGradient>
                <filter id="pGlow"><feGaussianBlur stdDeviation="6" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
                <filter id="pGlowLight"><feGaussianBlur stdDeviation="2.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
              </defs>

              {/* Outer neon ring */}
              <ellipse cx="450" cy="128" rx="430" ry="72" stroke="url(#pRingCyan)"    strokeWidth="2.5" filter="url(#pGlow)" />
              <ellipse cx="450" cy="128" rx="430" ry="72" stroke="#38bdf8"             strokeWidth="0.8" strokeOpacity="0.55" filter="url(#pGlowLight)" />

              {/* Mid neon ring */}
              <ellipse cx="450" cy="138" rx="370" ry="60" stroke="url(#pRingMagenta)" strokeWidth="2"   filter="url(#pGlow)" />

              {/* Inner subtle ring */}
              <ellipse cx="450" cy="145" rx="290" ry="46" stroke="#818cf8"             strokeWidth="1.2" strokeOpacity="0.4" filter="url(#pGlowLight)" />

              {/* Orbiting comet — cyan track */}
              <ellipse cx="450" cy="128" rx="430" ry="72" stroke="#67e8f9" strokeWidth="4"
                style={{ strokeDasharray: "160 1050", animation: "orbitGlow 9s linear infinite" }}
                filter="url(#pGlow)"
              />

              {/* Orbiting comet — purple track, opposite direction */}
              <ellipse cx="450" cy="138" rx="370" ry="60" stroke="#e879f9" strokeWidth="3"
                style={{ strokeDasharray: "120 960", animation: "orbitGlow 12s linear infinite reverse" }}
                filter="url(#pGlow)"
              />
            </svg>

            {/* ── Floor Energy Bloom ───────────────────────────── */}
            <div
              className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-[160px] rounded-[50%]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 85%, rgba(56,189,248,0.5) 0%, rgba(124,92,255,0.38) 25%, rgba(37,99,235,0.2) 55%, transparent 75%)",
                filter: "blur(35px)",
                opacity: 0.85,
              }}
            />

          </motion.div>{/* /perspective wrapper */}
        </motion.div>
      </div>{/* /grid */}


      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM FEATURE STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mt-10 sm:mt-12 lg:mt-14 mx-auto max-w-5xl w-full"
      >
        {/* Glass pill container */}
        <div
          className="relative rounded-2xl md:rounded-full p-[1px] overflow-hidden"
          style={{
            background: "linear-gradient(90deg, rgba(56,189,248,0.35) 0%, rgba(192,132,252,0.35) 50%, rgba(56,189,248,0.35) 100%)",
          }}
        >
          <div className="rounded-[calc(1rem-1px)] md:rounded-full bg-[#050a18]/90 backdrop-blur-2xl px-3 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {PILLARS.map(({ icon: Icon, label, sub, href, color, bg }, i) => (
              <Link
                key={i}
                href={href}
                className="group flex items-center gap-3.5 px-4 py-3 rounded-xl md:rounded-full border border-transparent hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300"
              >
                <div
                  className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: bg,
                    border: `1px solid ${color}55`,
                    boxShadow: `0 0 15px ${color}40`,
                    color,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className="font-heading text-sm font-bold text-white transition-colors duration-200"
                    style={{ "--hover-color": color } as React.CSSProperties}
                  >
                    {label}
                  </span>
                  <span className="text-xs text-[#64748b]">{sub}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
