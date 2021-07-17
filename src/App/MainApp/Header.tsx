import { useIntl } from '@libs/intl';
// import { experimentalStyled } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import { styled } from '@libs/ui-kit/styles';
import AppBar from '@libs/ui-kit/components/AppBar';
import IconButton from '@libs/ui-kit/components/IconButton';
import Typography from '@libs/ui-kit/components/Typography';
import MenuIcon from '@libs/ui-kit/icons/MenuIcon';
import { useLanguage } from '../../LanguageProvider';
import { Language } from '../../../lang/constants';

const StyledIconButton = styled(IconButton)(({ theme }) => `
  margin-right: ${theme.spacing(2)};
`);

const StyledTypography = styled(Typography)(() => `
  flex-grow: 1;
`);

const Header: React.FC = () => {
  const intl = useIntl();
  const [language, changeLanguage] = useLanguage();

  return (
    <AppBar>
      <StyledIconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </StyledIconButton>
      <StyledTypography variant="h6">
        {intl.formatMessage({
          defaultMessage: 'The best app ever',
          description: 'Header title',
        })}
      </StyledTypography>
      <select
        defaultValue={language}
        onChange={({ target }) => changeLanguage(target.value as Language)}
      >
        <option value={Language.En}>EN</option>
        <option value={Language.Ru}>RU</option>
      </select>
    </AppBar>
  );
};

export default Header;
