import ListItem from '@libs/ui-kit/components/ListItem';
import ListItemText from '@libs/ui-kit/components/ListItemText';

interface NavigationItemProps {
  link: React.ReactNode;
}

const NavigationItem: React.VFC<NavigationItemProps> = ({
  link,
}) => (
  <ListItem>
    <ListItemText
      primary={link}
    />
  </ListItem>
);

export default NavigationItem;
