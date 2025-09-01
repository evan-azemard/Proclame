import { Wave, Container } from "@atoms/index";
import styles from "./Reading.module.scss";
import { TitleWithParagraph } from "@molecules/index";
export default function Reading() {
  const title = "lorem";
  return (
    <Container  aria-labelledby="reading-title">
      <div className={styles.reading}>
      <Wave space />
      <TitleWithParagraph title={title} titleId="reading-title">
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
      </div>
    </Container>
  );
}
