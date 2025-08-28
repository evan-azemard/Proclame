import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';
import type { BreadcrumbProps } from './BreadCrumb.props';

export default function Breadcrumb({ pages }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.inlineBreadcrumb}>
        {pages.map((page, index) => (
          <li key={index}>
            <Link to={page.path}>{page.name}</Link>
            {index < pages.length - 1 && <span>&nbsp;/&nbsp;</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
