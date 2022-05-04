import { HeaderProps } from "types/components/elements";
import { ElementHelpers } from "utils/elements/ElementsHelpers";

function Header({ children, style, className, ...rest }: HeaderProps) {
  const classes = ElementHelpers.convertClass("elements__header", className);
  return (
    <h1 className={classes} style={style} {...rest}>
      {children}
    </h1>
  );
}

export default Header;
