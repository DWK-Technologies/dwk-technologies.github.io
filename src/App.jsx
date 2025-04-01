import React from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <nav className="bg-gray-950/80 backdrop-blur-md py-4 px-8 sticky top-0 z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            DWK Technologies
          </h2>
          <div className="flex gap-6">
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors"
            >
              Projekty
            </a>
          </div>
        </div>
      </nav>

      <header className="py-24 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed pb-2 inline-block">
              Innowacyjne Rozwiązania Technologiczne
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Dostarczamy przełomowe technologie, które napędzają biznes i
            zmieniają pomysły w gotowe produkty rynkowe.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16">
        <div id="skills">
          <Skills />
        </div>

        <div id="projects" className="mt-24">
          <Projects />
        </div>
      </main>

      <footer className="bg-gray-950 mt-24 py-12 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start mb-8">
            <div className="md:max-w-xs">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                DWK Technologies
              </h3>
              <p className="text-gray-400">
                Specjaliści w dziedzinie zaawansowanych technologii wizyjnych i
                rozwiązań opartych o sztuczną inteligencję.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 DWK Technologies. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
