import {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import Adapter, { AdapterTheme } from '../adapter';
import themesOptions, { ThemeName } from './themesOptions';


type IThemes = Record<ThemeName, AdapterTheme>;

const themes: IThemes = Object.entries(themesOptions).reduce<IThemes>((
  // Fix for reduce typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  acc, params: any,
) => {
  const [key, value]: [
    keyof typeof themesOptions,
    typeof themesOptions[keyof typeof themesOptions],
  ] = params;
  acc[key] = Adapter.createTheme(value);
  return acc;
}, {} as IThemes);

const defaultThemeName = ThemeName.Light;


type ChangeThemeName = (newTheme: ThemeName) => void;

type ThemeNameContext = [ThemeName, ChangeThemeName];

const ThemeNameContext = createContext<ThemeNameContext>([
  defaultThemeName,
  (newTheme: ThemeName) => newTheme,
]);

export const useThemeName = (): ThemeNameContext => useContext(ThemeNameContext);


interface ThemeProviderProps {
  defaultTheme?: ThemeName;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = defaultThemeName,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme);

  const handleChangeThemeName: ChangeThemeName = useCallback((newThemeName: ThemeName) => {
    setThemeName(newThemeName);
  }, []);

  const ThemeNameProviderValue: ThemeNameContext = useMemo(() => [
    themeName,
    handleChangeThemeName,
  ], [handleChangeThemeName, themeName]);

  return (
    <ThemeNameContext.Provider value={ThemeNameProviderValue}>
      <Adapter.ThemeProvider theme={themes[themeName]}>
        {children}
      </Adapter.ThemeProvider>
    </ThemeNameContext.Provider>
  );
};

export default ThemeProvider;
