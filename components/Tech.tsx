"use client";

import BallCanvas from "./ui/canvas/Ball";
import { technologies } from "../data/index";
import StarWrapper from "@/lib/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motion";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

const Tech = () => {
  const [showRoughNotation, setShowRoughNotation] = useState(false);
  return (
    <div id="technology"className="py-15 pb-20 w-full">
      <motion.div
      variants={fadeIn("left", "spring", 0.2, 1)}
      onAnimationComplete={() => setShowRoughNotation(true)}
    >
      <h1 className="heading">
        My{" "}
        <span className="text-purple">
          {showRoughNotation ? (
            <RoughNotation
              animationDelay={2.3}
              type="box"
              color="#829BC8"
              show={true}
            >
              Technologies
            </RoughNotation>
          ) : (
            'Technologies'
          )}
        </span>
      </h1>
    </motion.div>
      <motion.div variants={fadeIn("right", "spring", .2, 1)} className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon.src} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StarWrapper(Tech, "tech");
