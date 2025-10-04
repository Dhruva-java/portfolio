// src/components/Navbar.jsx
import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["home", "about", "skills", "portfolio", "contact"]; // ✅ all sections

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold text-green-400">Dhruva S</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="text-green-400 border-b-2 border-green-400"
              className="cursor-pointer hover:text-green-400 transition pb-1"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          {sections.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="text-green-400 font-bold"
              className="block cursor-pointer hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

