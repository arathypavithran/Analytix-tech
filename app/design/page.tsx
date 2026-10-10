import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { INNER_PAGES_DATA } from "@/lib/content";
import { Palette, Layout, Smartphone, Component, Sparkles, Layers } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

export const metadata: Metadata = {
  title: "Brand Identity, UI/UX & Web Design",
  description:
    "Human-centered UI/UX design systems, brand identity, interactive prototypes, and conversion-focused web and mobile interfaces by Analytix in Dubai and Riyadh.",
};

export default function DesignPage() {
  const data = INNER_PAGES_DATA.design;

  const cards = [
    ...data.cards,
    {
      title: "Interactive Prototypes & Micro-Animations",
      description:
        "Framer and code prototypes showcasing fluid micro-interactions, transition physics, and motion design that feel like native Apple-grade experiences.",
      icon: "Sparkles",
    },
    {
      title: "Conversion-Focused Marketing Creatives",
      description:
        "High-fidelity pitch decks, digital advertising sets, social media brand kits, and editorial assets tailored for B2B enterprise acquisition.",
      icon: "Layers",
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Palette: (
      <AnimatedIcon type="service" glowColor="purple">
        <Palette className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Layout: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Layout className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Smartphone: (
      <AnimatedIcon type="service" glowColor="purple">
        <Smartphone className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Component: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Component className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Sparkles: (
      <AnimatedIcon type="service" glowColor="purple">
        <Sparkles className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Layers: (
      <AnimatedIcon type="service" glowColor="amber">
        <Layers className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag={data.tag}
        title={data.title}
        description={data.description}
        ctaText="Request Design Portfolio"
        ctaHref="/contact"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Design Capabilities"
            title="Strategic aesthetic systems built to convert"
            description="We balance striking creative direction with strict cognitive ergonomics to create digital experiences that command authority."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#7c5cff]/15 border border-[#7c5cff]/30 flex items-center justify-center mb-5">
                      {iconMap[card.icon] || <Palette className="h-6 w-6 text-[#c58bff]" />}
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
        title="Ready to elevate your brand presence?"
        subtitle="Speak directly with our design leads in Dubai and Riyadh to discuss your brand vision."
      />
    </div>
  );
}
