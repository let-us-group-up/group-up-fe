import Drawer from '@libs/ui-kit/components/Drawer';

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  children,
  open,
  onClose,
}) => (
  <Drawer
    open={open}
    onClose={onClose}
  >
    {children}
  </Drawer>
);

export default NavigationDrawer;
