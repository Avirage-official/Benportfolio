import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="mt-10 px-8 pt-10 pb-6 border-t border-gray-200">
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-4 md:flex-row">
        <p className="text-sm text-gray-600 text-center md:text-left">
          &copy; {CURRENT_YEAR} Benjamin Obaje. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 text-sm text-gray-600">
          <li>
            <a
              href="mailto:obajews@hotmail.com"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/benobaje"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="/resume"
              className="hover:text-gray-900 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
