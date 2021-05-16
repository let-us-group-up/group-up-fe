/* eslint-disable @typescript-eslint/ban-types */
import { FC, ComponentProps } from 'react';
import { ITheme, IThemeOptions } from '../theme/ITheme';

interface Styled {
  <C extends FC<ComponentProps<C>>>(component: C): <
    StyleProps extends Record<string, unknown> = {},
  >(callback: (params: {
      theme: ITheme;
    }
      & ComponentProps<C>
      & StyleProps
  ) => string) => FC<ComponentProps<C> & StyleProps>;

  <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): <
    StyleProps extends Record<string, unknown> = {},
  >(callback: (params: {
      theme: ITheme;
    }
      & JSX.IntrinsicElements[Tag]
      & StyleProps
  ) => string) => FC<JSX.IntrinsicElements[Tag] & StyleProps>;
}

export interface IAdapter<ProviderTheme> {
  ThemeProvider: FC<{ theme: ProviderTheme; }>
  createTheme: (themeOptions: IThemeOptions) => ProviderTheme;
  styled: Styled;
}
