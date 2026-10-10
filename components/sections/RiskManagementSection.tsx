"use client";

import Reveal from "@/components/Reveal";
import RiskWaveVisual from "./ai-visuals/RiskWaveVisual";

const LEFT_RISKS = [
  {
    title: "Model drift & hallucination",
    desc: "Deterministic guardrail validators, continuous RAG verification, and bound prompt scopes prevent unauthorized or inaccurate outputs.",
  },
  {
    title: "Data sovereignty & privacy",
    desc: "In-country GCC data residency (UAE & KSA), air-gapped private model hosting, and zero external training on confidential client data.",
  },
  {
    title: "Regulatory & SCCC compliance",
    desc: "Institutional security adhering strictly to Aramco SCCC cybersecurity framework, ZATCA Phase-2 e-invoicing, and UAE National Cybersecurity mandates.",
  },
  {
    title: "System latency & disruptions",
    desc: "High-availability multi-region redundant clusters, edge model caching, and guaranteed sub-100ms inference response times with instant failover.",
  },
];

const RIGHT_TOP_RISKS = [
  {
    title: "Counterparty & model risk",
    desc: "Pre-execution sandbox dry runs, prompt-injection firewalls, and hard policy enforcement ensure automated actions remain strictly verified.",
  },
  {
    title: "Human factor oversight",
    desc: "Configurable confidence thresholds automatically escalate ambiguous or high-value financial actions to authorized human managers before execution.",
  },
];

export default function RiskManagementSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="risk-management">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[600px] h-[300px] rounded-full bg-[#1677FF]/12 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal delay={0.1}>
          <div className="mb-10 sm:mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight max-w-2xl leading-[1.15]">
              Risk management — our expertise
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
          {/* LEFT COLUMN: 4 Stacked Risk Cards */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-between">
            {LEFT_RISKS.map((risk, idx) => (
              <Reveal key={risk.title} delay={0.15 + idx * 0.08}>
                <div className="group relative rounded-[18px] sm:rounded-[20px] border border-white/[0.08] bg-gradient-to-b from-[#0F1422]/90 via-[#0A0D16]/95 to-[#07090F]/98 p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-[#168BFF]/40 hover:shadow-[0_10px_25px_rgba(2,4,8,0.8)] hover:-translate-y-0.5">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                    <div className="sm:col-span-5">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#F5F8FF] tracking-tight group-hover:text-white transition-colors">
                        {risk.title}
                      </h3>
                    </div>
                    <div className="sm:col-span-7">
                      <p className="text-xs text-[#96A8C2] leading-relaxed">
                        {risk.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* RIGHT COLUMN: 2 Top Risk Cards + Bottom Glowing Wave Graphic */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-between">
            {RIGHT_TOP_RISKS.map((risk, idx) => (
              <Reveal key={risk.title} delay={0.2 + idx * 0.08}>
                <div className="group relative rounded-[18px] sm:rounded-[20px] border border-white/[0.08] bg-gradient-to-b from-[#0F1422]/90 via-[#0A0D16]/95 to-[#07090F]/98 p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-[#168BFF]/40 hover:shadow-[0_10px_25px_rgba(2,4,8,0.8)] hover:-translate-y-0.5">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                    <div className="sm:col-span-5">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#F5F8FF] tracking-tight group-hover:text-white transition-colors">
                        {risk.title}
                      </h3>
                    </div>
                    <div className="sm:col-span-7">
                      <p className="text-xs text-[#96A8C2] leading-relaxed">
                        {risk.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Bottom Glowing Wave Visual */}
            <Reveal delay={0.35}>
              <div className="flex-1 w-full min-h-[160px] flex items-end">
                <RiskWaveVisual />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
