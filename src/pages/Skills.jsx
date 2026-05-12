import { Code2, Database, MonitorSmartphone, ServerCog, Smartphone, Wrench } from "lucide-react";
import { Technologies } from "../components/common/Technologies";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: MonitorSmartphone,
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
      icon: ServerCog,
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
      icon: Smartphone,
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
      icon: Database,
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
      icon: Wrench,
      skills: [
        { name: "Docker", projects: ["Online Store", "BAANHEM Shopping"] },
        { name: "Git", projects: ["All Projects"] },
        { name: "Repository Pattern", projects: ["Product Management"] },
      ],
    },
  ];

  return (
    <section className="scroll-reveal rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
      <div className="mb-8">
        <h1 className="mb-3 flex items-center gap-3 text-3xl font-bold text-cyan-300 sm:text-4xl">
          <Code2 size={32} />
          Skills & Technologies
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          Technologies I have used across coursework, product builds, and personal projects.
        </p>
      </div>

      <div className="space-y-5">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <article
              key={category.category}
              className="scroll-reveal rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10 sm:p-6"
            >
              <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                  <Icon size={22} />
                </span>
                {category.category}
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-lg border border-white/10 bg-slate-950/30 p-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-cyan-200">{skill.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.projects.map((project) => (
                        <span
                          key={project}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <Technologies />
    </section>
  );
};
