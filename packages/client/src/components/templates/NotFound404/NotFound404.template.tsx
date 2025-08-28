import { Button, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";

export default function NotFound404() {
  return (
    <>
      <Wave />
      <TitleWithParagraph
        title="Cette page semble 
introuvable"
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

      <div className="flex-end">
        <Button text="Accueil" to="/" />
      </div>
    </>
  );
}
