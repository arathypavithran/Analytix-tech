"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/content";
import { MapPin, Phone, Mail, ArrowUpRight, MessageSquare } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(72,139,255,0.18)] bg-[#03060D] backdrop-blur-2xl text-white pt-20 pb-12 overflow-hidden z-10">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-5xl bg-gradient-to-r from-transparent via-[#168BFF]/50 to-transparent shadow-[0_0_15px_#168BFF]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt={`${SITE_CONFIG.name} Logo`}
                width={140}
                height={30}
                className="h-[30px] w-auto object-contain"
              />
            </Link>

            <p className="text-base text-[#96A8C2] max-w-sm leading-relaxed">
              We build safe, smart, and strong digital systems to help your business grow.
            </p>

            <div className="flex flex-col gap-3 mt-2 text-sm text-[#96A8C2]">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <AnimatedIcon type="cta" glowColor="cyan">
                  <Phone className="h-4 w-4 text-[#168BFF]" />
                </AnimatedIcon>
                <span>{SITE_CONFIG.phone}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <AnimatedIcon type="cta" glowColor="cyan">
                  <Mail className="h-4 w-4 text-[#168BFF]" />
                </AnimatedIcon>
                <span>{SITE_CONFIG.email}</span>
              </a>

              <a
                href={SITE_CONFIG.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-xs font-semibold text-white hover:bg-[#25D366]/20 transition-colors w-fit mt-2"
              >
                <AnimatedIcon type="cta" glowColor="green">
                  <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
                </AnimatedIcon>
                <span>WhatsApp Hotline (+971 50 481 3114)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#b9b4cc]">
              <li>
                <Link
                  href="/products/ai-integrated-erp"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>AI Integrated ERP Solution</span>
                  <AnimatedIcon type="arrow" glowColor="purple">
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
                  </AnimatedIcon>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ai-integrated-360-odoo"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>AI Integrated 360, Odoo</span>
                  <AnimatedIcon type="arrow" glowColor="cyan">
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
                  </AnimatedIcon>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>All Products Overview</span>
                  <AnimatedIcon type="arrow" glowColor="purple">
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
                  </AnimatedIcon>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#b9b4cc]">
              <li>
                <Link
                  href="/services/ai-process-automation"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>AI Process Automation</span>
                  <AnimatedIcon type="arrow" glowColor="purple">
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
                  </AnimatedIcon>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cyber-security"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Cyber Security</span>
                  <AnimatedIcon type="arrow" glowColor="cyan">
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
                  </AnimatedIcon>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/erp-implementation"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>ERP Implementation</span>
                  <AnimatedIcon type="arrow" glowColor="purple">
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
                  </AnimatedIcon>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-branding"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Digital Branding</span>
                  <AnimatedIcon type="arrow" glowColor="amber">
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 -translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
                  </AnimatedIcon>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors flex items-center justify-between group text-xs text-[#06b6d4] pt-1"
                >
                  <span>All Capabilities →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices (Dubai & Riyadh) */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Offices
            </h4>
            <div className="flex flex-col gap-5 text-sm text-[#b9b4cc]">
              {SITE_CONFIG.offices.map((office) => (
                <div key={office.city} className="flex flex-col gap-1">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <AnimatedIcon type="default" glowColor="purple">
                      <MapPin className="h-3.5 w-3.5 text-[#c58bff]" />
                    </AnimatedIcon>
                    {office.city}, {office.country}
                  </span>
                  <p className="text-xs text-[#b9b4cc] leading-relaxed">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b9b4cc]">
          <p>© 2026 Analytix. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
