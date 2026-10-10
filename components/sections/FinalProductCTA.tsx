"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import AnimatedIcon from "@/components/AnimatedIcon";
import { SITE_CONFIG } from "@/lib/content";

export default function FinalProductCTA() {
  return (
    <section className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="final-cta">
      {/* Background Animated Volumetric Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#1677FF]/15 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-[#38D9C8]/15 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="relative rounded-[32px] border border-[rgba(72,139,255,0.25)] bg-gradient-to-b from-[#0A1930]/90 to-[#071426]/95 backdrop-blur-2xl p-10 sm:p-16 lg:p-20 shadow-[0_25px_60px_rgba(3,6,13,0.9),0_0_50px_rgba(22,139,255,0.2)] overflow-hidden">
            {/* SVG Connecting Net behind text */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 50%, #168BFF 1.5px, transparent 1.5px),
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px, 40px 40px",
              }}
            />

            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(72,139,255,0.3)] bg-[#071426] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#168BFF] uppercase mb-6 font-mono shadow-[0_0_15px_rgba(22,119,255,0.2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#168BFF] animate-ping" />
              READY FOR INTELLIGENT BUSINESS?
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Build a Business That{" "}
              <span className="bg-gradient-to-r from-white via-[#93c5fd] to-[#168BFF] bg-clip-text text-transparent">
                Runs Smarter.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-[#96A8C2] max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect your operations, automate repetitive work, protect your digital environment and turn business data into intelligent decisions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <MagneticButton
                href="/products"
                variant="primary"
                className="!px-8 !py-4 !text-base"
              >
                <AnimatedIcon type="cta" glowColor="cyan">
                  <Sparkles className="h-5 w-5" />
                </AnimatedIcon>
                <span>Explore Products</span>
              </MagneticButton>

              <MagneticButton
                href={SITE_CONFIG.whatsAppUrl}
                variant="whatsapp"
                className="!px-8 !py-4 !text-base"
              >
                <AnimatedIcon type="cta" glowColor="green">
                  <MessageSquare className="h-5 w-5" />
                </AnimatedIcon>
                <span>Talk to an Expert</span>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
