import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationCS from './locales/cs/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const resources = {
  cs: {
    translation: translationCS,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'cs',
  returnNull: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
