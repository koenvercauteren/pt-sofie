export const getValidLangKey = (langs, defaultLocale, locale) => {
  if (!locale || !langs) {
    return defaultLocale;
  }

  const currentLocale = langs.filter(lang => lang.startsWith(locale));
  return currentLocale[0] || defaultLocale;
};

export const getCurrentLangKey = (langs, defaultLocale, url) => {
  const locale = url.split('/')[1];
  return getValidLangKey(langs, defaultLocale, locale);
};

export const getLocalizedPath = (path, locale) => {
  let pathWithoutLocale = path.replace('/en', '');
  if (!pathWithoutLocale.startsWith('/')) {
    pathWithoutLocale = `/${pathWithoutLocale}`;
  }
  if (locale === 'nl') {
    return pathWithoutLocale || '/';
  }
  if (pathWithoutLocale === '/') {
    return '/en';
  }
  return `/en${pathWithoutLocale}`;
};
