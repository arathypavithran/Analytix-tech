"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Brain,
  Settings,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function HeroProductStage() {
  return (
    <div className="relative w-full pt-2 sm:pt-4 lg:pt-6 pb-6 sm:pb-10 select-none">
      {/* =====================================================================
          1. DESKTOP & TABLET: 100% VISUAL ACCURACY REFERENCE STAGE (>= md)
          ===================================================================== */}
      <div className="relative w-full hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden"
        >
          {/* Exact Master Reference Artwork with Seamless Feathers at 2048x846 Resolution */}
          <Image
            src="/hero-reference-seamless.png"
            alt="Intelligent Systems, Powered by AI - AI Integrated ERP Solution & AI Integrated 360, Odoo"
            width={2048}
            height={846}
            priority
            quality={100}
            className="w-full h-auto object-contain block pointer-events-none select-none"
          />

          {/* -----------------------------------------------------------------
              HOTSPOT 1: "See Our Solutions" CTA Button
              ----------------------------------------------------------------- */}
          <Link
            href="#products"
            aria-label="See Our Solutions"
            className="absolute rounded-full cursor-pointer z-30 transition-all duration-300 hover:ring-2 hover:ring-blue-400 hover:shadow-[0_0_35px_rgba(37,99,235,0.9)] hover:scale-[1.02]"
            style={{
              left: "5.61%",
              top: "54.37%",
              width: "17.82%",
              height: "11.23%",
            }}
          >
            <span className="sr-only">See Our Solutions</span>
          </Link>

          {/* -----------------------------------------------------------------
              HOTSPOT 2: Card 1 (AI Integrated ERP Solution)
              ----------------------------------------------------------------- */}
          <Link
            href="/products/ai-integrated-erp"
            aria-label="AI Integrated ERP Solution"
            className="absolute rounded-[28px] cursor-pointer z-30 transition-all duration-300 hover:ring-2 hover:ring-[#38bdf8] hover:shadow-[0_0_45px_rgba(56,189,248,0.55)] hover:-translate-y-1"
            style={{
              left: "46.63%",
              top: "7.09%",
              width: "22.70%",
              height: "52.60%",
            }}
          >
            <span className="sr-only">AI Integrated ERP Solution</span>
          </Link>

          {/* -----------------------------------------------------------------
              HOTSPOT 3: Card 2 (AI Integrated 360, Odoo)
              ----------------------------------------------------------------- */}
          <Link
            href="/products/ai-integrated-360-odoo"
            aria-label="AI Integrated 360, Odoo"
            className="absolute rounded-[28px] cursor-pointer z-30 transition-all duration-300 hover:ring-2 hover:ring-[#c084fc] hover:shadow-[0_0_45px_rgba(192,132,252,0.55)] hover:-translate-y-1"
            style={{
              left: "69.58%",
              top: "10.64%",
              width: "25.15%",
              height: "52.60%",
            }}
          >
            <span className="sr-only">AI Integrated 360, Odoo</span>
          </Link>

          {/* -----------------------------------------------------------------
              HOTSPOT 4: Bottom Feature Strip - Interactive Hotspots
              ----------------------------------------------------------------- */}
          <div
            className="absolute z-30 flex items-center justify-between"
            style={{
              left: "17.09%",
              top: "74.47%",
              width: "65.67%",
              height: "14.77%",
            }}
          >
            {/* Item 1: AI-Powered Insights */}
            <Link
              href="#products"
              aria-label="AI-Powered Insights"
              className="h-full flex-1 rounded-l-full cursor-pointer transition-colors hover:bg-white/[0.04]"
            >
              <span className="sr-only">AI-Powered Insights</span>
            </Link>

            {/* Item 2: Process Automation */}
            <Link
              href="/services/ai-process-automation"
              aria-label="Process Automation"
              className="h-full flex-1 cursor-pointer transition-colors hover:bg-white/[0.04]"
            >
              <span className="sr-only">Process Automation</span>
            </Link>

            {/* Item 3: Enterprise Security */}
            <Link
              href="/services/cyber-security"
              aria-label="Enterprise Security"
              className="h-full flex-1 cursor-pointer transition-colors hover:bg-white/[0.04]"
            >
              <span className="sr-only">Enterprise Security</span>
            </Link>

            {/* Item 4: Scalable Business Solutions */}
            <Link
              href="#products"
              aria-label="Scalable Business Solutions"
              className="h-full flex-1 rounded-r-full cursor-pointer transition-colors hover:bg-white/[0.04]"
            >
              <span className="sr-only">Scalable Business Solutions</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* =====================================================================
          2. MOBILE VIEW (< md): RESPONSIVE STACKED HERO BANNER
          ===================================================================== */}
      <div className="block md:hidden text-left">
        {/* Eyebrow Accent */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8 bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]" />
          <span className="font-mono text-xs font-bold tracking-widest uppercase">
            <span className="text-white">AI-POWERED</span>{" "}
            <span className="text-[#38bdf8]">BUSINESS TRANSFORMATION</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5">
          Intelligent Systems,
          <br />
          <span className="text-[#c084fc]">Powered by</span>{" "}
          <span className="text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">AI</span>
        </h1>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base text-[#94a3b8] font-normal leading-relaxed mb-7 max-w-lg">
          Transform your business with AI-driven ERP solutions, automation, and secure digital operations — all in one intelligent ecosystem.
        </p>

        {/* Primary CTA */}
        <div className="mb-10">
          <Link
            href="#products"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.75)] border border-blue-400/40 transition-all duration-300"
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span>See Our Solutions</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Product Cards Stacked */}
        <div className="grid grid-cols-1 gap-5 w-full mb-10">
          <Link
            href="/products/ai-integrated-erp"
            className="relative block rounded-[24px] overflow-hidden border border-[#38bdf8]/60 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-transform active:scale-[0.98]"
          >
            <Image
              src="/card-erp-clean.png"
              alt="AI Integrated ERP Solution"
              width={600}
              height={624}
              priority
              className="w-full h-auto object-contain"
            />
          </Link>

          <Link
            href="/products/ai-integrated-360-odoo"
            className="relative block rounded-[24px] overflow-hidden border border-[#c084fc]/60 shadow-[0_0_30px_rgba(192,132,252,0.25)] transition-transform active:scale-[0.98]"
          >
            <Image
              src="/card-odoo-clean.png"
              alt="AI Integrated 360, Odoo"
              width={636}
              height={600}
              priority
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>

        {/* Bottom Feature Capsule Mobile */}
        <div className="rounded-2xl border border-white/[0.12] bg-[#060b18]/85 backdrop-blur-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#0284c7]/20 border border-[#38bdf8]/50 flex items-center justify-center text-[#38bdf8]">
              <Brain className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-xs font-bold text-white">AI-Powered</span>
              <span className="text-[11px] text-[#94a3b8]">Insights</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#0284c7]/20 border border-[#38bdf8]/50 flex items-center justify-center text-[#38bdf8]">
              <Settings className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-xs font-bold text-white">Process</span>
              <span className="text-[11px] text-[#94a3b8]">Automation</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#2563eb]/20 border border-[#60a5fa]/50 flex items-center justify-center text-[#60a5fa]">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-xs font-bold text-white">Enterprise</span>
              <span className="text-[11px] text-[#94a3b8]">Security</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#7c5cff]/20 border border-[#c084fc]/50 flex items-center justify-center text-[#c084fc]">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-xs font-bold text-white">Scalable</span>
              <span className="text-[11px] text-[#94a3b8]">Business Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. ACCESSIBLE SEO DATA FOR CRAWLERS & SCREEN READERS
          ===================================================================== */}
      <div className="sr-only">
        <h1>Intelligent Systems, Powered by AI</h1>
        <p>
          Transform your business with AI-driven ERP solutions, automation, and secure digital operations — all in one intelligent ecosystem.
        </p>
        <div>
          <h2>Our Products</h2>
          <ul>
            <li>
              <Link href="/products/ai-integrated-erp">AI Integrated ERP Solution</Link> - Smarter operations with AI-powered ERP for greater efficiency and control.
            </li>
            <li>
              <Link href="/products/ai-integrated-360-odoo">AI Integrated 360, Odoo</Link> - A complete business management solution with the power of AI and Odoo.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
