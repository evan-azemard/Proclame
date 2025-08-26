import type { HeaderNavProps } from './HeaderNav.props';
import styles from './HeaderNav.module.scss';

export default function HeaderNav({ children }: HeaderNavProps) {
  return <header className={styles.headerNav}>{children}</header>;
}
