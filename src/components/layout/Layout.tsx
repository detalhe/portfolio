import { motion } from "framer-motion";
import Header from "../layout/Header"
import AnimatedASCII from "../ascii/AnimatedASCII";
import SocialLinks from "../ascii/SocialLinks";
import TechStack from "../tech/TechStack";
import KeyProjects from "../projects/KeyProjects";
import Footer from "../layout/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const Layout = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#001a00] text-green-300 p-8 font-['Cascadia_Code',monospace] max-w-2xl w-full border-l-8 border-r-8 border-[#4cea91] relative"
    >
      <Header />

      <motion.div variants={itemVariants}>
        <AnimatedASCII />
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center justify-center mb-8">
        <SocialLinks />
      </motion.div>

      <TechStack />
      <KeyProjects />
      <Footer />
    </motion.div>
  );
};

export default Layout;
