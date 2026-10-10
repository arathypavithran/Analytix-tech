"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 14, stiffness: 160, mass: 0.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pullDistance = 0.32;
    x.set((e.clientX - centerX) * pullDistance);
    y.set((e.clientY - centerY) * pullDistance);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none group";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#1677FF] via-[#1d65d4] to-[#168BFF] text-white shadow-[0_0_25px_rgba(22,119,255,0.45)] hover:shadow-[0_0_40px_rgba(22,139,255,0.75)] border border-blue-400/40 hover:scale-[1.02] px-7 py-3.5 text-base",
    secondary:
      "bg-[#0A1930]/80 hover:bg-[#0A1930] text-[#F5F8FF] border border-[rgba(72,139,255,0.3)] hover:border-[#168BFF]/60 backdrop-blur-md px-7 py-3.5 text-base shadow-[0_4px_20px_rgba(3,6,13,0.5)]",
    outline:
      "border border-[#168BFF]/40 hover:border-[#168BFF] text-white hover:bg-[#1677FF]/10 px-6 py-2.5 text-sm",
    whatsapp:
      "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] px-7 py-3.5 text-base",
  };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {/* Soft electric-blue glow overlay */}
        <span
          className="absolute inset-0 -z-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#1677FF]/50 to-[#38D9C8]/40"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="inline-block"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
}
