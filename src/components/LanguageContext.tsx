import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "TR" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  TR: {
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımızda",
    "nav.services": "Hizmetler",
    "nav.projects": "Projeler",
    "nav.partnerships": "İştirakler",
    "nav.calculator": "Maliyet Hesaplama",
    "nav.decoration": "Dekorasyon",
    "nav.blog": "Yapı Rehberi",
    "nav.contact": "İletişim",
    "nav.getQuote": "Teklif Alın",
    "hero.badge": "Lider İnşaat & Dekorasyon Çözümleri",
    "hero.title": "Hayallerinizi Güvenle İnşa Ediyoruz",
    "hero.subtitle": "25 yılı aşkın deneyimimizle konut, villa, otel ve endüstriyel tesis projelerinde anahtar teslim hizmet sunuyoruz.",
    "hero.ctaPrimary": "Maliyet Hesapla",
    "hero.ctaSecondary": "Projelerimizi İnceleyin",
    "calc.title": "İnteraktif Maliyet Hesaplama",
    "calc.subtitle": "Projenizin detaylarını girerek saniyeler içinde tahmini bütçe çıkarın ve doğrudan WhatsApp teklifi alın.",
    "calc.sendWhatsapp": "WhatsApp İle Hızlı Teklif Al",
    "projects.title": "Projelerimiz",
    "projects.subtitle": "Tamamladığımız başarılı projeler ve memnun müşterilerimiz",
    "projects.all": "Tüm Projeler",
    "projects.searchPlaceholder": "Proje adı, kategori veya şehir ara...",
    "testimonials.title": "Müşteri Yorumları & Referanslar",
    "testimonials.subtitle": "Memnun müşterilerimizin deneyimleri ve projelerimiz hakkındaki düşünceleri",
  },
  EN: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.partnerships": "Subsidiaries",
    "nav.calculator": "Cost Calculator",
    "nav.decoration": "Decoration",
    "nav.blog": "Building Guide",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",
    "hero.badge": "Leading Construction & Decoration Solutions",
    "hero.title": "Building Your Dreams With Confidence",
    "hero.subtitle": "With over 25 years of experience, we offer turn-key solutions for residential, villa, hotel, and industrial facility projects.",
    "hero.ctaPrimary": "Calculate Cost",
    "hero.ctaSecondary": "View Our Projects",
    "calc.title": "Interactive Cost Calculator",
    "calc.subtitle": "Enter your project details to get an estimated budget in seconds and receive an instant WhatsApp quote.",
    "calc.sendWhatsapp": "Get Fast WhatsApp Quote",
    "projects.title": "Our Projects",
    "projects.subtitle": "Our successfully completed projects and satisfied clients",
    "projects.all": "All Projects",
    "projects.searchPlaceholder": "Search project name, category or city...",
    "testimonials.title": "Testimonials & References",
    "testimonials.subtitle": "Experiences of our satisfied customers and their thoughts on our projects",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("peteks_lang");
    return (saved as Language) || "TR";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("peteks_lang", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["TR"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
