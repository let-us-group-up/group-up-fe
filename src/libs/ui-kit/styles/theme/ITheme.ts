import { Variant } from '../typography';

// #region Breakpoints

export enum Breakpoint {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type BreakpointsValues = Record<Breakpoint, number>;

export interface Breakpoints {
  values: BreakpointsValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint | number, end: Breakpoint | number) => string;
}

export type BreakpointsOptions = BreakpointsValues;

// #endregion

// #region Direction

export enum Direction {
  Ltr = 'ltr',
  Rtl = 'rtl',
}

export type DirectionOptions = Direction;

// #endregion

// #region Palette

export interface CommonColors {
  white: string;
  black: string;
}

export interface PaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface TypeBackground {
  default: string;
  paper: string;
}

export interface TypeAction {
  // Opacity values from 0 to 1
  active: number;
  hover: number;
  selected: number;
  disabled: number;
  disabledBackground: number;
  focus: number;
  activated: number;
}

export interface Palette {
  common: CommonColors;
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  error: PaletteColorOptions;
  warning: PaletteColorOptions;
  info: PaletteColorOptions;
  success: PaletteColorOptions;
  text: TypeText;
  divider: string;
  background: TypeBackground;
  action: TypeAction;
}

export interface PaletteOptions {
  common: CommonColors;
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  error: PaletteColorOptions;
  warning: PaletteColorOptions;
  info: PaletteColorOptions;
  success: PaletteColorOptions;
  text: TypeText;
  divider: string;
  background: TypeBackground;
  action: TypeAction;
}

// #endregion

// #region Typography

export interface TypographyStyleOptions {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  textTransform?: 'uppercase' | 'lowercase';
}

export interface Typography extends Record<Variant, TypographyStyleOptions> {
  htmlFontSize: number;
  fontFamily: string;
  fontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
}

export interface TypographyOptions extends Record<Variant, TypographyStyleOptions> {
  htmlFontSize: number;
  fontFamily: string;
  fontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
}


// #endregion

// #region Spacing

export type SpacingArgument = number;

export interface Spacing {
  (): string;
  (value: SpacingArgument): string;
  (topBottom: SpacingArgument, rightLeft: SpacingArgument): string;
  (top: SpacingArgument, rightLeft: SpacingArgument, bottom: SpacingArgument): string;
  (
    top: SpacingArgument,
    right: SpacingArgument,
    bottom: SpacingArgument,
    left: SpacingArgument
  ): string;
}

export type SpacingOptions = number;

// #endregion

// #region Shape

export interface Shape {
  borderRadius: number;
}

export interface ShapeOptions {
  borderRadius: number;
}

// #endregion

// #region Transition

export enum TransitionEasing {
  EasingInOut = 'easingInOut',
  EasingOut = 'easingOut',
  EasingIn = 'easingIn',
  Sharp = 'sharp',
}

export enum TransitionDuration {
  Shortest = 'shortest',
  Shorter = 'shorter',
  Short = 'short',
  Standard = 'standard',
  Complex = 'complex',
  EnteringScreen = 'enteringScreen',
  LeavingScreen = 'leavingScreen',
}

export interface Transitions {
  easing: Record<TransitionEasing, string>;
  duration: Record<TransitionDuration, number>;
  create: (
    props: string | Array<string>,
    options?: Partial<{
      duration: Transitions['duration'][TransitionDuration];
      easing: Transitions['easing'][TransitionEasing];
      delay: number;
    }>,
  ) => string;
}

export interface TransitionsOptions {
  easing: Record<TransitionEasing, string>;
  duration: Record<TransitionDuration, number>;
}

// #endregion

// #region ZIndex

export enum ZIndexVariant {
  MobileStepper = 'mobileStepper',
  SpeedDial = 'speedDial',
  AppBar = 'appBar',
  Drawer = 'drawer',
  Modal = 'modal',
  Snackbar = 'snackbar',
  Tooltip = 'tooltip',
}

export type ZIndexOptions = Record<ZIndexVariant, number>;

export type ZIndex = Record<ZIndexVariant, number>;

// #endregion

// #region Theme

export interface ITheme {
  breakpoints: Breakpoints;
  direction: Direction;
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  shape: Shape;
  transitions: Transitions;
  zIndex: ZIndex;
}

export interface IThemeOptions {
  breakpoints: BreakpointsOptions;
  direction?: DirectionOptions; // default - rtl
  palette: PaletteOptions;
  typography: TypographyOptions;
  spacing?: SpacingOptions; // default - 8
  shape: ShapeOptions;
  transitions: TransitionsOptions;
  zIndex: ZIndexOptions;
}

// #endregion
