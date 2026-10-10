"use client";

import { motion } from "framer-motion";
import {
  Users,
  CreditCard,
  Box,
  UserCheck,
  FolderKanban,
  Megaphone,
  BarChart3,
  Sparkles,
  Layers,
} from "lucide-react";

const ODOO_MODULES = [
  { label: "CRM", icon: Users, angle: 0 },
  { label: "Sales", icon: CreditCard, angle: 45 },
  { label: "Finance", icon: Layers, angle: 90 },
  { label: "Inventory", icon: Box, angle: 135 },
  { label: "HR", icon: UserCheck, angle: 180 },
  { label: "Projects", icon: FolderKanban, angle: 225 },
  { label: "Marketing", icon: Megaphone, angle: 270 },
  { label: "Analytics", icon: BarChart3, angle: 315 },
];

export default function Odoo360Visualization() {
  return (
    <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl bg-[rgb(14,19,30)]/80 border border-white/10 p-4 sm:p-5 overflow-hidden flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute w-52 h-52 rounded-full bg-[#06b6d4]/15 blur-[60px]" />

      {/* SVG Orbital Track & Connection Beams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-150 -150 300 300">
        <circle
          cx="0"
          cy="0"
          r="95"
          fill="none"
          stroke="rgba(6,182,212,0.22)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <circle
          cx="0"
          cy="0"
          r="65"
          fill="none"
          stroke="rgba(197,139,255,0.18)"
          strokeWidth="1"
        />

        {/* Orbit Connection Spokes */}
        {ODOO_MODULES.map((m) => {
          const rad = (m.angle * Math.PI) / 180;
          const x = Math.cos(rad) * 95;
          const y = Math.sin(rad) * 95;
          return (
            <line
              key={m.label}
              x1="0"
              y1="0"
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Center 360 Core */}
      <div className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center bg-gradient-to-tr from-[#121926] via-[#1a233a] to-[#251b47] border border-[#06b6d4]/50 shadow-[0_0_35px_rgba(6,182,212,0.35)] backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-[#06b6d4] mb-0.5 animate-pulse" />
        <span className="font-heading font-extrabold text-sm text-white tracking-tight">
          ODOO + AI
        </span>
        <span className="font-mono text-[9px] text-[#c58bff] font-bold">
          360° ENGINE
        </span>
      </div>

      {/* Orbiting Satellite Modules */}
      {ODOO_MODULES.map((m) => {
        const rad = (m.angle * Math.PI) / 180;
        const radius = 95;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const Icon = m.icon;

        return (
          <motion.div
            key={m.label}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: (m.angle / 360) * 2,
              ease: "easeInOut",
            }}
            className="absolute z-20 flex items-center gap-1 px-2 py-1 rounded-lg bg-[rgb(20,27,41)]/90 border border-white/15 backdrop-blur-md shadow-md text-white/90"
            style={{
              transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
            }}
          >
            <Icon className="h-3 w-3 text-[#06b6d4]" />
            <span className="font-mono text-[10px] font-semibold">{m.label}</span>
          </motion.div>
        );
      })}

      {/* Top and Bottom Corner HUD Tags */}
      <div className="absolute top-3 left-4 font-mono text-[10px] text-white/40">
        SYS.360 // SYNCED ARCHITECTURE
      </div>
      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-[#06b6d4]">
        GCC VAT & ZATCA READY
      </div>
    </div>
  );
}
