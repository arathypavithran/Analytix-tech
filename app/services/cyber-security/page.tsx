import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import NetworkBackground from "@/components/NetworkBackground";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import AnimatedIcon from "@/components/AnimatedIcon";
import Accordion from "@/components/Accordion";
import InnerCTABand from "@/components/InnerCTABand";
import CyberSecuritySection from "@/components/sections/CyberSecuritySection";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  AlertTriangle,
  Server,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Key,
  Database,
  Building2,
  HardDrive,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cyber Security Services | Analytix BSS",
  description:
    "Security built into your digital backbone. Protect systems, data and business operations with proactive cybersecurity, zero-trust controls, and regional compliance readiness.",
  openGraph: {
    title: "Cyber Security for Connected Enterprise | Analytix BSS",
    description:
      "Enterprise cybersecurity architecture, threat monitoring, vulnerability management, and regional regulatory compliance for UAE & Saudi Arabia.",
    url: "https://analytixtech.io/services/cyber-security",
  },
};

const SECURITY_PILLARS = [
  {
    title: "Security Assessment & Penetration Testing",
    desc: "Rigorous red-team assessments and automated code reviews identifying configuration oversights, credential leaks, and perimeter vulnerabilities before bad actors exploit them.",
    icon: "ShieldAlert",
  },
  {
    title: "Continuous Vulnerability Management",
    desc: "Automated scanning across all internet-facing servers, internal networks, ERP endpoints, and cloud clusters with prioritized remediation paths based on exploit probability.",
    icon: "Eye",
  },
  {
    title: "Regional Regulatory Compliance & Governance",
    desc: "Structured audit alignment with the Aramco Third Party Cybersecurity framework (CCC / SCCC) and regional data protection authorities across Saudi Arabia and the UAE.",
    icon: "FileCheck",
  },
  {
    title: "Zero-Trust Architecture & Identity Controls",
    desc: "Strict principle-of-least-privilege enforcement, multi-factor authentication (MFA), context-aware device health checks, and granular role-based access for ERP and CRM systems.",
    icon: "Lock",
  },
  {
    title: "24/7 Security Monitoring & Incident Response",
    desc: "Real-time SIEM log correlation, heuristic anomaly alerts, and rapid containment playbooks that neutralize suspicious activity before operational disruption occurs.",
    icon: "Server",
  },
  {
    title: "Operational Risk Management & Drills",
    desc: "Quantify technical risks into executive business metrics. Conduct simulated phishing campaigns, credential exposure tabletop exercises, and business continuity drills.",
    icon: "AlertTriangle",
  },
  {
    title: "Resilient Security Architecture",
    desc: "Immutable database backups, multi-region failover replication, encrypted data transit, and sovereign cloud isolation tailored to regional data residency statutes.",
    icon: "Database",
  },
];

const COMPLIANCE_FOCUS = [
  {
    badge: "REGIONAL READINESS",
    title: "Aramco Third Party Cybersecurity (SCCC) Advisory",
    description:
      "For suppliers and technology partners operating within the Saudi Aramco ecosystem, compliance with the Cybersecurity Compliance Certificate (CCC / SCCC) framework is mandatory. We provide thorough pre-audit gap assessments, remediation roadmaps, and policy formulation to prepare your organization for accredited third-party certification.",
  },
  {
    badge: "DATA RESIDENCY",
    title: "UAE & KSA Sovereign Cloud Security",
    description:
      "Ensure sensitive customer, HR, and financial data is stored within certified national borders. We harden local hyperscaler environments (AWS Middle East, Oracle Cloud KSA, Google Cloud Dammam) with enterprise encryption standards and zero-leakage configurations.",
  },
  {
    badge: "SUPPLY CHAIN INTEGRITY",
    title: "ERP & API Perimeter Hardening",
    description:
      "Connect suppliers and branch networks without exposing database cores. We deploy Web Application Firewalls (WAF), mutual TLS (mTLS) authentication, and rate-limiting APIs to safeguard your operational backbone against unauthorized ingress.",
  },
];

const SECURITY_FAQS = [
  {
    question: "How do you help companies prepare for Aramco SCCC audits?",
    answer:
      "We perform an in-depth preliminary assessment comparing your existing IT environment against the Aramco Third Party Cybersecurity Standard. We identify non-conformities, write required cybersecurity policies, implement technical security controls (access control, patching, backup isolation), and assist through the official audit conducted by an authorized certifying audit firm.",
  },
  {
    question: "Do you offer external penetration testing for our custom applications and ERP?",
    answer:
      "Yes. Our security engineers conduct grey-box and black-box penetration testing against web applications, mobile apps, network perimeters, and ERP interfaces using standard OWASP and NIST methodologies, delivering actionable technical remediation guides.",
  },
  {
    question: "How does cybersecurity integrate with your AI ERP and Odoo solutions?",
    answer:
      "Security is not bolted on as an afterthought—it is foundational to our product architecture. All ERP databases feature encrypted fields at rest, HTTPS/mTLS in transit, detailed immutable audit logging, and role-based privilege isolation to prevent unauthorized record tampering.",
  },
  {
    question: "Can you monitor our systems 24/7 for unauthorized access?",
    answer:
      "Yes. We configure automated SIEM log forwarding and proactive alerting that monitor failed authentication spikes, anomalous data extraction, and unexpected IP locations, alerting internal stakeholders and activating containment measures.",
  },
];

export default function CyberSecurityPage() {
  return (
    <>
      <InnerHero
        tag="SERVICE 02 // DEFENSIVE PERIMETER"
        title="Security for the Connected Enterprise"
        description="Protect systems, data and business operations with proactive cybersecurity, zero-trust controls, and compliance-focused defense built directly into your digital backbone."
        ctaText="Request Security Assessment"
        ctaHref="/contact"
      />

      {/* 1. VISUAL SHIELD & DEFENSE SYSTEM */}
      <CyberSecuritySection />

      {/* 2. THE 7 CORE SECURITY PILLARS */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <NetworkBackground dotCount={18} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DEFENSE IN DEPTH"
            title="Comprehensive Enterprise Security Capabilities"
            description="Seven interconnected security pillars engineered to safeguard your critical data, prevent breaches, and maintain operational continuity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.08}>
                <TiltCard className="p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <Lock className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#b9b4cc] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}

            {/* Special Highlight Card */}
            <Reveal delay={0.56}>
              <div className="rounded-2xl p-7 h-full flex flex-col justify-between bg-gradient-to-br from-cyan-950/40 via-black/40 to-[#52257c]/30 border border-cyan-500/30 backdrop-blur-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                    <span>ZERO COMPROMISE</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    Proactive Governance
                  </h3>
                  <p className="text-sm text-[#b9b4cc] leading-relaxed mb-4">
                    Security that empowers business velocity rather than restricting it. We design controls that keep teams productive while maintaining strict compliance.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Talk with a Security Consultant</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. REGULATORY COMPLIANCE SPOTLIGHT */}
      <section className="relative py-20 sm:py-28 border-t border-white/10">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GOVERNANCE & TRUST"
            title="Meeting Rigorous Regional Security Standards"
            description="Navigating compliance requirements across Saudi Arabia and the UAE with verifiable engineering standards and audit readiness."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLIANCE_FOCUS.map((comp, idx) => (
              <Reveal key={comp.title} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
                      {comp.badge}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {comp.title}
                    </h3>
                    <p className="text-sm text-[#b9b4cc] leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECURITY FAQS */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 bg-[rgba(18,25,38,0.7)]">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SECURITY FAQ"
            title="Cybersecurity & Compliance Insights"
            description="Clear answers regarding audits, threat containment, and data sovereignty."
          />
          <Accordion items={SECURITY_FAQS} />
        </div>
      </section>

      {/* 5. CTA */}
      <InnerCTABand
        title="Strengthen Your Enterprise Defense Today"
        description="Book a confidential security posture review to evaluate your network perimeter, ERP configurations, and regional compliance readiness."
        primaryText="Request Security Review"
        primaryHref="/contact"
        secondaryText="Explore AI ERP"
        secondaryHref="/products/ai-integrated-erp"
      />
    </>
  );
}
