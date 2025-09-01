import type { TitleWithParagraphProps } from './TitleWithParagraph.props';
import styles from './TitleWithParagraph.module.scss';
import { Title } from '@atoms/index';
import { Children } from 'react';

export default function TitleWithParagraph({ title, children, titleId }: TitleWithParagraphProps) {
  const childrenArray = Children.toArray(children);

  return (
    <div className={styles.titleWithParagraph}>
  <Title type={2} id={titleId}>{title}</Title>

      {childrenArray.map((child, idx) => (
        <span key={idx}>
          <br />
          {child}
        </span>
      ))}
    </div>
  );
}
