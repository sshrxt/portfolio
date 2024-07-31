"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";
import animationData from "@/data/confetti.json";
import { FaLocationArrow } from "react-icons/fa";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  titleHighlight,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  titleHighlight?: string;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["ViteJS", "NextJS", "MongoDb"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "shrutpatel20@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  type AnnotationType = "highlight" | "underline" | "box" | "circle";

  const getAnnotationType = (title: string): AnnotationType => {
    console.log(title);
    switch (title) {
      case "hire me?":
        return "highlight";
      case "My Tech Stack":
        return "underline";
      case "SWE internship":
        return "highlight";
      case "Financial AI-Related Application":
        return "highlight";
      case "time zone communications":
        return "underline";
      case "Cybersecurity":
        return "highlight";
      default:
        return "highlight";
    }
  };

  const getAnnotationColor = (title: string): string => {
    switch (title) {
      case "hire me?":
        return "#242248";
      case "My Tech Stack":
        return "#6F5BDE";
      case "SWE internship":
        return "#7C7AA9";
      case "Financial AI-Related Application":
        return "#9595ED";
      case "time zone communications":
        return "#4039C5";
      case "Cybersecurty":
        return "#9595ED";
      default:
        return "#9595ED"; // Default color
    }
  };

  const handleRedirect = () => {
    window.open('https://www.credly.com/badges/e70b5686-6ebd-42f5-9783-df49392ff969/public_url', '_blank'); // Replace with your website URL
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl ${
              id === 1 ? `text-center mb-0 flex flex-col items-center justify-center` : `max-w-96`
            } font-bold z-10`}
          >
            {title}
            {titleHighlight && (
              <RoughNotation
                show={true}
                type={getAnnotationType(titleHighlight)}
                color={getAnnotationColor(titleHighlight)}
              >
                {titleHighlight}
              </RoughNotation>
            )}

            <div className="w-[250px] flex items-center justify-center">
              {id === 1 && (
                <MagicButton
                  title={"View my certification"}
                  icon={<FaLocationArrow />}
                  position="right"
                  handleClick={handleRedirect}
                  otherClasses="!bg-[#0D041E]"
                />
              )}
            </div>
          </div>

          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
