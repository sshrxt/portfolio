"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/data/index";
import { fadeIn, textVariant } from "@/lib/motion";
import ExperienceCard from "./ui/ExperienceCard";
import {styles} from '@/lib/styles'
import StarWrapper from '@/lib/SectionWrapper'


const WorkExperience = () => {
  return (
    <div id="experience" className="py-16 w-full">
      <motion.div variants={textVariant()} id="experience" className={`text-center`}>
        <h1 className="heading text-white">
          My <span className="text-purple">Work Experience</span>
        </h1>
      </motion.div>
      
      <motion.div variants={fadeIn("up", "tween", .2, 1)} className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience = {experience} index={index}/>
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default StarWrapper(WorkExperience, "experience");
