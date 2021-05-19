import { Link as ReactRouterLink } from 'react-router-dom';
import { To, NavigateOptions } from './IRouter';

export interface LinkProps extends NavigateOptions {
  to: To;
}

const Link: React.FC<LinkProps> = ({ to, children }) => (
  <ReactRouterLink to={to}>
    {children}
  </ReactRouterLink>
);

export default Link;
