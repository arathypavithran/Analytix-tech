"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroProductStage() {
  return (
    <div className="relative w-full pt-10 sm:pt-16 lg:pt-24 pb-20 sm:pb-32">
      {/* =====================================================================
          TOP HERO ROW: Typography & Single Primary CTA
          Left-aligned, clean, spacious, allowing the 4K banner wave animation
          to be fully visible across the hero stage.
          ===================================================================== */}
      <div className="max-w-2xl">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl sm:text-6xl lg:text-[4.4rem] font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          Intelligent Systems,
          <br />
          Powered by AI
        </motion.h1>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg lg:text-xl text-[#94a3b8] font-normal leading-relaxed max-w-xl mb-9"
        >
          Make smarter operational decisions with real-time AI forecasts, autonomous ERP workflows, and enterprise cybersecurity, all in one intelligent platform.
        </motion.p>

        {/* Single Primary Pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="#products"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-[0_0_35px_rgba(37,99,235,0.7)] border border-blue-400/40 transition-all duration-300 hover:shadow-[0_0_55px_rgba(59,130,246,0.95)]"
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span>See AI in Action</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
