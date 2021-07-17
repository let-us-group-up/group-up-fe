import { styled } from '../../styles';

const StyledPageContainer = styled('div')(({ theme }) => `
  padding-right: ${theme.spacing(3)};
  padding-left: ${theme.spacing(3)};
`);

interface PageContentProps {
  className?: string;
}

const PageContent: React.FC<PageContentProps> = ({
  children, className,
}) => (
  <StyledPageContainer className={className}>
    {children}
  </StyledPageContainer>
);

export default PageContent;
