import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const fullText = "Dhruva S";
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [showOrbit, setShowOrbit] = useState(false);

  useEffect(() => {
    let timer;

    if (!deleting && text.length < fullText.length) {
      timer = setTimeout(
        () => setText(fullText.substring(0, text.length + 1)),
        120
      );
    } else if (text.length === fullText.length && !deleting) {
      timer = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(
        () => setText(fullText.substring(0, text.length - 1)),
        80
      );
    } else if (deleting && text.length === 0) {
      setShowOrbit(true);
      const endTimer = setTimeout(() => onFinish(), 1200);
      return () => clearTimeout(endTimer);
    }

    return () => clearTimeout(timer);
  }, [text, deleting]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1.2, delay: 4.3, ease: "easeInOut" }}
    >
      {/* Typing animation */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
        <motion.span
          className="border-b-4 border-green-500 inline-block ml-1 align-middle"
          initial={{ width: 0 }}
          animate={{ width: text ? "100%" : 0 }}
          transition={{ duration: 1 }}
        />
      </motion.h1>

      {/* Orbit glow after text erase */}
      {showOrbit && (
        <motion.div
          className="w-16 h-16 border-4 border-green-500 rounded-full mt-8 shadow-[0_0_30px_10px_rgba(34,197,94,0.8)]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 1, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}

