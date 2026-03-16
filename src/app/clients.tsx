"use client";

import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "Maximo (Auckland)",
  "Uniting Church in Australia (Brisbane)",
  "DBS Bank (Singapore)",
  "Urah Transdermal (Singapore)",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Teams and domains I&apos;ve supported
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((name, key) => (
            <div
              key={key}
              className="flex min-w-[10rem] items-center justify-center rounded-lg border border-blue-gray-50 bg-white px-6 py-4 text-center"
            >
              <Typography
                variant="small"
                className="font-medium text-blue-gray-700"
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

export default Clients;
