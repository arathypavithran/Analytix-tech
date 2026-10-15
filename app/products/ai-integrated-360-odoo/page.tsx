import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import AnimatedIcon from "@/components/AnimatedIcon";
import Odoo360Visualization from "@/components/products/Odoo360Visualization";
import Accordion from "@/components/Accordion";
import InnerCTABand from "@/components/InnerCTABand";
import {
  Cpu,
  Sparkles,
  Users,
  CreditCard,
  Box,
  UserCheck,
  FolderKanban,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integrated 360, Odoo | Analytix BSS",
  description:
    "Experience Odoo as an Intelligent Business Platform. Go beyond standard ERP with AI-enhanced Odoo workflows, automation, analytics and connected business operations.",
};

const ODOO_360_MODULES = [
  { title: "CRM & Pipeline Intelligence", desc: "Omnichannel customer interaction tracking, predictive deal probability, automated quotes." },
  { title: "Sales & Invoicing Automation", desc: "Digital signatures, recurring subscription billing, instant ZATCA compliant e-invoicing." },
  { title: "Point of Sale (POS) & Retail", desc: "Real-time kitchen display sync, offline resilience, unified inventory depletion." },
  { title: "Supply Chain & Multi-Warehouse", desc: "Automated replenishment rules, land-cost calculations, barcode scanner workflows." },
  { title: "Project & Task Management", desc: "Timesheet tracking, milestone billing, Gantt dependencies, client approval portals." },
  { title: "HR, Payroll & Self-Service", desc: "Leave workflows, GCC labor contracts, automatic WPS compliance bank generation." },
];

const ODOO_AI_LAYER = [
  { title: "OCR Document Ingestion", desc: "Bills, vendor receipts, and delivery notes are parsed automatically and populated into Odoo." },
  { title: "Conversational Copilots", desc: "Empower staff to query financial records and stock levels through natural language prompts." },
  { title: "Intelligent Lead Assignment", desc: "Inbound inquiries are scored and assigned to the ideal sales representative instantly." },
  { title: "Smart Inventory Forecasts", desc: "Algorithms prevent overstocking and alert procurement to impending seasonal spikes." },
];

const ODOO_FAQS = [
  {
    question: "How does this differ from vanilla Odoo out of the box?",
    answer: "Vanilla Odoo is an excellent framework, but requires substantial manual entry and disconnected workflows. Our 360° deployment integrates custom AI ingestion agents, regional tax compliance out of the box, and pre-built workflows for GCC industries.",
  },
  {
    question: "Are you an official Odoo partner?",
    answer: "Yes, Analytix BSS is an active Odoo Silver Partner with certified developers and solution consultants located in Dubai and Riyadh.",
  },
  {
    question: "Can we integrate third-party platforms with our Odoo instance?",
    answer: "Yes. We build custom API connectors for POS hardware, logistics fleets, payment gateways (Telr, PayTabs, Network International), and e-commerce platforms (Shopify, WooCommerce, Magento).",
  },
];

export default function AIIntegrated360OdooPage() {
  return (
    <>
      <InnerHero
        tag="PRODUCT 02 // 360° PLATFORM"
        title="Experience Odoo as an Intelligent Business Platform"
        description="Go beyond standard ERP with AI-enhanced Odoo workflows, automation, analytics and connected business operations."
        ctaText="Explore 360 Odoo Demo"
        ctaHref="/contact"
      />

      {/* 1. PLATFORM OVERVIEW */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={22} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-[#06b6d4] font-bold uppercase tracking-wider block mb-2">
                UNIFIED 360° INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Connected Operations. Single Source of Truth.
              </h2>
              <p className="text-base text-[#b9b4cc] leading-relaxed mb-6">
                Odoo is most powerful when every module speaks to the other through an automated layer. We configure Odoo into a complete 360° command center tailored for Middle Eastern enterprises.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#06b6d4]" />
                  <span>Full-lifecycle CRM, Sales, Inventory, Accounting & HR integration</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#06b6d4]" />
                  <span>Embedded OCR parsing of vendor bills directly into accounts</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#06b6d4]" />
                  <span>Certified Odoo Silver Partner delivery with local GCC presence</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <Odoo360Visualization />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ODOO 360 MODULES */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Functional Suite"
            title="Integrated 360° Odoo Modules"
            description="Pre-configured, battle-tested module bundles for high-velocity commercial operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ODOO_360_MODULES.map((mod, idx) => (
              <Reveal key={mod.title} delay={idx * 0.08}>
                <TiltCard>
                  <div className="h-10 w-10 rounded-xl bg-[#06b6d4]/20 border border-[#06b6d4]/30 flex items-center justify-center text-[#06b6d4] mb-4">
                    <Sparkles className="h-5 w-5" />
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

      {/* 3. THE AI LAYER */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden bg-white/[0.02]">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Intelligence Enhancement"
            title="How AI Supercharges Your Odoo"
            description="We bridge modern machine-learning models directly into your Odoo database triggers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {ODOO_AI_LAYER.map((layer, idx) => (
              <Reveal key={layer.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-[#7c5cff]/20 border border-[#7c5cff]/30 flex items-center justify-center text-[#c58bff]">
                      <Cpu className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {layer.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="360° Odoo Platform Answers"
            description="Clear answers about licensing, customization, and local GCC support."
          />

          <div className="mt-10">
            <Accordion items={ODOO_FAQS} />
          </div>
        </div>
      </section>

      <InnerCTABand
        title="Transform Your Operations With AI-Integrated 360 Odoo"
        description="Connect with our Odoo Silver Partner team in Dubai or Riyadh to review your existing setup and roadmap."
        primaryCta="Schedule Odoo Walkthrough"
      />
    </>
  );
}
