"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  FunnelIcon,
  TableCellsIcon,
  BellAlertIcon,
  GlobeAltIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  PresentationChartLineIcon,
  ServerStackIcon,
  CircleStackIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

/* ---------- helpers ---------- */

function useSectionObserver(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, visible } = useSectionObserver();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md ${
        hover
          ? "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/10"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- mini chart components ---------- */

function MiniBarChart({ bars, height = 48 }: { bars: number[]; height?: number }) {
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-1" style={{ height }}>
      {bars.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-teal-500 to-cyan-400 opacity-80"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

function MiniLineChart({ points }: { points: number[] }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const w = 200;
  const h = 48;
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  const areaD = `${d} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#lineGrad)" />
      <path d={d} fill="none" stroke="#14b8a6" strokeWidth="2" />
    </svg>
  );
}

function HeatCell({ level }: { level: 0 | 1 | 2 | 3 }) {
  const bg = [
    "bg-green-900/40",
    "bg-yellow-700/40",
    "bg-orange-600/50",
    "bg-red-600/60",
  ][level];
  return <div className={`w-7 h-7 rounded ${bg}`} />;
}

/* ================================================================
   SECTION 1 – HERO
   ================================================================ */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#060e1f] via-[#0a1c38] to-[#0b2a3e]">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-teal-600/20 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px] animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 md:px-12 pt-28 pb-20">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 hover:text-teal-300 transition-colors"
        >
          &larr; Back to Projects
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left copy */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-teal-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300 border border-teal-500/20">
              Concept Project
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              Vault &ndash; Executive &amp;&nbsp;Investor Control&nbsp;Panel
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              A concept dashboard for executives and investors to monitor
              portfolio performance, risk, and capital allocation in one secure
              view.
            </p>
            <p className="mt-3 text-sm text-gray-400 max-w-xl">
              An experimental project exploring how to summarise complex
              financial data into a 10-second executive-ready snapshot &mdash;
              clear hierarchy, calm design, and zero noise.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://vercel.com/benjamin-obajes-projects/vault-demo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
              >
                Open Vault prototype
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
              <a
                href="#problem"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                View case study
              </a>
            </div>
          </div>

          {/* Right – dashboard preview card */}
          <div className="hidden lg:block">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-teal-500/20 animate-fadeInUp">
      {/* KPI row */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "AUM", value: "$4.2B", delta: "+3.1%" },
          { label: "YTD Return", value: "14.6%", delta: "+2.4%" },
          { label: "Run Rate", value: "$620M", delta: "+1.8%" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"
          >
            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              {kpi.label}
            </p>
            <p className="text-lg font-bold text-white">{kpi.value}</p>
            <span className="text-xs text-teal-400">{kpi.delta}</span>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-3">
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">
            Performance
          </p>
          <MiniLineChart points={[12, 18, 15, 22, 20, 28, 26, 32]} />
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-3">
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">
            Allocation
          </p>
          <MiniBarChart bars={[65, 45, 55, 35, 70, 50]} />
        </div>
      </div>

      {/* Table snippet */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">
          Top Holdings
        </p>
        <table className="w-full text-xs text-gray-300">
          <thead>
            <tr className="border-b border-white/10 text-gray-500">
              <th className="py-1 text-left font-medium">Asset</th>
              <th className="py-1 text-right font-medium">Weight</th>
              <th className="py-1 text-right font-medium">Return</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Global Equity Fund", weight: "32%", ret: "+16.2%" },
              { name: "US Treasury Bond", weight: "24%", ret: "+4.8%" },
              { name: "Emerging Markets", weight: "18%", ret: "+11.4%" },
            ].map((r) => (
              <tr key={r.name} className="border-b border-white/5">
                <td className="py-1.5">{r.name}</td>
                <td className="py-1.5 text-right">{r.weight}</td>
                <td className="py-1.5 text-right text-teal-400">{r.ret}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================================================================
   SECTION 2 – PROBLEM & OBJECTIVES
   ================================================================ */

function ProblemObjectives() {
  const steps = [
    {
      num: "01",
      title: "Define executive & investor questions",
      icon: <LightBulbIcon className="h-5 w-5" />,
    },
    {
      num: "02",
      title: "Map data structure & priority KPIs",
      icon: <TableCellsIcon className="h-5 w-5" />,
    },
    {
      num: "03",
      title: "Design dashboard layout & interactions",
      icon: <PresentationChartLineIcon className="h-5 w-5" />,
    },
  ];

  return (
    <SectionWrapper
      id="problem"
      className="bg-[#060e1f] py-24 px-6 md:px-12"
    >
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left – problem */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What problem does Vault explore?
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Executives jump between multiple reports, spreadsheets and
                  tools to piece together a performance picture.
                </span>
              </li>
              <li className="flex gap-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Getting a quick, trusted view of portfolio health is
                  surprisingly hard when data lives in silos.
                </span>
              </li>
              <li className="flex gap-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Existing dashboards are cluttered, noisy, and optimised for
                  analysts &mdash; not decision-makers.
                </span>
              </li>
            </ul>
          </div>

          {/* Right – objectives */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Concept objectives
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <CheckCircleIcon className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Deliver a 10-second overview of performance, risk and capital
                  allocation.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Allow drill-down into segments, asset classes and individual
                  holdings.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Calm, high-contrast design that surfaces signal and suppresses
                  noise.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Architected so a real data layer could be connected in future.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3-step strip */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <GlassCard key={s.num} className="p-5 flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-500/10 text-teal-400 shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-teal-400 mb-1">
                  Step {s.num}
                </p>
                <p className="text-sm text-gray-200 font-medium">{s.title}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ================================================================
   SECTION 3 – USER ROLES & SCENARIOS
   ================================================================ */

interface RoleData {
  summary: string;
  questions: string[];
  answer: string;
}

const ROLES: Record<string, RoleData> = {
  Executive: {
    summary:
      "C-suite leaders who need a rapid pulse on organisational and portfolio health without digging through reports.",
    questions: [
      "Are we on track against annual targets?",
      "What's our current risk exposure?",
      "Where should I direct attention this week?",
      "How does performance compare to our benchmark?",
    ],
    answer:
      "Vault presents a KPI banner, trend charts and an alert feed so executives can assess the state of play in under 10 seconds and drill down only where needed.",
  },
  Investor: {
    summary:
      "LPs, board members or angel investors monitoring returns and allocation across multiple vehicles.",
    questions: [
      "What's the portfolio return year-to-date?",
      "How is capital allocated across asset classes?",
      "Are there concentration or liquidity risks?",
      "When is the next distribution or capital call?",
    ],
    answer:
      "Vault surfaces a portfolio-level snapshot with allocation breakdowns, performance vs benchmark, and upcoming events in a single scrollable view.",
  },
  "Portfolio Manager": {
    summary:
      "Investment professionals responsible for day-to-day asset selection, rebalancing and reporting.",
    questions: [
      "Which positions are driving or dragging performance?",
      "Do I need to rebalance any sector or region?",
      "What alerts need my attention today?",
      "How do risk metrics look against our limits?",
    ],
    answer:
      "Vault provides a detailed positions table, attribution breakdown and a risk heatmap so managers can act on outliers immediately.",
  },
};

function UserRoles() {
  const roleKeys = Object.keys(ROLES);
  const [active, setActive] = useState(roleKeys[0]);
  const data = ROLES[active];

  return (
    <SectionWrapper className="bg-[#0a1628] py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
          User roles &amp; scenarios
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
          Vault is designed around the questions each user type actually asks.
        </p>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {roleKeys.map((role) => (
            <button
              key={role}
              onClick={() => setActive(role)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === role
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30"
                  : "border border-white/15 text-gray-300 hover:bg-white/10"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Content */}
        <GlassCard
          hover={false}
          className="p-6 md:p-8 max-w-3xl mx-auto transition-opacity duration-500"
        >
          <p className="text-gray-200 mb-6">{data.summary}</p>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-3">
            Key questions
          </h3>
          <ul className="space-y-2 mb-6">
            {data.questions.map((q, i) => (
              <li key={i} className="flex gap-2 text-gray-300 text-sm">
                <span className="text-teal-500 shrink-0">&#x2022;</span>
                {q}
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-3">
            How Vault answers
          </h3>
          <p className="text-gray-300 text-sm">{data.answer}</p>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}

/* ================================================================
   SECTION 4 – LAYOUT & INFORMATION ARCHITECTURE
   ================================================================ */

const TIERS = [
  {
    label: "Global Filters",
    detail: "Time range · Currency · Portfolio selector",
    icon: <FunnelIcon className="h-5 w-5" />,
    color: "border-cyan-500/40 hover:border-cyan-400 hover:shadow-cyan-400/20",
  },
  {
    label: "Tier 1 – High-level KPIs",
    detail: "Cash runway · AUM · YTD performance · Risk index",
    icon: <ChartBarIcon className="h-5 w-5" />,
    color:
      "border-teal-500/40 hover:border-teal-400 hover:shadow-teal-400/20",
  },
  {
    label: "Tier 2 – Trend Charts",
    detail: "Performance vs benchmark · Inflows & outflows",
    icon: <ArrowTrendingUpIcon className="h-5 w-5" />,
    color:
      "border-emerald-500/40 hover:border-emerald-400 hover:shadow-emerald-400/20",
  },
  {
    label: "Tier 3 – Detailed Views",
    detail: "Positions table · Region & sector breakdown",
    icon: <TableCellsIcon className="h-5 w-5" />,
    color:
      "border-sky-500/40 hover:border-sky-400 hover:shadow-sky-400/20",
  },
  {
    label: "Tier 4 – Alerts & Tasks",
    detail: "Upcoming events · Threshold breaches · Action items",
    icon: <BellAlertIcon className="h-5 w-5" />,
    color:
      "border-amber-500/40 hover:border-amber-400 hover:shadow-amber-400/20",
  },
];

function LayoutIA() {
  return (
    <SectionWrapper className="bg-[#060e1f] py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
          Dashboard layout &amp; information architecture
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Content is layered from glanceable KPIs down to detailed tables, so
          users can stop at the depth they need.
        </p>

        <div className="space-y-4">
          {TIERS.map((tier, i) => (
            <div
              key={tier.label}
              className={`group rounded-xl border bg-white/5 backdrop-blur-sm p-4 flex items-start gap-4 transition-all duration-300 hover:shadow-lg cursor-default ${tier.color}`}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-gray-300 group-hover:text-white shrink-0 transition-colors">
                {tier.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">{tier.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{tier.detail}</p>
              </div>
              <span className="text-[10px] text-gray-600 font-mono mt-1">
                L{i}
              </span>
            </div>
          ))}

          {/* Connector lines */}
          <div className="flex justify-center">
            <div className="h-4 w-px bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ================================================================
   SECTION 5 – PRODUCT EXPERIENCE (Interactive Panels)
   ================================================================ */

function ProductExperience() {
  const [tab, setTab] = useState<"overview" | "drill" | "risk">("overview");

  return (
    <SectionWrapper className="bg-[#0a1628] py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
          Product experience
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
          Three views that cover the full decision-making loop.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {(
              [
                ["overview", "Overview"],
                ["drill", "Portfolio drill-down"],
                ["risk", "Risk & alerts"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  tab === key
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <GlassCard
          hover={false}
          className="p-6 md:p-8 min-h-[340px] transition-opacity duration-500"
        >
          {tab === "overview" && <OverviewPanel />}
          {tab === "drill" && <DrillDownPanel />}
          {tab === "risk" && <RiskPanel />}
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}

function OverviewPanel() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* KPI row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "AUM", value: "$4.2B" },
          { label: "YTD Return", value: "14.6%" },
          { label: "Cash Runway", value: "18 mo" },
          { label: "Risk Index", value: "Low" },
        ].map((k) => (
          <div
            key={k.label}
            className="rounded-xl bg-white/5 border border-white/10 p-4 text-center transition hover:bg-white/10"
          >
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              {k.label}
            </p>
            <p className="text-xl font-bold text-white mt-1">{k.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
          <p className="text-xs text-gray-400 mb-3">
            Performance vs benchmark (12 mo)
          </p>
          <MiniLineChart points={[100, 103, 101, 107, 105, 112, 109, 114, 111, 118, 115, 120]} />
          <div className="flex gap-4 mt-2 text-[10px] text-gray-500">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-teal-500" /> Portfolio
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-gray-500" /> Benchmark
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
          <p className="text-xs text-gray-400 mb-3">Monthly net flows</p>
          <MiniBarChart bars={[40, 55, 30, 60, 45, 70, 35, 65, 50, 75, 55, 80]} />
        </div>
      </div>
    </div>
  );
}

function DrillDownPanel() {
  const [selected, setSelected] = useState(0);
  const holdings = [
    {
      name: "Global Equity Fund",
      weight: "32%",
      ret: "+16.2%",
      sector: "Equities",
      region: "Global",
      risk: "Medium",
    },
    {
      name: "US Treasury Bond",
      weight: "24%",
      ret: "+4.8%",
      sector: "Fixed Income",
      region: "North America",
      risk: "Low",
    },
    {
      name: "Emerging Markets ETF",
      weight: "18%",
      ret: "+11.4%",
      sector: "Equities",
      region: "Emerging",
      risk: "High",
    },
    {
      name: "Real Estate REIT",
      weight: "14%",
      ret: "+7.1%",
      sector: "Real Estate",
      region: "Europe",
      risk: "Medium",
    },
    {
      name: "Commodity Index",
      weight: "12%",
      ret: "+9.3%",
      sector: "Alternatives",
      region: "Global",
      risk: "High",
    },
  ];

  const h = holdings[selected];

  return (
    <div className="grid md:grid-cols-5 gap-6 animate-fadeIn">
      {/* Master table */}
      <div className="md:col-span-3 overflow-x-auto">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="border-b border-white/10 text-gray-500 text-xs uppercase">
              <th className="py-2 text-left font-medium">Holding</th>
              <th className="py-2 text-right font-medium">Weight</th>
              <th className="py-2 text-right font-medium">Return</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((row, i) => (
              <tr
                key={row.name}
                onClick={() => setSelected(i)}
                className={`border-b border-white/5 cursor-pointer transition-colors ${
                  selected === i
                    ? "bg-teal-500/10"
                    : "hover:bg-white/5"
                }`}
              >
                <td className="py-2.5">{row.name}</td>
                <td className="py-2.5 text-right">{row.weight}</td>
                <td className="py-2.5 text-right text-teal-400">
                  {row.ret}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail panel */}
      <div className="md:col-span-2 rounded-xl bg-white/5 border border-white/10 p-4">
        <h4 className="text-sm font-semibold text-white mb-4">{h.name}</h4>
        <dl className="space-y-3 text-sm">
          {[
            ["Sector", h.sector],
            ["Region", h.region],
            ["Weight", h.weight],
            ["YTD Return", h.ret],
            ["Risk Level", h.risk],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <dt className="text-gray-500">{k}</dt>
              <dd className="text-gray-200 font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4">
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">
            12-month trend
          </p>
          <MiniLineChart points={[10, 12, 11, 14, 13, 16, 15, 17]} />
        </div>
      </div>
    </div>
  );
}

function RiskPanel() {
  const alerts = [
    {
      severity: "High",
      text: "Emerging Markets exposure exceeds 15% policy limit",
      color: "text-red-400",
      bg: "bg-red-500/10 border-red-500/30",
    },
    {
      severity: "Medium",
      text: "EUR/USD hedge ratio below target (72% vs 80%)",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30",
    },
    {
      severity: "Low",
      text: "Quarterly rebalance due in 12 days",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/30",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
      {/* Alerts */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-4">Active alerts</h4>
        <div className="space-y-3">
          {alerts.map((a, i) => (
            <div
              key={i}
              className={`rounded-xl border p-4 ${a.bg} transition hover:scale-[1.01]`}
            >
              <span className={`text-xs font-bold uppercase ${a.color}`}>
                {a.severity}
              </span>
              <p className="text-sm text-gray-200 mt-1">{a.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Risk heatmap */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-4">
          Risk heatmap (sector × region)
        </h4>
        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
          <div className="flex gap-1 mb-2 text-[10px] text-gray-500 pl-16">
            {["NA", "EU", "APAC", "EM"].map((r) => (
              <span key={r} className="w-7 text-center">
                {r}
              </span>
            ))}
          </div>
          {[
            { label: "Equities", levels: [1, 1, 2, 3] as (0 | 1 | 2 | 3)[] },
            { label: "Fixed Inc.", levels: [0, 0, 1, 1] as (0 | 1 | 2 | 3)[] },
            { label: "Real Est.", levels: [1, 2, 1, 0] as (0 | 1 | 2 | 3)[] },
            { label: "Alts", levels: [2, 1, 2, 3] as (0 | 1 | 2 | 3)[] },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-1 mb-1">
              <span className="w-16 text-[10px] text-gray-400 text-right pr-2">
                {row.label}
              </span>
              {row.levels.map((l, j) => (
                <HeatCell key={j} level={l} />
              ))}
            </div>
          ))}
          <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-500">
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded bg-green-900/60" /> Low
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded bg-yellow-700/60" /> Med
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded bg-orange-600/60" /> High
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded bg-red-600/70" /> Critical
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   SECTION 6 – DATA STORY & INSIGHTS
   ================================================================ */

function DataStory() {
  return (
    <SectionWrapper className="bg-[#060e1f] py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
          Designing for decision-making, not just charts
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Every element earns its place by answering one of three storytelling
          questions.
        </p>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left – narrative bullets */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Design principles
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              {[
                "Core KPIs are visible within the first viewport — no scrolling required for the headline numbers.",
                "Visual grouping by decision domain (performance, risk, allocation) reduces cognitive load.",
                "Consistent scales and colour semantics across all charts so comparisons are instant.",
                "Low-noise layout: no decorative elements, no competing CTAs — just data and white space.",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – data storytelling boxes */}
          <div className="space-y-4">
            {[
              {
                q: "What's happening?",
                detail: "Headline KPI change — AUM up 3.1% this quarter",
                accent: "border-teal-500/40",
                icon: <ChartBarIcon className="h-5 w-5 text-teal-400" />,
              },
              {
                q: "Why is it happening?",
                detail:
                  "Driver breakdown — Global Equity Fund contributed +2.4pp of the total return",
                accent: "border-cyan-500/40",
                icon: <ArrowTrendingUpIcon className="h-5 w-5 text-cyan-400" />,
              },
              {
                q: "What should we do?",
                detail:
                  "Alert / action item — Rebalance EM exposure back to policy limit",
                accent: "border-amber-500/40",
                icon: (
                  <ExclamationTriangleIcon className="h-5 w-5 text-amber-400" />
                ),
              },
            ].map((box) => (
              <GlassCard
                key={box.q}
                className={`p-5 border ${box.accent}`}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">{box.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{box.q}</p>
                    <p className="text-xs text-gray-400 mt-1">{box.detail}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ================================================================
   SECTION 7 – TECHNOLOGY & FUTURE DIRECTIONS
   ================================================================ */

function TechFuture() {
  const stack = [
    { label: "Next.js", icon: <CpuChipIcon className="h-4 w-4" /> },
    { label: "React", icon: <CpuChipIcon className="h-4 w-4" /> },
    { label: "Tailwind CSS", icon: <CpuChipIcon className="h-4 w-4" /> },
    { label: "Database", icon: <CircleStackIcon className="h-4 w-4" /> },
    { label: "REST / GraphQL", icon: <ServerStackIcon className="h-4 w-4" /> },
    { label: "Auth & RBAC", icon: <LockClosedIcon className="h-4 w-4" /> },
  ];

  return (
    <SectionWrapper className="bg-[#0a1628] py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
          How Vault could be implemented
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
          The concept is designed with a real tech stack in mind.
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {stack.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition hover:border-teal-500/40 hover:text-teal-300"
            >
              {t.icon}
              {t.label}
            </span>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Frontend &amp; data
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-teal-500">&#x2022;</span>
                Next.js App Router with server components for initial data
                fetch and client components for interactive charts.
              </li>
              <li className="flex gap-2">
                <span className="text-teal-500">&#x2022;</span>
                Tailwind CSS for a consistent design-token-driven UI with
                dark-mode-first palette.
              </li>
              <li className="flex gap-2">
                <span className="text-teal-500">&#x2022;</span>
                Data layer via REST or GraphQL API backed by a relational
                database and optional caching layer.
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Security &amp; extensibility
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-teal-500">&#x2022;</span>
                Role-based access control so executives, investors and
                managers see only what they need.
              </li>
              <li className="flex gap-2">
                <span className="text-teal-500">&#x2022;</span>
                API-first architecture allows integration with existing data
                warehouses and reporting tools.
              </li>
              <li className="flex gap-2">
                <span className="text-teal-500">&#x2022;</span>
                Component library structured for white-label reskinning per
                client or fund.
              </li>
            </ul>
          </GlassCard>
        </div>

        {/* Future iterations */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Future iterations
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: <PresentationChartLineIcon className="h-6 w-6" />,
                title: "Scenario analysis",
                desc: "What-if modelling for allocation changes and market shocks.",
              },
              {
                icon: <UserGroupIcon className="h-6 w-6" />,
                title: "Personalised dashboards",
                desc: "Saved views and widget arrangements per user role.",
              },
              {
                icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
                title: "Mobile views",
                desc: "Responsive card-based layout optimised for on-the-go checks.",
              },
            ].map((f) => (
              <GlassCard key={f.title} className="p-5 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/10 text-teal-400">
                  {f.icon}
                </div>
                <p className="text-sm font-semibold text-white">{f.title}</p>
                <p className="text-xs text-gray-400 mt-1">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ================================================================
   SECTION 8 – CALL TO ACTION
   ================================================================ */

function CallToAction() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-[#060e1f] to-[#0b2a3e] py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Explore Vault or talk about executive dashboards
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Vault is a personal exploration into how executives and investors
          could get a calmer, more trustworthy view of performance and risk.
          I&apos;m keen to shape similar dashboards around real organisations
          and their data.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://vercel.com/benjamin-obajes-projects/vault-demo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-400"
          >
            Open Vault prototype
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:obajews@hotmail.com?subject=Vault%20dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
          >
            <EnvelopeIcon className="h-4 w-4" />
            Contact me
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ================================================================
   ROOT EXPORT
   ================================================================ */

export default function VaultCaseStudy() {
  return (
    <>
      <Navbar />

      <Hero />
      <ProblemObjectives />
      <UserRoles />
      <LayoutIA />
      <ProductExperience />
      <DataStory />
      <TechFuture />
      <CallToAction />

      <Footer />

      {/* Global keyframes */}
      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out both;
        }
      `}</style>
    </>
  );
}
