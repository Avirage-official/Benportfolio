"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import {
  ArrowTopRightOnSquareIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook                                        */
/* ------------------------------------------------------------------ */
function useSectionObserver() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ------------------------------------------------------------------ */
/*  Reusable tiny components                                          */
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
  const ref = useSectionObserver();
  return (
    <div ref={ref} id={id} className={`mh-section ${className}`}>
      {children}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl backdrop-blur-sm bg-white/70 border border-white/20 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

function StatusPill({
  label,
  color,
}: {
  label: string;
  color: "blue" | "green" | "amber" | "gray";
}) {
  const map: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    gray: "bg-gray-200 text-gray-600",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${map[color]}`}
    >
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Swimlane Workflow Diagram                                         */
/* ------------------------------------------------------------------ */
interface WorkflowStep {
  lane: string;
  title: string;
  description: string;
}

const LANES = ["Client", "Milestonehub", "Delivery team", "Leadership"];

const CURRENT_STATE_STEPS: WorkflowStep[] = [
  {
    lane: "Client",
    title: "Email project brief",
    description: "Send project brief to account manager via email",
  },
  {
    lane: "Milestonehub",
    title: "Forward to internal teams",
    description: "Relay brief via email/spreadsheet to relevant teams",
  },
  {
    lane: "Delivery team",
    title: "Manual capacity check",
    description: "Manually assess team capacity and skills availability",
  },
  {
    lane: "Leadership",
    title: "Ad-hoc email approval",
    description: "Approve via scattered email chains with no audit trail",
  },
  {
    lane: "Delivery team",
    title: "Begin with incomplete scope",
    description: "Start work with incomplete scope documentation",
  },
];

const FUTURE_STATE_STEPS: WorkflowStep[] = [
  {
    lane: "Client",
    title: "Submit initiative brief",
    description: "Structured intake form captures all required details",
  },
  {
    lane: "Milestonehub",
    title: "Classify &amp; estimate",
    description: "AI classifies initiative type and estimates complexity",
  },
  {
    lane: "Milestonehub",
    title: "AI team matching",
    description: "Matching engine proposes optimal delivery teams",
  },
  {
    lane: "Delivery team",
    title: "Review &amp; confirm",
    description: "Review scope and confirm feasibility before commitment",
  },
  {
    lane: "Leadership",
    title: "Approve scope &amp; budget",
    description: "Approve scope, budget, and timelines in one place",
  },
  {
    lane: "Milestonehub",
    title: "Generate orchestration plan",
    description: "Auto-generate plan and hand off tasks to delivery team",
  },
];

const GOVERNANCE_STEPS: WorkflowStep[] = [
  {
    lane: "Leadership",
    title: "Define approval rules",
    description: "Set approval thresholds and governance policies",
  },
  {
    lane: "Milestonehub",
    title: "Enforce RBAC &amp; chains",
    description: "Enforce role-based access and approval chains",
  },
  {
    lane: "Client",
    title: "Full audit trail",
    description: "All stakeholders see decisions and change history",
  },
  {
    lane: "Milestonehub",
    title: "Automated escalation",
    description: "Escalate overdue or at-risk items automatically",
  },
  {
    lane: "Leadership",
    title: "Post-project review",
    description: "Conduct reviews and capture lessons learned",
  },
];

function SwimlaneDiagram({ steps }: { steps: WorkflowStep[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px]">
        {/* Lane headers */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {LANES.map((lane) => (
            <div
              key={lane}
              className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center py-1 border-b border-gray-200"
            >
              {lane}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const colIdx = LANES.indexOf(step.lane);
            const isHovered = hoveredIdx === idx;
            const isNeighbor =
              hoveredIdx !== null &&
              (idx === hoveredIdx - 1 || idx === hoveredIdx + 1);

            return (
              <div key={idx} className="grid grid-cols-4 gap-2">
                {LANES.map((_, laneIdx) => (
                  <div key={laneIdx} className="flex items-center justify-center min-h-[56px]">
                    {laneIdx === colIdx ? (
                      <div
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        className={`w-full rounded-xl px-3 py-2 border text-center transition-all duration-200 cursor-default ${
                          isHovered
                            ? "bg-indigo-50 border-indigo-300 shadow-md -translate-y-0.5"
                            : isNeighbor
                              ? "bg-indigo-50/40 border-indigo-200"
                              : "bg-white border-gray-200 hover:border-indigo-200"
                        }`}
                      >
                        <p className="text-sm font-semibold text-gray-800">
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {step.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ))}
                {/* Arrow between steps */}
                {idx < steps.length - 1 && (
                  <div className="col-span-4 flex justify-center -my-1">
                    <svg width="20" height="16" viewBox="0 0 20 16" className="text-indigo-300" aria-hidden="true">
                      <path d="M10 0 L10 12 M5 8 L10 14 L15 8" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Case Study Component                                         */
/* ------------------------------------------------------------------ */
export default function MilestonehubCaseStudy() {
  const [workflowTab, setWorkflowTab] = useState<
    "current" | "future" | "governance"
  >("current");
  const [productTab, setProductTab] = useState<
    "overview" | "matching" | "portfolio"
  >("overview");

  const workflowSteps =
    workflowTab === "current"
      ? CURRENT_STATE_STEPS
      : workflowTab === "future"
        ? FUTURE_STATE_STEPS
        : GOVERNANCE_STEPS;

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden mh-gradient-bg">
        <div className="container mx-auto px-6 sm:px-8 pt-28 pb-20">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            &larr; Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Milestonehub&nbsp;&ndash; AI&nbsp;Project Orchestration Platform
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                A SaaS platform that replaces fragmented intake, scoping, and
                delivery workflows with AI-driven orchestration&nbsp;&ndash;
                matching initiatives to the right teams and enforcing governance
                at every stage.
              </p>

              <ul className="space-y-2 mb-8 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                  AI-powered team matching based on skills &amp; capacity
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                  End-to-end scoping, approval, and delivery tracking
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                  Full audit trail &amp; role-based governance
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://milestonehub.co"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
                >
                  View Milestonehub
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
                <a
                  href="#outcomes"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  Download case study (PDF)
                  <ArrowDownTrayIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right – mock dashboard */}
            <div className="flex justify-center lg:justify-end">
              <GlassCard className="p-6 w-full max-w-md mh-float">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Active Initiatives
                </h3>

                <ul className="space-y-3 mb-6">
                  {[
                    { name: "Project Atlas", status: "In-flight", pct: 72 },
                    { name: "Omega Build", status: "At risk", pct: 41 },
                    { name: "Nova Rebrand", status: "Scoping", pct: 15 },
                  ].map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-gray-800">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 rounded-full bg-gray-200 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              item.status === "At risk"
                                ? "bg-amber-400"
                                : item.status === "Scoping"
                                  ? "bg-blue-400"
                                  : "bg-green-500"
                            }`}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 w-8 text-right">
                          {item.pct}%
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Mini bar chart placeholder */}
                <div className="flex items-end gap-1.5 h-16 mb-4">
                  {[40, 65, 50, 80, 55, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-indigo-400/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Health indicators */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                    Healthy (4)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
                    Watch (1)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
                    Critical (0)
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM & CONTEXT ===== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <SectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Business problem */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Business problem
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Fragmented intake process across email, spreadsheets, and ad-hoc conversations",
                    "Inconsistent scoping leading to unclear deliverables and scope creep",
                    "No visibility into team capacity, creating bottlenecks and resource conflicts",
                    "Approval decisions buried in email chains with no audit trail",
                    "Leadership lacked data for portfolio-level forecasting",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ExclamationTriangleIcon className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Role as Functional Analyst
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Led discovery workshops to map current-state pain points across departments",
                    "Defined future-state workflows, functional specs, and acceptance criteria",
                    "Designed the AI-matching logic and governance approval chains",
                    "Authored the data model and integration requirements for Dynamics 365 and SAP",
                    "Facilitated UAT and validated outcomes against business KPIs",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                Project Timeline
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: "01",
                    title: "Discovery & problem framing",
                    desc: "Stakeholder interviews, pain-point mapping, and opportunity sizing",
                  },
                  {
                    step: "02",
                    title: "Current-state workflow analysis",
                    desc: "Document existing processes, bottlenecks, and handoff gaps",
                  },
                  {
                    step: "03",
                    title: "Future-state design & functional specs",
                    desc: "Define target workflows, AI-matching rules, and governance model",
                  },
                  {
                    step: "04",
                    title: "Delivery & validation",
                    desc: "Build, UAT, KPI tracking, and iterative refinement",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-200 hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span className="inline-block text-xs font-bold text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5 mb-2">
                      {item.step}
                    </span>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== FUNCTIONAL ANALYSIS & WORKFLOWS ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <SectionWrapper>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Functional Analysis &amp; Workflows
            </h2>
            <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
              Interactive swimlane diagrams showing how the platform transforms
              fragmented processes into structured, AI-assisted workflows.
            </p>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-8">
              {(
                [
                  ["current", "Current state"],
                  ["future", "Future state"],
                  ["governance", "Governance"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setWorkflowTab(key)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    workflowTab === key
                      ? "bg-indigo-600 text-white shadow"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <GlassCard className="p-6 transition-opacity duration-300">
              <SwimlaneDiagram steps={workflowSteps} />
            </GlassCard>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== PRODUCT EXPERIENCE ===== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <SectionWrapper>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Product Experience
            </h2>
            <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
              A preview of the platform&rsquo;s key screens and capabilities.
            </p>

            {/* Sub-tabs */}
            <div className="flex justify-center gap-2 mb-8">
              {(
                [
                  ["overview", "Overview"],
                  ["matching", "Matching Engine"],
                  ["portfolio", "Portfolio View"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setProductTab(key)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    productTab === key
                      ? "bg-indigo-600 text-white shadow"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* App window */}
            <GlassCard className="max-w-4xl mx-auto overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  milestonehub.co/dashboard
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {/* --- Overview Tab --- */}
                {productTab === "overview" && (
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {[
                        { value: "42", label: "Initiatives in pipeline" },
                        { value: "3.2 days", label: "Avg time to scope" },
                        { value: "94%", label: "On-time delivery" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl bg-indigo-50 p-4 text-center"
                        >
                          <p className="text-2xl font-bold text-indigo-700">
                            {s.value}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      Today&rsquo;s Actions
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Review 3 new initiative briefs",
                        "Approve budget for Project Atlas",
                        "Check risk flag on Omega Build",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:border-indigo-200 transition-colors"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">
                            {i + 1}
                          </span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* --- Matching Engine Tab --- */}
                {productTab === "matching" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Initiative summary */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">
                        Initiative Summary
                      </h3>
                      <div className="rounded-xl border border-gray-200 p-4 space-y-2 text-sm">
                        {[
                          ["Industry", "Financial Services"],
                          ["Budget", "$850K"],
                          ["Risk", "Medium"],
                          ["Constraints", "Must start Q2"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="text-gray-500">{k}</span>
                            <span className="font-medium text-gray-800">
                              {v}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team suggestions */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">
                        Suggested Teams
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            team: "Alpha Squad",
                            skills: ["React", "Node.js", "AWS"],
                            util: 68,
                            fit: 94,
                          },
                          {
                            team: "Delta Unit",
                            skills: ["Python", "ML", "Azure"],
                            util: 72,
                            fit: 87,
                          },
                          {
                            team: "Sigma Cell",
                            skills: [".NET", "SQL", "DevOps"],
                            util: 81,
                            fit: 76,
                          },
                        ].map((t) => (
                          <div
                            key={t.team}
                            className="rounded-xl border border-gray-200 p-4 hover:border-indigo-200 transition-all hover:-translate-y-0.5 hover:shadow-md"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-gray-800">
                                {t.team}
                              </span>
                              <span className="text-xs font-bold text-indigo-600">
                                {t.fit}% fit
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {t.skills.map((s) => (
                                <span
                                  key={s}
                                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-indigo-400"
                                  style={{ width: `${t.util}%` }}
                                />
                              </div>
                              <span className="text-xs text-gray-500">
                                {t.util}% utilisation
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* --- Portfolio View Tab --- */}
                {productTab === "portfolio" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Project Atlas",
                        status: "In-flight",
                        color: "green" as const,
                        lead: "Sarah K.",
                        budget: "$1.2M",
                      },
                      {
                        name: "Omega Build",
                        status: "At risk",
                        color: "amber" as const,
                        lead: "James R.",
                        budget: "$680K",
                      },
                      {
                        name: "Nova Rebrand",
                        status: "Scoping",
                        color: "blue" as const,
                        lead: "Priya M.",
                        budget: "$320K",
                      },
                      {
                        name: "Zenith Migration",
                        status: "Completed",
                        color: "gray" as const,
                        lead: "Tom B.",
                        budget: "$550K",
                      },
                      {
                        name: "Pulse Analytics",
                        status: "In-flight",
                        color: "green" as const,
                        lead: "Lisa W.",
                        budget: "$410K",
                      },
                      {
                        name: "Apex Onboarding",
                        status: "Scoping",
                        color: "blue" as const,
                        lead: "Dev P.",
                        budget: "$290K",
                      },
                    ].map((p) => (
                      <div
                        key={p.name}
                        className="rounded-xl border border-gray-200 p-4 hover:border-indigo-200 transition-all hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-800">
                            {p.name}
                          </span>
                          <StatusPill label={p.status} color={p.color} />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Lead: {p.lead}</span>
                          <span>{p.budget}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </GlassCard>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== OUTCOMES & IMPACT ===== */}
      <section id="outcomes" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <SectionWrapper>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Outcomes
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Stat cards – 2x2 */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: ClockIcon,
                    stat: "~40% faster",
                    desc: "Reduced time spent on initial scoping and matching",
                  },
                  {
                    icon: ShieldCheckIcon,
                    stat: "Full traceability",
                    desc: "Increased transparency of approvals and decision history",
                  },
                  {
                    icon: UserGroupIcon,
                    stat: "Optimal alignment",
                    desc: "Better alignment between initiative complexity and delivery team capacity",
                  },
                  {
                    icon: ChartBarIcon,
                    stat: "Data-driven insights",
                    desc: "Created a structured dataset for forecasting and portfolio insights",
                  },
                ].map((card) => (
                  <GlassCard
                    key={card.stat}
                    className="p-5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                  >
                    <card.icon className="h-8 w-8 text-indigo-500 mb-3" />
                    <p className="text-lg font-bold text-gray-900 mb-1">
                      {card.stat}
                    </p>
                    <p className="text-sm text-gray-500">{card.desc}</p>
                  </GlassCard>
                ))}
              </div>

              {/* Narrative */}
              <div className="lg:col-span-2 flex items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Impact Narrative
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Milestonehub transformed a manual, error-prone intake and
                    delivery process into a structured, AI-assisted workflow.
                    Stakeholders gained real-time visibility into initiative
                    progress, while leadership could make data-informed
                    decisions about resource allocation and portfolio
                    prioritisation. The platform established a single source of
                    truth for project governance&nbsp;&ndash; reducing
                    miscommunication, accelerating time-to-value, and creating a
                    foundation for predictive analytics.
                  </p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== TECH & PLATFORMS ===== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <SectionWrapper>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Tech stack &amp; ecosystem
            </h2>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                {["Next.js", "React", "Tailwind CSS", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Stripe Connect",
                  "Power BI",
                  "Dynamics 365",
                  "SAP (conceptual)",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mh-gradient-bg py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <SectionWrapper className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Milestonehub or discuss similar work
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you&rsquo;re looking at AI-assisted project orchestration,
              workflow automation, or portfolio governance&nbsp;&ndash; I&rsquo;d
              love to chat about how I can help.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://milestonehub.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
              >
                View Milestonehub
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:obajews@hotmail.com?subject=Milestonehub%20case%20study"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                Contact me
                <EnvelopeIcon className="h-4 w-4" />
              </a>
            </div>
          </SectionWrapper>
        </div>
      </section>

      <Footer />
    </>
  );
}
