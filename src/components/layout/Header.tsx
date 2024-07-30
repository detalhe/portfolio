import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

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

const Header = () => {
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("edu@detalhe.uk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div variants={itemVariants} className="pb-4 mb-4 relative">
      <div className="absolute top-[calc(100%+1rem)] left-[-2rem] right-[-2rem] h-2 bg-[#4cea91]"></div>
      <div className="text-sm space-y-2">
        <p>heya! i'm eduardo.</p>
        <p className="italic">full-stack software developer</p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" size={16} />
          <span>location: brazil</span>
        </p>
        <p className="flex items-center relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <FaEnvelope className="mr-2" size={16} />
          <span className="mr-2">contact: edu@detalhe.uk</span>
          <div className="w-6 h-6 inline-flex items-center justify-center -mt-0.5">
            <AnimatePresence>
              {isHovering && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleCopyEmail}
                  className="p-1 bg-green-800 rounded text-green-300 hover:bg-green-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? <FaCheck size={12} /> : <FaCopy size={12} />}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </p>
      </div>
    </motion.div>
  );
};

export default Header;
