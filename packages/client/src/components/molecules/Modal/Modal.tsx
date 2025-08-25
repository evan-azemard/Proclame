import type { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';

export default function Modal({ children }: ModalProps) {
  return <div className={styles.modal}>{children}</div>;
}
