import { Routes, Route } from '@libs/router';
import CssBaseline from '@libs/ui-kit/components/CssBaseline';
import { ThemeProvider } from '@libs/ui-kit/styles';
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
