import { ButtonProps } from 'types/components/elements';
import { useClasses } from 'hooks/useClasses';

function Button({ children, style, className, ...rest }: ButtonProps) {
  const classes = useClasses('elements__button', className);
  return (
    <button className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}

export default Button;
