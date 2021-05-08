import {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  FC,
} from 'react';
import { IntlProvider } from 'react-intl';
import { LANGUAGE, defaultLanguage } from '../lang/constants';
import enMessages from '../lang/translations/en.json';
import ruMessages from '../lang/translations/ru.json';


const messages = {
  [LANGUAGE.EN]: enMessages,
  [LANGUAGE.RU]: ruMessages,
};


type ChangeLanguage = (newLanguage: LANGUAGE) => void;

type LanguageContext = [LANGUAGE, ChangeLanguage];

export const LanguageContext = createContext<LanguageContext>([
  defaultLanguage,
  (newLanguage: LANGUAGE) => newLanguage,
]);

export const useLanguage = (): LanguageContext => useContext(LanguageContext);


const LanguageProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<LANGUAGE>(defaultLanguage);

  const handleChangeLanguage: ChangeLanguage = useCallback((newLanguage: LANGUAGE) => {
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
