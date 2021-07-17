import { Suspense } from 'react';
import { useIntl } from '@libs/intl';
import { useLanguage } from '../../LanguageProvider';
import UserView from './UserView';

const MainPage: React.FC = () => {
  const intl = useIntl();
  const [language] = useLanguage();

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
    </>
  );
};

export default MainPage;
