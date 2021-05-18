import { useParams as useReactRouterParams } from 'react-router-dom';
import { Params } from './IRouter';

const useParams = (): Params => useReactRouterParams();

export default useParams;
