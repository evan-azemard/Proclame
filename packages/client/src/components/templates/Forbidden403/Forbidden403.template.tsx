import { Button, Wave, Container } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { useEffect } from "react";

export default function Forbidden403() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container  aria-labelledby="forbidden-title">
      <Wave/>
      <TitleWithParagraph title="Tu n’es pas censé être ici" titleId="forbidden-title">
        <p>
          Mais pas de panique, tout va bien. Parfois, les portes se ferment…
          mais ça ne veut pas dire qu’il n’y a rien derrière.
        </p>
        <p>
          Peut-être que ce chemin n’était pas le bon, ou simplement pas le bon
          moment.
        </p>
      </TitleWithParagraph>
      <div className="flex-end" aria-label="Action retour">
        <Button text="Accueil" to="/" />
      </div>
    </Container>
  );
}
