import {
  FaAws,
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiC, SiMongodb, SiSpringboot } from "react-icons/si";

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
    <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-slate-950/40 p-5 shadow-xl shadow-slate-950/10">
      <h2 className="mb-4 text-xl font-bold text-cyan-300">Technologies</h2>
      <div className="flex w-max animate-marquee gap-10 pr-10 hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((tech, index) => {
          const TechIcon = tech.icon;

          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex min-w-20 flex-col items-center justify-center text-gray-300 transition-colors duration-300 hover:text-cyan-300"
            >
              <TechIcon className="mb-2 h-10 w-10 sm:h-12 sm:w-12" />
              <span className="text-sm">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
