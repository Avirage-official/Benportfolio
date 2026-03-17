import Link from "next/link";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Vault – Executive & Investor Control Panel",
};

export default function VaultPage() {
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
          Vault &ndash; Executive &amp; Investor Control Panel
        </h2>

        <p className="mb-8 text-lg font-normal text-gray-500">
          Design for a central hub where CEOs and investors see a unified view
          of company performance, key decisions, portfolio investments, and
          curated external news, instead of jumping between disconnected tools.
        </p>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Context &amp; Role
          </h4>
          <p className="font-normal text-gray-500">
            I conceptualised the executive dashboard, defining KPI structures,
            data integrations, and decision-support views. More details coming
            soon.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Goals
          </h4>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Unify company performance, decisions, and investment data</li>
            <li>Surface curated external news alongside internal metrics</li>
            <li>Replace disconnected tools with a single control panel</li>
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
