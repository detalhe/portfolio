import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="App flex justify-center min-h-screen w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <Layout />
      </motion.div>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
