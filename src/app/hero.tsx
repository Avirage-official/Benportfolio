"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
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
            Functional Analyst for AI‑Enabled Operations &amp; Enterprise Systems
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Benjamin Obaje, a functional analyst who helps organisations
            turn messy processes and disconnected tools into clear, reliable
            systems. I work at the intersection of operations, HRIS, and
            data—designing workflows, configurations, and AI‑assisted automation
            that actually fit how people work. On this site you&apos;ll find
            selected projects that show how I analyse, design, and deliver change
            across enterprise platforms.
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
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Start a conversation
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
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
