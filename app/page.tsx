"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import NetworkBackground from "@/components/NetworkBackground";
import HeroLightingFlare from "@/components/hero/HeroLightingFlare";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";
import StatsReveal from "@/components/StatsReveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";

// Product-First Modular Sections
import HeroProductStage from "@/components/hero/HeroProductStage";
import ProductIntro from "@/components/sections/ProductIntro";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import AutomationWorkflowSection from "@/components/sections/AutomationWorkflowSection";
import CyberSecuritySection from "@/components/sections/CyberSecuritySection";
import AIMarketingSection from "@/components/sections/AIMarketingSection";
import IndustrySolutionsSection from "@/components/sections/IndustrySolutionsSection";
import ProductComparisonSection from "@/components/sections/ProductComparisonSection";
import TransformationSection from "@/components/sections/TransformationSection";
import WhyTechnologySection from "@/components/sections/WhyTechnologySection";
import WhyTrustSection from "@/components/sections/WhyTrustSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import RiskManagementSection from "@/components/sections/RiskManagementSection";
import ProductFAQSection from "@/components/sections/ProductFAQSection";
import FinalProductCTA from "@/components/sections/FinalProductCTA";

import { SITE_CONFIG, BLOG_POSTS } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* =====================================================================
          1. HERO: PRODUCT-LED HERO STAGE WITH AI BUSINESS CORE
          ===================================================================== */}
      <section className="relative min-h-[92vh] flex flex-col justify-start pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
        {/* Cinematic Electric-Blue Lighting Flare & Light Rays matching Reference Image */}
        <HeroLightingFlare />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <HeroProductStage />
        </div>
      </section>

      {/* =====================================================================
          2. MARQUEE STRIP
          ===================================================================== */}
      <Marquee speed={32} />

      {/* =====================================================================
          3. PRODUCTS: AI ERP & AI 360 ODOO
          ===================================================================== */}
      <ProductIntro />

      {/* =====================================================================
          4. ARCHITECTURE: "HOW AI CONNECTS YOUR BUSINESS"
          ===================================================================== */}
      <ArchitectureSection />

      {/* =====================================================================
          5. HOW IT WORKS (3-Phase Ingestion, Orchestration, Scale)
          Matches Reference Section 2
          ===================================================================== */}
      <HowItWorksSection />

      {/* =====================================================================
          6. CAPABILITY 01: AI PROCESS AUTOMATION
          ===================================================================== */}
      <AutomationWorkflowSection />

      {/* =====================================================================
          7. CAPABILITY 02: CYBER SECURITY & SOVEREIGN SHIELD
          ===================================================================== */}
      <CyberSecuritySection />

      {/* =====================================================================
          8. CAPABILITY 03: AI-BASED MARKETING INTELLIGENCE
          ===================================================================== */}
      <AIMarketingSection />

      {/* =====================================================================
          9. INDUSTRIES: GCC SECTOR SOLUTIONS
          ===================================================================== */}
      <IndustrySolutionsSection />

      {/* =====================================================================
          10. PRODUCT COMPARISON / SOLUTION MATRIX
          ===================================================================== */}
      <ProductComparisonSection />

      {/* =====================================================================
          11. TRANSFORMATION: DISCONNECTED SILOS TO CONNECTED ENGINE
          ===================================================================== */}
      <TransformationSection />

      {/* =====================================================================
          12. WHY LEADING ENTERPRISES TRUST OUR AI (6 Metrics + 3D Neural Orb + 3 Pillars)
          Matches Reference Section 1
          ===================================================================== */}
      <WhyTrustSection />

      {/* =====================================================================
          13. RISK MANAGEMENT & AI GOVERNANCE (6 Risk Cards + Glowing Wave)
          Matches Reference Section 3
          ===================================================================== */}
      <RiskManagementSection />

      {/* =====================================================================
          14. STATS SECTION (Animated 3D Cube Reveal)
          ===================================================================== */}
      <StatsReveal />

      {/* =====================================================================
          13. TESTIMONIAL CAROUSEL
          ===================================================================== */}
      <section className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Client Trust"
            title="Enterprise Performance Across the GCC"
            description="Leaders across Dubai, Riyadh, and Qatar rely on Analytix BSS systems to power their daily business operations."
          />

          <div className="w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* =====================================================================
          14. INSIGHTS / BLOG PREVIEW
          ===================================================================== */}
      <section className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden" id="insights">
        <NetworkBackground dotCount={24} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Thought Leadership"
            title="AI, ERP & Digital Transformation Insights"
            description="Technical perspectives on autonomous business systems, regional compliance frameworks, and enterprise software engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 0.1}>
                <Link href={`/blog#${post.slug}`} className="block h-full group">
                  <TiltCard className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#96A8C2] mb-4">
                        <span className="rounded-full bg-[#1677FF]/15 px-2.5 py-1 text-[#168BFF] font-semibold border border-[#1677FF]/30">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-white/50">
                          <AnimatedIcon type="nav" delay={idx * 0.04}>
                            <Calendar className="h-3.5 w-3.5" />
                          </AnimatedIcon>
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#168BFF] transition-colors mb-3 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[#96A8C2] leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[rgba(72,139,255,0.18)] flex items-center justify-between text-xs text-[#168BFF] font-semibold">
                      <span>{post.readTime}</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Article{" "}
                        <AnimatedIcon type="arrow" glowColor="blue">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </AnimatedIcon>
                      </span>
                    </div>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <MagneticButton href="/blog" variant="secondary" className="!px-7 !py-3">
              <span>View All Insights</span>
              <AnimatedIcon type="arrow" glowColor="blue">
                <ExternalLink className="h-4 w-4" />
              </AnimatedIcon>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* =====================================================================
          15. PRODUCT FAQ SECTION
          ===================================================================== */}
      <ProductFAQSection />

      {/* =====================================================================
          16. FINAL CTA BANNER: BUILD A BUSINESS THAT RUNS SMARTER
          ===================================================================== */}
      <FinalProductCTA />

      {/* =====================================================================
          17. CONTACT SECTION WITH LEADERSHIP ACCESS & FORM
          ===================================================================== */}
      <section className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden" id="contact">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Let's Connect"
            title="Start your strategic transformation"
            description="Whether you need an immediate AI ERP deployment, an Aramco readiness assessment, or custom software architecture, our team is ready."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Contact Details & Offices */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Reveal delay={0.1}>
                <TiltCard>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">
                    Direct Leadership Access
                  </h3>
                  <p className="text-sm text-[#96A8C2] leading-relaxed mb-6">
                    You speak directly with our senior technology team in Dubai and Riyadh who engineer and integrate these systems.
                  </p>

                  <div className="space-y-4 text-sm text-[#96A8C2]">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#1677FF]/20 border border-[#168BFF]/40 flex items-center justify-center text-[#168BFF]">
                        <AnimatedIcon type="cta" glowColor="blue">
                          <MessageSquare className="h-5 w-5" />
                        </AnimatedIcon>
                      </div>
                      <div>
                        <div className="text-xs uppercase font-semibold text-white/50">
                          Instant WhatsApp Hotline
                        </div>
                        <a
                          href={SITE_CONFIG.whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold hover:text-[#168BFF] transition-colors"
                        >
                          +971 50 481 3114
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                        <AnimatedIcon type="stat" glowColor="cyan">
                          <Clock className="h-5 w-5" />
                        </AnimatedIcon>
                      </div>
                      <div>
                        <div className="text-xs uppercase font-semibold text-white/50">
                          Response SLA
                        </div>
                        <div className="text-white font-semibold">
                          Under 2 hours during GCC business hours
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              <Reveal delay={0.2}>
                <TiltCard>
                  <h4 className="font-heading text-lg font-bold text-white mb-4">
                    Regional Headquarters
                  </h4>
                  <div className="space-y-4">
                    {SITE_CONFIG.offices.map((off) => (
                      <div key={off.city} className="border-l-2 border-[#168BFF] pl-4">
                        <div className="font-semibold text-white text-sm">
                          {off.city}, {off.country}
                        </div>
                        <div className="text-xs text-[#96A8C2]">{off.address}</div>
                        <div className="text-xs text-[#168BFF] mt-1">{off.phone}</div>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
