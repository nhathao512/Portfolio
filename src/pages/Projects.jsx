export const Projects = () => {
  const projects = [
    {
      title: "Smart Job Finder",
      description:
        "Comprehensive job search platform with AI-powered CV matching and interview simulation. Features microservices architecture with Spring Boot backend, AI service using Python/Flask, Next.js web client, React admin dashboard, and Flutter mobile app. Includes real-time notifications, VNPay payment integration, and deployed on AWS EC2.",
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
        "Full-stack e-commerce platform with Angular frontend, Spring Boot backend, MySQL database, and Docker containerization. A robust and scalable solution for modern web applications.",
      tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
      githubLink: "https://github.com/nhathao512/Online-Store",
      image: "/images/online_store.png",
      featured: true,
    },
    {
      title: "Homeify Mobile App",
      description:
        "Mobile platform for room rental management built with Flutter. Streamlines the rental process for landlords and tenants with comprehensive features and intuitive interface.",
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
        "Gmail-inspired email application built with Flutter and Firebase. Features internal messaging, auto-reply, categorization, and real-time notifications - 70% functional parity with Gmail.",
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
        "Cross-platform product management system with Flutter mobile app and .NET Core REST API backend. Implements Repository Pattern with MySQL database for scalable architecture.",
      tags: ["Flutter", "Dart", ".NET Core", "MySQL", "REST API"],
      githubLink: "https://github.com/nhathao512/Product-Management",
      featured: false,
    },
  ];

  return (
    <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold text-blue-400">Projects</h1>
        <p className="text-lg text-gray-400">
          A collection of my recent work and personal projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl bg-gray-700/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-gray-700/70 hover:shadow-xl ${
              project.featured ? "border-2 border-blue-400/30" : ""
            }`}
          >
            {project.featured && (
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  ⭐ Featured
                </span>
              </div>
            )}

            {project.image && (
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-600/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            {project.images && (
              <div className="mb-4 flex gap-1 overflow-x-auto rounded-lg bg-gray-600/20 p-2">
                {project.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                    className="h-64 w-48 flex-shrink-0 rounded-lg object-contain transition-transform duration-300 hover:scale-105"
                  />
                ))}
              </div>
            )}

            <h2 className="mb-3 text-2xl font-semibold text-blue-400">{project.title}</h2>

            <p className="mb-4 text-base leading-relaxed text-gray-300">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-full bg-gray-600/50 px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:bg-blue-500/20 hover:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>View on GitHub</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
