import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Accordion from "@/components/Accordion";
import InnerCTABand from "@/components/InnerCTABand";
import {
  Palette,
  Layout,
  Smartphone,
  Component,
  Sparkles,
  Layers,
  Target,
  Pen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Branding & Design Services | Analytix BSS",
  description:
    "Premium brand identity, human-centered UI/UX design systems, and conversion-focused digital experiences engineered by Analytix in Dubai and Riyadh.",
  openGraph: {
    title: "Digital Branding | Analytix BSS",
    description:
      "Build a distinctive brand presence with strategic identity design, premium UI/UX systems, and high-conversion digital experiences.",
    url: "https://analytixtech.io/services/digital-branding",
  },
};

const BRANDING_MODULES = [
  {
    title: "Brand Identity & Visual Systems",
    tagline: "Foundation Design",
    desc: "Comprehensive design languages, logos, typography hierarchies, and premium asset guidelines that make your technology brand unmistakable.",
    icon: Palette,
  },
  {
    title: "UI/UX & Interactive Design",
    tagline: "Human-Centered Flows",
    desc: "User research, journey mapping, wireframing, and interactive prototypes built to solve real workflow friction and delight every user touchpoint.",
    icon: Layout,
  },
  {
    title: "Web & Mobile App Experiences",
    tagline: "Cross-Platform Excellence",
    desc: "High-performance responsive web interfaces and mobile applications engineered for fluid micro-interactions and maximum conversion velocity.",
    icon: Smartphone,
  },
  {
    title: "Enterprise Design Systems",
    tagline: "Scalable Component Libraries",
    desc: "Scalable Figma and code component libraries (buttons, modals, tables, tokens) that ensure visual consistency across all company software products.",
    icon: Component,
  },
  {
    title: "Interactive Prototypes & Micro-Animations",
    tagline: "Motion Design",
    desc: "Framer and code prototypes showcasing fluid micro-interactions, transition physics, and motion design that feel like native premium-grade experiences.",
    icon: Sparkles,
  },
  {
    title: "Conversion-Focused Marketing Creatives",
    tagline: "Revenue-Driven Assets",
    desc: "High-fidelity pitch decks, digital advertising sets, social media brand kits, and editorial assets tailored for B2B enterprise acquisition.",
    icon: Layers,
  },
  {
    title: "Strategic Brand Positioning",
    tagline: "Market Differentiation",
    desc: "Competitive analysis, brand narrative development, and positioning frameworks that establish unquestioned authority in your industry sector.",
    icon: Target,
  },
  {
    title: "Content & Copywriting Strategy",
    tagline: "Voice & Messaging",
    desc: "Brand voice guidelines, website copy, campaign messaging, and bilingual Arabic-English content crafted for regional enterprise audiences.",
    icon: Pen,
  },
];

const CAPABILITY_PILLARS = [
  {
    badge: "DESIGN-LED STRATEGY",
    title: "Brand Systems That Scale With Your Business",
    desc: "We don't create one-off assets. We build complete brand ecosystems with documented guidelines, reusable components, and token-based design systems that scale consistently across every touchpoint.",
  },
  {
    badge: "CONVERSION ENGINEERING",
    title: "Every Pixel Engineered for Business Impact",
    desc: "Beautiful design is only half the equation. Our interfaces are meticulously optimized for conversion velocity, reducing friction, guiding user journeys, and maximizing revenue-per-visit across all channels.",
  },
  {
    badge: "GCC MARKET EXPERTISE",
    title: "Bilingual Design for Regional Enterprise",
    desc: "Deep understanding of GCC business culture, Arabic typography standards, and regional aesthetic sensibilities. Every brand asset is crafted to resonate with enterprise decision-makers across Dubai, Riyadh, and beyond.",
  },
];

const BRANDING_FAQS = [
  {
    question: "What does a typical brand identity project include?",
    answer:
      "A comprehensive brand identity project includes competitive audit, brand strategy and positioning, logo design with variations, typography system, color palette, iconography, brand guidelines document, and core marketing asset templates including business cards, presentations, and social media kits.",
  },
  {
    question: "Do you design for both web and mobile platforms?",
    answer:
      "Yes. We design responsive web interfaces and native mobile applications with a mobile-first approach. All designs include interactive Figma prototypes with documented component libraries and developer handoff specifications.",
  },
  {
    question: "Can you redesign our existing brand without losing recognition?",
    answer:
      "Absolutely. We specialize in brand evolution—modernizing visual identity while preserving established brand equity. We conduct stakeholder interviews and brand audits to identify what to keep, refine, or reinvent.",
  },
  {
    question: "Do you provide bilingual Arabic and English design?",
    answer:
      "Yes. All brand and UI/UX projects include full bilingual support with proper Arabic typography, RTL layout engineering, and culturally appropriate visual design for the GCC enterprise market.",
  },
];

export default function DigitalBrandingPage() {
  return (
    <>
      <InnerHero
        tag="SERVICE 04 // BRAND IDENTITY"
        title="Digital Branding That Commands Attention"
        description="Build a distinctive brand presence with strategic identity design, premium UI/UX systems, and conversion-focused digital experiences engineered for market leadership."
        ctaText="Start Your Brand Project"
        ctaHref="/contact"
      />

      {/* BRANDING MODULES */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <NetworkBackground dotCount={18} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="BRAND & DESIGN SUITE"
            title="Complete Digital Branding Capabilities"
            description="Eight interconnected design disciplines covering every aspect of your brand presence, from identity systems to conversion-optimized digital experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANDING_MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <Reveal key={mod.title} delay={idx * 0.06}>
                  <TiltCard className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="p-2.5 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] inline-flex mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-[#f59e0b] uppercase tracking-wider block mb-1">
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
            badge="BRAND EXCELLENCE"
            title="Why Enterprise Leaders Choose Our Design Team"
            description="Design thinking combined with business intelligence creates brand experiences that drive measurable commercial results."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITY_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#f59e0b] uppercase tracking-wider block mb-2">
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
            badge="BRANDING FAQ"
            title="Digital Branding & Design Questions"
            description="Common questions about brand identity projects, design systems, and bilingual regional design."
          />
          <Accordion items={BRANDING_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <InnerCTABand
        title="Ready to Build a Brand That Leads?"
        description="Connect with our design leadership to discuss your brand strategy and digital experience vision."
        primaryText="Start Brand Consultation"
        primaryHref="/contact"
        secondaryText="Explore AI ERP Product"
        secondaryHref="/products/ai-integrated-erp"
      />
    </>
  );
}
