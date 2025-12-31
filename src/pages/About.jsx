import { GraduationCap, Briefcase, Code, Heart } from "lucide-react";

export const About = () => (
  <div className="space-y-6">
    {/* Introduction Card */}
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">About Me</h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        I am a passionate{" "}
        <span className="text-blue-300 font-semibold">
          software engineering student
        </span>{" "}
        at{" "}
        <span className="text-blue-300 font-semibold">
          Ton Duc Thang University
        </span>
        , graduating in 2026. With a strong interest in applying{" "}
        <span className="text-blue-300 font-semibold">technology and AI</span>{" "}
        to solve real-world problems, I aspire to become a skilled{" "}
        <span className="text-blue-300 font-semibold">
          full-stack developer
        </span>{" "}
        who contributes to innovative projects that push the boundaries of
        traditional software development.
      </p>
    </div>

    {/* Education & Experience Timeline */}
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
        <GraduationCap size={28} />
        Education & Experience
      </h2>

      <div className="space-y-6">
        {/* Education */}
        <div className="relative pl-8 border-l-2 border-blue-400/30">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/60 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-blue-300">
                Ton Duc Thang University
              </h3>
              <span className="text-sm text-gray-400 bg-gray-600/50 px-3 py-1 rounded-full">
                2022 - 2026
              </span>
            </div>
            <p className="text-gray-300 font-medium mb-1">
              Bachelor of Software Engineering
            </p>
            <p className="text-gray-400 text-sm">Expected Graduation: 2026</p>
          </div>
        </div>

        {/* Web Development Experience */}
        <div className="relative pl-8 border-l-2 border-blue-400/30">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/60 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                <Code size={20} />
                Web Development
              </h3>
              <span className="text-sm text-gray-400 bg-gray-600/50 px-3 py-1 rounded-full">
                1+ Year
              </span>
            </div>
            <p className="text-gray-300">
              Developed full-stack web applications for the education industry
              using modern technologies like React, Angular, Spring Boot, and
              Node.js.
            </p>
          </div>
        </div>

        {/* Mobile Development Experience */}
        <div className="relative pl-8 border-l-2 border-blue-400/30">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/60 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
                <Briefcase size={20} />
                Mobile Development
              </h3>
              <span className="text-sm text-gray-400 bg-gray-600/50 px-3 py-1 rounded-full">
                Experience
              </span>
            </div>
            <p className="text-gray-300">
              Built cross-platform mobile applications using Flutter and Dart,
              with experience in Firebase integration and cloud functions.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Interests & Hobbies */}
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
        <Heart size={28} />
        Interests & Passions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-blue-300 mb-2">
              {interest.title}
            </h3>
            <p className="text-gray-400 text-sm">{interest.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
