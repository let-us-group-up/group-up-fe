import MuiIconButton from '@material-ui/core/IconButton';

enum Color {
  Inherit = 'inherit',
}

enum Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

enum Edge {
  Start = 'start',
  End = 'end',
}

interface IconButtonProps {
  color: `${Color}`;
  /**
   * For now the large size same is as the medium
   * @default 'medium'
   */
  size?: `${Size}`;
  edge?: `${Edge}`;
  ariaLabel?: string;
}

const IconButton: React.CFC<IconButtonProps> = ({
  children,
  className,
  color,
  size,
  edge,
  ariaLabel,
}) => (
  <MuiIconButton
    className={className}
    color={color}
    size={size === Size.Large ? Size.Medium : size}
    edge={edge}
    aria-label={ariaLabel}
  >
    {children}
  </MuiIconButton>
);

export default IconButton;
