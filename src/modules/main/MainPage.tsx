import { Suspense } from 'react';
import { useIntl } from '@libs/intl';
import Typography from '@libs/ui-kit/components/Typography';
import { PageComponent } from '../Page';
import NextEventView from './NextEventView';

const MainPage: PageComponent = () => {
  const intl = useIntl();

  return (
    <>
      <Typography variant="h1">
        {intl.formatMessage({
          defaultMessage: "Let's group up FE",
          description: 'Main message',
        })}
      </Typography>

      <Suspense fallback="Loading...">
        <NextEventView />
      </Suspense>
    </>
  );
};

export default MainPage;
