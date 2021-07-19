import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '../Toolbar';

const AppBar: React.CFC = ({
  children,
  className,
}) => (
  <MuiAppBar
    className={className}
    position="static"
  >
    <Toolbar>
      {children}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
