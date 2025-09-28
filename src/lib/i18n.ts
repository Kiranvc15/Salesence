import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // auto-detect language
  .use(initReactI18next) // react integration
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our website!",
          login: "Login",
          signup: "Sign Up",
          contact: "Contact Us",
          analysis: "Analysis",
        },
      },
      tr: {
        translation: {
          welcome: "Web sitemize hoş geldiniz!",
          login: "Giriş",
          signup: "Kayıt Ol",
          contact: "Bize Ulaşın",
          analysis: "Analiz",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
