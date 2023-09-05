import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiJquery,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiMui,
} from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "MongoDB", icon: <SiMongodb /> }, // Consider a more specific icon if available
      { name: "MySQL", icon: <SiMysql /> }, // Consider a more specific icon if available
      { name: "JavaScript", icon: <SiTypescript /> },
      { name: "TypeScript", icon: <SiJavascript /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Material UI", icon: <SiMui /> },
    ],
  },
];
