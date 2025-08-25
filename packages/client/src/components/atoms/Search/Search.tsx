import type { SearchProps } from './Search.props';
import styles from './Search.module.scss';

export default function Search({ ...rest }: SearchProps) {
  return <input type="search" className={styles.search} {...rest} />;
}
