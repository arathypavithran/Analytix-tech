import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { INNER_PAGES_DATA } from "@/lib/content";
import {
  Settings,
  Boxes,
  Layers,
  ArrowDownUp,
  GraduationCap,
  LifeBuoy,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

export const metadata: Metadata = {
  title: "Odoo ERP Implementation & Operational Mastery",
  description:
    "Official Odoo Silver Partner in Dubai and Riyadh. Enterprise setup, custom module development, third-party integrations, and legacy data migration.",
};

export default function OdooErpPage() {
  const data = INNER_PAGES_DATA.odooErp;

  const iconMap: Record<string, React.ReactNode> = {
    Settings: (
      <AnimatedIcon type="service" glowColor="purple">
        <Settings className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Boxes: (
      <AnimatedIcon type="service" glowColor="cyan">
        <Boxes className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Layers: (
      <AnimatedIcon type="service" glowColor="amber">
        <Layers className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    ArrowDownUp: (
      <AnimatedIcon type="service" glowColor="purple">
        <ArrowDownUp className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    GraduationCap: (
      <AnimatedIcon type="service" glowColor="cyan">
        <GraduationCap className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    LifeBuoy: (
      <AnimatedIcon type="service" glowColor="green">
        <LifeBuoy className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag={data.tag}
        title={data.title}
        description={data.description}
        ctaText="Book Odoo Consultation"
        ctaHref="/contact"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Odoo Capabilities"
            title="Complete enterprise ERP lifecycle"
            description="We eliminate disconnected tools and data silos, bringing finance, inventory, sales, HR, and supply chain into one unified operational engine."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#7c5cff]/15 border border-[#7c5cff]/30 flex items-center justify-center mb-5">
                      {iconMap[card.icon] || <Settings className="h-6 w-6 text-[#c58bff]" />}
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
        title="Ready to master your enterprise operations?"
        subtitle="Speak with our certified Odoo ERP architects in Dubai and Riyadh today."
      />
    </div>
  );
}
