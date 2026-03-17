"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "PG Diploma \u2013 Business Admin, Mgmt & Operations",
  },
  {
    icon: PuzzlePieceIcon,
    children: "ICT Business Analyst Certification",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Data Analyst Certification",
  },
];

export function Resume() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("fade-in-up");
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-8 py-24">
      <div
        ref={sectionRef}
        className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 opacity-0"
      >
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Snapshot of my experience as a Functional Analyst across HRIS,
            workflow automation, and AI-enabled operations.
          </Typography>
          <Link
            href="/resume"
            className="inline-block rounded-full px-5 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            View full resume
          </Link>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
