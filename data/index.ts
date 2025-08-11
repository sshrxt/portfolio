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
import illinois from "@/public/uiuc.png"
import walgreens from "@public/walgreens.png"



export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
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
      title: "Tech enthusiast looking for a SWE",
      titleHighlight: " internship",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently Building a Financial AI-Related Application",
      titleHighlight: "",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to hire me?",
      titleHighlight: "",
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
      title: "InvestAI",
      des: "Helping users gain more insight on prospective financial investment",
      img: "/InvestAI.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
      link: "https://github.com/sshrxt/InvestAI",
      linkMsg: "Check Repository",
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
        "Shrut has been an outstanding coworker, combining exceptional technical skills with a positive attitude. His dedication and collaborative spirit have greatly enhanced our team's success. It's a pleasure working with someone who is both talented and supportive. His contributions have significantly enhanced our team's performance and morale.",
      name: "Piotr Brozek",
      title: "Full-Stack Web Developer at EVL",
      img: '/peter.jpg',
    },
    {
      quote:
        "During Shrut's internship, he demonstrated exceptional skill and enthusiasm in every task. His ability to quickly grasp new concepts, tackle complex challenges, and contribute effectively to our projects was impressive. Shrut’s proactive approach, strong problem-solving skills, and eagerness to learn made him a valuable asset to our team and a pleasure to work with.",
      name: "Luc Renambot",
      title: "Research Professor",
      img: '/koala.jpg',
    },
    {
      quote:
        "Shrut has been an outstanding coworker, combining exceptional technical skills with a positive attitude. His dedication and collaborative spirit have greatly enhanced our team's success. It's a pleasure working with someone who is both talented and supportive. His contributions have significantly enhanced our team's performance and morale.",
      name: "Piotr Brozek",
      title: "Full-Stack Web Developer at EVL",
      img: '/peter.jpg',
    },
    {
      quote:
        "During Shrut's internship, he demonstrated exceptional skill and enthusiasm in every task. His ability to quickly grasp new concepts, tackle complex challenges, and contribute effectively to our projects was impressive. Shrut’s proactive approach, strong problem-solving skills, and eagerness to learn made him a valuable asset to our team and a pleasure to work with.",
      name: "Luc Renambot",
      title: "Research Professor",
      img: '/koala.jpg',
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
      name: "UIUC",
      nameImg: "/uiuc.png",
    },
    {
      id: 4,
      name: "Walgreens",
      nameImg: '/walgreens.png'
    }
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
      title: "Software Engineer Intern",
      company_name: "Walgreens",
      icon: walgreens,
      iconBg: "black",
      date: "June 2025 - Aug 2025",
      points: [
      "Developing a proxy service in SpringBoot that searches over 310 million specialty pharmacy records to find the most accurate patient matches, achieving over 95% accuracy.",
      "Building a dashboard in Angular, TypeScript, and TailwindCSS that aggregates data from three pharmacy services, enabling access to over 109 million linked patient records.",
      "Implementing authentication logic in an internal platform using C# to ensure all user requests include valid credentials, securing access for over 500 daily users.",
      "Contributing to daily Scrum stand-ups and bi-weekly sprints by designing user stories and delivering features in Azure DevOps, with regular demos to keep stakeholders aligned."
      ],

    },
    {
      title: "Software Engineer",
      company_name: "Electronic Visualization Labratory(evl) - SAGE Department",
      icon: evl,
      iconBg: "black",
      date: "Aug 2024 - May 2025",
     points: [
        "Integrated large language model (LLM) capabilities into SAGE3’s front-end using React and TypeScript, delivering contextual AI assistance seamlessly within the existing UI.",
        "Increased LLM throughput by 80% by refactoring the Python/FastAPI backend with LangGraph caching and batching optimizations.",
        "Routed real-time meeting audio via WebRTC to a server-side pipeline using OpenAI Whisper with speaker diarization, achieving ≤ 1s latency and producing speaker-tagged transcripts.",
        "Built an AI export pipeline (Python, LangChain, REST) that converts user-selected boards and apps into PDF and Jupyter reports with AI-generated summaries at 97% accuracy."
      ]

    },
    {
      title: "Software Developer & Researcher",
      company_name: "Illinois Mathematics Laboratory",
      icon: illinois,
      iconBg: "black",
      date: "Aug 2024 - Dec 2024",
      points: [
        "Developed a combinatorial graph-coloring game utilizing React and JavaScript, engaging over 300 users by turning abstract mathematical conjectures into interactive, visually intuitive puzzles.",
        "Implemented load testing and memory-management strategies, maintaining zero downtime even as concurrent game-state complexity scaled beyond 10× initial benchmarks.",
        "Engineered real-time validation logic by integrating efficient graph algorithms, enforcing complex graph-coloring constraints with 99.9% accuracy."
      ]


    },
    {
      title: "Software Engineer Intern",
      company_name: "Electronic Visualization Labratory(evl)",
      icon: evl,
      iconBg: "black",
      date: "June 2024 - Aug 2024",
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

 