import { Button, Title, Wave } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";

export default function Profile() {
  return (
    <>
      <Wave />
      <p>Dernière connexion le {}</p>
      <p>Dernière modification du mot de passe le {}</p>
      <Wave />
      <Title>Changer le mot de passe</Title>
      <br />
      <SectionForm type="profile" />
      <Wave />
      <TitleWithParagraph title="Mes données">
        <p>
          Vous pouvez demander l'accès à vos données personnelles et les
          recevoir par email.
        </p>
        <p>
          Vous avez également la possibilité de supprimer toutes vos données en
          supprimant votre compte.
        </p>
      </TitleWithParagraph>
      <div className="flex-end">
        <Button text="Demander" />
        <Button text="Supprimer" />
      </div>
    </>
  );
}
