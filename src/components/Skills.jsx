import React from "react";
import { Camera, Activity, Fingerprint } from "lucide-react";

const skills = [
  {
    icon: <Camera className="w-12 h-12 text-blue-500" />,
    title: "Wizja Komputerowa",
    description:
      "Zaawansowane rozwiązania rozpoznawania obiektów, detekcji i śledzenia z wykorzystaniem najnowszych modeli AI dostosowanych do konkretnych potzeb.",
  },
  {
    icon: <Activity className="w-12 h-12 text-teal-400" />,
    title: "Analiza Ruchu i Zachowań",
    description:
      "Systemy monitorowania, analizy ruchu i zachowań ludzi w czasie rzeczywistym dla zastosowań w bezpieczeństwie, monitoringu i optymalizacji procesów.",
  },
  {
    icon: <Fingerprint className="w-12 h-12 text-indigo-400" />,
    title: "Biometria",
    description:
      "Kompleksowe rozwiązania identyfikacji w oparciu o rozpoznawanie twarzy i inne cechy biometryczne.",
  },
];

function Skills() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed pb-2">
            Nasza Specjalizacja
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl hover:translate-y-[-5px] transition-all duration-300 group"
          >
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-lg bg-gray-900/80 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-teal-400/20 transition-colors">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors">
              {skill.title}
            </h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
