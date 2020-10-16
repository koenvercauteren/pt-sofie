import enMessages from './messages/en';
import nlMessages from './messages/nl';

const DEFAULT_LOCALE = 'nl';
const LANGS = ['en', 'nl'];

module.exports = {
  messages: {
    nl: nlMessages,
    en: enMessages,
  },
  defaultLocale: DEFAULT_LOCALE,
  languages: LANGS,
};
