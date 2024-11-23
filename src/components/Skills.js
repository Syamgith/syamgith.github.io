import React from "react";

const Skills = () => {
  const skills = ["Python", "Flutter", "C sharp", "JavaScript", "SQL", "GIT"];
  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h2 className="text-xl font-semibold text-white">Skills</h2>
      <ul className="mt-2 text-gray-400 list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
