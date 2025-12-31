import { Technologies } from "../components/Technologies";

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
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-3">
          Skills & Technologies
        </h1>
        <p className="text-gray-400 text-lg">
          Technologies I've worked with across my projects
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/40 transition-colors"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-5 flex items-center gap-3">
              <span className="text-3xl">{category.icon}</span>
              {category.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-gray-600/30 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300 hover:scale-[1.02] border border-gray-600/30 hover:border-blue-400/30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-blue-300">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.projects.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="text-xs px-2.5 py-1 bg-blue-500/20 text-blue-200 rounded-full border border-blue-400/30"
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
