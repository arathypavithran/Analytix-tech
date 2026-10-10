import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { INNER_PAGES_DATA } from "@/lib/content";
import {
  Compass,
  Workflow,
  Bot,
  FileSearch,
  Network,
  Sliders,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

export const metadata: Metadata = {
  title: "AI Process Automation & Autonomous LLM Systems",
  description:
    "Enterprise AI process automation, custom LLM agents, intelligent workflow design, and document OCR integrations by Analytix in Dubai and Riyadh.",
};

export default function AiAutomationPage() {
  const data = INNER_PAGES_DATA.aiAutomation;

  const iconMap: Record<string, React.ReactNode> = {
    Compass: (
      <AnimatedIcon type="service" glowColor="purple">
        <Compass className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Workflow: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Workflow className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Bot: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Bot className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    FileSearch: (
      <AnimatedIcon type="service" glowColor="purple">
        <FileSearch className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Network: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Network className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Sliders: (
      <AnimatedIcon type="service" glowColor="purple">
        <Sliders className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag={data.tag}
        title={data.title}
        description={data.description}
        ctaText="Audit AI Opportunities"
        ctaHref="/contact"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="AI Architecture"
            title="Intelligent workflows with enterprise guardrails"
            description="We deploy autonomous pipelines that execute repetitive business tasks with 10x speed while maintaining human oversight and data sovereignty."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#06b6d4]/15 border border-[#06b6d4]/30 flex items-center justify-center mb-5">
                      {iconMap[card.icon] || <Bot className="h-6 w-6 text-cyan-400" />}
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
        title="Ready to automate repetitive enterprise overhead?"
        subtitle="Schedule an AI feasibility audit with our machine learning engineers in Dubai and Riyadh."
      />
    </div>
  );
}
