export const translations = {
  pl: {
    nav: {
      projects: "Projekty",
    },
    header: {
      title: "Innowacyjne Rozwiązania Technologiczne",
      subtitle:
        "Dostarczamy przełomowe technologie, które napędzają biznes i zmieniają pomysły w gotowe produkty rynkowe.",
    },
    skills: {
      title: "Nasza Specjalizacja",
      items: {
        vision: {
          title: "Wizja Komputerowa",
          description:
            "Zaawansowane rozwiązania rozpoznawania obiektów, detekcji i śledzenia z wykorzystaniem najnowszych modeli AI dostosowanych do konkretnych potzeb.",
        },
        motion: {
          title: "Analiza Ruchu i Zachowań",
          description:
            "Systemy monitorowania, analizy ruchu i zachowań ludzi w czasie rzeczywistym dla zastosowań w bezpieczeństwie, monitoringu i optymalizacji procesów.",
        },
        biometrics: {
          title: "Biometria",
          description:
            "Kompleksowe rozwiązania identyfikacji w oparciu o rozpoznawanie twarzy i inne cechy biometryczne.",
        },
      },
    },
    projects: {
      title: "Nasze Projekty",
      goal: "Cel projektu",
      works: "Zrealizowane prace",
      links: {
        video: "Zobacz wideo",
        radon: "Projekt w systemie RAD-on",
        more: "Więcej informacji",
        radonShort: "RAD-on",
        moreShort: "Więcej",
      },
    },
    footer: {
      description:
        "Specjaliści w dziedzinie zaawansowanych technologii wizyjnych i rozwiązań opartych o sztuczną inteligencję.",
      copyright: "© 2025 DWK Technologies. Wszelkie prawa zastrzeżone.",
    },
    language: {
      pl: "Polski",
      en: "English",
    },
  },
  en: {
    nav: {
      projects: "Projects",
    },
    header: {
      title: "Innovative Technological Solutions",
      subtitle:
        "We deliver breakthrough technologies that drive business and turn ideas into market-ready products.",
    },
    skills: {
      title: "Our Specialization",
      items: {
        vision: {
          title: "Computer Vision",
          description:
            "Advanced object recognition, detection, and tracking solutions using the latest AI models tailored to specific needs.",
        },
        motion: {
          title: "Motion and Behavior Analysis",
          description:
            "Real-time human motion and behavior monitoring and analysis systems for security, monitoring, and process optimization applications.",
        },
        biometrics: {
          title: "Biometrics",
          description:
            "Comprehensive identification solutions based on facial recognition and other biometric features.",
        },
      },
    },
    projects: {
      title: "Our Projects",
      goal: "Project Goal",
      works: "Implemented Works",
      links: {
        video: "Watch video",
        radon: "Project in RAD-on system",
        more: "More information",
        radonShort: "RAD-on",
        moreShort: "More",
      },
    },
    footer: {
      description:
        "Specialists in advanced vision technologies and AI-based solutions.",
      copyright: "© 2025 DWK Technologies. All rights reserved.",
    },
    language: {
      pl: "Polski",
      en: "English",
    },
  },
};

// Tłumaczenia projektów
export const projectTranslations = {
  pl: {
    "Inteligentny system rozpoznawania uczestników wydarzeń sportowych": {
      title:
        "Inteligentny system rozpoznawania uczestników wydarzeń sportowych",
      description_full:
        "Celem projektu było stworzenie technologii umożliwiającej identyfikację i ponowne rozpoznawanie twarzy uczestników wydarzeń sportowych w czasie jego trwania. System zapewnia wysoką skuteczność detekcji opartej o techniki deep-metric learning, wspierając organizatorów w monitorowaniu uczestników i zwiększeniu poziomu bezpieczeństwa. Projekt został wdrożony na stadionie Piasta Gliwice.",
      details: [
        "Model głębokiego uczenia do re-identyfikacji twarzy",
        "Optymalizacja pod kątem wydajności na dużych zbiorach danych",
        "Badania w kontekście implementacji i skuteczności sytemu w trudnym środowisku i niesprzyjających warunkach",
      ],
    },
    "Środowisko rzeczywistości mieszanej do symulacji walk dronów": {
      title: "Środowisko rzeczywistości mieszanej do symulacji walk dronów",
      description_full:
        "Celem projektu było stworzenie środowiska walki dronów w rzeczywistości mieszanej (Mixed Reality), łączącego elementy rzeczywistości fizycznej i wirtualnej. System umożliwia precyzyjną synchronizację pozycji dronów w czasie rzeczywistym oraz dynamiczne wzbogacenie rejestrowanego otoczenia wirtualne obiekty i efekty (strzały, eksplozje, dym, itp.).",
      details: [
        "Integracja Unreal Engine 4 z systemem ROS",
        "Modyfikacje na poziomie silnika Unreal Engine 4",
        "Synchronizacja pozycji drona z jego cyfrowym modelem realizowana w czasie rzeczywistym",
        "Augmentacja otoczenia o obiekty generowane wirtualnie",
      ],
    },
    "System estymacji pozycji ciała, synchronizacji ruchu i oceny techniki sportowców":
      {
        title:
          "System estymacji pozycji ciała, synchronizacji ruchu i oceny techniki sportowców",
        description_full:
          "Celem projektu było opracowanie prototypu systemu umożliwiającego estymację pozycji ciała, synchronizację ruchu oraz ocenę jakości wykonywanych ruchów w aktywnościach sportowych. System wspiera analizę techniki sportowców, dostarczając precyzyjnych danych o ruchu w czasie rzeczywistym, co może być wykorzystane do treningu i optymalizacji wyników sportowych. Projekt komercyjny.",
        details: [
          "Algorytmy estymacji pozycji ciała do analizy ruchu sportowców",
          "Moduł synchronizacji z wzorcowymi sekwencjami ruchów",
          "System oceny jakości ruchu wykorzystujący dane biomechaniczne",
        ],
      },
    "Rozwiązanie do bezwzorcowej kalibracji systemów wielokamerowych": {
      title: "Rozwiązanie do bezwzorcowej kalibracji systemów wielokamerowych",
      description_full:
        "Celem projektu było opracowanie niestandardowego rozwiązania do kalibracji systemów wielokamerowych. System umożliwia precyzyjne wyznaczenie parametrów kamer do analizy obrazu w rzeczywistych warunkach operacyjnych i precyzyjnego estymowania pozycji obiektów w przestrzeni 3D w oparciu o kamery światła widzialnego.",
      details: [
        "Algorytmy kalibracji z wykorzystaniem rzeczywistych nagrań",
        "Estymacja parametrów kamer bez standardowych wzorców",
        "Metody analizy geometrii sceny",
      ],
    },
    "Algorytm personalizacji treści multimedialnych dla branży turystycznej": {
      title:
        "Algorytm personalizacji treści multimedialnych dla branży turystycznej",
      description_full:
        "Celem projektu było opracowanie zaawansowanego algorytmu selekcji danych multimedialnych oraz innowacyjnej metody ich wizualizacji w ramach galerii klienta w kontekście branży turystycznej w sposób zgodny z oczekiwaniami użytkownika co do częstości reprezentacji zdarzeń, ich różnorodności oraz atrakcyjności ze względu na ładunek emocjonalny.",
      details: [
        "Wykrywanie klienta na zdjęciach",
        "Detekcja ładunku emocjonalnego osób na zdjęciach",
        "Klasteryzacja hierarchiczna danych czasoprzestrzennych",
      ],
    },
    "Symulator Amniopunkcji": {
      title: "Symulator Amniopunkcji",
      description_full:
        "Celem projektu było stworzenie realistycznego systemu, w którym przyszli lekarze będą mogli nauczyć się wykonywania amniopunkcji w bezpiecznym środowisku. Projekt składa się z systemu VR i środowiska testowego z nią powiązanego.",
      details: [
        "Dopasowanie obrazu VR do rzeczywistego położenia modelu pacjenta",
        "Generowanie projekcji z wycinka trójwymiarowego modelu zdefiniowanego przez przetwornik ultradźwiękowy.",
        "System scenariuszy edukacyjnych",
      ],
    },
    "Uczelnia VR": {
      title: "Uczelnia VR",
      description_full:
        "Aplikacja w technologii VR, która umożliwia zdalne zwiedzanie, nawigację i udział w różnych aktywnościach studenckich Wyższej Szkoły Bankowej. Aplikacja umożliwia odbycie wirtualnego spaceru w trybie multiplayer, udział w wydarzeniach i wykładach, stworzenie własnego awatara, poruszanie się po uczelni oraz interakcję z obiektami i urządzeniami na terenie kampusu.",
      details: [
        "Aplikacja w trybie multiplayer pozawlająca na wspólne zwiedzanie ze znajomymi.",
        "System nawigacji w wirtualnym budynku uniwersyteckim",
        "System tworzenia i uczestniczenia w wydarzeniach.",
      ],
    },
  },
  en: {
    "Inteligentny system rozpoznawania uczestników wydarzeń sportowych": {
      title: "Smart participant recognition system for sports events",
      description_full:
        "The goal of the project was to create a technology that enables the identification and re-recognition of faces of sports event participants in real-time. The system provides high detection effectiveness based on deep-metric learning techniques, supporting organizers in monitoring participants and increasing security levels. The project was implemented at Piast Gliwice stadium.",
      details: [
        "Deep learning model for face re-identification",
        "Optimization for performance on large datasets",
        "Research on system implementation and effectiveness in challenging environments and adverse conditions",
      ],
    },
    "Środowisko rzeczywistości mieszanej do symulacji walk dronów": {
      title: "Mixed reality environment for drone battle simulations",
      description_full:
        "The project aimed to create a drone battle environment in mixed reality, combining elements of physical and virtual reality. The system enables precise synchronization of drone positions in real-time and dynamic enrichment of the recorded environment with virtual objects and effects (shots, explosions, smoke, etc.).",
      details: [
        "Integration of Unreal Engine 4 with ROS system",
        "Modifications at the Unreal Engine 4 level",
        "Real-time synchronization of drone position with its digital model",
        "Augmentation of surroundings with virtually generated objects",
      ],
    },
    "System estymacji pozycji ciała, synchronizacji ruchu i oceny techniki sportowców":
      {
        title:
          "Body position estimation system, movement synchronization and athlete technique assessment",
        description_full:
          "The goal of the project was to develop a prototype system enabling body position estimation, movement synchronization, and quality assessment of movements in sports activities. The system supports the analysis of athlete techniques, providing precise motion data in real-time, which can be used for training and performance optimization. Commercial project.",
        details: [
          "Body position estimation algorithms for athlete movement analysis",
          "Synchronization module with reference motion sequences",
          "Movement quality assessment system using biomechanical data",
        ],
      },
    "Rozwiązanie do bezwzorcowej kalibracji systemów wielokamerowych": {
      title: "Solution for patternless calibration of multi-camera systems",
      description_full:
        "The project aimed to develop a custom solution for calibrating multi-camera systems. The system allows precise determination of camera parameters for image analysis in real operating conditions and accurate estimation of object positions in 3D space based on visible light cameras.",
      details: [
        "Calibration algorithms using real recordings",
        "Camera parameter estimation without standard patterns",
        "Scene geometry analysis methods",
      ],
    },
    "Algorytm personalizacji treści multimedialnych dla branży turystycznej": {
      title:
        "Multimedia content personalization algorithm for the tourism industry",
      description_full:
        "The aim of the project was to develop an advanced algorithm for selecting multimedia data and an innovative method for their visualization within the client's gallery in the context of the tourism industry, in a way that meets user expectations regarding the frequency of event representation, their diversity, and attractiveness due to emotional charge.",
      details: [
        "Customer detection in photos",
        "Detection of emotional charge of people in photos",
        "Hierarchical clustering of spatiotemporal data",
      ],
    },
    "Symulator Amniopunkcji": {
      title: "Amniocentesis Simulator",
      description_full:
        "The aim of the project was to create a realistic system in which future doctors can learn to perform amniocentesis in a safe environment. The project consists of a VR system and a test environment associated with it.",
      details: [
        "Matching the VR image to the actual position of the patient model",
        "Generating projections from a section of a three-dimensional model defined by an ultrasound transducer",
        "Educational scenario system",
      ],
    },
    "Uczelnia VR": {
      title: "University VR",
      description_full:
        "A VR technology application that enables remote touring, navigation, and participation in various student activities at the WSB University. The application allows for a virtual tour in multiplayer mode, participation in events and lectures, creation of one's own avatar, navigation around the university, and interaction with objects and devices on the campus.",
      details: [
        "Multiplayer mode application allowing for touring with friends",
        "Navigation system in a virtual university building",
        "System for creating and participating in events",
      ],
    },
  },
};
