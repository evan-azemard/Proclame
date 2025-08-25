import type { WaveProps } from './Wave.props';
import styles from './Wave.module.scss';

export default function Wave({ children }: WaveProps) {
  return <div className={styles.wave}>{children}</div>;
}
