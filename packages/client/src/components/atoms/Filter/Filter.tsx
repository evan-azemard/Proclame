import type { FilterProps } from './Filter.props';
import styles from './Filter.module.scss';

export default function Filter({ children }: FilterProps) {
  return <div className={styles.filter}>{children}</div>;
}
