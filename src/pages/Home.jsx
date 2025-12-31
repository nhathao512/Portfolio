import { Link } from "react-router-dom";

export const Home = () => {
  const stats = [
    { label: "Projects Completed", value: "6+", icon: "🚀" },
    { label: "Technologies", value: "15+", icon: "💻" },
    { label: "Years Experience", value: "1+", icon: "⏱️" },
  ];

  const featuredProjects = [
    {
      name: "Online Store",
      tech: "Angular • Spring Boot • MySQL",
      link: "/project",
    },
    {
      name: "Homeify Mobile App",
      tech: "Flutter • Firebase",
      link: "/project",
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
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">👋</span>
          <h1 className="text-4xl font-bold text-blue-400">
            Hi, I'm Võ Nhật Hào
          </h1>
        </div>

        <p className="text-gray-300 text-xl leading-relaxed mb-6">
          Final-year{" "}
          <span className="text-blue-300 font-semibold">
            Software Engineering
          </span>{" "}
          student at{" "}
          <span className="text-blue-300 font-semibold">
            Ton Duc Thang University
          </span>
          , graduating 2026. Passionate about building{" "}
          <span className="text-blue-300 font-semibold">
            full-stack web applications
          </span>{" "}
          and <span className="text-blue-300 font-semibold">mobile apps</span>{" "}
          with modern technologies.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <span>View My Projects</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-blue-400/30"
          >
            <span>Get In Touch</span>
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:bg-gray-800/60 transition-all hover:scale-105"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl font-bold text-blue-400 mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
          <span>⭐</span>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/70 transition-all hover:scale-[1.02] border border-gray-600/30 hover:border-blue-400/50 group"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm">{project.tech}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/project"
          className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 group"
        >
          <span>View all projects</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Tech Highlights */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techHighlights.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
