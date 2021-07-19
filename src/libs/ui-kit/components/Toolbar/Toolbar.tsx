import MuiToolbar from '@material-ui/core/Toolbar';

const Toolbar: React.CFC = ({
  children, className,
}) => (
  <MuiToolbar className={className}>
    {children}
  </MuiToolbar>
);

export default Toolbar;
