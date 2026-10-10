"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, CheckCircle2, Bot, ArrowUpRight } from "lucide-react";

export default function ERPVisualization() {
  return (
    <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl bg-[rgb(14,19,30)]/80 border border-white/10 p-4 sm:p-5 overflow-hidden flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
      {/* Background Tech Glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#7c5cff]/20 blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#06b6d4]/15 blur-[50px]" />

      {/* Header telemetry strip */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-[#7c5cff]/20 border border-[#7c5cff]/40 flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-[#c58bff]" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold text-[#c58bff] tracking-wider uppercase">
              AI BUSINESS CORE
            </div>
            <div className="text-xs font-semibold text-white">Autonomous Ledger & Forecast</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[10px] font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>REAL-TIME LIVE</span>
        </div>
      </div>

      {/* Mini ERP metrics & animated SVG chart */}
      <div className="grid grid-cols-3 gap-2.5 my-3">
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5">
          <span className="text-[10px] font-mono text-[#b9b4cc] block">Reconciled Cash</span>
          <span className="text-sm sm:text-base font-bold text-white font-mono">$1.42M</span>
          <span className="text-[10px] text-[#25D366] flex items-center gap-0.5 mt-0.5">
            <ArrowUpRight className="h-2.5 w-2.5" /> +14.8% auto
          </span>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5">
          <span className="text-[10px] font-mono text-[#b9b4cc] block">Inventory Health</span>
          <span className="text-sm sm:text-base font-bold text-[#06b6d4] font-mono">99.4%</span>
          <span className="text-[10px] text-white/50 block mt-0.5">0 stockouts</span>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5">
          <span className="text-[10px] font-mono text-[#b9b4cc] block">Workflows</span>
          <span className="text-sm sm:text-base font-bold text-[#c58bff] font-mono">48 Active</span>
          <span className="text-[10px] text-[#25D366] flex items-center gap-0.5 mt-0.5">
            <CheckCircle2 className="h-2.5 w-2.5" /> Synchronized
          </span>
        </div>
      </div>

      {/* Simulated Live SVG Telemetry Chart */}
      <div className="relative flex-1 w-full flex items-end">
        <svg className="w-full h-16 sm:h-20 overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q40,48 80,52 T160,28 T240,34 T300,10 L300,70 L0,70 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M0,60 Q40,48 80,52 T160,28 T240,34 T300,10"
            fill="none"
            stroke="#c58bff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Pulsing end point */}
          <circle cx="300" cy="10" r="3.5" fill="#06b6d4" />
          <circle cx="300" cy="10" r="6" fill="#06b6d4" opacity="0.4" className="animate-ping" />
        </svg>
      </div>

      {/* AI Recommendation notification badge */}
      <div className="mt-2 pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-white/80">
          <Bot className="h-3.5 w-3.5 text-[#06b6d4]" />
          <span className="text-[11px] truncate">
            AI Insight: Reorder warehouse batch #A82 to prevent projected spike
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#c58bff] shrink-0 font-semibold">
          CONFIDENCE 98%
        </span>
      </div>
    </div>
  );
}
