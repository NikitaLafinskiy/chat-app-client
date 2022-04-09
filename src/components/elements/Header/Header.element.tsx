import { HeaderProps } from 'types/components/elements';
import { useClasses } from 'hooks/useClasses';

function Header({ children, style, className, ...rest }: HeaderProps) {
  const classes = useClasses('elements_header', className);
  return (
    <h1 className={classes} style={style} {...rest}>
      {children}
    </h1>
  );
}

export default Header;
