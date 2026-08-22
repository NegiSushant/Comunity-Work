import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "hi" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// ===== Translation Dictionary =====
const translations: Record<Language, Record<string, string>> = {
  hi: {
    // Navbar
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.support": "सहयोग",
    "nav.gallery": "गैलरी",
    "nav.aboutCommunity": "समुदाय के बारे में",
    "nav.aboutPandit": "पंडित जी के बारे में",
    "nav.aboutVillage": "गाँव के बारे में",
    "nav.aboutDeveloper": "डेवलपर के बारे में",
    "nav.supportCommunity": "समुदाय का सहयोग",
    "nav.organizingEvents": "कार्यक्रम आयोजन",
    "nav.supportDeveloper": "डेवलपर का सहयोग",

    // Common
    "common.welcome": "माँ कालिंका मंदिर में आपका स्वागत है",
    "common.subtitle": "आध्यात्मिक जागरण का पवित्र स्थान",
    "common.readMore": "और पढ़ें",
    "common.home": "होम",

    // Hero & Home
    "home.templeGallery": "मंदिर गैलरी",
    "home.templeGalleryDesc":
      "माँ कालिंका मंदिर और आसपास की पहाड़ियों के पवित्र दृश्य",

    // About Community
    "aboutCommunity.title": "हमारे समुदाय के बारे में",
    "aboutCommunity.subtitle": "रणजीत मोक्षन की आत्मा",

    // About Village
    "aboutVillage.title": "रणजीत मोक्षन गाँव",
    "aboutVillage.subtitle": "पौड़ी गढ़वाल की पहाड़ियों में बसा एक सुंदर गाँव",

    // Support
    "support.communityTitle": "हमारे समुदाय का सहयोग करें",
    "support.developerTitle": "डेवलपर का सहयोग करें",
    "support.eventsTitle": "कार्यक्रम आयोजन",

    // Footer
    "footer.contact": "संपर्क करें",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.rights": "सर्वाधिकार सुरक्षित",
  },

  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.support": "Support",
    "nav.gallery": "Gallery",
    "nav.aboutCommunity": "About Community",
    "nav.aboutPandit": "About Pandit Ji",
    "nav.aboutVillage": "About Village",
    "nav.aboutDeveloper": "About Developer",
    "nav.supportCommunity": "Support Community",
    "nav.organizingEvents": "Organizing Events",
    "nav.supportDeveloper": "Support Developer",

    // Common
    "common.welcome": "Welcome to Maa Kalinka Mandir",
    "common.subtitle": "A holy place for spiritual awakening",
    "common.readMore": "Read More",
    "common.home": "Home",

    // Hero & Home
    "home.templeGallery": "Temple Gallery",
    "home.templeGalleryDesc":
      "Sacred views of Maa Kalinka Mandir and the surrounding hills",

    // About Community
    "aboutCommunity.title": "About Our Community",
    "aboutCommunity.subtitle": "The Heart of Ranjeet Moxan",

    // About Village
    "aboutVillage.title": "About Ranjeet Moxan",
    "aboutVillage.subtitle":
      "A Beautiful Village in the Hills of Pauri Garhwal",

    // Support
    "support.communityTitle": "Support Our Community",
    "support.developerTitle": "Support the Developer",
    "support.eventsTitle": "Organizing Events",

    // Footer
    "footer.contact": "Contact Us",
    "footer.quickLinks": "Quick Links",
    "footer.rights": "All Rights Reserved",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("hi"); // Hindi as default

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved === "hi" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "hi" ? "en" : "hi";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
