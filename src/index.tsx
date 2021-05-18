import ReactDOM from 'react-dom';
import { Language, defaultLanguage } from '../lang/constants';
import LanguageProvider from './languageProvider';
import App from './app';
import browserStorage from './browserStorage';
import { Router } from './router';
import { localeStoreKey } from './constants';

const root = document.getElementById('root') as HTMLElement;


const loadLocaleData = async (locale: Language) => {
  switch (locale) {
    case Language.En:
      return (await import('../lang/compiledTranslations/en.json')).default;
    case Language.Ru:
      return (await import('../lang/compiledTranslations/ru.json')).default;
    default:
      return (await import('../lang/compiledTranslations/en.json')).default;
  }
};

const bootstrapApplication = async (locale: Language, mainDiv: HTMLElement) => {
  const messages = await loadLocaleData(locale);
  ReactDOM.unstable_createRoot(mainDiv).render(
    <LanguageProvider locale={locale} messages={messages}>
      <Router>
        <App />
      </Router>
    </LanguageProvider>,
  );
};

const getLocale = (): Language => {
  const locale = browserStorage.getItem(localeStoreKey);
  switch (locale) {
    case 'en':
      return Language.En;
    case 'ru':
      return Language.Ru;
    default:
      return defaultLanguage;
  }
};

bootstrapApplication(getLocale(), root);
