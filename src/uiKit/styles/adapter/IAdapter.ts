/* eslint-disable @typescript-eslint/ban-types */
import { ITheme, IThemeOptions } from '../theme/ITheme';

interface Styled {
  <C extends React.FC<React.ComponentProps<C>>>(component: C): <
    StyleProps extends Record<string, unknown> = {},
  >(callback: (params: {
      theme: ITheme;
    }
      & React.ComponentProps<C>
      & StyleProps
  ) => string) => React.FC<React.ComponentProps<C> & StyleProps>;

  <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): <
    StyleProps extends Record<string, unknown> = {},
  >(callback: (params: {
      theme: ITheme;
    }
      & JSX.IntrinsicElements[Tag]
      & StyleProps
  ) => string) => React.FC<JSX.IntrinsicElements[Tag] & StyleProps>;
}

export interface IAdapter<ProviderTheme> {
  ThemeProvider: React.FC<{ theme: ProviderTheme; }>
  createTheme: (themeOptions: IThemeOptions) => ProviderTheme;
  styled: Styled;
}
