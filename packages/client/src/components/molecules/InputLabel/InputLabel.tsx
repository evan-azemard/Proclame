import type { InputLabelProps } from './InputLabel.props';
import styles from './InputLabel.module.scss';

export default function InputLabel({ label, children }: InputLabelProps) {
  return <label className={styles.inputLabel}>{label}{children}</label>;
}
