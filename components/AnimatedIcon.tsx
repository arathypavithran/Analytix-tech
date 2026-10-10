"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type IconAnimationType =
  | "service"
  | "industry"
  | "feature"
  | "process"
  | "arrow"
  | "check"
  | "stat"
  | "nav"
  | "social"
  | "cta"
  | "decorative"
  | "default";

export type IconGlowColor =
  | "purple"
  | "cyan"
  | "green"
  | "amber"
  | "blue"
  | "white";

interface AnimatedIconProps {
  children: ReactNode;
  type?: IconAnimationType;
  glowColor?: IconGlowColor;
  delay?: number;
  className?: string;
  asSpan?: boolean;
  floating?: boolean;
  interactive?: boolean;
}

const GLOW_SHADOWS: Record<IconGlowColor, string> = {
  purple: "drop-shadow(0 0 10px rgba(197, 139, 255, 0.45))",
  cyan: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))",
  green: "drop-shadow(0 0 10px rgba(37, 211, 102, 0.45))",
  amber: "drop-shadow(0 0 10px rgba(245, 158, 11, 0.5))",
  blue: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
  white: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
};

export default function AnimatedIcon({
  children,
  type = "default",
  glowColor = "purple",
  delay = 0,
  className = "",
  asSpan = true,
  floating = false,
  interactive = true,
}: AnimatedIconProps) {
  const glowFilter = GLOW_SHADOWS[glowColor] || GLOW_SHADOWS.purple;

  // Viewport reveal animation variants
  const revealInitial = {
    opacity: 0,
    y: type === "arrow" ? 0 : 12,
    x: type === "arrow" ? -6 : 0,
    scale: type === "check" ? 0.75 : 0.86,
  };

  const revealInView = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  };

  // Hover micro-animations based on icon role
  const getHoverProps = () => {
    if (!interactive) return {};

    const easeOut = "easeOut" as const;
    const backOut = "backOut" as const;

    switch (type) {
      case "service":
        return {
          y: -4,
          scale: 1.08,
          filter: glowFilter,
          transition: { duration: 0.28, ease: easeOut },
        };
      case "industry":
        return {
          y: -3,
          scale: 1.07,
          filter: glowFilter,
          transition: { duration: 0.3, ease: easeOut },
        };
      case "feature":
        return {
          y: -3,
          scale: 1.08,
          filter: glowFilter,
          transition: { duration: 0.28, ease: easeOut },
        };
      case "process":
        return {
          scale: 1.12,
          y: -2,
          filter: glowFilter,
          transition: { duration: 0.25, ease: easeOut },
        };
      case "arrow":
        return {
          x: 4,
          scale: 1.05,
          filter: glowFilter,
          transition: { duration: 0.22, ease: easeOut },
        };
      case "check":
        return {
          scale: 1.15,
          filter: glowFilter,
          transition: { duration: 0.22, ease: backOut },
        };
      case "stat":
        return {
          scale: 1.1,
          y: -2,
          filter: glowFilter,
          transition: { duration: 0.25, ease: easeOut },
        };
      case "nav":
        return {
          scale: 1.08,
          rotate: 3,
          filter: glowFilter,
          transition: { duration: 0.22, ease: easeOut },
        };
      case "social":
        return {
          y: -3,
          scale: 1.1,
          filter: glowFilter,
          transition: { duration: 0.25, ease: easeOut },
        };
      case "cta":
        return {
          x: 3,
          y: -1,
          scale: 1.06,
          filter: glowFilter,
          transition: { duration: 0.22, ease: easeOut },
        };
      case "decorative":
        return {
          scale: 1.08,
          filter: glowFilter,
          transition: { duration: 0.3, ease: easeOut },
        };
      default:
        return {
          y: -3,
          scale: 1.07,
          filter: glowFilter,
          transition: { duration: 0.28, ease: easeOut },
        };
    }
  };

  // Continuous subtle floating animation (decorative only)
  const isFloating = floating || type === "decorative";
  const floatAnimation = isFloating
    ? {
        y: [0, -5, 0],
        transition: {
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      }
    : undefined;

  // Type-specific CSS helper classes to support CSS card hover & reduced-motion
  const typeClass =
    type === "arrow"
      ? "icon-arrow card-arrow"
      : type === "service"
      ? "icon-service card-icon"
      : type === "industry"
      ? "icon-industry card-icon"
      : type === "feature"
      ? "icon-feature card-icon"
      : type === "check"
      ? "icon-check"
      : type === "stat"
      ? "icon-stat"
      : type === "cta"
      ? "icon-cta"
      : type === "nav"
      ? "icon-nav"
      : type === "social"
      ? "icon-social"
      : "card-icon";

  const Component = asSpan ? motion.span : motion.div;

  return (
    <Component
      initial={revealInitial}
      whileInView={revealInView}
      viewport={{ once: true, margin: "-20px" }}
      whileHover={getHoverProps()}
      animate={floatAnimation}
      className={`icon-animate inline-flex items-center justify-center shrink-0 will-change-transform select-none ${typeClass} ${
        isFloating ? "icon-floating" : ""
      } ${className}`}
      data-icon-type={type}
    >
      {children}
    </Component>
  );
}
