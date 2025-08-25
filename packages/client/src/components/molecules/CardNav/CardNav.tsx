import type { CardNavProps } from './CardNav.props';
import styles from './CardNav.module.scss';

export default function CardNav({ children }: CardNavProps) {
  return <div className={styles.cardNav}>{children}</div>;
}
