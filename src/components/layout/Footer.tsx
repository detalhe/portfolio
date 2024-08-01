import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 300, damping: 10 } },
};

const Footer = () => {
  return (
    <footer className="pt-10 text-green-300 relative">
      <div className="absolute top-0 left-[-2rem] right-[-2rem] h-2 bg-[#4cea91]"></div>
      <div className="flex flex-col items-center">
        <p className="text-sm mb-4">
          made with &lt;3 by{" "}
          <a href="https://github.com/detalhe" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition-colors duration-200 underline">
            eduardo monteiro
          </a>
        </p>

        <div className="flex space-x-4 mb-4">
          {[
            { Icon: FaReact, title: "React" },
            { Icon: SiTypescript, title: "TypeScript" },
            { Icon: SiTailwindcss, title: "Tailwind CSS" },
            { Icon: SiVite, title: "Vite" },
            { Icon: FaNodeJs, title: "Node.js" },
          ].map(({ Icon, title }, index) => (
            <motion.div key={index} variants={iconVariants} initial="initial" whileHover="hover" className="group relative">
              <Icon size={20} className="text-green-300" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-800 text-green-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {title}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="https://github.com/detalhe/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-green-300 hover:text-green-100 transition-colors duration-200 underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="mr-2" />
          source code
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
