"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Layers,
  Cpu,
  Bot,
  Shield,
  Boxes,
  Palette,
  Sparkles,
} from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import { SITE_CONFIG } from "@/lib/content";
import MagneticButton from "./MagneticButton";

const PRODUCT_ITEMS = [
  {
    title: "AI Integrated ERP Solution",
    desc: "Predictive core enterprise ERP with autonomous operations",
    href: "/products/ai-integrated-erp",
    icon: Layers,
    badge: "Product 01",
    glowColor: "#1677FF",
  },
  {
    title: "AI Integrated 360, Odoo",
    desc: "Intelligent 360° modular platform powered by AI workflows",
    href: "/products/ai-integrated-360-odoo",
    icon: Cpu,
    badge: "Product 02",
    glowColor: "#38D9C8",
  },
];

const SERVICE_ITEMS = [
  {
    title: "AI Process Automation",
    desc: "Autonomous LLM triggers, document parsing & API workflows",
    href: "/services/ai-process-automation",
    icon: Bot,
    badge: "Service 01",
    glowColor: "#168BFF",
  },
  {
    title: "Cyber Security",
    desc: "Proactive perimeter defense, SCCC compliance & threat monitoring",
    href: "/services/cyber-security",
    icon: Shield,
    badge: "Service 02",
    glowColor: "#22d3ee",
  },
  {
    title: "ERP Implementation",
    desc: "End-to-end Odoo ERP setup, custom modules & enterprise data migration",
    href: "/services/erp-implementation",
    icon: Boxes,
    badge: "Service 03",
    glowColor: "#a78bfa",
  },
  {
    title: "Digital Branding",
    desc: "Strategic brand identity, UI/UX design systems & visual storytelling",
    href: "/services/digital-branding",
    icon: Palette,
    badge: "Service 04",
    glowColor: "#f59e0b",
  },
];



export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 25);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileGroup = (group: string) => {
    setMobileExpanded(mobileExpanded === group ? null : group);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#03060D]/88 backdrop-blur-xl border-b border-[rgba(72,139,255,0.18)] py-3.5 shadow-[0_10px_35px_rgba(3,6,13,0.8)]"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-3 group">
              <div className="relative h-[32px] w-auto">
                <Image
                  src="/logo.png"
                  alt={`${SITE_CONFIG.name} Logo`}
                  width={140}
                  height={32}
                  priority
                  className="h-[32px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-white ${
                  pathname === "/" ? "text-white font-semibold" : "text-[#96A8C2]"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                  pathname === "/about"
                    ? "text-[#F5F8FF] bg-[#1677FF]/15 border border-[rgba(72,139,255,0.3)] shadow-[0_0_15px_rgba(22,119,255,0.2)]"
                    : "text-[#96A8C2] hover:text-[#F5F8FF] hover:bg-white/[0.05]"
                }`}
              >
                About
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === "products"}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-white ${
                    pathname.startsWith("/products")
                      ? "text-white bg-white/[0.08]"
                      : "text-[#b9b4cc]"
                  }`}
                >
                  <span>Products</span>
                  <AnimatedIcon type="nav">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === "products" ? "rotate-180 text-[#c58bff]" : ""
                      }`}
                    />
                  </AnimatedIcon>
                </button>

                <AnimatePresence>
                  {activeDropdown === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 w-[420px] rounded-2xl border border-[rgba(72,139,255,0.24)] bg-[#071426]/95 backdrop-blur-2xl p-3 shadow-[0_25px_60px_rgba(3,6,13,0.85)]"
                    >
                      <div className="px-3 pt-2 pb-1.5 flex items-center justify-between text-[11px] font-mono text-[#168BFF] tracking-wider uppercase border-b border-[rgba(72,139,255,0.15)] mb-2">
                        <span>AI-POWERED CORE PRODUCTS</span>
                        <span className="text-white/40">ANALYTIX 2.0</span>
                      </div>
                      {PRODUCT_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group relative flex items-start gap-3.5 rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.07] overflow-hidden"
                          >
                            {/* Moving gradient hover line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#1677FF] to-[#38D9C8] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div
                              className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                              style={{
                                background: `${item.glowColor}18`,
                                border: `1px solid ${item.glowColor}40`,
                                boxShadow: `0 0 15px ${item.glowColor}25`,
                              }}
                            >
                              <Icon className="h-5 w-5 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-sm font-semibold text-white group-hover:text-gradient transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[#c58bff]">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-[#b9b4cc] leading-relaxed line-clamp-2">
                                {item.desc}
                              </p>
                            </div>

                            <div className="self-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                              <ArrowRight className="h-4 w-4 text-[#06b6d4]" />
                            </div>
                          </Link>
                        );
                      })}

                      <div className="mt-2 pt-2 border-t border-white/[0.08] px-3">
                        <Link
                          href="/products"
                          className="text-xs text-[#b9b4cc] hover:text-white flex items-center justify-between py-1 transition-colors"
                        >
                          <span>View all intelligent products overview →</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === "services"}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-white ${
                    pathname.startsWith("/services")
                      ? "text-white bg-white/[0.08]"
                      : "text-[#b9b4cc]"
                  }`}
                >
                  <span>Services</span>
                  <AnimatedIcon type="nav">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === "services" ? "rotate-180 text-[#c58bff]" : ""
                      }`}
                    />
                  </AnimatedIcon>
                </button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 w-[420px] rounded-2xl border border-white/[0.14] bg-[rgb(20,27,41)]/95 backdrop-blur-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                    >
                      <div className="px-3 pt-2 pb-1.5 flex items-center justify-between text-[11px] font-mono text-[#06b6d4] tracking-wider uppercase border-b border-white/[0.08] mb-2">
                        <span>AI-POWERED CAPABILITIES</span>
                        <span className="text-white/40">SUPPORTING ENGINES</span>
                      </div>
                      {SERVICE_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group relative flex items-start gap-3.5 rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.07] overflow-hidden"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#06b6d4] to-[#c58bff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div
                              className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                              style={{
                                background: `${item.glowColor}18`,
                                border: `1px solid ${item.glowColor}40`,
                                boxShadow: `0 0 15px ${item.glowColor}25`,
                              }}
                            >
                              <Icon className="h-5 w-5 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-sm font-semibold text-white group-hover:text-[#c58bff] transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[#06b6d4]">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs text-[#b9b4cc] leading-relaxed line-clamp-2">
                                {item.desc}
                              </p>
                            </div>

                            <div className="self-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                              <ArrowRight className="h-4 w-4 text-[#c58bff]" />
                            </div>
                          </Link>
                        );
                      })}

                      <div className="mt-2 pt-2 border-t border-white/[0.08] px-3">
                        <Link
                          href="/services"
                          className="text-xs text-[#b9b4cc] hover:text-white flex items-center justify-between py-1 transition-colors"
                        >
                          <span>Explore all specialized service squads →</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <MagneticButton href="/contact" variant="primary" className="!py-2.5 !px-5 !text-sm">
                <span>Talk to an Expert</span>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="rounded-xl border border-white/15 bg-white/[0.06] p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/[0.12]"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#03060D]/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-lg font-semibold text-white py-2 border-b border-white/[0.08]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-lg font-semibold text-white py-2 border-b border-white/[0.08]"
              >
                About
              </Link>

              {/* Mobile Products Accordion */}
              <div className="py-2 border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => toggleMobileGroup("products")}
                  className="flex items-center justify-between w-full text-lg font-semibold text-white text-left"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#06b6d4]" />
                    <span>Products</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileExpanded === "products" ? "rotate-180 text-[#c58bff]" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "products" && (
                  <div className="pl-4 pt-3 flex flex-col gap-3">
                    {PRODUCT_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col text-sm text-[#b9b4cc] hover:text-white py-1"
                      >
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="text-xs text-white/50">{item.desc}</span>
                      </Link>
                    ))}
                    <Link href="/products" className="text-xs text-[#06b6d4] font-semibold pt-1">
                      View all products →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div className="py-2 border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => toggleMobileGroup("services")}
                  className="flex items-center justify-between w-full text-lg font-semibold text-white text-left"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileExpanded === "services" ? "rotate-180 text-[#c58bff]" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "services" && (
                  <div className="pl-4 pt-3 flex flex-col gap-3">
                    {SERVICE_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col text-sm text-[#b9b4cc] hover:text-white py-1"
                      >
                        <span className="font-semibold text-white">{item.title}</span>
                        <span className="text-xs text-white/50">{item.desc}</span>
                      </Link>
                    ))}
                    <Link href="/services" className="text-xs text-[#c58bff] font-semibold pt-1">
                      View all services →
                    </Link>
                  </div>
                )}
              </div>


            </div>

            <div className="pt-8 flex flex-col gap-4">
              <MagneticButton href="/contact" variant="primary" className="w-full text-center">
                <span>Talk to an AI Specialist</span>
              </MagneticButton>

              <div className="text-center text-xs text-[#b9b4cc]">
                Dubai: +971 50 481 3114 · Riyadh Local Presence
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
