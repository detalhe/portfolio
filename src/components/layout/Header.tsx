import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaCopy, FaCheck, FaSun, FaMoon } from "react-icons/fa";

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
  const [currentTime, setCurrentTime] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const brazilTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }).format(now);
      setCurrentTime(brazilTime);

      const hour = now.getHours();
      setIsDaytime(hour >= 6 && hour < 18);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

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
          <motion.div 
            className="flex items-center bg-green-800 rounded px-2 py-1 text-green-300 ml-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDaytime ? <FaSun className="mr-1" size={12} /> : <FaMoon className="mr-1" size={12} />}
            <span className="text-xs">{currentTime}</span>
          </motion.div>
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
