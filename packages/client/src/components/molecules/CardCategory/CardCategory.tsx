import type { CardCategoryProps } from './CardCategory.props';
import styles from './CardCategory.module.scss';
import { Icon, Title } from '@atoms/index';
import { useState } from 'react';

export default function CardCategory({ title, description }: CardCategoryProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = () => {
    console.log("first");
    setIsFavorite((prev) => !prev);
  };

  return (
    <article className={styles.article}>
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
