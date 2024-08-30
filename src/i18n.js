import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ES_LANG from './i18n/translations/es.json';

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: ES_LANG,
    },
  },
  fallbackLng: 'es',
  lng: 'es',
  ns: ['translation'],
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
