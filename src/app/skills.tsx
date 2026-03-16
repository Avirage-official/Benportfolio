"use client";

import { Typography } from "@material-tailwind/react";
import {
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  SparklesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: ClipboardDocumentListIcon,
    title: "Process & Requirements Analysis",
    children:
      "I map messy workflows, interview stakeholders, and translate their needs into clear functional requirements that developers and vendors can build against.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Enterprise Systems & HRIS",
    children:
      "I configure and improve platforms like Kronos/UKG, Dynamics 365, SAP and SharePoint so they actually support day-to-day operations instead of fighting them.",
  },
  {
    icon: SparklesIcon,
    title: "AI & Automation in Operations",
    children:
      "I design where and how to use automation and AI (Power Automate, Python, AI APIs) to remove repetitive work, reduce errors, and support faster decisions.",
  },
  {
    icon: ChartBarIcon,
    title: "Data & Decision Intelligence",
    children:
      "I define metrics and build operational dashboards in tools like Power BI so leaders have a clear, live view of workforce and business performance.",
  },
  {
    icon: ShieldCheckIcon,
    title: "UAT & Change Management",
    children:
      "I plan and facilitate UAT, manage defect triage, and support training so new systems land smoothly and are actually adopted by users.",
  },
  {
    icon: DocumentTextIcon,
    title: "Governance & Documentation",
    children:
      "I write specifications, test cases, and process documentation that keep systems auditable, maintainable, and understandable over time.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          How I improve your systems
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I bridge the gap between business, operations, and technology. Below
          is how I typically add value on complex system and process projects.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
