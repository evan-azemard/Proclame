import type { SectionFormProps } from './SectionForm.props';
import styles from './SectionForm.module.scss';

export default function SectionForm({ children }: SectionFormProps) {
  return <section className={styles.sectionForm}>{children}</section>;
}
