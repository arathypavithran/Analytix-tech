import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import InnerCTABand from "@/components/InnerCTABand";
import { Bot, Shield, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { SUPPORTING_SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI-Powered Services & Capabilities | Analytix BSS",
  description:
    "Explore our specialized capability squads: AI Process Automation, Cyber Security, and AI-Based Marketing, engineered to support your enterprise digital backbone.",
};

const ICON_MAP: Record<string, any> = {
  Bot,
  Shield,
  TrendingUp,
};

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        tag="AI-Powered Capability Squads"
        title="High-Impact Specialized Engineering"
        description="Our service squads operate as multidisciplinary technological units, purpose-built to extend, automate, protect, and scale your core enterprise platforms."
        ctaText="Explore Capabilities Below"
        ctaHref="#services-list"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10" id="services-list">
        <NetworkBackground dotCount={25} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Supporting Engines"
            title="Capabilities That Power Your Systems"
            description="Our services do not exist in isolation. They are designed to integrate seamlessly into your AI ERP and operational ecosystem."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {SUPPORTING_SERVICES.map((srv, idx) => {
              const Icon = ICON_MAP[srv.iconName] || Bot;
              return (
                <Reveal key={srv.id} delay={idx * 0.12}>
                  <TiltCard className="flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-14 w-14 rounded-2xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-[#c58bff] group-hover:scale-105 transition-transform">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#06b6d4] rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-3 py-1">
                          {srv.badge}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                        {srv.title}
                      </h3>

                      <p className="text-sm text-[#b9b4cc] leading-relaxed mb-6">
                        {srv.description}
                      </p>

                      <ul className="space-y-2.5 mb-8">
                        {srv.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2 text-xs text-white/85">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366] shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-white/50">ENTERPRISE SQUAD</span>
                      <Link
                        href={srv.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-[#c58bff] transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <InnerCTABand
        title="Ready to Deploy an Enterprise Capability Squad?"
        description="Connect with our technical leadership in Dubai and Riyadh to discuss your architecture."
        primaryCta="Book Strategy Call"
      />
    </>
  );
}
