import { FC, ComponentProps } from 'react';
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

interface Styled {
  <C extends FC<ComponentProps<C>>>(component: C): <
    // eslint-disable-next-line @typescript-eslint/ban-types
    StyleProps extends Record<string, unknown> = {},
    Theme = ITheme,
  >(callback: (params: {
      theme: Theme;
    }
      & ComponentProps<C>
      & StyleProps
  ) => string) => FC<ComponentProps<C> & StyleProps>;

  <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): <
    // eslint-disable-next-line @typescript-eslint/ban-types
    StyleProps extends Record<string, unknown> = {},
    Theme = ITheme,
  >(callback: (params: {
      theme: Theme;
    }
      & JSX.IntrinsicElements[Tag]
      & StyleProps
  ) => string) => FC<JSX.IntrinsicElements[Tag] & StyleProps>;
}

// Can be any styled implementation (e.g. emotion, styled-components or your own)
// Any for proper handling of an overload
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const styled: Styled = (component: any) => () => component;

export interface ThemeDataProviderProps {
  theme: ProviderTheme;
}

const ThemeDataProvider: FC<ThemeDataProviderProps> = ({ children }) => <>{children}</>;

export default ThemeDataProvider;
