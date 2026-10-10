"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Search,
  Bell,
  Sun,
  Grid,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  UserCheck,
  Activity,
  FileCheck,
  Shield,
  Zap,
} from "lucide-react";

interface DashboardTab {
  id: string;
  name: string;
  badge?: string;
}

const DASHBOARD_TABS: DashboardTab[] = [
  { id: "overview", name: "Overview" },
  { id: "ai-erp", name: "AI ERP Core" },
  { id: "360-odoo", name: "360 Odoo" },
  { id: "automation", name: "Automation" },
  { id: "security", name: "Cyber Shield" },
];

export default function HeroDashboardPreview() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [timeFilter, setTimeFilter] = useState<string>("Today");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0C0E15]/95 backdrop-blur-2xl overflow-hidden"
      style={{
        borderTop: "1.5px solid rgba(255, 255, 255, 0.5)",
        boxShadow:
          "0 -15px 50px rgba(124, 92, 255, 0.35), 0 25px 90px rgba(0, 0, 0, 0.95)",
      }}
    >
      {/* Subtle top edge filament */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c58bff]/70 to-transparent pointer-events-none opacity-80" />

      {/* Main Container: 3-column / 4-section layout matching reference image */}
      <div className="grid grid-cols-12 min-h-[540px] text-xs">
        {/* ===================================================================
            COLUMN 1: Left Navigation Sidebar (Col 1-2 on lg, hidden on mobile/small)
            =================================================================== */}
        <aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col justify-between border-r border-white/[0.06] bg-[#08090E] p-4 sm:p-5">
          <div className="space-y-6">
            {/* Brand Logo Header */}
            <div className="flex items-center gap-2.5 px-2 py-1">
              <div className="h-6 w-6 rounded-lg bg-[#1677FF] flex items-center justify-center text-white shadow-[0_0_12px_rgba(22,119,255,0.6)]">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <span className="font-heading font-bold text-sm tracking-tight text-[#F5F8FF]">
                Analytix BSS
              </span>
            </div>

            {/* Favorites Section */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#96A8C2]/60 px-2 mb-2">
                <span>Favorites</span>
                <span className="text-[10px] text-[#96A8C2]/40">Recently</span>
              </div>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    activeTab === "overview"
                      ? "text-white font-medium bg-white/[0.06]"
                      : "text-[#96A8C2] hover:text-white"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#168BFF]" />
                  <span>Overview</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("ai-erp")}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    activeTab === "ai-erp"
                      ? "text-white font-medium bg-white/[0.06]"
                      : "text-[#96A8C2] hover:text-white"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#96A8C2]/50" />
                  <span>Projects</span>
                </button>
              </div>
            </div>

            {/* Dashboards Section */}
            <div>
              <div className="text-[11px] font-semibold text-[#96A8C2]/60 px-2 mb-2">
                Dashboards
              </div>
              <div className="space-y-1">
                {DASHBOARD_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-all ${
                        isActive
                          ? "bg-white/[0.09] text-white font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/[0.08]"
                          : "text-[#96A8C2] hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      <Layers className="h-3.5 w-3.5 text-[#168BFF]" />
                      <span className="truncate">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* User profile / session footer in sidebar */}
          <div className="pt-4 border-t border-[rgba(72,139,255,0.12)] flex items-center gap-2.5 px-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#1677FF] to-[#38D9C8] flex items-center justify-center text-white text-[11px] font-bold">
              AI
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-medium text-white truncate">Enterprise Tier</p>
              <p className="text-[10px] text-[#38D9C8] flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C8] animate-pulse" />
                Dubai · Riyadh Live
              </p>
            </div>
          </div>
        </aside>

        {/* ===================================================================
            COLUMN 2 & 3: Main Dashboard Core & Right Notifications Column
            =================================================================== */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col bg-[#0C0E15]">
          {/* Top Bar matching reference */}
          <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06] bg-[#0E111B]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[#96A8C2]">
              <Grid className="h-3.5 w-3.5 text-[#3B82F6]" />
              <span className="text-[#96A8C2]/60">Dashboards</span>
              <span>/</span>
              <span className="text-white font-medium">Default</span>
            </div>

            {/* Search and Action Icons */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-[#080A10] border border-white/[0.08] rounded-lg px-3 py-1.5 text-[#96A8C2] text-[11px] w-52">
                <Search className="h-3 w-3" />
                <span className="flex-1 text-[#96A8C2]/60">Search</span>
                <kbd className="font-mono text-[9px] bg-white/[0.08] px-1.5 py-0.5 rounded text-white/60">
                  /
                </kbd>
              </div>

              <div className="flex items-center gap-1 text-[#96A8C2]">
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:text-white hover:bg-white/[0.05]"
                  aria-label="Theme toggle"
                >
                  <Sun className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] relative"
                  aria-label="Notifications"
                >
                  <Bell className="h-3.5 w-3.5" />
                  <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#168BFF]" />
                </button>
                <div className="h-6 w-6 rounded-full bg-[#1677FF]/20 border border-[#1677FF]/40 flex items-center justify-center text-white text-[10px] font-bold">
                  BSS
                </div>
              </div>
            </div>
          </header>

          {/* Main Dashboard Layout (Split into Center Grid & Right Notifications) */}
          <div className="grid grid-cols-12 flex-1 p-4 sm:p-6 gap-6">
            {/* Center Area (Col 1-8 / 9) */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
              {/* Header row: "Overview" + Time filter */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                    Overview
                  </h3>
                  <p className="text-[11px] text-[#96A8C2]">
                    Real-time AI telemetry, autonomous ERP ledger, and demand forecasts
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setTimeFilter(timeFilter === "Today" ? "This Year" : "Today")
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-white hover:bg-white/[0.08] transition-colors"
                    >
                      <span>{timeFilter}</span>
                      <ChevronDown className="h-3 w-3 text-[#96A8C2]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Four Metric Cards Row matching reference (Views, Visits, New Users, Active Users) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Metric 1 */}
                <div className="p-3.5 rounded-xl bg-[#121622] border border-white/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  <span className="text-[11px] text-[#96A8C2] block mb-1">Views</span>
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="font-heading text-xl font-bold text-white">7,265</span>
                    <span className="text-[10px] text-[#38D9C8] font-semibold flex items-center">
                      +11.01%
                      <ArrowUpRight className="h-2.5 w-2.5 ml-0.5" />
                    </span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-3.5 rounded-xl bg-[#121622] border border-white/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  <span className="text-[11px] text-[#96A8C2] block mb-1">Visits</span>
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="font-heading text-xl font-bold text-white">3,671</span>
                    <span className="text-[10px] text-[#96A8C2] font-semibold">
                      -0.03%
                    </span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-3.5 rounded-xl bg-[#121622] border border-white/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  <span className="text-[11px] text-[#96A8C2] block mb-1">New Users</span>
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="font-heading text-xl font-bold text-white">256</span>
                    <span className="text-[10px] text-[#38D9C8] font-semibold flex items-center">
                      +15.03%
                      <ArrowUpRight className="h-2.5 w-2.5 ml-0.5" />
                    </span>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-3.5 rounded-xl bg-[#121622] border border-white/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  <span className="text-[11px] text-[#96A8C2] block mb-1">Active Users</span>
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="font-heading text-xl font-bold text-white">2,318</span>
                    <span className="text-[10px] text-[#38D9C8] font-semibold flex items-center">
                      +6.08%
                      <ArrowUpRight className="h-2.5 w-2.5 ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart & Telemetry panels */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 flex-1">
                {/* Total Users / Projects Area Chart (7 cols) */}
                <div className="sm:col-span-8 p-4 rounded-xl bg-[#121622] border border-white/[0.07] flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-white text-xs">Total Users</span>
                      <span className="text-[#96A8C2] text-xs">Total Projects</span>
                      <span className="text-[#96A8C2] text-xs hidden sm:inline">Operating Status</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-[10px]">
                      <span className="flex items-center gap-1 text-[#168BFF]">
                        <span className="h-2 w-2 rounded-full bg-[#168BFF]" />
                        This year
                      </span>
                      <span className="flex items-center gap-1 text-[#96A8C2]">
                        <span className="h-2 w-2 rounded-full bg-[#96A8C2]/40" />
                        Last year
                      </span>
                    </div>
                  </div>

                  {/* SVG Chart curve matching reference aesthetic */}
                  <div className="relative h-36 w-full mt-2">
                    <svg
                      viewBox="0 0 400 120"
                      preserveAspectRatio="none"
                      className="w-full h-full overflow-visible"
                    >
                      <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1677FF" stopOpacity="0.45" />
                          <stop offset="60%" stopColor="#168BFF" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#168BFF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Last year reference line (dashed gray) */}
                      <path
                        d="M 0,90 Q 70,85 140,75 T 280,60 T 400,45"
                        fill="none"
                        stroke="rgba(150, 168, 194, 0.35)"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />

                      {/* This year filled area */}
                      <path
                        d="M 0,80 Q 60,65 120,40 T 240,45 T 320,25 T 400,10 L 400,120 L 0,120 Z"
                        fill="url(#areaGradient)"
                      />

                      {/* This year bright glowing stroke */}
                      <path
                        d="M 0,80 Q 60,65 120,40 T 240,45 T 320,25 T 400,10"
                        fill="none"
                        stroke="#168BFF"
                        strokeWidth="2.5"
                        style={{ filter: "drop-shadow(0 0 6px #168BFF)" }}
                      />

                      {/* Key telemetry marker points */}
                      <circle cx="120" cy="40" r="3.5" fill="#FFFFFF" stroke="#1677FF" strokeWidth="2" />
                      <circle cx="240" cy="45" r="3.5" fill="#FFFFFF" stroke="#1677FF" strokeWidth="2" />
                      <circle cx="320" cy="25" r="3.5" fill="#FFFFFF" stroke="#1677FF" strokeWidth="2" />
                      <circle cx="400" cy="10" r="4" fill="#38D9C8" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>

                    {/* Chart bottom scale marks */}
                    <div className="flex justify-between text-[10px] text-[#96A8C2]/60 pt-2 border-t border-white/[0.06]">
                      <span>Jan</span>
                      <span>Apr</span>
                      <span>Jul</span>
                      <span>Oct</span>
                      <span>Dec (Live)</span>
                    </div>
                  </div>
                </div>
                {/* Traffic by Website / Channel (4 cols) */}
                <div className="sm:col-span-4 p-4 rounded-xl bg-[#121622] border border-white/[0.07] flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-xs mb-3">Traffic by Website</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-[#96A8C2]">Google ERP Connect</span>
                          <span className="text-white font-medium">68%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
                          <div className="h-full bg-[#1677FF] rounded-full w-[68%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-[#96A8C2]">Odoo 360 Ecosystem</span>
                          <span className="text-white font-medium">84%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
                          <div className="h-full bg-[#38D9C8] rounded-full w-[84%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-[#96A8C2]">Direct Enterprise API</span>
                          <span className="text-white font-medium">92%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#1677FF] to-[#38D9C8] rounded-full w-[92%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] text-[10px] text-[#38D9C8] flex items-center justify-between">
                    <span>Autonomous Routing</span>
                    <span className="font-mono">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Notifications Column (Col 9-12 on lg) */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-white/[0.06] lg:pl-6 pt-4 lg:pt-0">
              {/* Notifications Header */}
              <div>
                <h4 className="font-semibold text-white text-xs mb-3 flex items-center justify-between">
                  <span>Notifications</span>
                  <span className="text-[10px] text-[#38D9C8] font-mono">4 New</span>
                </h4>

                <div className="space-y-3">
                  {/* Notification Item 1 */}
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#121622] border border-white/[0.07] hover:bg-[#161a29] transition-colors">
                    <div className="h-6 w-6 rounded-md bg-[#1677FF]/20 border border-[#1677FF]/40 flex items-center justify-center text-[#168BFF] shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-white truncate">
                        You fixed a bug.
                      </p>
                      <p className="text-[10px] text-[#96A8C2]/60">Just now</p>
                    </div>
                  </div>

                  {/* Notification Item 2 */}
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#121622] border border-white/[0.07] hover:bg-[#161a29] transition-colors">
                    <div className="h-6 w-6 rounded-md bg-[#38D9C8]/20 border border-[#38D9C8]/40 flex items-center justify-center text-[#38D9C8] shrink-0 mt-0.5">
                      <UserCheck className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-white truncate">
                        New user registered.
                      </p>
                      <p className="text-[10px] text-[#96A8C2]/60">59 minutes ago</p>
                    </div>
                  </div>

                  {/* Notification Item 3 */}
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#121622] border border-white/[0.07] hover:bg-[#161a29] transition-colors">
                    <div className="h-6 w-6 rounded-md bg-[#1677FF]/20 border border-[#1677FF]/40 flex items-center justify-center text-[#168BFF] shrink-0 mt-0.5">
                      <FileCheck className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-white truncate">
                        You fixed a bug.
                      </p>
                      <p className="text-[10px] text-[#96A8C2]/60">12 hours ago</p>
                    </div>
                  </div>

                  {/* Notification Item 4 */}
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-[#121622] border border-white/[0.07] hover:bg-[#161a29] transition-colors">
                    <div className="h-6 w-6 rounded-md bg-[#96A8C2]/20 border border-[#96A8C2]/40 flex items-center justify-center text-[#F5F8FF] shrink-0 mt-0.5">
                      <Activity className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-white truncate">
                        Andi Lane subscribed to you.
                      </p>
                      <p className="text-[10px] text-[#96A8C2]/60">Today, 11:59 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activities Stream */}
              <div className="pt-3 border-t border-[rgba(72,139,255,0.12)]">
                <h4 className="font-semibold text-white text-xs mb-2">Activities</h4>
                <div className="flex items-center gap-2 text-[11px] text-[#96A8C2]">
                  <div className="h-2 w-2 rounded-full bg-[#168BFF] animate-ping" />
                  <span>Changed the style.</span>
                  <span className="text-[10px] text-[#96A8C2]/50 ml-auto">Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
