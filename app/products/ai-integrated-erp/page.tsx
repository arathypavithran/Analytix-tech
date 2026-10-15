import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import AnimatedIcon from "@/components/AnimatedIcon";
import ERPVisualization from "@/components/products/ERPVisualization";
import Accordion from "@/components/Accordion";
import InnerCTABand from "@/components/InnerCTABand";
import {
  Layers,
  Cpu,
  Workflow,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Database,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integrated ERP Solution | Analytix BSS",
  description:
    "An intelligent ERP environment designed to connect core business operations, automate repetitive workflows and turn business data into actionable insights.",
};

const ERP_MODULES = [
  { title: "Finance & Accounting", desc: "Automated general ledger, ZATCA Phase 2 e-invoicing, multi-currency cash flow radar." },
  { title: "Supply Chain & Inventory", desc: "Predictive replenishment, multi-warehouse routing, real-time stock valuation." },
  { title: "Procurement & Vendor POs", desc: "Automated 3-way invoice matching, supplier scorecarding, contract lifecycle rules." },
  { title: "Sales & Order Routing", desc: "Omnichannel quote-to-cash pipelines, automated discount approvals, credit limit controls." },
  { title: "HR & Regional Payroll", desc: "Wage Protection System (WPS) automation, automated gratuity calculation, attendance sync." },
  { title: "Manufacturing & Operations", desc: "Dynamic BOM calculations, work order scheduling, scrap and variance telemetry." },
];

const AI_CAPABILITIES = [
  { title: "Predictive Cash Flow Radar", desc: "Machine-learning models anticipate payment delays and runway trends 90 days ahead." },
  { title: "Autonomous Invoice Ingestion", desc: "Computer vision and NLP parse messy vendor PDFs straight into balanced ledger entries." },
  { title: "Demand & Stock Optimization", desc: "Algorithms prevent stock-outs and minimize carrying costs based on seasonal velocity." },
  { title: "Compliance Anomaly Detection", desc: "Continuous scanning flags duplicate payments, tax discrepancies, and audit risks instantly." },
];

const IMPLEMENTATION_STEPS = [
  { step: "01", title: "Architecture & Gap Audit", desc: "Review of existing charts of accounts, supply chain nodes, and data schemas." },
  { step: "02", title: "Custom Module Engineering", desc: "Tailoring database fields, approval hierarchies, and regional compliance rules." },
  { step: "03", title: "AI Model Fine-Tuning & Sync", desc: "Connecting OCR models, automated decision triggers, and legacy data migration." },
  { step: "04", title: "Phased Go-Live & Support", desc: "Parallel testing, user certification, and continuous on-site/remote hypercare." },
];

const ERP_FAQS = [
  {
    question: "How does the AI layer connect to our existing database?",
    answer: "Our AI engine integrates via secure REST APIs and webhooks. It reads transaction streams, executes predictive routines, and writes validated entries directly back to the database with full audit logging.",
  },
  {
    question: "Is this solution certified for GCC tax authorities (ZATCA / UAE FTA)?",
    answer: "Yes. Our financial modules include native compliance with Saudi Arabia ZATCA Phase 2 E-Invoicing (FATOORA cryptographic stamping) and UAE FTA corporate tax guidelines.",
  },
  {
    question: "Can we migrate our historical data without losing continuity?",
    answer: "We carry out comprehensive ETL migrations ensuring legacy customer histories, journal entries, and inventory valuations are cleaned, verified, and mapped before go-live.",
  },
];

export default function AIIntegratedERPPage() {
  return (
    <>
      <InnerHero
        tag="PRODUCT 01 // ENTERPRISE CORE"
        title="Turn Your Business Data Into Intelligent Decisions"
        description="Connect core business operations through an AI-enabled ERP environment designed for visibility, automation, and scalable growth."
        ctaText="Request Architecture Review"
        ctaHref="/contact"
      />

      {/* 1. PRODUCT OVERVIEW & VISUALIZATION */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={22} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-[#7c5cff] font-bold uppercase tracking-wider block mb-2">
                MODULAR AUTONOMOUS BACKBONE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Engineered for High-Scale Enterprise Performance
              </h2>
              <p className="text-base text-[#b9b4cc] leading-relaxed mb-6">
                Traditional ERP systems are glorified historical filing cabinets. Analytix AI ERP is an active operating engine that connects your finance, supply chain, and workforce into an automated ecosystem.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#7c5cff]" />
                  <span>Real-time multi-branch and multi-entity financial consolidation</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#7c5cff]" />
                  <span>Automated 3-way PO, GRN, and vendor invoice matching</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#7c5cff]" />
                  <span>Embedded machine-learning forecasting and anomaly alerts</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <ERPVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE MODULES */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="System Architecture"
            title="Core Enterprise Modules"
            description="Built to eliminate departmental silos and ensure unified transactional integrity across all business operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ERP_MODULES.map((mod, idx) => (
              <Reveal key={mod.title} delay={idx * 0.08}>
                <TiltCard>
                  <div className="h-10 w-10 rounded-xl bg-[#7c5cff]/20 border border-[#7c5cff]/30 flex items-center justify-center text-[#c58bff] mb-4">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed">
                    {mod.desc}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI CAPABILITIES */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden bg-white/[0.02]">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Machine Intelligence"
            title="Embedded AI Capabilities"
            description="Intelligence operating directly inside your transactional database layer."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {AI_CAPABILITIES.map((cap, idx) => (
              <Reveal key={cap.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-[#06b6d4]/20 border border-[#06b6d4]/30 flex items-center justify-center text-[#06b6d4]">
                      <Cpu className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPLEMENTATION JOURNEY */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Delivery Methodology"
            title="The Implementation Journey"
            description="A disciplined 4-stage engineering lifecycle engineered to prevent operational downtime."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {IMPLEMENTATION_STEPS.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.1}>
                <TiltCard>
                  <span className="font-mono text-3xl font-extrabold text-[#7c5cff]/40 mb-3 block">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed">
                    {step.desc}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT FAQ */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="AI ERP Questions Answered"
            description="Key details regarding deployment timelines, integration security, and regional compliance."
          />

          <div className="mt-10">
            <Accordion items={ERP_FAQS} />
          </div>
        </div>
      </section>

      <InnerCTABand
        title="Schedule an AI ERP Architecture Session"
        description="Speak with our enterprise solutions architects in Dubai or Riyadh to review your chart of accounts and operational workflows."
        primaryCta="Book Strategy Call"
      />
    </>
  );
}
