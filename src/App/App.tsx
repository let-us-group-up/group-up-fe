import { Routes, Route } from '@libs/router';
import CssBaseline from '@libs/ui-kit/components/CssBaseline';
import MainApp from './MainApp';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Routes>
      <Route
        path="/*"
        element={<MainApp />}
      />
    </Routes>
  </>
);

export default App;
