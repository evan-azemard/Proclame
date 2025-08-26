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

  return (
    <button className={styles.button} onClick={handleClick}>
      {isBack ? <Icon name="arrow-back" title="Retour" /> : text}
    </button>
  );
}
