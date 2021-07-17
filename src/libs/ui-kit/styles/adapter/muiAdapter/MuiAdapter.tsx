import {
  ThemeProvider as MuiThemeProvider,
  createTheme as createMuiTheme,
  experimentalStyled,
} from '@material-ui/core/styles';
import mapMuiThemeToIThemeView from './mapMuiThemeToIThemeView';
import mapIThemeOptionsToMuiThemeOptionsView from './mapIThemeOptionsToMuiThemeOptionsView';
import { IMuiAdapter } from './IMuiAdapter';


const createTheme: IMuiAdapter['createTheme'] = (themeOptions) => {
  const theme = createMuiTheme(mapIThemeOptionsToMuiThemeOptionsView(themeOptions));
  return theme;
};

const styled: IMuiAdapter['styled'] = (
  component: Parameters<IMuiAdapter['styled']>[0],
) => (
  callback: Parameters<ReturnType<IMuiAdapter['styled']>>[0],
) => experimentalStyled(component)(({
  theme: muiTheme,
  ...rest
}) => callback({
  theme: mapMuiThemeToIThemeView(muiTheme),
  ...rest,
}));

const ThemeProvider: IMuiAdapter['ThemeProvider'] = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

const MuiAdapter: IMuiAdapter = {
  createTheme,
  styled,
  ThemeProvider,
};

export default MuiAdapter;


