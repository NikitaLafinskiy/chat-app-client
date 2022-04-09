import { Form } from 'formik';
import { FormProps } from 'types/components/elements.d';
import { useClasses } from 'hooks/useClasses';

function FormElement({ children, style, className, ...rest }: FormProps) {
  const classes = useClasses('elements__form', className);
  return (
    <Form style={style} className={classes} {...rest}>
      {children}
    </Form>
  );
}

export default FormElement;
