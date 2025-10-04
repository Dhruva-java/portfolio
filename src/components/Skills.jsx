import { FaJava, FaPython, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export default function Skills() {
   
  const skills = [
    { name: "C++", icon: <SiCplusplus size={40} className="text-blue-400" /> },
    { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
    { name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
    { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
    { name: "Linux", icon: <FaLinux size={40} className="text-green-400" /> },
  ];

  return (
    <section id="skills" className="w-full px-6 py-16  bg-gray-900 text-white"> 
    
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium">{skill.name}</p>
          </div>
        )) } 
      </div>
    </section>
  );
}
