import { FC } from 'react';
import {
  ITheme,
  IThemeOptions,
} from './ITheme';
import { Styles, ClassNameMap } from './IStyles';

// Can be any theme (e.g. Material-UI, react-bootstrap or your own)
type ProviderTheme = any;

export const createTheme = (themeOptions: IThemeOptions): ProviderTheme => themeOptions;

export function makeStyles<
  ClassKey extends string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends Record<string, unknown> = {},
  Theme = ITheme,
>(styles: Styles<ClassKey, Props, Theme>): keyof Props extends never
  ? () => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey> {
  const useStyles = () => Object.keys(styles).reduce((acc, key) => {
    acc[key as ClassKey] = key;
    return acc;
  }, {} as ClassNameMap<ClassKey>);

  return useStyles as keyof Props extends never
    ? () => ClassNameMap<ClassKey>
    : (props: Props) => ClassNameMap<ClassKey>;
}

export interface ThemeDataProviderProps {
  theme: ProviderTheme;
}

const ThemeDataProvider: FC<ThemeDataProviderProps> = ({ children }) => <>{children}</>;

export default ThemeDataProvider;
