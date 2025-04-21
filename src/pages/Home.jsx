export const Home = () => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6">Welcome! 👋</h1>
    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      I am a third-year Software Engineering student at Ton Duc Thang
      University, passionate about full-stack development, AI, and big data.
      With experience in web development, mobile apps, and UI/UX design, I aim
      to revolutionize software development using cutting-edge technologies.
    </p>

    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Core Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        "Node.js",
        "Java",
        "UI/UX Design",
        "Mobile App Development",
        "Machine Learning",
        "Big Data Processing",
        "Design Patterns",
      ].map((skill, index) => (
        <div
          key={index}
          className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-700/70 transition-colors"
        >
          <span className="text-gray-300">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);
