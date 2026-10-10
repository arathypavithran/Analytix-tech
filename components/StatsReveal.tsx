"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import NetworkBackground from "@/components/NetworkBackground";

// ============================================================================
// STATS REVEAL SECTION
// Framer Motion Animated 3D Glowing Box -> Opens -> 4 Cards Spring Out -> Box Vanishes
// ============================================================================

interface StatItem {
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
  isText?: boolean;
  displayText?: string;
}

const STATS_DATA: StatItem[] = [
  {
    target: 17,
    suffix: "+",
    label: "Years",
    sublabel: "Engineering Enterprise Systems",
  },
  {
    target: 40,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Across Middle East & Global",
  },
  {
    target: 15,
    suffix: "+",
    label: "Countries Served",
    sublabel: "From GCC to Global Enterprises",
  },
  {
    target: 0,
    isText: true,
    displayText: "24/7",
    label: "Real-Time Support",
    sublabel: "Always-On Dedicated Engineers",
  },
];

export default function StatsReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridContainerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Framer Motion in-view detection
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Animation timeline state
  const [isOpen, setIsOpen] = useState(false);
  const [isCardsOut, setIsCardsOut] = useState(false);
  const [isBoxInvisible, setIsBoxInvisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Card offsets from the central box position (calculated via offsetLeft/offsetTop)
  const [cardOffsets, setCardOffsets] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [hasMeasured, setHasMeasured] = useState(false);

  // Initial slight card rotations when nestled inside the box
  const initialRotations = [-12, 8, -6, 10];

  // 1. Check for reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setIsOpen(true);
      setIsCardsOut(true);
      setIsBoxInvisible(true);
    }
  }, []);

  // 2. Measure untransformed offsets from container center to each card center
  const calculateDeltas = () => {
    if (!gridContainerRef.current) return;
    const container = gridContainerRef.current;
    const containerCenterX = container.offsetWidth / 2;
    const containerCenterY = container.offsetHeight / 2;

    const deltas = cardsRef.current.map((card) => {
      if (!card) return { x: 0, y: 0 };
      // offsetLeft & offsetTop are unaffected by CSS transform
      const cardCenterX = card.offsetLeft + card.offsetWidth / 2;
      const cardCenterY = card.offsetTop + card.offsetHeight / 2;
      return {
        x: containerCenterX - cardCenterX,
        y: containerCenterY - cardCenterY,
      };
    });

    setCardOffsets(deltas);
    setHasMeasured(true);
  };

  useEffect(() => {
    // Initial measurement after DOM render
    const frame = requestAnimationFrame(() => {
      calculateDeltas();
    });

    const handleResize = () => calculateDeltas();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 3. Drive the timeline sequence when the section scrolls into view
  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    // --- TIMINGS (REDUCED / RESPONSIVE) ---
    const TIME_OPEN = 800; // 3D box begins opening at 0.8s
    const TIME_CARDS_OUT = 1500; // Cards burst out from the box at 1.5s
    const TIME_BOX_INVISIBLE = 2400; // Box vanishes cleanly right after cards land at 2.4s

    const timerOpen = setTimeout(() => {
      setIsOpen(true);
    }, TIME_OPEN);

    const timerCardsOut = setTimeout(() => {
      setIsCardsOut(true);
    }, TIME_CARDS_OUT);

    const timerBoxInvisible = setTimeout(() => {
      setIsBoxInvisible(true);
    }, TIME_BOX_INVISIBLE);

    return () => {
      clearTimeout(timerOpen);
      clearTimeout(timerCardsOut);
      clearTimeout(timerBoxInvisible);
    };
  }, [isInView, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-28 sm:py-36 border-t border-[rgba(72,139,255,0.18)] overflow-hidden flex flex-col justify-center bg-gradient-to-b from-[#050812] via-[#03060D] to-[#050812]"
    >
      {/* Background network constellation */}
      <NetworkBackground dotCount={28} />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1677FF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#38D9C8]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Scoped CSS 3D Cube & Orbit styles */}
      <style>{`
        @keyframes statsCubeBobRotate {
          0% {
            transform: translateY(0px) rotateX(18deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-16px) rotateX(14deg) rotateY(180deg);
          }
          100% {
            transform: translateY(0px) rotateX(18deg) rotateY(360deg);
          }
        }

        @keyframes statsCorePulse {
          0% {
            transform: translate(-50%, -50%) translateZ(0) scale(0.92);
            box-shadow: 0 0 35px #168BFF, 0 0 70px #1677FF;
          }
          100% {
            transform: translate(-50%, -50%) translateZ(0) scale(1.08);
            box-shadow: 0 0 60px #168BFF, 0 0 110px #1677FF, 0 0 140px rgba(56, 217, 200, 0.4);
          }
        }

        @keyframes statsOrbitCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes statsOrbitCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .stats-cube-face {
          position: absolute;
          inset: 0;
          width: 240px;
          height: 240px;
          background-color: rgba(22, 119, 255, 0.14);
          background-image:
            linear-gradient(to right, rgba(22, 139, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22, 139, 255, 0.3) 1px, transparent 1px);
          background-size: 24px 24px;
          border: 1.5px solid rgba(22, 139, 255, 0.7);
          box-shadow: inset 0 0 25px rgba(22, 119, 255, 0.35), 0 0 15px rgba(22, 139, 255, 0.4);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        @media (max-width: 899px) {
          .stats-cube-scaler {
            transform: scale(0.72) !important;
          }
        }

        @media (min-width: 900px) {
          .stats-cube-scaler {
            transform: scale(1) !important;
          }
        }
      `}</style>

      {/* Main Container: Centered on page matching all other sections */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading matching other sections */}
        <SectionHeading
          tag="Track Record"
          title="Scale & Reliability Proven in Production"
          description="Powering regional market leaders, high-growth enterprises, and sovereign compliance readiness across the GCC."
          align="center"
        />

        {/* Stage Area: Centered 3D floating box and 4 glass cards */}
        <div
          ref={gridContainerRef}
          className="relative w-full flex items-center justify-center min-h-[340px]"
        >
          {/* 3D Glowing Box with Orbit Rings */}
          <AnimatePresence>
            {!isBoxInvisible && !prefersReducedMotion && (
              <motion.div
                key="stats-3d-box"
                initial={{ opacity: 0, scale: 0.5, y: -80 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.2,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
              >
                <div className="stats-cube-scaler flex items-center justify-center transition-transform duration-500">
                  {/* Perspective stage */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      width: "440px",
                      height: "440px",
                      perspective: "1200px",
                    }}
                  >
                    {/* Orbit Ring 1: Tilted dashed violet ring with orbiting cyan glowing dot */}
                    <div
                      className="absolute"
                      style={{
                        width: "360px",
                        height: "360px",
                        borderRadius: "50%",
                        border: "2px dashed rgba(197, 139, 255, 0.65)",
                        transform: "rotateX(68deg) rotateY(-22deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ animation: "statsOrbitCW 8s linear infinite" }}
                      >
                        <div
                          className="absolute rounded-full"
                          style={{
                            top: "-7px",
                            left: "calc(50% - 7px)",
                            width: "14px",
                            height: "14px",
                            backgroundColor: "#06b6d4",
                            boxShadow: "0 0 16px #06b6d4, 0 0 32px #06b6d4",
                          }}
                        />
                      </div>
                    </div>

                    {/* Orbit Ring 2: Tilted solid cyan ring with orbiting blue glowing dot */}
                    <div
                      className="absolute"
                      style={{
                        width: "410px",
                        height: "410px",
                        borderRadius: "50%",
                        border: "2px solid rgba(6, 182, 212, 0.55)",
                        boxShadow: "0 0 20px rgba(6, 182, 212, 0.25)",
                        transform: "rotateX(-62deg) rotateY(26deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ animation: "statsOrbitCCW 6.8s linear infinite" }}
                      >
                        <div
                          className="absolute rounded-full"
                          style={{
                            top: "-7px",
                            left: "calc(50% - 7px)",
                            width: "14px",
                            height: "14px",
                            backgroundColor: "#3b82f6",
                            boxShadow: "0 0 16px #3b82f6, 0 0 32px #3b82f6",
                          }}
                        />
                      </div>
                    </div>

                    {/* 3D Glowing Cube (240px) */}
                    <div
                      style={{
                        width: "240px",
                        height: "240px",
                        position: "relative",
                        transformStyle: "preserve-3d",
                        animation: "statsCubeBobRotate 16s ease-in-out infinite",
                      }}
                    >
                      {/* Glowing Core Inside */}
                      <div
                        className="absolute rounded-full"
                        style={{
                          left: "50%",
                          top: "50%",
                          width: "84px",
                          height: "84px",
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle, #ffffff 10%, #38D9C8 45%, #1677FF 80%, transparent 100%)",
                          transform: isOpen
                            ? "translate(-50%, -50%) translateZ(0) scale(1.45)"
                            : "translate(-50%, -50%) translateZ(0) scale(1)",
                          boxShadow: isOpen
                            ? "0 0 80px #ffffff, 0 0 140px #168BFF, 0 0 200px #38D9C8, 0 0 260px rgba(22, 119, 255, 0.85)"
                            : "0 0 45px #168BFF, 0 0 90px #1677FF",
                          filter: isOpen ? "brightness(1.6)" : "none",
                          transition:
                            "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.65s ease, filter 0.65s ease",
                          animation: "statsCorePulse 2.6s ease-in-out infinite alternate",
                        }}
                      />

                      {/* Face 1: Front */}
                      <div
                        className="stats-cube-face"
                        style={{ transform: "rotateY(0deg) translateZ(120px)" }}
                      />

                      {/* Face 2: Back */}
                      <div
                        className="stats-cube-face"
                        style={{ transform: "rotateY(180deg) translateZ(120px)" }}
                      />

                      {/* Face 3: Right */}
                      <div
                        className="stats-cube-face"
                        style={{ transform: "rotateY(90deg) translateZ(120px)" }}
                      />

                      {/* Face 4: Left */}
                      <div
                        className="stats-cube-face"
                        style={{ transform: "rotateY(-90deg) translateZ(120px)" }}
                      />

                      {/* Face 5: Bottom */}
                      <div
                        className="stats-cube-face"
                        style={{ transform: "rotateX(-90deg) translateZ(120px)" }}
                      />

                      {/* Face 6: Top (Lifts off and fades away when opening) */}
                      <div
                        className="stats-cube-face"
                        style={{
                          transform: isOpen
                            ? "rotateX(90deg) translateZ(260px) translateY(-40px) rotateZ(12deg)"
                            : "rotateX(90deg) translateZ(120px)",
                          opacity: isOpen ? 0 : 1,
                          transition:
                            "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Four Glass Cards Grid with Framer Motion spring launch & hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full z-20">
            {STATS_DATA.map((item, idx) => {
              const delta = cardOffsets[idx] || { x: 0, y: 0 };
              const initialRotation = initialRotations[idx] || 0;

              return (
                <motion.div
                  key={item.label}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, scale: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          scale: 0.12,
                          x: hasMeasured ? delta.x : 0,
                          y: hasMeasured ? delta.y : 0,
                          rotate: initialRotation,
                        }
                  }
                  animate={
                    prefersReducedMotion || isCardsOut
                      ? {
                          opacity: 1,
                          scale: 1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                        }
                      : {
                          opacity: 0,
                          scale: 0.12,
                          x: delta.x,
                          y: delta.y,
                          rotate: initialRotation,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 125,
                    damping: 17,
                    mass: 0.8,
                    delay: prefersReducedMotion ? 0 : idx * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="group relative rounded-[24px] bg-[#0A1930]/80 border border-[rgba(72,139,255,0.24)] backdrop-blur-xl p-6 sm:p-8 lg:p-9 text-center shadow-[0_20px_45px_rgba(3,6,13,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[#168BFF]/60 hover:bg-[#0A1930] hover:shadow-[0_25px_50px_rgba(22,139,255,0.3)] transition-all duration-300"
                >
                  {/* Subtle top edge specular highlight */}
                  <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  {/* Number with electric-blue to white gradient text */}
                  <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 leading-none tracking-tight">
                    <span className="bg-gradient-to-r from-[#FFFFFF] via-[#93c5fd] to-[#168BFF] bg-clip-text text-transparent">
                      <StatNumber
                        target={item.target}
                        suffix={item.suffix}
                        isText={item.isText}
                        displayText={item.displayText}
                        started={isCardsOut || prefersReducedMotion}
                        delayMs={idx * 80}
                      />
                    </span>
                  </div>

                  {/* Title in white bold */}
                  <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white mb-2 leading-snug">
                    {item.label}
                  </h3>

                  {/* Description in muted blue-gray */}
                  <p className="text-xs sm:text-sm text-[#96A8C2] leading-relaxed max-w-[260px] mx-auto">
                    {item.sublabel}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Counting Number Component
// Starts counting up when card lands
// ============================================================================
function StatNumber({
  target,
  suffix = "",
  isText = false,
  displayText = "",
  started,
  delayMs = 0,
}: {
  target: number;
  suffix?: string;
  isText?: boolean;
  displayText?: string;
  started: boolean;
  delayMs?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isText || !started) return;

    let timer: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      let frame = 0;
      const totalFrames = 48; // ~800ms at 60fps
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Cubic ease-out curve
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.min(target, Math.round(target * eased));
        setValue(current);

        if (frame >= totalFrames) {
          clearInterval(interval);
          setValue(target);
        }
      }, 1000 / 60);

      timer = interval as unknown as NodeJS.Timeout;
    }, delayMs);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(timer);
    };
  }, [started, target, isText, delayMs]);

  if (isText) {
    return <span>{displayText}</span>;
  }

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
