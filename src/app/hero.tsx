"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  const handleCTA = () => {
    window.location.href =
      "mailto:obajews@hotmail.com?subject=Benportfolio%20%E2%80%93%20Systems%20%26%20Operations%20Discussion";
  };

  return (
    <header className="relative overflow-hidden bg-white p-8">
      {/* Subtle radial gradient accent */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-blue-50 via-blue-100/40 to-transparent opacity-70 blur-3xl" />

      <div className="container relative mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Designing Systems That Make Work Flow
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Functional Analyst for AI-Enabled Operations &amp; Enterprise Systems
          </Typography>
          <Typography
            variant="paragraph"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Benjamin Obaje, a functional analyst who helps organisations
            turn messy processes and disconnected tools into clear, reliable
            systems. I work at the intersection of operations, HRIS, and
            data—designing workflows, configurations, and AI-assisted automation
            that actually fit how people work.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Let&apos;s talk about your systems
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input color="gray" label="Enter your work email" size="lg" />
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem]"
                onClick={handleCTA}
              >
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Benjamin Obaje"
          src="https://github.com/user-attachments/assets/ba71238a-5160-4880-8280-897ff65d3c8c"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
