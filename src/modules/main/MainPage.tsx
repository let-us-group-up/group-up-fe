import { Suspense } from 'react';
import { useIntl } from '@libs/intl';
import Typography from '@libs/ui-kit/components/Typography';
// import Button from '@libs/ui-kit/components/Button';
// import { useLanguage } from '../../LanguageProvider';
// import UserView from './UserView';
import NextEventView from './NextEventView';

const MainPage: React.VFC = () => {
  const intl = useIntl();
  // const [language] = useLanguage();

  return (
    <>
      <Typography variant="h1">
        {intl.formatMessage({
          defaultMessage: "Let's group up FE",
          description: 'Main message',
        })}
      </Typography>

      {/* {intl.formatMessage({
        defaultMessage: "Wow that's awesome and {value}",
        description: 'Second message',
      }, { value: 'cool' })}

      <br />
      <br />

      <Button color="secondary">Click</Button>

      <Suspense fallback="Loading...">
        <UserView />
      </Suspense> */}

      <Suspense fallback="Loading...">
        <NextEventView />
      </Suspense>
      {/*
      <br />
      <br />

      <h4>
        {intl.formatMessage({
          defaultMessage: 'Current language is {language}',
          description: 'Language display',
        }, { language })}
      </h4> */}
    </>
  );
};

export default MainPage;
