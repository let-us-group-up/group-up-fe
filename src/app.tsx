import { FC, useState } from 'react';
import { useIntl } from './intl';
import { Language } from '../lang/constants';
import { useLanguage } from './languageProvider';


const App: FC = () => {
  const [count, setCount] = useState(0);
  const [language, changeLanguage] = useLanguage();
  const intl = useIntl();

  return (
    <main>
      <h1>
        {intl.formatMessage({
          defaultMessage: "Let's group up FE",
          description: 'Main message',
        })}
      </h1>

      {intl.formatMessage({
        defaultMessage: "Wow that's awesome and {value}",
        description: 'Second message',
      }, { value: 'cool' })}

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
      {intl.formatMessage({
        defaultMessage: `
          You have {itemCount, plural,
            =0 {no items}
            one {1 item}
            other {{itemCount} items}
          }.
        `,
        description: 'Plural',
      }, { itemCount: count })}

      <br />
      <br />

      <h4>
        {intl.formatMessage({
          defaultMessage: 'Current language is {language}',
          description: 'Language display',
        }, { language })}
      </h4>
      <br />
      <select
        defaultValue={language}
        onChange={({ target }) => changeLanguage(target.value as Language)}
      >
        <option value={Language.En}>EN</option>
        <option value={Language.Ru}>RU</option>
      </select>
    </main>
  );
};

export default App;
