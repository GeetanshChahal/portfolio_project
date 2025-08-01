"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="tech-stack" className="py-20">
      <h1 className="heading">
        Tech <span className="text-purple">Stack</span>
      </h1>
      <div>
        {/* This line break will only appear on screens larger than mobile (sm breakpoint and above) */}
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies?.map((company) => (
            <React.Fragment key={company.id}>
              <div className="relative group flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-20 w-5"
                />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  {company.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
