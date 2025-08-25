import type { TitleWithParagraphProps } from './TitleWithParagraph.props';
import styles from './TitleWithParagraph.module.scss';

export default function TitleWithParagraph({ title, children }: TitleWithParagraphProps) {
  return (
    <div className={styles.titleWithParagraph}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
