import React from "react";

const About = () => {
  return (
    <div className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          About me
        </h2>
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Software engineer with demonstrated experience in the coding and
            software industry. My experience helps me to always adopt new
            technologies and to solve complex issues.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/20">
              Problem Solver
            </span>
            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/20">
              Quick Learner
            </span>
            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/20">
              Team Player
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
