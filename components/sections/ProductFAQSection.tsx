"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import { PRODUCT_FAQS } from "@/lib/content";

export default function ProductFAQSection() {
  return (
    <section className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden" id="faq">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Product & Technical FAQ"
          title="Frequently Asked Questions"
          description="Clear answers about our AI-integrated ERP architecture, 360° Odoo deployments, automated workflows, and regional enterprise implementation."
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <Reveal delay={0.2}>
            <Accordion items={PRODUCT_FAQS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
