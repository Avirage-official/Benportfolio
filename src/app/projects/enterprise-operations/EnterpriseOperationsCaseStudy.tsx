"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook (IntersectionObserver)                          */
/* ------------------------------------------------------------------ */
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
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/*  Reusable wrappers                                                 */
/* ------------------------------------------------------------------ */
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
      className={`rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-md ${
        hover
          ? "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  1) HERO                                                           */
/* ------------------------------------------------------------------ */
const SYSTEM_NODES = [
  { label: "HRIS", x: 50, y: 18 },
  { label: "Payroll", x: 15, y: 45 },
  { label: "Scheduling", x: 85, y: 45 },
  { label: "Approvals", x: 25, y: 78 },
  { label: "BI / Reporting", x: 75, y: 78 },
];

function Hero() {
  const { ref, visible } = useSectionObserver(0.05);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 py-24 px-6 md:px-12"
    >
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-teal-100/40 to-transparent" />
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div
        className={`container mx-auto flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left */}
        <div className="flex-1">
          <Link
            href="/#projects"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            &larr; Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
            Enterprise Operations &amp; HRIS Enhancements
          </h1>
          <p className="text-lg md:text-xl font-medium text-teal-700 mb-4">
            Real-world functional analyst work improving HR, payroll,
            scheduling, approvals, and reporting across HRIS and operations
            platforms.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
            A consolidated case study drawn from engagements at the Uniting
            Church in Australia (Kronos/UKG HRIS &amp; scheduling), Maximo
            Limited (operations &amp; workflow automation), DBS Bank (HR
            operations app), and related support roles &mdash; showing how
            workflows and data were improved across HRIS, scheduling, approvals,
            and reporting.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Benjamin_Obaje_Resume-2.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-700 hover:shadow-lg transition-all"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Download resume
            </a>
            <a
              href="mailto:obajews@hotmail.com?subject=Enterprise%20operations%20case%20study"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
            >
              <EnvelopeIcon className="h-4 w-4" />
              Contact me
            </a>
          </div>
        </div>

        {/* Right – system map card */}
        <div
          className={`flex-1 max-w-md w-full transition-all duration-700 delay-200 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <GlassCard className="p-6 bg-white/90 backdrop-blur-xl" hover={false}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              System Map
            </p>
            <div className="relative w-full" style={{ paddingBottom: "70%" }}>
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Animated connection lines */}
                {[
                  [0, 1],
                  [0, 2],
                  [1, 3],
                  [2, 4],
                  [3, 4],
                  [1, 2],
                ].map(([a, b], i) => (
                  <line
                    key={i}
                    x1={SYSTEM_NODES[a].x}
                    y1={SYSTEM_NODES[a].y}
                    x2={SYSTEM_NODES[b].x}
                    y2={SYSTEM_NODES[b].y}
                    stroke="url(#tealGrad)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
                <defs>
                  <linearGradient
                    id="tealGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Nodes */}
                {SYSTEM_NODES.map((node, i) => (
                  <g key={i} filter="url(#glow)">
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="5"
                      fill="white"
                      stroke="#14b8a6"
                      strokeWidth="1"
                    />
                    <text
                      x={node.x}
                      y={node.y + 10}
                      textAnchor="middle"
                      fontSize="3.5"
                      fill="#374151"
                      fontWeight="600"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2) BUSINESS CONTEXT & CHALLENGES                                  */
/* ------------------------------------------------------------------ */
const TIMELINE_STEPS = [
  "Understand current processes & systems",
  "Map pain points & risks",
  "Design new workflows & configurations",
  "Validate via UAT and training",
];

function BusinessContext() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12 bg-gray-50/60">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Context */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Context
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500" />
                <span>
                  Early learning and education network relying on Kronos/UKG for
                  HRIS and scheduling (Uniting Church in Australia).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500" />
                <span>
                  Warehouse / multi-vendor operations with manual processes and
                  Excel workflows (Maximo Limited).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500" />
                <span>
                  HR operations app at a bank with fragmented case handling (DBS
                  Bank).
                </span>
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Challenges
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-red-400" />
                <span>
                  Fragmented processes across HR, payroll, and operations teams.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-red-400" />
                <span>
                  Manual scheduling and data entry driving errors and rework.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-red-400" />
                <span>
                  Limited visibility over labour costs, pipeline status, and
                  workload.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-red-400" />
                <span>
                  Approvals scattered across email and spreadsheets with little
                  audit trail.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-teal-200 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {TIMELINE_STEPS.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-sm shadow-md relative z-10">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-600 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  3) ROLE & APPROACH                                                */
/* ------------------------------------------------------------------ */
const ROLE_CARDS = [
  {
    title: "HRIS & Scheduling \u2013 Uniting Church",
    icon: ClockIcon,
    color: "bg-blue-100 text-blue-700",
    points: [
      "Functional lead for Kronos/UKG HRIS across ~60 early learning centres.",
      "Gathered requirements from HR, payroll, and centre managers.",
      "Designed configurations for scheduling, approvals, and timesheets.",
      "Facilitated UAT and rollout, including training materials.",
    ],
  },
  {
    title: "Operations & Automation \u2013 Maximo",
    icon: CogIcon,
    color: "bg-teal-100 text-teal-700",
    points: [
      "Mapped end-to-end workflows across warehouse, HR, and sales.",
      "Designed Excel VBA / automation tools to reduce manual data entry.",
      "Defined functional specs for SharePoint/ERP integrations.",
      "Ran UAT cycles and iterated with stakeholders.",
    ],
  },
  {
    title: "HR Ops App \u2013 DBS (internship)",
    icon: DocumentTextIcon,
    color: "bg-purple-100 text-purple-700",
    points: [
      "Supported analysis for a custom HR operations application.",
      "Translated operations needs into functional specs.",
      "Supported test planning, defect tracking, and user training.",
    ],
  },
];

function RoleApproach() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          My role across implementations
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {ROLE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <GlassCard key={card.title} className="p-6">
                <div
                  className={`inline-flex items-center justify-center h-10 w-10 rounded-xl ${card.color} mb-4`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-teal-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>

        <p className="text-center text-gray-500 max-w-2xl mx-auto leading-relaxed">
          The common thread across each engagement: using workshops, process
          mapping, and UAT to bridge the gap between business needs and
          technology delivery.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  4) WORKFLOW & PROCESS MAP – INTERACTIVE                           */
/* ------------------------------------------------------------------ */
type WorkflowTab = "request" | "execution" | "approvals";

const TABS: { id: WorkflowTab; label: string }[] = [
  { id: "request", label: "Request & intake" },
  { id: "execution", label: "Execution & scheduling" },
  { id: "approvals", label: "Approvals & audit trail" },
];

const LANES = [
  "Employee / Centre",
  "HR / Payroll",
  "Operations",
  "System (HRIS / tools)",
];

interface SwimStep {
  lane: number;
  text: string;
  tooltip: string;
}

const TAB_STEPS: Record<WorkflowTab, SwimStep[]> = {
  request: [
    {
      lane: 0,
      text: "Submit request",
      tooltip:
        "Employee or manager submits a leave, roster change, or HR case request.",
    },
    {
      lane: 3,
      text: "Validate & route",
      tooltip:
        "System validates required data and routes to the correct queue.",
    },
    {
      lane: 1,
      text: "Structured case view",
      tooltip:
        "HR/Payroll sees a structured case with SLA and priority information.",
    },
    {
      lane: 2,
      text: "Operations triage",
      tooltip:
        "Operations team reviews and prioritises based on SLA and impact.",
    },
  ],
  execution: [
    {
      lane: 3,
      text: "Propose schedule / path",
      tooltip:
        "System proposes schedule or workflow path (e.g. Kronos scheduling, Excel automation).",
    },
    {
      lane: 1,
      text: "HR/Ops review & adjust",
      tooltip: "Operations/HR review proposed schedule and make adjustments.",
    },
    {
      lane: 2,
      text: "Confirm & sync",
      tooltip:
        "Confirmed schedule or workflow syncs to downstream systems.",
    },
    {
      lane: 3,
      text: "Update records",
      tooltip:
        "System updates HRIS, payroll, and scheduling records automatically.",
    },
  ],
  approvals: [
    {
      lane: 3,
      text: "Generate approval tasks",
      tooltip: "Approval tasks generated for relevant approvers.",
    },
    {
      lane: 1,
      text: "Review & decide",
      tooltip:
        "Approvers review and approve or reject with recorded comments.",
    },
    {
      lane: 3,
      text: "Record decisions",
      tooltip:
        "All decisions recorded with timestamp, user, and comments for audit.",
    },
    {
      lane: 2,
      text: "BI dashboard summary",
      tooltip: "Summary view available in BI dashboards for leadership.",
    },
  ],
};

const LANE_COLORS = [
  "bg-blue-50 border-blue-200",
  "bg-teal-50 border-teal-200",
  "bg-amber-50 border-amber-200",
  "bg-purple-50 border-purple-200",
];

const STEP_COLORS = [
  "bg-blue-500",
  "bg-teal-500",
  "bg-amber-500",
  "bg-purple-500",
];

function WorkflowMap() {
  const [activeTab, setActiveTab] = useState<WorkflowTab>("request");
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = TAB_STEPS[activeTab];

  return (
    <SectionWrapper className="py-20 px-6 md:px-12 bg-gray-50/60">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Workflow &amp; process map
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
          A representative pattern across these engagements: request &rarr;
          approval &rarr; execution &rarr; reporting.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setHoveredStep(null);
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Swimlane diagram */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {LANES.map((lane, laneIdx) => {
            const stepsInLane = steps
              .map((s, i) => ({ ...s, globalIdx: i }))
              .filter((s) => s.lane === laneIdx);

            return (
              <div
                key={lane}
                className={`flex items-stretch border-b last:border-b-0 ${LANE_COLORS[laneIdx]} transition-colors duration-300 ${
                  hoveredStep !== null && steps[hoveredStep].lane === laneIdx
                    ? "ring-2 ring-teal-300 ring-inset"
                    : ""
                }`}
              >
                {/* Lane label */}
                <div className="w-36 md:w-44 flex-shrink-0 border-r border-gray-200 p-3 flex items-center">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {lane}
                  </span>
                </div>

                {/* Steps */}
                <div className="flex-1 p-3 flex flex-wrap items-center gap-3 min-h-[56px]">
                  {stepsInLane.map((step) => (
                    <div
                      key={step.globalIdx}
                      className="relative"
                      onMouseEnter={() => setHoveredStep(step.globalIdx)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <div
                        className={`rounded-lg px-3 py-2 text-xs font-medium text-white shadow-sm cursor-default transition-transform duration-200 hover:-translate-y-0.5 ${STEP_COLORS[laneIdx]}`}
                      >
                        {step.text}
                      </div>
                      {/* Tooltip */}
                      {hoveredStep === step.globalIdx && (
                        <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 rounded-lg bg-gray-900 p-3 text-xs text-white shadow-xl">
                          {step.tooltip}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  5) BEFORE / AFTER – IMPACT CARDS                                  */
/* ------------------------------------------------------------------ */
const BEFORE = [
  "Manual timesheets and rosters sent over email.",
  "Approvals tracked in informal channels with no central view.",
  "Reporting pieced together manually in Excel.",
  "High risk of data entry errors and delays.",
];

const AFTER = [
  "Structured HRIS configurations for scheduling and approvals.",
  "Clear workflows for requests and escalations.",
  "Automated or semi-automated data flows into reporting.",
  "More reliable view of labour costs, utilisation, and pipeline.",
];

const IMPACT_STATS = [
  {
    icon: ClockIcon,
    headline: "Reduced manual effort",
    text: "Reduced manual scheduling and approval effort for centre managers.",
  },
  {
    icon: CheckCircleIcon,
    headline: "Improved consistency",
    text: "Improved consistency of application across multiple sites and centres.",
  },
  {
    icon: ShieldCheckIcon,
    headline: "Faster UAT cycles",
    text: "Faster UAT cycles and fewer defects on go-live.",
  },
  {
    icon: ChartBarIcon,
    headline: "Better dashboards",
    text: "Better basis for leadership dashboards (e.g. Power BI).",
  },
];

function BeforeAfter() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          From manual friction to structured workflows
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Before */}
          <GlassCard className="p-6 border-red-100" hover={false}>
            <h3 className="text-lg font-semibold text-red-600 mb-4">Before</h3>
            <ul className="space-y-3">
              {BEFORE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* After */}
          <GlassCard className="p-6 border-green-100" hover={false}>
            <h3 className="text-lg font-semibold text-green-600 mb-4">
              After
            </h3>
            <ul className="space-y-3">
              {AFTER.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Impact stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={stat.headline} className="p-5 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {stat.headline}
                </h4>
                <p className="text-xs text-gray-500">{stat.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  6) TOOLS & PLATFORMS                                              */
/* ------------------------------------------------------------------ */
const TOOL_ROWS = [
  {
    heading: "HRIS & enterprise",
    items: [
      { name: "Kronos / UKG", bg: "bg-blue-100 text-blue-700" },
      { name: "SAP", bg: "bg-indigo-100 text-indigo-700" },
      { name: "Dynamics 365", bg: "bg-purple-100 text-purple-700" },
      { name: "SharePoint", bg: "bg-sky-100 text-sky-700" },
      { name: "CRM / HR ops apps", bg: "bg-cyan-100 text-cyan-700" },
    ],
  },
  {
    heading: "Automation & data",
    items: [
      { name: "Excel automation (VBA)", bg: "bg-green-100 text-green-700" },
      { name: "Power BI", bg: "bg-yellow-100 text-yellow-700" },
      { name: "SQL / PostgreSQL", bg: "bg-orange-100 text-orange-700" },
    ],
  },
  {
    heading: "Practices",
    items: [
      { name: "UAT planning & execution", bg: "bg-rose-100 text-rose-700" },
      { name: "Requirements workshops", bg: "bg-pink-100 text-pink-700" },
      {
        name: "Process mapping (Visio / Miro)",
        bg: "bg-fuchsia-100 text-fuchsia-700",
      },
    ],
  },
];

function ToolsPlatforms() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12 bg-gray-50/60">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          Platforms &amp; tools used
        </h2>

        <div className="space-y-8">
          {TOOL_ROWS.map((row) => (
            <div key={row.heading}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {row.heading}
              </h3>
              <div className="flex flex-wrap gap-3">
                {row.items.map((tool) => (
                  <span
                    key={tool.name}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default ${tool.bg}`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  7) LEARNINGS & SOFT SKILLS                                        */
/* ------------------------------------------------------------------ */
const LEARNINGS = [
  "Facilitating workshops with non-technical stakeholders (centre managers, HR, operations).",
  "Translating messy, real-world constraints into clear functional requirements.",
  "Working iteratively: prototypes, feedback loops, and UAT cycles.",
  "Communicating changes in a calm, structured way through training and documentation.",
];

function Learnings() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          How this shaped my practice
        </h2>

        <p className="text-gray-500 leading-relaxed mb-8 text-center">
          These engagements strengthened my facilitation, stakeholder management,
          and willingness to learn complex systems quickly. They taught me how to
          balance rigour with pragmatism in environments where processes are
          evolving and technology adoption varies.
        </p>

        <ul className="space-y-4 max-w-xl mx-auto">
          {LEARNINGS.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-600 leading-relaxed"
            >
              <span className="mt-2 flex-shrink-0 h-2 w-2 rounded-full bg-teal-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  8) CALL TO ACTION                                                 */
/* ------------------------------------------------------------------ */
function CTA() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12 bg-gray-50/60">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Discuss HRIS &amp; operations improvements
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          If you&rsquo;re exploring HRIS upgrades, workflow automation, or
          better visibility across operations, I&rsquo;m keen to help frame the
          problem and design practical solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/Benjamin_Obaje_Resume-2.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-700 hover:shadow-lg transition-all"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Download resume
          </a>
          <a
            href="mailto:obajews@hotmail.com?subject=Enterprise%20operations%20&%20HRIS"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
          >
            <EnvelopeIcon className="h-4 w-4" />
            Contact me
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page component                                               */
/* ------------------------------------------------------------------ */
export default function EnterpriseOperationsCaseStudy() {
  return (
    <>
      <Navbar />
      <Hero />
      <BusinessContext />
      <RoleApproach />
      <WorkflowMap />
      <BeforeAfter />
      <ToolsPlatforms />
      <Learnings />
      <CTA />
      <Footer />
    </>
  );
}
