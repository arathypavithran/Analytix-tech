"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  FileText,
  Search,
  BarChart2,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const MARKETING_MODULES = [
  { label: "AUDIENCE", icon: Target, desc: "Algorithmic ICP Segmentation" },
  { label: "CONTENT", icon: FileText, desc: "Dynamic LLM Asset Variations" },
  { label: "CAMPAIGNS", icon: Zap, desc: "Multi-Channel Bid Automation" },
  { label: "SEO ENGINE", icon: Search, desc: "Predictive Intent Tracking" },
  { label: "ANALYTICS", icon: BarChart2, desc: "Revenue Attribution Ledger" },
  { label: "CONVERSION", icon: TrendingUp, desc: "Autonomous CRO Loops" },
];

export default function AIMarketingSection() {
  return (
    <section className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="marketing">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Intelligent Revenue Generation"
          title="Marketing That Thinks With Your Business"
          description="Use AI-powered insights, automation and personalization to improve campaigns, customer engagement and conversion with direct ERP revenue attribution."
        />

        {/* AI Marketing Command Center */}
        <div className="mt-12 rounded-[28px] border border-[rgba(72,139,255,0.24)] bg-gradient-to-b from-[#0A1930]/90 to-[#071426]/95 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(3,6,13,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Cols: Command Center Grid with Central AI Engine */}
            <div className="lg:col-span-8 relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {MARKETING_MODULES.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div
                      key={mod.label}
                      className="p-4 rounded-2xl bg-[#071426]/75 border border-[rgba(72,139,255,0.15)] hover:border-[#168BFF]/50 hover:bg-[#0A1930]/80 transition-all duration-300 group"
                    >
                      <div className="h-9 w-9 rounded-xl bg-[#1677FF]/15 border border-[#1677FF]/30 flex items-center justify-center text-[#168BFF] mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-white block mb-1">
                        {mod.label}
                      </span>
                      <span className="text-[11px] text-[#96A8C2] leading-tight block">
                        {mod.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Central Banner Ribbon */}
              <div className="mt-4 p-4 rounded-xl bg-[#040914]/80 border border-[rgba(72,139,255,0.2)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#168BFF]" />
                  <span className="font-mono text-xs text-white/90">
                    AI MARKETING ENGINE // DIRECT ERP REVENUE LINKED
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#38D9C8]">
                  CONTINUOUS LEARNING
                </span>
              </div>
            </div>

            {/* Right 4 Cols: Illustrative Telemetry Metrics Cards */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-[#071426]/80 border border-[rgba(72,139,255,0.2)]">
                <span className="text-xs font-mono text-[#96A8C2] block mb-1">
                  Campaign Velocity
                </span>
                <span className="text-2xl font-bold font-mono text-[#38D9C8]">
                  +28% Efficiency
                </span>
                <span className="text-[11px] text-[#96A8C2]/70 block mt-1">
                  Predictive ad spend routing
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#071426]/80 border border-[rgba(72,139,255,0.2)]">
                <span className="text-xs font-mono text-[#96A8C2] block mb-1">
                  Inbound Lead Scoring
                </span>
                <span className="text-2xl font-bold font-mono text-[#168BFF]">
                  +34% Qualified
                </span>
                <span className="text-[11px] text-[#96A8C2]/70 block mt-1">
                  Algorithmic buyer intent filtering
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#071426]/80 border border-[rgba(72,139,255,0.2)]">
                <span className="text-xs font-mono text-[#96A8C2] block mb-1">
                  Audience Engagement
                </span>
                <span className="text-2xl font-bold font-mono text-[#25D366]">
                  +41% Retention
                </span>
                <span className="text-[11px] text-[#96A8C2]/70 block mt-1">
                  Personalized dynamic content
                </span>
              </div>

              <span className="text-[10px] font-mono text-[#96A8C2]/50 block px-1">
                * Real-time telemetry metrics demonstrating AI optimization performance.
              </span>

              <div className="pt-2">
                <Link
                  href="/services/ai-marketing"
                  className="inline-flex items-center justify-between w-full rounded-xl bg-[#0A1930] hover:bg-[#1677FF]/15 border border-[rgba(72,139,255,0.3)] hover:border-[#168BFF]/60 px-4 py-3 text-sm font-semibold text-white transition-colors"
                >
                  <span>Explore AI Marketing Squad</span>
                  <ArrowRight className="h-4 w-4 text-[#168BFF]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
