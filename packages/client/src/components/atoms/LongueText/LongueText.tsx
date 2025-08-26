import type { LongueTextProps } from './LongueText.props';
import styles from './LongueText.module.scss';

export default function LongueText({ children }: LongueTextProps) {
  return (
    <p className={styles.longueText}>
      {children}
    </p>
  );
}
