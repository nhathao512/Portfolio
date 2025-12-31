import { GraduationCap, Briefcase, Code, Heart } from "lucide-react";

export const About = () => (
  <div className="space-y-6">
    {/* Introduction Card */}
    <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
      <h1 className="mb-6 text-4xl font-bold text-blue-400">About Me</h1>
      <p className="text-lg leading-relaxed text-gray-300">
        I am a passionate{" "}
        <span className="font-semibold text-blue-300">software engineering student</span> at{" "}
        <span className="font-semibold text-blue-300">Ton Duc Thang University</span>, graduating in
        2026. With a strong interest in applying{" "}
        <span className="font-semibold text-blue-300">technology and AI</span> to solve real-world
        problems, I aspire to become a skilled{" "}
        <span className="font-semibold text-blue-300">full-stack developer</span> who contributes to
        innovative projects that push the boundaries of traditional software development.
      </p>
    </div>

    {/* Education & Experience Timeline */}
    <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-blue-400">
        <GraduationCap size={28} />
        Education & Experience
      </h2>

      <div className="space-y-6">
        {/* Education */}
        <div className="relative border-l-2 border-blue-400/30 pl-8">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-400"></div>
          <div className="rounded-xl bg-gray-700/50 p-6 backdrop-blur-sm transition-colors hover:bg-gray-700/60">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-blue-300">Ton Duc Thang University</h3>
              <span className="rounded-full bg-gray-600/50 px-3 py-1 text-sm text-gray-400">
                2022 - 2026
              </span>
            </div>
            <p className="mb-1 font-medium text-gray-300">Bachelor of Software Engineering</p>
            <p className="text-sm text-gray-400">Expected Graduation: 2026</p>
          </div>
        </div>

        {/* Web Development Experience */}
        <div className="relative border-l-2 border-blue-400/30 pl-8">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-400"></div>
          <div className="rounded-xl bg-gray-700/50 p-6 backdrop-blur-sm transition-colors hover:bg-gray-700/60">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-300">
                <Code size={20} />
                Web Development
              </h3>
              <span className="rounded-full bg-gray-600/50 px-3 py-1 text-sm text-gray-400">
                1+ Year
              </span>
            </div>
            <p className="text-gray-300">
              Developed full-stack web applications for the education industry using modern
              technologies like React, Angular, Spring Boot, and Node.js.
            </p>
          </div>
        </div>

        {/* Mobile Development Experience */}
        <div className="relative border-l-2 border-blue-400/30 pl-8">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-400"></div>
          <div className="rounded-xl bg-gray-700/50 p-6 backdrop-blur-sm transition-colors hover:bg-gray-700/60">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-300">
                <Briefcase size={20} />
                Mobile Development
              </h3>
              <span className="rounded-full bg-gray-600/50 px-3 py-1 text-sm text-gray-400">
                Experience
              </span>
            </div>
            <p className="text-gray-300">
              Built cross-platform mobile applications using Flutter and Dart, with experience in
              Firebase integration and cloud functions.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Interests & Hobbies */}
    <div className="rounded-2xl bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-blue-400">
        <Heart size={28} />
        Interests & Passions
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {[
          {
            title: "AI & Machine Learning",
            desc: "Exploring how AI can transform software development",
          },
          {
            title: "Open Source",
            desc: "Contributing to and learning from open-source projects",
          },
          {
            title: "Cloud Computing",
            desc: "Building scalable applications with cloud technologies",
          },
          {
            title: "UI/UX Design",
            desc: "Creating beautiful and intuitive user experiences",
          },
        ].map((interest, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-700/30 p-4 transition-colors hover:bg-gray-700/50"
          >
            <h3 className="mb-2 text-lg font-semibold text-blue-300">{interest.title}</h3>
            <p className="text-sm text-gray-400">{interest.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
