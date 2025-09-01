import { Button, Wave, Container } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";
import { useEffect } from "react";

export default function Login() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container>
      <Wave />
      <SectionForm type="login" />
      <Wave />
  <TitleWithParagraph title="Politique des cookies" titleId="login-cookies-title">
        <p>
          Cette application utilise des cookies essentiels au bon fonctionnement
          de ses services.
        </p>

        <p>
          <strong>1. Cookies d’authentification</strong>
          <br />
          Des cookies sont utilisés pour enregistrer votre session et vous
          permettre de rester connecté(e) pendant votre utilisation de
          l’application.
        </p>

        <p>
          <strong>2. Cookies de session utilisateur</strong>
          <br />
          Pendant votre session, le nom d’utilisateur et l’adresse email sont
          temporairement stockés afin d’améliorer votre expérience. Ces données
          sont automatiquement supprimées à la déconnexion.
        </p>

        <p>
          <strong>3. Suppression des cookies</strong>
          <br />
          La suppression des cookies via l’application entraînera une
          déconnexion immédiate, car ces cookies sont indispensables au
          fonctionnement des services.
        </p>
      </TitleWithParagraph>
      <div className="flex-end" aria-label="Action politique cookies">
        <Button text="Accepter" />
      </div>
    </Container>
  );
}
