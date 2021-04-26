import { FC, useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
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


const App: FC = () => {
  const [language, setLanguage] = useState<LANGUAGE>(defaultLanguage);
  const [count, setCount] = useState(0);

  return (
    <IntlProvider messages={messages[language]} locale={language} defaultLocale={defaultLanguage}>
      <h1>
        <FormattedMessage defaultMessage="Let&apos;s group up FE" description="Main message" />
      </h1>

      <FormattedMessage defaultMessage="Wow that's awesome and {value}" description="Second message" values={{ value: 'cool' }} />

      <br />
      <br />

      <button
        type="button"
        disabled={count >= 10}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <button
        type="button"
        disabled={count <= 0}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <br />
      <FormattedMessage
        defaultMessage={`
          You have {itemCount, plural,
            =0 {no items}
            one {1 item}
            other {{itemCount} items}
          }.
        `}
        description="Plural"
        values={{ itemCount: count }}
      />

      <br />
      <br />

      <select onChange={({ target }) => setLanguage(target.value as LANGUAGE)}>
        <option value={LANGUAGE.EN}>EN</option>
        <option value={LANGUAGE.RU}>RU</option>
      </select>
    </IntlProvider>
  );
};

export default App;
