import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { Language, defaultLanguage } from '../lang/constants';
import LanguageProvider from './LanguageProvider';
import App from './App';
import browserStorage from './browserStorage';
import { Router } from './router';
import { localeStoreKey } from './constants';
import relayEnvironment from './graphql/relayEnvironment';

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
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <LanguageProvider locale={locale} messages={messages}>
        <Router>
          <App />
        </Router>
      </LanguageProvider>
    </RelayEnvironmentProvider>,
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
