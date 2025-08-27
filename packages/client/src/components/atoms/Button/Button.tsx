import styles from "./Button.module.scss";
import { useNavigate } from "react-router-dom";
import Icon from "@atoms/Icon/Icon";

interface ButtonProps {
  isBack?: boolean;
  text?: string;
  to?: string;
}

export default function Button({ isBack, text, to }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if ("vibrate" in navigator) {
      // vibration API supported
      navigator.vibrate(1000);
    }

    if (isBack) {
      navigate(-1);
    } else if (to) {
      navigate(to);
    }
  };

  const className = isBack ? `${styles.button} ${styles.back}` : styles.button;

  return (
    <>
      {isBack ? (
        <>
          <button
            className={className}
            onClick={handleClick}
            aria-label={isBack ? "Retour" : undefined}
          >
            <Icon name="arrow-back" title="Retour" />
          </button>

          <br />
          <br />
        </>
      ) : (
        <button className={className} onClick={handleClick} aria-label={text}>
          {text}
        </button>
      )}
    </>
  );
}
