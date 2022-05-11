import { Field, ErrorMessage } from "formik";
import { InputProps } from "types/components/elements";
import { ElementHelpers } from "utils/elements/ElementsHelpers";
import "./Input.scss";

function Input({ name, style, className, type, ...rest }: InputProps) {
  const classes = ElementHelpers.convertClass("elements__input", className);
  return (
    <div className={classes} style={style}>
      <Field autocomplete='off' as={type} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default Input;
