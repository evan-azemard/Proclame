import { Button, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";

export default function Forbidden403() {
  return (
    <>
      <Wave/>
      <TitleWithParagraph title="Tu n’es pas censé être ici">
        <p>
          Mais pas de panique, tout va bien. Parfois, les portes se ferment…
          mais ça ne veut pas dire qu’il n’y a rien derrière.
        </p>
        <p>
          Peut-être que ce chemin n’était pas le bon, ou simplement pas le bon
          moment.
        </p>
      </TitleWithParagraph>
      <div className="flex-end">
        <Button text="Accueil" to="/" />
      </div>
    </>
  );
}
