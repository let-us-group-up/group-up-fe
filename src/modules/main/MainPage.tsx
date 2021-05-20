import { Suspense } from 'react';
import { useIntl } from '@libs/intl';
import { useLanguage } from '../../LanguageProvider';
import { Language } from '../../../lang/constants';
import UserView from './UserView';

const MainPage: React.FC = () => {
  const intl = useIntl();
  const [language, changeLanguage] = useLanguage();

  return (
    <>
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

      <Suspense fallback="Loading...">
        <UserView />
      </Suspense>

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
    </>
  );
};

export default MainPage;
