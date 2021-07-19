import { styled } from '../../styles';

const StyledPageContainer = styled('div')(({ theme }) => `
  padding-right: ${theme.spacing(3)};
  padding-left: ${theme.spacing(3)};
`);

const PageContent: React.CFC = ({
  children, className,
}) => (
  <StyledPageContainer className={className}>
    {children}
  </StyledPageContainer>
);

export default PageContent;
