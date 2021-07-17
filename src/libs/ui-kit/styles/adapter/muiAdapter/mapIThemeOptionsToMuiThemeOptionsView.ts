import { ThemeOptions as MuiThemeOptions } from '@material-ui/core/styles';
import {
  PaletteColorOptions as MuiPaletteColorOptions,
  PaletteOptions as MuiPaletteOptions,
} from '@material-ui/core/styles/createPalette';
import {
  TypographyStyleOptions as MuiTypographyStyleOptions,
} from '@material-ui/core/styles/createTypography';
import Color from 'color';
import {
  IThemeOptions,
  Breakpoint,
  PaletteColorOptions,
  TypographyStyleOptions,
  Direction,
  TransitionEasing,
  TransitionDuration,
  ZIndexVariant,
} from '../../theme/ITheme';
import { Variant } from '../../typography';


const mapBreakpoints = (
  themeBreakpoints: IThemeOptions['breakpoints'],
): MuiThemeOptions['breakpoints'] => ({
  // keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: themeBreakpoints[Breakpoint.xs],
    sm: themeBreakpoints[Breakpoint.sm],
    md: themeBreakpoints[Breakpoint.md],
    lg: themeBreakpoints[Breakpoint.lg],
    xl: themeBreakpoints[Breakpoint.xl],
  },
});


const mapDirection = (
  themeDirection: IThemeOptions['direction'],
): MuiThemeOptions['direction'] => {
  switch (themeDirection) {
    case Direction.Ltr:
      return 'ltr';
    case Direction.Rtl:
      return 'rtl';
    default:
      return 'ltr';
  }
};


const mapPaletteColorOptions = (
  paletteColorOptions: PaletteColorOptions,
): MuiPaletteColorOptions => ({
  light: paletteColorOptions.light,
  main: paletteColorOptions.main,
  dark: paletteColorOptions.dark,
  contrastText: paletteColorOptions.contrastText,
});

const mapPaletteAction = (
  themePaletteAction: IThemeOptions['palette']['action'],
): MuiPaletteOptions['action'] => ({
  active: Color().alpha(themePaletteAction.active).string(),
  hover: Color().alpha(themePaletteAction.hover).string(),
  hoverOpacity: themePaletteAction.hover,
  selected: Color().alpha(themePaletteAction.selected).string(),
  selectedOpacity: themePaletteAction.selected,
  disabled: Color().alpha(themePaletteAction.disabled).string(),
  disabledBackground: Color().alpha(themePaletteAction.disabledBackground).string(),
  disabledOpacity: themePaletteAction.disabled + themePaletteAction.disabledBackground,
  focus: Color().alpha(themePaletteAction.focus).string(),
  focusOpacity: themePaletteAction.focus,
  activatedOpacity: themePaletteAction.activated,
});

const mapPalette = (
  themePalette: IThemeOptions['palette'],
): MuiThemeOptions['palette'] => ({
  common: {
    white: themePalette.common.white,
    black: themePalette.common.black,
  },
  primary: mapPaletteColorOptions(themePalette.primary),
  secondary: mapPaletteColorOptions(themePalette.secondary),
  error: mapPaletteColorOptions(themePalette.error),
  warning: mapPaletteColorOptions(themePalette.warning),
  info: mapPaletteColorOptions(themePalette.info),
  success: mapPaletteColorOptions(themePalette.success),
  text: {
    primary: themePalette.text.primary,
    secondary: themePalette.text.secondary,
    disabled: themePalette.text.disabled,
  },
  divider: themePalette.divider,
  background: {
    default: themePalette.background.default,
    paper: themePalette.background.paper,
  },
  action: mapPaletteAction(themePalette.action),
});


const mapMuiTypographyVariants = (
  typographyStyleOptions: TypographyStyleOptions,
): MuiTypographyStyleOptions => ({
  fontFamily: typographyStyleOptions.fontFamily,
  fontWeight: typographyStyleOptions.fontWeight,
  fontSize: typographyStyleOptions.fontSize,
  lineHeight: typographyStyleOptions.lineHeight,
  letterSpacing: typographyStyleOptions.letterSpacing,
});

const mapTypography = (
  themeTypography: IThemeOptions['typography'],
): MuiThemeOptions['typography'] => ({
  htmlFontSize: themeTypography.htmlFontSize,
  fontFamily: themeTypography.fontFamily,
  fontSize: themeTypography.fontSize,
  fontWeightLight: themeTypography.fontWeightLight,
  fontWeightRegular: themeTypography.fontWeightRegular,
  fontWeightMedium: themeTypography.fontWeightMedium,
  fontWeightBold: themeTypography.fontWeightBold,
  h1: mapMuiTypographyVariants(themeTypography[Variant.H1]),
  h2: mapMuiTypographyVariants(themeTypography[Variant.H2]),
  h3: mapMuiTypographyVariants(themeTypography[Variant.H3]),
  h4: mapMuiTypographyVariants(themeTypography[Variant.H4]),
  h5: mapMuiTypographyVariants(themeTypography[Variant.H5]),
  h6: mapMuiTypographyVariants(themeTypography[Variant.H6]),
  subtitle1: mapMuiTypographyVariants(themeTypography[Variant.Subtitle1]),
  subtitle2: mapMuiTypographyVariants(themeTypography[Variant.Subtitle2]),
  body1: mapMuiTypographyVariants(themeTypography[Variant.Body1]),
  body2: mapMuiTypographyVariants(themeTypography[Variant.Body2]),
  button: mapMuiTypographyVariants(themeTypography[Variant.Button]),
  caption: mapMuiTypographyVariants(themeTypography[Variant.Caption]),
  overline: mapMuiTypographyVariants(themeTypography[Variant.Overline]),
});


const mapSpacing = (
  themeSpacing: IThemeOptions['spacing'],
): MuiThemeOptions['spacing'] => themeSpacing;


const mapShape = (
  themeShape: IThemeOptions['shape'],
): MuiThemeOptions['shape'] => ({
  borderRadius: themeShape.borderRadius,
});


const mapTransitions = (
  themeTransitions: IThemeOptions['transitions'],
): MuiThemeOptions['transitions'] => ({
  easing: {
    easeInOut: themeTransitions.easing[TransitionEasing.EasingInOut],
    easeOut: themeTransitions.easing[TransitionEasing.EasingOut],
    easeIn: themeTransitions.easing[TransitionEasing.EasingIn],
    sharp: themeTransitions.easing[TransitionEasing.Sharp],
  },
  duration: {
    shortest: themeTransitions.duration[TransitionDuration.Shortest],
    shorter: themeTransitions.duration[TransitionDuration.Shorter],
    short: themeTransitions.duration[TransitionDuration.Short],
    standard: themeTransitions.duration[TransitionDuration.Standard],
    complex: themeTransitions.duration[TransitionDuration.Complex],
    enteringScreen: themeTransitions.duration[TransitionDuration.EnteringScreen],
    leavingScreen: themeTransitions.duration[TransitionDuration.LeavingScreen],
  },
});


const mapZIndex = (
  themeZIndex: IThemeOptions['zIndex'],
): MuiThemeOptions['zIndex'] => ({
  mobileStepper: themeZIndex[ZIndexVariant.MobileStepper],
  speedDial: themeZIndex[ZIndexVariant.SpeedDial],
  appBar: themeZIndex[ZIndexVariant.AppBar],
  drawer: themeZIndex[ZIndexVariant.Drawer],
  modal: themeZIndex[ZIndexVariant.Modal],
  snackbar: themeZIndex[ZIndexVariant.Snackbar],
  tooltip: themeZIndex[ZIndexVariant.Tooltip],
});


const mapIThemeOptionsToMuiThemeOptionsView = (themeOptions: IThemeOptions): MuiThemeOptions => {
  const muiThemeOptions: MuiThemeOptions = {
    breakpoints: mapBreakpoints(themeOptions.breakpoints),
    direction: mapDirection(themeOptions.direction),
    palette: mapPalette(themeOptions.palette),
    typography: mapTypography(themeOptions.typography),
    spacing: mapSpacing(themeOptions.spacing),
    shape: mapShape(themeOptions.shape),
    transitions: mapTransitions(themeOptions.transitions),
    zIndex: mapZIndex(themeOptions.zIndex),
  };

  return muiThemeOptions;
};

export default mapIThemeOptionsToMuiThemeOptionsView;
