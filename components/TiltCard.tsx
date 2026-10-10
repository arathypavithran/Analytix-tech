"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glow?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glow = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized motion values from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Raw pixel coordinates for the border glow spotlight
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  // Spring physics for buttery-smooth tilt feel
  const springConfig = { damping: 20, stiffness: 180, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlowPos({ x, y });

    // Normalized between -0.5 and 0.5
    const normX = x / width - 0.5;
    const normY = y / height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      style={{ perspective: 1100 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative h-full overflow-hidden rounded-[22px] border border-[rgba(72,139,255,0.24)] bg-[#0A1930]/75 backdrop-blur-xl p-6 sm:p-8 shadow-[0_12px_35px_rgba(3,6,13,0.7)] transition-all duration-300 hover:border-[#168BFF]/50 ${className}`}
      >
        {/* Dynamic spotlight border glow */}
        {glow && (
          <div
            className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(22, 139, 255, 0.32), transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}

        {/* Content layer positioned in 3D */}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
