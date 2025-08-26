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
    navigate(uri);
  };

  return (
    <article
      className={styles.article}
      role="article"
      aria-label={`Proclamation: ${title}`}
    >
      <header onClick={handleNavigate}>
        <Title type={2}>{title}</Title>
      </header>
      <Icon
        name="favorite"
        title="favori"
        color={isFavorite ? "#ffb44c" : "currentColor"}
        onClick={handleIconClick} // Appelle la fonction avec l'événement
        aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      />
      <main onClick={handleNavigate}>
        <p>{description}</p>
      </main>
    </article>
  );
}
