"use client";

import { useState, useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";

const TABS = ["Overview", "Matching Engine", "Workflows"] as const;
type Tab = (typeof TABS)[number];

const TAB_CONTENT: Record<Tab, { heading: string; items: string[] }> = {
  Overview: {
    heading: "Project Pipeline",
    items: [
      "Client brief intake & classification",
      "Automated scoping suggestions",
      "Live status across all active projects",
      "Executive summary dashboard",
    ],
  },
  "Matching Engine": {
    heading: "Team Matching",
    items: [
      "Skills & availability matrix",
      "Risk-weighted scoring model",
      "Commercial-constraint filtering",
      "Top-3 team recommendations",
    ],
  },
  Workflows: {
    heading: "Risk Flags & Approvals",
    items: [
      "Role-based approval chains",
      "Audit trail for every decision",
      "Escalation & exception handling",
      "Post-project review triggers",
    ],
  },
};

export function Milestonehub() {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("fade-in-up");
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const { heading, items } = TAB_CONTENT[activeTab];

  return (
    <section
      ref={sectionRef}
      className="py-28 px-8 opacity-0"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            FEATURED PROJECT
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Milestonehub &ndash; AI Project Orchestration Platform
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column – narrative */}
          <div>
            <Typography className="mb-4 font-normal !text-gray-500">
              Milestonehub is an AI-assisted project orchestration platform that
              matches complex initiatives to the right delivery teams across
              software, construction, and engineering domains.
            </Typography>

            <Typography className="mb-2 font-medium text-gray-800">
              As Functional Analyst, I worked from concept through to detailed
              functional design:
            </Typography>

            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>
                Framed the business problem around fragmented project intake,
                inconsistent scoping, and unclear accountability.
              </li>
              <li>
                Mapped end-to-end workflows from client brief through delivery
                and post-project analysis.
              </li>
              <li>
                Defined functional requirements for an AI-driven matching engine
                that considers skills, availability, risk, and commercial
                constraints.
              </li>
              <li>
                Designed role-based access, approval workflows, and audit trails
                to support governance across clients, partners, and internal
                teams.
              </li>
              <li>
                Partnered with technical leads to translate requirements into
                data models (PostgreSQL), APIs, and integration patterns.
              </li>
            </ul>

            <Typography className="mb-6 font-normal !text-gray-500">
              <span className="font-semibold text-gray-800">Outcome: </span>
              Milestonehub provides a single, traceable view of project
              decisions, reduces time spent on scoping, and creates a foundation
              for data-driven resource planning.
            </Typography>

            <a
              href="https://milestonehub.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              View Milestonehub
            </a>
          </div>

          {/* Right column – interactive preview */}
          <div className="rounded-xl border border-blue-gray-100 bg-white shadow-sm">
            {/* Tab bar */}
            <div className="flex border-b border-blue-gray-100">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-gray-900 text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6">
              <Typography variant="h6" color="blue-gray" className="mb-4">
                {heading}
              </Typography>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Milestonehub;
