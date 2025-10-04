// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero({ darkMode, setDarkMode }) {
  const texts = ["Aspiring Software Developer", "Java Enthusiast", "Linux Learner"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing logic (smooth + complete)
  useEffect(() => {
    if (index >= texts.length) return;

    if (!deleting && subIndex === texts[index].length) {
      const timeout = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-32 transition-colors duration-700 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20 animate-gradient" />

      {/* Left side content */}
      <motion.div
        className="flex-1 space-y-6 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-green-400 font-medium">
          🌟 Available for Internships
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          <span className="border-b-4 border-green-400">
            {texts[index].substring(0, subIndex)}
            <span
              className={`inline-block w-[2px] h-6 ml-1 align-middle transition-opacity duration-200 ${
                blink ? "opacity-100" : "opacity-0"
              } ${darkMode ? "bg-green-400" : "bg-teal-500"}`}
            />
          </span>

          <span
            className={`block text-lg md:text-xl mt-3 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Learning Java | Open to Opportunities
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className={`max-w-lg ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Hi, I’m <b>Dhruva S</b>, a first-year student at Cambridge Institute
          of Technology. Passionate about coding, Linux, and open source.
          Looking forward to gaining real-world experience and growing as a
          developer 🚀.
        </motion.p>

        <motion.div variants={item} className="flex gap-4">
          <a
            href="#contact"
            className="bg-green-500 text-black px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Contact Me
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-green-400 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </motion.div>
      </motion.div>

      {/* Right side photo */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`w-72 h-[500px] rounded-xl overflow-hidden transition-all duration-700 ${
            darkMode
              ? "shadow-[0_0_35px_10px_rgba(34,197,94,0.6)] hover:shadow-[0_0_60px_20px_rgba(34,197,94,0.9)]"
              : "shadow-[0_0_35px_10px_rgba(13,148,136,0.5)] hover:shadow-[0_0_60px_20px_rgba(13,148,136,0.8)]"
          }`}
        >
          <img
            src="/yourphoto.jpg"
            alt="Dhruva"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

