import { Button, Title, Wave, Container } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";

export default function Profile() {
  return (
    <Container  aria-labelledby="profile-title">
      <Wave />
      <p>Dernière connexion le {}</p>
      <p>Dernière modification du mot de passe le {}</p>
      <Wave />
      <Title type={1} id="profile-password-title">Changer le mot de passe</Title>
      <SectionForm type="profile" />
      <Wave />
      <TitleWithParagraph title="Mes données" titleId="profile-title">
        <p>
          Vous pouvez demander l'accès à vos données personnelles et les
          recevoir par email.
        </p>
        <p>
          Vous avez également la possibilité de supprimer toutes vos données en
          supprimant votre compte.
        </p>
      </TitleWithParagraph>
      <div className="flex-end" aria-label="Actions données">
        <Button text="Demander" />
        <Button text="Supprimer" />
      </div>
    </Container>
  );
}
