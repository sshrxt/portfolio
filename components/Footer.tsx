'use client'

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

import {motion} from 'framer-motion'
import {fadeIn, textVariant} from "@/lib/motion";
import StarWrapper from "@/lib/SectionWrapper";
import { RoughNotation } from "react-rough-notation";

const Footer = () => {
  return (
    <motion.div variants={fadeIn("up", "tween", .2, 1)}>
    <footer className="w-full mb-[100px] pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <RoughNotation type="highlight" show={true} color="#cbacf9">your Company</RoughNotation> and <RoughNotation type="highlight" color="#829BC8" show={true}>Ideas </RoughNotation>
          to the <span className="text-purple">next level?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me <RoughNotation type="box" color="#829BC8" show={true}>today</RoughNotation> and let&apos;s discuss how I can help you
          achieve your <RoughNotation type="highlight" color="#636EE8" show={true}>goals</RoughNotation>.
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
              <a href={info.link} target="_blank">
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
