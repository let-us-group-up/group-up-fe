import { useCallback } from 'react';
import { Link } from '@libs/router';
import { useIntl } from '@libs/intl';
import NavigationList from './NavigationList';
import NavigationItem from './NavigationItem';

interface NavigationProps {
  onNavClick: () => void;
}

const Navigation: React.VFC<NavigationProps> = ({
  onNavClick,
}) => {
  const intl = useIntl();

  const handleLinkClick = useCallback(() => {
    onNavClick();
  }, [onNavClick]);

  return (
    <NavigationList>
      <NavigationItem
        link={(
          <Link to="/" onClick={handleLinkClick}>
            {intl.formatMessage({
              defaultMessage: 'Main',
              description: 'Link to the main page',
            })}
          </Link>
          )}
      />
      <NavigationItem
        link={(
          <Link to="counter" onClick={handleLinkClick}>
            {intl.formatMessage({
              defaultMessage: 'Counter',
              description: 'Link to the counter page',
            })}
          </Link>
          )}
      />
    </NavigationList>
  );
};

export default Navigation;
