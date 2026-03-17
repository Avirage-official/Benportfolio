"use client";

import { Typography } from "@material-tailwind/react";
import { SiSap, SiHubspot, SiPostgresql } from "react-icons/si";
import { FaClock } from "react-icons/fa";
import {
  CircleStackIcon,
  PresentationChartBarIcon,
  TableCellsIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import type { IconType } from "react-icons";
import type { ComponentType, SVGProps } from "react";

type HeroIcon = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const PLATFORMS: { name: string; icon: IconType | HeroIcon }[] = [
  { name: "Microsoft Dynamics 365", icon: CircleStackIcon },
  { name: "SAP", icon: SiSap },
  { name: "Kronos / UKG", icon: FaClock },
  { name: "SharePoint", icon: ShareIcon },
  { name: "HubSpot CRM", icon: SiHubspot },
  { name: "Power BI", icon: PresentationChartBarIcon },
  { name: "SQL / PostgreSQL", icon: SiPostgresql },
  { name: "Excel Automation", icon: TableCellsIcon },
];

export function PlatformsAndTools() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            PLATFORMS &amp; TOOLS
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Systems I&apos;ve worked with
          </Typography>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {PLATFORMS.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-lg border border-blue-gray-50 bg-white px-6 py-5 text-center text-gray-600 transition-transform transition-colors hover:-translate-y-1 hover:text-gray-900"
            >
              <Icon className="h-8 w-8" />
              <Typography
                variant="small"
                className="font-medium"
              >
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformsAndTools;
