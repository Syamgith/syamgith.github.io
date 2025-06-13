import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Unisys",
      role: "Software Engineer",
      period: "2022 August - 2025 March",
      location: "Bengaluru, India",
      description:
        "Contributed to the development and enhancement of ABSuite as part of the Windows Runtime team, focusing on delivering robust enterprise solutions and optimizing application performance.",
      achievements: [],
      technologies: ["C#", ".Net", "SQL", "C++"],
    },
    {
      company: "Unisys",
      role: "Intern",
      period: "2021 May - 2022 August",
      location: "Bengaluru, India",
      description:
        "Worked on a CI/CD pipeline for a project called Release Platform with include a full stack web interface and a backend REST API. I have worked on developing a new algorithm and workflow for selecting the branch to build to avoid conflits.",
      // achievements: ["Team work", "", ""],
      achievements: [],
      technologies: ["Django", "Python", "Angular", "CI/CD", "MySQL"],
    },
  ];

  return (
    <div className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group/exp relative pl-6 border-l-2 border-purple-500/20 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-purple-500/20 border-2 border-purple-500 group-hover/exp:bg-purple-500/40 transition-all duration-300"></div>
              <div className="space-y-2">
                <div className="transform hover:translate-x-1 transition-transform duration-300">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-white group-hover/exp:text-transparent group-hover/exp:bg-clip-text group-hover/exp:bg-gradient-to-r group-hover/exp:from-purple-400 group-hover/exp:to-pink-400">
                      {exp.role}
                    </h3>
                    <span className="text-purple-300 font-medium">
                      @ {exp.company}
                    </span>
                    <span className="text-sm bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {exp.achievements.length > 0 && (
                    <>
                      <span className="text-purple-300 font-medium">
                        Key Achievements:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <span key={i} className="text-gray-300 group/item">
                            {achievement}
                            {i < exp.achievements.length - 1 && (
                              <span className="text-purple-500/50 mx-1">•</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
