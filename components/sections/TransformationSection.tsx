"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileSpreadsheet,
  Calculator,
  Box,
  Mail,
  Megaphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { TRANSFORMATION_SYSTEMS } from "@/lib/content";

const ICON_MAP: Record<string, any> = {
  Users,
  FileSpreadsheet,
  Calculator,
  Box,
  Mail,
  Megaphone,
};

export default function TransformationSection() {
  const [activeStage, setActiveStage] = useState<"before" | "after">("after");

  return (
    <section className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="transformation">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Business Transformation"
          title="From Disconnected Islands to One Unified Engine"
          description="Legacy operations force teams to juggle spreadsheets, siloed CRMs, and manual reconciliation. Analytix BSS unifies all workflows into an intelligent operating layer."
        />

        {/* Interactive Mode Toggle */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#071426] border border-[rgba(72,139,255,0.2)] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setActiveStage("before")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeStage === "before"
                  ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-lg"
                  : "text-[#96A8C2] hover:text-white"
              }`}
            >
              01 Disconnected Chaos
            </button>
            <button
              type="button"
              onClick={() => setActiveStage("after")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeStage === "after"
                  ? "bg-gradient-to-r from-[#1677FF] to-[#38D9C8] text-white shadow-[0_0_20px_rgba(22,139,255,0.5)]"
                  : "text-[#96A8C2] hover:text-white"
              }`}
            >
              02 Connected AI Business
            </button>
          </div>
        </div>

        {/* Transformation Stage Visual */}
        <div className="relative min-h-[420px] rounded-[32px] border border-[rgba(72,139,255,0.24)] bg-gradient-to-b from-[#0A1930]/90 to-[#071426]/95 p-8 sm:p-12 backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-[0_25px_60px_rgba(3,6,13,0.9)]">
          {activeStage === "before" ? (
            /* BEFORE: Fractured Disconnected Silos */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {TRANSFORMATION_SYSTEMS.map((sys) => {
                const Icon = ICON_MAP[sys.icon] || Users;
                return (
                  <div
                    key={sys.id}
                    className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center gap-4 shadow-md"
                  >
                    <div className="h-12 w-12 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {sys.name}
                      </span>
                      <span className="text-xs text-red-300/80">
                        Isolated · Manual Sync Required
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            /* AFTER: Connected Unified AI Ecosystem */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl flex flex-col items-center text-center"
            >
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-tr from-[#1677FF] to-[#38D9C8] flex items-center justify-center text-white shadow-[0_0_40px_rgba(22,139,255,0.6)] mb-6 animate-pulse">
                <Cpu className="h-10 w-10" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#38D9C8] font-bold mb-2">
                SYNCHRONIZED OPERATING PLATFORM
              </span>

              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#F5F8FF] mb-4">
                One Connected Business. Zero Manual Friction.
              </h3>

              <p className="text-base sm:text-lg text-[#96A8C2] max-w-2xl mb-8">
                Every transaction, inventory change, lead, and invoice flows automatically through unified AI rules into your financial ledger.
              </p>

              {/* Pillars Ribbon */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A1930]/80 border border-[rgba(72,139,255,0.25)] text-sm font-semibold text-white">
                  <Cpu className="h-4 w-4 text-[#38D9C8]" /> AI ENGINE
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A1930]/80 border border-[rgba(72,139,255,0.25)] text-sm font-semibold text-white">
                  <Layers className="h-4 w-4 text-[#168BFF]" /> CORE ERP
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A1930]/80 border border-[rgba(72,139,255,0.25)] text-sm font-semibold text-white">
                  <Workflow className="h-4 w-4 text-[#1677FF]" /> AUTOMATION
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A1930]/80 border border-[rgba(72,139,255,0.25)] text-sm font-semibold text-white">
                  <ShieldCheck className="h-4 w-4 text-[#38D9C8]" /> SECURITY
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
