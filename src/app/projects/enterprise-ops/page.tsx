import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Enterprise Operations & HRIS Enhancements",
};

export default function EnterpriseOpsPage() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-8 py-28">
        <h2 className="mb-4 text-3xl font-bold text-blue-gray-900">
          Enterprise Operations &amp; HRIS Enhancements
        </h2>

        <p className="mb-8 text-lg font-normal text-gray-500">
          Real-world functional analyst work improving HRIS, payroll,
          scheduling, and operations: Kronos/UKG and Dynamics for the Uniting
          Church, pipeline&ndash;warehouse&ndash;CRM automation for Maximo, and
          HR apps analysis/UAT at DBS.
        </p>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Context &amp; Role
          </h4>
          <p className="font-normal text-gray-500">
            Across multiple engagements I served as the functional analyst
            responsible for requirements gathering, process mapping, system
            configuration, and UAT across HRIS and operations platforms. More
            details coming soon.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Goals
          </h4>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Improve HRIS accuracy, payroll efficiency, and scheduling</li>
            <li>Automate pipeline, warehouse, and CRM workflows</li>
            <li>Deliver thorough analysis and UAT for HR applications</li>
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
