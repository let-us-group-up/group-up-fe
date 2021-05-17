import {
  createContext,
  useCallback,
  useMemo,
  useContext,
  FC,
} from 'react';
import { IntlProvider, IntlProviderMessages } from './intl';
import browserStorage from './browserStorage';
import { localeStoreKey } from './constants';
import { Language, defaultLanguage } from '../lang/constants';


type ChangeLanguage = (newLanguage: Language) => void;

type LanguageContext = [Language, ChangeLanguage];

export const LanguageContext = createContext<LanguageContext>([
  defaultLanguage,
  (newLanguage: Language) => newLanguage,
]);

export const useLanguage = (): LanguageContext => useContext(LanguageContext);


export interface LanguageProviderProps {
  messages: IntlProviderMessages;
  locale: Language;
}

const LanguageProvider: FC<LanguageProviderProps> = ({
  messages,
  locale,
  children,
}) => {
  const handleChangeLanguage: ChangeLanguage = useCallback((newLanguage: Language) => {
    browserStorage.setItem(localeStoreKey, newLanguage);
    window.location.reload();
  }, []);

  const languageProviderValue: LanguageContext = useMemo(() => [
    locale,
    handleChangeLanguage,
  ], [handleChangeLanguage, locale]);

  return (
    <LanguageContext.Provider value={languageProviderValue}>
      <IntlProvider
        messages={messages}
        locale={locale}
        defaultLocale={defaultLanguage}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
