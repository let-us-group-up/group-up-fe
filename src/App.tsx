import { Routes, Route, Link } from '@libs/router';
import MainPage from './modules/main/MainPage';
import CounterPage from './modules/counter/CounterPage';

const App: React.FC = () => (
  <main>
    <Link to="/">Main</Link>
    {' '}
    <Link to="counter">Counter</Link>
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
  </main>
);

export default App;
