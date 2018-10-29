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
  getCurrentLangKey: () => {
    const locale = localStorage.getItem('locale');
    if (!locale || !LANGS) localStorage.setItem('locale', DEFAULT_LOCALE);

    const currentLocale = LANGS.find(lang => lang.startsWith(locale));
    return currentLocale;
  },
};
