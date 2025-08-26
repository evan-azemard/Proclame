import type { CardProclamationProps } from './CardProclamation.props';
import styles from './CardProclamation.module.scss';

export default function CardProclamation({ children }: CardProclamationProps) {
  return <div className={styles.cardProclamation}>{children}</div>;
}
