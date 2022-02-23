import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationCN from "./locale/translation-cn.json";
import translationEN from "./locale/translation-en.json";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const languages = [ 'cn', 'en'];
// i18n.use(initReactI18next).init({
//   // we init with resources
//   resources: {
//     cn: {
//       translation: translationCN
//     },
//     en: {
//       translation: translationEN
//     },
//     lng: "cn", // language to use
//     fallbackLng: "cn",
//     // have a common namespace used around the full app
//     ns: ["translation"],
//     defaultNS: "translation",
//     interpolation: {
//       escapeValue: false, // not needed for react!!
//     }
//   }
// });
i18n.use(Backend).use(initReactI18next).init({
  defaultNS: 'translation',
  fallbackLng: 'cn',
  debug: true,
  whitelist: languages,
  lng: 'cn',
  preload: ['cn', 'en'],
  backend: {
    loadPath: `${process.env.PUBLIC_URL}/assets/locales/{{lng}}.json`,
  },

  interpolation: {
    escapeValue: false,
  },
  // react: {
  //   useSuspense: false
  // }
});
export default i18n;