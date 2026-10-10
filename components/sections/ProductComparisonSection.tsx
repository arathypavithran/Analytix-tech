"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Sparkles, ArrowRight, Info } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PRODUCT_COMPARISON_ROWS } from "@/lib/content";

export default function ProductComparisonSection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden" id="comparison">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Product Matrix"
          title="Choose the Intelligence Your Business Needs"
          description="Whether you need a dedicated enterprise AI ERP environment or a 360° modular Odoo deployment, both products share our high-performance intelligence layer."
        />

        {/* Interactive Comparison Table */}
        <div className="mt-12 rounded-[28px] border border-[rgba(72,139,255,0.24)] bg-gradient-to-b from-[#0A1930]/90 to-[#071426]/95 backdrop-blur-2xl overflow-hidden shadow-[0_25px_60px_rgba(3,6,13,0.9)]">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-[rgba(72,139,255,0.15)] p-5 sm:p-6 bg-[#040914]/60 items-center">
            <div className="col-span-12 sm:col-span-4 mb-4 sm:mb-0">
              <span className="font-mono text-xs text-[#96A8C2] uppercase tracking-wider block">
                CAPABILITY
              </span>
              <span className="text-sm font-bold text-white">Feature & Core System</span>
            </div>

            <div className="col-span-6 sm:col-span-4 text-center sm:text-left border-r border-white/10 sm:border-r-0 pr-2">
              <span className="font-mono text-xs text-[#168BFF] font-bold uppercase tracking-wider block">
                PRODUCT 01
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-white">
                AI-Integrated ERP
              </span>
            </div>

            <div className="col-span-6 sm:col-span-4 text-center sm:text-left pl-2">
              <span className="font-mono text-xs text-[#38D9C8] font-bold uppercase tracking-wider block">
                PRODUCT 02
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-white">
                AI-Integrated 360 Odoo
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[rgba(72,139,255,0.1)]">
            {PRODUCT_COMPARISON_ROWS.map((row, idx) => {
              const isHovered = hoveredRow === idx;
              return (
                <div
                  key={row.feature}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`grid grid-cols-12 p-4 sm:p-5 transition-colors duration-200 items-center ${
                    isHovered ? "bg-[#1677FF]/10" : "bg-transparent"
                  }`}
                >
                  <div className="col-span-12 sm:col-span-4 mb-2 sm:mb-0">
                    <span className="text-sm font-semibold text-white block">
                      {row.feature}
                    </span>
                    <span className="text-xs text-[#96A8C2] line-clamp-1">
                      {row.desc}
                    </span>
                  </div>

                  <div className="col-span-12 sm:col-span-4 flex items-start gap-2 mb-2 sm:mb-0">
                    <CheckCircle2 className="h-4 w-4 text-[#168BFF] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/90">
                      {row.erp}
                    </span>
                  </div>

                  <div className="col-span-12 sm:col-span-4 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#38D9C8] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/90">
                      {row.odoo}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 border-t border-[rgba(72,139,255,0.15)] bg-[#040914]/40">
            <Link
              href="/products/ai-integrated-erp"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#168BFF] py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(22,119,255,0.35)] transition-all hover:scale-[1.01]"
            >
              <span>Explore AI ERP Architecture</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/products/ai-integrated-360-odoo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#38D9C8] to-[#168BFF] py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,217,200,0.35)] transition-all hover:scale-[1.01]"
            >
              <span>Explore 360 Odoo Platform</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
