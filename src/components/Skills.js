import React from "react";

const Skills = () => {
  const skills = [
    { name: "Python", category: "Backend" },
    { name: "C#", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Flutter", category: "Frontend" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "PostgreSQL", category: "Tools" },
  ];

  return (
    <div className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          Skills
        </h2>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group/skill flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
