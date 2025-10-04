import { FaGithub, FaExternalLinkAlt, FaHammer } from "react-icons/fa";

export default function Portfolio() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal website built with React + Tailwind",
      github: "https://github.com/Dhruva-java",
      live: "#",
    },
    {
      title: "Learning Java",
      desc: "Come With Me For My Software Journey :)",
      github: "https://github.com/Dhruva-java",
    },
    {
      title: "Mastering Ai",
      desc: "Currenting Mastering Ai For Making Works Easier",
      github: "https://github.com/Dhruva-java",
    },
    {
      title: "Coming Soon 🚧",
      desc: "Exciting new project in progress. Stay tuned!",
      icon: <FaHammer className="text-yellow-400 text-2xl" />,
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full px-6 py-16 bg-gradient-to-b from-gray-900 to-black"
    >
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        📂 Portfolio
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 hover:shadow-teal-500/50 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              {project.icon && project.icon} {project.title}
            </h3>
            <p className="text-gray-400 text-sm flex-grow">{project.desc}</p>

            <div className="mt-4 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
