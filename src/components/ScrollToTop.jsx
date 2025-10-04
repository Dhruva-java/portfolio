// src/components/ScrollToTop.jsx
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function ScrollToTop({ darkMode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {visible && (
        <button
          onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
          className={`p-3 rounded-full shadow-lg hover:scale-110 transition ${
            darkMode
              ? "bg-green-500 text-black"
              : "bg-black text-white"
          }`}
        >
          ⬆
        </button>
      )}
    </div>
  );
}
