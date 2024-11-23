import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Udesign",
      description: "An augmented reality app for home interior design",
    },
    { name: "Shopping App", description: "E-commerce mobile application" },
    { name: "News from Hacker News", description: "News aggregation platform" },
    { name: "Photogram", description: "A photo sharing App" },
    { name: "RealChat", description: "Realtime chatting app" },
  ];

  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h2 className="text-xl font-semibold text-white">My Projects</h2>
      <ul className="mt-2 text-gray-400 list-disc list-inside">
        {projects.map((project, index) => (
          <li key={index}>
            {project.name}: {project.description}
            <a className="text-purple-500 ml-2" href="#">
              GitHub Link
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
