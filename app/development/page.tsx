import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { INNER_PAGES_DATA } from "@/lib/content";
import { Code, Database, Cpu, GitBranch, Server, Shield } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

export const metadata: Metadata = {
  title: "Enterprise Web Development & CRM Systems",
  description:
    "Full-stack software engineering, Next.js web applications, scalable CRM platforms, custom APIs, and secure cloud architecture by Analytix in Dubai and Riyadh.",
};

export default function DevelopmentPage() {
  const data = INNER_PAGES_DATA.development;

  const cards = [
    ...data.cards,
    {
      title: "Cloud Infrastructure & DevOps",
      description:
        "AWS, Azure, and regional Saudi Cloud deployments engineered with zero-downtime CI/CD pipelines, containerization, and automated failover recovery.",
      icon: "Server",
    },
    {
      title: "Hardened Security & Code Audits",
      description:
        "Rigorous automated security static analysis (SAST), dependency scans, data encryption in transit and at rest, adhering to ISO and Aramco standards.",
      icon: "Shield",
    },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Code: (
      <AnimatedIcon type="service" glowColor="purple">
        <Code className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Database: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Database className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Cpu: (
      <AnimatedIcon type="service" glowColor="purple">
        <Cpu className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    GitBranch: (
      <AnimatedIcon type="service" glowColor="cyan">
        <GitBranch className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Server: (
      <AnimatedIcon type="service" glowColor="blue">
        <Server className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Shield: (
      <AnimatedIcon type="service" glowColor="purple">
        <Shield className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag={data.tag}
        title={data.title}
        description={data.description}
        ctaText="Discuss Architecture"
        ctaHref="/contact"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Engineering Scope"
            title="Robust software engineered for zero downtime"
            description="From complex multi-tenant SaaS to custom internal enterprise portals, we write type-safe, maintainable, scalable code."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#7c5cff]/15 border border-[#7c5cff]/30 flex items-center justify-center mb-5">
                      {iconMap[card.icon] || <Code className="h-6 w-6 text-[#c58bff]" />}
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
        title="Ready to build your next custom software system?"
        subtitle="Schedule a technical roadmap call with our principal engineers in Dubai and Riyadh."
      />
    </div>
  );
}
