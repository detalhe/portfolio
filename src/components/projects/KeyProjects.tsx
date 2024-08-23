import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDiscord, FaStar, FaCodeBranch } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiThreedotjs, SiTypescript } from "react-icons/si";

const variants = {
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  },
  button: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "rgb(21 128 61)",
      boxShadow: "0 0 8px rgba(76, 234, 145, 0.5)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  },
  icon: {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { type: "spring", stiffness: 300, damping: 10 } },
  },
};

interface Project {
  title: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  demoUrl?: string;
  techStack: React.ReactElement[];
}

interface ProjectWithStats extends Project {
  stars: number;
  forks: number;
}

const projects: Project[] = [
  {
    title: "vehicle AI",
    description: "identify any vehicle with AI.",
    longDescription:
      "web application that identifies make, model, color and year of any vehicle from an image, achieving 95% accuracy. capable of recognizing any vehicle, even in photos of the interior or specific parts.",
    githubUrl: "https://github.com/detalhe/vehicle-ai/",
    demoUrl: "https://vehicle-ai.vercel.app",
    techStack: [
      <FaNodeJs key="nodejs" size={20} className="text-green-300" title="Node.js" />,
      <SiExpress key="express" size={20} className="text-green-300" title="Express.js" />,
      <FaJs key="js" size={20} className="text-green-300" title="JavaScript" />,
    ],
  },
  {
    title: "react radio player",
    description: "modern web radio player for Zeno.fm stations.",
    longDescription: "a sleek, responsive radio player built with React, Vite, and Tailwind CSS. with live real-time metadata updates and system-level media controls.",
    githubUrl: "https://github.com/detalhe/react-radio-player/",
    demoUrl: "https://react-radio-demo.netlify.app/",
    techStack: [
      <FaReact key="react" size={20} className="text-green-300" title="React" />,
      <SiTailwindcss key="tailwind" size={20} className="text-green-300" title="Tailwind CSS" />,
      <FaJs key="js" size={20} className="text-green-300" title="JavaScript" />,
    ],
  },
  {
    title: "guitar hero js",
    description: "web-based guitar hero clone using Three.js.",
    longDescription:
      "modern recreation of the classic guitar hero for web browsers, using three.js for 3d graphics. with dynamic scoring, short and long notes, sliding fretboard and toggleable debug mode.",
    githubUrl: "https://github.com/detalhe/GuitarHeroJS/",
    techStack: [
      <SiThreedotjs key="threejs" size={20} className="text-green-300" title="Three.js" />,
      <FaJs key="js" size={20} className="text-green-300" title="JavaScript" />,
      <FaHtml5 key="html" size={20} className="text-green-300" title="HTML5" />,
      <FaCss3Alt key="css" size={20} className="text-green-300" title="CSS3" />,
    ],
  },
  {
    title: "gemini discord bot",
    description: "discord AI chatbot.",
    longDescription:
      "a discord AI chatbot utilizing the Google Gemini model. it can engage in conversations, process images, and use slash commands for context management.",
    githubUrl: "https://github.com/detalhe/gemini-discord-bot",
    techStack: [
      <FaNodeJs key="nodejs" size={20} className="text-green-300" title="Node.js" />,
      <SiTypescript key="typescript" size={20} className="text-green-300" title="TypeScript" />,
      <FaDiscord key="discord" size={20} className="text-green-300" title="Discord.js" />,
    ],
  },
];

const fetchGitHubStats = async (url: string): Promise<{ stars: number; forks: number }> => {
  try {
    const repo = url.split('github.com/')[1].replace(/\/$/, '');
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) {
      console.warn(`Unable to fetch stats for ${url}. Status: ${response.status}`);
      return { stars: 0, forks: 0 };
    }
    const data = await response.json();
    return { stars: data.stargazers_count, forks: data.forks_count };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return { stars: 0, forks: 0 };
  }
};

const ProjectCard = ({ title, description, longDescription, githubUrl, demoUrl, techStack, stars, forks }: ProjectWithStats) => (
  <div className="bg-green-900 p-4 rounded">
    <p className="text-sm mb-3">
      <strong>{title}</strong>. <i>{description}</i>
    </p>
    <p className="text-sm mb-4">{longDescription}</p>
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        <ProjectButton href={githubUrl} icon={<FaGithub size={16} />} text="git repo" />
        {demoUrl && <ProjectButton href={demoUrl} icon={<FaExternalLinkAlt size={16} />} text="live demo" />}
        <div className="flex items-center gap-2 text-green-300 text-sm">
          <span className="flex items-center"><FaStar className="mr-1" /> {stars}</span>
          <span className="flex items-center"><FaCodeBranch className="mr-1" /> {forks}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((icon, index) => (
          <motion.div key={index} variants={variants.icon} initial="initial" whileHover="hover" className="group relative">
            {icon}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-800 text-green-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {icon.props.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectButton = ({ href, icon, text }: { href: string; icon: React.ReactElement; text: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-700 px-2 py-1 rounded flex items-center text-sm text-green-300 hover:text-green-100 whitespace-nowrap"
    variants={variants.button}
    initial="initial"
    whileHover="hover"
  >
    {React.cloneElement(icon, { className: "mr-1" })} {text}
  </motion.a>
);

const KeyProjects = () => {
  const [projectsWithStats, setProjectsWithStats] = useState<ProjectWithStats[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          const stats = await fetchGitHubStats(project.githubUrl);
          return { ...project, ...stats };
        })
      );
      setProjectsWithStats(updatedProjects);
    };

    fetchStats();
  }, []);

  return (
    <motion.div variants={variants.item} className="mb-12">
      <h2 className="text-base mb-4 flex items-center font-bold">key projects:</h2>
      <div className="space-y-6">
        {projectsWithStats.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default KeyProjects;
