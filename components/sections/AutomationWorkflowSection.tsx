"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Inbox,
  Cpu,
  GitBranch,
  Workflow,
  Users,
  Layers,
  Bell,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedIcon from "@/components/AnimatedIcon";
import { WORKFLOW_NODES } from "@/lib/content";

const ICON_MAP: Record<string, any> = {
  lead: Inbox,
  "ai-analysis": Cpu,
  decision: GitBranch,
  automation: Workflow,
  crm: Users,
  erp: Layers,
  notification: Bell,
};

export default function AutomationWorkflowSection() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("ai-analysis");

  const selectedNode =
    WORKFLOW_NODES.find((n) => n.id === selectedNodeId) || WORKFLOW_NODES[1];

  return (
    <section className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="automation">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="AI-Powered Service"
          title="Automate Processes. Accelerate Decisions."
          description="We identify repetitive processes, connect your systems and introduce intelligent automation where it creates measurable business value."
        />

        {/* Interactive Workflow Builder Canvas */}
        <div className="mt-12 rounded-[28px] border border-[rgba(72,139,255,0.24)] bg-gradient-to-b from-[#0A1930]/90 to-[#071426]/95 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(3,6,13,0.9)]">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(72,139,255,0.15)] pb-5 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#168BFF] animate-ping" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#168BFF] font-semibold">
                INTERACTIVE PIPELINE SIMULATOR
              </span>
            </div>
            <span className="text-xs font-mono text-[#96A8C2]/60">
              CLICK ANY WORKFLOW NODE TO INSPECT INTELLIGENCE
            </span>
          </div>

          {/* Workflow Sequence Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
            {WORKFLOW_NODES.map((node, idx) => {
              const isSelected = selectedNodeId === node.id;
              const Icon = ICON_MAP[node.id] || Workflow;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`relative p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0A1930] border-[#168BFF] shadow-[0_0_25px_rgba(22,139,255,0.4)] scale-105 z-20"
                      : "bg-[#071426]/70 border-[rgba(72,139,255,0.15)] hover:border-[#168BFF]/40 hover:bg-[#0A1930]/60"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#168BFF] text-white shadow-[0_0_12px_#168BFF]"
                          : "bg-[#1677FF]/15 text-[#168BFF] border border-[#1677FF]/30"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#96A8C2]/50">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#38D9C8] font-semibold block mb-0.5">
                      {node.role}
                    </span>
                    <span className="text-xs font-bold text-white leading-tight block">
                      {node.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Node Details Card */}
          <div className="mt-8 pt-6 border-t border-[rgba(72,139,255,0.15)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl bg-[#071426]/80 border border-[rgba(72,139,255,0.2)] p-6"
              >
                <div className="md:col-span-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-[#1677FF]/20 text-[#168BFF] font-mono text-xs font-bold border border-[#1677FF]/30">
                      ACTIVE STAGE: {selectedNode.label.toUpperCase()}
                    </span>
                    <span className="text-xs text-[#38D9C8] flex items-center gap-1 font-mono">
                      <CheckCircle2 className="h-3 w-3" /> Autonomous
                    </span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">
                    {selectedNode.desc}
                  </h4>
                  <p className="text-sm text-[#96A8C2] leading-relaxed">
                    {selectedNode.detail}
                  </p>
                </div>

                <div className="md:col-span-4 flex md:justify-end">
                  <Link
                    href="/services/ai-process-automation"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0A1930] hover:bg-[#1677FF]/15 border border-[rgba(72,139,255,0.3)] hover:border-[#168BFF]/60 px-5 py-3 text-sm font-semibold text-white transition-colors"
                  >
                    <span>Inspect Automation Squad</span>
                    <ArrowRight className="h-4 w-4 text-[#168BFF]" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
