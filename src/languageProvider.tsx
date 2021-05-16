import {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  FC,
} from 'react';
import { IntlProvider } from 'react-intl';
import { Language, defaultLanguage } from '../lang/constants';
import enMessages from '../lang/translations/en.json';
import ruMessages from '../lang/translations/ru.json';


const messages = {
  [Language.En]: enMessages,
  [Language.Ru]: ruMessages,
};


type ChangeLanguage = (newLanguage: Language) => void;

type LanguageContext = [Language, ChangeLanguage];

export const LanguageContext = createContext<LanguageContext>([
  defaultLanguage,
  (newLanguage: Language) => newLanguage,
]);

export const useLanguage = (): LanguageContext => useContext(LanguageContext);


const LanguageProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const handleChangeLanguage: ChangeLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, []);

  const languageProviderValue: LanguageContext = useMemo(() => [
    language,
    handleChangeLanguage,
  ], [handleChangeLanguage, language]);

  return (
    <LanguageContext.Provider value={languageProviderValue}>
      <IntlProvider
        messages={messages[language]}
        locale={language}
        defaultLocale={defaultLanguage}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;