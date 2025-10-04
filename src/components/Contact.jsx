// src/components/Contact.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 flex flex-col items-center"
    >
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-green-400 flex justify-center items-center gap-2">
          📩 Contact Me
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          I’m open to internship opportunities, collaborations, or projects that help me grow as a developer.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/dhruva-s-b9a758194/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-green-500/40 transition hover:scale-105 w-40"
          >
            <FaLinkedin size={40} className="text-blue-400 mb-3" />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Dhruva-java"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-green-500/40 transition hover:scale-105 w-40"
          >
            <FaGithub size={40} className="text-gray-300 mb-3" />
            <span className="text-lg font-medium">GitHub</span>
          </a>

          <a
            href="mailto:dhruvas721@gmail.com"
            className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-green-500/40 transition hover:scale-105 w-40"
          >
            <FaEnvelope size={40} className="text-red-400 mb-3" />
            <span className="text-lg font-medium">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

