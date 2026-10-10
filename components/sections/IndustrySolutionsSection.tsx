"use client";

import { motion } from "framer-motion";
import {
  Utensils,
  Truck,
  Factory,
  Building2,
  Briefcase,
  Layers,
  Cpu,
  Workflow,
  Shield,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";

const INDUSTRIES_DATA = [
  {
    title: "Food & Beverage",
    icon: Utensils,
    relevance: "AI ERP + 360 ODOO + AI AUTOMATION",
    desc: "Unify central kitchen batches, recipe margin control, multi-branch POS, and automated supplier replenishment.",
    stat: "100% Recipe Batch Traceability",
    accent: "#06b6d4",
  },
  {
    title: "Logistics & Supply Chain",
    icon: Truck,
    relevance: "AI ERP + 360 ODOO + AUTOMATION",
    desc: "Connect fleet telemetry, multi-warehouse routing, customs clearing documents, and automated invoice settlements.",
    stat: "Zero Blind-Spot Stock Accuracy",
    accent: "#7c5cff",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    relevance: "AI ERP + PREDICTIVE QUALITY",
    desc: "Automate bill of materials (BOM), scrap tracking, shop-floor work orders, and preventative maintenance schedules.",
    stat: "Real-Time OEE & Cost Tracking",
    accent: "#c58bff",
  },
  {
    title: "Construction & Contracting",
    icon: Building2,
    relevance: "AI ERP + 360 ODOO + COMPLIANCE",
    desc: "Track subcontractor IPC claims, retention receivables, job costing by milestone, and heavy equipment allocation.",
    stat: "Synchronized Milestone Billing",
    accent: "#22d3ee",
  },
  {
    title: "Professional Services",
    icon: Briefcase,
    relevance: "360 ODOO + AI AUTOMATION",
    desc: "Empower advisory and technical firms with billable utilization tracking, automated retainer billing, and client SLA portals.",
    stat: "Automated Retainer Cycles",
    accent: "#a78bfa",
  },
];

export default function IndustrySolutionsSection() {
  return (
    <section className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden" id="industries">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Industry Solutions"
          title="Intelligence Built for Your Industry"
          description="Every sector carries unique operational realities, supply chain dependencies, and regulatory mandates across the UAE and Saudi Arabia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full group">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="h-12 w-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `${ind.accent}18`,
                          border: `1px solid ${ind.accent}40`,
                          color: ind.accent,
                          boxShadow: `0 0 15px ${ind.accent}20`,
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70">
                        GCC TAILORED
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                      {ind.title}
                    </h3>

                    {/* Product Relevance Badge */}
                    <div className="mb-4">
                      <span className="text-[11px] font-mono text-[#06b6d4] font-semibold tracking-wide">
                        {ind.relevance}
                      </span>
                    </div>

                    <p className="text-sm text-[#b9b4cc] leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Miniature Animated Network on Hover */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-white/80">
                      {ind.stat}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_6px_#25D366]" />
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
