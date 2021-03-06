import { Form } from "formik";
import { FormProps } from "types/components/elements.d";
import { ElementHelpers } from "utils/elements/ElementsHelpers";

function FormElement({ children, style, className, ...rest }: FormProps) {
  const classes = ElementHelpers.convertClass("elements__form", className);
  return (
    <Form style={style} className={classes} {...rest}>
      {children}
    </Form>
  );
}

export default FormElement;
