import Adapter from './adapter';

export {
  default as ThemeProvider,
  useThemeName,
} from './theme/themeProvider';
export { ThemeName } from './theme/themesOptions';
export type { IAdapter } from './adapter';
export const { styled } = Adapter;
