import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '../Toolbar';

const AppBar: React.FC = ({ children }) => (
  <MuiAppBar position="static">
    <Toolbar>
      {children}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
