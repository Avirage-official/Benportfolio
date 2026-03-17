"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import {
  HomeIcon,
  UserGroupIcon,
  HeartIcon,
  CalendarIcon,
  SparklesIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  LightBulbIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook (IntersectionObserver)                         */
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
function Hero() {
  const { ref, visible } = useSectionObserver(0.05);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-24 px-6 md:px-12"
    >
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-200/20 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div
        className={`container mx-auto flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left */}
        <div className="flex-1 text-white">
          <Link
            href="/#projects"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            &larr; Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Clubhouse &ndash; People &amp; Culture Intranet
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 mb-4">
            An internal hub for engagement, wellbeing, and culture rituals
            across distributed teams.
          </p>
          <p className="text-white/80 leading-relaxed mb-8 max-w-xl">
            A personal concept project exploring how a modern intranet can bring
            together announcements, wellbeing check-ins, shout-outs, and social
            events into one place &mdash; built for People &amp; Culture teams
            who want a single, engaging space to nurture company culture.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://milestone-clubhouse-pro.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-700 shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
            >
              Open Clubhouse prototype
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              View project overview
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right – intranet preview card */}
        <div
          className={`flex-1 max-w-md w-full transition-all duration-700 delay-200 ${
            visible
              ? "opacity-100 translate-y-0 rotate-0 scale-100"
              : "opacity-0 translate-y-4 rotate-2 scale-95"
          }`}
        >
          <GlassCard className="p-0 overflow-hidden bg-white/90 backdrop-blur-xl">
            {/* Mini sidebar + content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-16 bg-purple-700/90 flex flex-col items-center gap-4 py-4 text-white/80">
                <HomeIcon className="h-5 w-5 text-white" />
                <UserGroupIcon className="h-5 w-5" />
                <SparklesIcon className="h-5 w-5" />
                <CalendarIcon className="h-5 w-5" />
                <HeartIcon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="flex-1 p-4 space-y-3">
                <div className="rounded-lg bg-gradient-to-r from-purple-100 to-pink-50 p-3">
                  <p className="text-xs font-semibold text-purple-800">
                    Good morning, Alex 👋
                  </p>
                  <p className="text-[10px] text-gray-600 mt-1">
                    How are you feeling today?
                  </p>
                  <div className="flex gap-1 mt-2">
                    {["😊", "😐", "😔"].map((e) => (
                      <span
                        key={e}
                        className="text-sm cursor-pointer hover:scale-125 transition-transform"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini feed */}
                <div className="space-y-2">
                  {[
                    {
                      title: "🎉 Kudos to Sarah!",
                      text: "Great job leading the onboarding workshop",
                    },
                    {
                      title: "📢 Town Hall Friday",
                      text: "Join us at 2 PM for the Q3 update",
                    },
                    {
                      title: "🧘 Wellness Wednesday",
                      text: "Yoga session at 12 PM in the lounge",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg bg-gray-50 p-2"
                    >
                      <p className="text-[11px] font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-gray-500">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2) PROBLEM & GOALS                                                */
/* ------------------------------------------------------------------ */
function ProblemGoals() {
  const steps = [
    {
      icon: LightBulbIcon,
      label: "Discover pain points",
      desc: "Employee interviews, observing existing intranet usage",
    },
    {
      icon: PaintBrushIcon,
      label: "Sketch journeys & wireframes",
      desc: "Low-fidelity wireframes and user journey maps",
    },
    {
      icon: WrenchScrewdriverIcon,
      label: "Build a prototype",
      desc: "Modern UI patterns and micro-interactions",
    },
  ];

  return (
    <SectionWrapper id="overview" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why build a People &amp; Culture intranet?
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                Many intranets feel like static filing cabinets &mdash;
                employees don&rsquo;t feel drawn to use them.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                Culture and engagement updates live across email, chats, PDFs,
                and town hall slides.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
                People &amp; Culture teams need a single, engaging space to run
                campaigns, celebrate wins, and track engagement.
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Concept goals
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 flex-shrink-0 h-5 w-5 text-green-500" />
                Make it easy for employees to see what matters today: key
                updates, events, and wellbeing prompts.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 flex-shrink-0 h-5 w-5 text-green-500" />
                Give People &amp; Culture teams self-service tools to publish
                content and rituals without waiting on IT.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 flex-shrink-0 h-5 w-5 text-green-500" />
                Provide light analytics on participation and engagement over
                time.
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline strip */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <GlassCard key={i} className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold text-purple-600 mb-1">
                Step {i + 1}
              </p>
              <p className="font-semibold text-gray-900 mb-1">{s.label}</p>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  3) PERSONAS                                                       */
/* ------------------------------------------------------------------ */
const PERSONAS = [
  {
    icon: BuildingOffice2Icon,
    name: "People & Culture Manager",
    desc: "Drives engagement strategy, launches culture campaigns, and monitors wellbeing metrics across the organisation.",
    needs: [
      "Publish and schedule culture campaigns without IT support",
      "See real-time engagement and participation dashboards",
      "Run wellbeing surveys and check-ins",
    ],
    features: [
      "Campaign tiles for culture initiatives",
      "Analytics dashboard with participation metrics",
      "Wellbeing check-in builder",
    ],
  },
  {
    icon: BriefcaseIcon,
    name: "Team Lead",
    desc: "Manages a distributed team, needs visibility on team sentiment and quick access to HR resources and announcements.",
    needs: [
      "Quickly find HR policies and team resources",
      "See team sentiment and wellbeing trends",
      "Recognise team members publicly",
    ],
    features: [
      "Centralised links to HR resources",
      "Team wellbeing pulse view",
      "Kudos / recognition feed",
    ],
  },
  {
    icon: UserIcon,
    name: "Individual Contributor",
    desc: "Wants to stay connected with company culture, see upcoming events, and feel part of the community even when remote.",
    needs: [
      "Discover events, news, and social happenings",
      "Give and receive recognition from peers",
      "Check in on personal wellbeing",
    ],
    features: [
      "Personalised home feed with highlights",
      "Shout-out and reaction system",
      "Wellbeing check-ins and resources",
    ],
  },
];

function Personas() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SectionWrapper className="py-20 px-6 md:px-12 bg-gray-50/60">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Personas &amp; Journeys
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Understanding who uses the intranet and what they need is key to
          designing an engaging experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {PERSONAS.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <GlassCard
                key={i}
                hover={!isOpen}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  isOpen ? "ring-2 ring-purple-400 shadow-lg" : ""
                }`}
              >
                <div
                  onClick={() => setExpanded(isOpen ? null : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpanded(isOpen ? null : i);
                    }
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900">{p.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{p.desc}</p>
                  <p className="text-xs font-medium text-purple-600">
                    {isOpen ? "Click to collapse" : "Click to expand details"}
                  </p>
                </div>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4 space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                        Top needs
                      </p>
                      <ul className="space-y-1">
                        {p.needs.map((n, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                        Clubhouse features
                      </p>
                      <ul className="space-y-1">
                        {p.features.map((f, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <CheckCircleIcon className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  4) IA & WORKFLOWS – Tabbed                                        */
/* ------------------------------------------------------------------ */
const IA_TABS = [
  "Information architecture",
  "Content workflows",
  "Engagement loops",
] as const;

function IATree() {
  const tree = [
    {
      label: "Home",
      icon: HomeIcon,
      children: [
        "Today\u2019s highlights",
        "Announcements",
        "Culture campaigns",
        "Quick links",
      ],
    },
    {
      label: "People",
      icon: UserGroupIcon,
      children: ["Org structure", "Profiles", "New starters"],
    },
    {
      label: "Culture",
      icon: SparklesIcon,
      children: ["Values in action", "Storytelling posts"],
    },
    {
      label: "Events",
      icon: CalendarIcon,
      children: ["Upcoming events", "RSVP / recordings"],
    },
    {
      label: "Wellbeing",
      icon: HeartIcon,
      children: ["Check-ins", "Resources"],
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {tree.map((node) => (
        <GlassCard key={node.label} className="p-4 group">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <node.icon className="h-4 w-4" />
            </div>
            <p className="font-semibold text-gray-900 text-sm">{node.label}</p>
          </div>
          <ul className="space-y-1">
            {node.children.map((c) => (
              <li
                key={c}
                className="text-xs text-gray-500 pl-2 border-l-2 border-purple-200 group-hover:border-purple-400 transition-colors"
              >
                {c}
              </li>
            ))}
          </ul>
        </GlassCard>
      ))}
    </div>
  );
}

function ContentWorkflow() {
  const steps = [
    {
      icon: ClipboardDocumentCheckIcon,
      label: "P&C manager drafts campaign",
    },
    { icon: UserGroupIcon, label: "Optional review by HR lead" },
    {
      icon: MegaphoneIcon,
      label: "Content goes live to targeted audiences",
    },
    {
      icon: ChartBarIcon,
      label: "Engagement metrics collected in dashboard",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <GlassCard className="flex-1 p-5 flex flex-col items-center text-center group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors mb-3">
              <s.icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-gray-800">{s.label}</p>
          </GlassCard>
          {i < steps.length - 1 && (
            <div className="hidden md:flex items-center text-purple-300">
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function EngagementLoops() {
  const items = [
    {
      icon: ChatBubbleLeftRightIcon,
      label: "Shout-outs & reactions",
      desc: "Employees give kudos, comment, and react to posts",
    },
    {
      icon: ClipboardDocumentCheckIcon,
      label: "Surveys & check-ins",
      desc: "Pulse surveys and wellbeing check-ins capture sentiment",
    },
    {
      icon: ChartBarIcon,
      label: "Dashboards",
      desc: "Engagement data feeds into real-time dashboards for P&C leads",
    },
    {
      icon: SparklesIcon,
      label: "Iterate campaigns",
      desc: "Insights inform future culture campaigns and initiatives",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <GlassCard key={i} className="p-5 flex gap-4 group">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <item.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm mb-1">
              {item.label}
            </p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

function IAWorkflows() {
  const [tab, setTab] = useState(0);

  return (
    <SectionWrapper className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          How the intranet works
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
          Analyst-style breakdown of the information architecture, content
          workflows, and engagement loops.
        </p>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {IA_TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                tab === i
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab content with animation */}
        <div className="transition-opacity duration-300">
          {tab === 0 && <IATree />}
          {tab === 1 && <ContentWorkflow />}
          {tab === 2 && <EngagementLoops />}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  5) PRODUCT EXPERIENCE – Carousel                                  */
/* ------------------------------------------------------------------ */
const SCREENS = [
  {
    title: "Home",
    caption: "Highlights, announcements, shout-outs, and wellbeing widget",
    color: "from-purple-500 to-pink-400",
    items: [
      "📢 Company-wide announcements",
      "🎉 Recent shout-outs feed",
      "🧘 Daily wellbeing check-in",
      "📅 Upcoming events preview",
    ],
  },
  {
    title: "People",
    caption: "Team directory with profile cards and filters",
    color: "from-blue-500 to-cyan-400",
    items: [
      "🔍 Search by name, team, or role",
      "👤 Profile cards with skills and contact",
      "🆕 New starters spotlight",
      "🏢 Org chart navigation",
    ],
  },
  {
    title: "Culture",
    caption: 'Campaign tiles like "Values in action" and "Diversity week"',
    color: "from-orange-400 to-rose-400",
    items: [
      "🌟 Values in action stories",
      "🌍 Diversity & inclusion week",
      "💬 Employee storytelling posts",
      "🏆 Recognition wall of fame",
    ],
  },
  {
    title: "Events",
    caption: "Calendar of events with RSVP buttons",
    color: "from-green-500 to-teal-400",
    items: [
      "📆 Monthly event calendar",
      "✋ One-click RSVP",
      "🎥 Recorded sessions library",
      "🍕 Social & team-building events",
    ],
  },
];

function ScreenCarousel() {
  const [active, setActive] = useState(0);
  const total = SCREENS.length;

  const next = useCallback(
    () => setActive((p) => (p + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setActive((p) => (p - 1 + total) % total),
    [total]
  );

  return (
    <SectionWrapper className="py-20 px-6 md:px-12 bg-gray-50/60">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Product experience
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Explore the key screens of the Clubhouse intranet prototype.
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-10 z-10 rounded-full bg-white shadow-md p-2 hover:bg-gray-50 transition-all"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-10 z-10 rounded-full bg-white shadow-md p-2 hover:bg-gray-50 transition-all"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>

          {/* Card */}
          <div
            className={`rounded-2xl bg-gradient-to-br ${SCREENS[active].color} p-8 md:p-12 text-white shadow-lg transition-all duration-500`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
              Screen {active + 1} of {total}
            </p>
            <h3 className="text-2xl font-bold mb-2">
              {SCREENS[active].title}
            </h3>
            <p className="text-white/80 mb-6">{SCREENS[active].caption}</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {SCREENS[active].items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/20 backdrop-blur px-4 py-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {SCREENS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-purple-600" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  6) ANALYTICS                                                      */
/* ------------------------------------------------------------------ */
function Analytics() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          Measuring engagement
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left – mock dashboard */}
          <GlassCard className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Engagement dashboard
            </h3>

            {/* Fake line graph */}
            <div className="relative h-32 mb-6 rounded-lg bg-gradient-to-t from-purple-50 to-white border border-gray-100 overflow-hidden">
              <svg
                viewBox="0 0 300 100"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="0,80 40,65 80,70 120,45 160,50 200,30 240,35 280,20 300,25"
                />
                <polyline
                  fill="url(#grad)"
                  stroke="none"
                  points="0,80 40,65 80,70 120,45 160,50 200,30 240,35 280,20 300,25 300,100 0,100"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="absolute bottom-2 left-3 text-[10px] text-gray-400">
                Participation over time
              </p>
            </div>

            {/* Quick metrics */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Staff reached", value: "78%" },
                { label: "Avg reactions", value: "4.2" },
                { label: "Survey response", value: "63%" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg bg-purple-50 p-3 text-center"
                >
                  <p className="text-xl font-bold text-purple-600">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-gray-500">{m.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[10px] text-gray-400 italic">
              * Conceptual analytics for prototype purposes
            </p>
          </GlassCard>

          {/* Right – bullets */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-5">
              {[
                "Help P&C teams see which campaigns actually resonate with employees.",
                "Identify under-served departments or locations where engagement is low.",
                "Use data to iterate on culture initiatives, not just launch them.",
                "Track trends over time to measure the impact of People & Culture programs.",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ChartBarIcon className="mt-0.5 h-5 w-5 text-purple-500 flex-shrink-0" />
                  <p className="text-gray-600">{b}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-400 italic">
              Note: These are conceptual analytics built into the prototype to
              demonstrate the value of data-driven culture management.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  7) TECH & DESIGN                                                  */
/* ------------------------------------------------------------------ */
const TECH_STACK = [
  { name: "Next.js", bg: "bg-gray-900 text-white" },
  { name: "React", bg: "bg-sky-100 text-sky-700" },
  { name: "Tailwind CSS", bg: "bg-teal-100 text-teal-700" },
  { name: "Material Tailwind", bg: "bg-indigo-100 text-indigo-700" },
  { name: "React Hooks", bg: "bg-yellow-100 text-yellow-700" },
  { name: "Vercel", bg: "bg-gray-100 text-gray-700" },
];

function TechDesign() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12 bg-gray-50/60">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          How I built Clubhouse
        </h2>

        <ul className="space-y-4 text-gray-600 mb-10">
          <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
            <span>
              <strong>Frontend:</strong> Next.js, React, Tailwind CSS /
              Material Tailwind.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
            <span>
              <strong>Design:</strong> Card-based layout for modular,
              personalised dashboards &mdash; in line with modern intranet
              design best practices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
            <span>
              <strong>State management &amp; patterns:</strong> Simple React
              hooks, component-driven architecture.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-purple-500" />
            <span>
              <strong>Future directions:</strong> Integration with HRIS / SSO,
              role-based content targeting.
            </span>
          </li>
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((t) => (
            <span
              key={t.name}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${t.bg}`}
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  8) CTA                                                            */
/* ------------------------------------------------------------------ */
function CTA() {
  return (
    <SectionWrapper className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Explore the prototype or discuss people &amp; culture intranets
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Clubhouse is a personal concept exploring how a modern intranet can
          support People &amp; Culture teams. I&rsquo;m keen to adapt these
          patterns to real organisations and learn from their contexts.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://milestone-clubhouse-pro.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-purple-700 hover:shadow-lg transition-all"
          >
            Open Clubhouse prototype
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:obajews@hotmail.com?subject=Clubhouse%20intranet"
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
export default function ClubhouseCaseStudy() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemGoals />
      <Personas />
      <IAWorkflows />
      <ScreenCarousel />
      <Analytics />
      <TechDesign />
      <CTA />
      <Footer />

      {/* Blob animation keyframes */}
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}
