import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationUZ from "./locales/uz/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  uz: {
    translation: translationUZ,
  },
  ru: {
    translation: translationRU,
  },
  en: {
    translation: translationEN,
  },
};
i18n
  .use(initReactI18next)

  .init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
