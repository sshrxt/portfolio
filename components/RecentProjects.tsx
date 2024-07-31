"use client";

import { projects } from "@/data";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";
import StarWrapper from "@/lib/SectionWrapper";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";



const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false);
  const [showRoughNotation, setShowRoughNotation] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="py-20" id="projects">
      <motion.div
      variants={textVariant()}
      id="projects"
      className="text-center"
      onAnimationComplete={() => setShowRoughNotation(true)}
    >
      <h1 className="heading">
        A{' '}
        {showRoughNotation ? (
          <RoughNotation
            animationDelay={2}
            show={true}
            type="highlight"
            color="#6F579F"
          >
            Small
          </RoughNotation>
        ) : (
          'Small'
        )}{' '}
        Selection of <span className="text-purple">Recent Projects</span>
      </h1>
    </motion.div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-0">
        {projects.map(({ id, title, des, img, link, linkMsg, iconLists }) => (
          <motion.div
            variants={fadeIn("up", "tween", .2, 1)}
            key={id}
            className="sm:h-[35rem] h-[30rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] my-5"
          >
            {isClient && (
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                    <img src={img} alt="bg-img" />
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {linkMsg}
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StarWrapper(RecentProjects, "projects");
