interface SelectProps {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.CFC<SelectProps> = ({
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
