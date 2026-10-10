"use client";

import {
  Cpu,
  Layers,
  Workflow,
  ShieldCheck,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { WHY_TECH_CARDS } from "@/lib/content";

const ICON_MAP: Record<string, any> = {
  Cpu,
  Layers,
  Workflow,
  ShieldCheck,
  BarChart3,
  TrendingUp,
};

export default function WhyTechnologySection() {
  return (
    <section className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="why-us">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Engineering Standard"
          title="Technology That Works as One System"
          description="We eliminate operational fragility. Every component is engineered with enterprise discipline, regional compliance, and measurable performance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {WHY_TECH_CARDS.map((card, idx) => {
            const Icon = ICON_MAP[card.icon] || Cpu;
            return (
              <Reveal key={card.title} delay={idx * 0.1}>
                <TiltCard className="flex flex-col justify-between h-full group">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-[#1677FF]/15 border border-[#1677FF]/30 flex items-center justify-center text-[#168BFF] mb-5 shadow-[0_0_20px_rgba(22,119,255,0.25)] group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#168BFF] transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[#96A8C2] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
