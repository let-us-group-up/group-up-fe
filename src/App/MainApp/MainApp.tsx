import { useState, useCallback } from 'react';
import { Routes, Route, Link } from '@libs/router';
import { useIntl } from '@libs/intl';
import Drawer from '@libs/ui-kit/components/Drawer';
import List from '@libs/ui-kit/components/List';
import ListItem from '@libs/ui-kit/components/ListItem';
import ListItemText from '@libs/ui-kit/components/ListItemText';
import PageContainer from './PageContainer';
import PageContent from './PageContent';
import Header from './Header';
import MainPage from '../../modules/main/MainPage';
import CounterPage from '../../modules/counter/CounterPage';


const MainApp: React.VFC = () => {
  const intl = useIntl();
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);

  const handleMenuIconClick = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const handleNavigationMenuClose = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  const handleLinkClick = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  return (
    <PageContainer>
      <Header onMenuIconClick={handleMenuIconClick} />
      <Drawer
        open={navigationMenuOpen}
        onClose={handleNavigationMenuClose}
      >
        <List>
          <ListItem>
            <ListItemText
              primary={(
                <Link to="/" onClick={handleLinkClick}>
                  {intl.formatMessage({
                    defaultMessage: 'Main',
                    description: 'Link to the main page',
                  })}
                </Link>
              )}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={(
                <Link to="counter" onClick={handleLinkClick}>
                  {intl.formatMessage({
                    defaultMessage: 'Counter',
                    description: 'Link to the counter page',
                  })}
                </Link>
              )}
            />
          </ListItem>
        </List>
      </Drawer>
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
