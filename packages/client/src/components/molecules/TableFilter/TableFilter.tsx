import type { TableFilterProps } from './TableFilter.props';
import styles from './TableFilter.module.scss';

export default function TableFilter({ children }: TableFilterProps) {
  return <div className={styles.tableFilter}>{children}</div>;
}
