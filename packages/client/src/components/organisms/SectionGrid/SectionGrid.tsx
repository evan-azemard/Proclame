import type { SectionGridProps } from './SectionGrid.props';
import styles from './SectionGrid.module.scss';

export default function SectionGrid({ children }: SectionGridProps) {
  return <section className={styles.sectionGrid}>{children}</section>;
}
