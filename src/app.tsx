import { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { LANGUAGE } from '../lang/constants';
import { useLanguage } from './languageProvider';


const App: FC = () => {
  const [count, setCount] = useState(0);
  const [language, changeLanguage] = useLanguage();

  return (
    <main>
      <h1>
        <FormattedMessage defaultMessage="Let's group up FE" description="Main message" />
      </h1>

      <FormattedMessage
        defaultMessage="Wow that's awesome and {value}"
        description="Second message"
        values={{ value: 'cool' }}
      />

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

      <h4>
        <FormattedMessage
          defaultMessage="Current language is {language}"
          description="Language display"
          values={{ language }}
        />
      </h4>
      <br />
      <select onChange={({ target }) => changeLanguage(target.value as LANGUAGE)}>
        <option value={LANGUAGE.EN}>EN</option>
        <option value={LANGUAGE.RU}>RU</option>
      </select>
    </main>
  );
};

export default App;
