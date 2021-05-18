import { useLocation as useReactRouterLocation } from 'react-router-dom';
import { Location } from './IRouter';

const useLocation = (): Location => {
  const location = useReactRouterLocation();

  return {
    pathname: location.pathname,
    search: location.search,
  };
};

export default useLocation;
