import { Icon, Wave } from "@atoms/index";
import styles from "./Reading.module.scss";
import { TitleWithParagraph } from "@molecules/index";
export default function Reading() {
  const title = "lorem";
  return (
    <>
      <Wave />
      <div className={styles.contentFav}>
        <Icon name="favorite" title="favorite" />
      </div>
      <TitleWithParagraph title={title}>
        <p>Je proclame que Dieu transforme l’abandon en adoption.</p>
        <p>
          “Le père des orphelins, le défenseur des veuves, c’est Dieu dans sa
          demeure sainte.” Psaume 68:5
        </p>

        <p>Son amour ne connaît ni absence ni silence.</p>
        <p>“Moi, je ne t’oublierai point.” Ésaïe 49:15</p>

        <p>Quand tout semble vide, Sa parole résonne comme un écho vivant.</p>
        <p>
          “Le Seigneur est ma lumière et mon salut; de qui aurais-je peur?”
          Psaume
        </p>
      </TitleWithParagraph>
      <Wave />

      <footer className={styles.footer}>
        <nav>
          <ul>
            <li><Icon name="fire" title="feu"/></li>
            <li><Icon name="storm" title="orage"/></li>
            <li><Icon name="melody" title="musique"/></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
