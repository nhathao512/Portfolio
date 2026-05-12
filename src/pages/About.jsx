import { Briefcase, Code, GraduationCap, Heart } from "lucide-react";

export const About = () => {
  const timeline = [
    {
      title: "Ton Duc Thang University",
      meta: "2022 - 2026",
      subtitle: "Bachelor of Software Engineering",
      description: "Expected graduation in 2026.",
      icon: GraduationCap,
    },
    {
      title: "Web Development",
      meta: "1+ Year",
      subtitle: "Full-stack applications",
      description:
        "Developed applications for education and commerce using React, Angular, Spring Boot, Node.js, and modern API patterns.",
      icon: Code,
    },
    {
      title: "Mobile Development",
      meta: "Flutter",
      subtitle: "Cross-platform apps",
      description:
        "Built mobile applications with Flutter, Dart, Firebase, Firestore, and cloud functions.",
      icon: Briefcase,
    },
  ];

  const interests = [
    {
      title: "AI & Machine Learning",
      desc: "Exploring how AI can make software more useful and adaptive.",
    },
    {
      title: "Open Source",
      desc: "Learning from real projects and improving through collaboration.",
    },
    {
      title: "Cloud Computing",
      desc: "Deploying scalable apps with cloud-friendly architecture.",
    },
    {
      title: "UI/UX Design",
      desc: "Creating interfaces that are clear, responsive, and pleasant to use.",
    },
  ];

  return (
    <div className="space-y-5 lg:space-y-8">
      <section className="scroll-reveal rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
        <h1 className="mb-5 text-3xl font-bold text-cyan-300 sm:text-4xl">About Me</h1>
        <p className="max-w-4xl text-base leading-relaxed text-gray-300 sm:text-lg">
          I am a passionate{" "}
          <span className="font-semibold text-cyan-200">software engineering student</span> at{" "}
          <span className="font-semibold text-cyan-200">Ton Duc Thang University</span>, graduating
          in 2026. With a strong interest in applying{" "}
          <span className="font-semibold text-cyan-200">technology and AI</span> to solve real-world
          problems, I aspire to become a skilled{" "}
          <span className="font-semibold text-cyan-200">full-stack developer</span> who contributes
          to useful, polished, and reliable products.
        </p>
      </section>

      <section className="scroll-reveal rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-cyan-300">
          <GraduationCap size={26} />
          Education & Experience
        </h2>

        <div className="space-y-5">
          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative border-l border-cyan-300/25 pl-6 sm:pl-8">
                <div className="absolute -left-2 top-1 flex h-4 w-4 rounded-full border border-cyan-200 bg-cyan-400" />
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10 sm:p-5">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                      <Icon size={20} className="text-cyan-300" />
                      {item.title}
                    </h3>
                    <span className="w-fit rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
                      {item.meta}
                    </span>
                  </div>
                  <p className="mb-1 font-medium text-cyan-100">{item.subtitle}</p>
                  <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="scroll-reveal rounded-lg border border-white/10 bg-slate-900/65 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-cyan-300">
          <Heart size={26} />
          Interests & Passions
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">{interest.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{interest.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
