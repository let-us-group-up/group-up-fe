import { useState, useCallback } from 'react';
import { Routes, Route } from '@libs/router';
import PageContainer from './PageContainer';
import PageContent from './PageContent';
import Header from './Header';
import MainPage from '../../modules/main/MainPage';
import CounterPage from '../../modules/counter/CounterPage';

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
            path="counter"
            element={<CounterPage />}
          />
        </Routes>
      </PageContent>
    </PageContainer>
  );
};

export default MainApp;
