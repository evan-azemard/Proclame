import type { TitleWithParagraphProps } from './TitleWithParagraph.props';
import styles from './TitleWithParagraph.module.scss';
import { LongueText, Title } from '@atoms/index';

export default function TitleWithParagraph({ title, children }: TitleWithParagraphProps) {
  return (
    <div className={styles.titleWithParagraph}>
      <Title type={2}>{title}</Title>
      <LongueText>{children}</LongueText>
    </div>
  );
}
