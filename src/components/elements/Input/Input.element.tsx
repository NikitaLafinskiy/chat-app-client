import { Field, ErrorMessage } from 'formik';
import { InputProps } from 'types/components/elements';
import { useClasses } from 'hooks/useClasses';
import './Input.scss';

function Input({ name, style, className, type, ...rest }: InputProps) {
  const classes = useClasses('elements__input', className);
  return (
    <div className={classes} style={style}>
      <Field as={type} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default Input;
