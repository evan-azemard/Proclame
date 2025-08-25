import type { FooterNavProps } from './FooterNav.props';
import styles from './FooterNav.module.scss';

export default function FooterNav({ children }: FooterNavProps) {
  return <footer className={styles.footerNav}>{children}</footer>;
}
