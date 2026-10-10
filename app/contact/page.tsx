import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContactForm from "@/components/ContactForm";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { SITE_CONFIG } from "@/lib/content";
import AnimatedIcon from "@/components/AnimatedIcon";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us · Dubai & Riyadh Offices",
  description:
    "Connect directly with Analytix technology architects in Dubai and Riyadh. Book a consultation for Odoo ERP, AI automation, cybersecurity, design, or custom development.",
};

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag="Contact · Dubai & Riyadh"
        title="Direct Consultation with Senior Technology Leaders"
        description="We eliminate traditional sales friction. Speak directly with our solutions architects to evaluate timelines, architecture, and budgets."
        ctaText="Fill Inquiry Form"
        ctaHref="#form"
        showWhatsApp={true}
      />

      <section id="form" className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Office Addresses & Live Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Reveal delay={0.05}>
                <TiltCard>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    Regional Headquarters
                  </h3>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed mb-6">
                    Our dual physical engineering hubs allow us to provide on-site technical workshops and dedicated support across the UAE and Saudi Arabia.
                  </p>

                  <div className="space-y-6">
                    {SITE_CONFIG.offices.map((office) => (
                      <div
                        key={office.city}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <div className="flex items-center gap-2 font-heading text-lg font-bold text-white mb-2">
                          <AnimatedIcon type="nav" glowColor="purple"><MapPin className="h-4 w-4 text-[#c58bff]" /></AnimatedIcon>
                          <span>{office.city}, {office.country}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#b9b4cc] leading-relaxed mb-3">
                          {office.address}
                        </p>
                        <div className="flex flex-col gap-1 text-xs text-[#c58bff]">
                          <a href={`tel:${office.phone}`} className="hover:underline">
                            {office.phone}
                          </a>
                          <a href={`mailto:${office.email}`} className="text-white/60 hover:underline">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>

              <Reveal delay={0.15}>
                <TiltCard>
                  <div className="space-y-4 text-sm text-[#b9b4cc]">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                        <AnimatedIcon type="social" glowColor="green"><MessageSquare className="h-4 w-4" /></AnimatedIcon>
                      </div>
                      <div>
                        <div className="text-xs uppercase font-semibold text-white/50">
                          Rapid WhatsApp Connect
                        </div>
                        <a
                          href={SITE_CONFIG.whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold hover:text-[#c58bff] transition-colors"
                        >
                          +971 50 481 3114 (Immediate Chat)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#7c5cff]/20 border border-[#7c5cff]/40 flex items-center justify-center text-[#c58bff] shrink-0 mt-0.5">
                        <AnimatedIcon type="default" glowColor="purple"><Clock className="h-4 w-4" /></AnimatedIcon>
                      </div>
                      <div>
                        <div className="text-xs uppercase font-semibold text-white/50">
                          Operating Hours
                        </div>
                        <div className="text-white">
                          Monday – Friday: 9:00 AM – 6:00 PM (GST / AST)
                        </div>
                        <div className="text-xs text-white/50">
                          24/7 Priority Hotline for SLA Enterprise Clients
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <AnimatedIcon type="default" glowColor="cyan"><ShieldCheck className="h-4 w-4" /></AnimatedIcon>
                      </div>
                      <div>
                        <div className="text-xs uppercase font-semibold text-white/50">
                          NDA & Data Sovereignty
                        </div>
                        <div className="text-white text-xs">
                          Standard Mutual NDAs provided prior to detailed architecture reviews.
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
