import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { INNER_PAGES_DATA } from "@/lib/content";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  CheckSquare,
  FileCheck,
  Lock,
  ShieldX,
  Key,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aramco Cybersecurity Compliance (CCC / SCCC)",
  description:
    "Aramco Third Party Cybersecurity Standard readiness, policy documentation, network perimeter hardening, and audit defense in Dubai and Riyadh.",
};

export default function AramcoCompliancePage() {
  const data = INNER_PAGES_DATA.aramcoCompliance;

  const iconMap: Record<string, React.ReactNode> = {
    CheckSquare: <AnimatedIcon type="service" glowColor="purple"><CheckSquare className="h-6 w-6 text-[#c58bff]" /></AnimatedIcon>,
    FileCheck: <AnimatedIcon type="service" glowColor="purple"><FileCheck className="h-6 w-6 text-[#c58bff]" /></AnimatedIcon>,
    Lock: <AnimatedIcon type="service" glowColor="purple"><Lock className="h-6 w-6 text-[#c58bff]" /></AnimatedIcon>,
    ShieldX: <AnimatedIcon type="service" glowColor="purple"><ShieldX className="h-6 w-6 text-[#c58bff]" /></AnimatedIcon>,
    Key: <AnimatedIcon type="service" glowColor="purple"><Key className="h-6 w-6 text-[#c58bff]" /></AnimatedIcon>,
    Eye: <AnimatedIcon type="service" glowColor="purple"><Eye className="h-6 w-6 text-[#c58bff]" /></AnimatedIcon>,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag={data.tag}
        title={data.title}
        description={data.description}
        ctaText="Book Readiness Assessment"
        ctaHref="/contact"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Audit Readiness"
            title="Sovereign security engineered for unconditional passes"
            description="We guide energy contractors, engineering suppliers, and enterprise vendors through every requirement of the Aramco Third Party Cybersecurity Standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#7c5cff]/15 border border-[#7c5cff]/30 flex items-center justify-center mb-5">
                      {iconMap[card.icon] || <Lock className="h-6 w-6 text-[#c58bff]" />}
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
        title="Facing an upcoming Aramco cybersecurity audit?"
        subtitle="Speak with our certified compliance auditors in Dubai and Riyadh for a confidential gap evaluation."
      />
    </div>
  );
}
