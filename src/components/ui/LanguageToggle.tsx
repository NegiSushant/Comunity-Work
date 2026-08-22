import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
                 bg-white/20 hover:bg-white/30 text-white border border-white/30"
      aria-label="Toggle language"
    >
      {language === "hi" ? "EN" : "हिं"}
    </button>
  );
};

export default LanguageToggle;
