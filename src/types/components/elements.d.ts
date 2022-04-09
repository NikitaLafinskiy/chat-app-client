type BasicElement<T> = {
  style?: React.CSSProperties;
  className?: string;
} & React.ComponentProps<T>;

export interface InputProps extends BasicElement<'input'> {
  name: string;
  type?: string;
}

export interface FormProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export interface ButtonProps extends BasicElement<'button'> {
  children: React.ReactNode;
}

export interface HeaderProps extends BasicElement<'h1'> {
  children: React.ReactNode;
}
