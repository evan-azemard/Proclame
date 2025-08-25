import type { LabelProps } from './Label.props';
import styles from './Label.module.scss';

export default function Label({ children }: LabelProps) {
  return (
    <label className={styles.label}>
      {children}
    </label>
  );
}
