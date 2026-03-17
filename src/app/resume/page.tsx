"use client";

import { useEffect, useRef } from "react";
import { Navbar, Footer } from "@/components";
import { Typography } from "@material-tailwind/react";
import {
  SiSap,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { IconType } from "react-icons";
import {
  CogIcon,
  CircleStackIcon,
  BuildingOffice2Icon,
  ClockIcon,
  ChartBarIcon,
  TableCellsIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const EXPERIENCE = [
  {
    role: "Functional Analyst \u2014 HRIS & Enterprise Operations",
    org: "The Uniting Church in Australia Property Trust (Q), Brisbane",
    period: "Nov 2024 \u2013 Present",
    bullets: [
      "Leading HRIS configuration and enterprise system enhancements across Kronos/UKG and Dynamics 365.",
      "Driving process improvements for payroll, scheduling, and operational workflows.",
    ],
  },
  {
    role: "Functional Analyst \u2014 Operations & Workflow Automation",
    org: "Maximo Limited, Auckland",
    period: "Jan 2023 \u2013 Mar 2024",
    bullets: [
      "Automated pipeline-to-warehouse-to-CRM workflows, reducing manual data entry by 40%.",
      "Gathered requirements and delivered functional specs for SharePoint and ERP integrations.",
    ],
  },
  {
    role: "ICT Business Analyst Intern",
    org: "DBS Bank, Singapore",
    period: "",
    bullets: [
      "Conducted UAT and gap analysis for internal HR applications.",
    ],
  },
  {
    role: "Laboratory Technician",
    org: "A*STAR (COVID-19 diagnostics)",
    period: "",
    bullets: [
      "Supported high-throughput diagnostic operations during the pandemic response.",
    ],
  },
  {
    role: "National Service",
    org: "Singapore Armed Forces",
    period: "",
    bullets: [
      "Completed full-time national service with leadership and logistics responsibilities.",
    ],
  },
  {
    role: "Administrative Assistant & Laboratory Support",
    org: "Urah",
    period: "",
    bullets: [
      "Provided admin and lab support for product testing and documentation.",
    ],
  },
];

const SKILLS = {
  Functional: [
    "Requirements gathering",
    "Process mapping",
    "Functional specs",
    "UAT",
    "Change management",
    "Stakeholder engagement",
  ],
  Methods: ["Agile/Scrum", "ITIL", "BPM"],
};

interface ToolItem {
  name: string;
  icon: IconType | React.ComponentType<{ className?: string }>;
}

const enterpriseTools: ToolItem[] = [
  { name: "Microsoft Dynamics", icon: CogIcon },
  { name: "SAP", icon: SiSap },
  { name: "Kronos/UKG", icon: ClockIcon },
  { name: "SharePoint", icon: ShareIcon },
  { name: "CRM Platforms", icon: BuildingOffice2Icon },
];

const dataTools: ToolItem[] = [
  { name: "Power BI", icon: ChartBarIcon },
  { name: "SQL / PostgreSQL", icon: SiPostgresql },
  { name: "Excel automation", icon: TableCellsIcon },
  { name: "Python", icon: SiPython },
  { name: "Automation tools", icon: CircleStackIcon },
];

const ICON_CHIP_CLASS =
  "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-transform transition-shadow cursor-default";

const EDUCATION = [
  "PG Diploma \u2014 Business Admin, Mgmt & Operations (Massey University)",
  "Diploma \u2014 Biomedical / Medical Engineering (Ngee Ann Polytechnic)",
];

const CERTIFICATIONS = [
  "ICT Business Analyst (2023)",
  "Data Analyst Cert (2022)",
  "Cybersecurity Simulation \u2014 CBA (2024)",
  "EMT Specialist (2016)",
];

const LANGUAGES = [
  "English (Native)",
  "Malay (Advanced)",
  "Mandarin (Basic)",
  "Spanish (Basic)",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ResumePage() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sectionsRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.index ?? "0", 10) * 120;
            setTimeout(() => el.classList.add("fade-in-up"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-6 py-20 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Resume
          </Typography>
          <Typography className="font-normal !text-gray-500">
            Benjamin Obaje &mdash; Functional Analyst | AI-Enabled Operations
            &amp; Enterprise Systems
          </Typography>
        </div>

        {/* Two-column wrapper */}
        <div
          ref={sectionsRef}
          className="grid grid-cols-1 gap-12 lg:grid-cols-3"
        >
          {/* ---- Left / Main column ---- */}
          <div className="lg:col-span-2 space-y-10">
            {/* Summary */}
            <div data-section data-index="0" className="opacity-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 font-semibold"
              >
                Summary
              </Typography>
              <Typography className="font-normal !text-gray-500 leading-relaxed">
                Functional Analyst with 3+ years&rsquo; experience bridging
                business needs and technology solutions across HRIS, workflow
                automation, and enterprise operations. Hands&#8209;on with
                platforms such as Microsoft Dynamics, SAP, Kronos/UKG,
                SharePoint, CRM systems, Power BI, SQL/PostgreSQL, and
                Excel&#8209;based automation, while actively learning newer
                AI&#8209;enabled and cloud tools. Known for strong
                communication, facilitation, and stakeholder engagement, with a
                high willingness to learn, adapt quickly, and collaborate to
                turn complex processes into clear, reliable systems.
              </Typography>
            </div>

            {/* Experience */}
            <div data-section data-index="1" className="opacity-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-4 font-semibold"
              >
                Experience
              </Typography>
              <ol className="relative border-l border-gray-200 space-y-6 pl-6">
                {EXPERIENCE.map((exp, i) => (
                  <li key={i}>
                    <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-400" />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {exp.role}
                    </Typography>
                    <Typography className="text-sm !text-gray-500">
                      {exp.org}
                      {exp.period && ` \u00B7 ${exp.period}`}
                    </Typography>
                    <ul className="mt-1 list-disc pl-5 text-sm text-gray-600 space-y-0.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ---- Right / Sidebar column ---- */}
          <div className="space-y-10">
            {/* Key Skills */}
            <div data-section data-index="2" className="opacity-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 font-semibold"
              >
                Key Skills
              </Typography>

              {/* Functional & Methods — plain chips */}
              {Object.entries(SKILLS).map(([group, items]) => (
                <div key={group} className="mb-4">
                  <Typography className="text-sm font-semibold text-gray-700 mb-1">
                    {group}
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Enterprise — icon cards */}
              <div className="mb-4">
                <Typography className="text-sm font-semibold text-gray-700 mb-1">
                  Enterprise
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {enterpriseTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <span
                        key={tool.name}
                        className={ICON_CHIP_CLASS}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {tool.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Data & AI — icon cards */}
              <div className="mb-4">
                <Typography className="text-sm font-semibold text-gray-700 mb-1">
                  Data &amp; AI
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {dataTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <span
                        key={tool.name}
                        className={ICON_CHIP_CLASS}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {tool.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Education */}
            <div data-section data-index="3" className="opacity-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 font-semibold"
              >
                Education
              </Typography>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {EDUCATION.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div data-section data-index="4" className="opacity-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 font-semibold"
              >
                Certifications
              </Typography>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {CERTIFICATIONS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div data-section data-index="5" className="opacity-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 font-semibold"
              >
                Languages
              </Typography>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
