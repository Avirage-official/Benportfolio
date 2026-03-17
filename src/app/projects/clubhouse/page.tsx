import Link from "next/link";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Clubhouse – People & Culture Intranet",
};

export default function ClubhousePage() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-8 py-28">
        <Link
          href="/#projects"
          className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          &larr; Back to Projects
        </Link>
        <h2 className="mb-4 text-3xl font-bold text-blue-gray-900">
          Clubhouse &ndash; People &amp; Culture Intranet
        </h2>

        <p className="mb-8 text-lg font-normal text-gray-500">
          Intranet concept for companies that brings together clock-in/out,
          wellbeing tracking, internal links, and social features so HR and
          leaders can monitor engagement while employees plan lunches, share
          praise, and coordinate schedules.
        </p>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Context &amp; Role
          </h4>
          <p className="font-normal text-gray-500">
            I designed the end-to-end intranet experience, mapping out employee
            journeys, HR dashboards, and social-engagement features. More
            details coming soon.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Goals
          </h4>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Centralise clock-in/out, wellbeing, and social features</li>
            <li>Give HR and leaders real-time engagement insights</li>
            <li>Improve employee experience and internal communication</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            My Contributions
          </h4>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Placeholder &ndash; to be expanded</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Tech &amp; Methods
          </h4>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Placeholder &ndash; to be expanded</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
