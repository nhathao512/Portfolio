import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Github,
  Layers3,
  ServerCog,
  Smartphone,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";

const filters = [
  { label: "All", icon: Layers3 },
  { label: "Web", icon: Code2 },
  { label: "Mobile", icon: Smartphone },
  { label: "AI", icon: BrainCircuit },
  { label: "Backend", icon: ServerCog },
];

const projects = [
  {
    title: "Smart Job Finder",
    description:
      "Job search ecosystem that connects candidates with relevant roles through AI-powered CV matching and interview simulation. I structured the product across web, admin, mobile, backend, AI service, realtime notifications, payment, and AWS deployment.",
    tags: [
      "Spring Boot",
      "Python/Flask",
      "Next.js",
      "React",
      "Flutter",
      "AI/ML",
      "MySQL",
      "Redis",
      "WebSocket",
      "Docker",
      "AWS",
    ],
    githubLink: "https://github.com/nhathao512",
    image: "/images/smart_job_finder.png",
    featured: true,
    categories: ["Web", "Mobile", "AI", "Backend"],
  },
  {
    title: "Online Store",
    description:
      "E-commerce platform focused on product browsing, order flow, and maintainable backend APIs. The project combines Angular, Spring Boot, MySQL, and Docker to practice a production-style full-stack architecture.",
    tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
    githubLink: "https://github.com/nhathao512/Online-Store",
    image: "/images/online_store.png",
    featured: true,
    categories: ["Web", "Backend"],
  },
  {
    title: "Homeify Mobile App",
    description:
      "Room rental management app designed for landlords and tenants. It streamlines listing, discovery, and rental workflows through a Flutter interface backed by Firebase services.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile"],
    githubLink: "https://github.com/nhathao512/homeify-mobile-app",
    images: [
      "/images/homeify1.png",
      "/images/homeify2.png",
      "/images/homeify3.png",
      "/images/homeify4.png",
      "/images/homeify5.png",
    ],
    featured: true,
    categories: ["Mobile", "Backend"],
  },
  {
    title: "Email Service Simulator",
    description:
      "Gmail-inspired mobile app that explores messaging workflows such as inbox organization, auto-reply, categorization, and realtime notifications with Flutter and Firebase.",
    tags: ["Flutter", "Firebase", "Cloud Functions", "Firestore"],
    githubLink: "https://github.com/nhathao512/Simulated-Email-Service-Application",
    images: [
      "/images/gmail1.png",
      "/images/gmail2.png",
      "/images/gmail3.png",
      "/images/gmail4.png",
      "/images/gmail5.png",
    ],
    featured: false,
    categories: ["Mobile", "Backend"],
  },
  {
    title: "BAANHEM Shopping Website",
    description:
      "Shopping website built to practice the full e-commerce surface: React UI, Node.js APIs, MongoDB persistence, and Dockerized setup for easier deployment.",
    tags: ["Node.js", "React", "MongoDB", "Tailwind CSS", "Docker"],
    githubLink: "https://github.com/nhathao512/shopping-website",
    image: "/images/baanhem.png",
    featured: false,
    categories: ["Web", "Backend"],
  },
  {
    title: "E-Commerce System",
    description:
      "E-commerce system emphasizing design patterns, product management, order tracking, authentication, and admin operations across a Java backend, React frontend, and MongoDB.",
    tags: ["Java", "React", "MongoDB", "Design Patterns"],
    githubLink: "https://github.com/nhathao512/E-Commerce-DP",
    featured: false,
    categories: ["Web", "Backend"],
  },
  {
    title: "Product Management",
    description:
      "Cross-platform product management app with a Flutter client and .NET Core REST API. The backend uses Repository Pattern and MySQL to keep data access organized and scalable.",
    tags: ["Flutter", "Dart", ".NET Core", "MySQL", "REST API"],
    githubLink: "https://github.com/nhathao512/Product-Management",
    featured: false,
    categories: ["Mobile", "Backend"],
  },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
      <div className="mb-8">
        <div>
          <h1 className="mb-3 text-3xl font-bold text-cyan-300 sm:text-4xl">Projects</h1>
          <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            A collection of full-stack, mobile, and AI-assisted products I have built while learning
            by shipping.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <div className="flex w-max min-w-full items-center gap-2 rounded-lg border border-white/10 bg-slate-950/35 p-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.label;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter.label)}
                    className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                      isActive
                        ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                        : "text-gray-300 hover:bg-white/10 hover:text-cyan-200"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Showing <span className="font-semibold text-cyan-200">{filteredProjects.length}</span>{" "}
            project{filteredProjects.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className={`scroll-reveal rounded-lg border bg-white/5 p-4 shadow-xl shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-6 ${
              project.featured ? "border-cyan-300/35" : "border-white/10"
            }`}
          >
            {project.featured && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                <Star size={14} />
                Featured
              </div>
            )}

            {project.image && (
              <div className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-slate-950/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[420px] w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            )}

            {project.images && (
              <div className="mb-4 flex gap-3 overflow-x-auto rounded-lg border border-white/10 bg-slate-950/50 p-3">
                {project.images.map((img, imgIndex) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    className="h-60 w-40 shrink-0 rounded-lg border border-white/10 object-contain sm:h-72 sm:w-48"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 font-medium text-cyan-300 transition-colors hover:text-cyan-200"
            >
              <Github size={18} />
              <span>View on GitHub</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
