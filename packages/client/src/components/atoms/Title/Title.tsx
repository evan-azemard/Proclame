import type { TitleProps } from './Title.props';
import styles from './Title.module.scss';

export default function Title({ children }: TitleProps) {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  );
}
