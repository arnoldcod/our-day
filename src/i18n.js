import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import sw from './locales/sw/translation.json';
import ti from './locales/ti/translation.json';
import rw from './locales/rw/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      sw: { translation: sw },
      ti: { translation: ti },
      rw: { translation: rw },
    },
    lng: 'en', // default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
