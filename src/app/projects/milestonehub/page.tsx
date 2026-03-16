import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Milestonehub – AI Project Orchestration Platform",
};

export default function MilestonehubPage() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-8 py-28">
        <h2 className="mb-4 text-3xl font-bold text-blue-gray-900">
          Milestonehub &ndash; AI Project Orchestration Platform
        </h2>

        <p className="mb-8 text-lg font-normal text-gray-500">
          Concept and architecture for an AI-assisted project orchestration
          platform that matches projects to the right teams based on skills and
          availability, guides scoping and delivery, and manages approval
          workflows end-to-end.
        </p>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Context &amp; Role
          </h4>
          <p className="font-normal text-gray-500">
            As the functional analyst and product architect, I defined the
            platform&rsquo;s core workflows, AI-matching logic, and approval
            pipelines. More details coming soon.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Goals
          </h4>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Match projects to optimal teams using AI-driven skill analysis</li>
            <li>Streamline scoping, delivery tracking, and milestone approvals</li>
            <li>Provide real-time visibility for all stakeholders</li>
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
