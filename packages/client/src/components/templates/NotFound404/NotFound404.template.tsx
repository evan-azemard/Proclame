import { Button, Wave, Container } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";

export default function NotFound404() {
  return (
    <Container  aria-labelledby="not-found-title">
      <Wave />
      <TitleWithParagraph
        title="Cette page semble 
introuvable"
        titleId="not-found-title"
      >
        <p>
          Tu n’es pas censé être ici, mais tout va bien. Parfois, on cherche
          quelque chose… et on tombe ailleurs.
        </p>
        <p>
          Ce n’est peut-être pas l’endroit prévu, mais qui sait ce que tu
          pourrais y découvrir ?
        </p>
      </TitleWithParagraph>

      <div className="flex-end" aria-label="Retour accueil">
        <Button text="Accueil" to="/" />
      </div>
    </Container>
  );
}
