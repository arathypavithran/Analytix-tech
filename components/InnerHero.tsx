"use client";

import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import NetworkBackground from "@/components/NetworkBackground";
import { ArrowRight, MessageSquare } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import { SITE_CONFIG } from "@/lib/content";

interface InnerHeroProps {
  tag: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  showWhatsApp?: boolean;
}

export default function InnerHero({
  tag,
  title,
  description,
  ctaText = "Book a Consultation",
  ctaHref = "/contact",
  showWhatsApp = true,
}: InnerHeroProps) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      <NetworkBackground dotCount={35} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider text-[#c58bff] uppercase mb-6">
              <span className="h-2 w-2 rounded-full bg-[#c58bff] animate-pulse" />
              <span>{tag}</span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              <span className="text-gradient">{title}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[#b9b4cc] font-normal leading-relaxed max-w-3xl mb-8">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href={ctaHref} variant="primary">
                <span>{ctaText}</span>
                <AnimatedIcon type="arrow" glowColor="purple">
                  <ArrowRight className="h-4 w-4" />
                </AnimatedIcon>
              </MagneticButton>

              {showWhatsApp && (
                <MagneticButton
                  href={SITE_CONFIG.whatsAppUrl}
                  variant="secondary"
                >
                  <AnimatedIcon type="cta" glowColor="green">
                    <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  </AnimatedIcon>
                  <span>WhatsApp Dubai · Riyadh</span>
                </MagneticButton>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
