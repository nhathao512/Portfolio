export const Project = () => {
    const projects = [
      {
        title: "E-Learning Platform",
        description: "A web application for online courses, built with Node.js and React.",
        tags: ["Node.js", "React", "MongoDB"],
        githubLink: "https://github.com/yourusername/e-learning-platform",
      },
      {
        title: "Mobile Task Manager",
        description: "A cross-platform task manager app built with Dart and Flutter.",
        tags: ["Flutter", "Dart", "Firebase"],
        githubLink: "https://github.com/yourusername/task-manager",
      },
      {
        title: "AI Chatbot",
        description: "A machine learning-based chatbot for customer support.",
        tags: ["Python", "TensorFlow", "NLP"],
        githubLink: "https://github.com/yourusername/ai-chatbot",
      },
      {
        title: "Big Data Analysis",
        description: "A project analyzing large datasets using Python and Hadoop.",
        tags: ["Python", "Hadoop", "Data Analysis"],
        githubLink: "https://github.com/yourusername/big-data-analysis",
      },
    ];

  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h2>
            <p className="text-gray-300 text-lg mb-4">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};