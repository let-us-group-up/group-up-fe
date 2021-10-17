import { useState, useCallback } from 'react';
import { Routes, Route } from '@libs/router';
import PageContainer from './PageContainer';
import PageContent from './PageContent';
import Header from './Header';
import MainPage from '../../modules/main/MainPage';
import EventsPage from '../../modules/events/EventsPage';
import AddNewEventPage from '../../modules/addNewEvent/AddNewEventPage';

import NavigationDrawer from './Navigation/NavigationDrawer';
import Navigation from './Navigation/Navigation';

const MainApp: React.VFC = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);

  const handleMenuIconClick = useCallback(() => {
    setNavigationMenuOpen(true);
  }, []);

  const handleNavigationMenuClose = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(() => {
    setNavigationMenuOpen(false);
  }, []);

  return (
    <PageContainer>
      <Header onMenuIconClick={handleMenuIconClick} />
      <NavigationDrawer
        open={navigationMenuOpen}
        onClose={handleNavigationMenuClose}
      >
        <Navigation
          onNavClick={handleNavClick}
        />
      </NavigationDrawer>
      <PageContent>
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="events/*"
            element={(
              <Routes>
                <Route
                  path="/"
                  element={<EventsPage />}
                />
                <Route
                  path="new"
                  element={<AddNewEventPage />}
                />
                <Route
                  path="*"
                  element={<div>404</div>}
                />
              </Routes>
            )}
          />
          <Route
            path="*"
            element={<div>404</div>}
          />
        </Routes>
      </PageContent>
    </PageContainer>
  );
};

export default MainApp;
