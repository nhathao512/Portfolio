import { ArrowUpRight, Github, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Smart Job Finder",
      description:
        "Comprehensive job search platform with AI-powered CV matching and interview simulation. Features microservices architecture with Spring Boot backend, AI service using Python/Flask, Next.js web client, React admin dashboard, and Flutter mobile app.",
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
    },
    {
      title: "Online Store",
      description:
        "Full-stack e-commerce platform with Angular frontend, Spring Boot backend, MySQL database, and Docker containerization.",
      tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
      githubLink: "https://github.com/nhathao512/Online-Store",
      image: "/images/online_store.png",
      featured: true,
    },
    {
      title: "Homeify Mobile App",
      description:
        "Mobile platform for room rental management built with Flutter. Streamlines the rental process for landlords and tenants with comprehensive features and an intuitive interface.",
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
    },
    {
      title: "Email Service Simulator",
      description:
        "Gmail-inspired email application built with Flutter and Firebase. Features internal messaging, auto-reply, categorization, and real-time notifications.",
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
    },
    {
      title: "BAANHEM Shopping Website",
      description:
        "E-commerce web application with Node.js backend, MongoDB database, and React + Tailwind CSS frontend. Fully containerized with Docker for easy deployment.",
      tags: ["Node.js", "React", "MongoDB", "Tailwind CSS", "Docker"],
      githubLink: "https://github.com/nhathao512/shopping-website",
      image: "/images/baanhem.png",
      featured: false,
    },
    {
      title: "E-Commerce System",
      description:
        "Comprehensive e-commerce platform with Java backend, ReactJS frontend, and MongoDB. Features product management, order tracking, user authentication, and admin dashboard.",
      tags: ["Java", "React", "MongoDB", "Design Patterns"],
      githubLink: "https://github.com/nhathao512/E-Commerce-DP",
      featured: false,
    },
    {
      title: "Product Management",
      description:
        "Cross-platform product management system with Flutter mobile app and .NET Core REST API backend. Implements Repository Pattern with MySQL database.",
      tags: ["Flutter", "Dart", ".NET Core", "MySQL", "REST API"],
      githubLink: "https://github.com/nhathao512/Product-Management",
      featured: false,
    },
  ];

  return (
    <section className="rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold text-cyan-300 sm:text-4xl">Projects</h1>
        <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          A collection of full-stack, mobile, and AI-assisted products I have built while learning
          by shipping.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`rounded-lg border bg-white/5 p-4 shadow-xl shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-6 ${
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
