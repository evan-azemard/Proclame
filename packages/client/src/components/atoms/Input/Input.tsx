import type { InputProps } from './Input.props';
import styles from './Input.module.scss';

export default function Input({ ...rest }: InputProps) {
  return <input className={styles.input} {...rest} />;
}
