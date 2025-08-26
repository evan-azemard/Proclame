import type { CardCategoryProps } from "./CardCategory.props";
import styles from "./CardCategory.module.scss";
import { useNavigate } from "react-router-dom";

export default function CardCategory({
  title,
  uri,
}: CardCategoryProps) {

  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate(uri);
  };

  return (
    <article className={styles.article} onClick={handleNavigate}>
      <main>
        <h3>{title}</h3>
      </main>
    </article>
  );
}
