import {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  FC,
} from 'react';
import ThemeDataProvider, { createTheme } from './themeDataProvider';
import {
  Breakpoint,
  Variant,
  TransitionEasing,
  TransitionDuration,
  ZIndexVariants,
} from './ITheme';


export enum ThemeName {
  Light,
  Dark,
}

const themes = {
  [ThemeName.Light]: createTheme({
    breakpoints: {
      [Breakpoint.xs]: 0,
      [Breakpoint.sm]: 600,
      [Breakpoint.md]: 960,
      [Breakpoint.lg]: 1280,
      [Breakpoint.xl]: 1920,
    },
    palette: {
      common: {
        black: '#000',
        white: '#fff',
      },
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff4081',
        main: '#f50057',
        dark: '#c51162',
        contrastText: '#fff',
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: '#rgba(0, 0, 0, 0.87)',
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff',
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: '#rgba(0, 0, 0, 0.87)',
      },
      text: {
        primary: '#rgba(0, 0, 0, 0.87)',
        secondary: '#rgba(0, 0, 0, 0.6)',
        disabled: '#rgba(0, 0, 0, 0.38)',
      },
      divider: '#rgba(0, 0, 0, 0.12)',
      background: {
        default: '#fff',
        paper: '#fff',
      },
      action: {
        active: 0.54,
        hover: 0.04,
        selected: 0.08,
        disabled: 0.26,
        disabledBackground: 0.12,
        focus: 0.12,
        activated: 0.12,
      },
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      [Variant.H1]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      [Variant.H2]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
      [Variant.H3]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
      [Variant.H4]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
      },
      [Variant.H5]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.334,
        letterSpacing: '0em',
      },
      [Variant.H6]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
      },
      [Variant.Subtitle1]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
      [Variant.Subtitle2]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
      },
      [Variant.Body1]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      [Variant.Body2]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
      [Variant.Button]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
      },
      [Variant.Caption]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
      },
      [Variant.Overline]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
        letterSpacing: '0.08333em',
        textTransform: 'uppercase',
      },
    },
    shape: {
      borderRadius: 4,
    },
    transitions: {
      easing: {
        [TransitionEasing.EasingInOut]: 'cubic-bezier(0.4, 0, 0.2, 1)',
        [TransitionEasing.EasingOut]: 'cubic-bezier(0.0, 0, 0.2, 1)',
        [TransitionEasing.EasingIn]: 'cubic-bezier(0.4, 0, 1, 1)',
        [TransitionEasing.Sharp]: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        [TransitionDuration.Shortest]: 150,
        [TransitionDuration.Shorter]: 200,
        [TransitionDuration.Short]: 250,
        [TransitionDuration.Standard]: 300,
        [TransitionDuration.Complex]: 375,
        [TransitionDuration.EnteringScreen]: 225,
        [TransitionDuration.LeavingScreen]: 195,
      },
    },
    zIndex: {
      [ZIndexVariants.MobileStepper]: 1000,
      [ZIndexVariants.SpeedDial]: 1050,
      [ZIndexVariants.AppBar]: 1100,
      [ZIndexVariants.Drawer]: 1200,
      [ZIndexVariants.Modal]: 1300,
      [ZIndexVariants.Snackbar]: 1400,
      [ZIndexVariants.Tooltip]: 1500,
    },
  }),
  [ThemeName.Dark]: createTheme({
    breakpoints: {
      [Breakpoint.xs]: 0,
      [Breakpoint.sm]: 600,
      [Breakpoint.md]: 960,
      [Breakpoint.lg]: 1280,
      [Breakpoint.xl]: 1920,
    },
    palette: {
      common: {
        black: '#000',
        white: '#fff',
      },
      primary: {
        light: '#7986cb',
        main: '#3f51b5',
        dark: '#303f9f',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff4081',
        main: '#f50057',
        dark: '#c51162',
        contrastText: '#fff',
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: '#rgba(0, 0, 0, 0.87)',
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff',
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: '#rgba(0, 0, 0, 0.87)',
      },
      text: {
        primary: '#rgba(0, 0, 0, 0.87)',
        secondary: '#rgba(0, 0, 0, 0.6)',
        disabled: '#rgba(0, 0, 0, 0.38)',
      },
      divider: '#rgba(0, 0, 0, 0.12)',
      background: {
        default: '#fff',
        paper: '#fff',
      },
      action: {
        active: 0.54,
        hover: 0.04,
        selected: 0.08,
        disabled: 0.26,
        disabledBackground: 0.12,
        focus: 0.12,
        activated: 0.12,
      },
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      [Variant.H1]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      [Variant.H2]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
      [Variant.H3]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
      [Variant.H4]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
      },
      [Variant.H5]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.334,
        letterSpacing: '0em',
      },
      [Variant.H6]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
      },
      [Variant.Subtitle1]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
      [Variant.Subtitle2]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
      },
      [Variant.Body1]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      [Variant.Body2]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
      [Variant.Button]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
      },
      [Variant.Caption]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
      },
      [Variant.Overline]: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
        letterSpacing: '0.08333em',
        textTransform: 'uppercase',
      },
    },
    shape: {
      borderRadius: 4,
    },
    transitions: {
      easing: {
        [TransitionEasing.EasingInOut]: 'cubic-bezier(0.4, 0, 0.2, 1)',
        [TransitionEasing.EasingOut]: 'cubic-bezier(0.0, 0, 0.2, 1)',
        [TransitionEasing.EasingIn]: 'cubic-bezier(0.4, 0, 1, 1)',
        [TransitionEasing.Sharp]: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        [TransitionDuration.Shortest]: 150,
        [TransitionDuration.Shorter]: 200,
        [TransitionDuration.Short]: 250,
        [TransitionDuration.Standard]: 300,
        [TransitionDuration.Complex]: 375,
        [TransitionDuration.EnteringScreen]: 225,
        [TransitionDuration.LeavingScreen]: 195,
      },
    },
    zIndex: {
      [ZIndexVariants.MobileStepper]: 1000,
      [ZIndexVariants.SpeedDial]: 1050,
      [ZIndexVariants.AppBar]: 1100,
      [ZIndexVariants.Drawer]: 1200,
      [ZIndexVariants.Modal]: 1300,
      [ZIndexVariants.Snackbar]: 1400,
      [ZIndexVariants.Tooltip]: 1500,
    },
  }),
};

export const defaultThemeName = ThemeName.Light;


type ChangeThemeName = (newTheme: ThemeName) => void;

type ThemeNameContext = [ThemeName, ChangeThemeName];

export const ThemeNameContext = createContext<ThemeNameContext>([
  defaultThemeName,
  (newTheme: ThemeName) => newTheme,
]);

export const useThemeName = (): ThemeNameContext => useContext(ThemeNameContext);


const ThemeProvider: FC = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(defaultThemeName);

  const handleChangeThemeName: ChangeThemeName = useCallback((newThemeName: ThemeName) => {
    setThemeName(newThemeName);
  }, []);

  const ThemeNameProviderValue: ThemeNameContext = useMemo(() => [
    themeName,
    handleChangeThemeName,
  ], [handleChangeThemeName, themeName]);

  return (
    <ThemeNameContext.Provider value={ThemeNameProviderValue}>
      <ThemeDataProvider theme={themes[themeName]}>
        {children}
      </ThemeDataProvider>
    </ThemeNameContext.Provider>
  );
};

export default ThemeProvider;
