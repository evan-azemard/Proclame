import type { SectionTableProps } from './SectionTable.props';
import styles from './SectionTable.module.scss';

export default function SectionTable({ children }: SectionTableProps) {
  return <section className={styles.sectionTable}>{children}</section>;
}
