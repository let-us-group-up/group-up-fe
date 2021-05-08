import { LANGUAGE, defaultLanguage } from './constants';
import TranslationsProviderFactory from './translationsProviderFactory';


const main = async () => {
  const translationsProviderName = process.argv[process.argv.length - 1];

  const translationsProvider = TranslationsProviderFactory(translationsProviderName);
  await translationsProvider.uploadDefaultLanguageTranslations();
  Promise.all(Object.keys(LANGUAGE).map(async (key) => {
    const languageKey = key as keyof typeof LANGUAGE;
    if (LANGUAGE[languageKey] === defaultLanguage) return;
    await translationsProvider.exportTranslations(LANGUAGE[languageKey]);
  }));
};


main();
