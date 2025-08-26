import type { ModalProps } from "./Modal.props";
import styles from "./Modal.module.scss";
import { LongueText } from "@atoms/index";

export default function Modal({ show, children, btn1, btn2 }: ModalProps) {
  if (!show) return null;

  const handleBtn1 = () => {
    btn1?.onClick?.();
  };
  const handleBtn2 = () => {
    btn2?.onClick?.();
  };

  return (
    <dialog className={styles.dialog} open aria-modal="true">
      <div>
        <LongueText>{children}</LongueText>
      </div>

      {(btn1 || btn2) && <hr />}
      <div className={styles.buttons}>
        {btn1 && (
          <button type="button" onClick={handleBtn1}>
            {btn1.name}
          </button>
        )}
        {btn2 && (
          <div>
            <span></span>
            <button type="button" onClick={handleBtn2}>
              {btn2.name}
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}
