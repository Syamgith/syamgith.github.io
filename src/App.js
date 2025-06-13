import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50">
          <div className="p-6 md:p-8">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="md:col-span-2">
                <About />
              </div>
              <div className="md:col-span-2">
                <Experience />
              </div>
              <Skills />
              <Projects />
              <div className="md:col-span-2">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
