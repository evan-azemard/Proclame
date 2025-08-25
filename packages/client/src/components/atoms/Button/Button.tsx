import type { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export default function Button({ children, ...rest }: ButtonProps) {
  return <button className={styles.button} {...rest}>{children}</button>;
}
