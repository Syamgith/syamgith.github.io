import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
