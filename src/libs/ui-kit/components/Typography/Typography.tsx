import MuiTypography from '@material-ui/core/Typography';
import { Variant } from '../../styles/typography';

enum TagVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  DIV = 'div',
  SPAN = 'span',
}

const variantMapper = {
  [Variant.H1]: TagVariant.H1,
  [Variant.H2]: TagVariant.H2,
  [Variant.H3]: TagVariant.H3,
  [Variant.H4]: TagVariant.H4,
  [Variant.H5]: TagVariant.H5,
  [Variant.H6]: TagVariant.H6,
  [Variant.Body1]: TagVariant.P,
  [Variant.Body2]: TagVariant.P,
  [Variant.Button]: TagVariant.P,
  [Variant.Caption]: TagVariant.P,
  [Variant.Overline]: TagVariant.P,
  [Variant.Subtitle1]: TagVariant.H6,
  [Variant.Subtitle2]: TagVariant.H6,
};

interface TypographyProps {
  /**
   * @default 'body1'
   */
  variant?: `${Variant}`;
  /**
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';
  /**
   * @default 'depends on variant'
   */
  component?: `${TagVariant}`;
}

const Typography: React.CFC<TypographyProps> = ({
  children,
  className,
  variant = Variant.Body1,
  color,
  component = variantMapper[variant],
}) => (
  <MuiTypography
    className={className}
    variant={variant}
    color={color}
    component={component}
  >
    {children}
  </MuiTypography>
);

export default Typography;
