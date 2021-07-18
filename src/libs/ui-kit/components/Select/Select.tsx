interface SelectProps {
  className?: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  children,
  className,
  value,
  onChange,
}) => (
  <select
    className={className}
    value={value}
    onChange={onChange}
  >
    {children}
  </select>
);

export default Select;
