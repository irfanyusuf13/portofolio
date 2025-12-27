import { FaCode, FaServer, FaMicrochip, FaNetworkWired, FaTools, FaJava, FaMobile} from 'react-icons/fa';
import {SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, 
    SiPostgresql, SiMongodb, SiCplusplus, SiGnu, SiGithub, 
    SiPython, SiGit, SiAssemblyscript, SiPostman, SiDocker, SiTailwindcss, SiAndroidstudio, SiNextdotjs} from 'react-icons/si';


export interface ISkill {
  name: string;
  icon: React.ComponentType<any>; 
  level: number; 
}

export interface ICategory {
  name: string;
  icon: React.ComponentType<any>;
  skills: ISkill[];
}

export const skillsData: ICategory[] = [
  {
    name: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "Python", icon: SiPython, level: 4 },
      { name: "JavaScript", icon: SiJavascript, level: 4 },
      { name: "Java", icon: FaJava, level: 3 },
      { name: "C / C++", icon: SiCplusplus, level: 3 },
      { name: "TypeScript", icon: SiTypescript, level: 3 },
      { name: "VHDL", icon: FaMicrochip, level: 2 },
      { name: "Assembly", icon: SiAssemblyscript, level: 2 },
    ]
  },
  {
    name: "Full-Stack Web Development",
    icon: FaServer,
    skills: [
      { name: "React", icon: SiReact, level: 3 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 3 },
      { name: "Node.js", icon: SiNodedotjs, level: 3 },
      { name: "Express.js", icon: SiExpress, level: 3 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 3 },
      { name: "Next.js", icon: SiNextdotjs, level: 3 },
      { name: "MongoDB", icon: SiMongodb, level: 2 },
    ]
  },
   {
    name: "Mobile Development",
    icon: FaMobile,
    skills: [
      { name: "Android Studio", icon: SiAndroidstudio, level: 2 },
    ]
  },
  {
    name: "Computer Networks & Security",
    icon: FaNetworkWired,
    skills: [
      { name: "Cisco Packet Tracer", icon: FaNetworkWired, level: 3 },
      { name: "Computer Network", icon: FaNetworkWired, level: 3 },
      { name: "Network Security", icon: FaNetworkWired, level: 2 },
    ]
  },
  {
    name: "Tools",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit, level: 4 },
      { name: "Github", icon: SiGithub, level: 4 },
      { name: "Postman", icon: SiPostman, level: 3 },
      { name: "Linux", icon: SiGnu, level: 2 },
      { name: "Docker", icon: SiDocker, level: 2 },
    ]
  }
];