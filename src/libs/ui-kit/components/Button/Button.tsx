import MuiButton from '@material-ui/core/Button';

enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Inherit = 'inherit',
}

enum Variant {
  Contained = 'contained',
  Outlined = 'outlined',
  Text = 'text',
}

interface ButtonProps {
  color: `${Color}`;
  variant?: `${Variant}`;
}

const Button: React.CFC<ButtonProps> = ({
  children,
  className,
  variant = 'contained',
  color = 'primary',
}) => (
  <MuiButton
    className={className}
    variant={variant}
    color={color}
  >
    {children}
  </MuiButton>
);

export default Button;
