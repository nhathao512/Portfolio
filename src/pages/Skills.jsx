import { Technologies } from "../components/common/Technologies";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", projects: ["BAANHEM Shopping", "E-Commerce System"] },
        { name: "Angular", projects: ["Online Store"] },
        { name: "Tailwind CSS", projects: ["BAANHEM Shopping"] },
        { name: "HTML/CSS", projects: ["All Projects"] },
        { name: "JavaScript", projects: ["All Projects"] },
      ],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", projects: ["BAANHEM Shopping"] },
        {
          name: "Java Spring Boot",
          projects: ["Online Store", "E-Commerce System"],
        },
        { name: ".NET Core", projects: ["Product Management"] },
        { name: "REST API", projects: ["Product Management", "Online Store"] },
        { name: "Design Patterns", projects: ["E-Commerce System"] },
      ],
    },
    {
      category: "Mobile Development",
      icon: "📱",
      skills: [
        {
          name: "Flutter",
          projects: ["Homeify", "Email Simulator", "Product Management"],
        },
        {
          name: "Dart",
          projects: ["Homeify", "Email Simulator", "Product Management"],
        },
        { name: "Firebase", projects: ["Homeify", "Email Simulator"] },
        { name: "Cloud Functions", projects: ["Email Simulator"] },
      ],
    },
    {
      category: "Database & Storage",
      icon: "💾",
      skills: [
        { name: "MySQL", projects: ["Online Store", "Product Management"] },
        {
          name: "MongoDB",
          projects: ["BAANHEM Shopping", "E-Commerce System"],
        },
        { name: "Firestore", projects: ["Email Simulator"] },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "🚀",
      skills: [
        { name: "Docker", projects: ["Online Store", "BAANHEM Shopping"] },
        { name: "Git", projects: ["All Projects"] },
        { name: "Repository Pattern", projects: ["Product Management"] },
      ],
    },
  ];

  return (
    <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold text-blue-400">Skills & Technologies</h1>
        <p className="text-lg text-gray-400">
          Technologies I&apos;ve worked with across my projects
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="rounded-xl bg-gray-700/30 p-6 backdrop-blur-sm transition-colors hover:bg-gray-700/40"
          >
            <h2 className="mb-5 flex items-center gap-3 text-2xl font-semibold text-blue-400">
              <span className="text-3xl">{category.icon}</span>
              {category.category}
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="rounded-lg border border-gray-600/30 bg-gray-600/30 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/30 hover:bg-gray-600/50"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-blue-300">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.projects.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="rounded-full border border-blue-400/30 bg-blue-500/20 px-2.5 py-1 text-xs text-blue-200"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Technologies />
    </div>
  );
};
