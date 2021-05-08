import ReactDOM from 'react-dom';
import LanguageProvider from './languageProvider';
import App from './app';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.unstable_createRoot(root).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
