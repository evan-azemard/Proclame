import type { TableProps } from './Table.props';
import styles from './Table.module.scss';

export default function Table({ children }: TableProps) {
  return <table className={styles.table}>{children}</table>;
}
