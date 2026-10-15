import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import AnimatedIcon from "@/components/AnimatedIcon";
import ERPVisualization from "@/components/products/ERPVisualization";
import Odoo360Visualization from "@/components/products/Odoo360Visualization";
import InnerCTABand from "@/components/InnerCTABand";
import { ArrowRight, Layers, Cpu, CheckCircle2, Sparkles } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI-Powered Business Products | Analytix BSS",
  description:
    "Explore Analytix BSS intelligent enterprise products: AI-Integrated ERP Solution and AI-Integrated 360 Odoo, built to automate operations and accelerate growth.",
};

export default function ProductsPage() {
  return (
    <>
      <InnerHero
        tag="Enterprise AI Products"
        title="Intelligent Systems Engineered for Scale"
        description="Our flagship products combine deep operational architecture with embedded AI intelligence to automate workflows, eliminate silos, and provide executive visibility."
        ctaText="Explore Products Below"
        ctaHref="#catalog"
      />

      <section className="relative py-20 sm:py-28 border-t border-white/10" id="catalog">
        <NetworkBackground dotCount={25} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Flagship Portfolio"
            title="Choose Your Intelligent Platform"
            description="Both products feature our high-performance AI intelligence layer, configured for GCC regulatory and operational realities."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12">
            {/* PRODUCT 01 */}
            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-white/15 bg-white/[0.04] p-8 backdrop-blur-xl flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-[#7c5cff]/20 border border-[#7c5cff]/40 flex items-center justify-center text-[#c58bff]">
                      <Layers className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#c58bff] px-3 py-1 rounded-full bg-[#7c5cff]/15 border border-[#7c5cff]/30">
                      PRODUCT 01
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                    AI Integrated ERP Solution
                  </h2>

                  <p className="text-sm sm:text-base text-[#b9b4cc] leading-relaxed mb-6">
                    An intelligent ERP environment designed to connect core business operations, automate repetitive workflows and turn business data into actionable insights.
                  </p>

                  <div className="my-6">
                    <ERPVisualization />
                  </div>

                  <div className="flex flex-wrap gap-2 my-6">
                    {FEATURED_PRODUCTS[0].tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white/80 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50">ENTERPRISE CORE</span>
                  <Link
                    href="/products/ai-integrated-erp"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#c58bff] hover:text-white transition-colors"
                  >
                    <span>View Product Architecture</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* PRODUCT 02 */}
            <Reveal delay={0.2}>
              <div className="rounded-[28px] border border-white/15 bg-white/[0.04] p-8 backdrop-blur-xl flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center text-[#06b6d4]">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#06b6d4] px-3 py-1 rounded-full bg-[#06b6d4]/15 border border-[#06b6d4]/30">
                      PRODUCT 02
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                    AI Integrated 360, Odoo
                  </h2>

                  <p className="text-sm sm:text-base text-[#b9b4cc] leading-relaxed mb-6">
                    An AI-enhanced Odoo ecosystem that connects business functions, automates workflows and gives teams a complete 360° operational view.
                  </p>

                  <div className="my-6">
                    <Odoo360Visualization />
                  </div>

                  <div className="flex flex-wrap gap-2 my-6">
                    {FEATURED_PRODUCTS[1].tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white/80 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50">360° MODULAR SUITE</span>
                  <Link
                    href="/products/ai-integrated-360-odoo"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#06b6d4] hover:text-white transition-colors"
                  >
                    <span>View Product Platform</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <InnerCTABand
        title="Ready to Integrate Intelligence Into Your Business?"
        description="Book a technical discovery session with our senior solutions architects in Dubai or Riyadh."
        primaryCta="Book Strategy Call"
      />
    </>
  );
}
