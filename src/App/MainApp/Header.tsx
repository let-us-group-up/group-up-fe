import { useCallback } from 'react';
import { useIntl } from '@libs/intl';
import AppBar from '@libs/ui-kit/components/AppBar';
import Typography from '@libs/ui-kit/components/Typography';
import Select from '@libs/ui-kit/components/Select';
import Option from '@libs/ui-kit/components/Option';
import IconButton from '@libs/ui-kit/components/IconButton';
import MenuIcon from '@libs/ui-kit/icons/MenuIcon';
import { styled } from '@libs/ui-kit/styles';
import { useLanguage } from '../../LanguageProvider';
import { Language } from '../../../lang/constants';

const StyledIconButton = styled(IconButton)(({ theme }) => `
  margin-right: ${theme.spacing(2)};
`);

const StyledTypography = styled(Typography)(() => `
  flex-grow: 1;
`);

interface HeaderProps {
  onMenuIconClick: () => void;
}

const Header: React.VFC<HeaderProps> = ({
  onMenuIconClick,
}) => {
  const intl = useIntl();
  const [language, changeLanguage] = useLanguage();

  const handleChangeLanguage = useCallback(({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(target.value as Language);
  }, [changeLanguage]);

  return (
    <AppBar>
      <StyledIconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onMenuIconClick}
      >
        <MenuIcon />
      </StyledIconButton>
      <StyledTypography variant="h6">
        {intl.formatMessage({
          defaultMessage: 'The best app ever',
          description: 'Header title',
        })}
      </StyledTypography>
      <Select
        id="language-select"
        value={language}
        onChange={handleChangeLanguage}
      >
        <Option value={Language.En}>
          {intl.formatMessage({
            defaultMessage: 'EN',
            description: 'English locale select option',
          })}
        </Option>
        <Option value={Language.Ru}>
          {intl.formatMessage({
            defaultMessage: 'RU',
            description: 'Russian locale select option',
          })}
        </Option>
      </Select>
    </AppBar>
  );
};

export default Header;
