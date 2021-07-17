import { CSSProperties } from 'react';
import { Theme as MuiTheme } from '@material-ui/core/styles';

import { Variant } from '../../typography';
import { IAdapter } from '../IAdapter';

export type AdapterTheme = MuiTheme;
export type IMuiAdapter = IAdapter<MuiTheme>;

export interface OverriddenMuiTypographyStyle {
  fontFamily: NonNullable<CSSProperties['fontFamily']>;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  textTransform?: 'uppercase' | 'lowercase';
}

declare module '@material-ui/core/styles/createTypography' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface FontStyle {
      fontFamily: NonNullable<React.CSSProperties['fontFamily']>;
      fontSize: number;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      htmlFontSize: number;
    }

  export interface Typography {
    [Variant.H1]: OverriddenMuiTypographyStyle;
    [Variant.H2]: OverriddenMuiTypographyStyle;
    [Variant.H3]: OverriddenMuiTypographyStyle;
    [Variant.H4]: OverriddenMuiTypographyStyle;
    [Variant.H5]: OverriddenMuiTypographyStyle;
    [Variant.H6]: OverriddenMuiTypographyStyle;
    [Variant.Subtitle1]: OverriddenMuiTypographyStyle;
    [Variant.Subtitle2]: OverriddenMuiTypographyStyle;
    [Variant.Body1]: OverriddenMuiTypographyStyle;
    [Variant.Body2]: OverriddenMuiTypographyStyle;
    [Variant.Button]: OverriddenMuiTypographyStyle;
    [Variant.Caption]: OverriddenMuiTypographyStyle;
    [Variant.Overline]: OverriddenMuiTypographyStyle;
  }
}
