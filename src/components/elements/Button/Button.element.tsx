import { ButtonProps } from "types/components/elements";
import { ElementHelpers } from "utils/elements/ElementsHelpers";
import "./Button.scss";

function Button({ children, style, className, ...rest }: ButtonProps) {
  const classes = ElementHelpers.convertClass("elements__button", className);
  return (
    <button className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}

export default Button;
