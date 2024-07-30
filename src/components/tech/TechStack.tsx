import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaPython, FaHtml5, FaCss3, FaSass, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiC, SiTypescript, SiMysql } from "react-icons/si";
import TechStackItem from "./TechStackItem";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const projects = {
  geminiDiscordBot: { name: "gemini discord bot", githubUrl: "https://github.com/detalhe/gemini-discord-bot" },
  guitarHeroJS: { name: "guitar hero JS", githubUrl: "https://github.com/detalhe/GuitarHeroJS/" },
  reactRadioPlayer: { name: "react radio player", githubUrl: "https://github.com/detalhe/react-radio-player" },
  vehicleAI: { name: "vehicle AI", githubUrl: "https://github.com/detalhe/vehicle-ai/" },
  portfolio: { name: "this portfolio", githubUrl: "https://github.com/detalhe/portfolio" },
};

const techStack = [
  { icon: <SiTypescript size={16} />, text: "TypeScript", projects: [projects.geminiDiscordBot, projects.portfolio] },
  { icon: <FaJs size={16} />, text: "JavaScript", projects: [projects.guitarHeroJS, projects.reactRadioPlayer, projects.vehicleAI] },
  { icon: <FaReact size={16} />, text: "React", projects: [projects.reactRadioPlayer, projects.portfolio] },
  { icon: <FaNodeJs size={16} />, text: "Node.js", projects: [projects.vehicleAI] },
  { icon: <SiExpress size={16} />, text: "Express.js", projects: [projects.vehicleAI] },
  { icon: <SiTailwindcss size={16} />, text: "Tailwind CSS", projects: [projects.reactRadioPlayer, projects.portfolio] },
  { icon: <SiC size={16} />, text: "C", projects: [] },
  { icon: <SiMysql size={16} />, text: "MySQL", projects: [] },
  { icon: <FaHtml5 size={16} />, text: "HTML5", projects: [projects.guitarHeroJS, projects.reactRadioPlayer, projects.vehicleAI, projects.portfolio] },
  { icon: <FaCss3 size={16} />, text: "CSS3", projects: [projects.guitarHeroJS, projects.reactRadioPlayer, projects.vehicleAI, projects.portfolio] },
  { icon: <FaSass size={16} />, text: "Sass", projects: [] },
  { icon: <FaBootstrap size={16} />, text: "Bootstrap", projects: [] },
  { icon: <FaPython size={16} />, text: "Python", projects: [] },
];

const TechStack = () => {
  return (
    <motion.div variants={itemVariants} className="mb-8">
      <h2 className="text-base mb-4 flex items-center font-bold">{`mainTechStack = [ ... ] =>`}</h2>

      <div className="flex flex-wrap -m-1">
        {techStack.map((tech, index) => (
          <div key={index} className="flex-grow">
            <TechStackItem icon={tech.icon} text={tech.text} projects={tech.projects} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
