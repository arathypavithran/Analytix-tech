"use client";

import { useEffect, useRef, ReactNode, PointerEvent } from "react";

/**
 * Holographic hero visual
 * A glowing 3D laptop that opens on page load and projects service holograms into the air.
 * Perfectly calibrated to fit the hero stage and seamlessly merge with the Analytix dark background.
 *  - Mouse: laptop + holograms tilt toward the cursor with depth parallax.
 *  - Scroll: scrolling down pulls holograms into the laptop and closes the lid; scrolling up releases them.
 *  - Click: sends a subtle shockwave ripple through the holograms.
 */

interface HoloItem {
  id: string;
  label: string;
  x: number;
  y: number;
  z: number;
  s: number;
  icon?: "spark" | "shield" | "pen";
}

const ICON: Record<string, ReactNode> = {
  spark: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />,
  pen: <path d="m4 20 4-1 11-11-3-3L5 16l-1 4Z" />,
};

// Calibrated hologram positions: prominent, spacious, and perfectly centered
const HOLOS: HoloItem[] = [
  { id: "ring", label: "Odoo ERP Implementation", x: 0, y: -90, z: 24, s: 0.98 },
  { id: "bars", label: "SEO · Ads · Social", x: -140, y: -125, z: 18, s: 0.92 },
  { id: "pie", label: "Digital Marketing", x: -140, y: -20, z: 46, s: 0.92 },
  { id: "code", label: "Web Development", x: 145, y: -130, z: 36, s: 0.92 },
  { id: "design", label: "Design", x: -55, y: -205, z: 62, s: 0.96, icon: "pen" },
  { id: "ai", label: "AI Process Automation", x: 60, y: -215, z: 58, s: 0.96, icon: "spark" },
  { id: "sec", label: "Aramco Cybersecurity", x: 148, y: -22, z: 68, s: 0.94, icon: "shield" },
];

const BARS: number[] = [30, 52, 40, 70, 58, 88, 64, 96, 74, 50];

// Ambient bokeh dots matching the brand's cyan and purple palette
const BOKEH: [number, number, number, string][] = [
  [12, 18, 42, "#06b6d4"],
  [25, 68, 36, "#c58bff"],
  [75, 15, 38, "#7c5cff"],
  [88, 52, 44, "#06b6d4"],
  [62, 82, 34, "#a78bfa"],
  [18, 48, 28, "#c58bff"],
  [48, 10, 32, "#7c5cff"],
  [72, 65, 26, "#06b6d4"],
];

const SPARKS = Array.from({ length: 18 }, (_, i) => ({
  dx: ((i % 9) - 4) * 26 + ((i * 37) % 15) - 6,
  d: (i * 0.43) % 4.5,
  t: 3.2 + (i % 4) * 0.6,
  s: 2.5 + (i % 3) * 1.8,
}));

function Holo({ h }: { h: HoloItem }) {
  let body: ReactNode = null;

  if (h.id === "ring")
    body = (
      <div className="ringwrap">
        <svg viewBox="-100 -100 200 200" className="ring">
          <defs>
            <linearGradient id="hvg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#c58bff" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#hvg)">
            <g className="r1">
              <circle r="96" strokeWidth="1" />
              <circle r="89" strokeWidth="5.5" strokeDasharray="1.2 4.6" opacity=".7" />
            </g>
            <g className="r2">
              <circle r="76" strokeWidth="2" strokeDasharray="70 18 12 18" />
            </g>
            <g className="r3">
              <circle r="60" strokeWidth="1.2" strokeDasharray="2 5" />
              <circle r="52" strokeWidth="2.8" strokeDasharray="30 60" />
            </g>
            <circle r="42" strokeWidth="1" fill="rgba(197,139,255,0.08)" />
          </g>
          <path
            className="cloud"
            d="M-17 11h30a10 10 0 0 0 1-20 15 15 0 0 0-29 4 8 8 0 0 0-2 16Z"
          />
        </svg>
        <div className="sweep" />
        <div className="orb o-a">
          <i />
        </div>
        <div className="orb o-b">
          <i />
        </div>
      </div>
    );

  if (h.id === "bars")
    body = (
      <div className="barswrap">
        <div className="bars">
          {BARS.map((v, i) => (
            <i key={i} style={{ height: `${v}%`, animationDelay: `${i * 130}ms` }} />
          ))}
        </div>
        <svg className="trend" viewBox="0 0 190 105" preserveAspectRatio="none">
          <polyline points="0,88 28,72 52,78 78,50 102,60 128,28 152,40 190,6" />
        </svg>
      </div>
    );

  if (h.id === "pie")
    body = (
      <div className="pie">
        <span />
      </div>
    );

  if (h.id === "code")
    body = (
      <div className="code">
        <div className="ln" style={{ "--n": 0 } as React.CSSProperties}>
          <span className="c1">{"<Hero cta='Book Consultation' />"}</span>
        </div>
        <div className="ln" style={{ "--n": 1 } as React.CSSProperties}>
          <span className="c2">const</span> scale = <span className="c3">'#1 enterprise'</span>
        </div>
        <div className="ln" style={{ "--n": 2 } as React.CSSProperties}>
          <span className="c2">await</span> <span className="c1">deploy</span>(cloud){" "}
          <span className="c3">✓</span>
        </div>
        <div className="ln last" style={{ "--n": 3 } as React.CSSProperties}>
          <span className="c4">GET /api/growth 200</span>
        </div>
      </div>
    );

  if (h.icon)
    body = (
      <div className={`bub bub-${h.id}`}>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICON[h.icon]}
        </svg>
      </div>
    );

  return (
    <div className={`holo h-${h.id}`}>
      {body}
      <span className="tag">
        <i />
        {h.label}
      </span>
    </div>
  );
}

function Keys() {
  return (
    <div className="hv-keys">
      {[13, 13, 12, 11].map((n, r) => (
        <div className="krow" key={r}>
          {Array.from({ length: n }, (_, i) => (
            <i
              key={i}
              style={{ animationDelay: `${(((r * 7 + i * 3) % 11) * 0.41).toFixed(2)}s` }}
            />
          ))}
        </div>
      ))}
      <div className="krow">
        <i />
        <i />
        <i />
        <i className="sp" />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const outBack = (t: number) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.3 * Math.pow(t - 1, 2);
const outCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HeroServicesVisual() {
  const root = useRef<HTMLDivElement | null>(null);
  const lap = useRef<HTMLDivElement | null>(null);
  const lid = useRef<HTMLDivElement | null>(null);
  const bokeh = useRef<HTMLDivElement | null>(null);
  const slots = useRef<(HTMLDivElement | null)[]>([]);
  const pa = useRef<(SVGPathElement | null)[]>([]);
  const pb = useRef<(SVGPathElement | null)[]>([]);
  const ripple = useRef<HTMLDivElement | null>(null);
  const kick = useRef(0);

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!root.current || !ripple.current) return;
    const r = root.current.getBoundingClientRect();
    const el = ripple.current;
    el.style.left = `${e.clientX - r.left}px`;
    el.style.top = `${e.clientY - r.top}px`;
    el.classList.remove("go");
    void el.offsetWidth;
    el.classList.add("go");
    kick.current = 1;
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const m = { x: 0, y: 0, tx: 0, ty: 0, active: false };
    const start = performance.now();
    let raf: number;

    const onMove = (e: globalThis.PointerEvent) => {
      if (!root.current) return;
      const r = root.current.getBoundingClientRect();
      m.tx = clamp(((e.clientX - r.left) / r.width - 0.5) * 2, -1.2, 1.2);
      m.ty = clamp(((e.clientY - r.top) / r.height - 0.5) * 2, -1.2, 1.2);
      m.active = true;
      root.current.style.setProperty("--cx", `${e.clientX - r.left + 40}px`);
      root.current.style.setProperty("--cy", `${e.clientY - r.top + 40}px`);
    };

    const onLeave = () => {
      m.active = false;
    };

    if (!reduce) {
      window.addEventListener("pointermove", onMove);
      document.addEventListener("mouseleave", onLeave);
    }

    const loop = (t: number) => {
      if (!lap.current || !root.current || !lid.current || !bokeh.current) return;
      const intro = reduce ? 1 : clamp((t - start - 200) / 3000);
      const scrollP = clamp(window.scrollY / (window.innerHeight * 0.7));

      if (!m.active && !reduce) {
        m.tx = Math.sin(t / 2600) * 0.35;
        m.ty = Math.cos(t / 3300) * 0.2;
      }
      m.x += (m.tx - m.x) * 0.06;
      m.y += (m.ty - m.y) * 0.06;
      kick.current *= 0.93;

      const lidT = outCubic(clamp(intro / 0.3));
      lap.current.style.transform = `rotateX(${14 - m.y * 5}deg) rotateY(${m.x * 12}deg)`;
      root.current.style.setProperty("--mx", m.x.toFixed(2));
      lid.current.style.transform = `rotateX(${-87 + 99 * lidT - scrollP * 30}deg)`;
      root.current.style.setProperty("--glow", (lidT * (1 - scrollP * 0.7)).toFixed(3));
      bokeh.current.style.transform = `translate(${-m.x * 14}px,${-m.y * 10}px)`;

      HOLOS.forEach((h, i) => {
        const el = slots.current[i];
        const pathA = pa.current[i];
        const pathB = pb.current[i];
        if (!el || !pathA || !pathB) return;

        const ci = clamp((intro - 0.2 - i * 0.07) / 0.5);
        const e = outBack(ci) * (1 - scrollP * 0.92);
        const ox = 0,
          oy = 65; // projected smoothly from the laptop screen opening
        const x = ox + (h.x - ox) * e - m.x * h.z;
        const y = oy + (h.y - oy) * e - m.y * h.z * 0.75 - scrollP * h.z * 1.1;

        el.style.transform = `translate(-50%,-50%) translate3d(${x}px,${y}px,0) perspective(900px) rotateY(${m.x * 9}deg) rotateX(${-m.y * 6}deg) scale(${h.s * (0.1 + 0.9 * e) * (1 + kick.current * 0.1 * Math.sin(t / 60 - i))})`;
        el.style.opacity = (clamp(ci * 2.2) * (1 - scrollP)).toString();

        const d = `M0 65 Q ${x * 0.15} ${(65 + y) / 2 - 35} ${x} ${y}`;
        pathA.setAttribute("d", d);
        pathB.setAttribute("d", d);
        pathA.style.opacity = (clamp(ci * 1.5) * 0.25 * (1 - scrollP)).toString();
        pathB.style.opacity = (clamp(ci * 1.5) * 0.95 * (1 - scrollP)).toString();
      });

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="hv" ref={root} onPointerDown={onDown} aria-label="Our services">
      <style>{css}</style>

      {/* Bokeh lights */}
      <div className="bokeh" ref={bokeh}>
        {BOKEH.map(([l, t, s, c], i) => (
          <i
            key={i}
            style={{
              left: `${l}%`,
              top: `${t}%`,
              width: s,
              height: s,
              background: c,
              animationDelay: `${i * -1.3}s`,
            }}
          />
        ))}
      </div>

      {/* Sparks rising from screen */}
      <div className="hv-sparks">
        {SPARKS.map((p, i) => (
          <i
            key={i}
            style={
              {
                "--dx": `${p.dx}px`,
                width: p.s,
                height: p.s,
                animationDelay: `${p.d}s`,
                animationDuration: `${p.t}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* 3D Laptop scene */}
      <div className="hv-scene">
        <div className="hv-beam" />
        <div className="hv-floor" />
        <div className="hv-float">
          <div className="hv-lap" ref={lap}>
            {/* Base Deck */}
            <div className="hv-base">
              <Keys />
              <div className="hv-pad" />
            </div>
            <div className="hv-lip" />
            <div className="hv-hinge" />
            {/* Screen Lid */}
            <div className="hv-lid" ref={lid} style={{ transform: "rotateX(-87deg)" }}>
              <div className="hv-screen">
                <div className="disp">
                  <div className="d-top">
                    <i />
                    <i />
                    <i />
                    <span>analytix · platform</span>
                  </div>
                  <div className="d-body">
                    <div className="d-side">
                      <b />
                      <b />
                      <b />
                      <b />
                    </div>
                    <div className="d-main">
                      <div className="d-cards">
                        <div>
                          <small>Leads</small>
                          <strong>+312%</strong>
                        </div>
                        <div>
                          <small>Uptime</small>
                          <strong>99.9%</strong>
                        </div>
                        <div>
                          <small>Rank</small>
                          <strong>#1</strong>
                        </div>
                      </div>
                      <svg className="d-chart" viewBox="0 0 200 60" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="hvc" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity=".55" />
                            <stop offset="100%" stopColor="#c58bff" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 50 20 40 45 44 70 26 95 32 120 14 150 22 200 4V60H0Z"
                          fill="url(#hvc)"
                        />
                        <polyline
                          className="d-line"
                          points="0,50 20,40 45,44 70,26 95,32 120,14 150,22 200,4"
                        />
                      </svg>
                      <div className="d-rows">
                        <span style={{ width: "78%" }} />
                        <span style={{ width: "54%" }} />
                        <span style={{ width: "66%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="scan" />
                  <div className="glare" />
                </div>
                <i className="cam" />
              </div>
              <div className="hv-back">
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projection data streams */}
      <svg className="hv-streams" viewBox="-340 -300 680 600">
        {HOLOS.map((h, i) => (
          <g key={h.id} fill="none">
            <path ref={(n) => { pa.current[i] = n; }} stroke="#06b6d4" strokeWidth="1" />
            <path
              ref={(n) => { pb.current[i] = n; }}
              className="flowline"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
      <div className="hv-ripple" ref={ripple} />

      {/* Floating service holograms */}
      <div className="hv-holos">
        {HOLOS.map((h, i) => (
          <div
            key={h.id}
            className="hv-slot"
            ref={(n) => { slots.current[i] = n; }}
            style={{ opacity: 0 }}
          >
            <Holo h={h} />
          </div>
        ))}
      </div>
    </div>
  );
}

const css = `
.hv {
  --cy1: #06b6d4;
  --mg: #c58bff;
  position: relative;
  width: 100%;
  max-width: 640px;
  height: 590px;
  margin: 0 auto;
  color: #fff;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important;
}

.bokeh {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: transparent;
}
.bokeh i {
  position: absolute;
  border-radius: 50%;
  filter: blur(14px);
  opacity: .2;
  animation: hv-bk 9s ease-in-out infinite;
}

.hv-scene {
  position: absolute;
  left: 50%;
  top: 70%;
  width: 0;
  height: 0;
  perspective: 1400px;
  z-index: 1;
}

/* Hologram vertical projector beam: smooth natural radial fade with zero box edges */
.hv-beam {
  position: absolute;
  left: -180px;
  top: -280px;
  width: 360px;
  height: 280px;
  mix-blend-mode: screen;
  pointer-events: none;
  background: radial-gradient(ellipse at 50% 100%, rgba(6, 182, 212, 0.35) 0%, rgba(124, 92, 255, 0.14) 35%, transparent 70%);
  opacity: calc(.85 * var(--glow, 0));
}

/* Holographic floor pedestal seamlessly fading into the banner background */
.hv-floor {
  position: absolute;
  left: -240px;
  top: 48px;
  width: 480px;
  height: 110px;
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 50%, rgba(124, 92, 255, 0.28) 0%, rgba(6, 182, 212, 0.12) 32%, transparent 70%);
  pointer-events: none;
  opacity: calc(.35 + .65 * var(--glow, 0));
}

.hv-float {
  position: absolute;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  animation: hv-bob 5s ease-in-out infinite;
}

.hv-lap {
  position: absolute;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
}

/* Base chassis: sleek dark obsidian with subtle neon edge glow */
.hv-base {
  position: absolute;
  left: -160px;
  top: 36px;
  width: 320px;
  height: 200px;
  transform-origin: 50% 0;
  transform: rotateX(90deg);
  border-radius: 3px 3px 18px 18px;
  background: linear-gradient(180deg, rgba(32, 25, 60, 0.95), rgba(18, 14, 38, 0.98) 45%, #080614);
  border: 1px solid rgba(197, 139, 255, 0.35);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(124, 92, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.hv-keys {
  position: absolute;
  left: 18px;
  right: 18px;
  top: 14px;
  height: 116px;
  padding: 5px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 3.5px;
  background: #080616;
  box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.9);
}

.krow {
  display: flex;
  gap: 3.5px;
  flex: 1;
}

.krow i {
  flex: 1;
  border-radius: 2.5px;
  background: linear-gradient(#1c163b, #0f0b24);
  box-shadow: 0 1px 0 rgba(197, 139, 255, 0.35), 0 0 5px rgba(6, 182, 212, 0.2);
  animation: hv-key 4.4s ease-in-out infinite;
}

.krow i.sp {
  flex: 5;
}

.hv-pad {
  position: absolute;
  left: 50%;
  bottom: 14px;
  width: 110px;
  height: 48px;
  margin-left: -55px;
  border-radius: 8px;
  background: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(197, 139, 255, 0.25);
}

.hv-lip {
  position: absolute;
  left: -160px;
  top: 36px;
  width: 320px;
  height: 8px;
  transform: translateZ(200px);
  border-radius: 0 0 16px 16px;
  background: linear-gradient(#3a3068, #161230);
  border: 1px solid rgba(197, 139, 255, 0.35);
  box-shadow: 0 10px 30px rgba(124, 92, 255, 0.4);
}

.hv-hinge {
  position: absolute;
  left: -140px;
  top: 32px;
  width: 280px;
  height: 8px;
  border-radius: 4px;
  transform: translateZ(1px);
  background: linear-gradient(#070514, #2a2250 50%, #070514);
}

/* Lid + Display */
.hv-lid {
  position: absolute;
  left: -160px;
  top: -168px;
  width: 320px;
  height: 204px;
  transform-origin: 50% 100%;
  transform-style: preserve-3d;
}

.hv-screen, .hv-back {
  position: absolute;
  inset: 0;
  border-radius: 14px 14px 4px 4px;
  backface-visibility: hidden;
}

.hv-screen {
  box-sizing: border-box;
  padding: 9px 8px 12px;
  background: linear-gradient(160deg, #221c45, #120e29 55%, #0a071a);
  border: 1px solid rgba(197, 139, 255, 0.45);
  box-shadow: 0 0 50px rgba(124, 92, 255, 0.45), 0 0 20px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.cam {
  position: absolute;
  top: 4px;
  left: 50%;
  width: 4px;
  height: 4px;
  margin-left: -2px;
  border-radius: 50%;
  background: #06b6d4;
  box-shadow: 0 0 6px #06b6d4;
}

.disp {
  position: relative;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(160deg, #0a071d, #140d33 70%, #280d4a);
  box-shadow: inset 0 0 30px rgba(197, 139, 255, 0.35);
}

.d-top {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 15px;
  padding: 0 8px;
  background: rgba(255, 255, 255, 0.06);
}
.d-top i {
  width: 4.5px;
  height: 4.5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
}
.d-top i:first-child { background: #f87171; }
.d-top i:nth-child(2) { background: #fbbf24; }
.d-top i:nth-child(3) { background: #34d399; }
.d-top span {
  margin-left: 8px;
  font-size: 7px;
  letter-spacing: .04em;
  color: rgba(255, 255, 255, 0.6);
}

.d-body {
  flex: 1;
  display: flex;
  min-height: 0;
}

.d-side {
  width: 28px;
  padding: 7px 5px;
  display: grid;
  gap: 6px;
  align-content: start;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}
.d-side b {
  height: 12px;
  border-radius: 3px;
  background: rgba(6, 182, 212, 0.16);
}
.d-side b:first-child {
  background: rgba(6, 182, 212, 0.5);
  box-shadow: 0 0 8px rgba(6, 182, 212, 0.6);
}

.d-main {
  flex: 1;
  padding: 7px 9px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.d-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}
.d-cards div {
  padding: 3px 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(6, 182, 212, 0.25);
}
.d-cards small {
  display: block;
  font-size: 6px;
  color: rgba(255, 255, 255, 0.55);
}
.d-cards strong {
  display: block;
  font-size: 11px;
  font-weight: 800;
  color: #67e8f9;
  text-shadow: 0 0 8px rgba(6, 182, 212, 0.7);
}

.d-chart {
  flex: 1;
  width: 100%;
  min-height: 38px;
}

.d-line {
  fill: none;
  stroke: #fff;
  stroke-width: 1.6;
  stroke-linejoin: round;
  stroke-dasharray: 260;
  filter: drop-shadow(0 0 4px #06b6d4);
  animation: hv-draw 4.5s ease-in-out infinite;
}

.d-rows {
  display: grid;
  gap: 3.5px;
}
.d-rows span {
  height: 3.5px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.18);
}

.scan {
  position: absolute;
  left: 0;
  right: 0;
  height: 32px;
  top: -32px;
  background: linear-gradient(transparent, rgba(6, 182, 212, 0.4), transparent);
  animation: hv-scan 3s linear infinite;
}

.glare {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-size: 230% 100%;
  background-image: linear-gradient(115deg, transparent 0 30%, rgba(255, 255, 255, 0.15) 38%, transparent 48%);
  background-position: calc(40% + var(--mx, 0) * 45%) 0;
}

.hv-back {
  transform: rotateY(180deg);
  background: linear-gradient(160deg, #261f4a, #130f2b);
  border: 1px solid rgba(197, 139, 255, 0.4);
  display: grid;
  place-items: center;
}

.hv-back span {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: radial-gradient(#fff, #c58bff 50%, transparent 72%);
  box-shadow: 0 0 18px #c58bff;
}

/* Hologram Slots */
.hv-holos {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

.hv-slot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: max-content;
  will-change: transform, opacity;
}

.holo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
  filter: drop-shadow(0 0 14px rgba(124, 92, 255, 0.45));
  animation: hv-fl 6s ease-in-out infinite;
}

.h-bars { animation-delay: -1s; }
.h-pie { animation-delay: -2s; }
.h-code { animation-delay: -3s; }
.h-design { animation-delay: -1.5s; }
.h-ai { animation-delay: -2.5s; }
.h-sec { animation-delay: -3.5s; }

/* Hologram Tag Labels */
.tag {
  position: relative;
  overflow: hidden;
  margin-top: 7px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 11px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  background: rgba(18, 14, 38, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(197, 139, 255, 0.35);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.45), 0 0 10px rgba(124, 92, 255, 0.2);
  transition: background .3s, border-color .3s, transform .3s;
}
.tag i {
  width: 5.5px;
  height: 5.5px;
  border-radius: 50%;
  background: var(--cy1);
  box-shadow: 0 0 8px var(--cy1);
}
.holo:hover .tag {
  background: rgba(124, 92, 255, 0.3);
  border-color: #fff;
  transform: translateY(-2px);
}

/* Radar Ring */
.ringwrap {
  position: relative;
  width: 230px;
  height: 230px;
}
.ringwrap .ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.ring g g {
  transform-box: fill-box;
  transform-origin: center;
}
.r1 { animation: hv-rot 22s linear infinite; }
.r2 { animation: hv-rot 14s linear infinite reverse; }
.r3 { animation: hv-rot 9s linear infinite; }
.cloud {
  fill: #fff;
  filter: drop-shadow(0 0 8px #fff);
}
.sweep {
  position: absolute;
  inset: 17%;
  border-radius: 50%;
  animation: hv-rot 3.2s linear infinite;
  background: conic-gradient(from 0deg, transparent 0 72%, rgba(6, 182, 212, 0.5) 100%);
  -webkit-mask: radial-gradient(circle, transparent 30%, #000 32%);
  mask: radial-gradient(circle, transparent 30%, #000 32%);
}
.orb {
  position: absolute;
  inset: -5px;
  animation: hv-rot 7s linear infinite;
}
.orb i {
  position: absolute;
  left: 50%;
  top: 0;
  width: 9px;
  height: 9px;
  margin-left: -4.5px;
  border-radius: 50%;
  background: #c58bff;
  box-shadow: 0 0 14px #c58bff;
}
.o-b {
  animation-duration: 11s;
  animation-direction: reverse;
  inset: 12px;
}
.o-b i {
  background: #06b6d4;
  box-shadow: 0 0 14px #06b6d4;
}

/* Bar Chart */
.barswrap {
  position: relative;
  width: 155px;
  height: 86px;
}
.barswrap .bars {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  gap: 4px;
}
.bars i {
  flex: 1;
  border-radius: 2px 2px 0 0;
  background: linear-gradient(#06b6d4, rgba(124, 92, 255, 0.3));
  transform-origin: bottom;
  animation: hv-grow 2.6s ease-in-out infinite alternate;
}
.trend {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.trend polyline {
  fill: none;
  stroke: #c58bff;
  stroke-width: 2.2;
  stroke-linejoin: round;
  stroke-dasharray: 260;
  filter: drop-shadow(0 0 5px #c58bff);
  animation: hv-draw 4.5s ease-in-out infinite;
}

/* Pie Chart */
.pie {
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: conic-gradient(#c58bff 0 var(--p, 68%), rgba(255, 255, 255, 0.18) var(--p, 68%) 100%);
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.4), 0 0 20px rgba(197, 139, 255, 0.35);
  animation: hv-pie 5s ease-in-out infinite alternate;
}
.pie span {
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  background: rgba(18, 14, 38, 0.92);
}

/* Code Panel */
.code {
  margin: 0;
  padding: 9px 12px;
  border-radius: 9px;
  font: 10.5px/1.65 ui-monospace, Menlo, monospace;
  color: #d6f6ff;
  background: rgba(14, 11, 32, 0.78);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(197, 139, 255, 0.3);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.55), 0 0 14px rgba(124, 92, 255, 0.2);
}
.c1 { color: #06b6d4; }
.c2 { color: #c58bff; }
.c3 { color: #34d399; }
.c4 { color: #fbbf24; }
.code .ln {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: hv-type 9s steps(26) infinite;
  animation-delay: calc(var(--n) * 1s);
}
.code .ln.last::after {
  content: "▍";
  color: #06b6d4;
  animation: hv-blink 1s steps(1) infinite;
}

/* Glowing Icon Bubbles */
.bub {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: #fff;
  border: 1.8px solid rgba(255, 255, 255, 0.7);
  animation: hv-pulse 2.8s ease-in-out infinite;
  position: relative;
}
.bub-design {
  background: radial-gradient(circle at 35% 30%, #e879f9, #7c5cff 60%, #4a2371);
  box-shadow: 0 0 24px rgba(232, 121, 249, 0.75);
}
.bub-ai {
  background: radial-gradient(circle at 35% 30%, #a5f3fc, #06b6d4 60%, #0e7490);
  box-shadow: 0 0 24px rgba(6, 182, 212, 0.75);
}
.bub-sec {
  background: radial-gradient(circle at 35% 30%, #93c5fd, #3b82f6 60%, #1e3a8a);
  box-shadow: 0 0 24px rgba(59, 130, 246, 0.75);
}
.bub::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid currentColor;
  animation: hv-ping 2.6s ease-out infinite;
  opacity: .5;
}

/* Sparks & Projection Streams */
@property --p {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 68%;
}

.hv-sparks {
  position: absolute;
  left: 50%;
  top: calc(50% + 70px);
  width: 0;
  height: 0;
  z-index: 2;
  pointer-events: none;
  opacity: var(--glow, 0);
}
.hv-sparks i {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  box-shadow: 0 0 10px #06b6d4, 0 0 20px #c58bff;
  animation: hv-rise 3.8s ease-out infinite;
}

.hv-streams {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: visible;
}
.flowline {
  stroke-dasharray: 1 16;
  filter: drop-shadow(0 0 4px #06b6d4);
  animation: hv-flow 1.1s linear infinite;
}

.hv-ripple {
  position: absolute;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  z-index: 4;
  pointer-events: none;
  border: 2px solid #06b6d4;
  opacity: 0;
}
.hv-ripple.go {
  animation: hv-rip .9s ease-out;
}

.tag::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
  left: -60%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  animation: hv-shine 4s ease-in-out infinite;
}

/* Keyframe Animations */
@keyframes hv-rise {
  0% { transform: translate(0, 0) scale(.4); opacity: 0; }
  15% { opacity: 1; }
  100% { transform: translate(var(--dx), -260px) scale(1.2); opacity: 0; }
}
@keyframes hv-flow {
  to { stroke-dashoffset: -17; }
}
@keyframes hv-rip {
  from { transform: scale(1); opacity: .9; }
  to { transform: scale(22); opacity: 0; }
}
@keyframes hv-scan {
  to { top: 100%; }
}
@keyframes hv-draw {
  0% { stroke-dashoffset: 260; }
  55%, 100% { stroke-dashoffset: 0; }
}
@keyframes hv-pie {
  from { --p: 38%; }
  to { --p: 90%; }
}
@keyframes hv-type {
  0% { width: 0; }
  10%, 88% { width: 100%; }
  100% { width: 0; }
}
@keyframes hv-blink {
  50% { opacity: 0; }
}
@keyframes hv-ping {
  0% { transform: scale(1); opacity: .8; }
  100% { transform: scale(1.8); opacity: 0; }
}
@keyframes hv-shine {
  0%, 60% { left: -60%; }
  100% { left: 130%; }
}
@keyframes hv-key {
  0%, 86%, 100% { filter: none; }
  90% { filter: brightness(2.2) drop-shadow(0 0 6px #06b6d4); }
}
@keyframes hv-bob {
  0%, 100% { transform: translateY(-7px); }
  50% { transform: translateY(7px); }
}
@keyframes hv-fl {
  0%, 100% { transform: translateY(-7px); }
  50% { transform: translateY(7px); }
}
@keyframes hv-rot {
  to { transform: rotate(360deg); }
}
@keyframes hv-grow {
  from { transform: scaleY(.65); }
  to { transform: scaleY(1); }
}
@keyframes hv-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes hv-bk {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.15); }
}

/* Responsive scaling rules */
@media (max-width: 1400px) {
  .hv {
    transform: scale(0.96);
    transform-origin: center center;
  }
}
@media (max-width: 1200px) {
  .hv {
    transform: scale(0.9);
    transform-origin: center center;
  }
}
@media (max-width: 1023px) {
  .hv {
    transform: scale(0.98);
    transform-origin: center center;
  }
}
@media (max-width: 768px) {
  .hv {
    transform: scale(0.82);
    transform-origin: center center;
  }
}
@media (max-width: 480px) {
  .hv {
    transform: scale(0.65);
    transform-origin: center center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hv-float, .krow i, .d-line, .holo, .r1, .r2, .r3, .bars i, .bub, .bokeh i,
  .hv-sparks i, .flowline, .sweep, .orb, .scan, .pie, .trend polyline, .code .ln,
  .bub::after, .tag::after {
    animation: none !important;
  }
  .code .ln {
    width: auto !important;
  }
}
`;
