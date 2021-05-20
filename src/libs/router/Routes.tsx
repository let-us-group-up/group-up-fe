import { Routes as ReactRouterRoutes } from 'react-router-dom';

const Routes: React.FC = ({ children }) => (
  <ReactRouterRoutes>
    {children}
  </ReactRouterRoutes>
);

export default Routes;
