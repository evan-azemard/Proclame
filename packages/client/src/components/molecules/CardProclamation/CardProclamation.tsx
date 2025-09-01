import type { CardProclamationProps } from "./CardProclamation.props";
import styles from "./CardProclamation.module.scss";
import { Icon, Title } from "@atoms/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardProclamation({
  title,
  description,
  uri,
}: CardProclamationProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleNavigate = () => {
    if (window?.navigator?.vibrate) window.navigator.vibrate(30);
    navigate(uri);
  };

  return (
    <article
      className={styles.article}
      role="article"
      aria-label={`Proclamation: ${title}`}
    >
      <header className={styles.header} onClick={handleNavigate}>
        <div className={styles.titleWrap}>
          <Title type={2}>{title}</Title>
        </div>
          <Icon
            name="favorite"
            title="favori"
            color={isFavorite ? "#ebe2d5ff" : "currentColor"}
            onClick={(e) => {
              e.stopPropagation();
              handleIconClick();
            }}
            aria-label={
              isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
            }
          />
      </header>
      <main className={styles.main} onClick={handleNavigate}>
        <p className={styles.desc}>{description}</p>
      </main>
    </article>
  );
}
