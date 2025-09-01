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
      navigator.vibrate(50);
    }

    if (isBack) {
      if (window.history.length > 1) navigate(-1);
      else navigate("/");
    } else if (to) {
      const route = to.startsWith("/") ? to : `/${to}`;
      navigate(route);
    }
  };

  return (
    <>
      {isBack ? (
        <>
          <span
            className={styles.back}
            onClick={handleClick}
            role="link"
            tabIndex={0}
            aria-label="Retour"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }}
          >
            <Icon name="arrow-back" title="Retour" />
          </span>
        </>
      ) : (
        <button className={styles.button} onClick={handleClick} aria-label={text}>
          {text}
        </button>
      )}
    </>
  );
}
