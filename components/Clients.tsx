"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import StarWrapper from "@/lib/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";
import { RoughNotation } from "react-rough-notation";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <motion.div variants={textVariant()}>
        <h1 className="heading">
          <RoughNotation type="highlight" show={true} color="#1C1F40">
            Kind Words
          </RoughNotation>{" "}
          From
          <span className="text-purple">
            {" "}
            <RoughNotation type="box" color="#829BC8" show={true}>
              Satisfied Clients
            </RoughNotation>
          </span>{" "}
          &{" "}
          <span className="text-purple">
            {" "}
            <RoughNotation type="box" color="#829BC8" show={true}>
              Employers
            </RoughNotation>
          </span>
        </h1>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
        <div className="flex flex-col items-center max-lg:mt-10">
          <div
            // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
            className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  {company.img && (
                    <img
                      src={company.img}
                      alt={company.name}
                      className="md:w-10 w-5"
                    />
                  )}
                  {company.img ? (
                    <img
                      src={company.nameImg}
                      alt={company.name}
                      width={company.id === 4 || company.id === 5 ? 100 : 150}
                      className="md:w-32 w-22"
                    />
                  ) : (
                    <img
                      src={company.nameImg}
                      alt={company.name}
                      width={company.id === 4 || company.id === 5 ? 100 : 150}
                      className="md:w-40 w-35"
                    />
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StarWrapper(Clients, "testimonials");
