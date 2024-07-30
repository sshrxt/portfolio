"use client";

import BallCanvas from "./ui/canvas/Ball";
import { technologies } from "../data/index";

const Tech = () => {
  return (
    <div className="pt-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Technologies</span>
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
