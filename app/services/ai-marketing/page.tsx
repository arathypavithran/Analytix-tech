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
import AIMarketingSection from "@/components/sections/AIMarketingSection";
import {
  TrendingUp,
  Target,
  FileText,
  Search,
  BarChart2,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
  Cpu,
  Layers,
  Filter,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Based Marketing Services | Analytix BSS",
  description:
    "Marketing intelligence that learns. Connect audience data, predictive lead scoring, and automated campaigns directly with your ERP revenue ledger.",
  openGraph: {
    title: "AI-Based Marketing | Analytix BSS",
    description:
      "Marketing Powered by Intelligence. Autonomous campaign orchestration, high-intent audience discovery, and closed-loop revenue attribution.",
    url: "https://analytixtech.io/services/ai-marketing",
  },
};

const MARKETING_MODULES_DEEP = [
  {
    title: "AI Audience Intelligence",
    tagline: "High-Definition ICP Discovery",
    desc: "Ingests transaction histories and customer attributes to uncover high-lifetime-value client clusters across GCC markets.",
    icon: Target,
  },
  {
    title: "AI Content Generation",
    tagline: "Contextual Multichannel Assets",
    desc: "Produces brand-governed variations for localized ad copy, sales decks, email sequences, and bilingual Arabic/English content.",
    icon: FileText,
  },
  {
    title: "Campaign Automation",
    tagline: "Autonomous Budget & Bid Routing",
    desc: "Reallocates ad spend across Meta, Google, and LinkedIn in real time based on actual CRM pipeline velocity rather than cheap clicks.",
    icon: Zap,
  },
  {
    title: "SEO Intelligence & Search Intent",
    tagline: "Predictive Topic Clustering",
    desc: "Tracks high-converting buyer queries across GCC search landscapes, detecting surging enterprise keyword demand before competitors.",
    icon: Search,
  },
  {
    title: "Predictive Lead Scoring",
    tagline: "Behavioral Intent Radar",
    desc: "Calculates conversion likelihood by correlating content consumption, firmographics, and historical deal closings.",
    icon: Filter,
  },
  {
    title: "Dynamic Personalization",
    tagline: "1-to-1 Web & Messaging Flows",
    desc: "Adapts website landing pages and email triggers dynamically based on the visitor's industry, company size, and referral source.",
    icon: Users,
  },
  {
    title: "Closed-Loop Revenue Analytics",
    tagline: "ERP-Synced Deal Attribution",
    desc: "Connects marketing touches directly to signed ERP contracts and paid invoices, eliminating murky marketing vanity metrics.",
    icon: BarChart2,
  },
  {
    title: "Autonomous CRO Optimization",
    tagline: "Continuous Conversion Testing",
    desc: "Simultaneously tests layout variations, headlines, and call-to-actions, automatically funneling traffic to the top-performing paths.",
    icon: TrendingUp,
  },
];

const CAPABILITY_PILLARS = [
  {
    badge: "CLOSED-LOOP ATTRIBUTION",
    title: "Sync Marketing Directly with ERP Invoices",
    desc: "Most agencies measure vanity clicks and leads that never convert. Analytix AI Marketing connects your advertising dashboards directly to your Odoo or custom ERP ledger. You know precisely which campaign generated which closed contract.",
  },
  {
    badge: "LOCALIZED GCC INTELLIGENCE",
    title: "Bilingual English & Arabic Campaign Engines",
    desc: "Enterprise outreach in the UAE and Saudi Arabia requires nuance. Our AI copy and targeting engines are calibrated for regional business cultures, procurement habits, and linguistic dialects across Riyadh, Dubai, Abu Dhabi, and beyond.",
  },
  {
    badge: "AUTOMATED NURTURING",
    title: "Always-On Account-Based Engagement",
    desc: "Keep high-value enterprise accounts engaged throughout multi-month procurement cycles with automated, trigger-based content delivery tailored to their exact project stage.",
  },
];

const MARKETING_FAQS = [
  {
    question: "How does AI marketing connect to our CRM or ERP?",
    answer:
      "We build bi-directional webhook and API integrations between your ad platforms (Google Ads, LinkedIn, Meta) and your CRM/ERP (Odoo, HubSpot, Salesforce). When an inquiry progresses through sales stages or pays an invoice, the signal feeds back into the advertising algorithm to optimize future bids.",
  },
  {
    question: "Do you create bilingual campaigns in Arabic and English?",
    answer:
      "Yes. All marketing workflows, ad variants, landing pages, and email nurturing sequences are crafted with native Arabic and English enterprise copy, customized for regional business sensibilities in Saudi Arabia and the UAE.",
  },
  {
    question: "Are the performance indicators on this page guaranteed results?",
    answer:
      "No. Percentage telemetry tags shown across the visual dashboard represent capability simulation placeholders. Every business has unique market conditions, and we conduct real baseline audits before establishing verified performance targets.",
  },
  {
    question: "Can AI marketing help with long B2B enterprise sales cycles?",
    answer:
      "Yes. B2B sales cycles typically involve multiple decision-makers over 3 to 9 months. Our systems track account-level engagement across your content, alert your sales reps when target companies revisit key case studies, and serve hyper-targeted account-based ads.",
  },
];

export default function AIMarketingPage() {
  return (
    <>
      <InnerHero
        tag="SERVICE 03 // INTELLIGENT GROWTH"
        title="Marketing That Thinks With Your Business"
        description="Use AI-powered insights, automation, and personalization to improve campaigns, customer engagement, and conversion with direct ERP revenue attribution."
        ctaText="Explore Marketing Intelligence"
        ctaHref="/contact"
      />

      {/* 1. VISUAL MARKETING COMMAND CENTER */}
      <AIMarketingSection />

      {/* 2. THE 8 CORE AI MARKETING MODULES */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <NetworkBackground dotCount={18} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="8-MODULE INTELLIGENCE SUITE"
            title="Engineered for Measurable Commercial Growth"
            description="Eight interconnected capabilities that transform generic marketing into an intelligent, data-driven revenue engine."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MARKETING_MODULES_DEEP.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <Reveal key={mod.title} delay={idx * 0.06}>
                  <TiltCard className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="p-2.5 rounded-xl bg-[#c58bff]/10 border border-[#c58bff]/20 text-[#c58bff] inline-flex mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-[#c58bff] uppercase tracking-wider block mb-1">
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

      {/* 3. CAPABILITY PILLARS */}
      <section className="relative py-20 sm:py-28 border-t border-white/10">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="B2B REVENUE ALIGNMENT"
            title="Bridging Marketing and Operational Bottom Line"
            description="Replace vanity statistics with real enterprise commercial traction, closed deal attribution, and localized engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITY_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#c58bff] uppercase tracking-wider block mb-2">
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

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MARKETING FAQ"
            title="AI Marketing & Attribution Questions"
            description="Common questions about integration, Arabic language support, and ERP attribution."
          />
          <Accordion items={MARKETING_FAQS} />
        </div>
      </section>

      {/* 5. CTA */}
      <InnerCTABand
        title="Ready to Scale Your Enterprise Pipeline?"
        description="Connect with our AI growth specialists to analyze your existing customer acquisition channels and plan an intelligent revenue engine."
        primaryText="Schedule Strategy Call"
        primaryHref="/contact"
        secondaryText="Explore AI ERP"
        secondaryHref="/products/ai-integrated-erp"
      />
    </>
  );
}
