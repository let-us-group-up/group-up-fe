const PageContainer: React.CFC = ({
  children, className,
}) => (
  <div className={className}>
    {children}
  </div>
);

export default PageContainer;
