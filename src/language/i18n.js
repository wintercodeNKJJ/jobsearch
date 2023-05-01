import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import * as englishTrans from './language/en/Language.json';
import * as frenchTrans from './language/fr/Language.json';

const resources = {
  fr: {translation: frenchTrans},
  en: {translation: englishTrans}, 
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({  
    fallbackLng: "en",  
    debug: true,
    resources: resources,
    react: {  
      bindI18n: "languageChanged",  
      bindI18nStore: "",  
      transEmptyNodeValue: "",  
      transSupportBasicHtmlNodes: true,  
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],  
      useSuspense: false  
    }  
  });  
  
export default i18n;