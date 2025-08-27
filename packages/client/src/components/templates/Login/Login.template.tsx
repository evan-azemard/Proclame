import { Button, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";

export default function Login() {
  return (
    <>
      <Button isBack={true} />
      <Wave />
      <SectionForm type="login" />
      <Wave />
      <TitleWithParagraph title="Politique des cookis">
        Cette application utilise des cookies essentiels au bon fonctionnement
        de ses services. 1. Cookies d’authentification Des cookies sont utilisés
        pour enregistrer votre session et vous permettre de rester connecté(e)
        pendant votre utilisation de l’application. 2. Cookies de session
        utilisateur Pendant votre session, le nom d’utilisateur et l’adresse
        email sont temporairement stockés afin d’améliorer votre expérience. Ces
        données sont automatiquement supprimées à la déconnexion. 3. Suppression
        des cookies La suppression des cookies via l’application entraînera une
        déconnexion immédiate, car ces cookies sont indispensables au
        fonctionnement des services.
      </TitleWithParagraph>
      <div className="flex-end">
        <Button text="Accepter" />
      </div>
    </>
  );
}