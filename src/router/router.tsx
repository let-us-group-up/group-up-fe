import { BrowserRouter } from 'react-router-dom';

const Router: React.FC = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

export default Router;
