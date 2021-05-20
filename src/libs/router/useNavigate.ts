import { useNavigate as useReactRouterNavigate } from 'react-router-dom';
import { To, NavigateOptions } from './IRouter';

export type NavigateFunction = (to: To, options?: NavigateOptions) => void;

const useNavigate = (): NavigateFunction => {
  const navigate = useReactRouterNavigate();
  return (
    to,
    options,
  ) => navigate(to, options);
};

export default useNavigate;
