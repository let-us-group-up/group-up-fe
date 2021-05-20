import { Route as ReactRouterRoute } from 'react-router-dom';
import { Pathname } from './IRouter';

export interface RouteProps {
  path: Pathname;
  element: React.ReactElement;
}

const Route: React.FC<RouteProps> = ({
  path,
  element,
  children,
}) => (
  <ReactRouterRoute path={path} element={element}>
    {children}
  </ReactRouterRoute>
);

export default Route;
