import type { CardNavProps } from "./CardNav.props";
import styles from "./CardNav.module.scss";
import { useNavigate } from "react-router-dom";

export default function CardNav({ title, uri }: CardNavProps) {
  const navigate = useNavigate();

  if (!title || !uri) return null;

  const handleClick = () => {
    navigate(uri);
  };

  return (
    <ul
      onClick={handleClick}
      className={styles.ul}
      role="menu"
      aria-label="Navigation du menu principal"
    >
      <li role="menuitem">{title}</li>
    </ul>
  );
}
