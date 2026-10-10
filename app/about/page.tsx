import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import NetworkBackground from "@/components/NetworkBackground";
import {
  INNER_PAGES_DATA,
  ABOUT_VALUES,
  STATS,
  PROCESS_STEPS,
} from "@/lib/content";
import {
  Globe,
  Users,
  Zap,
  ShieldAlert,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Analytix, our 17+ years of technology leadership in Dubai and Riyadh, our multidisciplinary squads, and our enterprise engineering principles.",
};

export default function AboutPage() {
  const data = INNER_PAGES_DATA.about;

  const aboutIcons: Record<string, React.ReactNode> = {
    Globe: (
      <AnimatedIcon type="industry" glowColor="cyan">
        <Globe className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Users: (
      <AnimatedIcon type="feature" glowColor="purple">
        <Users className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Zap: (
      <AnimatedIcon type="service" glowColor="amber">
        <Zap className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    ShieldAlert: (
      <AnimatedIcon type="service" glowColor="purple">
        <ShieldAlert className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
  };

  const valueIcons: Record<string, React.ReactNode> = {
    Innovation: (
      <AnimatedIcon type="feature" glowColor="purple">
        <Sparkles className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Accountability: (
      <AnimatedIcon type="feature" glowColor="green">
        <ShieldCheck className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
    Results: (
      <AnimatedIcon type="stat" glowColor="cyan">
        <TrendingUp className="h-6 w-6 text-[#c58bff]" />
      </AnimatedIcon>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Inner Hero */}
      <InnerHero
        tag={data.tag}
        title={data.title}
        description={data.description}
        ctaText="Meet Our Team"
        ctaHref="/contact"
      />

      {/* 4 Pillars of Analytix */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Foundation"
            title="Built for regional complexities & global scale"
            description="We bridge strategic design intuition with rigorous software engineering and regional compliance governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.12}>
                <TiltCard className="p-8">
                  <div className="h-12 w-12 rounded-2xl bg-[#7c5cff]/15 border border-[#7c5cff]/30 flex items-center justify-center mb-5">
                    {aboutIcons[card.icon]}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#b9b4cc] leading-relaxed">
                    {card.description}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={24} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.1}>
                <TiltCard className="text-center py-10 px-4">
                  <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-white via-[#c58bff] to-[#a78bfa] bg-clip-text mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-heading text-lg font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-[#b9b4cc]">
                    {stat.sublabel}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Deep Dive */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={26} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Guiding Principles"
            title="Values that shape every technical decision"
            description="We act as strategic partners to founders and CTOs, operating with complete radical transparency."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_VALUES.map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.12}>
                <TiltCard className="flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-white/[0.08] border border-white/15 flex items-center justify-center mb-5">
                      {valueIcons[val.title]}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {val.title}
                    </h3>
                    <p className="text-base text-[#b9b4cc] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="How We Work"
            title="The 4-stage engineering lifecycle"
            description="Our structured delivery methodology guarantees rapid milestones, clean code, and zero organizational disruption."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.12}>
                <TiltCard className="flex flex-col justify-between">
                  <div>
                    <span className="font-heading text-4xl font-extrabold text-[#c58bff]/40 mb-3 block">
                      {step.step}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#b9b4cc] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <ul className="space-y-1">
                      {step.deliverables.map((del) => (
                        <li key={del} className="text-xs text-[#c58bff] flex items-center gap-1.5">
                          <AnimatedIcon type="check" glowColor="green">
                            <CheckCircle2 className="h-3 w-3 text-[#25D366]" />
                          </AnimatedIcon>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <InnerCTABand
        title="Work with our senior engineering squad in Dubai & Riyadh"
        subtitle="Schedule a 30-minute discovery call to review your upcoming roadmap."
      />
    </div>
  );
}
