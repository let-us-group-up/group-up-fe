interface OptionProps {
  className?: string;
  value: string;
}

const Option: React.FC<OptionProps> = ({
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
