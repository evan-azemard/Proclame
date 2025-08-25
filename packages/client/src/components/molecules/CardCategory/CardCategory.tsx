import type { CardCategoryProps } from './CardCategory.props';
import styles from './CardCategory.module.scss';

export default function CardCategory({ children }: CardCategoryProps) {
  return <div className={styles.cardCategory}>{children}</div>;
}
