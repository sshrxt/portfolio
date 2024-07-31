import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  c,
  cplus,
  framer,
  githubicon,
  nexticon,
  npm,
  pythonicon,
  vite,
  mongo
} from "../assets/index";

import evl from "@/public/evl.webp"
import sparkhacks from "@/public/sparkhacks.png"
import frc from "@/public/frc.png"
import walmart from "@/public/walmart.png"



export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Experience", link: "#experience" },
    { name: "My Approach", link: "#approach" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Professionaly Certified in",
      titleHighlight: " Cybersecurity",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/hacker.webp",
      spareImg: ""
    },
    {
      id: 2,
      title: "I'm very flexible with ",
      titleHighlight: "time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: ""
    },
    {
      id: 3,
      titleHighlight: "My Tech Stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: ""
    },
    {
      id: 4,
      title: "Tech enthusiast looking for a ",
      titleHighlight: "SWE internship",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently Building a ",
      titleHighlight: "Financial AI-Related Application",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to ",
      titleHighlight: "hire me?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Work-in-Progress",
      des: "I am currently working on this project, ETA - August 5th",
      img: "/bg.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
      link: "https://www.youtube.com/watch?v=JgkdwhxCyyk",
      linkMsg: "Check Live Site",
    },
    {
      id: 2,
      title: "RocketPal",
      des: "Work towards a healthier life with your personal AI health therapist (Sparkhacks 2024 First Place Winner)",
      img: "/rocketpal.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/py.svg", "/mongo.svg"],
      link: "https://www.youtube.com/watch?v=JgkdwhxCyyk",
      linkMsg: "Check Showcase"
    },
    {
      id: 3,
      title: "Marvelous Movies",
      des: "Find the trending movies of today with a simple click of a button, and search for your favorite movies!",
      img: "/movie.png",
      iconLists: ["/re.svg", "/vite.svg", "/ts.svg"],
      link: "https://github.com/sshrxt/TS-Movie-App",
      linkMsg: "Check Repository"
    },
    {
      id: 4,
      title: "Stock-Dashboard",
      des: "Search up your favorite stock, and get that stock's visual and informative data!",
      img: "/stock.gif",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/adrianhajdin/iphone",
      linkMsg: "Check Live Site"
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Shrut has been an outstanding coworker, combining exceptional technical skills with a positive attitude. His dedication and collaborative spirit have greatly enhanced our team's success. It's a pleasure working with someone who is both talented and supportive.",
      name: "Piotr Brozek",
      title: "Full-Stack Web Developer at EVL",
      img: '/pfp.jpg',
    },
    {
      quote:
        "During Shrut's internship, he demonstrated exceptional skill and enthusiasm in every task. His ability to quickly grasp new concepts, tackle complex challenges, and contribute effectively to our projects was impressive. Shrut’s proactive approach, strong problem-solving skills, and eagerness to learn made him a valuable asset to our team and a pleasure to work with.",
      name: "Luc Renambot",
      title: "Research Professor at EVL",
      img: '/pfp.jpg',
    },
    {
      quote:
        "Shrut has been an outstanding coworker, combining exceptional technical skills with a positive attitude. His dedication and collaborative spirit have greatly enhanced our team's success. It's a pleasure working with someone who is both talented and supportive.",
      name: "Piotr Brozek",
      title: "Full-Stack Web Developer at EVL",
      img: '/pfp.jpg',
    },
    {
      quote:
        "During Shrut's internship, he demonstrated exceptional skill and enthusiasm in every task. His ability to quickly grasp new concepts, tackle complex challenges, and contribute effectively to our projects was impressive. Shrut’s proactive approach, strong problem-solving skills, and eagerness to learn made him a valuable asset to our team and a pleasure to work with.",
      name: "Luc Renambot",
      title: "Research Professor at EVL",
      img: '/pfp.jpg',
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "evl",
      nameImg: "/evl.webp",
    },
    {
      id: 2,
      name: "UIC",
      nameImg: "/uic.png",
    },
    {
      id: 3,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 4,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full-Stack Developer Intern (EVL)",
      desc: "Queried and Utilized EVL's llamma 3.1 AI models to ensure proper functionality and testing",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Front-End Team Member (Sparkhacks)",
      desc: "Assisted in designing UI componenets to lead our team to First Place in SparkHacks, UIC's annual Hack-a-Thon",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Camp Conselour (Expanded Learning)",
      desc: "Help facilitate camp activities and connections with a group of 150-200 students throughout summer and spring breaks",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Cashier (Walmart)",
      desc: "Helped train new assosicates and properly handle cash management during closing shifts",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/sshrxt",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/shrut-p/"
    },
  ];


 export const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Electronic Visualization Labratory(evl)",
      icon: evl,
      iconBg: "black",
      date: "June 2024 - Present",
      points: [
        "Queried and Utilized EVL's llamma 3.1 AI models to ensure proper functionality and testing",
        "Developed REST Api's to perform CRUD operations utilizing Express JS and Typescript",
        "Created a dynamic Web Application utilizing NextJs, Gsap, Threejs, React, Express, and Typescript",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "SparkHacks",
      icon: sparkhacks,
      iconBg: "black",
      date: "Feb 2024",
      points: [
        "Designed UI componenets to ensure consumer satisfication and response",
        "Collaborated with cross-functional teams including designers and backend engineers to create a high quality webpage.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Camp Facilitator",
      company_name: "Expanded Learning",
      icon: frc,
      iconBg: "black",
      date: "June 2022 - Present",
      points: [
        "Cultivated an inclusive learning envrionment throughout Spring and Summer camps, driving consistent weekly participation exceeding 15 students",
        "Spearheaded team synergy and leadership development throughout the basketball season via innovative and dynamic practice sessionsand games",
        "Orchestrated cohesive student interactions through meticulosy planned activities fostering organic social bonds",
      ],
    },
    {
      title: "Cashier",
      company_name: "Walmart",
      icon: walmart,
      iconBg: "white",
      date: "Nov. 2021 - June 2022",
      points: [
        "Utilized Walmart's POS system to process transactions quickly and accurately, demonstrating proficiency with software systems and data entry",
        "Developed and implemented efficient checkout processes, reducing customer wait times and enhancing overall store efficiency",
        "Collaborated with a team of cashiers and supervisors to streamline operations during peak hours, emphasizing teamwork and leadership potential",
      ],
    },
  ];


export const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "nextjs",
      icon: nexticon,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "python",
      icon: pythonicon,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "c++",
      icon: cplus,
    }, 
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongo,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "vite",
      icon: vite,
    },
  ];

 