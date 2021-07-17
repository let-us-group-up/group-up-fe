import { Theme as MuiTheme } from '@material-ui/core/styles';
import {
  PaletteColor as MuiPaletteColor,
} from '@material-ui/core/styles/createPalette';
import Color from 'color';
import {
  ITheme,
  PaletteColorOptions,
  TypographyStyleOptions,
  Direction,
  TransitionEasing,
  TransitionDuration,
  ZIndexVariant,
} from '../../theme/ITheme';
import { OverriddenMuiTypographyStyle } from './IMuiAdapter';
import { Variant } from '../../typography';


const mapBreakpoints = (muiThemeBreakpoints: MuiTheme['breakpoints']): ITheme['breakpoints'] => ({
  values: muiThemeBreakpoints.values,
  up: muiThemeBreakpoints.up,
  down: muiThemeBreakpoints.down,
  between: muiThemeBreakpoints.between,
});


const mapDirection = (muiThemeDirection: MuiTheme['direction']): ITheme['direction'] => {
  switch (muiThemeDirection) {
    case 'ltr':
      return Direction.Ltr;
    case 'rtl':
      return Direction.Rtl;
    default:
      return Direction.Ltr;
  }
};


const mapPaletteColorOptions = (
  muiPaletteColorOptions: MuiPaletteColor,
): PaletteColorOptions => ({
  light: muiPaletteColorOptions.light,
  main: muiPaletteColorOptions.main,
  dark: muiPaletteColorOptions.dark,
  contrastText: muiPaletteColorOptions.contrastText,
});

const mapPaletteAction = (
  muiThemePaletteAction: MuiTheme['palette']['action'],
): ITheme['palette']['action'] => ({
  active: Color(muiThemePaletteAction.active).alpha(),
  hover: Color(muiThemePaletteAction.hover).alpha(),
  selected: Color(muiThemePaletteAction.selected).alpha(),
  disabled: Color(muiThemePaletteAction.disabled).alpha(),
  disabledBackground: Color(muiThemePaletteAction.disabledBackground).alpha(),
  focus: Color(muiThemePaletteAction.focus).alpha(),
  activated: muiThemePaletteAction.activatedOpacity,
});

const mapPalette = (muiThemePalette: MuiTheme['palette']): ITheme['palette'] => ({
  common: {
    white: muiThemePalette.common.white,
    black: muiThemePalette.common.black,
  },
  primary: mapPaletteColorOptions(muiThemePalette.primary),
  secondary: mapPaletteColorOptions(muiThemePalette.secondary),
  error: mapPaletteColorOptions(muiThemePalette.error),
  warning: mapPaletteColorOptions(muiThemePalette.warning),
  info: mapPaletteColorOptions(muiThemePalette.info),
  success: mapPaletteColorOptions(muiThemePalette.success),
  text: {
    primary: muiThemePalette.text.primary,
    secondary: muiThemePalette.text.secondary,
    disabled: muiThemePalette.text.disabled,
  },
  divider: muiThemePalette.divider,
  background: {
    default: muiThemePalette.background.default,
    paper: muiThemePalette.background.paper,
  },
  action: mapPaletteAction(muiThemePalette.action),
});


const mapMuiTypographyVariants = (
  typographyStyleOptions: OverriddenMuiTypographyStyle,
): TypographyStyleOptions => ({
  fontFamily: typographyStyleOptions.fontFamily,
  fontWeight: typographyStyleOptions.fontWeight,
  fontSize: typographyStyleOptions.fontSize,
  lineHeight: typographyStyleOptions.lineHeight,
  letterSpacing: typographyStyleOptions.letterSpacing,
});

const mapTypography = (
  muiThemeTypography: MuiTheme['typography'],
): ITheme['typography'] => ({
  htmlFontSize: muiThemeTypography.htmlFontSize,
  fontFamily: muiThemeTypography.fontFamily,
  fontSize: muiThemeTypography.fontSize,
  fontWeightLight: muiThemeTypography.fontWeightLight,
  fontWeightRegular: muiThemeTypography.fontWeightRegular,
  fontWeightMedium: muiThemeTypography.fontWeightMedium,
  fontWeightBold: muiThemeTypography.fontWeightBold,
  [Variant.H1]: mapMuiTypographyVariants(muiThemeTypography.h1),
  [Variant.H2]: mapMuiTypographyVariants(muiThemeTypography.h2),
  [Variant.H3]: mapMuiTypographyVariants(muiThemeTypography.h3),
  [Variant.H4]: mapMuiTypographyVariants(muiThemeTypography.h4),
  [Variant.H5]: mapMuiTypographyVariants(muiThemeTypography.h5),
  [Variant.H6]: mapMuiTypographyVariants(muiThemeTypography.h6),
  [Variant.Subtitle1]: mapMuiTypographyVariants(muiThemeTypography.subtitle1),
  [Variant.Subtitle2]: mapMuiTypographyVariants(muiThemeTypography.subtitle2),
  [Variant.Body1]: mapMuiTypographyVariants(muiThemeTypography.body1),
  [Variant.Body2]: mapMuiTypographyVariants(muiThemeTypography.body2),
  [Variant.Button]: mapMuiTypographyVariants(muiThemeTypography.button),
  [Variant.Caption]: mapMuiTypographyVariants(muiThemeTypography.caption),
  [Variant.Overline]: mapMuiTypographyVariants(muiThemeTypography.overline),
});


const mapSpacing = (
  muiThemeSpacing: MuiTheme['spacing'],
): ITheme['spacing'] => muiThemeSpacing;


const mapShape = (
  muiThemeShape: MuiTheme['shape'],
): ITheme['shape'] => ({
  borderRadius: Number(muiThemeShape.borderRadius),
});


const mapTransitions = (
  muiThemeTransitions: MuiTheme['transitions'],
): ITheme['transitions'] => ({
  easing: {
    [TransitionEasing.EasingInOut]: muiThemeTransitions.easing.easeInOut,
    [TransitionEasing.EasingOut]: muiThemeTransitions.easing.easeOut,
    [TransitionEasing.EasingIn]: muiThemeTransitions.easing.easeIn,
    [TransitionEasing.Sharp]: muiThemeTransitions.easing.sharp,
  },
  duration: {
    [TransitionDuration.Shortest]: muiThemeTransitions.duration.shortest,
    [TransitionDuration.Shorter]: muiThemeTransitions.duration.shorter,
    [TransitionDuration.Short]: muiThemeTransitions.duration.short,
    [TransitionDuration.Standard]: muiThemeTransitions.duration.standard,
    [TransitionDuration.Complex]: muiThemeTransitions.duration.complex,
    [TransitionDuration.EnteringScreen]: muiThemeTransitions.duration.enteringScreen,
    [TransitionDuration.LeavingScreen]: muiThemeTransitions.duration.leavingScreen,
  },
  create: muiThemeTransitions.create,
});


const mapZIndex = (
  muiThemeZIndex: MuiTheme['zIndex'],
): ITheme['zIndex'] => ({
  [ZIndexVariant.MobileStepper]: muiThemeZIndex.mobileStepper,
  [ZIndexVariant.SpeedDial]: muiThemeZIndex.speedDial,
  [ZIndexVariant.AppBar]: muiThemeZIndex.appBar,
  [ZIndexVariant.Drawer]: muiThemeZIndex.drawer,
  [ZIndexVariant.Modal]: muiThemeZIndex.modal,
  [ZIndexVariant.Snackbar]: muiThemeZIndex.snackbar,
  [ZIndexVariant.Tooltip]: muiThemeZIndex.tooltip,
});


const mapMuiThemeToIThemeView = (muiTheme: MuiTheme): ITheme => {
  const theme: ITheme = {
    breakpoints: mapBreakpoints(muiTheme.breakpoints),
    direction: mapDirection(muiTheme.direction),
    palette: mapPalette(muiTheme.palette),
    typography: mapTypography(muiTheme.typography),
    spacing: mapSpacing(muiTheme.spacing),
    shape: mapShape(muiTheme.shape),
    transitions: mapTransitions(muiTheme.transitions),
    zIndex: mapZIndex(muiTheme.zIndex),
  };

  return theme;
};

export default mapMuiThemeToIThemeView;
