import { Routes, Route, Link } from '@libs/router';
import { useIntl } from '@libs/intl';
import PageContainer from './PageContainer';
import PageContent from './PageContent';
import Header from './Header';
import MainPage from '../../modules/main/MainPage';
import CounterPage from '../../modules/counter/CounterPage';


const MainApp: React.FC = () => {
  const intl = useIntl();

  return (
    <PageContainer>
      <Header />
      <Link to="/">
        {intl.formatMessage({
          defaultMessage: 'Main',
          description: 'Link to the main page',
        })}
      </Link>
      <Link to="counter">
        {intl.formatMessage({
          defaultMessage: 'Counter',
          description: 'Link to the counter page',
        })}
      </Link>
      <PageContent>
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="counter"
            element={<CounterPage />}
          />
        </Routes>
      </PageContent>
    </PageContainer>
  );
};

export default MainApp;
