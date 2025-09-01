
import type { ContainerProps } from "./Container.props";
import styles from './Container.module.scss';

export default function Container({ children, ...props }: ContainerProps) {
   return (
      <section className={styles.container} {...props}>{children}</section>
   );
}

