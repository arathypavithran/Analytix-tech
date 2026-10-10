import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { INNER_PAGES_DATA } from "@/lib/content";
import { Search, Target, FileText, Percent, Share2, BarChart3 } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

export const metadata: Metadata = {
  title: "Performance Marketing, SEO & Growth Systems",
  description:
    "Data-driven B2B digital marketing, regional Middle East SEO dominance, high-intent paid advertising, and revenue leakage optimization by Analytix in Dubai and Riyadh.",
};

export default function MarketingPage() {
  const data = INNER_PAGES_DATA.marketing;

  const cards = [
    ...data.cards,
    {
      title: "Social Media & Executive Thought Leadership",
      description:
        "B2B LinkedIn growth systems and multi-channel executive positioning that build direct trust and pipeline with C-suite stakeholders.",
      icon: "Share2",
    },
    {
      title: "Real-Time Attribution & Revenue Dashboards",
      description:
        "Full-funnel attribution models tying every ad dollar directly to CRM pipeline value, client lifetime value (LTV), and bottom-line revenue.",
      icon: "BarChart3",
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Search: (
      <AnimatedIcon type="service" glowColor="purple">
        <Search className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Target: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Target className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    FileText: (
      <AnimatedIcon type="service" glowColor="purple">
        <FileText className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Percent: (
      <AnimatedIcon type="stat" glowColor="cyan">
        <Percent className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Share2: (
      <AnimatedIcon type="social" glowColor="purple">
        <Share2 className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    BarChart3: (
      <AnimatedIcon type="stat" glowColor="cyan">
        <BarChart3 className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag={data.tag}
        title={data.title}
        description={data.description}
        ctaText="Audit Growth Pipeline"
        ctaHref="/contact"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Growth Engine"
            title="Measurable acquisition without vanity metrics"
            description="We eliminate wasted ad spend and plug customer drop-offs with high-converting landing pages, regional search dominance, and high-intent audience targeting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#7c5cff]/15 border border-[#7c5cff]/30 flex items-center justify-center mb-5">
                      {iconMap[card.icon] || <Search className="h-6 w-6 text-[#c58bff]" />}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#b9b4cc] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InnerCTABand
        title="Ready to accelerate your revenue pipeline?"
        subtitle="Book a growth audit with our performance marketing leads in Dubai and Riyadh."
      />
    </div>
  );
}
