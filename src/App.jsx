import React from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useLanguage } from "./context/LanguageContext";
import { Globe } from "lucide-react";

function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <nav className="bg-gray-950/80 backdrop-blur-md py-4 px-8 sticky top-0 z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            DWK Technologies
          </h2>
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors"
            >
              {t("nav.projects")}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "pl" ? "EN" : "PL"}</span>
            </button>
          </div>
        </div>
      </nav>

      <header className="py-24 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed pb-2 inline-block">
              {t("header.title")}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {t("header.subtitle")}
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
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
