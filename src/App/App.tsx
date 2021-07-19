import { Routes, Route } from '@libs/router';
import { ThemeProvider } from '@libs/ui-kit/styles';
import CssBaseline from '@libs/ui-kit/components/CssBaseline';
import MainApp from './MainApp';

const App: React.VFC = () => (
  <>
    <ThemeProvider>
      <CssBaseline />
      <Routes>
        <Route
          path="/*"
          element={<MainApp />}
        />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
