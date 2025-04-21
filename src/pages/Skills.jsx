import { Technologies } from "../components/Technologies";

export const Skills = () => {
  const skills = [
    { name: "Node.js", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Mobile App Development (Java)", level: "Intermediate" },
    { name: "Flutter (Dart)", level: "Intermediate" },
    { name: "Machine Learning", level: "Beginner" },
    { name: "Big Data Processing", level: "Beginner" },
    { name: "Design Patterns", level: "Intermediate" },
  ];

  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">{skill.name}</h2>
            <p className="text-gray-300 text-lg">Level: {skill.level}</p>
          </div>
        ))}
      </div>
      <Technologies />
    </div>
    
  );
};

