"use client";

import { useEffect, useRef } from "react";
import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Milestonehub \u2013 AI Project Orchestration Platform",
    desc: "Concept and architecture for an AI-assisted project orchestration platform that matches projects to the right teams based on skills and availability, guides scoping and delivery, and manages approval workflows end-to-end.",
    href: "/projects/milestonehub",
  },
  {
    img: "/image/blog2.svg",
    title: "Clubhouse \u2013 People & Culture Intranet",
    desc: "Intranet concept for companies that brings together clock-in/out, wellbeing tracking, internal links, and social features so HR and leaders can monitor engagement while employees plan lunches, share praise, and coordinate schedules.",
    href: "/projects/clubhouse",
  },
  {
    img: "/image/blog3.svg",
    title: "Vault \u2013 Executive & Investor Control Panel",
    desc: "Design for a central hub where CEOs and investors see a unified view of company performance, key decisions, portfolio investments, and curated external news, instead of jumping between disconnected tools.",
    href: "/projects/vault",
  },
  {
    img: "/image/blog4.svg",
    title: "Enterprise Operations & HRIS Enhancements",
    desc: "Real-world functional analyst work improving HRIS, payroll, scheduling, and operations: Kronos/UKG and Dynamics for the Uniting Church, pipeline\u2013warehouse\u2013CRM automation for Maximo, and HR apps analysis/UAT at DBS.",
    href: "/projects/enterprise-ops",
  },
];

export function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-project-card]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.index ?? "0", 10) * 100;
            setTimeout(() => {
              el.classList.add("fade-in-up");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          From AI-driven platforms to enterprise operations improvements,
          here are some of the projects I&apos;ve conceptualised, designed, or
          delivered as a Functional Analyst.
        </Typography>
      </div>
      <div
        ref={gridRef}
        className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4"
      >
        {PROJECTS.map((props, idx) => (
          <div
            key={idx}
            data-project-card
            data-index={idx}
            className="opacity-0"
          >
            <ProjectCard {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
