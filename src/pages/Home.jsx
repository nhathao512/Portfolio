import { Link } from "react-router-dom";
import { TypewriterText } from "../components/common/TypewriterText";

export const Home = () => {
  const stats = [
    { label: "Projects Completed", value: "6+" },
    { label: "Technologies", value: "15+" },
    { label: "Years Experience", value: "1+" },
  ];

  const featuredProjects = [
    {
      name: "Online Store",
      tech: "Angular • Spring Boot • MySQL",
      link: "/projects",
    },
    {
      name: "Homeify Mobile App",
      tech: "Flutter • Firebase",
      link: "/projects",
    },
  ];

  const techHighlights = [
    "Full-Stack Development",
    "Mobile App Development",
    "Cloud & Firebase",
    "REST API Design",
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-5xl">👋</span>
          <h1 className="text-4xl font-bold text-blue-400">
            Hi, I&apos;m <TypewriterText text="Võ Nhật Hào" speed={150} />
          </h1>
        </div>

        <p className="mb-6 text-xl leading-relaxed text-gray-300">
          Final-year <span className="font-semibold text-blue-300">Software Engineering</span>{" "}
          student at <span className="font-semibold text-blue-300">Ton Duc Thang University</span>,
          graduating 2026. Passionate about building{" "}
          <span className="font-semibold text-blue-300">full-stack web applications</span> and{" "}
          <span className="font-semibold text-blue-300">mobile apps</span> with modern technologies.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-600 hover:shadow-xl"
          >
            <span>View My Projects</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-gray-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-600"
          >
            <span>Get In Touch</span>
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-800/60"
          >
            <div className="mb-3 text-4xl">{stat.icon}</div>
            <div className="mb-1 text-3xl font-bold text-blue-400">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-blue-400">
          <span>⭐</span>
          Featured Projects
        </h2>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group rounded-xl border border-gray-600/30 bg-gray-700/50 p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-blue-400/50 hover:bg-gray-700/70"
            >
              <h3 className="mb-2 text-xl font-semibold text-blue-300 transition-colors group-hover:text-blue-400">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400">{project.tech}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-300"
        >
          <span>View all projects</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Tech Highlights */}
      <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
        <h2 className="mb-6 text-2xl font-semibold text-blue-400">What I Do</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {techHighlights.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg bg-gray-700/30 p-4 transition-colors hover:bg-gray-700/50"
            >
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span className="font-medium text-gray-300">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
