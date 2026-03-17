// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Milestonehub from "./milestonehub";
import Resume from "./resume";
import PlatformsAndTools from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Milestonehub />
      <Resume />
      <PlatformsAndTools />
      <ContactForm />
      <Footer />
    </>
  );
}
