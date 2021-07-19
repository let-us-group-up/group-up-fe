interface OptionProps {
  value: string;
}

const Option: React.CFC<OptionProps> = ({
  children,
  className,
  value,
}) => (
  <option
    className={className}
    value={value}
  >
    {children}
  </option>
);

export default Option;
