export const Technologies = () => {
    const techStack = [
      { name: "Node.js", icon: "🟢" },
      { name: "Java", icon: "☕" },
      { name: "MySQL", icon: "💾" },
      { name: "React", icon: "⚛️" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🔧" },
    ];
  
    return (
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-6 shadow-lg mt-8 overflow-hidden">
        <h2 className="text-xl font-bold text-cyan-400 mb-4">Technologies I Use</h2>
        <div className="relative w-full overflow-x-hidden">
          <div className="flex space-x-8 animate-marquee">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  