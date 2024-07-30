import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const linkVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    textShadow: "0 0 8px rgba(76, 234, 145, 0.5)",
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <motion.a
        href="https://github.com/detalhe/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-200"
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
      >
        <FaGithub className="mr-2" size={20} />
        <span>github</span>
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/detalhe/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-200"
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
      >
        <FaLinkedin className="mr-2" size={20} />
        <span>/in/detalhe</span>
      </motion.a>
    </div>
  );
};

export default SocialLinks;
