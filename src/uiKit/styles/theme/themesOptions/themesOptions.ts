import { IThemeOptions } from '../ITheme';
import lightTheme from './variants/light';

export enum ThemeName {
  Light,
}

type IThemesOptions = Record<ThemeName, IThemeOptions>;

const themes: IThemesOptions = {
  [ThemeName.Light]: lightTheme,
};

export default themes;
