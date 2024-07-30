import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedASCII = () => {
  const [text, setText] = useState("");
  const finalText = `     _      _        _ _          
  __| | ___| |_ __ _| | |__   ___ 
 / _\` |/ _ \\ __/ _\` | | '_ \\ / _ \\
| (_| |  __/ || (_| | | | | |  __/
 \\__,_|\\___|\\__\\__,_|_|_| |_|\\___|
`;

  const chars = "/*-+|\\!@#$%^&*()";

  useEffect(() => {
    let iteration = 0;
    const lines = finalText.split("\n");
    const maxLength = Math.max(...lines.map((line) => line.length));

    const interval = setInterval(() => {
      setText(() => {
        return lines
          .map((line) =>
            line
              .padEnd(maxLength)
              .split("")
              .map((char, index) => {
                if (index === Math.floor(iteration) && char !== " ") {
                  return chars[Math.floor(Math.random() * chars.length)];
                } else if (index < Math.floor(iteration) && char !== " ") {
                  return char;
                }
                return " ";
              })
              .join("")
          )
          .join("\n");
      });

      if (iteration >= maxLength) {
        clearInterval(interval);
      }
      iteration += 0.3;
    }, 30);

    return () => clearInterval(interval);
  }, [finalText]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes neon {
        from {
          filter: blur(2px);
          opacity: 0.8;
        }
        to {
          filter: blur(4px);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="relative mb-4 pt-12 select-none"
      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
    >
      <motion.pre
        className="text-center text-xl leading-none whitespace-pre font-mono max-[485px]:text-[0.875rem] max-[360px]:text-[0.75rem] relative z-10"
        style={{
          lineHeight: 1,
        }}
      >
        {text}
      </motion.pre>
      <motion.pre
        className="text-center text-xl leading-none whitespace-pre font-mono max-[485px]:text-[0.875rem] max-[360px]:text-[0.75rem] absolute top-12 left-0 right-0 z-0"
        style={{
          lineHeight: 1,
          color: 'transparent',
          textShadow: '0 0 5px #4cea91, 0 0 10px #4cea91, 0 0 15px #4cea91, 0 0 20px #4cea91',
          animation: 'neon 1.5s ease-in-out infinite alternate',
        }}
      >
        {text}
      </motion.pre>
    </motion.div>
  );
};

export default AnimatedASCII;
