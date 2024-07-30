import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface Project {
  name: string;
  githubUrl: string;
}

interface TechStackItemProps {
  icon: React.ReactElement;
  text: string;
  projects: Project[];
}

const TechStackItem = ({ icon, text, projects }: TechStackItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRightAligned, setIsRightAligned] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const parentRect = itemRef.current.offsetParent?.getBoundingClientRect();
      if (parentRect) {
        setIsRightAligned(rect.right > parentRect.right - rect.width);
      }
    }
  }, []);

  return (
    <div ref={itemRef} className="relative m-1 flex-grow cursor-default" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <motion.span
        className="bg-green-800 px-2 py-1 rounded flex items-center justify-center w-full overflow-hidden"
        animate={{
          scale: isOpen ? 1.05 : 1,
          backgroundColor: isOpen ? "rgb(21 128 61)" : "rgb(22 101 52)",
          boxShadow: isOpen ? "0 0 8px rgba(76, 234, 145, 0.5)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
        }}
      >
        <motion.div className="flex items-center justify-center w-full" animate={{ y: isOpen ? -2 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
          {React.cloneElement(icon, { className: "mr-1 text-green-300" })}
          {text}
        </motion.div>
      </motion.span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute z-10 bg-green-900 p-2 rounded shadow-lg mt-1 w-48 ${isRightAligned ? "right-0" : "left-0"}`}
            style={{
              backgroundColor: "rgb(21 128 61)",
              boxShadow: "0 0 8px rgba(76, 234, 145, 0.5)",
            }}
          >
            {projects.length > 0 ? (
              <>
                <p className="text-xs mb-2">Projects made using this stack:</p>
                <ul className="space-y-1">
                  {projects.map((project, index) => (
                    <li key={index} className="text-xs">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-200">
                        <FaGithub className="mr-1" size={12} />
                        {project.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-xs text-green-300">no public projects yet</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechStackItem;
