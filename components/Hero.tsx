'use client'

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { Button, MovingBorder } from "./ui/Moving";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative mb-10 z-10">
        <RoughNotationGroup show={true}>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Revitalizing Dreams into Impactful Solutions"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi👋 I&apos;m Shrut, a <RoughNotation type="box" color="#829BC8">Web Developer</RoughNotation> based in <RoughNotation type="highlight" color="#7B749F">Chicago, Illinois</RoughNotation>
            </p>

            <div className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 mb-2">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950  text-sm font-medium text-white backdrop-blur-3xl">
              <img
                src="/pfp.jpg"
                alt="photo of shrut"
                className="w-[300px] rounded-lg object-cover"
              />
              </span>
            </div>

            <a href="#projects">
              <MagicButton
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </RoughNotationGroup>
      </div>
    </div>
  );
};

export default Hero;
