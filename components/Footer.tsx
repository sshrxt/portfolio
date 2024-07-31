'use client'

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

import {motion} from 'framer-motion'
import {fadeIn, textVariant} from "@/lib/motion";
import StarWrapper from "@/lib/SectionWrapper";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

const Footer = () => {
  const [showNotations, setShowNotations] = useState({
    company: false,
    ideas: false,
    today: false,
    goals: false,
  });
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      onAnimationComplete={() =>
        setShowNotations({ company: true, ideas: true, today: true, goals: true })
      }
    >
      <footer className="w-full mb-[100px] pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take{' '}
            {showNotations.company ? (
              <RoughNotation type="highlight" show={true} color="#cbacf9" animationDelay={2}>
                your Company
              </RoughNotation>
            ) : (
              'your Company'
            )}{' '}
            and{' '}
            {showNotations.ideas ? (
              <RoughNotation type="highlight" color="#829BC8" show={true} animationDelay={2}>
                Ideas
              </RoughNotation>
            ) : (
              'Ideas'
            )}{' '}
            to the <span className="text-purple">next level?</span>
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me{' '}
            {showNotations.today ? (
              <RoughNotation type="box" color="#829BC8" show={true}>
                today
              </RoughNotation>
            ) : (
              'today'
            )}{' '}
            and let&apos;s discuss how I can help you achieve your{' '}
            {showNotations.goals ? (
              <RoughNotation type="highlight" color="#636EE8" show={true}>
                goals
              </RoughNotation>
            ) : (
              'goals'
            )}
            .
          </p>
          <a href="mailto:shrutpate20@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Shrut Patel
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default StarWrapper(Footer, "footer");
