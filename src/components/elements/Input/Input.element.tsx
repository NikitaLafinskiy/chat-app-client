import { Field, ErrorMessage } from "formik";
import { InputProps } from "types/components/elements";
import { ElementHelpers } from "utils/elements/ElementsHelpers";
import "./Input.scss";

function Input({ name, style, className, ...rest }: InputProps) {
  const classes = ElementHelpers.convertClass("elements__input", className);
  return (
    <div className={classes} style={style}>
      <Field autoComplete='off' name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default Input;
