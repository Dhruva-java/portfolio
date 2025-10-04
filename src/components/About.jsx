import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full px-6 py-20 bg-gray-900">
      <motion.div
        className="max-w-4xl mx-auto text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-teal-400 mb-6">👋 About Me</h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold text-white">Dhruva S</span>, 
          a first-year student at Cambridge Institute of Technology.  
          I’ve recently started my journey into programming, with a strong focus on 
          <span className="text-teal-400"> Java</span>.  
          I use <span className="text-teal-400">Linux</span> as my main operating system and love exploring 
          tools like <span className="text-teal-400">Git</span> and 
          <span className="text-teal-400"> GitHub</span> to manage my projects and code.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I’m passionate about learning new technologies and applying them to real-world problems.  
          My current goal is to gain valuable industry experience through a good internship, where I 
          can contribute, learn, and grow as a developer.
        </p>

        <p className="text-lg text-gray-400 italic">
          💡 Open to internships, collaborations, and projects that help me grow as a software developer.
        </p>
      </motion.div>
    </section>
  );
}