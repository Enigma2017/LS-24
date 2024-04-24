
export const Button = ({
  link,
  className,
  variant,
  label,
  children,
  ...props
}) => {
  const renderClass = () => {
    switch (variant) {
      case "primary":
        return `btn trend-btn ${className || ""}`;
        break;
    }
  };

  const Element = link ? "a" : "button";

  return (
    <Element href={link} className={renderClass()} {...props}>
      {label || children}
    </Element>
  );
};
