import React, { createContext, useState, useContext, useEffect } from "react";
import { translations, projectTranslations } from "../locales/translations";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // Domyślny język to polski, ale sprawdzam lokalną pamięć
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "pl";
  });

  // Zachowujemy wybór języka w localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Funkcja do zmiany języka
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "pl" ? "en" : "pl"));
  };

  // Funkcja do pobierania tłumaczeń
  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];

    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        // Jeśli brakuje tłumaczenia, zwracamy klucz
        return key;
      }
    }

    return result;
  };

  // Funkcja do pobierania tłumaczeń projektów
  const getProjectTranslation = (originalTitle, field) => {
    if (!projectTranslations[language][originalTitle]) {
      return originalTitle;
    }

    return projectTranslations[language][originalTitle][field] || "";
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t, getProjectTranslation }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
