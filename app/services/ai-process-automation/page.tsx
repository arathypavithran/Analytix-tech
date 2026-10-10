import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import AnimatedIcon from "@/components/AnimatedIcon";
import Accordion from "@/components/Accordion";
import InnerCTABand from "@/components/InnerCTABand";
import AutomationWorkflowSection from "@/components/sections/AutomationWorkflowSection";
import {
  Workflow,
  Cpu,
  Zap,
  ArrowRight,
  CheckCircle2,
  Binary,
  Layers,
  Sparkles,
  BarChart3,
  RefreshCw,
  GitMerge,
  ShieldCheck,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Process Automation Services | Analytix BSS",
  description:
    "Connect repetitive business processes with intelligent automation and AI-driven workflows. Eliminate friction, accelerate decision cycles, and scale operations.",
  openGraph: {
    title: "AI Process Automation | Analytix BSS",
    description:
      "Automate the Work. Amplify the People. End-to-end intelligent automation pipelines connecting ERP, CRM, and operational systems.",
    url: "https://analytixtech.io/services/ai-process-automation",
  },
};

const DISCOVERY_PILLARS = [
  {
    step: "01",
    title: "Process Discovery & Mining",
    desc: "We analyze cross-departmental operations, data exchanges, and manual handoffs to pinpoint latency choke points and repetitive overhead.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Automation Strategy & ROI Model",
    desc: "Architect a prioritization matrix identifying high-impact quick wins alongside resilient enterprise architecture foundations.",
    icon: "Target",
  },
  {
    step: "03",
    title: "AI Integration & Ingestion",
    desc: "Embed machine learning, computer vision, and NLP models to parse unstructured invoices, emails, tickets, and contracts autonomously.",
    icon: "Brain",
  },
  {
    step: "04",
    title: "Workflow Automation Engineering",
    desc: "Develop orchestration pipelines with error-handling, rollback policies, human-in-the-loop approvals, and audit traceability.",
    icon: "Workflow",
  },
  {
    step: "05",
    title: "Enterprise API Integration",
    desc: "Bridge core ERPs (Odoo, SAP, Oracle), legacy SQL systems, third-party portals, and messaging channels without fragile scraping.",
    icon: "Binary",
  },
  {
    step: "06",
    title: "Real-Time Telemetry & Monitoring",
    desc: "Deploy executive observability dashboards tracking task throughput, execution health, exception rates, and time saved in real time.",
    icon: "Activity",
  },
  {
    step: "07",
    title: "Continuous Self-Optimization",
    desc: "Feedback loops refine decision accuracy and retrain heuristic models as business volume and document formats evolve over time.",
    icon: "RefreshCw",
  },
];

const USE_CASES = [
  {
    category: "Finance & Accounting",
    title: "3-Way Invoice Matching & Reconciliation",
    impact: "Zero manual data entry from PO to voucher posting",
    desc: "Automated OCR extracts vendor line items, verifies purchase orders, matches goods delivery notes, and queues approved journals for release.",
  },
  {
    category: "Customer Operations",
    title: "Omnichannel Inbound Lead & Ticket Triage",
    impact: "Instant routing and AI-drafted contextual responses",
    desc: "Classify incoming inquiries across email, WhatsApp, and web forms. Extract key parameters, create CRM records, and trigger immediate follow-up actions.",
  },
  {
    category: "Supply Chain & Procurement",
    title: "Automated PO Issuance & RFQ Analysis",
    impact: "Autonomous vendor quotation comparison matrix",
    desc: "When inventory thresholds trigger replenishment, parse supplier bids into standardized tables, flag anomalies, and prepare purchase orders for authorization.",
  },
  {
    category: "Human Capital Management",
    title: "Employee Onboarding & Document Verification",
    impact: "Seamless compliance & WPS sync across GCC entities",
    desc: "Automate passport/national ID validation, contract generation, system provisioning, and payroll enrollment across UAE & Saudi labor frameworks.",
  },
];

const AUTOMATION_FAQS = [
  {
    question: "How does AI automation differ from traditional RPA (Robotic Process Automation)?",
    answer:
      "Traditional RPA relies on rigid rule-based scripts that break whenever a screen or UI format changes. Our AI automation combines intelligent document understanding (LLMs/vision), adaptive decision logic, and API-first pipelines, allowing systems to handle unstructured data, unexpected variations, and multi-step decisions intelligently.",
  },
  {
    question: "Do we need to replace our current software to implement automation?",
    answer:
      "No. We build intelligent automation layers that sit on top of your existing software, connecting your ERP, CRM, databases, and communication channels through secure APIs and webhooks without replacing underlying core systems.",
  },
  {
    question: "What happens when the AI is unsure about a document or decision?",
    answer:
      "We design every workflow with Human-in-the-Loop (HITL) guardrails. If confidence scores fall below a defined threshold (e.g., 95%), the workflow flags the item to a human supervisor via Slack, Teams, or ERP notification with the exact anomaly highlighted for one-click verification.",
  },
  {
    question: "How do you guarantee data security and regional data residency?",
    answer:
      "All automated pipelines are deployed within your approved cloud or on-premise infrastructure in compliance with UAE and Saudi Arabian data sovereignty requirements. Data is encrypted in transit and at rest, and never used to train public models.",
  },
];

export default function AIProcessAutomationPage() {
  return (
    <>
      <InnerHero
        tag="SERVICE 01 // INTELLIGENT WORKFLOWS"
        title="Automate the Work. Amplify the People."
        description="Connect repetitive business processes with intelligent automation and AI-driven workflows designed to accelerate decision cycles and scale operational throughput."
        ctaText="Book Automation Discovery"
        ctaHref="/contact"
      />

      {/* 1. INTERACTIVE WORKFLOW SECTION */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={20} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INTERACTIVE WORKFLOW ENGINE"
            title="From Manual Friction to Autonomous Flow"
            description="Explore how an incoming business event is received, analyzed by AI, verified, and executed seamlessly across your core business systems."
          />
          <AutomationWorkflowSection />
        </div>
      </section>

      {/* 2. THE 7-STEP ARCHITECTURE JOURNEY */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="END-TO-END METHODOLOGY"
            title="Structured Architecture for Enterprise Reliability"
            description="Our battle-tested framework ensures automations are maintainable, audited, secure, and tightly aligned with measurable business outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISCOVERY_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.step} delay={idx * 0.08}>
                <TiltCard className="p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-bold text-[#c58bff]">
                        {pillar.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#c58bff]">
                        <Workflow className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#b9b4cc] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}

            {/* Special Highlight Card */}
            <Reveal delay={0.56}>
              <div className="rounded-2xl p-7 h-full flex flex-col justify-between bg-gradient-to-br from-[#52257c]/40 via-black/40 to-cyan-900/20 border border-cyan-500/30 backdrop-blur-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                    <span>OUTCOME-LED VALUE</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    Predictable & Scalable Execution
                  </h3>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed mb-4">
                    Our team develops dedicated test suites, automated health checks, and SLA monitors for every workflow deployed.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Schedule technical consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. CORE ENTERPRISE USE CASES */}
      <section className="relative py-20 sm:py-28 border-t border-white/10">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OPERATIONAL REALITIES"
            title="High-Value Automation Blueprints"
            description="Proven enterprise workflows engineered to eliminate operational drag across core organizational departments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-purple-500/30 transition-all duration-300">
                  <span className="text-xs font-mono font-semibold text-[#c58bff] uppercase tracking-wider block mb-2">
                    {uc.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {uc.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] text-xs font-mono text-emerald-400 mb-4 border border-emerald-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{uc.impact}</span>
                  </div>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TECHNICAL FAQ"
            title="AI Automation Questions"
            description="Direct answers on integration, human-in-the-loop oversight, and system security."
          />
          <Accordion items={AUTOMATION_FAQS} />
        </div>
      </section>

      {/* 5. CTA */}
      <InnerCTABand
        title="Ready to Free Your Team from Repetitive Operations?"
        description="Book a technical discovery session with our AI workflow architects to identify your organization's highest-ROI automation opportunities."
        primaryText="Schedule Automation Audit"
        primaryHref="/contact"
        secondaryText="Explore AI ERP"
        secondaryHref="/products/ai-integrated-erp"
      />
    </>
  );
}
