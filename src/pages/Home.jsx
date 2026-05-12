import { ArrowRight, BriefcaseBusiness, Mail } from "lucide-react";
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
      name: "Smart Job Finder",
      tech: "Spring Boot, Next.js, Flutter, AI/ML, AWS",
      link: "/projects",
    },
    {
      name: "Homeify Mobile App",
      tech: "Flutter, Dart, Firebase",
      link: "/projects",
    },
  ];

  const techHighlights = [
    "Full-stack web development",
    "Mobile app development",
    "Cloud and Firebase integration",
    "REST API design",
  ];

  return (
    <div className="space-y-5 lg:space-y-8">
      <section className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
        {/* <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-200">
          <Sparkles size={16} />
          Available for internship and junior roles
        </div> */}

        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Hi, I&apos;m{" "}
          <TypewriterText
            text="Võ Nhật Hào"
            speed={115}
            loop={false}
            className="inline-block min-w-[7.5ch]"
          />
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Final-year <span className="font-semibold text-cyan-200">Software Engineering</span>{" "}
          student at <span className="font-semibold text-cyan-200">Ton Duc Thang University</span>,
          graduating in 2026. I build practical full-stack web applications and mobile apps with a
          strong interest in AI-powered product experiences.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
          >
            <BriefcaseBusiness size={18} />
            <span>View Projects</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/10"
          >
            <Mail size={18} />
            <span>Get In Touch</span>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-white/10 bg-slate-900/55 p-5 shadow-xl shadow-slate-950/10 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-300/30"
          >
            <div className="mb-1 text-3xl font-bold text-cyan-300">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
        <h2 className="mb-5 text-2xl font-semibold text-cyan-300">Featured Projects</h2>
        <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.name}
              to={project.link}
              className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">{project.tech}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-medium text-cyan-300 hover:text-cyan-200"
        >
          <span>View all projects</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <section className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
        <h2 className="mb-5 text-2xl font-semibold text-cyan-300">What I Do</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {techHighlights.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-amber-300" />
              <span className="font-medium text-gray-200">{tech}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
