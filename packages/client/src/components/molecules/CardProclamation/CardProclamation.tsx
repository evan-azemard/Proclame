import type { CardProclamationProps } from './CardProclamation.props';
import styles from './CardProclamation.module.scss';
import { Icon, Title } from '@atoms/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardProclamation({ title, description, uri }: CardProclamationProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const handleIconClick = () => {
    console.log("first");
    setIsFavorite((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate(uri)
  }

  return (
    <article className={styles.article} onClick={handleNavigate}>
      <header>
        <Title type={2}>{title}</Title>
        <Icon
          name="favorite"
          title="favori"
          color={isFavorite ? '#ffb44c' : 'currentColor'}
          onClick={handleIconClick}
        />
      </header>
      <main>
        <p>{description}</p>
      </main>
    </article>
  );
}
