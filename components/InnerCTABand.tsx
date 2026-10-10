"use client";

import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { MessageSquare, ArrowRight } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import { SITE_CONFIG } from "@/lib/content";

interface InnerCTABandProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function InnerCTABand({
  title = "Ready to elevate your technological backbone?",
  subtitle,
  description,
  primaryCta,
  primaryText,
  primaryHref,
  secondaryCta,
  secondaryText,
  secondaryHref,
}: InnerCTABandProps) {
  const sub = subtitle || description || "Schedule a technical discovery session with our architects in Dubai or Riyadh.";
  const pText = primaryText || primaryCta || "Chat on WhatsApp (+971 50 481 3114)";
  const pHref = primaryHref || (primaryCta ? "/contact" : SITE_CONFIG.whatsAppUrl);
  const pVariant = pHref === SITE_CONFIG.whatsAppUrl ? "whatsapp" : "primary";
  const sText = secondaryText || secondaryCta || "Submit Strategy Scope";
  const sHref = secondaryHref || "/contact";

  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="rounded-[28px] border border-white/15 bg-white/[0.05] backdrop-blur-xl p-10 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gradient">{title}</span>
            </h2>
            <p className="text-base sm:text-lg text-[#b9b4cc] max-w-2xl mx-auto mb-8">
              {sub}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href={pHref}
                variant={pVariant}
              >
                {pVariant === "whatsapp" ? (
                  <AnimatedIcon type="cta" glowColor="green">
                    <MessageSquare className="h-4 w-4" />
                  </AnimatedIcon>
                ) : null}
                <span>{pText}</span>
                {pVariant !== "whatsapp" ? (
                  <AnimatedIcon type="arrow" glowColor="purple">
                    <ArrowRight className="h-4 w-4" />
                  </AnimatedIcon>
                ) : null}
              </MagneticButton>

              <MagneticButton href={sHref} variant="secondary">
                <span>{sText}</span>
                <AnimatedIcon type="arrow" glowColor="purple">
                  <ArrowRight className="h-4 w-4" />
                </AnimatedIcon>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
