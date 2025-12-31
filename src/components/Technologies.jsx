import {
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaReact,
  FaDocker,
  FaGit,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiC } from "react-icons/si";

export const Technologies = () => {
  const techStack = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Java", icon: FaJava },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "MySQL", icon: FaDatabase },
    { name: "React", icon: FaReact },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGit },
    { name: "Python", icon: FaPython },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "PHP", icon: FaPhp },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "AWS", icon: FaAws },
    { name: "MongoDB", icon: SiMongodb },
    { name: "C", icon: SiC },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg mt-8 overflow-hidden">
      <h2 className="text-xl font-bold text-blue-400 mb-4">Technologies</h2>
      <div className="flex space-x-12 animate-marquee">
        {techStack.map((tech, index) => {
          const TechIcon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <TechIcon className="w-12 h-12 mb-2" />
              <span className="text-sm">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
