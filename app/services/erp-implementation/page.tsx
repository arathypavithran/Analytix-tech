import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Accordion from "@/components/Accordion";
import InnerCTABand from "@/components/InnerCTABand";
import {
  Boxes,
  Settings,
  Layers,
  ArrowDownUp,
  GraduationCap,
  LifeBuoy,
  Database,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ERP Implementation Services | Analytix BSS",
  description:
    "End-to-end Odoo ERP implementation, custom module development, data migration, and enterprise integrations. Official Odoo Silver Partner in Dubai and Riyadh.",
  openGraph: {
    title: "ERP Implementation | Analytix BSS",
    description:
      "Deploy, configure, and scale Odoo ERP with custom modules, legacy data migration, and seamless third-party integrations tailored for GCC enterprises.",
    url: "https://analytixtech.io/services/erp-implementation",
  },
};

const ERP_MODULES = [
  {
    title: "ERP Setup & Configuration",
    tagline: "Foundation Deployment",
    desc: "Full deployment of Odoo Community or Enterprise tailored to GCC accounting standards, multi-currency wallets, and regional VAT/ZATCA compliance.",
    icon: Settings,
  },
  {
    title: "Custom Module Development",
    tagline: "Tailored Business Logic",
    desc: "Python module customization that mirrors your exact unique workflows rather than forcing you to change your business to fit standard software.",
    icon: Boxes,
  },
  {
    title: "Third-Party & Gateway Integration",
    tagline: "Seamless Connectivity",
    desc: "Direct bidirectional syncing with e-commerce portals, bank feeds, payment gateways, barcode scanners, and warehouse management systems.",
    icon: Layers,
  },
  {
    title: "Data Migration from Legacy Systems",
    tagline: "Zero-Loss Transfer",
    desc: "Zero-data-loss extraction, deduplication, and sanitization from SAP, Oracle, QuickBooks, Excel sheets, and bespoke legacy databases.",
    icon: ArrowDownUp,
  },
  {
    title: "Team Training & Change Management",
    tagline: "Adoption Acceleration",
    desc: "Role-specific bilingual training sessions, recorded screen walkthroughs, and user manuals to guarantee high daily staff adoption.",
    icon: GraduationCap,
  },
  {
    title: "Continuous SLA Maintenance",
    tagline: "Always-On Support",
    desc: "Automated cloud backups, version upgrades, security patches, and dedicated monthly support hours with rapid response times.",
    icon: LifeBuoy,
  },
  {
    title: "Workflow Automation Design",
    tagline: "Process Optimization",
    desc: "End-to-end event-driven triggers: invoices automatically routed, approvals streamlined, notifications dispatched, and reports generated.",
    icon: Workflow,
  },
  {
    title: "Business Intelligence & Reporting",
    tagline: "Executive Dashboards",
    desc: "Custom KPI dashboards, real-time financial reports, inventory analytics, and predictive demand forecasting for leadership visibility.",
    icon: Database,
  },
];

const CAPABILITY_PILLARS = [
  {
    badge: "OFFICIAL ODOO PARTNER",
    title: "Silver-Certified Implementation Experts",
    desc: "As an official Odoo Silver Partner, we bring certified expertise, priority support access, and proven deployment methodologies refined across 40+ enterprise implementations in the GCC region.",
  },
  {
    badge: "REGIONAL COMPLIANCE",
    title: "ZATCA, VAT & GCC Regulatory Alignment",
    desc: "Every ERP deployment is pre-configured for regional compliance including ZATCA e-invoicing Phase 2, UAE FTA requirements, WPS payroll processing, and multi-entity consolidation across GCC jurisdictions.",
  },
  {
    badge: "ZERO DOWNTIME MIGRATION",
    title: "Seamless Legacy System Transition",
    desc: "Our phased migration methodology ensures zero data loss and zero operational downtime. Your team continues working while we extract, clean, validate, and import historical data into the new system.",
  },
];

const ERP_FAQS = [
  {
    question: "What is the typical timeline for an ERP implementation?",
    answer:
      "Our standard phased implementation ranges from 4 to 10 weeks depending on custom module requirements, third-party integrations, and historical data volume. We deploy core operations first so your team begins capturing value within the first month.",
  },
  {
    question: "Can you integrate our existing third-party software?",
    answer:
      "Yes. We specialize in custom REST APIs, webhooks, and middleware connecting Odoo with regional payment gateways (Telr, PayTabs, HyperPay, Tamara), logistics APIs (Aramex, DHL, SMSA), and legacy ERP databases.",
  },
  {
    question: "Do you support multi-company and multi-branch setups?",
    answer:
      "Absolutely. We configure inter-company transactions, consolidated reporting, branch-level access controls, and unified inventory management across multiple legal entities and physical locations.",
  },
  {
    question: "What happens after the ERP goes live?",
    answer:
      "Post-launch, we provide dedicated SLA-backed support including automated cloud backups, security patches, version upgrades, performance optimization, and monthly support hours with senior Odoo architects.",
  },
];

export default function ERPImplementationPage() {
  return (
    <>
      <InnerHero
        tag="SERVICE 03 // OPERATIONAL BACKBONE"
        title="End-to-End ERP Implementation"
        description="Deploy, configure, and scale Odoo ERP with custom modules, legacy data migration, and seamless third-party integrations tailored for enterprise operations across Dubai and Riyadh."
        ctaText="Schedule ERP Consultation"
        ctaHref="/contact"
      />

      {/* CORE ERP MODULES */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <NetworkBackground dotCount={18} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ENTERPRISE ERP SUITE"
            title="Complete ERP Implementation Capabilities"
            description="Eight interconnected modules covering every aspect of your ERP deployment, from initial setup to ongoing maintenance and optimization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ERP_MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <Reveal key={mod.title} delay={idx * 0.06}>
                  <TiltCard className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="p-2.5 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20 text-[#a78bfa] inline-flex mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-[#a78bfa] uppercase tracking-wider block mb-1">
                        {mod.tagline}
                      </span>
                      <h3 className="text-lg font-heading font-semibold text-white mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-[#b9b4cc] leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITY PILLARS */}
      <section className="relative py-20 sm:py-28 border-t border-white/10">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY ANALYTIX ERP"
            title="Enterprise-Grade Implementation Standards"
            description="Industry-leading deployment methodology backed by official Odoo partnership and deep GCC regulatory expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITY_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#a78bfa] uppercase tracking-wider block mb-2">
                      {pillar.badge}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#b9b4cc] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ERP FAQ"
            title="ERP Implementation Questions"
            description="Common questions about timelines, integrations, and post-launch support."
          />
          <Accordion items={ERP_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <InnerCTABand
        title="Ready to Transform Your Operations?"
        description="Connect with our certified Odoo architects to plan your enterprise ERP deployment across Dubai and Riyadh."
        primaryText="Schedule ERP Consultation"
        primaryHref="/contact"
        secondaryText="Explore AI ERP Product"
        secondaryHref="/products/ai-integrated-erp"
      />
    </>
  );
}
