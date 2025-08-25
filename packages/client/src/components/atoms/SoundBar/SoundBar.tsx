import type { SoundBarProps } from './SoundBar.props';
import styles from './SoundBar.module.scss';

export default function SoundBar({ children }: SoundBarProps) {
  return <div className={styles.soundBar}>{children}</div>;
}
