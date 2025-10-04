import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}>
      <Navbar darkMode={darkMode} />
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop darkMode={darkMode} />
    </div>
  );
}

export default App;
