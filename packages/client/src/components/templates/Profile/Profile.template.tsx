import { Button, Title, Wave, Container } from "@atoms/index";
import { TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";
import styles from "./Profile.module.scss";
import { useEffect } from "react";

export default function Profile() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container aria-labelledby="profile-title">
      <Wave />
      <table className={styles.profileTable}>
        <tbody>
          <tr>
            <th style={{ textAlign: "left", paddingRight: 16 }}>Dernière connexion</th>
            <td>01/09/2025 à 14:32</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left", paddingRight: 16 }}>Dernière modification du mot de passe</th>
            <td>28/08/2025 à 09:17</td>
          </tr>
        </tbody>
      </table>
      <Wave />
      <Title type={1} id="profile-password-title">
        Changer le mot de passe
      </Title>
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
