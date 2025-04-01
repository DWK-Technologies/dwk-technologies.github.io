import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import droneImage from "../assets/images/drone.png";
import reidentificationImage from "../assets/images/reidentification.png";
import mocapStudioImage from "../assets/images/mocap.png";
import poseImage from "../assets/images/pose.png";
import travelImage from "../assets/images/travel.png";

const projects = [
  {
    title: "Inteligentny system rozpoznawania uczestników wydarzeń sportowych",
    image: reidentificationImage,
    technologies: [".NET", "TensorFlow", "Torch"],
    video: "https://www.youtube.com/watch?v=cb5zNCzOy_4",
    radon_link:
      "https://radon.nauka.gov.pl/dane/profil/61828af0ee98f70780383b39",
    details: [
      "Model głębokiego uczenia do re-identyfikacji twarzy",
      "Optymalizacja pod kątem wydajności na dużych zbiorach danych",
      "Badania w kontekście implementacji i skuteczności sytemu w trudnym środowisku i niesprzyjających warunkach",
    ],
    description_full:
      "Celem projektu było stworzenie technologii umożliwiającej identyfikację i ponowne rozpoznawanie twarzy uczestników wydarzeń sportowych w czasie jego trwania. System zapewnia wysoką skuteczność detekcji opartej o techniki deep-metric learning, wspierając organizatorów w monitorowaniu uczestników i zwiększeniu poziomu bezpieczeństwa. Projekt został wdrożony na stadionie Piasta Gliwice.",
  },
  {
    title: "Środowisko rzeczywistości mieszanej do symulacji walk dronów",
    image: droneImage,
    technologies: ["Unreal Engine 4", "ROS", "OpenCV"],
    video: "https://www.youtube.com/watch?v=tCqF5VdbX5U",
    radon_link:
      "https://radon.nauka.gov.pl/dane/profil/61827f45ee98f70780383977",
    more_info_link: "https://www.bongomedia.tv/walki-dron%C3%B3w",
    details: [
      "Integracja Unreal Engine 4 z systemem ROS",
      "Modyfikacje na poziomie silnika Unreal Engine 4",
      "Synchronizacja pozycji drona z jego cyfrowym modelem realizowana w czasie rzeczywistym",
      "Augmentacja otoczenia o obiekty generowane wirtualnie",
    ],
    description_full:
      "Celem projektu było stworzenie środowiska walki dronów w rzeczywistości mieszanej (Mixed Reality), łączącego elementy rzeczywistości fizycznej i wirtualnej. System umożliwia precyzyjną synchronizację pozycji dronów w czasie rzeczywistym oraz dynamiczne wzbogacenie rejestrowanego otoczenia wirtualne obiekty i efekty (strzały, eksplozje, dym, itp.).",
  },
  {
    title:
      "System estymacji pozycji ciała, synchronizacji ruchu i oceny techniki sportowców",
    image: poseImage,
    technologies: ["Python", "Torch", "Uczenie głębokie"],
    details: [
      "Algorytmy estymacji pozycji ciała do analizy ruchu sportowców",
      "Moduł synchronizacji z wzorcowymi sekwencjami ruchów",
      "System oceny jakości ruchu wykorzystujący dane biomechaniczne",
    ],
    description_full:
      "Celem projektu było opracowanie prototypu systemu umożliwiającego estymację pozycji ciała, synchronizację ruchu oraz ocenę jakości wykonywanych ruchów w aktywnościach sportowych. System wspiera analizę techniki sportowców, dostarczając precyzyjnych danych o ruchu w czasie rzeczywistym, co może być wykorzystane do treningu i optymalizacji wyników sportowych. Projekt komercyjny.",
  },
  {
    title: "Rozwiązanie do bezwzorcowej kalibracji systemów wielokamerowych",
    image: mocapStudioImage,
    technologies: ["C#", "OpenCV", "Wizja komputerowa"],
    details: [
      "Algorytmy kalibracji z wykorzystaniem rzeczywistych nagrań",
      "Estymacja parametrów kamer bez standardowych wzorców",
      "Metody analizy geometrii sceny",
    ],
    description_full:
      "Celem projektu było opracowanie niestandardowego rozwiązania do kalibracji systemów wielokamerowych. System umożliwia precyzyjne wyznaczenie parametrów kamer do analizy obrazu w rzeczywistych warunkach operacyjnych i precyzyjnego estymowania pozycji obiektów w przestrzeni 3D w oparciu o kamery światła widzialnego.",
  },
  {
    title:
      "Algorytm personalizacji treści multimedialnych dla branży turystycznej",
    image: travelImage,
    technologies: [
      "Detekcja obiektów",
      "Klasteryzacja hierarchiczna",
      "Rozpoznawanie emocji",
    ],
    more_info_link: "https://postmytravel.com/",
    details: [
      "Wykrywanie klienta na zdjęciach",
      "Detekcja ładunku emocjonalnego osób na zdjęciach",
      "Klasteryzacja hierarchiczna danych czasoprzestrzennych",
    ],
    description_full:
      "Celem projektu było opracowanie zaawansowanego algorytmu selekcji danych multimedialnych oraz innowacyjnej metody ich wizualizacji w ramach galerii klienta w kontekście branży turystycznej w sposób zgodny z oczekiwaniami użytkownika co do częstości reprezentacji zdarzeń, ich różnorodności oraz atrakcyjności ze względu na ładunek emocjonalny.",
  },
  {
    title: "Symulator Amniopunkcji",
    image:
      "https://ibudzynski.pl/wp-content/uploads/Surgeric-Room-1920x1085-1.webp",
    technologies: ["Unity", "Symulator", "Rozszerzona Rzeczywistość"],
    video: "https://www.youtube.com/watch?v=eR55uhJoyvQ",
    more_info_link: "https://silsense.pl/symulator-badania-amniopunkcji/",
    details: [
      "Dopasowanie obrazu VR do rzeczywistego położenia modelu pacjenta",
      "Generowanie projekcji z wycinka trójwymiarowego modelu zdefiniowanego przez przetwornik ultradźwiękowy.",
      "System scenariuszy edukacyjnych",
    ],
    description_full:
      "Celem projektu było stworzenie realistycznego systemu, w którym przyszli lekarze będą mogli nauczyć się wykonywania amniopunkcji w bezpiecznym środowisku. Projekt składa się z systemu VR i środowiska testowego z nią powiązanego.",
  },
  {
    title: "Uczelnia VR",
    image:
      "https://ibudzynski.pl/wp-content/uploads/uczelnia_vr_hol-768x406.webp",
    technologies: ["Unity", "Symulator", "Rozszerzona Rzeczywistość"],
    more_info_link: "https://ibudzynski.pl/pl/vr-banking-school/",
    details: [
      "Aplikacja w trybie multiplayer pozawlająca na wspólne zwiedzanie ze znajomymi.",
      "System nawigacji w wirtualnym budynku uniwersyteckim",
      "System tworzenia i uczestniczenia w wydarzeniach.",
    ],
    description_full:
      "Aplikacja w technologii VR, która umożliwia zdalne zwiedzanie, nawigację i udział w różnych aktywnościach studenckich Wyższej Szkoły Bankowej. Aplikacja umożliwia odbycie wirtualnego spaceru w trybie multiplayer, udział w wydarzeniach i wykładach, stworzenie własnego awatara, poruszanie się po uczelni oraz interakcję z obiektami i urządzeniami na terenie kampusu.",
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section>
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed pb-2">
            Nasze Projekty
          </span>
        </h2>
      </div>

      <div className="relative py-10">
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={prevProject}
            className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white focus:outline-none transition-all duration-300 hover:scale-110"
            aria-label="Poprzedni projekt"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-gray-800/50 border border-gray-700/50 p-8 rounded-xl mx-12 backdrop-blur-sm shadow-xl transition-all duration-500 hover:border-gray-600/50">
          <div className="h-[550px] overflow-hidden rounded-lg bg-gray-900 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 z-10"></div>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 flex items-end">
              <div className="p-6 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-blue-500/20 hover:bg-blue-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {currentProject.title}
                </h3>
                <p className="text-gray-300">{currentProject.description}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-[550px] overflow-y-auto pr-2">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Cel projektu
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {currentProject.description_full}
              </p>

              <h3 className="text-xl font-bold text-white mb-4">
                Zrealizowane prace
              </h3>
              <ul className="space-y-4">
                {currentProject.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {currentProject.video && (
                <a
                  href={currentProject.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-teal-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2 font-medium">Zobacz wideo</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              {currentProject.radon_link && (
                <a
                  href={currentProject.radon_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-teal-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2 font-medium">
                    Projekt w systemie RAD-on
                  </span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              {currentProject.more_info_link && (
                <a
                  href={currentProject.more_info_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-teal-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2 font-medium">Więcej informacji</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={nextProject}
            className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white focus:outline-none transition-all duration-300 hover:scale-110"
            aria-label="Następny projekt"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-teal-400 scale-125"
                : "bg-gray-600 hover:bg-gray-500 hover:scale-110"
            }`}
            aria-label={`Przejdź do projektu ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
