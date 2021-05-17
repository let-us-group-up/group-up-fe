import Cookie from 'js-cookie';
import { IBrowserStorage } from './IBrowserStorage';

const browserStorage: IBrowserStorage = {
  setItem: (key: string, value: string) => Cookie.set(key, value),
  getItem: (key: string) => Cookie.get(key),
  removeItem: (key: string) => Cookie.remove(key),
};

export default browserStorage;
