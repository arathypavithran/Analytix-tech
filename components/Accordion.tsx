"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import { FAQItem } from "@/lib/content";

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <div className={`flex flex-col gap-4 max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`rounded-[22px] border transition-all duration-300 backdrop-blur-md overflow-hidden ${
              isOpen
                ? "border-[#168BFF]/50 bg-[#0A1930]/85 shadow-[0_10px_30px_rgba(22,119,255,0.2)]"
                : "border-[rgba(72,139,255,0.2)] bg-[#071426]/60 hover:bg-[#0A1930]/70 hover:border-[#168BFF]/35"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-6 text-left transition-colors cursor-pointer select-none"
            >
              <span className="font-heading text-lg sm:text-xl font-semibold text-[#F5F8FF] pr-4">
                {item.question}
              </span>
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  isOpen
                    ? "border-[#168BFF] bg-[#1677FF]/20 text-[#168BFF]"
                    : "border-[rgba(72,139,255,0.25)] bg-white/[0.04] text-white"
                }`}
              >
                <AnimatedIcon type="nav" glowColor="blue">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </AnimatedIcon>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-base text-[#96A8C2] leading-relaxed border-t border-[rgba(72,139,255,0.15)]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
