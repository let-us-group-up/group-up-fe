import MuiToolbar from '@material-ui/core/Toolbar';

interface ToolbarProps {
  className?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  children, className,
}) => (
  <MuiToolbar className={className}>
    {children}
  </MuiToolbar>
);

export default Toolbar;
