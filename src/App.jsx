import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`min-h-screen transition-colors duration-700 ${
              darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
            }`}
          >
            <Navbar darkMode={darkMode} />
            <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

