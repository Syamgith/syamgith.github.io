import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Dreami Diary AI",
      description: (
        <>
          A diary app for your dreams with AI Interpreter. It's available in
          Playstore and web (
          <a
            href="https://dreamidiary.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline hover:text-purple-300"
          >
            dreamidiary.com
          </a>
          )
        </>
      ),
      githubLink: "https://github.com/Syamgith/ai-dream-journal",
      webLink: "https://dreamidiary.com",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.tinystars.dreamidiary",
      technologies: ["FastAPI", "Flutter", "Python", "PostgreSQL", "Docker"],
    },
    {
      name: "Udesign",
      description: "An augmented reality app for home interior design",
      githubLink: "https://github.com/yourusername/udesign",
      technologies: ["Flutter", "AR Kit", "Firebase"],
    },
    {
      name: "Shopping App",
      description: "E-commerce mobile application",
      githubLink: "https://github.com/Syamgith/shopping_app",

      technologies: ["Flutter", "Firebase"],
    },
    {
      name: "News from Hacker News",
      description: "News aggregation platform",
      githubLink: "https://github.com/Syamgith/news",
      technologies: ["Flutter", "Firebase", "Hacker News API"],
    },
  ];

  return (
    <div className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
          Projects
        </h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group/item bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-purple-400 group-hover/item:to-pink-400">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.webLink && (
                      <a
                        href={project.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                        aria-label="Live Demo"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.992.237-1.929.546-2.809.907-.877-1.321-1.451-2.86-1.616-4.518h3.932c.058 1.251.228 2.46.493 3.611zm.553 1.917c.345.991.776 1.909 1.272 2.753-1.237-.496-2.353-1.228-3.29-2.146.641-.234 1.31-.442 2.018-.607zm9.924 0c.708.165 1.377.373 2.018.607-.937.918-2.053 1.65-3.29 2.146.496-.844.927-1.762 1.272-2.753zm.553-1.917c.264-1.151.434-2.36.492-3.611h3.933c-.165 1.658-.739 3.197-1.617 4.518-.88-.361-1.816-.67-2.808-.907zm.009-9.262c.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.932c-.058-1.251-.228-2.46-.493-3.611zm-.553-1.917c-.345-.991-.776-1.909-1.272-2.753 1.237.496 2.353 1.228 3.29 2.146-.641.234-1.31.442-2.018.607z" />
                        </svg>
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Play Store"
                      >
                        <img
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          alt="Get it on Google Play"
                          style={{ height: 32, width: "auto" }}
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/20"
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

export default Projects;
