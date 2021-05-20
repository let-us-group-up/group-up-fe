import { useMatch as useReactRouterMatch } from 'react-router-dom';
import { Path, PathMatch } from './IRouter';

const useMatch = (pattern: Path): PathMatch | null => {
  const match = useReactRouterMatch(pattern);

  return match && {
    path: match.path,
    pathname: match.pathname,
    params: match.params,
  };
};

export default useMatch;
