"use client";

import { useState } from "react";
import InnerHero from "@/components/InnerHero";
import InnerCTABand from "@/components/InnerCTABand";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import NetworkBackground from "@/components/NetworkBackground";
import { BLOG_POSTS } from "@/lib/content";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Calendar, Clock, ArrowRight, Search, BookOpen } from "lucide-react";

const CATEGORIES = ["All", "Cybersecurity", "ERP Strategy", "AI & Future", "Growth & CRO"];

const FULL_ARTICLES_CONTENT: Record<string, string[]> = {
  "1": [
    "The Aramco Third Party Cybersecurity Standard (SCCC / CCC) represents a cornerstone for safeguarding the critical infrastructure of the Kingdom of Saudi Arabia. For enterprise suppliers, contractors, and technology vendors, compliance is no longer a checklist—it is an unconditional operational passport.",
    "Our audit preparation audits uncover common vulnerabilities in network segmentation, access governance, and incident response runbooks. By instituting least-privilege principles and continuous telemetry, organizations not only pass official assessments on their first attempt, but fundamentally fortify their corporate resilience.",
    "Key takeaway: Early gap analysis reduces remediation cycles from 6 months to under 8 weeks, ensuring zero disruption to existing tender pipelines.",
  ],
  "2": [
    "Fragmented enterprise architectures—where inventory lives in one tool, sales in another, and accounting in a legacy desktop package—silently hemorrhage operational capital. Human errors during reconciliation compound weekly, while executive decision-makers lack real-time visibility.",
    "Odoo ERP eliminates these artificial barriers. When accounting entries are triggered natively by warehouse barcode dispatches, reconciliation overhead falls to zero. Supply chain visibility turns from a monthly retrospective into a real-time command dashboard.",
    "Key takeaway: Companies modernizing to unified ERP frameworks experience average operational efficiency gains surpassing 40% within the first 90 days.",
  ],
  "3": [
    "While large language models and autonomous agent swarms process millions of tokens in seconds, true technological breakthroughs remain anchored in human judgment, strategic alignment, and domain experience.",
    "At Analytix, we view AI as a cognitive multiplier rather than a human replacement. Autonomous agents excel at structured workflows—parsing invoices, drafting standard queries, and triggering API integrations. Strategic prioritization, ethics, and empathetic UX design remain distinctly human superpowers.",
    "Key takeaway: The winning enterprises of the next decade will be those that pair domain-expert humans with autonomous AI co-pilots.",
  ],
  "4": [
    "B2B enterprises across Dubai and Riyadh frequently report rising customer acquisition costs (CAC). However, deep analytical audits often reveal that top-of-funnel traffic is not the culprit—the leak is happening across latency in lead response and disjointed CRM handoffs.",
    "When an inbound enterprise lead waits more than 15 minutes for contact, qualification rates drop by over 400%. By integrating automated WhatsApp and email notification webhooks directly from high-intent landing pages into sales rep pipelines, conversion velocities triple.",
    "Key takeaway: Auditing form abandonment and automated routing generates immediate revenue gains with zero increase in media spend.",
  ],
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticleId, setActiveArticleId] = useState<string | null>("1");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative w-full overflow-hidden">
      <InnerHero
        tag="Insights · Analytix"
        title="Perspectives on Modern Systems & Enterprise Scale"
        description="Thought leadership, architectural breakdowns, and regulatory briefings from our solutions engineering teams in Dubai and Riyadh."
        ctaText="Subscribe to Insights"
        ctaHref="#articles"
      />

      <section id="articles" className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        <NetworkBackground dotCount={28} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter Bar */}
          <div className="mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#7c5cff] to-[#c58bff] text-white shadow-[0_0_15px_rgba(124,92,255,0.4)]"
                      : "bg-white/[0.06] text-[#b9b4cc] border border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <AnimatedIcon type="nav" glowColor="purple"><Search className="h-4 w-4 text-white/40" /></AnimatedIcon>
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/15 bg-black/30 pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#c58bff]"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredPosts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 0.1}>
                <div
                  id={post.slug}
                  onClick={() => setActiveArticleId(post.id)}
                  className="cursor-pointer h-full"
                >
                  <TiltCard
                    className={`flex flex-col justify-between h-full transition-all ${
                      activeArticleId === post.id
                        ? "border-[#c58bff] bg-white/[0.09] shadow-[0_15px_35px_rgba(124,92,255,0.25)]"
                        : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#b9b4cc] mb-4">
                        <span className="rounded-full bg-[#7c5cff]/20 px-3 py-1 text-[#c58bff] font-semibold border border-[#7c5cff]/30">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-white/50">
                          <span className="flex items-center gap-1">
                            <AnimatedIcon type="default"><Calendar className="h-3 w-3" /></AnimatedIcon>
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <AnimatedIcon type="default"><Clock className="h-3 w-3" /></AnimatedIcon>
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-white hover:text-[#c58bff] transition-colors mb-3 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-base text-[#b9b4cc] leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-semibold text-[#c58bff]">
                      <span className="flex items-center gap-1.5">
                        <AnimatedIcon type="feature" glowColor="purple"><BookOpen className="h-4 w-4" /></AnimatedIcon>
                        {activeArticleId === post.id ? "Viewing Article Below" : "Read Full Article"}
                      </span>
                      <AnimatedIcon type="arrow" glowColor="purple"><ArrowRight className="h-4 w-4" /></AnimatedIcon>
                    </div>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Active Article Full Reader Drawer / Box */}
          {activeArticleId && (
            <Reveal>
              <div className="rounded-[24px] border border-[#c58bff]/40 bg-white/[0.08] backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                {(() => {
                  const post = BLOG_POSTS.find((p) => p.id === activeArticleId);
                  const paragraphs = FULL_ARTICLES_CONTENT[activeArticleId] || [];
                  if (!post) return null;

                  return (
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#b9b4cc] mb-4">
                        <span className="rounded-full bg-[#7c5cff]/30 px-3 py-1 text-[#c58bff] font-semibold border border-[#7c5cff]/50">
                          {post.category}
                        </span>
                        <span>Published {post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>Analytix Engineering Editorial</span>
                      </div>

                      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                        <span className="text-gradient">{post.title}</span>
                      </h2>

                      <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-4xl border-t border-white/10 pt-6">
                        {paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-sm text-[#b9b4cc]">
                          Have questions regarding this topic?
                        </span>
                        <a
                          href="https://wa.me/971504813114"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 px-5 py-2 text-xs font-semibold text-white hover:bg-[#25D366]/30 transition-colors"
                        >
                          Discuss with Author on WhatsApp
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <InnerCTABand
        title="Stay ahead of GCC technology mandates"
        subtitle="Subscribe for technical teardowns and compliance updates from our engineering directors."
      />
    </div>
  );
}
