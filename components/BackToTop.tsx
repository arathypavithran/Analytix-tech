"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 700);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          className="fixed bottom-7 right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[rgb(20,27,41)]/85 text-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(124,92,255,0.35)] transition-colors hover:border-[#c58bff] hover:text-[#c58bff] cursor-pointer"
        >
          <AnimatedIcon type="arrow" glowColor="purple">
            <ArrowUp className="h-5 w-5" />
          </AnimatedIcon>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
