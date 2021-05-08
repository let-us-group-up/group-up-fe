import { useState, FC } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../lang/translations/en.json';
import ruMessages from '../lang/translations/ru.json';

enum LANGUAGE {
  EN = 'en',
  RU = 'ru',
}
const defaultLanguage = LANGUAGE.EN;

const messages = {
  [LANGUAGE.EN]: enMessages,
  [LANGUAGE.RU]: ruMessages,
};


export interface LanguageProviderProps {

}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LANGUAGE>(defaultLanguage);

  return (
    <IntlProvider
      messages={messages[language]}
      locale={language}
      defaultLocale={defaultLanguage}
    >
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
