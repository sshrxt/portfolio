"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import StarWrapper from "@/lib/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

const Clients = () => {
  const [showNotation, setShowNotation] = useState({
    highlight: false,
    underlineClients: false,
    underlineEmployers: false,
  });

  return (
    <section id="testimonials" className="py-20">
      <motion.div
      variants={textVariant()}
      onAnimationComplete={() => setShowNotation({ highlight: true, underlineClients: true, underlineEmployers: true })}
    >
      <h1 className="heading">
        {showNotation.highlight ? (
          <RoughNotation type="highlight" show={true} color="#1C1F40" animationDelay={3}>
            Kind Words
          </RoughNotation>
        ) : (
          'Kind Words'
        )}{' '}
        From
        <span className="text-purple">
          {' '}
          {showNotation.underlineClients ? (
            <RoughNotation type="underline" color="#829BC8" show={true} animationDelay={3.3}>
              Satisfied Clients
            </RoughNotation>
          ) : (
            'Satisfied Clients'
          )}
        </span>{' '}
        &{' '}
        <span className="text-purple">
          {' '}
          {showNotation.underlineEmployers ? (
            <RoughNotation type="underline" color="#829BC8" show={true} animationDelay={2.9}>
              Employers
            </RoughNotation>
          ) : (
            'Employers'
          )}
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
                  
                    <img
                      src={company.nameImg}
                      alt={company.name}
                      width={company.id === 4 || company.id === 5 ? 100 : 150}
                      className="md:w-40 w-35"
                    />
                
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
