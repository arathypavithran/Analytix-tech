"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState<string>("");

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 1. Fast responsive spring for pinpoint precision center dot
  const dotX = useSpring(mouseX, { damping: 32, stiffness: 500, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 32, stiffness: 500, mass: 0.1 });

  // 2. Fluid elastic spring for outer interactive follower ring
  const ringX = useSpring(mouseX, { damping: 24, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 24, stiffness: 200, mass: 0.5 });

  // 3. Smooth ambient background glow with soft trailing mass
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 140, mass: 0.9 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 140, mass: 0.9 });

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"], .cursor-pointer'
      );

      if (interactive) {
        setIsHovered(true);
        const text = (interactive as HTMLElement).getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    }

    function handleMouseDown() {
      setIsClicked(true);
    }

    function handleMouseUp() {
      setIsClicked(false);
    }

    function handleMouseLeave() {
      setVisible(false);
      setIsHovered(false);
    }

    function handleMouseEnter() {
      setVisible(true);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* =====================================================================
          1. AMBIENT BACKGROUND GLOW (Behind page elements)
          ===================================================================== */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-0 h-[480px] w-[480px] rounded-full opacity-35 mix-blend-screen blur-[90px]"
        aria-hidden="true"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-r from-[#1677FF]/25 via-[#168BFF]/20 to-[#38D9C8]/15" />
      </motion.div>

      {/* =====================================================================
          2. ELASTIC OUTER FOLLOWER RING (Foreground z-[9999])
          ===================================================================== */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.75 : 1,
          borderColor: isHovered
            ? "rgba(56, 217, 200, 0.9)"
            : "rgba(22, 139, 255, 0.5)",
          backgroundColor: isHovered
            ? "rgba(22, 119, 255, 0.15)"
            : "rgba(22, 119, 255, 0.04)",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.4,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 rounded-full border border-[#168BFF]/40 backdrop-blur-[1px] shadow-[0_0_15px_rgba(22,119,255,0.3)] flex items-center justify-center will-change-transform"
        aria-hidden="true"
      >
        {/* Subtle rotating glow rim when hovered */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 rounded-full border border-dashed border-[#38D9C8]/70 animate-spin"
            style={{ animationDuration: "8s" }}
          />
        )}

        {/* Optional text badge when hovering specialized items */}
        {cursorText && (
          <span className="font-mono text-[9px] font-bold text-white tracking-wider uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* =====================================================================
          3. PRECISION INNER GLOW CORE DOT (Foreground z-[9999])
          ===================================================================== */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 0.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-gradient-to-r from-[#38D9C8] via-white to-[#168BFF] shadow-[0_0_8px_#38D9C8,0_0_14px_#168BFF] will-change-transform"
        aria-hidden="true"
      />
    </>
  );
}
