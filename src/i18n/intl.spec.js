import { getCurrentLangKey, getLocalizedPath } from './intl';

describe('i18n', () => {
  test('simple urls', () => {
    expect(getCurrentLangKey(['en', 'nl'], 'en', '/nl/test')).toBe('nl');
    expect(getCurrentLangKey(['en', 'nl'], 'en', '/nl')).toBe('nl');
  });

  test('unknown lang, return default language', () => {
    expect(getCurrentLangKey(['en', 'nl'], 'en', '/fr/test')).toBe('en');
  });

  test('no lang, return default language', () => {
    expect(getCurrentLangKey(['en', 'nl'], 'en', '')).toBe('en');
  });

  test('no languages, return default language', () => {
    expect(getCurrentLangKey([], 'en', '')).toBe('en');
    expect(getCurrentLangKey([], 'en', '')).toBe('en');
  });

  test('localizedPath - nl', () => {
    expect(getLocalizedPath('/', 'nl')).toBe('/');
    expect(getLocalizedPath('/en', 'nl')).toBe('/');
    expect(getLocalizedPath('/en/jobs', 'nl')).toBe('/jobs');
    expect(getLocalizedPath('/jobs', 'nl')).toBe('/jobs');
    expect(getLocalizedPath('jobs', 'nl')).toBe('/jobs');
  });

  test('localizedPath - en', () => {
    expect(getLocalizedPath('/', 'en')).toBe('/en');
    expect(getLocalizedPath('/en', 'en')).toBe('/en');
    expect(getLocalizedPath('/en/jobs', 'en')).toBe('/en/jobs');
    expect(getLocalizedPath('/jobs', 'en')).toBe('/en/jobs');
    expect(getLocalizedPath('jobs', 'en')).toBe('/en/jobs');
  });
});
