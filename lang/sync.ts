import { Language, defaultLanguage } from './constants';
import TranslationsProviderFactory from './translationsProviderFactory';


const main = async () => {
  const translationsProviderName = process.argv[process.argv.length - 1];

  const translationsProvider = TranslationsProviderFactory(translationsProviderName);
  await translationsProvider.uploadDefaultLanguageTranslations();
  Promise.all(Object.keys(Language).map(async (key) => {
    const languageKey = key as keyof typeof Language;
    if (Language[languageKey] === defaultLanguage) return;
    await translationsProvider.exportTranslations(Language[languageKey]);
  }));
};


main();
